import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

function NameForm() {
    const navigate = useNavigate();

    function goToConfirmation(e) {
        e.preventDefault();

        // Get values from DOM elements
        const fName = document.getElementById('fName').value;
        const password = document.getElementById('password').value;

        // Remove previous error styling
        document.getElementById('fName').classList.remove('error');
        document.getElementById('password').classList.remove('error');
            if (fName && password){
                navigate(`/home`);
            }
            else{
                document.getElementById('fName').classList.add('error');
                document.getElementById('password').classList.add('error');
                
            }
    }

    return (
        <> 
        
            <section className='fContainer'>
                
            <img src='./images/logo2.png' className='myLogo'></img>
            <form className='landingF' onSubmit={goToConfirmation}>
                <section>
                    <label>User Name:<br/>
                        <input type="text" id="fName" />
                    </label>
                </section>
                <section>
                    <label>Password:<br/>
                    <input type="password" id="password" />
                    </label>
                </section>
                <input className="submit" type="submit" value="Sign In" />
                <Link className="myBacks" to="/create">Sign Up</Link>
                <Link className="myBacks" to="/forget">Forget Password</Link>
                
            </form>
            
            </section>
            
            <section className='pImage'>
            <img src='./images/rm.png' ></img>
            <img src='./images/je.jpg'  ></img>
            </section>
            <p className='fPara'>Welcome to Champions 14, your destination for top-quality 
            jerseys that effortlessly blend style and sport. At Champions 14, we take pride in offering 
            a curated collection of jerseys that transcend mere sportswear, embodying the spirit of 
            champions across various disciplines. Whether you're a devoted fan, an aspiring athlete, 
            or someone with an eye for athletic-inspired fashion, our online store caters to your passion
            for excellence. From iconic team jerseys to exclusive designs, each garment at Champions 14 is a 
            testament to the dedication, resilience, and victorious spirit that defines a true champion. Explore our 
            extensive range of jerseys that not only showcase your favorite teams but also reflect 
            your commitment to sporting greatness.</p>
            <div className='divider'></div>
            
        </>
    );
}

export default NameForm;
