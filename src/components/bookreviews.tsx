const Books = [
    {title: "The Prince", cover: "https://cdn.kobo.com/book-images/a319db5c-ee33-41d3-b25b-c64e3921f618/1200/1200/False/the-prince-13.jpg", author: "Niccolo Machiavelli", date: "2023, 2024", spineColour: "#7c5c3b", textColour: "#000000", rating: 5, description: "Arguably my favourite book ever, and one that I've read twice and try to re-read every so often.\nWritten by Machiavelli for the rulers of the Medici family, it gives out a lot of timeless wisdom that (with a bit of imagination) still applies today.\nMemorable from cover to cover, but I particularly like the section about military versus mercenary, where Machiavelli details the advantages of having your own dedicated army. Holds true today with the value of having your early team be missionaries about the product and company, because they're unlikely to go the extra mile otherwise."},
    {title: "The Mom Test", cover: "https://m.media-amazon.com/images/I/61ixLoT4lyL.jpg", author: "Rob Fitzpatrick", date: "2024", spineColour: "#ec1384", textColour: "#000000", rating: 5, description: "An essential guide on how to ask the right questions. If an entrepreneur could read only one book, it should be this.\nFew books provide this much value in this dense a package, and I say that in the best way possible. It succinctly describes everything an entrepreneur needs to know about validation and the lessons learned here are in large part what helped me guide over 70 customer discovery and sales calls sucessfully.\nP.S. It doesn't actually involve your mom... "},
    {title: "Hard Thing About Hard Things", cover: "https://m.media-amazon.com/images/I/810u9MkT3SL.jpg", author: "Ben Horowitz", date: "2024", spineColour: "#101010", textColour: "#fc7900", rating: 5, description: "One of my favorite books. I would say it's most about the managerial side of things rather than the actual startup phase, but a great read nonetheless and one of my personal favorites.\nLove how it's really grounded and avoids a bunch of the classic 'business book' fluff that is so pervasive everywhere else."},
    {title: "Venture Deals", cover: "https://m.media-amazon.com/images/I/71uAXl4fuJL._AC_UF1000,1000_QL80_.jpg", author: "Brad Feld", date: "May 2025", spineColour: "#f3f3f3", textColour: "#000000", rating: 3.7, description: "A great introduction to the VC world. Balances storytelling and direct value pretty well, but more focused on the latter. Written by two active VCs, it provides a great insider's perspective on what to look for.\nOften referenced by people I consider to be mentors, I thought it wouldn't hurt to take a look. I don't regret it. Even if you aren't actively looking for financing, it's key to understand how the ecosystem works and whether your business fits the venture capital profile -- because not every idea does."},
    {title: "The Wealth of Nations", cover: "https://m.media-amazon.com/images/I/71ANvymikVL._AC_UF1000,1000_QL80_.jpg", author: "Adam Smith", date: "2025", spineColour: "#0b2e14", textColour: "#F5F5DC", rating: 3.5, description: "\"The accommodation of an industrious and frugal peasant... exceeds that of many an African king.\"\nAt ~1200 pages, it's hard to have a good a low fluff/value ratio. But, an interesting read to anyone interested in economic theory and its origins.\nPublished in 1776, the examples are very outdated, but the gist of many holds surprisingly well. Effectively a discourse on mercantilism, Smith argues for minimal government intervention -- except matters of the \"greater good,\" in which rational actors may not produce the necessary outcome.\nI find the book particularly interesting because his laissez-faire economic theories are evident in later developments by Keynes and Marx, making the book relevant in debates so prevalent today."},
    {title: "Zero to One", cover: "https://m.media-amazon.com/images/I/51zGCdRQXOL.jpg", author: "Peter Thiel", date: "2025", spineColour: "#506b75", textColour: "#E5E4E2", rating: 3, description: "My take on this book is probably pretty controversial. I thought it to be full of fluff. Peter Thiel is undoubtedly super smart, but this book just didn't really resonate with me -- yet I always hear praise about it. May have to give it a re-read."},
    {title: "Platform Revolution", cover: "https://m.media-amazon.com/images/I/5134puEw9+L._UF350,350_QL50_.jpg", author: "Marshall Van Alstyne", date: "2025", spineColour: "#c2c2c2", textColour: "#000000", rating: 4, description: "A very interesting read on the topic of platform dynamics.\nRead this back while we were working on Score as a platform for quantitatively discovering attorneys, and it served as an interesting resource. It's particularly detailed on different types of market entry strategies, network effects, and one thing I've thought about nonstop since: multihoming.\nMultihoming is when your users use multiple platforms to perform one task, i.e. if I'm trying to find jobs on LinkedIn and Facebook. Naturally, I as either company want to service more users to reduce multihoming and therefore strengthen my userbase -- and that's a framework that sticks with me even in non-platform settings."},
    {title: "The Lean Startup", cover: "https://m.media-amazon.com/images/I/71sxTeZIi6L.jpg", author: "Eric Ries", date: "2025", spineColour: "#66b3de", textColour: "#ffffff", rating: 4, description: "Read this at an inflection point in my startup journey, and it motivated me to work harder and faster while testing and iterating in very tight cycles. Would absolutely recommend to everyone and anyone, and I think it's one of those books you just need to read as an entrepreneur."},
    {title: "Thinking Fast and Slow", cover: "https://m.media-amazon.com/images/I/61fdrEuPJwL.jpg", author: "Daniel Kahneman", date: "2025", spineColour: "#ececec", textColour: "#000000", rating: 4.5, description: "I initially took psychology as my senior year elective in high school, but it was because I thought it would be easy. That class sparked a deep interest in the topic, and I'm even minoring in it in college right now.\nThis is a book that develops on many topics which I've been learning about, so it's fascinating to really think about how our human psychology affects our behaviour -- and often irrationally so."},
    {title: "The Power Broker", cover: "https://m.media-amazon.com/images/I/81sw84h-ZTL._AC_UF1000,1000_QL80_.jpg", author: "Robert A. Caro", date: "2025", spineColour: "#8d1b1b", textColour: "#FFFFFF", rating: 4, description: "A story of unparalleled depth, impact, and awful length. A book about a figure so controversional yet so prominent in the life of New Yorker and, arguably, every American.\nRobert Moses' transformation from quiet and unpopular at Yale to loud and known at Oxford translates to a reflection of his life. A life with noble beginnings, later plagued with unchecked ambition and ego that were equally fascinating and terrifying."},
    {title: "The Charisma Myth", cover: "https://m.media-amazon.com/images/I/81hS0u0bqXL.jpg", author: "Olivia Fox Cabane", date: "2024", spineColour: "#0c4901", textColour: "#FFFFFF", rating: 4, description: "A book that, paired with Dale Carnegie's classic, changed my opinion on charisma and life. Growing up, I always thought of charisma (in many things, particularly sales) as a gift I didn't necessarily have. Yet, it turns out everything is a mindset.\nLessons from this book largely gave me the confidence to build my charisma and reputation as a trustworthy person, even while selling into a notoriously closed market (legal). "},
    {title: "How to Win Friends and Influence People", cover: "https://m.media-amazon.com/images/I/71vK0WVQ4rL.jpg", author: "Dale Carnegie", date: "2024", spineColour: "#d31717", textColour: "#000000", rating: 4, description: "Probably THE book about how to improve yourself. I've fundamentally learned that everything in business (and in life) comes down to your relationships, and this is a key tool to improve on those.\nA book that's fundamentally about maximizing your social factor and using it to create a better life and a better world."},
    {title: "Statistics 4th Edition", cover: "https://m.media-amazon.com/images/I/51+Dm4dgucL.jpg", author: "David Freedman", date: "2024", spineColour: "#012b0a", textColour: "#FFFFFF", rating: 3, description: "I firmly believe that understanding statistics enhances your understanding of the world. Also, allegedly, one of Ken Griffin's recommended books. \nUnsurprisingly, it's a little bit outdated. Still, great examples and very intuitive. However, anyone looking for a refresher on statistics, choose a more recent book or edition of it."},
    {title: "Built to Last", cover: "https://m.media-amazon.com/images/I/61-+RJemWdL._AC_UF1000,1000_QL80_.jpg", author: "Jim Collins", date: "2024", spineColour: "#e6dfd7", textColour: "#000000", rating: 4, description: "Read this right after reading Good to Great, and when I look back on it, the two are kind of a blur. Nothing revelational in this book -- it’s more about the habits and characteristics of visionary companies that endure over time. Still, an interesting read nonetheless. I especially liked the idea of 'preserve the core, stimulate progress,' and I think I resonate with the mindset of building something that lasts rather than chasing short-term wins."},
    {title: "Good to Great", cover: "https://m.media-amazon.com/images/I/41VaIAIo4XL._SY445_SX342_PQ35_.jpg", author: "Jim Collins", date: "2023", spineColour: "#cc2b1e", textColour: "#000000", rating: 3, description: "Probably one of the first books I forced myself to read before I got into college. At the time, I thought I was so cool for reading it, but it’s really nothing too special. The whole 'Level 5 Leadership' thing and the Hedgehog Concept were interesting, but looking back, it felt more like a collection of business clichés dressed up in case studies. Still, it had a few takeaways that stuck."},
    {title: "Life 3.0", cover: "https://m.media-amazon.com/images/I/81f4l5CHA0L._SY522_.jpg", author: "Max Tegmark", date: "2024", spineColour: "#1b0c18", textColour: "#ffffff", rating: 3.5, description: "A book that has become kind of outdated with recent developments in AI, but very interesting nonetheless.\nA fictional story presented in a non-fictional-esque light, but even more interesting because I could easily see certain things in the book happening. Despite that, it started feeling a bit repetitive and far out after a while."},
]

