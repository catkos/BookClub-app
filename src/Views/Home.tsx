import { useEffect, useState } from "react";
import Listing from "../components/Listing";
import NewListingForm from "../components/NewListingForm";

import type { Books } from "../types/books";

const Home = () => {
  /*
  const initialBooks = [
    {
      id: 0,
      title: "dsad",
      author: "afdaf",
      genre: "horror",
      notes: "ufdsjf",
    },
    {
      id: 1,

      title: "ffsa",
      author: "afdaf",
      genre: "romance",
      notes: "ufdsjf",
    },
    {
      id: 2,

      title: "dsada",
      author: "afdaf",
      genre: "horror",
      notes: "ufdsjf",
    },
  ];
  */
  const [books, setBooks] = useState<Books[]>(() => {
    const saved = localStorage.getItem("books");
    const initialValue = saved ? JSON.parse(saved) : [];
    return initialValue;
  });

  const newBook = (newBook: Books) => {
    setBooks((prevBooks) => [...prevBooks, newBook]);
  };

  const deleteBook = (bookId: number) => {
    console.log("delete clicked", bookId);
    setBooks(books.filter((a) => a.id !== bookId));
  };

  useEffect(() => {
    localStorage.setItem("books", JSON.stringify(books));
  }, [books]);

  return (
    <>
      <section className="py-20 flex flex-col gap-10 w-full">
        <article className="flex flex-col gap-5">
          <p className="text-white uppercase font-botoni text-2xl">
            - Add a New Book
          </p>
          <NewListingForm onFormSubmit={newBook} />
        </article>
        <article className="">
          <p className="text-white uppercase font-botoni text-2xl pb-5">
            - Books
          </p>
          <ul className="grid grid-cols-1 md:grid-cols-4 gap-2 w-full">
            {books.map((book) => (
              <li
                key={book.id}
                className="w-full bg-linear-to-t/oklab from-tussock-200 from-70% to-tussock-300 rounded p-5 relative h-full flex gap-2 flex-col drop-shadow-lg"
              >
                <Listing book={book} deleteListing={deleteBook} />
              </li>
            ))}
          </ul>
        </article>
      </section>
    </>
  );
};

export default Home;
