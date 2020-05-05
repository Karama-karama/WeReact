import React from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import './calendrier.styles.scss';


const ClendrierPage = () =>  (
    <div className = 'page-calendrier'> 
    <p>La page du calendrier </p>
    <Calendar />
    </div>
); 
export default ClendrierPage ;