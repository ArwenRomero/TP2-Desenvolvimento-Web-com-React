import { Navigate } from 'react-router-dom';
import { useAuth } from '../../context/Auth/useAuth';

import { ReactElement } from 'react';

const PrivateRoute = ({ element }: { element: ReactElement }) => {
    const { user } = useAuth();

    return user ? element : <Navigate to="/signin" />;
};

export default PrivateRoute;
