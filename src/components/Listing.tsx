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
    <div className="bg-tussock-200 rounded p-5 relative">
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
        <p className="font-botoni capitalize text-xl">{title}</p>
        <p></p>
      </div>
      <div>
        <p>by {author}</p>
      </div>
      <div>
        <p className="capitalize">{genre}</p>
      </div>
      <div className="pt-5">
        <p>Notes:</p>
        <p>{notes}</p>
      </div>
    </div>
  );
};

export default Listing;
