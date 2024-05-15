import {createBrowserRouter} from 'react-router-dom'
import Home from './pages/Home'
import Root from './pages/Root'

const router = createBrowserRouter(
    [
        {
            path:'/',
            element: <Root />,
            children:[
                {
                    path:'/',
                    element:<Home />,
                    index:true //this page will be treated as the index page and will be open on the same path as Root
                },
              
            ]
        }
    ]
)
 export default router