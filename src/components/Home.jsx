import React from 'react'
import { NavLink } from 'react-router-dom'

function Home(props){
    return(
      <div>
        <div className="banner">
      <nav>
          <div className="t1"><h1>NETFLIX</h1></div>
          <div className="t2">
              <select name="name" id="name">
                  <option value="English">English</option>
                  <option value="Kannada">Kannada</option>
                  <option value="Hindi">Hindi</option>
              </select>
              <button type="submit">Sign in</button>
          </div>
      </nav>
       <div className="t3">
       <h1>The biggest Indian hits. Ready to watch <br/>here from $ 70.</h1>
       <h2>Join today. Cancel anytime.</h2>
       <p>Ready to watch? Enter your  Email to create or restart your membership</p>
       <div className="end">
            <input type="email" name='email' placeholder='Enter Email' />
            <button type="submit">Get Started</button>
           </div>
       </div>
  </div>
  <div className="banner1">
        <div className="d1">
            <h1>Enjoy on your TV</h1>
            <p>Watch on smart TVs, PlayStation, Xbox,<br/>Chromecast,Apple TV, Blu-ray players more.</p>
        </div>
        <div className="d2">
            <img src="https://t-mobile.scene7.com/is/image/Tmusprod/netflix-hero_desktop:HERO-desktop?fmt=png&qlt=85,0&resMode=sharp2&op_usm=1.75,0.3,2,0" alt=""></img>
        </div>
    </div>
    <div className="banner3">
        <div className="d2">
            <img src="https://www.canadianreviewer.com/storage/post-images/Netflix%20Audio%20Description.png?__SQUARESPACE_CACHEVERSION=1512353932949" alt=""></img>
        </div>
        <div className="d1">
            <h1>Download your <br/>shows to watch <br/>offline</h1>
            <p>Save your favourites easily and always have <br/>something to watch.</p>
        </div>
    </div>
    <div className="banner2">
        <div className="d1">
            <h1>Watch everywhere</h1>
            <p>Stream unlimited movies and Tv <br/>shows on your phone,tablet,laptop, and TV.</p>
        </div>
        <div className="d2">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRz2N_R-G-Dyu6UZ3gAy5CsbYuhxkf68y_q7HIA_sXYSKbmAzOgEavQUsGDaAn9fPN8JYs&usqp=CAU" alt=""></img>
        </div>
    </div>
    <div className="banner4">
        <div className="d2">
            <img src="https://i.pinimg.com/originals/74/53/d2/7453d28f55a3d5ff15f1ab53506c0441.jpg" alt=""></img>
        </div>
        <div className="d1">
            <h1>Create profiles for <br/>kids</h1>
            <p>Send children on adventures with their <br/>favourite characters in a space made just <br/>for them-free with your membership.</p>
        </div>
    </div>
    <div className="banner5">
        <h1>Frequently Asked Questions</h1>
        <div className="f1">
        <div className="f2">
            <p>What is Netflix?</p>
            <button type="submit">+</button>
        </div>
        <div className="f2">
            <p>How much does Netflix cost?</p>
            <button type="submit">+</button>
        </div>
        <div className="f2">
            <p>Where can I watch?</p>
            <button type="submit">+</button>
        </div>
        <div className="f2">
            <p>How do I cancel?</p>
            <button type="submit">+</button>
        </div>
        <div className="f2">
            <p>What can I watch on Netflix?</p>
            <button type="submit">+</button>
        </div>
        <div className="f2">
            <p>Is Netflix good for kids?</p>
            <button type="submit" id="btn">+</button>
        </div>
        </div>
        <div className="f0">
            <p>Ready to watch? Enter your Email to create or restart your membership</p>
           <div className="end">
           <input type='email' id='email' placeholder='Enter Email'></input>
            <button type="submit">Get Started</button>
           </div>
        </div>
    </div>
    <div className="banner6">
        <p>Questions? Call <NavLink to={'/'}>6360361634</NavLink></p>
        <div class="ban">
            <ul>
                <li><NavLink to={'/'}>FAQ</NavLink></li>
               <li> <NavLink to={'/'}>Investor Relations</NavLink></li>
               <li> <NavLink to={'/'}>Privacy</NavLink></li>
                <li><NavLink to={'/'}>Speed Test</NavLink></li>
            </ul>
            <ul>
               <li> <NavLink to={'/'}>Help Center</NavLink></li>
               <li> <NavLink to={'/'}>Jobs</NavLink></li>
               <li> <NavLink to={'/'}>Cookie Preferences</NavLink></li>
               <li> <NavLink to={'/'}>Legal Notices</NavLink></li>
            </ul>
            <ul>
               <li> <NavLink to={'/'}>Account</NavLink></li>
               <li> <NavLink to={'/'}>Account</NavLink></li>
               <li> <NavLink to={'/'}>Corporate Information</NavLink></li>
               <li> <NavLink to={'/'}>Only on Netflix</NavLink></li>
            </ul>
            <ul>
                <li><NavLink to={'/'}>Media Center</NavLink></li>
                <li><NavLink to={'/'}>Terms of Use</NavLink></li>
                <li><NavLink to={'/'}>Contact Us</NavLink></li>
            </ul>
        </div>
        <select name="name" id="final">
            <option value="English">English</option>
            <option value="Kannada">Kannada</option>
            <option value="Hindi">Hindi</option>
        </select>
        <p id="t">Netflix India</p>
    </div>
  
      </div>

  
    )
}
export default Home