import React from "react";

function Book({ ebook }) {
  return (
    <div className="book-parent">
      <div className="book-collection">
        <div className="book-card">
          <img src={ebook.image} alt="images"></img>

          <h2>{ebook.title}</h2>

          <p>{ebook.publishedDate}</p>
        </div>
        <div className="book-description"></div>
      </div>
    </div>
  );
}
export default Book;
