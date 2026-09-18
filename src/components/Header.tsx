import React from 'react';
import { NavLink } from 'react-router-dom';
import { Activity, BarChart3, CloudLightning, LayoutDashboard, Menu, X } from 'lucide-react';
interface Props { mobileOpen:boolean; setMobileOpen:(v:boolean)=>void; }
export default function Header({mobileOpen,setMobileOpen}:Props) { return <header className="topbar"><button className="icon-btn mobile-menu" onClick={()=>setMobileOpen(!mobileOpen)} aria-label="Toggle navigation">{mobileOpen?<X/>:<Menu/>}</button><NavLink to="/" className="brand"><span className="brand-mark"><CloudLightning size={20}/></span><span>ZIGGY <b>INTELLIGENCE</b></span></NavLink><nav className={mobileOpen?'nav mobile-open':'nav'}><NavLink to="/dashboard"><LayoutDashboard size={16}/>Dashboard</NavLink><NavLink to="/events"><Activity size={16}/>Extreme Events</NavLink><NavLink to="/analytics"><BarChart3 size={16}/>Analytics</NavLink></nav><div className="system-status"><span className="pulse"/>FORECAST INTELLIGENCE ACTIVE</div></header>; }
