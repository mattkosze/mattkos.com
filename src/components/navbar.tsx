function Navbar() {
    return (
        <div className="flex justify-between items-center px-8 py-4 pt-8 text-outerspace">
            <div className="text-lg">
                MATT KOSZEWICZ
            </div>
            <div className="flex justify-between w-full max-w-sm text-sm font-medium">
                <a href="/reading">READING</a>
                <a href="/blog">BLOG</a>
                <a href="https://github.com/mattkosze">GITHUB</a>
                <a href="https://www.linkedin.com/in/matthew-koszewicz/">LINKEDIN</a>
            </div>
        </div>
    )
}

export default Navbar