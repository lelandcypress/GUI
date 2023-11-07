import  Container  from "react-bootstrap/Container";
import Form  from "react-bootstrap/Form";
import {Button, ListGroup}  from "react-bootstrap";


function Download(){

    return(
        <Container>
        <h1>Downloads</h1>

        <ListGroup>
      {/* Map through downloaded items and display them here */}
      <ListGroup.Item>
          Item 1
          <Button variant="danger">Cancel</Button>
          <Button variant="warning">Remove</Button>
        </ListGroup.Item>
    </ListGroup>
        </Container>
    )
}

export default Download