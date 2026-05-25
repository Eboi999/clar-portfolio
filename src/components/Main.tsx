import React from "react";
import GitHubIcon from '@mui/icons-material/GitHub';
import clar from '../assets/images/clar.jpg';
import '../assets/styles/Main.scss';

function Main() {

  return (
    <div className="container">
      <div className="about-section">
        <div className="image-wrapper">
        <img src={clar} className="zoom" alt="thumbnail" width="40%"/>
        </div>
        <div className="content">
          <div className="social_icons">
            <a href="https://github.com/Eboi999" target="_blank" rel="noreferrer"><GitHubIcon/></a>
          </div>
          <h1>Clarence Dave C. Bañagaso</h1>
          <p>Developer</p>

          <div className="mobile_social_icons">
            <a href="https://github.com/Eboi999" target="_blank" rel="noreferrer"><GitHubIcon/></a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;