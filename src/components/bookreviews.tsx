import { Books } from "./bookshelf"

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