import logo from '../assets/images/logo192.png'
import { useContext } from 'react'
import Context from './Context'

export default function Header(props) {
  const userData = useContext(Context)
    return (
      <nav className='nav-bar'>
        <p><img src={logo} alt="logo" height="50"/></p>
        <ul>
          <li><a href="/">Home</a></li>
          <li><a href="/contact-us">Contact</a></li>
          <li>Cart: {userData.cartItems}</li>
        </ul>
      </nav>
    )
}
