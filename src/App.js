import "./styles.css";
import { AllBooks } from "./AllBooks";
import { NavLink } from "react-router-dom";
import { Route, Routes } from "react-router-dom";
import { Read } from "./pages/Read";
import { Profile } from "./pages/Profile";
import { Fav } from "./pages/Fav";
import { useContext } from "react";
import { DataContext } from "./DataContext";

export default function App() {
  let { favLength } = useContext(DataContext);
  let { numberOfReads } = useContext(DataContext);
  return (
    <div className="App">
      <h1>Welcome to book app </h1>

      <nav
        style={{
          border: "1px solid",
          borderColor: "lightblue",
          borderRadius: "0.6rem",
          backgroundColor: "white",
          height: "1rem",
          padding: "1rem",
          margin: "2rem",
          display: "flex",
          justifyContent: "space-evenly"
        }}
      >
        <NavLink style={{ color: "black", textDecoration: "none" }} to="/">
          {" "}
          Home{" "}
        </NavLink>

        <NavLink style={{ color: "black", textDecoration: "none" }} to="/fav">
          {" "}
          Fav({favLength})
        </NavLink>
        <NavLink style={{ color: "black", textDecoration: "none" }} to="/read">
          {" "}
          read({numberOfReads})
        </NavLink>
        <NavLink
          style={{ textDecoration: "none", color: "black" }}
          to="/profile"
        >
          Profile
        </NavLink>
      </nav>
      <NavLink
        style={{
          color: "black",
          marginTop: "1rem",
          padding: "1rem",
          backgroundColor: "white",
          border: "3px solid white",
          borderRadius: "0.7rem",
          borderColor: "lightblue",
          textDecoration: "none"
        }}
        to="/allbooks"
      >
        View all books
      </NavLink>
      <Routes>
        <Route path="/" />
        <Route path="/allbooks" element={<AllBooks />} />
        <Route path="/read" element={<Read />} />
        <Route path="/fav" element={<Fav />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </div>
  );
}
