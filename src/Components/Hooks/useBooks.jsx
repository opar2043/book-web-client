import React, { useEffect, useState } from 'react'

const useBooks = () => {
  const [books , setBooks] = useState();
  useEffect(()=>{
    fetch('https://book-web-seconed.vercel.app/books')
    .then(data => data.json())
    .then(res => setBooks(res.data))
    console.log(books);
  },[books])

  
     return [books]
}



export default useBooks