export type Book = {
    title: string;
    cover: string;
    author: string;
    date: string;
    spineColour: string;
    textColour: string;
    rating: number;
    description: string;
}

function BookCard({ book } : {book: Book}) {
    const descriptionSplit = book.description.split('\n');
    const bookId = `book-review-${book.title.toLowerCase().replace(/\s+/g, '-')}`;

    return (
        <div id={bookId}>
            <hr className="reviewDivider"/>
            <div className="flex gap-5">
                <img className="h-[130px] border-1 border-black/10" src={book.cover} alt={`${book.title} cover`} />
                <div className="flex flex-col items-start">
                    <h2 className="text-lg text-neutral-950 font-medium">{book.title}</h2>
                    <p className="mb-1 text-sm text-neutral-600">{book.author}</p>
                    <div className="flex flex-row gap-2 text-sm text-neutral-700 mb-3">
                        <p style={{margin: 0}}>Rating: {book.rating}/5</p>
                        <hr style={{margin: 0}}/>
                        <p style={{margin: 0}}>Read: {book.date}</p>
                    </div>
                    <div className="text-left text-[15px] text-neutral-950">
                        {descriptionSplit.map((paragraph, index) => (
                            <p key={index} style={{marginTop: index === 0 ? 0 : '0.5rem'}}>
                                {paragraph}
                            </p>
                        ))}
                    </div>                
                </div>
            </div>
        </div>
    )
}

export function BookReviews() {
    return (
        <div className="flex flex-col">
            {Books.map((book) => <BookCard book={book} key={book.title}/>)}
        </div>
    )
}