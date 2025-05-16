import {createBrowserRouter} from 'react-router';
import SignUp from '../components/auth/signUp/SignUp';
import LogIn from '../components/auth/login/login';
import Layout from '../components/layout/layout';
import NowPlaying from '../components/movies/NowPlaying';

const router = createBrowserRouter([
    {
        path:   "",
        element: <SignUp/>
    },
    {
        path:   "/signup",
        element: <SignUp/>
    },
    {
        path:   "/login",
        element: <LogIn/>
    },
    {
        path:   "/home",
        element: <Layout/>,
        children: [
            {
                path: "",
                element: <NowPlaying/>
            }
        ]
    }
])

export default router