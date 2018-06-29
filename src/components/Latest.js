import React from 'react';
import $ from 'jquery';

import MovieRow from './MovieRow';

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
    const tmdbURL = 'https://api.themoviedb.org/3/search/movie?api_key=1c67c0067c6a82a74b92665f1e488325&query=' + keyword;
    $.ajax({
      url: tmdbURL,
      success: (searchResults) =>
      {
        // console.log('Successfuly fetched the Movie data');
        const results = searchResults.results;
        
        // console.log(results);
        var movieRows = [];

        if(results.length != 0)
        {
          results.forEach(movie =>
          {
            const mRow = <MovieRow key={movie.id} movie={movie} />; 
            movieRows.push(mRow);
          });
        }
        else
        {
          movieRows.push(
            <div>
              <h3>Nothing found</h3>
              <br/>
              <p>Based on your search, we found none.</p>
              <p>Make sure to check your search again or subscribe for more upcoming movies.</p>
            </div>
          );
        }

        this.setState({ rows: movieRows });
      },
      error: (xhr, status, err) =>
      {
        // console.log('Failed to fetch movie data');
      }
    })
  }

  onSearchHandler(e)
  {
    // console.log(e.target.value);
    const searchTerm = e.target.value;
    this.performSearch(searchTerm);
  }

  render()
  {
    return (
      <div className="general">
        <div className="container">
        <input
                type="text"
                name="Search"
                placeholder="Search ..."
                required=""
                onChange={this.onSearchHandler}
                />
          <h4 className="latest-text w3_latest_text" style={{ marginLeft: '0' }}>Latest Movies</h4>
          <div className="bs-example bs-example-tabs" role="tabpanel" data-example-id="togglable-tabs">
            {/* <ul id="myTab" className="nav nav-tabs" role="tablist">
              <li role="presentation" className="active"><a href="#home" id="home-tab" role="tab" data-toggle="tab" aria-controls="home" aria-expanded="true">Featured</a></li>
              <li role="presentation"><a href="#profile" role="tab" id="profile-tab" data-toggle="tab" aria-controls="profile" aria-expanded="false">Top viewed</a></li>
              <li role="presentation"><a href="#rating" id="rating-tab" role="tab" data-toggle="tab" aria-controls="rating" aria-expanded="true">Top Rating</a></li>
              <li role="presentation"><a href="#imdb" role="tab" id="imdb-tab" data-toggle="tab" aria-controls="imdb" aria-expanded="false">Recently Added</a></li>
            </ul> */}
            <div id="myTabContent" className="tab-content">
              <div role="tabpanel" className="tab-pane fade active in" id="home" aria-labelledby="home-tab">
                <div className="w3_agile_featured_movies">

                  {
                    this.state.rows == undefined ?
                      <p>Please search by title above ...</p>
                    :
                      this.state.rows
                  }

                  <div className="clearfix"> </div>
                </div>
              </div>
              <div className="clearfix"> </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Latest;