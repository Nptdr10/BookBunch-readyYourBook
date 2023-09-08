import { createContext, useContext, useEffect, useState } from "react";
import { fakeFetch } from "./fakeFetch";

export const DataContext = createContext();

export const DataProvider = ({ children }) => {
  const [books, setBooks] = useState([]);
  const [fav, setFav] = useState([]);
  const [read, setRd] = useState([]);
  const [searchedBooks, setSearch] = useState([]);

  // setting read books by the users
  const setRead = (obj) => {
    obj.read = true;
    setBooks((book) => [...book]);
    setRd(books.filter((book) => book.read === true));
  };
  //  fav book length
  const favLength = fav.length;
  const favBooksFun = (obj) => {
    if (!fav.includes(obj)) {
      setFav((book) => [...book, obj]);
    }
  };
  //  for seraching the books by name
  const seachBooks = (event) => {
    setSearch(books.filter((book) => book.title === event.target.value));
  };

  console.log(searchedBooks);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fakeFetch("https://example.com/api/books");

        setBooks(res.data.books);
        setRd(res.data.book.filter((book) => book.read === true));
      } catch (e) {
        console.log(e);
      }
    };
    fetchData();
  }, []);

  const readBooks = books.filter((book) => book.read === true);
  const numberOfReads = readBooks.length;

  return (
    <DataContext.Provider
      value={{
        books,
        setRead,
        numberOfReads,
        read,
        favLength,
        favBooksFun,
        fav,
        seachBooks,
        searchedBooks
      }}
    >
      {children}
    </DataContext.Provider>
  );
};
