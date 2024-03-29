// import React from "react";
// import "./styles.css";
// import { useState } from "react";

// const bookDB = {
//   javascript: [
//     { name: "Eloquent JavaScript", rating: "4/5" },
//     { name: "You Don't Know JS", rating: "3.5/5" }
//   ],

//   fiction: [
//     {
//       name: "Shiva Trilogy",
//       rating: "5/5"
//     },
//     {
//       name: "Harry Potter and the Sorcerer's Stone",
//       rating: "4.5/5"
//     }
//   ],
//   business: [
//     {
//       name: "Never Split the Difference",
//       rating: "3.5/5"
//     },
//     {
//       name: "Loonshots",
//       rating: "5/5"
//     }
//   ]
// };

// export default function App() {
//   const [selectedGenre, setGenre] = useState("business");
//   function genreClickHandler(genre) {
//     setGenre(genre);
//   }
//   return (
//     <div className="App">
//       <h1> 📚 goodbooks </h1>
//       <p style={{ fontSize: "smaller" }}>
//         {" "}
//         Checkout my favorite books. Select a genre to get started{" "}
//       </p>

//       <div>
//         {Object.keys(bookDB).map((genre) => (
//           <button
//             onClick={() => genreClickHandler(genre)}
//             style={{
//               cursor: "pointer",
//               background: "#E5E7EB",
//               borderRadius: "0.5rem",
//               padding: "0.5rem  1rem",
//               border: "1px solid black",
//               margin: "1rem 0.3rem"
//             }}
//           >
//             {genre}
//           </button>
//         ))}
//       </div>
//       <hr />
//       <div style={{ textAlign: "left" }}>
//         <ul style={{ paddingInlineStart: "0" }}>
//           {bookDB[selectedGenre].map((book) => (
//             <li
//               key={book.name}
//               style={{
//                 listStyle: "none",
//                 padding: "1rem",
//                 border: "1px solid #D1D5DB",
//                 width: "70%",
//                 margin: "1rem 0rem",
//                 borderRadius: "0.5rem"
//               }}
//             >
//               {" "}
//               <div style={{ fontSize: "larger" }}> {book.name} </div>
//               <div style={{ fontSize: "smaller" }}> {book.rating} </div>
//             </li>
//           ))}
//         </ul>
//       </div>
//     </div>
//   );
// }

import React from "react";
import "./styles.css";
import { useState } from "react";
var books = {
  JavaScript: [
    {
      name: "Javascript The Good Parts",
      rating: "4/5"
    },
    {
      name: "Clean Code in JavaScript ",
      rating: "5/5"
    }
  ],

  fiction: [
    {
      name: "The Girl Who Drank the Moon ",
      rating: "5/5"
    },
    {
      name: "Ghosts of The Silent Hills: Stories based on true hauntings",
      rating: "4/5"
    }
  ],
  business: [
    {
      name: "Before You Start Up",
      rating: "4/5"
    },
    {
      name: "The Tatas",
      rating: "5/5"
    }
  ]
};
var BooksWehave = Object.keys(books);

export default function App() {
  var [generSelect, setGener] = useState("business");
  function genreClickHandler(book) {
    setGener(book);
  }

  return (
    <div className="App">
      <h1>📚 goodBooks</h1>
      <p>Checkout my favorite books. Select a genre to get started</p>
      <div>
        {BooksWehave.map(function (book) {
          return (
            <button onClick={() => genreClickHandler(book)}>{book}</button>
          );
        })}
      </div>
      <hr />
      <div style={{ textAlign: "left" }}></div>
      <ul>
        {books[generSelect].map(function (bookName) {
          return (
            <li>
              <div>{bookName.name}</div>
              <div>{bookName.rating}</div>
            </li>
          );
        })}
      </ul>
    </div>
  );
}