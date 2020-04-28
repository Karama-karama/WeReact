import React from 'react'; 
import Profile from '../profile-container/profile-container-component';
import './profile-list.styles.scss';
//import { MDBContainer, MDBScrollbar } from "mdbreact";
//import {Carousel} from 'react-bootstrap';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

const ProfileListe = (props) => {

     return (
      <div className ='profile-list'>
      <Carousel  showThumbs={false}>
     {props.profiles.map( profile  => 
     <div id="carouselExampleIndicators" className="carousel-slide" data-ride="carousel">
   
      <div className="carousel-inner">
     <div className="carousel-item active">

     <Profile key = {profile.id} profile={profile}/>

     </div>
     </div>
  
  
</div>






     )}
      </Carousel>                                            
      </div> 
  )
}; 
export default ProfileListe; 


