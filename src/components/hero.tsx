function Hero() {
    return (
        <div className="text-black flex flex-col-reverse sm:flex-row items-center justify-between px-14 py-40 gap-4 sm:gap-6 md:gap-10 lg:gap-20">
            <div className="flex flex-col text-center sm:text-left gap-2 sm:gap-4" >
                <h1 className="font-semibold md:font-normal text-3xl sm:text-4xl md:text-6xl lg:text-[5rem]">MATT KOSZEWICZ</h1>
                <h2 className="md:max-w-[80%] font-light sm:text-base md:text-base lg:text-xl">I love problem solving and have worked on startups (see <a href="" className="underline">Score</a>, <a href="" className="underline">Telemate</a>) all throughout college so far. Presently a rising junior studying CS + Psych at BU.</h2>
            </div>
            <img src='public/HeadshotTrimmed.png'  alt="My headshot" className="rounded-full w-40 sm:w-56 md:w-60 lg:w-80 h-auto"/>
        </div>
    )
}

export default Hero