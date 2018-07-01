import React from 'react';
import $ from 'jquery';

import MovieRow from '../MovieRow';

import Navbar from './Navbar';
import Popup from './Popup';

import '../../includes/css/style.css';

var tp = 0;
var page_num_search = 1;
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
var price = 0;

export const priceFormat = (x) =>
{
  var parts = x.toString().split(".");
  parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, "."/* Change this part for comma, dot, or any character you want on here */);
  return parts.join(".");
}

class Latest extends React.Component
{
  constructor(props)
  {
    super(props);
    this.onSearchHandler = this.onSearchHandler.bind(this)
    this.state = {};
    this.performSearch("");
  }

  performSearch(keyword)
  {
    var api_key = '1c67c0067c6a82a74b92665f1e488325';
    var region = 'ID';

    if(keyword !== '')
    {
      page_num_search = 1;
      const tmdbURL = 'https://api.themoviedb.org/3/search/movie?query=' + keyword + '&api_key=' + api_key + '&region=' + region + '&page=' + page_num_search;
      $.ajax({
        url: tmdbURL,
        success: (searchResults) =>
        {
          // console.log('Successfuly fetched the Movie data');
          const results = searchResults.results;

          /**
           * Pagination
           */
          tp = searchResults.total_pages;
          localStorage.setItem('Total Pages', tp);

          let pagination = '';
          pagination += `<ul class="pagination pull-right" style="margin:10px 0">`;
          for(var i = 1; i < tp+1; i++)
          {
            if(i <= 9)
            {
              if(page_num_np === i)
                pagination += `<li class="active"><a href="?page=${i}">${i}</a></li>`;
              else
                pagination += `<li><a href="?page=${i}">${i}</a></li>`;
            }
            else
            {
              pagination += `<li><a href="?page=${i}">►</a></li>`;
              break;
            }
          }
          pagination += `</ul><br/><br/><br/>
          <p class="pull-right">Total Pages: ${tp}</p>`;
          document.getElementById('paginator').innerHTML = pagination;
          
          /**
           * Movie Listings
           */
          var movieContents = [];

          if(results.length !== 0)
          {
            var qs = document.getElementById('latest-flix-list').innerHTML;
            
            for(var i = 0; i < results.length; i++)
            {
              if(i === 0)
              {
                qs = '<div className="col-md-2">';
              }
              else if(i%6 !== 0)
              {
                const mRow = <MovieRow key={results[i].id} movie={results[i]} />;
                movieContents.push(mRow);
              }
              else
              {
                const mRow = <MovieRow key={results[i].id} movie={results[i]} />;
                qs += '</div><div className="col-md-2">' + mRow;
                movieContents.push(mRow);
              }
            }

            var pageHeading = document.getElementById('page-heading-text').innerHTML = 'Movies Search';
          }
          else
          {
            movieContents.push(
              <div className="col-md">
                <p>Based on your search, we found none.</p>
                <p>Make sure to check your search again or subscribe for more upcoming movies.</p>
              </div>
            );

            var pageHeading = document.getElementById('page-heading-text').innerHTML = 'Nothing Found';
          }

          this.setState(
          {
            contents: movieContents,
            heading: pageHeading
          });
        },
        error: (xhr, status, err) =>
        {
          // console.log('Failed to fetch movie data');
        }
      })
    }
    else
    {
      page_num_np = 1;
      const tmdbURL = 'https://api.themoviedb.org/3/movie/now_playing?api_key=' + api_key + '&region=' + region + '&page=' + page_num_np;
      $.ajax({
        url: tmdbURL,
        success: (npResults) =>
        {
          // console.log(npResults);
          const nowPlaying = npResults.results;

          /**
           * Pagination
           */
          tp = npResults.total_pages;
          localStorage.setItem('Total Pages', tp);

          let pagination = '';
          pagination += `<ul class="pagination pull-right" style="margin:10px 0">`;
          var pg_active_state = false;
          for(var i = 1; i < tp+1; i++)
          {
            if(page_num_np === i)
              pagination += `<li class="active"><a href="#">${i}</a></li>`;
            else
              pagination += `<li><a href="#">${i}</a></li>`;
          }
          pagination +=
            `</ul><br/><br/><br/>
            <p class="pull-right">Total Pages: ${tp}</p>`;
          document.getElementById('paginator').innerHTML = pagination;

          /**
           * Movie Listings
           */
          var movieContents = [];
          var qs = '';
          for(var i = 0; i < nowPlaying.length; i++)
          {
            // if(i === 0)
            // {
            //   qs += '<div className="col-md-2">';
            // }
            /*else*/ if(i%6 !== 0)
            {
              const mRow = <MovieRow key={nowPlaying[i].id} movie={nowPlaying[i]} />;
              movieContents.push(mRow);
            }
            else
            {
              const mRow = <MovieRow key={nowPlaying[i].id} movie={nowPlaying[i]} />;
              // qs += '</div><div className="col-md-2">' + mRow;
              movieContents.push(mRow);
            }
          }

          var pageHeading = document.getElementById('page-heading-text').innerHTML = 'Now Playing';

          this.setState(
          {
            contents: movieContents,
            heading: pageHeading
          });
        },
        error: (xhr, status, err) =>
        {
          // console.log('Failed to fetch movie data');
        }
      })
    }
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

  onSearchHandler(e)
  {
    // console.log(e.target.value);
    const searchTerm = e.target.value;
    this.performSearch(searchTerm);
  }

  handleScroll = () =>
  {
    if(this.scroller)
      console.log(this.scroller.scrollTop);
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
                  onChange={this.onSearchHandler}
                />
                {/* <input type="submit" value="Go"/> */}
              {/* </form> */}
            </div>
            <div className="w3l_sign_in_register">
              <ul className="pull-right">
                {
                  localStorage.getItem('Authorization') === null ?
                    <li><a href="#" data-toggle="modal" data-target="#authModal">Login</a></li>
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
                <h4 className="latest-text w3_latest_text pull-left" id="page-heading-text" style={{marginLeft: -15}}>{ this.state.heading }</h4>
              </div>
              <div className="col-md-6" id="paginator">
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
                  { this.state.contents }
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

export default Latest;