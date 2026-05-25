import React from "react";
import GitHubIcon from '@mui/icons-material/GitHub';
import '../assets/styles/Footer.scss'

function Footer() {
  return (
    <footer>
      <div>
        <a href="https://github.com/Eboi999" target="_blank" rel="noreferrer"><GitHubIcon/></a>
      </div>
      <p>A portfolio designed & built by <a href="https://github.com/Eboi999" target="_blank" rel="noreferrer">Clarence Dave Bañagaso</a> with Love.</p>
    </footer>
  );
}

export default Footer;