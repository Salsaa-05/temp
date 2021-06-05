import React  from 'react';
import { Link } from 'react-router-dom'

import { NavbarSection, Logo, LogoText , UlLlist , ListItem, Anchor , NavLink } from './style.js';
const Navbar = () =>{

    return (
  
     
       <NavbarSection>
            <div className="container">
                
                <Logo>
                    <LogoText>Centro Medioevo</LogoText>
                </Logo>
                
                              
                <UlLlist>
                    <ListItem ><NavLink><Link to="/">Home</Link></NavLink></ListItem>
                    <ListItem ><Anchor href="#"></Anchor></ListItem>
                    <ListItem ><Anchor href="#"></Anchor></ListItem>
                
                    <ListItem ><Anchor href="#"></Anchor></ListItem>
                    <ListItem ><NavLink><Link to="/contact">Contact</Link></NavLink></ListItem>
                </UlLlist>
                
            </div>
            
       </NavbarSection>
            
    
  
    )
} 
   
  

export default Navbar;


//this Link is work as <a> anchor link
 