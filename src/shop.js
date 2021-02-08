import React from 'react';
import './shop.css';
import i from './img/i.jpg';
import j from './img/j.jpg';
import k from './img/k.jpg';
// import l from './img/l.jpg';



function  shop() {
    return(
        <div>
    <div id="service">
            <section class="title-text">
                <p>SHOP</p>
                {/* <h1>We Provide Better</h1>  */}
            </section>

		<div class="service-box">
			<div class="single-service">
                <div className="box">
				    <div className="overlay">
                        <img src={i} alt=""/>
                        <div className="service-desc">
                            <h3>Hamburger with Sause on paddies</h3>
                            <hr></hr>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                            tempor incididunt ut labore et dolore magna aliqua.</p>
                        </div>
                    </div>
                </div>
			</div>

                <div class="single-service">
                    <img src={j} alt=""/>
                    <div class="overlay">
                        <div class="service-desc">
                            <h3>Hamburger with Sause on paddies</h3>
                            <hr></hr>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                            tempor incididunt ut labore et dolore magna aliqua.</p>
                        </div>
                    </div>
                </div>

			<div className="single-service">
				<img src={k} alt=""/>
				<div className="overlay">
                    <div className="service-desc">
                        <h3>Hamburger with Sause on paddies</h3>
                        <hr></hr>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                        tempor incididunt ut labore et dolore magna aliqua.</p>
                    </div>
                </div>
			</div>
            
            <div class="single-service">
                    <img src={i} alt=""/>
                    <div class="overlay">
                        <div class="service-desc">
                            <h3>Graphic Designs</h3>
                            <hr></hr>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                            tempor incididunt ut labore et dolore magna aliqua.</p>
                        </div>
                    </div>
            </div>
		</div>
	</div>

    </div>
    );
}
export default shop;