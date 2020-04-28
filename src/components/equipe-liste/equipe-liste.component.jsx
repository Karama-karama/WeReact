import React from 'react'; 
import './equipe-liste.styles.scss';
import EquipeContainer from  '../equipe-container/equipe-container-component';

const Liste = (props) => {
  return <div className ='equipe-liste'>
  {props.equipes.map( equipe => 
  <EquipeContainer key = {equipe.id} equipe={equipe}/>
                                                )}
  



</div> 

}; 
export default Liste; 


