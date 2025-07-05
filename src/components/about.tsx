import { useState, useRef, useEffect } from "react"
import FlapComponent from "./flapcomponent"
import SectionTitle from "./sectiontitle"

const Abouts = [
    "Rising junior studying CS and psychology at Boston University. Previously a finance major for two days.",
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

        const containerWidth = (containerRef.current.clientWidth) - 128
        const flapWidth = 36

        const flapsInRow = Math.max(1, Math.floor(containerWidth/flapWidth))
        
        const minFlaps = 140
        const totalRows = Math.ceil(minFlaps/flapsInRow)
        const totalFlaps = totalRows * flapsInRow

        return { flapsInRow, totalFlaps, totalRows }
    }

    const formatTextForDisplay = (text: string, flapsPerLine: number, rows: number, totalFlaps: number) => {
        if (!text || flapsPerLine <= 0) return []

        const words = text.split(" ")
        const textLines: string[] = []
        let currentLine = ""
        
        for (const word of words) {
            if (currentLine.length + word.length + (currentLine.length > 0 ? 1 : 0) <= flapsPerLine) {
                currentLine = currentLine ? `${currentLine} ${word}` : word
            } else {
                textLines.push(currentLine)
                currentLine = word
            }
        }
        if (currentLine) {
            textLines.push(currentLine)
        }
        
        const result: (string | null)[] = Array(totalFlaps).fill(null)
        
        const verticalOffset = Math.max(0, Math.floor((rows - textLines.length) / 2))
        
        for (let lineIndex = 0; lineIndex < textLines.length; lineIndex++) {
            const line = textLines[lineIndex]
            const horizontalOffset = Math.floor((flapsPerLine - line.length) / 2)
            const rowStart = (verticalOffset + lineIndex) * flapsPerLine
            
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
        
        const formattedText = formatTextForDisplay(
            Abouts[currentTextIndex].toUpperCase(),
            flapsInRow,
            totalRows,
            totalFlaps
        )
        setTargetLetters(formattedText)
        
        if (textRotationTimerRef.current) {
            clearTimeout(textRotationTimerRef.current)
        }
        
        textRotationTimerRef.current = setTimeout(() => {
            setCurrentTextIndex((prevIndex) => (prevIndex + 1) % Abouts.length)
        }, 15000)
        
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
            <div ref={containerRef} className="flex flex-row flex-wrap border-2 rounded-md border-black bg-linear-[25deg,#272727,#0C0D0F,#1E1E1E] px-4 py-6 sm:px-16 sm:py-16 gap-2 gap-y-4 justify-center" style={{width:'100%'}}>
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