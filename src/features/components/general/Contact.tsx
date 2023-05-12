import React, { FC, ReactElement, useState } from 'react';
import { FaHeart, FaTelegram } from 'react-icons/fa';
import { HiMail } from 'react-icons/hi';
// import { motion } from "framer-motion";
import { useAppDispatch } from '../../../app/hooks';
import "../../../styles/contact.css"



const Contact: React.FC = () => {



  return (
    <div> <center>
      <div className="form">
      <div className="white-side">
  <img src="https://i.pinimg.com/564x/c8/ba/09/c8ba096cfa66d6bf68b43b233953df66.jpg"  alt="Description of image" width={500} height={600}/>
</div>

        <div className="contact-info">
          <h2 className="title">Contact Information</h2>
          <p className="text">
            If you have any questions or comments, please feel free to contact
            us. We will get back to you as soon as possible.
          </p>
          <div className="information">
            <i className="icon fas fa-map-marker-alt"></i>
            <p>1234 Main Street, Anytown, USA</p>
          </div>
          <div className="information">
            <i className="icon fas fa-phone"></i>
            <p>+1 555-555-5555</p>
          </div>
          <div className="information">
            <i className="icon fas fa-envelope"></i>
            <p>info@vitalFurniture.com</p>
          </div>
          <div className="social-media">
            <h2 className="title">Follow Us</h2>
            <p>Connect with us on social media for updates and news.</p>
            
            </div>




</div>
</div>

</center>

</div>
    
  )
}

export default Contact;