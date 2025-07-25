function Hero() {
    return (
        <div className="text-black flex flex-col-reverse sm:flex-row items-center justify-between px-14 py-40 gap-4 sm:gap-6 md:gap-10 lg:gap-20">
            <div className="flex flex-col text-center sm:text-left gap-2 sm:gap-4" >
                <h1 className="font-semibold md:font-normal text-3xl sm:text-4xl md:text-6xl lg:text-[5rem]">MATT KOSZEWICZ</h1>
                <h2 className="md:max-w-[80%] font-light sm:text-base md:text-base lg:text-xl">I love problem solving and have worked on startups (see Score, Telemate) all throughout college so far. Presently a rising junior studying CS + Psych at BU.</h2>
            </div>
            <img src='https://mattkos-cicd.s3.us-east-2.amazonaws.com/HeadshotTrimmed.png'  alt="My headshot" className="rounded-full w-40 sm:w-56 md:w-60 lg:w-80 h-auto"/>
        </div>
    )
}

export default Hero