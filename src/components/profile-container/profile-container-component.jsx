import React from "react";
import './profile-container.styles.scss';
// import { Carousel } from 'react-responsive-carousel';

 const Profile = (props) => (
        
        
        <div className = "corners-profile">
        <div className ='profile-container'>

        
         <h1 > {props.profile.name}</h1>
         <h3 > {props.profile.role}</h3>
         </div>
        </div>
        

        
        )

export default Profile ;