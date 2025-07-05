type ElementNum = {
    num: number
}

function FlapComponent({ num }: ElementNum) {
    return (
        <div className="rounded-xs bg-black w-7 h-8 flex justify-center items-center">
            <h4 className="text-xl" id={`field_${num}`}>A</h4>
        </div>
    )
}

export default FlapComponent