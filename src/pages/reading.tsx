import { Bookshelf } from "../components/bookshelf"
import { BookReviews } from "../components/bookreviews"

function getBooks() {
    return;
}

function Reading() {
    return (
        <div className="flex justify-center py-20">
            <div className="flex flex-col justify-center max-w-[80%] md:max-w-[60%] lg:max-w-[50%]">
                <Bookshelf/>
                <BookReviews/>
            </div>
        </div>
    )
}

export default Reading