type ProjectCardProps = {
    path: string,
    altText: string,
    isSelected?: boolean,
    onClick?: () => void,
}

function ProjectCard({ path, altText, isSelected = false, onClick }: ProjectCardProps) {
    return (
        <div 
            className="bg-[#1E1E1E] border-1 border-black rounded-md aspect-square flex items-center justify-center min-w-40 sm:min-w-50 cursor-pointer transition-all"
            onClick={onClick}
        >
            <img src={path} alt={altText} className="max-h-10 max-w-30 object-contain"/>
        </div>
    )
}

export default ProjectCard