import React from 'react';
import './login.css';

import { Unauthenticated } from './unauthenticated';
import { Authenticated } from './authenticated';
import { AuthState } from './auth_state';

export function Login({ userName, authState, onAuthChange }) {
  return (
    <main className='container-fluid text-center'>
      <div>
        {authState !== AuthState.Unknown && <h1 className='header'>Conference Scheduler</h1>}
        {authState === AuthState.Authenticated && (
          <Authenticated user_name={userName} onLogout={() => onAuthChange(userName, AuthState.Unauthenticated)} />
        )}
        {authState === AuthState.Unauthenticated && (
          <Unauthenticated
            user_name={userName}
            onLogin={(loginUserName) => {
              onAuthChange(loginUserName, AuthState.Authenticated);
            }}
          />
        )}
      </div>
    </main>
  );
}