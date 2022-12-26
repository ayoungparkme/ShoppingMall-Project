import { Navigate } from 'react-router-dom';
import { useAuthContext } from '../context/AuthContext';

export default function ProtectedRoute({ children, requireAdimin }) {
    const { user } = useAuthContext();

    if (!user || (requireAdimin && !user.isAdmin)) {
        return <Navigate to='/' replace />;
    }

    return children; 
    
}

