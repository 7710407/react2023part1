export default function Home() {
    return (
        <>
            <h1>Homepage</h1>
            <p>This is the homepage.</p>
            <ul className="productBox">
                <li>
                    <a href="/product/1" className="productLInk"><img className="productImage" src={require('../assets/images/item1.jpg')}></img></a>
                    <br />
                    <a href="/product/1" className="productLInk">It's a good day to code</a>
                </li>
                <li>
                    <a href="/product/2" className="productLInk"><img className="productImage" src={require('../assets/images/item2.jpg')}></img></a>
                    <br />
                    <a href="/product/2" className="productLInk">It's a good day to code</a>
                </li>
            </ul>        
        </>
    )
}