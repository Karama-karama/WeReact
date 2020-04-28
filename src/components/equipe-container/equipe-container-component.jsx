import React from 'react'; 
//import {equipes} from  './equipe-data';
import './equipe-container.styles.scss'; 
import Demo from '../modal-equipe-liste/modal-component';


const EquipeContainer = (props) => (
<div className = "corners">
<div className ='equipe-container'>
 <h1 > {props.equipe.name}</h1>
 <h3 > {props.equipe.description}</h3>
 <h3  > {props.equipe.membres}</h3>
 <div>    <Demo/>   </div>
 
</div>
</div>
)

export default EquipeContainer; 