import React from 'react'
import certificate from "../../assets/certificate.png";
import "./Certificate.css"

function Certificate() {
  return (
    <section id='certificate'>
    <h2 className="worksTitle">My Certificate</h2>
    <span className="worksDesc">
  With a keen eye for detail and a dedication to precision, I ensure that every project meets the highest standards. Certified in [relevant certification], I bring proven expertise to help businesses thrive online.
</span>

     <div className="worksImgs">

     <div className="worksImgContainer">
           
                 <img src={certificate} alt="" className="worksImg" />
           
       </div>
       </div>
      
        </section>
  )
}

export default Certificate;
