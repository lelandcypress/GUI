import Navigate from "./nav"
import Container from 'react-bootstrap/Container';

function Header(){
    return(
        <>
        <Container className='bg-info'>
        <Navigate />
        </Container>
        </>
    )
}

export default Header