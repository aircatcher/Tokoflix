import React from 'react';
import $ from 'jquery';

import MovieRow from '../../MovieRow';

import Navbar from '../Navbar';
import Popup from '../Popup';

// import InfiniteScroll from 'infinite-scroll';

import '../../../includes/css/style.css';

var tp = 0;
// var page_num_search = 1;
var page_num_np = 1;
var blc = 0;
if(localStorage.getItem('userBalance') === null)
{
  blc = 100000;
  localStorage.setItem('userBalance', blc);
}
else
{
  blc = localStorage.getItem('userBalance');
}

export const priceFormat = (x) =>
{
  var parts = x.toString().split(".");
  parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, "."/* Change this part for comma, dot, or any character you want on here */);
  return parts.join(".");
}

class UserLibrary extends React.Component
{
  constructor(props)
  {
    super(props);
    this.state = {};
  }
  
  balance()
  {
    var formattedBlc = priceFormat(blc);
    return formattedBlc;
  }

  logout()
  {
    localStorage.clear();
    window.location.reload();
  }

  onSearchHandler()
  {
    window.location.href = '/';
  }

  handleScroll = () =>
  {
    if(this.scroller && this.scroller.scrollTop < 100)
      console.log(this.scroller.scrollTop)
  }

  render()
  {
    return (
      <div
        onScroll={this.handleScroll}
        ref={scroller => this.scroller = scroller}
      >
        <div className="header">
          <div className="container">
            <div className="layouts_logo">
              <a href="/"><h1>Tokoflix<span>Movies</span></h1></a>
            </div>
            <div className="w3_search">
              {/* <form action={null} method="post"> */}
                <input
                  type="text"
                  name="Search"
                  placeholder="Search for movies or series ..."
                  required=""
                  onClick={this.onSearchHandler}
                />
                {/* <input type="submit" value="Go"/> */}
              {/* </form> */}
            </div>
            <div className="w3l_sign_in_register">
              <ul className="pull-right">
                {
                  (localStorage.getItem('Authorization') === null && localStorage.getItem('Auth Status') === null) ?
                    <li>
                      <a data-toggle="modal" data-target="#authModal" style={{cursor: 'pointer'}}>Login</a>
                    </li>
                  :
                  ([
                    <li key="0">
                      <i className="fa fa-money" aria-hidden="true"></i>
                      Rp {this.balance()}
                    </li>,
                    <li key="1">
                      <a onClick={this.logout} style={{cursor: 'pointer'}}>Logout</a>
                    </li>
                  ])
                }
              </ul>
            </div>
            <div className="clearfix"> </div>
          </div>
        </div>

        <Popup />

        <Navbar />

        <div className="general">
          <div className="container">
            <div className="container-fluid" style={{ marginBottom: 15 }}>
              <div className="col-md-6">
                <h4 className="latest-text w3_latest_text pull-left" id="page-heading-text" style={{marginLeft: -15}}>Unauthorized</h4>
              </div>
            </div>
            
            <div className="bs-example bs-example-tabs" role="tabpanel" data-example-id="togglable-tabs">
              {/* <ul id="myTab" className="nav nav-tabs" role="tablist">
                <li role="presentation" className="active"><a href="#home" id="home-tab" role="tab" data-toggle="tab" aria-controls="home" aria-expanded="true">Featured</a></li>
                <li role="presentation"><a href="#profile" role="tab" id="profile-tab" data-toggle="tab" aria-controls="profile" aria-expanded="false">Top viewed</a></li>
                <li role="presentation"><a href="#rating" id="rating-tab" role="tab" data-toggle="tab" aria-controls="rating" aria-expanded="true">Top Rating</a></li>
                <li role="presentation"><a href="#imdb" role="tab" id="imdb-tab" data-toggle="tab" aria-controls="imdb" aria-expanded="false">Recently Added</a></li>
              </ul> */}
              <div id="myTabContent" className="tab-content">
                <div role="tabpanel" className="tab-pane fade active in" id="latest-flix-list" aria-labelledby="home-tab">
                  <p>You're unauthorized to access this page. Please login before accessing this page</p>
                </div>

                <div className="clearfix"> </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default UserLibrary;