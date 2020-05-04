
import React, { Component } from 'react';
import UserLandPage from './pages/userland/userland-page';
import Header from './components/header/header-componoent';
import {Switch, Route} from 'react-router-dom'; 
import './App.css';
import ProjetPage from './pages/projet/projet-page';
import EquipePage from './pages/equipe/equipe-page';
import CalendrierPage from './pages/calendrier/clanedrier-page';
import DocumentPage from './pages/document/document-page';
import NavigationBar from './components/sidenav/sidenav-component';
// pour page pojet => la carte des projets
const items =[ 
  { name: 'home', label: 'Home', },
        {
          name: 'projet',
          label: 'projet',
          
          items: [
            { name: 'projet 1', label: 'Projet 1'},
            { name: 'projet 2', label: 'Projet 2' },
          ],
        },
        {
          name: 'equipe',
          url : '/equipe',
          label: 'Equipe',
          items: [{ name: 'main', label: 'Main' },
                  { name: 'equipe-projet1', label: 'Equipe-Projet-1' }],
        },
]

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchField: '', 
      equipes  :[]
    
      
    };
    
  }
  
  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(users => this.setState({ equipes: users }));
  }
  
  handleChange = (e) => {
    this.setState ( {searchField : e.target.value});
  }  
 
render () {
  const { equipes, searchField } = this.state;
     // ***Searchbox function
    //const filteredEquipes = equipes.filter(equipe =>
     // equipe.name.toLowerCase().includes(searchField.toLocaleLowerCase()));


  return (
    <div className = "App">
      <Header handleChange = {this.handleChange}/> 
      < NavigationBar />
      <Switch>
       <Route exact path='/userland' component={ UserLandPage}/>
       <Route  path='/projet' component={ ProjetPage} id= "pathProjet"/>
       <Route  path='/equipe' component={EquipePage}id= "pathEquipe"/>
       <Route  path='/calendrier' component={CalendrierPage} id= "pathCalendrier"/>
       <Route  path='/document' component={DocumentPage} id= "pathDocument"/>
      </Switch>      
      
   </div>
  
  )};
}
export default App;
