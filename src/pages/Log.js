import  Container  from "react-bootstrap/Container";
import {Button, ListGroup}  from "react-bootstrap";
function Log(){
    return(
        <Container>
        <h2>Log Page</h2>
        <ListGroup>
          {/* Map through log entries and display them here */}
          <ListGroup.Item>
            Item 1 - Downloaded on [date] - Status: [status]
          </ListGroup.Item>
        </ListGroup>
      </Container>
    )
}

export default Log