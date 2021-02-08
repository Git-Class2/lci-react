import React from 'react';
import './blog.css';
import f from './img/f.jpg';
import i from './img/i.jpg';
import video2 from './videos/video2.mp4';

function  blog() {
    return(
        <div>
            <video className='videoTag' autoPlay loop muted>
                <source src={video2} type='video/mp4' />
            </video>
            {/* <video src={video2} autoPlay="loop"></video> */}
            <h1>Tasty Hamburger that</h1>
            <h2>Quentches your hunger</h2>
            <h5>Lorem ipsum dolor sit amet consectetur<br></br> adipisicing elit. Doloribus voluptatem <br></br> natus vero laudantium sed dolore<br></br> neque saepe laborum, perspiciatis<br></br> inventore nam, et enim! Voluptates<br></br> inventore, molestias ipsum quidem minima illum.</h5><br></br>
                        
                        
            <main id="profile">
				<section class="title-text">
					<p>Blog</p>
				</section>
					<section class="profile-content">
							<section class="features-img">
							<img src={f} alt=""/>	
						</section>
						<section>
							<p class="profile-text">
								Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
								tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
								quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
								consequat. Duis aute irure dolor in reprehenderit in voluptate velit ess. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
								tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
								quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
								consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
								cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
								proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
							</p>    
						</section>
					</section>
			</main>
			<main id="profile">
				<section class="title-text">
				</section>
					<section class="profile-content">
						<section>
							<p class="profile-text">
								Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
								tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
								quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
								consequat. Duis aute irure dolor in reprehenderit in voluptate velit ess. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
								tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
								quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
								consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
								cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
								proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
							</p>    
						</section>
					<section class="features-img">
								<img src={i} alt=""/>	
							</section>
					</section>
			</main>
         </div>  
      
    );
}
export default blog;