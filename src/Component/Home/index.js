import React from 'react';
import {HomeSecticon,HomeInformation,HomeTitle,HomeInfo,HomeDesc,Span,HomeBtn} from './style.js'


const Home = () => {

  return (
  <HomeSecticon>
    <div className="container">
      <HomeInformation>
    <HomeTitle>Bodyiolgo</HomeTitle>
    <HomeInfo>||||||||||||</HomeInfo>
    <HomeDesc>
     Workout page  <Span>helps trainnar </Span> to achive best preformence with high accsleart benefit in priff accses to sourc power .
      </HomeDesc>
    <HomeBtn>give it chance</HomeBtn>
  
  </HomeInformation>
 </div>
 </HomeSecticon>
  );
}



export default Home;
