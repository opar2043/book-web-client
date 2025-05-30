import React, { useEffect, useState } from "react";
import Title from "../Shared/Title";
import Card from "./Card";
import { Link } from "react-router-dom";

const Books = () => {
  const [books, setBooks] = useState([]);
  useEffect(() => {
    fetch("/book.json")
      .then((res) => res.json())
      .then((data) => {
        setBooks(data);
      });
  }, []);

  return (
    <div className="my-8 md:my-14">
      <Title head={"Books"} head2={"Card"}></Title>
      <div>
        <div className="flex justify-between my-4">
          <div></div>
          <div>
            <Link to={"/allbook"}>
              <button className="bg-color px-2 py-1 rounded-sm text-white text-sm hover:bg-pink-500">
                Show All Books
              </button>
            </Link>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-2">
          {books && books.slice(0, 4).map((book) => <Card book={book}></Card>)}
        </div>
      </div>
    </div>
  );
};

export default Books;
