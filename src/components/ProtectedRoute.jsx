import React from 'react'
import { useAuthStore } from '../store/AuthStore'
import { Navigate, Outlet } from 'react-router-dom';

const ProtectedRoute = ({children}) => {

    const {user} = useAuthStore();

    if(!user) return <Navigate to="/auth/login" />

  return <Outlet/>
}

export default ProtectedRoute