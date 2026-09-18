import { useEffect, useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { Menu, ShieldAlert } from 'lucide-react';
import Header from './Header';
export default function Layout({children}:{children:React.ReactNode}){const [open,setOpen]=useState(false);const location=useLocation();useEffect(()=>setOpen(false),[location.pathname]);return <><Header mobileOpen={open} setMobileOpen={setOpen}/><main>{children}</main><footer><ShieldAlert size={14}/> ZIGGY Intelligence · Prototype data only · Built for extreme weather anomaly research</footer></>}
