import FlapComponent from "./flapcomponent"
import SectionTitle from "./sectiontitle"

function About() {
    return (
        <div className="flex flex-col gap-10 px-14">
            <div>
                <SectionTitle title="About Me"/>
            </div>
            <div className="flex flex-row flex-wrap border-2 rounded-md border-black min-h-[75vh] bg-linear-[25deg,#272727,#0C0D0F,#1E1E1E] sm:bg-linear-[55deg,#2E2C2D,#272727,#1F1F1D,#0C0D0F,#2E2C2D] px-16 py-16 gap-2">
                <FlapComponent num={1}/>
            </div>
        </div>
        
    )
}

export default About 