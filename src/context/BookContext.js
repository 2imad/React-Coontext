import React, { createContext ,useState } from 'react';

export const BookContext = createContext();


const BookContextProvider = (props) => {
    const [books, setBooks] = useState([
        {title:'into the wind',id:1},
        {title:'Another story for the night',id:2},
        {title:'Get into the wild',id:3},
        {title:'the Shawshank redemption',id:4}
    ]);
    return (
      <BookContext.Provider value={{books}}>
          {props.children}
      </BookContext.Provider>
    )
}


export default BookContextProvider