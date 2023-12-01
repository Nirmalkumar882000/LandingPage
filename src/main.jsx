import React from 'react'
import ReactDOM from 'react-dom/client'
import 'bootstrap/dist/css/bootstrap.min.css';
import App from './App.jsx'
import './index.css'
import { Canvas } from '@react-three/fiber';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Canvas>
    <App/>
    </Canvas>
  </React.StrictMode>,
)
