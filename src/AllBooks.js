import { useContext } from "react";
import { NavLink ,Link} from "react-router-dom";
import { DataContext } from "./DataContext";

export function AllBooks() {
  let { setRead } = useContext(DataContext);
  let { books } = useContext(DataContext);
  let { favBooksFun } = useContext(DataContext);
  let { fav } = useContext(DataContext);
  let { seachBooks } = useContext(DataContext);
  let { searchedBooks } = useContext(DataContext);
  return (
    <div>
      <input
        onChange={seachBooks}
        type="text"
        style={{
          margin: "2rem",
          borderRadius: "0.4rem",
          borderColor: "lightblue"
        }}
        placeholder="search by name"
      />{" "}
      <div>
        {searchedBooks.map((book) => (
          <ul
            style={{
              listStyle: "none",
              border: "1px solid grey",
              borderRadius: "4px",
              margin: "auto",
              width: "50%"
            }}
          >
            <img
              alt="Loading..."
              style={{
                height: "5rem",
                width: "5rem",
                padding: "2rem",

                margin: "auto"
              }}
              src={book.image}
            />
            <li>title : {book.title}</li>
            <li>author : {book.author}</li>
            <li>publisher : {book.publisher}</li>
          </ul>
        ))}
        <p style={{ color: "grey" }}>-------------------------------</p>
      </div>
      <div
        className="allbooks"
        style={{ display: "flex", margin: "0.3rem", flexWrap: "wrap" }}
      >
        {books.map((book) => (
          <ul
            className="mainbox"
            style={{
              display: "flex",
              flexDirection: "column",
              listStyle: "none",
              border: "1px solid grey",
              borderRadius: "4px",
              margin: "auto",
              width: "80%",
              padding:"2rem",
              color:"white",
            //   backgroundColor: "white",
            
              marginBottom: "1rem",
              height: "23rem"
            }}
          >
            <img
              alt="Loading..."
              style={{
                borderRadius: "0.5rem",
                position:"absolute",
                height: "20rem",
                width: "15rem",
                padding: "2rem",
                marginLeft: "2rem",
                marginTop:"-2rem",
               
              }}
              src={book.image}
            />
            <li>Title : {book.title}</li>
            {/* readHere:"https://docs.google.com/viewer?a=v&pid=sites&srcid=YW5udXJpc2xhbWljc2Nob29sLm9yZ3xzaXN0ZXIta2F0ZWx5bnxneDo2NjVmZmE1NzNjNjc4NWM", */}
            {/* <li>Read :<link to="book.readHere"> </link>Read Link</li> */}
           
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
            <Link to={`${book.readHere}`}><span style={{marginTop:"0.5rem",border:"1px solid white", borderRadius:"6px",padding:"0.2rem", color:"white",textDecoration:"none"}}>Read Book</span></Link>
            <button
              onClick={() => setRead(book)}
              style={{
                border: "2px solid",
                borderColor: "lightblue",
                borderRadius: "0.5rem",
                margin: "auto",
                width: "6rem",
                marginBottom: "-11rem",
                marginTop: "0.3rem"
              }}
              disabled={book.read === true ? "disabled" : ""}
            >
              {book.read === true ? "already read" : "mark as read"}
            </button>
            <button
              onClick={() => favBooksFun(book)}
              style={{
                border: "2px solid",
                borderColor: "lightblue",
                margin: "auto",
                borderRadius: "0.5rem",
                width: "6rem"
              }}
            >
              {fav.includes(book) ? (
                <NavLink
                  style={{ color: "black", textDecoration: "none" }}
                  to="/fav"
                >
                  go to fav
                </NavLink>
              ) : (
                "add to fav"
              )}
            </button>
          </ul>
        ))}
      </div>
    </div>
  );
}
