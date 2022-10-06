import React from "react";
import Book from "./Book";

function Home({ ebooks }) {
  return (
    <div>
      {ebooks.map((ebook) => {
        return (
        <Book key={ebook.id} ebook ={ebook}/>
        );
      })}
    </div>
    
  );
}

export default Home;
