import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const Header = ({ siteTitle }) => (
<header> 
  <section id="stuck_container">
    <div class="container">
      <div class="row">
        <div class="grid_12">
        <h1>
          <a href="index.html">
            <img src="images/logo.png" alt="Logo alt"/>
          </a>
        </h1>  
          <div class="navigation">
            <nav>
              <ul class="sf-menu">
               <li class="current"><a href="index.html">home</a></li>
               <li><a href="index-1.html">menu</a></li>
               <li><a href="index-2.html">reservation</a></li>
               <li><a href="index-3.html">blog</a></li>
               <li><a href="index-4.html">contacts</a></li>
             </ul>
            </nav>        
            <div class="clear"></div>
          </div>
        </div>
      </div>
    </div>
  </section> 
</header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: `foodie gyan`,
}

export default Header