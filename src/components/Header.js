import React from 'react';

class Header extends React.Component
{
  render()
  {
    return (
      <div className="header">
        <div className="container">
          <div className="layouts_logo">
            <a href="index.html"><h1>Tokoflix<span>Movies</span></h1></a>
          </div>
          <div className="w3_search">
            <form action="#" method="post">
              <input type="text" name="Search" placeholder="Search" required=""/>
              <input type="submit" value="Go"/>
            </form>
          </div>
          {/* <div className="w3l_sign_in_register">
            <ul>
              <li><i className="fa fa-phone" aria-hidden="true"></i> (+000) 123 345 653</li>
              <li><a href="#" data-toggle="modal" data-target="#myModal">Login</a></li>
            </ul>
          </div> */}
          <div className="clearfix"> </div>
        </div>
      </div>
    );
  }
}

export default Header;