import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import Dashboard from './pages/Dashboard';
import Events from './pages/Events';
import Analytics from './pages/Analytics';
import './styles.css';
export default function App(){return <BrowserRouter><Routes><Route path="/" element={<Home/>}/><Route element={<Layout><Routes><Route path="/dashboard" element={<Dashboard/>}/><Route path="/events" element={<Events/>}/><Route path="/analytics" element={<Analytics/>}/></Routes></Layout>} /></Routes></BrowserRouter>}
