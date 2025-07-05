import { useState, useRef, useEffect } from "react"
import FlapComponent from "./flapcomponent"
import SectionTitle from "./sectiontitle"

const Abouts = [
    "Rising junior studying CS and psychology at Boston Uni. Previously a finance major for two days.",
    "80% of my time is spent at Innovate@BU working on projects. Have learned a lot of things the hard way. Check out my blog.",
    "I love discovering problems and creating products to solve them. It's the ultimate way to create value.",
    "Very passionate about skiing, reading, and seeing new places. Recently explored Copenhagen during a four hour layover at CPH. Would totally recommend."
]

function About() {
    const [flapCount, setFlapCount] = useState(1)
    const containerRef = useRef<HTMLDivElement>(null)
    const [currentTextIndex, setCurrentTextIndex] = useState(0)
    const [isInitialLoad, setIsInitialLoad] = useState(true)
    const [flapsPerRow, setFlapsPerRow] = useState(0)
    const [totalRows, setTotalRows] = useState(0)
    const [targetLetters, setTargetLetters] = useState<(string | null)[]>([])
    const textRotationTimerRef = useRef<NodeJS.Timeout | null>(null)

    const calculateFlaps = () => {
        if (!containerRef.current) return null

        // Get container dimensions
        const containerStyle = window.getComputedStyle(containerRef.current)
        const paddingLeft = parseFloat(containerStyle.paddingLeft)
        const paddingRight = parseFloat(containerStyle.paddingRight)
        
        // Calculate available width more accurately
        const containerWidth = containerRef.current.clientWidth - paddingLeft - paddingRight
        
        // Account for gap between flaps (2px from your CSS)
        const flapWidth = 36
        const gapSize = 8
        
        const flapsInRow = Math.max(1, Math.floor((containerWidth + gapSize) / flapWidth))
        
        const minFlaps = 140
        const totalRows = Math.ceil(minFlaps / flapsInRow)
        const totalFlaps = totalRows * flapsInRow

        return { flapsInRow, totalFlaps, totalRows }
    }

    const formatTextForDisplay = (text: string, flapsPerLine: number, rows: number, totalFlaps: number) => {
        if (!text || flapsPerLine <= 0) return []

        // Create a more robust word wrapping algorithm
        const words = text.split(" ")
        const textLines: string[] = []
        let currentLine = ""
        let currentLineLength = 0
        
        // Process each word, considering actual length + space
        for (const word of words) {
            // Account for space + word length
            const wordWithSpace = currentLineLength > 0 ? " " + word : word
            
            // Check if adding this word would exceed the line length
            if (currentLineLength + wordWithSpace.length <= flapsPerLine) {
                currentLine += wordWithSpace
                currentLineLength += wordWithSpace.length
            } else {
                // If the word itself is longer than a line, we need to split it
                if (word.length >= flapsPerLine) {
                    // If we have content on the current line, push it first
                    if (currentLine) {
                        textLines.push(currentLine)
                    }
                    
                    // Split long word across multiple lines
                    let remainingWord = word
                    while (remainingWord.length > 0) {
                        const chunk = remainingWord.substring(0, flapsPerLine)
                        textLines.push(chunk)
                        remainingWord = remainingWord.substring(flapsPerLine)
                    }
                    
                    // Reset for next line
                    currentLine = ""
                    currentLineLength = 0
                } else {
                    // Push current line and start a new one with this word
                    textLines.push(currentLine)
                    currentLine = word
                    currentLineLength = word.length
                }
            }
        }
        
        // Don't forget the last line
        if (currentLine) {
            textLines.push(currentLine)
        }
        
        // Create result array with null placeholders
        const result: (string | null)[] = Array(totalFlaps).fill(null)
        
        // Center text vertically
        const verticalOffset = Math.max(0, Math.floor((rows - textLines.length) / 2))
        
        // Place each line in the result array
        for (let lineIndex = 0; lineIndex < textLines.length; lineIndex++) {
            const line = textLines[lineIndex]
            
            // Center the line horizontally
            const horizontalOffset = Math.floor((flapsPerLine - line.length) / 2)
            const rowStart = (verticalOffset + lineIndex) * flapsPerLine
            
            // Add each character to the result
            for (let charIndex = 0; charIndex < line.length; charIndex++) {
                const position = rowStart + horizontalOffset + charIndex
                if (position < totalFlaps) {
                    result[position] = line[charIndex]
                }
            }
        }
        
        return result
    }

    useEffect(() => {
        const setupDisplay = () => {
            const flaps = calculateFlaps()
            if (flaps) {
                const { flapsInRow, totalFlaps, totalRows } = flaps
                
                setFlapsPerRow(flapsInRow)
                setTotalRows(totalRows)
                setFlapCount(totalFlaps)
                
                setTargetLetters(Array(totalFlaps).fill(null))
                
                setTimeout(() => {
                    setIsInitialLoad(false)
                }, 500)
            }
        }
        
        const initialTimer = setTimeout(setupDisplay, 100)
        
        const handleResize = () => {
            const flaps = calculateFlaps()
            if (flaps) {
                const { flapsInRow, totalFlaps, totalRows } = flaps
                
                if (flapsInRow !== flapsPerRow || totalFlaps !== flapCount || totalRows !== totalRows) {
                    setFlapsPerRow(flapsInRow)
                    setTotalRows(totalRows)
                    setFlapCount(totalFlaps)
                    
                    if (!isInitialLoad) {
                        const formattedText = formatTextForDisplay(
                            Abouts[currentTextIndex].toUpperCase(),
                            flapsInRow,
                            totalRows,
                            totalFlaps
                        )
                        setTargetLetters(formattedText)
                    }
                }
            }
        }
        
        window.addEventListener('resize', handleResize)
        
        const resizeObserver = new ResizeObserver(handleResize)
        if (containerRef.current) {
            resizeObserver.observe(containerRef.current)
        }
        
        return () => {
            clearTimeout(initialTimer)
            window.removeEventListener('resize', handleResize)
            resizeObserver.disconnect()
            
            if (textRotationTimerRef.current) {
                clearTimeout(textRotationTimerRef.current)
            }
        }
    }, [])

    useEffect(() => {
        if (isInitialLoad) return
        
        const flaps = calculateFlaps()
        if (!flaps) return

        const { flapsInRow, totalRows, totalFlaps } = flaps
        
        // Calculate how the text should be displayed
        const formattedText = formatTextForDisplay(
            Abouts[currentTextIndex].toUpperCase(),
            flapsInRow,
            totalRows,
            totalFlaps
        )
        
        // Set the target letters
        setTargetLetters(formattedText)
        
        // Clear any existing rotation timer
        if (textRotationTimerRef.current) {
            clearTimeout(textRotationTimerRef.current)
        }
        
        // Schedule the next text change after animation completes plus viewing time
        // Animation takes ~2 seconds (based on the interval in FlapComponent)
        const animationTime = 2500 // 2.5 seconds for animation to complete
        const viewingTime = 12500 // 12.5 seconds for reading
        
        textRotationTimerRef.current = setTimeout(() => {
            setCurrentTextIndex((prevIndex) => (prevIndex + 1) % Abouts.length)
        }, animationTime + viewingTime)
        
        return () => {
            if (textRotationTimerRef.current) {
                clearTimeout(textRotationTimerRef.current)
            }
        }
    }, [currentTextIndex, isInitialLoad])

    return (
        <div className="flex flex-col gap-10 px-2 sm:px-14">
            <div>
                <SectionTitle title="About Me"/>
            </div>
            <div ref={containerRef} className="flex flex-row flex-wrap border-2 rounded-md border-black bg-linear-[25deg,#272727,#0C0D0F,#1E1E1E] px-4 py-6 md:px-16 md:py-16 gap-2 gap-y-4 justify-center" style={{width:'100%'}}>
                {Array.from({ length: flapCount }, (_, index) => (
                    <FlapComponent 
                        key={index} 
                        num={index + 1} 
                        targetLetter={targetLetters[index] || null}
                    />
                ))}
            </div>
        </div>
    )
}

export default About