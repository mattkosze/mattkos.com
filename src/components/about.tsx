import { useState, useRef, useEffect } from "react"
import FlapComponent from "./flapcomponent"
import SectionTitle from "./sectiontitle"

const Options = [
    "Rising junior studying CS + Psych at Boston University. Previously a finance major for two days.",
    "80% of my time is spent at Innovate@BU working on projects. Much of that time is in the pain cave, figuring out what works and what doesn’t, but that teaches entrepreneurship at 20x speed. Have learned a lot of things the hard way. Check out my blog.",
    "I love discovering problems and creating products to solve them. It’s the ultimate way to create value.",
    "Very passionate about skiing, reading, and seeing new places. Recently explored Copenhagen during a four hour layover at CPH. Would totally recommend."
]

function About() {
    const [flapCount, setFlapCount] = useState(1)
    const containerRef = useRef<HTMLDivElement>(null)

    const calculateFlaps = () => {
        if (!containerRef.current) return

        const containerWidth = (containerRef.current.clientWidth) - 128

        console.log(`The display width is: ${containerWidth}`)

        const flapWidth = 36

        const flapsPerRow = Math.max(1, Math.floor(containerWidth/flapWidth))

        const minFlaps = 300
        const totalRows = Math.ceil(minFlaps/flapsPerRow)
        const totalFlaps = totalRows * flapsPerRow
        console.log(`The total num of flaps is: ${totalFlaps}`)

        setFlapCount(totalFlaps)
    }

    useEffect(() => {
        const initialTimer = setTimeout(calculateFlaps, 100)
        
        window.addEventListener('resize', calculateFlaps)
        
        const resizeObserver = new ResizeObserver(() => {
            calculateFlaps()
        })
        
        if (containerRef.current) {
            resizeObserver.observe(containerRef.current)
        }
        
        return () => {
            clearTimeout(initialTimer)
            window.removeEventListener('resize', calculateFlaps)
            resizeObserver.disconnect()
        }
    }, [])

    return (
        <div className="flex flex-col gap-10 px-14">
            <div>
                <SectionTitle title="About Me"/>
            </div>
            <div ref={containerRef} className="flex flex-row flex-wrap border-2 rounded-md border-black bg-linear-[25deg,#272727,#0C0D0F,#1E1E1E] px-16 py-16 gap-2 justify-center" style={{width:'100%'}}>
                {Array.from({ length: flapCount }, (_, index) => (
                    <FlapComponent key={index} num={index + 1} />
                ))}
            </div>
        </div>
        
    )
}

export default About 