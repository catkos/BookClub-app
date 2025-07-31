import type { Books } from "../types/books";

interface ListingProps {
  book: Books;
  deleteListing: (id: number) => void;
}

const Listing = ({ book, deleteListing }: ListingProps) => {
  const { id, title, author, genre, notes } = book;

  // TO-DO: make a custom pop up alert
  const handleDelete = () => {
    const confirmed = window.confirm(
      `Are you sure you want to delete "${title}"?`
    );
    if (confirmed) {
      deleteListing(id);
    }
  };

  return (
    <div className="">
      <button
        className="absolute right-4 cursor-pointer h-6 w-6 hover:text-white transition-colors"
        onClick={() => handleDelete()}
      >
        <svg
          aria-hidden="true"
          fill="none"
          strokeWidth={1.5}
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M6 18 18 6M6 6l12 12"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>
      <div>
        <div className="font-botoni capitalize text-xl flex gap-5 items-baseline pr-[20px] md:pr-0">
          <div className="h-6 w-6">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              viewBox="0 0 32 32"
            >
              <path
                fill="currentColor"
                d="M4 9.5V9a1.5 1.5 0 0 1 1.5-1.5h8c1.043 0 1.963.533 2.5 1.341A3 3 0 0 1 18.5 7.5h8A1.5 1.5 0 0 1 28 9v.5h.499c1.105 0 2.001.89 2.001 1.995v16l-.001.067v.933c0 .827-.67 1.505-1.501 1.505H17.732a1.999 1.999 0 0 1-3.464 0H3c-.83 0-1.501-.668-1.501-1.495v-17.01c0-1.105.896-1.995 2.001-1.995zm1.5-1A.5.5 0 0 0 5 9v15a.5.5 0 0 0 .5.5h8.264a2.5 2.5 0 0 1 1.736.701V10.5a2 2 0 0 0-2-2zm11 2v14.701a2.5 2.5 0 0 1 1.736-.701H26.5a.5.5 0 0 0 .5-.5V9a.5.5 0 0 0-.5-.5h-8a2 2 0 0 0-2 2m-.498 15.378h-.004l.002.004zM3.322 10.516a.995.995 0 0 0-.822.98v16.009c0 .55.445.995 1.001.995h11.055l.144.25a1.5 1.5 0 0 0 2.6 0l.144-.25h11.055c.552 0 1.001-.451 1.001-1.005v-16a.995.995 0 0 0-.823-.98L29 11v14.5a1.5 1.5 0 0 1-1.5 1.5H16.559L16 28.118L15.441 27H4.5A1.5 1.5 0 0 1 3 25.5V11z"
              />
            </svg>
          </div>
          <p>{title}</p>
        </div>
        <p></p>
      </div>
      <div>
        <p>by {author}</p>
      </div>
      <div>
        <p className="capitalize">{genre}</p>
      </div>
      <div className="pt-5">
        <p>{notes}</p>
      </div>
    </div>
  );
};

export default Listing;
