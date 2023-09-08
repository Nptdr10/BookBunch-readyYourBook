import { useContext } from "react";
import { DataContext } from "../DataContext";

export function Fav() {
  const { fav } = useContext(DataContext);
  const { favLength } = useContext(DataContext);
  const { setRead } = useContext(DataContext);
  return (
    <>
      <h1>Fav:{favLength}</h1>
      {fav.map((book) => (
        <ul
          style={{
            listStyle: "none",
            border: "1px solid grey",
            borderRadius: "4px"
          }}
        >
          <img
            alt="Loading..."
            style={{ height: "6rem", width: "6rem", padding: "2rem" }}
            src={book.image}
          />
          <li>title : {book.title}</li>
          <li>author : {book.author}</li>
          <li>publisher : {book.publisher}</li>
          <li> {book.year}</li>
          <li>price : {book.price}</li>
          <li>
            <span style={{ color: "white" }}>status:</span>{" "}
            <span style={{ color: book.read === true ? "green" : "red" }}>
              {" "}
              {book.read === true ? "completed" : "read it"}
            </span>
          </li>
          <button
            onClick={() => setRead(book)}
            style={{ borderRadius: "1rem", margin: "1rem" }}
            disabled={book.read === true ? "disabled" : ""}
          >
            mark as read
          </button>
        </ul>
      ))}
    </>
  );
}
