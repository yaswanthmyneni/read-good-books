import React from "react";
import "./styles.css";
import { useState } from "react";

const bookDB = {
  javascript: [
    { name: "Eloquent JavaScript", rating: "4/5" },
    { name: "You Don't Know JS", rating: "3.5/5" },
    { name: "Javascript with Promises", rating: "4.25/5" },
  ],

  fiction: [
    {
      name: "Shiva Trilogy",
      rating: "5/5",
    },
    {
      name: "Harry Potter and the Sorcerer's Stone",
      rating: "4.5/5",
    },
    {
      name: "The Alchemist",
      rating: "4/5",
    },
  ],
  business: [
    {
      name: "Never Split the Difference",
      rating: "3.5/5",
    },
    {
      name: "Loonshots",
      rating: "5/5",
    },
    {
      name: "The Lean StartUp",
      rating: "4.5/5",
    },
  ],
};

export default function App() {
  const [selectedGenre, setGenre] = useState("javascript");
  function genreClickHandler(genre) {
    setGenre(genre);
  }
  return (
    <div
      className="App"
      style={{
        backgroundColor: "red",
        borderRadius: "0.4rem",
        marginTop: "3rem",
      }}
    >
      <h1 style={{ color: "white" }}> Read Good Books </h1>
      <h4 style={{ fontSize: "small" }}>
        {" "}
        Checkout my favorite books. Select a genre to get started{" "}
      </h4>

      <div>
        {Object.keys(bookDB).map((genre) => (
          <button
            onClick={() => genreClickHandler(genre)}
            style={{
              cursor: "pointer",
              background: "white",
              borderRadius: "0.5rem",
              padding: "0.5rem  1rem",
              border: "1px solid black",
              margin: "1rem 0.3rem",
            }}
          >
            {genre}
          </button>
        ))}
      </div>
      <hr />
      <div style={{ textAlign: "left" }}>
        <ul style={{ paddingInlineStart: "0" }}>
          {bookDB[selectedGenre].map((book) => (
            <li
              key={book.name}
              style={{
                listStyle: "none",
                padding: "1rem",
                border: "none",
                width: "70%",
                margin: "1rem 0rem",
                borderRadius: "0.5rem",
                backgroundColor: "white",
              }}
            >
              <div style={{ fontSize: "larger" }}> {book.name} </div>
              <div style={{ fontSize: "smaller" }}> {book.rating} </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
