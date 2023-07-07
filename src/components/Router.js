
import Footer from './Footer';
import Header from './Header'
import Contact from '../pages/Contact'
import Home from '../pages/Home';
// import { BrowserRouter, Routes, Route, Outlet } from 'react-router-dom'
import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom'

export default function Router() {
    const Layout = () => {
        return (
            <>
                <Header />
                <Outlet />
                <Footer />
            </>
        )
    }
    
    // const BrowserRoutes = () => {
    //     return (
    //         <BrowserRouter>
    //             <Routes>
    //                 <Route path='/' element={<Layout />}>
    //                     <Route path='/' element={<Home />} />
    //                     <Route path='contact-us' element={<Contact />} />
    //                 </Route>
    //             </Routes>
    //         </BrowserRouter>
    //     )
    //}

    const BrowserRoutes = createBrowserRouter([
        {
            path: "/",
            element: <Layout />,
            children: [

                {
                    path: "/",
                    element: <Home />
                },
                {
                    path: "/contact-us",
                    element: <Contact />
                }
            ]
        }
    ])

    return (
        <RouterProvider router={BrowserRoutes} />
    );
}
