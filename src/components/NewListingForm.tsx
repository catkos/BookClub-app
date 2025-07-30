import type { Books } from "../types/books";

interface NewListingFormProps {
  onFormSubmit: (data: Books) => void;
}

const NewListingForm: React.FC<NewListingFormProps> = ({ onFormSubmit }) => {
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const form = e.currentTarget as HTMLFormElement;
    const formData = new FormData(form);

    const rawData = Object.fromEntries(formData.entries());

    const newEntry: Books = {
      id: Date.now(),
      title: rawData.title as string,
      author: rawData.author as string,
      genre: rawData.genre as string,
      notes: rawData.notes as string,
    };

    console.log(newEntry);
    onFormSubmit(newEntry);

    /*form.reset();*/
  };
  return (
    <>
      <form
        onSubmit={handleSubmit}
        className="flex flex-col gap-5 items-center justify-center w-full md:w-1/2"
      >
        <fieldset className="flex flex-col w-full gap-3">
          <div className="relative w-auto">
            <label htmlFor="title" className="absolute hidden">
              Title
            </label>
            <input
              id="title"
              type="text"
              name="title"
              className="bg-white text-black p-2 rounded w-full"
              placeholder="Title"
            />
          </div>
          <div className="relative w-auto">
            <label htmlFor="author" className="absolute hidden">
              Author
            </label>
            <input
              id="author"
              type="text"
              name="author"
              className="bg-white text-black p-2 rounded w-full"
              placeholder="Author"
            />
          </div>
          <div className="relative w-auto">
            <label htmlFor="genre" className="absolute hidden">
              Genre
            </label>
            <input
              id="genre"
              type="text"
              name="genre"
              className="bg-white text-black p-2 rounded w-full"
              placeholder="Genre"
            />
          </div>
          <div className="relative w-auto">
            <label htmlFor="notes" className="absolute hidden">
              Notes
            </label>
            <textarea
              id="notes"
              name="notes"
              className="bg-white text-black p-2 rounded w-full align-top"
              placeholder="Notes"
            />
          </div>
        </fieldset>

        <button className="rounded bg-white p-5 w-full md:w-1/2 font-botoni font-bold hover:bg-tussock-500 transition-all cursor-pointer">
          Add New
        </button>
      </form>
    </>
  );
};

export default NewListingForm;
