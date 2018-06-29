import React from 'react';

class Footer extends React.Component
{
  render()
  {
    return (
      <div className="footer">
        <div className="container">
          <div className="w3ls_footer_grid">
            <div className="col-md-6 w3ls_footer_grid_left">
              <div className="w3ls_footer_grid_left1">
                <h2>Subscribe to us</h2>
                <div className="w3ls_footer_grid_left1_pos">
                  <form action="#" method="post">
                    <input type="email" name="email" placeholder="Your email..." required=""/>
                    <input type="submit" value="Send"/>
                  </form>
                </div>
              </div>
            </div>
            <div className="col-md-6 w3ls_footer_grid_right">
              <a href="index.html"><h2>One<span>Movies</span></h2></a>
            </div>
            <div className="clearfix"> </div>
          </div>
          <div className="col-md-5 w3ls_footer_grid1_left">
            <p>&copy; 2016 One Movies. All rights reserved | Design by <a href="http://w3layouts.com/">W3layouts</a></p>
          </div>
          <div className="col-md-7 w3ls_footer_grid1_right">
            <ul>
              <li>
                <a href="genres.html">Movies</a>
              </li>
              <li>
                <a href="faq.html">FAQ</a>
              </li>
              <li>
                <a href="horror.html">Action</a>
              </li>
              <li>
                <a href="genres.html">Adventure</a>
              </li>
              <li>
                <a href="comedy.html">Comedy</a>
              </li>
              <li>
                <a href="icons.html">Icons</a>
              </li>
              <li>
                <a href="contact.html">Contact Us</a>
              </li>
            </ul>
          </div>
          <div className="clearfix"> </div>
        </div>
      </div>
    );
  }
}

export default Footer;