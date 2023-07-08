
import Footer from './Footer';
import Header from './Header'
import Contact from '../pages/Contact'
import Home from '../pages/Home';
import { BrowserRouter, Routes, Route, Outlet } from 'react-router-dom'
import ProductDetails from '../pages/ProductDetails';
// import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom'

export default function Router(props) {
    const Layout = () => {
        return (
            <>
                <Header cartItems={props.cartItems} />
                <div className='content'><Outlet /></div>
                <Footer />
            </>
        )
    }
    
    const BrowserRoutes = () => {
        return (
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<Layout />}>
                        <Route path='/' element={<Home />} />
                        <Route path='contact-us' element={<Contact />} />
                        <Route path='product' element={<ProductDetails />}/>
                        <Route path='product/:id' element={<ProductDetails />} cartItems={props.cartItems}/>
                    </Route>
                </Routes>
            </BrowserRouter>
        )
    }

    return (
        <BrowserRoutes />
    );
}
