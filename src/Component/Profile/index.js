import React  from 'react';
import './style.css'


const Profile = () =>{

    return (
    <div >
     <div className="profile_skills">
            <div className="container">
                <div className="profile">
                    <h2 className="profile-title"><span>My </span>Profile</h2>
                    <ul className="profile-list">
                        <li className="profile-item">
                            <span>Name</span>
                          Saad Hamoda
                        </li>
                        <li className="profile-item">
                            <span>Birthday</span>
                            1/5/1995
                        </li>
                        <li className="profile-item">
                            <span>Address</span>
                            Italy
                        </li>
                        <li className="profile-item">
                            <span>Phone</span>
                           +393897808150
                        </li>
                        <li className="profile-item">
                            <span>Email</span>
                            saadhamoda2020@gmail.com
                        </li>
                       
                    </ul>
                </div>
                
                <div className="skills">
                    <h2 className="skills-title">Some <span>skills</span></h2>
                    <p className="skills-desc">
                    Buone prestazioni con la capacita di negoziare un'iniziativa commerciale.
                    </p>
                    <div className="bar">
                        <span className="title">Microsoft Office</span>
                        <span className="perc">100%</span>
                        <div className="parent">
                            <span className="sp1"></span>
                        </div>
                    </div>
                    
                    <div className="bar">
                        <span className="title">Bootstrap</span>
                        <span className="perc">90%</span>
                        <div className="parent">
                            <span className="sp2"></span>
                        </div>
                    </div>
                    
                    <div className="bar">
                        <span className="title">CSS3</span>
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
