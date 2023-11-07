import {Button, ListGroup}  from "react-bootstrap";
import { pretendResults } from "../Components/searchResults";
import { useState, useEffect } from "react";

function Results(){
const [results, setResults] = useState([]);  

useEffect(() =>{

pretendResults().then((data)=> {setResults(data)})


})

const handleDownload = (results) =>{
  window.open("DOWNLOAD STARTED")
}

return(
    <ListGroup>
    {results.map((result)=>(
      <ListGroup.Item key={result.id}>{result.name} <Button variant="success" onClick={handleDownload(results)}>Download</Button> </ListGroup.Item>  
    ))}
    </ListGroup>
);

}

export default Results