import React  from 'react';
import { Link } from 'react-router-dom'

import { NavbarSection, Logo, LogoText , UlLlist , ListItem, Anchor , NavLink } from './style.js';
const Navbar = () =>{

    return (
  
     
       <NavbarSection>
            <div className="container">
                
                <Logo>
                    <LogoText>My Profile</LogoText>
                </Logo>
                
                              
                <UlLlist>
                    <ListItem ><NavLink><Link to="/">Home</Link></NavLink></ListItem>
                    <ListItem ><Anchor href="#">Work</Anchor></ListItem>
                    <ListItem ><Anchor href="#">Portfolio</Anchor></ListItem>
                
                    <ListItem ><Anchor href="#">About</Anchor></ListItem>
                    <ListItem ><NavLink><Link to="/contact">Contact</Link></NavLink></ListItem>
                </UlLlist>
                
            </div>
            
       </NavbarSection>
            
    
  
    )
} 
   
  

export default Navbar;


//this Link is work as <a> anchor link
 