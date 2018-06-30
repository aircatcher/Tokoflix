import React from 'react';
import $ from 'jquery';

import MovieRow from './MovieRow';

import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

import Popup from '../components/Popup';

import '../includes/css/style.css';

class Latest extends React.Component
{
  constructor(props)
  {
    super(props);

    this.onSearchHandler = this.onSearchHandler.bind(this)

    // const movies = [
    //   {
    //     id: 0,
    //     title: "Avengers",
    //     overview: "overview oasdkokok kaowodoakwd",
    //     poster_src: "https://image.tmdb.org/t/p/w500/kqjL17yufvn9OVLyXYpvtyrFfak.jpg"
    //   },
    //   {
    //     id: 1,
    //     title: "Avengers 2",
    //     overview: "overview 2 oasdkokok 2 kaowodoakwd 2",
    //     poster_src: "https://image.tmdb.org/t/p/w500/kqjL17yufvn9OVLyXYpvtyrFfak.jpg"
    //   },
    // ];

    // var movieRows = [];
    // movies.forEach((movie) =>
    // {
    //   const single = <MovieRow movie={movie} />
    //   movieRows.push(single);
    //   // movieRows.push([movie.id, movie.title, movie.overview])
    // });

    // // console.log(movieRows[0][1]);

    // this.state = {
    //   rows: movieRows
    // };

    this.state = {};

    this.performSearch("");
  }

  performSearch(keyword)
  {
    if(keyword !== "")
    {
      var api_key = '1c67c0067c6a82a74b92665f1e488325';
      var page_num = 1;
      const tmdbURL = 'https://api.themoviedb.org/3/search/movie?query=' + keyword + '&api_key=' + api_key + '&page=' + page_num;
      $.ajax({
        url: tmdbURL,
        success: (searchResults) =>
        {
          // console.log('Successfuly fetched the Movie data');
          const results = searchResults.results;
          
          // console.log(results[0]);
          var movieContents = [];

          if(results.length !== 0)
          {
            var qs = document.getElementById('latest-flix-list').innerHTML;
            
            for(var i = 0; i < results.length; i++)
            {
              if(i === 0)
              {
                qs = '<div class="col-md-2">';
              }
              else if(i%6 !== 0)
              {
                const mRow = <MovieRow key={results[i].id} movie={results[i]} />;
                movieContents.push(mRow);
              }
              else
              {
                const mRow = <MovieRow key={results[i].id} movie={results[i]} />;
                qs += '</div><div class="col-md-2">' + mRow;
                movieContents.push(mRow);
              }
            }
          }
          else
          {
            movieContents.push(
              <div className="col-md">
                <h3>Nothing found</h3>
                <br/>
                <p>Based on your search, we found none.</p>
                <p>Make sure to check your search again or subscribe for more upcoming movies.</p>
              </div>
            );
          }

          this.setState(
          {
            contents: movieContents
          });
        },
        error: (xhr, status, err) =>
        {
          // console.log('Failed to fetch movie data');
        }
      })
    }
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
        style={{ overflowY: 'auto' }}
        onScroll={this.handleScroll}
        ref={scroller => this.scroller = scroller}
      >
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

        <Popup />
        <Navbar />

        <div className="general">
          <div className="container">
            <h4 className="latest-text w3_latest_text" style={{ marginLeft: '0' }}>Latest Movies</h4>
            <div className="bs-example bs-example-tabs" role="tabpanel" data-example-id="togglable-tabs">
              {/* <ul id="myTab" className="nav nav-tabs" role="tablist">
                <li role="presentation" className="active"><a href="#home" id="home-tab" role="tab" data-toggle="tab" aria-controls="home" aria-expanded="true">Featured</a></li>
                <li role="presentation"><a href="#profile" role="tab" id="profile-tab" data-toggle="tab" aria-controls="profile" aria-expanded="false">Top viewed</a></li>
                <li role="presentation"><a href="#rating" id="rating-tab" role="tab" data-toggle="tab" aria-controls="rating" aria-expanded="true">Top Rating</a></li>
                <li role="presentation"><a href="#imdb" role="tab" id="imdb-tab" data-toggle="tab" aria-controls="imdb" aria-expanded="false">Recently Added</a></li>
              </ul> */}
              <div id="myTabContent" className="tab-content">
                <div role="tabpanel" className="tab-pane fade active in" id="latest-flix-list" aria-labelledby="home-tab">

                    {
                      this.state.contents === undefined ?
                        'Please search by title above ...'
                      :
                        this.state.contents
                    }

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