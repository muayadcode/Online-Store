
import { Link } from 'react-router-dom';
function Confirmation(){
   
    return (
        <>
        <div className="home-container">
            <div className="banner">Banner Cover</div>
            <div className="category-container">
            <div className="categories">category 1</div>
            <div className="categories">category 2</div>
            <div className="categories">category 3</div>
            </div>
            
            <div className="item-container">
            <div className="item">Item 1 
            <p>descrption</p>
            <p>price</p>
            <Link className="myCart" to="/cart">Add To Cart</Link>
            <Link to="/cart"><button className="myButton">Buy It Know</button></Link>
            </div>
            
            <div className="item">Item 2
            <p>descrption</p>
            <p>price</p>
            <Link className="myCart" to="/cart">Add To Cart</Link>
            <Link to="/cart"><button className="myButton">Buy It Know</button></Link>
            </div>
            
            <div className="item">Item 3
            <p>descrption</p>
            <p>price</p>
            <Link className="myCart" to="/cart">Add To Cart</Link>
            <Link to="/cart"><button className="myButton">Buy It Know</button></Link>
            </div>

            </div>
            <div className="item-container">
            <div className="item">Item 4
            <p>descrption</p>
            <p>price</p>
            <Link className="myCart" to="/cart">Add To Cart</Link>
            <Link to="/cart"><button className="myButton">Buy It Know</button></Link>
            </div>
            
            <div className="item">Item 5
            <p>descrption</p>
            <p>price</p>
            <Link className="myCart" to="/cart">Add To Cart</Link>
            <Link to="/cart"><button className="myButton">Buy It Know</button></Link>
            </div>
            <div className="item">Item 6
            <p>descrption</p>
            <p>price</p>
            <Link className="myCart" to="/cart">Add To Cart</Link>
            <Link to="/cart"><button className="myButton">Buy It Know</button></Link>
            </div>
            </div>
            
        </div>
        </>
    )
}
export default Confirmation;