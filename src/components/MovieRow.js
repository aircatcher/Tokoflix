import React from 'react';

var rating = 0;

class MovieRow extends React.Component
{
  constructor(props)
  {
    super(props);
    this.viewDetails = this.viewDetails.bind(this);
  }

  replaceAt = function(index, replacement)
  {
    return this.substr(0, index) + replacement+ this.substr(index + replacement.length);
  }

  viewDetails()
  {
    const { movie } = this.props;
    
    var movieID = movie.id;
    var title = movie.title;

    title = title.replace(/ /g, "-");
    title = title.replace(/:/g, '');

    var genURL = '/' + movieID + '/' + title;
    localStorage.setItem('selMovieID', movieID);
    localStorage.setItem('movieDetailsURL', genURL);
    window.location.href = genURL;
  }

  render()
  {
    const { movie } = this.props;
    rating = movie.vote_average;

    return (
      <div className="col-md-2" id="movie-row-container">
      
        <a onClick={this.viewDetails} className="hvr-shutter-out-horizontal" style={{cursor: 'pointer'}}>
          {
            movie.poster_path != null ?
              <img src={'https://image.tmdb.org/t/p/w185' + movie.poster_path} title={movie.title} className="img-responsive" alt=" " />
            :
              <img src='images/no-poster.png' title={movie.title} className="img-responsive" alt=" " />
          }
          <div className="w3l-action-icon"><i className="fa fa-play-circle" aria-hidden="true"></i></div>
        </a>

        <div className="mid-1 agileits_w3layouts_mid_1_home">
          <div className="w3l-movie-text">
            <h6><a onClick={this.viewDetails} style={{cursor: 'pointer'}}>{movie.title}</a></h6>
          </div>
          <div className="mid-2 agile_mid_2_home">
            <p>2016</p>
            <div className="block-stars">
              <ul className="w3l-ratings">
                { (rating >= 0   && rating <= 1) && <li><i className="fa fa-star-half-o" aria-hidden="true"></i></li> }
                { (rating >= 1.1 && rating <= 2) && <li><i className="fa fa-star" aria-hidden="true"></i></li> }
                {
                  (rating >= 2.1 && rating <= 3) &&
                  ([
                    <li key='1'><i className="fa fa-star" aria-hidden="true"></i></li>,
                    <li key='2'><i className="fa fa-star-half-o" aria-hidden="true"></i></li>,
                    <li key='3'><i className="fa fa-star-o" aria-hidden="true"></i></li>,
                    <li key='4'><i className="fa fa-star-o" aria-hidden="true"></i></li>,
                    <li key='5'><i className="fa fa-star-o" aria-hidden="true"></i></li>
                  ])
                }
                {
                  (rating >= 3.1 && rating <= 4) &&
                  ([
                    <li key='1'><i className="fa fa-star" aria-hidden="true"></i></li>,
                    <li key='2'><i className="fa fa-star" aria-hidden="true"></i></li>,
                    <li key='3'><i className="fa fa-star-o" aria-hidden="true"></i></li>,
                    <li key='4'><i className="fa fa-star-o" aria-hidden="true"></i></li>,
                    <li key='5'><i className="fa fa-star-o" aria-hidden="true"></i></li>
                  ])
                }
                {
                  (rating >= 4.1 && rating <= 5) &&
                  ([
                    <li key='1'><i className="fa fa-star" aria-hidden="true"></i></li>,
                    <li key='2'><i className="fa fa-star" aria-hidden="true"></i></li>,
                    <li key='3'><i className="fa fa-star-half-o" aria-hidden="true"></i></li>,
                    <li key='4'><i className="fa fa-star-o" aria-hidden="true"></i></li>,
                    <li key='5'><i className="fa fa-star-o" aria-hidden="true"></i></li>
                  ])
                }
                {
                  (rating >= 5.1 && rating <= 6) &&
                  ([
                    <li key='1'><i className="fa fa-star" aria-hidden="true"></i></li>,
                    <li key='2'><i className="fa fa-star" aria-hidden="true"></i></li>,
                    <li key='3'><i className="fa fa-star" aria-hidden="true"></i></li>,
                    <li key='4'><i className="fa fa-star-o" aria-hidden="true"></i></li>,
                    <li key='5'><i className="fa fa-star-o" aria-hidden="true"></i></li>
                  ])
                }
                {
                  (rating >= 6.1 && rating <= 7) &&
                  ([
                    <li key='1'><i className="fa fa-star" aria-hidden="true"></i></li>,
                    <li key='2'><i className="fa fa-star" aria-hidden="true"></i></li>,
                    <li key='3'><i className="fa fa-star" aria-hidden="true"></i></li>,
                    <li key='4'><i className="fa fa-star-half-o" aria-hidden="true"></i></li>,
                    <li key='5'><i className="fa fa-star-o" aria-hidden="true"></i></li>
                    
                  ])
                }
                {
                  (rating >= 7.1 && rating <= 8) &&
                  ([
                    <li key='1'><i className="fa fa-star" aria-hidden="true"></i></li>,
                    <li key='2'><i className="fa fa-star" aria-hidden="true"></i></li>,
                    <li key='3'><i className="fa fa-star" aria-hidden="true"></i></li>,
                    <li key='4'><i className="fa fa-star" aria-hidden="true"></i></li>,
                    <li key='5'><i className="fa fa-star-o" aria-hidden="true"></i></li>
                  ])
                }
                {
                  (rating >= 8.1 && rating <= 9) &&
                  ([
                    <li key='1'><i className="fa fa-star" aria-hidden="true"></i></li>,
                    <li key='2'><i className="fa fa-star" aria-hidden="true"></i></li>,
                    <li key='3'><i className="fa fa-star" aria-hidden="true"></i></li>,
                    <li key='4'><i className="fa fa-star" aria-hidden="true"></i></li>,
                    <li key='5'><i className="fa fa-star-half-o" aria-hidden="true"></i></li>
                  ])
                }
                {
                  (rating >= 9.1 && rating <= 10) &&
                  ([
                    <li key='1'><i className="fa fa-star" aria-hidden="true"></i></li>,
                    <li key='2'><i className="fa fa-star" aria-hidden="true"></i></li>,
                    <li key='3'><i className="fa fa-star" aria-hidden="true"></i></li>,
                    <li key='4'><i className="fa fa-star" aria-hidden="true"></i></li>,
                    <li key='5'><i className="fa fa-star" aria-hidden="true"></i></li>
                  ])
                }
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