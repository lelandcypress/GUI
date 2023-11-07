import  Container  from "react-bootstrap/Container";
import Form  from "react-bootstrap/Form";
import Button from 'react-bootstrap/Button';
import Results from "../Components/Results";


function Search(){

    const mockResults =[
        {id:1, name: 'Result1'},
        {id:2,name: 'Result13'},
        {id:3, name:'Result3'}
    ]
    

    const handleDownloadAll = (results) =>{
        results.forEach(element => {
            console.log(element.name)
        });
    } 

    
    return(
        <Container>
            <h2>Search</h2>
            <Form>
                <Form.Group>
                    <Form.Control type="text" placeholder="Enter Search"/>
                </Form.Group>
                <Button variant="secondary" type="submit">
                Search
                </Button>
            </Form>
            <Results />
                <Button variant="secondary" type="submit" onClick={handleDownloadAll(mockResults)}>
                Download All
                </Button>
        </Container>
        
    );
}

export default Search