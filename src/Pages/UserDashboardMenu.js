import React from 'react';
import './UserDashboard.css';
import { Link } from 'react-router-dom';
import temp from "./Images/template.png"
import "./UserDashboardMenu.css"

const UserDashboardMenu = () => {
    return (
        <div>
            <div className='user-cards'>
                                <div className='single-card'>
                                    <Link to='/free-templates'> <div className='icon-img' ><img src={temp}/></div> <p>Free Templates</p></Link>
                                </div>
                                <div className='single-card'>
                                    <Link to='/premium-templates'> <div className='icon-img' ><img src={temp}/></div> <p>Premium Templates</p></Link>
                                </div>
                                

              </div>
        </div>
    );
};

export default UserDashboardMenu;