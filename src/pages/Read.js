import { useContext, useState } from "react";
import { DataContext } from "../DataContext";

export function Read() {
  let { setRead } = useContext(DataContext);

  let { books } = useContext(DataContext);

  let { favBooksFun } = useContext(DataContext);

  let { numberOfReads } = useContext(DataContext);

  let ReadedBooks = books.filter((book) => book.read === true);
  return (
    <>
      <h1>Read page:{numberOfReads}</h1>
      {ReadedBooks.map((book) => (
        <ul
          style={{
            listStyle: "none",
            border: "2px solid grey",
            borderRadius: "1rem",
            backgroundColor: "white"
          }}
          s
        >
          <img
            alt="Loading..."
            style={{ height: "6rem", width: "6rem", padding: "2rem" }}
            src={book.image}
          />
          <li>Title : {book.title}</li>
          <li>Author : {book.author}</li>
          <li>Publisher : {book.publisher}</li>
          <li> {book.year}</li>
          <li>Price : {book.price}</li>
          <li>
            <span style={{ color: "" }}>status:</span>{" "}
            <span style={{ color: book.read === true ? "green" : "red" }}>
              {" "}
              {book.read === true ? "completed" : "read it"}
            </span>
          </li>

          <button
            onClick={() => favBooksFun(book)}
            style={{ margin: "1rem", borderRadius: "1rem" }}
          >
            add to fav
          </button>
        </ul>
      ))}
    </>
  );
}
