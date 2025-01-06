import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {
  RouterProvider,
} from "react-router-dom";
import router from './router/Router.jsx';
import AuthProvider from './context/AuthContext/AuthProvider.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <div className="bg-gray-50">
    <AuthProvider>

<RouterProvider router={router} />
</AuthProvider>
    </div>
  
  </StrictMode>,
)
