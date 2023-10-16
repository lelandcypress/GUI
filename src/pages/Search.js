import  Container  from "react-bootstrap/Container";
import Form  from "react-bootstrap/Form";
import Button from 'react-bootstrap/Button';
import Results from "../Components/Results";

function Search(){

    

    
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
        </Container>
        
    );
}

export default Search