import React from 'react';
import $ from 'jquery';

class Navbar extends React.Component
{
  constructor(props)
  {
    super(props);
    this.state = {};
  }

  componentWillMount()
  {
    this.getGenreList();
  }

  getGenreList()
  {
    var api_key = '1c67c0067c6a82a74b92665f1e488325';
    const tmdbMovieGenres = 'https://api.themoviedb.org/3/genre/movie/list?api_key=' + api_key + '&language=en-US';
    const tmdbTVGenres    = 'https://api.themoviedb.org/3/genre/tv/list?api_key=' + api_key + '&language=en-US';

    /**
     * List of Available Movie Genres from TMDb
     */
    var genreListMovies = [];
    $.ajax({
      url: tmdbMovieGenres,
      success: (result) =>
      {
        result.genres.forEach(genre => { genreListMovies.push(genre.name) })
        let genre_movies_col = '';
        genreListMovies.forEach(genre => { genre_movies_col += `<li><a href="#">${genre}</a></li>` });
        document.getElementById('genre-movies-col').innerHTML = genre_movies_col;
      }
    });

    /**
     * List of Available TV Genres from TMDb
     */
    var genreListTV = [];
    $.ajax({
      url: tmdbTVGenres,
      success: (result) =>
      {
        result.genres.forEach(genre => { genreListTV.push(genre.name) })
        let genre_tv_col = '';
        genreListTV.forEach(genre => { genre_tv_col += `<li><a href="#">${genre}</a></li>` });
        document.getElementById('genre-tv-col').innerHTML = genre_tv_col;
      }
    });
  }

  render()
  {
    return (
      <div className="movies_nav">
        <div className="container">
          <nav className="navbar navbar-default">
            <div className="navbar-header navbar-left">
              <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">
                <span className="sr-only">Toggle navigation</span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
              </button>
            </div>
            {/* Collect the nav links, forms, and other content for toggling */}
            <div className="collapse navbar-collapse navbar-right" id="bs-example-navbar-collapse-1">
              <nav>
                <ul className="nav navbar-nav">
                  {
                    window.location.pathname === '/' ?
                      <li className="active"><a href="/">Home</a></li>
                    :
                      <li><a href="/">Home</a></li>
                  }
                    
                  <li className="dropdown">
                    <a href={null} className="dropdown-toggle" data-toggle="dropdown">Genres <b className="caret"></b></a>
                    <ul className="dropdown-menu multi-column columns-2">
                      <li>
                        <div className="col-sm-6" style={{background:'aliceblue'}}>
                          Movies<hr/>
                          <ul className="multi-column-dropdown" id="genre-movies-col"></ul>
                        </div>
                        
                        <div className="col-sm-6" style={{background:'antiquewhite'}}>
                          TV<hr/>
                          <ul className="multi-column-dropdown" id="genre-tv-col"></ul>
                        </div>
                        <div className="clearfix"></div>
                      </li>
                    </ul>
                  </li>

                  {
                    (localStorage.getItem('Authorization') !== null || localStorage.getItem('Auth Status') === 'true') &&
                      (
                        window.location.pathname === '/library' ?
                        <li className="active"><a href="/library">My Library</a></li>
                      :
                        <li><a href="/library">My Library</a></li>
                      )
                  }
                </ul>
              </nav>
            </div>
          </nav>	
        </div>
      </div>
    );
  }
}

export default Navbar;