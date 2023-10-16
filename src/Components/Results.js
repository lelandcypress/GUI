import {ListGroup}  from "react-bootstrap";
import { pretendResults } from "../Components/searchResults";
import { useState, useEffect } from "react";

function Results(){
const [results, setResults] = useState([]);  

useEffect(() =>{

pretendResults().then((data)=> {setResults(data)})


})

return(
    <ListGroup>
    {results.map((result)=>(
      <ListGroup.Item key={result.id}>{result.name}</ListGroup.Item>  
    ))}
    </ListGroup>
);

}

export default Results