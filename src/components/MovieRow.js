import React from 'react';

class MovieRow extends React.Component
{
  render()
  {
    const { movie } = this.props;

    return (
      <div className="col-md-2 w3l-movie-gride-agile">
      
        <a href="single.html" className="hvr-shutter-out-horizontal">
          {
            console.log(movie.poster_path),
            movie.poster_path != null ?
              <img src={'https://image.tmdb.org/t/p/w185' + movie.poster_path} title="album-name" className="img-responsive" alt=" " />
            :
              <img src='images/no-poster.png' title="album-name" className="img-responsive" alt=" " />
          }
          <div className="w3l-action-icon"><i className="fa fa-play-circle" aria-hidden="true"></i></div>
        </a>

        <div className="mid-1 agileits_w3layouts_mid_1_home">
          <div className="w3l-movie-text">
            <h6><a href="single.html">{movie.title}</a></h6>
          </div>
          <div className="mid-2 agile_mid_2_home">
            <p>2016</p>
            <div className="block-stars">
              <ul className="w3l-ratings">
                <li><a href="#"><i className="fa fa-star" aria-hidden="true"></i></a></li>
                <li><a href="#"><i className="fa fa-star" aria-hidden="true"></i></a></li>
                <li><a href="#"><i className="fa fa-star" aria-hidden="true"></i></a></li>
                <li><a href="#"><i className="fa fa-star" aria-hidden="true"></i></a></li>
                <li><a href="#"><i className="fa fa-star-half-o" aria-hidden="true"></i></a></li>
              </ul>
            </div>
            <div className="clearfix"></div>
          </div>
        </div>

        {/* <div className="ribben">
          <p>NEW</p>
        </div> */}

      </div>
    );
  }
}

export default MovieRow;