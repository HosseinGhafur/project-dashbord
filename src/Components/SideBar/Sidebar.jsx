import React from 'react'
import LineStyleIcon from '@mui/icons-material/LineStyle';
import TimelineIcon from '@mui/icons-material/Timeline';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import PersonAddAltIcon from '@mui/icons-material/PersonAddAlt';
import StorefrontOutlinedIcon from '@mui/icons-material/StorefrontOutlined';
import LeaderboardOutlinedIcon from '@mui/icons-material/LeaderboardOutlined';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import DynamicFeedIcon from '@mui/icons-material/DynamicFeed';
import MessageOutlinedIcon from '@mui/icons-material/MessageOutlined';
import AnnouncementOutlinedIcon from '@mui/icons-material/AnnouncementOutlined';
import CardTravelOutlinedIcon from '@mui/icons-material/CardTravelOutlined';
import './Sidebar.css'
import { Link } from 'react-router-dom';



export default function Sidebar() {
    return (
        <div className='sidebar'>
            <div className="wraperr">
                <div className="sidebar-menu">
                    <h3 className="sidebar-menu__title ">Dashboard</h3>
                    <ul className="sidebar-menu__list">
                        <Link to='./' className='link'>
                            <li className="sidebar-menu__item">
                                <LineStyleIcon />
                                <span className="menu-item__link"> Home</span>
                            </li>
                        </Link>
                        <li className="sidebar-menu__item">
                            <TimelineIcon />
                            <span className="menu-item__link">  Analyze</span>
                        </li>
                        <li className="sidebar-menu__item">
                            <TrendingUpIcon />
                            <span className="menu-item__link">  Sale</span>
                        </li>
                    </ul>
                </div>
                <div className="sidebar-menu">
                    <h3 className="sidebar-menu__title ">Quick Menu</h3>
                    <ul className="sidebar-menu__list">
                        <Link to='./UserList' className='link'>
                            <li className="sidebar-menu__item">
                                <PersonOutlineIcon />
                                <span className="menu-item__link">  Users</span>
                            </li>
                        </Link>
                        <Link to='./Newuser' className='link'>
                            <li className="sidebar-menu__item">
                                <PersonAddAltIcon />
                                <span className="menu-item__link">  New User</span>
                            </li>
                        </Link>
                        <Link to='./Products' className='link'>
                            <li className="sidebar-menu__item">
                                <StorefrontOutlinedIcon />
                                <span className="menu-item__link"> Products</span>
                            </li>
                        </Link>
                        <li className="sidebar-menu__item">
                            <TrendingUpIcon />
                            <span className="menu-item__link"> Transition</span>
                        </li>
                        <li className="sidebar-menu__item">
                            <LeaderboardOutlinedIcon />
                            <span className="menu-item__link"> Report</span>
                        </li>
                    </ul>
                </div>
                <div className="sidebar-menu">
                    <h3 className="sidebar-menu__title">Notifications</h3>
                    <ul className="sidebar-menu__list">
                        <li className="sidebar-menu__item">
                            <MailOutlineIcon />
                            <span className="menu-item__link"> Email</span>
                        </li>
                        <li className="sidebar-menu__item">
                            <MessageOutlinedIcon />
                            <span className="menu-item__link"> Message</span>
                        </li>
                        <li className="sidebar-menu__item">
                            <DynamicFeedIcon />
                            <span className="menu-item__link"> Feedback</span>
                        </li>
                    </ul>
                </div>
                <div className="sidebar-menu">
                    <h3 className="sidebar-menu__title">Staff</h3>
                    <ul className="sidebar-menu__list">
                        <li className="sidebar-menu__item">
                            <CardTravelOutlinedIcon />
                            <span className="menu-item__link"> Manage</span>
                        </li>
                        <li className="sidebar-menu__item">
                            <TimelineIcon />
                            <span className="menu-item__link"> Analyze</span>
                        </li>
                        <li className="sidebar-menu__item">
                            <AnnouncementOutlinedIcon />
                            <span className="menu-item__link"> Reports</span>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}
