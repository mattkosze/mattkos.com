type SectionTitleProps = {
    title: string
}

function SectionTitle({ title }: SectionTitleProps) {
    return (
        <>
            <h3 className="inline-block rounded-full px-3 py-1 text-black border-2 border-solid border-[rgba(0,0,0,0.0)] [box-shadow:0_0_4px_0_rgba(0,0,0,0.1)] text-sm ">{title}</h3>
        </>
    )
}

export default SectionTitle