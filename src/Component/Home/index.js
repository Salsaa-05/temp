import React from 'react';
import {HomeSecticon,HomeInformation,HomeTitle,HomeInfo,HomeDesc,Span,HomeBtn} from './style.js'


const Home = () => {

  return (
  <HomeSecticon>
    <div className="container">
      <HomeInformation>
    <HomeTitle>Saad Hamoda</HomeTitle>
    <HomeInfo>Coordinatore d'affari</HomeInfo>
    <HomeDesc>
      I am a  <Span>Website Designer</Span> Front-End Developer creating modern and responsive designs to Web and Mobile.
      </HomeDesc>
    <HomeBtn>Have a look</HomeBtn>
  
  </HomeInformation>
 </div>
 </HomeSecticon>
  );
}



export default Home;
