import React from 'react';
import {HomeSecticon,HomeInformation,HomeTitle,HomeInfo,HomeDesc,Span,HomeBtn} from './style.js'


const Home = () => {

  return (
  <HomeSecticon>
    <div className="container">
      <HomeInformation>
    <HomeTitle></HomeTitle>
    <HomeInfo></HomeInfo>
    <HomeDesc>
     Sedute rilassanti miste alla medicina tradizionale araba <Span>per confortare il corpo e ravviare ossessioni profonde </Span> .
      </HomeDesc>
    <HomeBtn>Prova</HomeBtn>
  
  </HomeInformation>
 </div>
 </HomeSecticon>
  );
}



export default Home;
