type ElementNum = {
    num: number
}

function FlapComponent({ num }: ElementNum) {
    return (
        <div className="rounded-xs border-x-[.4px] border-x-neutral-700 bg-[#18181A] w-7 h-8 flex justify-center items-center">
            <h4 className="text-lg" id={`field_${num}`}>X</h4>
        </div>
    )
}

export default FlapComponent