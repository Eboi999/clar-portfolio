import React from "react";
import mock14 from '../assets/images/mock14.png';
import mock13 from '../assets/images/mock13.png';
import mock12 from '../assets/images/mock12.png';
import mock11 from '../assets/images/mock11.png';
import '../assets/styles/Project.scss';

function Project() {
    return(
    <div className="projects-container" id="projects">
        <h1>Personal Projects</h1>
        <div className="projects-grid">
            <div className="project">
                <a href="" target="_blank" rel="noreferrer"><img src={mock11} className="zoom" alt="thumbnail" width="40%"/></a>
                <a href="" target="_blank" rel="noreferrer"><h2>ECOFETCH</h2></a>
                <p>This application is designed to streamline and optimize garbage collection within local communities. It focuses on efficiency and ease of use while also creating opportunities for unemployed individuals to participate in maintaining cleaner, healthier environments.</p>
            </div>
            <div className="project">
                <a href="https://github.com/Eboi999/e-commerce-advproject" target="_blank" rel="noreferrer"><img src={mock12} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://github.com/Eboi999/e-commerce-advproject" target="_blank" rel="noreferrer"><h2>Ecommerce Website</h2></a>
                <p>This website is designed to facilitate the listing and sale of products, providing businesses wi th an effective platform to showcase their offerings and reach a wider audience.</p>
            </div>  
            <div className="project">
                <a href="https://github.com/Eboi999/ADV_-FINAL_PROJECT" target="_blank" rel="noreferrer"><img src={mock13} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://github.com/Eboi999/ADV_-FINAL_PROJECT" target="_blank" rel="noreferrer"><h2>Nest Emart</h2></a>
                <p>Developed an e-market platform that enables users to conveniently shop for groceries, essential goods, and clothing in one centralized online destination.</p>
            </div>
            <div className="project">
                <a href="https://github.com/Eboi999/banagaso-_exam-" target="_blank" rel="noreferrer"><img src={mock14} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://github.com/Eboi999/banagaso-_exam-" target="_blank" rel="noreferrer"><h2>Random Table</h2></a>
                <p>A random website I made. To play and mess with your mind.</p>
            </div>
                    
        </div>
    </div>  
    );
}   

export default Project;