import React from 'react';

class Header extends React.Component
{
  render()
  {
    const { movie } = this.props;

    return (
      <div className="header">
        <div className="container">
          <div className="layouts_logo">
            <a href="index.html"><h1>Tokoflix<span>Movies</span></h1></a>
          </div>
          <div className="w3_search">
            {/* <form action={null} method="post"> */}
              <input
                type="text"
                name="Search"
                placeholder="Search ..."
                required=""
                onChange={this.onSearchHandler}
              />
              {/* <input type="submit" value="Go"/> */}
            {/* </form> */}
          </div>
          {/* <div className="w3l_sign_in_register">
            <ul>
              <li><i className="fa fa-phone" aria-hidden="true"></i> (+000) 123 345 653</li>
              <li><a href={null} data-toggle="modal" data-target="{null}myModal">Login</a></li>
            </ul>
          </div> */}
          <div className="clearfix"> </div>
        </div>
      </div>
    );
  }
}

export default Header;