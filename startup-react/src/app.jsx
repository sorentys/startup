import React from 'react';
import { BrowserRouter, NavLink, Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './app.css';
import { Login } from "./login/login"
import { About } from "./about/about"
import { Meetings } from "./meetings/meetings"
import { MeetingView } from "./meeting_view/meeting_view"

function NotFound() {
    return <main className='container-fluid bg-secondary text-center'>404: Return to sender. Address unknown.</main>;
}

export default function App() {
  return (
    <BrowserRouter>
        <div className="app text-dark"> 
        <header className="container-fluid">
            <nav className="navbar fix-top navbar-dark">
                <NavLink className="navbar-brand" href="#">
                    Conference Scheduler
                    <sup>®</sup>
                </NavLink>
                <ul className="navbar-nav flex-row flex-wrap">
                    <li className="nav-item">
                        <NavLink className="nav-link p-2 active" to="">Home</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link p-2" to="meetings">Events</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link p-2" to="about">About</NavLink>
                    </li>
                </ul>
            </nav>
        </header>

        <Routes>
            <Route path='/' element={<Login />} exact />
            <Route path='/meetings' element={<Meetings />} />
            <Route path='/meeting_view' element={<MeetingView />} />
            <Route path='/about' element={<About />} />
            <Route path='*' element={<NotFound />} />
        </Routes>

        <footer className="text-light">
            <div className="container-fluid">
                <span className="text-reset">Ty Sorensen</span>
                <NavLink className="text-reset" href="https://github.com/sorentys/startup">GitHub</NavLink>
            </div>
        </footer>
        </div>
    </BrowserRouter>
  );
}