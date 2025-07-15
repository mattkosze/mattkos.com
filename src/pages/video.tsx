function Video() {
    return (
        <div className="flex flex-col-reverse md:flex-col justify-center gap-10 py-30 sm:py-10">
            <h1 className="text-xl md:text-2xl font-medium text-neutral-800">That's me on the right!</h1>
            <div className="flex justify-center">
                <iframe width="600" height="400" src="https://www.youtube.com/embed/CjSKxJjnbfI?si=WPWCK9_ddnghIlVy" title="The Telemate Demo" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
            </div>
        </div>
    )
}

export default Video