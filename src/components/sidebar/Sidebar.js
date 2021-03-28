import React from 'react';

import './Sidebar.css';
import logo from '../../assets/park-logo.png';

const Sidebar = ({ sidebarOpen, closeSidebar }) => {
    return (
        <div className={sidebarOpen ? "sidebar-responsive" : "" } id="sidebar">
            <div className="sidebar_title">
                <div className="sidebar__img" >
                    <img height="75" width="200" src={logo} alt="logo"/>
                    <i className="fa fa-times" id="sidebarIcon" onClick={()=> closeSidebar()}></i>
                </div>
                <div className="sidebar__menu">
                    <div className="sidebar__link active_menu_link">
                        <i className="fa fa_home"></i>
                        <a href="#">Dashboard</a>
                    </div>
                    <h3>MANAEGEMENT</h3>
                    <div className="sidebar__link">
                        <i className="fa fa-user-secret"></i>
                        <a href="#">Admin Management</a>
                    </div>
                    <div className="sidebar__link">
                        <i className="fa fa-wrench"></i>
                        <a href="#">Employees Management</a>
                    </div>
                    <div className="sidebar__link">
                        <i className="fa fa-ticket"></i>
                        <a href="#">Ticket Management</a>
                    </div>
                    <div className="sidebar__link">
                        <i className="fa fa-usd"></i>
                        <a href="#">Expanse Management</a>
                    </div>
                    <div className="sidebar__link">
                        <i className="fa fa-shopping-cart"></i>
                        <a href="#">Stalls Management</a>
                    </div>

                    <h3></h3>

                    <div className="sidebar__logout">
                        <i className="fa fa-power-off"></i>
                        <a href="#">LOG OUT</a>
                    </div>
             
                </div>
            </div>            
        </div>
    )
};

export default Sidebar;