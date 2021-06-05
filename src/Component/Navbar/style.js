import styled from 'styled-components'

 export const NavbarSection = styled.div
`
    padding: 20px 0;
    overflow: hidden;
    background: #fff;
    position: relative;
    border-bottom: 1px solid #000
`

export const Logo = styled.div `
 width: 50%;
    float: left;
`
   


export const LogoText = styled.h2 `
    font-size: 70px;
    font-weight: bold;
    font-family: "Lucida Console", "Courier New", monospace;
    
`


export const UlLlist = styled.ul `

    width: 50%;
    float: left;
    list-style: none;
    padding: 0px;
`

export const ListItem = styled.li `
 display: inline-block;
`
   


export const Anchor = styled.a ` 
    display: block;
    color: #222;
    text-decoration: none;
    padding: 15px 8px;
    font-weight: bold;
    &:hover{
        color: #eb5424
    } 
` 

export const NavLink = styled.a `
display: block;
color: #222;
text-decoration: none;

font-weight: bold;
`