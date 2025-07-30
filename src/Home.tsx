import { useEffect, useState } from "react";
import Listing from "./components/Listing";
import NewListingForm from "./components/NewListingForm";

import type { Books } from "./types/books";

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
      <section className="bg-white p-0 h-52 w-full">
        <h1 className="font-botoni text-tussock-950 leading-none text-9xl font-bold relative -left-5 -top-5 -bottom-5">
          Book <span className="block">Club</span>
        </h1>
      </section>
      <section className="py-20 flex flex-col gap-10">
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
          <ul className=" grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-5">
            {books.map((book) => (
              <li key={book.id} className="">
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
