import React  from 'react';
import './style.css'


const Profile = () =>{

    return (
    <div >
     <div className="profile_skills">
            <div className="container">
                <div className="profile">
                    <h2 className="profile-title"><span> </span>Profile</h2>
                    <ul className="profile-list">
                        <li className="profile-item">
                            <span>Name</span>
                          luis garzia
                        </li>
                        <li className="profile-item">
                            <span>Birthday</span>
                            1/5/1987
                        </li>
                        <li className="profile-item">
                            <span>Address</span>
                            KualaLampur
                        </li>
                        <li className="profile-item">
                            <span>Phone</span>
                           +34267593672
                        </li>
                        <li className="profile-item">
                            <span>Email</span>
                            yourtrainar@sport.org
                        </li>
                       
                    </ul>
                </div>
                
                <div className="skills">
                    <h2 className="skills-title">Some <span>skills</span></h2>
                    <p className="skills-desc">
                    Buone prestazioni con la body hacks  .
                    </p>
                    <div className="bar">
                        <span className="title">Cardio</span>
                        <span className="perc">100%</span>
                        <div className="parent">
                            <span className="sp1"></span>
                        </div>
                    </div>
                    
                    <div className="bar">
                        <span className="title">pulling weights</span>
                        <span className="perc">90%</span>
                        <div className="parent">
                            <span className="sp2"></span>
                        </div>
                    </div>
                    
                    <div className="bar">
                        <span className="title">Yoga</span>
                        <span className="perc">80%</span>
                        <div className="parent">
                            <span className="sp3"></span>
                        </div>
                    </div>
                </div>
                
            </div>
        </div>
        
        
       
    </div>
  );
} 
   
  

export default Profile;
