import React from 'react';

var rating = 0;

class MovieRow extends React.Component
{
  constructor(props)
  {
    super(props);
    this.viewDetails = this.viewDetails.bind(this);
    // this.starRatings = this.starRatings.bind(this);
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
    // console.log(title);

    var genURL = '/' + movieID + '/' + title;
    localStorage.setItem('selMovieID', movieID);
    localStorage.setItem('movieDetailsURL', genURL);
    window.location.href = genURL;
  }

  // starRatings()
  // {
  //   if(rating >= 0     && rating <= 0.5) { <li><i className="fa fa-star-half-o" aria-hidden="true"></i></li> }
  //   else if(rating >= 0.51  && rating <= 1) { <li><i className="fa fa-star" aria-hidden="true"></i></li> }
  //   else if(rating >= 1.01  && rating <= 1.5)
  //   {
  //     <div>
  //       <li><i className="fa fa-star" aria-hidden="true"></i></li>
  //       <li><i className="fa fa-star-half-o" aria-hidden="true"></i></li>
  //       <li><i className="fa fa-star-o" aria-hidden="true"></i></li>
  //       <li><i className="fa fa-star-o" aria-hidden="true"></i></li>
  //       <li><i className="fa fa-star-o" aria-hidden="true"></i></li>
  //     </div>
  //   }
  //   else if(rating >= 1.51  && rating <= 2)
  //   {
  //     <div>
  //       <li><i className="fa fa-star" aria-hidden="true"></i></li>
  //       <li><i className="fa fa-star" aria-hidden="true"></i></li>
  //       <li><i className="fa fa-star-o" aria-hidden="true"></i></li>
  //       <li><i className="fa fa-star-o" aria-hidden="true"></i></li>
  //       <li><i className="fa fa-star-o" aria-hidden="true"></i></li>
  //     </div>
  //   }
  //   else if(rating >= 2.01  && rating <= 2.5)
  //   {
  //     <div>
  //       <li><i className="fa fa-star" aria-hidden="true"></i></li>
  //       <li><i className="fa fa-star" aria-hidden="true"></i></li>
  //       <li><i className="fa fa-star-half-o" aria-hidden="true"></i></li>
  //       <li><i className="fa fa-star-o" aria-hidden="true"></i></li>
  //       <li><i className="fa fa-star-o" aria-hidden="true"></i></li>
  //     </div>
  //   }
  //   else if(rating >= 2.51  && rating <= 3)
  //   {
  //     <div>
  //       <li><i className="fa fa-star" aria-hidden="true"></i></li>
  //       <li><i className="fa fa-star" aria-hidden="true"></i></li>
  //       <li><i className="fa fa-star" aria-hidden="true"></i></li>
  //       <li><i className="fa fa-star-o" aria-hidden="true"></i></li>
  //       <li><i className="fa fa-star-o" aria-hidden="true"></i></li>
  //     </div>
  //   }
  //   else if(rating >= 3.01  && rating <= 3.5)
  //   {
  //     <div>
  //       <li><i className="fa fa-star" aria-hidden="true"></i></li>
  //       <li><i className="fa fa-star" aria-hidden="true"></i></li>
  //       <li><i className="fa fa-star" aria-hidden="true"></i></li>
  //       <li><i className="fa fa-star-half-o" aria-hidden="true"></i></li>
  //       <li><i className="fa fa-star-o" aria-hidden="true"></i></li>      
  //     </div>
  //   }
  //   else if(rating >= 3.51  && rating <= 4)
  //   {
  //     <div>
  //       <li><i className="fa fa-star" aria-hidden="true"></i></li>
  //       <li><i className="fa fa-star" aria-hidden="true"></i></li>
  //       <li><i className="fa fa-star" aria-hidden="true"></i></li>
  //       <li><i className="fa fa-star" aria-hidden="true"></i></li>
  //       <li><i className="fa fa-star-o" aria-hidden="true"></i></li>
  //     </div>
  //   }
  //   else if(rating >= 4.01  && rating <= 4.5)
  //   {
  //     <div>
  //       <li><i className="fa fa-star" aria-hidden="true"></i></li>
  //       <li><i className="fa fa-star" aria-hidden="true"></i></li>
  //       <li><i className="fa fa-star" aria-hidden="true"></i></li>
  //       <li><i className="fa fa-star" aria-hidden="true"></i></li>
  //       <li><i className="fa fa-star-half-o" aria-hidden="true"></i></li>
  //     </div>
  //   }
  //   else(rating >= 4.51  && rating <= 5)
  //   {
  //     <div>
  //       <li><i className="fa fa-star" aria-hidden="true"></i></li>
  //       <li><i className="fa fa-star" aria-hidden="true"></i></li>
  //       <li><i className="fa fa-star" aria-hidden="true"></i></li>
  //       <li><i className="fa fa-star" aria-hidden="true"></i></li>
  //       <li><i className="fa fa-star" aria-hidden="true"></i></li>
  //     </div>
  //   }
  // }

