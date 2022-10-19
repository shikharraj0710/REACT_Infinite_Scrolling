import React, { useState, useRef, useCallback } from "react";
import Header from "./components/Header";
import 'bootstrap/dist/css/bootstrap.min.css';
import Form from 'react-bootstrap/Form';
import UseBookSearch from "./hooks/UseBookSearch";

function App() {
  const [query, setQuery] = useState('');
  const [pageNumber, setPageNumber] = useState(1);
  const {loading, error, hasMore, books} = UseBookSearch(query, pageNumber);

  const observer = useRef();
  const lastBookElementRef = useCallback(node => {
    if(loading) return
    if(observer.current) observer.current.disconnect()
    observer.current = new IntersectionObserver(entries => {
     if(entries[0].isIntersecting && hasMore) {
      setPageNumber(prev => prev + 1);
     }
    })
    if(node) observer.current.observe(node)
    console.log(node)
  }, [loading, hasMore] )

  function handleChange(e) {
    setQuery(e.target.value);
    setPageNumber(1);
  }

  return (
  <>
   <Header />
   <Form>
      <Form.Group className="mb-3" >
        <Form.Label>Enter Search Input</Form.Label>
        <Form.Control type="text" placeholder="Enter Search..... " value={query} name="name" onChange={handleChange}/>
      </Form.Group>
    </Form>
    {books.map((book, index) => {
      if(books.length == index + 1) return <div ref={lastBookElementRef} key={book}>{book}</div>
      return <div key={book}>{book}</div>
    })}
    <div>{loading && 'Loading.......'}</div>
    <div>{error && 'Error.....'}</div>
  </>);
}

export default App;