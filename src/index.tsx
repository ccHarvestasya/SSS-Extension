import React from 'react'
import ReactDOM from 'react-dom/client'
import Popup from './Popup/index.js'
import Options from './Options/index.js'
import reportWebVitals from './reportWebVitals.js'
import { RecoilRoot } from 'recoil'
import './style.css'

if (process.env.REACT_APP_TARGET === 'popup') {
  const container = document.getElementById('root') || document.createElement('div');
  ReactDOM.createRoot(container).render(
    <React.StrictMode>
      <RecoilRoot>
        <Popup />
      </RecoilRoot>
    </React.StrictMode>
  );
}

if (process.env.REACT_APP_TARGET === 'options') {
  const container = document.getElementById('root') || document.createElement('div');
  ReactDOM.createRoot(container).render(
    <React.StrictMode>
      <RecoilRoot>
        <Options />
      </RecoilRoot>
    </React.StrictMode>
  );
}

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