  render()
  {
    const { movie } = this.props;
    rating = movie.vote_average/2;

    return (
      <div className="col-md-2" id="movie-row-container">
      
        <a onClick={this.viewDetails} className="hvr-shutter-out-horizontal" style={{cursor: 'pointer'}}>
          {(
            // console.log(movie.poster_path),
            movie.poster_path != null ?
              <img src={'https://image.tmdb.org/t/p/w185' + movie.poster_path} title={movie.title} className="img-responsive" alt=" " />
            :
              <img src='images/no-poster.png' title={movie.title} className="img-responsive" alt=" " />
          )}
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
                { (rating >= 0     && rating <= 0.5) && <li><i className="fa fa-star-half-o" aria-hidden="true"></i></li> }
                { (rating >= 0.51  && rating <= 1  ) && <li><i className="fa fa-star" aria-hidden="true"></i></li> }
                {
                  (rating >= 1.01  && rating <= 1.5) &&
                  ([
                    <li key='1'><i className="fa fa-star" aria-hidden="true"></i></li>,
                    <li key='2'><i className="fa fa-star-half-o" aria-hidden="true"></i></li>,
                    <li key='3'><i className="fa fa-star-o" aria-hidden="true"></i></li>,
                    <li key='4'><i className="fa fa-star-o" aria-hidden="true"></i></li>,
                    <li key='5'><i className="fa fa-star-o" aria-hidden="true"></i></li>
                  ])
                }
                {
                  (rating >= 1.51  && rating <= 2  ) &&
                  ([
                    <li key='1'><i className="fa fa-star" aria-hidden="true"></i></li>,
                    <li key='2'><i className="fa fa-star" aria-hidden="true"></i></li>,
                    <li key='3'><i className="fa fa-star-o" aria-hidden="true"></i></li>,
                    <li key='4'><i className="fa fa-star-o" aria-hidden="true"></i></li>,
                    <li key='5'><i className="fa fa-star-o" aria-hidden="true"></i></li>
                  ])
                }
                {
                  (rating >= 2.01  && rating <= 2.5) &&
                  ([
                    <li key='1'><i className="fa fa-star" aria-hidden="true"></i></li>,
                    <li key='2'><i className="fa fa-star" aria-hidden="true"></i></li>,
                    <li key='3'><i className="fa fa-star-half-o" aria-hidden="true"></i></li>,
                    <li key='4'><i className="fa fa-star-o" aria-hidden="true"></i></li>,
                    <li key='5'><i className="fa fa-star-o" aria-hidden="true"></i></li>
                  ])
                }
                {
                  (rating >= 2.51  && rating <= 3  ) &&
                  ([
                    <li key='1'><i className="fa fa-star" aria-hidden="true"></i></li>,
                    <li key='2'><i className="fa fa-star" aria-hidden="true"></i></li>,
                    <li key='3'><i className="fa fa-star" aria-hidden="true"></i></li>,
                    <li key='4'><i className="fa fa-star-o" aria-hidden="true"></i></li>,
                    <li key='5'><i className="fa fa-star-o" aria-hidden="true"></i></li>
                  ])
                }
                {
                  (rating >= 3.01  && rating <= 3.5) &&
                  ([
                    <li key='1'><i className="fa fa-star" aria-hidden="true"></i></li>,
                    <li key='2'><i className="fa fa-star" aria-hidden="true"></i></li>,
                    <li key='3'><i className="fa fa-star" aria-hidden="true"></i></li>,
                    <li key='4'><i className="fa fa-star-half-o" aria-hidden="true"></i></li>,
                    <li key='5'><i className="fa fa-star-o" aria-hidden="true"></i></li>
                    
                  ])
                }
                {
                  (rating >= 3.51  && rating <= 4  ) &&
                  ([
                    <li key='1'><i className="fa fa-star" aria-hidden="true"></i></li>,
                    <li key='2'><i className="fa fa-star" aria-hidden="true"></i></li>,
                    <li key='3'><i className="fa fa-star" aria-hidden="true"></i></li>,
                    <li key='4'><i className="fa fa-star" aria-hidden="true"></i></li>,
                    <li key='5'><i className="fa fa-star-o" aria-hidden="true"></i></li>
                  ])
                }
                {
                  (rating >= 4.01  && rating <= 4.5) &&
                  ([
                    <li key='1'><i className="fa fa-star" aria-hidden="true"></i></li>,
                    <li key='2'><i className="fa fa-star" aria-hidden="true"></i></li>,
                    <li key='3'><i className="fa fa-star" aria-hidden="true"></i></li>,
                    <li key='4'><i className="fa fa-star" aria-hidden="true"></i></li>,
                    <li key='5'><i className="fa fa-star-half-o" aria-hidden="true"></i></li>
                  ])
                }
                {
                  (rating >= 4.51  && rating <= 5  ) &&
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