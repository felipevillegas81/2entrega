import { Burguer } from './Navbar.elements';
import styled from 'styled-components';

const Burguerbutton = () => {
    return (
        <Burguer>
        <div class="icon nav-icon-1">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </div>
      </Burguer>
    )
}

const icons = document.querySelectorAll('.icon');
  icons.forEach (icon => {  
    icon.addEventListener('click', (event) => {
      icon.classList.toggle("open");
  });
});

export default Burguerbutton

