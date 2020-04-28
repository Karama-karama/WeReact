import React from 'react';
import './equipe-styles.scss';
import EquipeListe from '../../components/equipe-liste/equipe-liste.component';
import ProfileListe from '../../components/profile-list/profile-list';
import AjoutMembre from '../../components/modal-ajouter-membre/ajout-membre-component';


class EquipePage extends React.Component {
    constructor(props) {
        super (props);
        this.state ={
             equipes : [{
                "id" : 1 ,
                "name": 'Equipe-Projet 1 ',
                "description" : 'Gestion des projets',
                "membres" : '3 Membres'
            },
            {
                "id" :  2,
                "name": 'Equipe-Projet 2 ',
                "description" : 'Gestion des ressources humaine',
                "membres" : '5 Membres'
            },
            {
                "id" : 3 ,
                "name": 'Equipe-Projet 3',
                "description" : 'Dev Jeux',
                "membres" : '8 Membres'
            }],
            profiles : [{
                "id" : "S" ,
                "name": 'Seif ',
                "role" : 'Leader',
            },
            {
                "id" :  "M",
                "name": 'Mahdi ',
                "role" : 'leader',
            },
            {
                "id" : "D" ,
                "name": 'Nsyt esmha',
                "role" : 'designer',
            },
            {
                "id" : "SC" ,
                "name": 'Sourour Chalbi',
                "role" : 'Intern',
            },
            {
                "id" : "MG" ,
                "name": 'Mariem Garfa',
                "role" : 'Intern',
            },
            {
                "id" :"KA" ,
                "name": 'Karama aissaoui',
                "role" : 'Intern',
            }]
        }
    }
    
    
    render () {
        return (
            <div className = 'equipe-page'>
             
              
             <ProfileListe profiles = {this.state.profiles}/>
                 

             <EquipeListe equipes = { this.state.equipes}/>

             <AjoutMembre/>
             
             
            </div>
        )
    }
}; 
export default EquipePage;