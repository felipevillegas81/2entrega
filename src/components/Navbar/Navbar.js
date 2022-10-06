import { Container } from './Navbar.elements';
import Burguerbutton from './Burguerbutton';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return(
            <Container>
                <h2>Optimax <span>Brigadas</span></h2>
                <div>
                    <button><Link to='/'><span>Inicio</span></Link></button>
                    <button><Link to='/category/glasses'>Gafas</Link></button> 
                    <button><Link to='/category/lents'>Lentes</Link></button>
                    <button><Link to='/category/sunglasses'>Gafas de Sol</Link></button>
                </div>
                <div className='burguer'>
                        <Burguerbutton />
                </div>
            </Container>
    )
};

export default Navbar
