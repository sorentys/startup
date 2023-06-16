import React from 'react';
import { BrowserRouter, NavLink, Route, Routes } from 'react-router-dom';
import { Login } from "./login/login"
import { About } from "./about/about"
import { Meetings } from "./meetings/meetings"
import { AuthState } from './login/auth_state';
import 'bootstrap/dist/css/bootstrap.min.css';
import './app.css';

function App() {
    const [user_name, setUserName] = React.useState(localStorage.getItem('user_name') || '');
    const current_auth_state = user_name ? AuthState.Authenticated : AuthState.Unauthenticated;
    const [auth_state, setAuthState] = React.useState(current_auth_state);
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
                            <NavLink className="nav-link p-2 active" to="">Login</NavLink>
                        </li>
                        {auth_state === AuthState.Authenticated && (
                        <li className="nav-item">
                            <NavLink className="nav-link p-2" to="meetings">Events</NavLink>
                        </li>
                        )}
                        <li className="nav-item">
                            <NavLink className="nav-link p-2" to="about">About</NavLink>
                        </li>
                    </ul>
                </nav>
            </header>

            <Routes>
                <Route 
                    path='/' 
                    element={
                        <Login 
                            userName={user_name}
                            authState={auth_state}
                            onAuthChange={(userName, authState) => {
                                setAuthState(authState);
                                setUserName(userName);
                            }} 
                        />
                    }
                    exact
                />
                <Route path='/meetings' element={<Meetings />} />
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

function NotFound() {
    return <main className='container-fluid bg-secondary text-center'>404: Return to sender. Address unknown.</main>;
}

export default App;