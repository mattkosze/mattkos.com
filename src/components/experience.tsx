import { useState } from "react"
import ProjectCard from "./projectcard"
import SectionTitle from "./sectiontitle"

// Define data structure for each project/experience
type Project = {
    id: string,
    path: string,
    altText: string,
    logoPath: string,
    title: string,
    subtitle: string,
    date: string,
    description: string
}

function Experience() {
    // Define all project data
    const projects: Project[] = [
        {
            id: "bu",
            path: "https://mattkos-cicd.s3.us-east-2.amazonaws.com/BU.png",
            altText: "Boston University",
            logoPath: "https://mattkos-cicd.s3.us-east-2.amazonaws.com/BU.png",
            title: "Boston University",
            subtitle: "BS in Computer Science, Psychology Minor",
            date: "September 2023 - May 2027",
            description: "Spending a few years doing stuff :). Most of my time is spent at Innovate@BU working on personal projects and sliding in homework somewhere along the way. Particularly enjoyed algorithms, linear algebra, and psychology.\n\nSpending my sophomore summer doing the BU Summer Accelerator for my startup Score.\n\nVery blessed to have a lot of great mentors at the BUild lab and the surrounding Boston startup ecosystems."
        },
        {
            id: "score",
            path: "https://mattkos-cicd.s3.us-east-2.amazonaws.com/Score.png",
            altText: "Score Law",
            logoPath: "https://mattkos-cicd.s3.us-east-2.amazonaws.com/ScoreBlack.png",
            title: "Score Law",
            subtitle: "Co-Founder",
            date: "January 2025 - Present",
            description: "My first real \"startup\". Building a tool that allows criminal defense attorneys to see how a judge will rule bail, motions, and even sentencing for their specific case.\n\nLed a team of 4 and responsible for product, market discovery, and strategy; held over 70 customer discovery calls; affected the outcomes of multiple court cases; piloting the software with 14 attorneys.\n\nOne of 12 startups in the 2025 BU Summer Accelerator."
        },
        {
            id: "telemate",
            path: "https://mattkos-cicd.s3.us-east-2.amazonaws.com/Telemate.png",
            altText: "Telemate",
            logoPath: "https://mattkos-cicd.s3.us-east-2.amazonaws.com/TelemateDark.png",
            title: "Telemate AI",
            subtitle: "Co-Founder",
            date: "February 2024 - November 2024",
            description: "A lot of painful lessons here. Building an AI-phone receptionist for restaurants that could make reservations, take orders answer questions -- all while sounding human.\n\nA masterclass in what not to do: omitting validation, muddling validation and sales, building before knowing about the market, the list goes on and I'll make a blog post about this at some point.\n\nAssembled our team of me and three friends; created NLP models to aid in reservation scheduling; learned to write really detailed competitive analyses."
        },
        {
            id: "914creps",
            path: "https://mattkos-cicd.s3.us-east-2.amazonaws.com/914creps.png",
            altText: "914creps",
            logoPath: "https://mattkos-cicd.s3.us-east-2.amazonaws.com/914creps.png",
            title: "914creps",
            subtitle: "Sole Proprietor",
            date: "Your date range",
            description: "Started a reselling business during my sophomore year of high school and did about $48K YoY selling everything from Ps5's to fertilizer.\n\nOne day, I accidentally bought $1400 worth of shoes that I couldn't resell - all because I had no idea if they were profitable. That led to a project called ResellX, a tool that scraped resale prices in seconds so you could know if a purchase was worth your money. That failed because I was non-technical and hired a random to build it for me. We were too slow and the reselling market soon collapsed."
        },
        {
            id: "tks",
            path: "https://mattkos-cicd.s3.us-east-2.amazonaws.com/TKS.png",
            altText: "The Knowledge Society",
            logoPath: "https://mattkos-cicd.s3.us-east-2.amazonaws.com/TKS.png",
            title: "The Knowledge Society",
            subtitle: "Student or \"Innovator\"",
            date: "September 2019 - June 2020",
            description: "Recommended to this program by my 8th grade principal it's probably one of the most foundational things to who I am today. Getting exposed to the startup environment at that age gave me a very \"startup-y\" mindset and both that and the connections still pay dividends today.\n\nCreated solutions for the Barclays Center, Kidogo, and Lego; learned a lot about space propulsion too.\n\nI also met Evan Spiegel and made an insanely cringey post about it on Linkedin. Still cool though."
        }
    ]

    // Set default selected project (BU)
    const [selectedProject, setSelectedProject] = useState<Project>(projects[0])

    return (
        <div className="flex flex-col justify-center gap-20 pb-30 px-2 sm:px-14">
            <div>
                <SectionTitle title="Experience" />
            </div>
            <div className="flex flex-col gap-10">
                <div className="flex justify-center">
                    <div className="flex flex-row overflow-x-auto overflow-x-auto gap-5 pb-4">
                        {projects.map((project) => (
                            <ProjectCard 
                                key={project.id}
                                path={project.path} 
                                altText={project.altText}
                                onClick={() => setSelectedProject(project)}
                            />
                        ))}
                    </div>
                </div>
                <div className="flex flex-col-reverse min-h-[50vh] sm:min-h-[30vh] sm:flex-row justify-between items-center gap-10">
                    <div className="sm:max-w-[60%] text-center sm:text-left text-black">
                        <h1 className="text-lg">
                            {selectedProject.description.split('\n\n').map((paragraph, i) => (
                                <span key={i}>
                                    {paragraph}
                                    {i < selectedProject.description.split('\n\n').length - 1 && (
                                        <><br/><br/></>
                                    )}
                                </span>
                            ))}
                        </h1>
                    </div>
                    <div className="flex flex-col gap-2 text-center sm:text-right items-center sm:items-end text-black bg-navy">
                        <div className="h-[50px] flex items-center justify-center">
                            <img src={selectedProject.logoPath} alt={`${selectedProject.title} Logo`} className="max-w-[150px] max-h-[50px] object-contain"/>
                        </div>
                        <h4 className="text-xl font-medium">{selectedProject.title}</h4>
                        <h5>{selectedProject.subtitle}</h5>
                        <h5>{selectedProject.date}</h5>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Experience