import React from 'react';
import './header-styles.scss';
import { ReactComponent as Logo} from '../../assets/crown.svg';
import {Link} from 'react-router-dom';

const Header =({placeholder, handleChange}) => (
    <div className ='header'> 
     <Link className ='logo-container' to ='/'>
     <Logo className ='logo'/>
    </Link> 
    < input
    className ='search' 
          type='search'
          placeholder={placeholder ='Recherche'}
          onChange={handleChange }
          
        />
      
     <div className ='options'>
         <Link className ='option' to ="/userland"> User Land </Link>
      </div> 
     </div>
)
export default Header ;
