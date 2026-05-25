import React from "react";
import cert1 from '../assets/images/certificates/1st(2).png';
import cert2 from '../assets/images/certificates/2nd.jpg';
import cert3 from '../assets/images/certificates/3rd.jpg';
import cert4 from '../assets/images/certificates/4th.jpg';
import '../assets/styles/Certificates.scss';

function Certificates() {
    const certs = [
        { img: cert1, title: '1st Place Certificate', desc: 'Awarded for outstanding achievement and top performance.' },
        { img: cert2, title: '2nd Place Certificate', desc: 'Recognized for exceptional dedication and skill.' },
        { img: cert3, title: '3rd Place Certificate', desc: 'Honored for notable contribution and effort.' },
        { img: cert4, title: '4th Place Certificate', desc: 'Acknowledged for participation and commitment.' },
    ];

    return (
        <div className="certificates-container" id="certificates">
            <h1>Certificates</h1>
            <div className="certificates-grid">
                {certs.map((cert, i) => (
                    <div className="certificate-tile" key={i}>
                        <div className="tile-image-wrap">
                            <img src={cert.img} alt={cert.title} />
                        </div>
                        <div className="tile-body">
                            <h2>{cert.title}</h2>
                            <p>{cert.desc}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Certificates;
