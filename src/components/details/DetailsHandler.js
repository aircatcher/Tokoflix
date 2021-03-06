import React from 'react';
import $ from 'jquery';
// import MovieRow from '../MovieRow';

import Navbar from '../page/Navbar';
import Popup from '../page/Popup';

import '../../includes/css/style.css';

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

class DetailsHandler extends React.Component
{
  constructor(props)
  {
    super(props);
    this.onSearchHandler = this.onSearchHandler.bind(this);
    this.state = {};
  }

  componentWillMount()
  {
    this.viewDetails();
    // this.state.contents;
  }

  viewDetails()
  {
    if(localStorage.getItem('selMovieID') !== null)
    {
      var api_key = '1c67c0067c6a82a74b92665f1e488325';
      var movieID = localStorage.getItem('selMovieID');
      const tmdbURL     = 'https://api.themoviedb.org/3/movie/' + movieID + '?api_key=' + api_key ;
      const tmdbYoutube = 'https://api.themoviedb.org/3/movie/' + movieID + '/videos?api_key=' + api_key + '&language=en-US';

      /**
       * Trailer
       */
      var ytEmbedURL = [];
      $.ajax({
        url: tmdbYoutube,
        success: (youtubeResult) =>
        {
          youtubeResult.results.forEach(clip =>
          {
            ytEmbedURL.push('https://www.youtube-nocookie.com/embed/' + clip.key);
          });
          
        }
      });

      $.ajax({
        url: tmdbURL,
        success: (selMovie) =>
        {
          // console.log('Successfuly fetched the Movie data');
          // console.log(selMovie);

          /**
           * Check of Overview is not filled with proper movie description
           */
          var overview = selMovie.overview;
          if(overview === 'Add the plot.')
            overview = '<i style="color:gray">No overview or plot</i>'

          /**
           * Vote Average
           */
          var vote_average = selMovie.vote_average;
          if(vote_average === 0)
            vote_average = '<i style="color:gray">No vote yet</i>'
          else
            vote_average = '<b>' + vote_average + '</b> / 10'

          /**
           * Gallery
          */
          var rootimgURL = 'https://image.tmdb.org/t/p/w500';
          var backdrop = rootimgURL + selMovie.backdrop_path;
          if(selMovie.backdrop_path === null) backdrop = '/images/image-not-available.png';

          /**
           * Price Formatting
           */
          var rating = selMovie.vote_average;
          if(rating >= 0 && rating < 1) price = 'FREE';
          else if(rating >= 1 && rating < 3) price = 3500;
          else if(rating >= 3 && rating < 6) price = 8250;
          else if(rating >= 6 && rating < 8) price = 16350;
          else if(rating >= 8 && rating <= 10)   price = 21250;
          
          const priceFormat = (x) =>
          {
            var parts = x.toString().split(".");
            parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, "."/* Change this part for comma, dot, or any character you want on here */);
            return parts.join(".");
          }

          var formattedPrice = priceFormat(price);

          /**
           * Release Date Formatting
           */
          var rd_year  = selMovie.release_date.substr(0, 4);
          var rd_month = selMovie.release_date.substr(5, 2);
          var rd_day   = selMovie.release_date.substr(8, 2);
          var ordinal_num;
          if(rd_month === '01') rd_month = 'Jan'
          else if(rd_month === '02') rd_month = 'Feb'
          else if(rd_month === '03') rd_month = 'Mar'
          else if(rd_month === '04') rd_month = 'Apr'
          else if(rd_month === '05') rd_month = 'May'
          else if(rd_month === '06') rd_month = 'Jun'
          else if(rd_month === '07') rd_month = 'Jul'
          else if(rd_month === '08') rd_month = 'Aug'
          else if(rd_month === '09') rd_month = 'Sep'
          else if(rd_month === '10') rd_month = 'Oct'
          else if(rd_month === '11') rd_month = 'Nov'
          else if(rd_month === '12') rd_month = 'Dec'
          if(rd_day.substr(0, 1) !== '0')
          {
            if(rd_day.substr(1, 1) === '1') ordinal_num = 'st';
            else if(rd_day.substr(1, 1) === '2') ordinal_num = 'nd';
            else if(rd_day.substr(1, 1) === '3') ordinal_num = 'rd';
            else ordinal_num = 'th';
          }
          else ordinal_num = 'th';

          let md_title = '';
          md_title += `<h2>${selMovie.title}</h2>`;
          document.getElementById('movie-title').innerHTML = md_title;

          let md_poster = '';
          md_poster += `<img src=${'https://image.tmdb.org/t/p/w200' + selMovie.poster_path} alt=${selMovie.title} class="img-responsive" style="margin-left:-18%" />`;
          document.getElementById('movie-poster-container').innerHTML = md_poster;

          let md_overview = '';
          md_overview = `${overview}`;
          document.getElementById('movie-overview-container').innerHTML = md_overview;

          let md_release_date = '';
          md_release_date = `${rd_month} ${rd_day + '<sup>' + ordinal_num + '</sup>'}, ${rd_year}`;
          document.getElementById('movie-release-date').innerHTML = md_release_date;

          let md_vote_avg = '';
          md_vote_avg = `${vote_average}`;
          document.getElementById('vote-average-container').innerHTML = md_vote_avg;

          let md_vote_count = '';
          md_vote_count = `<b>${selMovie.vote_count}</b> votes`;
          document.getElementById('vote-count-container').innerHTML = md_vote_count;

          let md_price = '';
          if(price === 'FREE') md_price = `${formattedPrice}`;
          else md_price = `Rp ${formattedPrice}`;
          document.getElementById('price-container').innerHTML = md_price;

          let extras = '';
          var trailerCollections = [];
          ytEmbedURL.forEach(url =>
          {
            trailerCollections.push('<iframe width="853" height="480" style="margin-top:5px" src='+url+' frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>');
          });
          extras +=
          `<div style="margin-top:20px">
                  
            <!-- Nav tabs -->
            <ul class="nav nav-tabs" role="tablist">
              <li class="nav-item">
                <a class="nav-link" href="#trailer" role="tab" data-toggle="tab">Trailer</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#gallery" role="tab" data-toggle="tab">Gallery</a>
              </li>
            </ul>

            <!-- Tab panes -->
            <div class="tab-content">
              <div role="tabpanel" class="tab-pane fade in" id="trailer">
                ${trailerCollections}
              </div>
              <div role="tabpanel" class="tab-pane fade in" id="gallery">
                <img src=${backdrop} alt=${selMovie.title} class="img-responsive movie-preview" style="width:60%" />
              </div>
            </div>

          </div>`;
          document.getElementById('some-extras').innerHTML = extras;
          
          let breadcrumb = '';
          breadcrumb =
          `<li><a href="/">Home</a></li>
          <li className="active"><a href=${localStorage.getItem('movieDetailsURL')}>${selMovie.title}</a></li>`;
          document.getElementById('breadcrumb-movie-details').innerHTML = breadcrumb;

          this.setState(
          {
            contents: md_title, md_poster, md_overview, md_release_date, md_vote_avg, md_vote_count
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
      window.history.replaceState({}, '', '/');
      // return window.location.replace('/');
    }
  }

  balance()
  {
    var formattedBlc = priceFormat(blc);
    return formattedBlc;
  }

  purchase()
  {
    if(!(blc - price < 0))
    {
      blc = blc - price;
      localStorage.setItem('userBalance', blc);
      localStorage.setItem('purchased-'+localStorage.getItem('selMovieID'), 'true')
      
      document.getElementById('purchase-btn').disabled = 'true';
      document.getElementById('purchase-btn').style.backgroundColor = 'gray';
      document.getElementById('purchase-btn').innerHTML = 'Purchased';

      window.location.pathname = window.location.pathname;

      return blc;
    }
    else
    {
      alert("Out of Balance!");
    }
    return blc;
  }

  recommended()
  {
    var api_key = '1c67c0067c6a82a74b92665f1e488325';
    const tmdbURL = 'https://api.themoviedb.org/3/movie/&api_key=' + api_key ;

    $.ajax({
      url: tmdbURL,
      success: (rcmList) =>
      {
        // console.log('Successfuly fetched the Movie data');
        console.log(rcmList);

        // let rcm = '';
        // rcm += `
        //   <div className="item">
        //     <div className="w3l-movie-gride-agile w3l-movie-gride-agile1">
        //       <a href="single.html" className="hvr-shutter-out-horizontal">
        //         <img src="images/m13.jpg" title="album-name" className="img-responsive" alt=" " />
        //         <div className="w3l-action-icon"><i className="fa fa-play-circle" aria-hidden="true"></i></div>
        //       </a>
        //       <div className="mid-1 agileits_w3layouts_mid_1_home">
        //         <div className="w3l-movie-text">
        //           <h6><a href="single.html">Citizen Soldier</a></h6>
        //         </div>
        //         <div className="mid-2 agile_mid_2_home">
        //           <p>2016</p>
        //           <div className="block-stars">
        //             <ul className="w3l-ratings">
        //               <li><a href="#"><i className="fa fa-star" aria-hidden="true"></i></a></li>
        //               <li><a href="#"><i className="fa fa-star" aria-hidden="true"></i></a></li>
        //               <li><a href="#"><i className="fa fa-star" aria-hidden="true"></i></a></li>
        //               <li><a href="#"><i className="fa fa-star" aria-hidden="true"></i></a></li>
        //               <li><a href="#"><i className="fa fa-star-half-o" aria-hidden="true"></i></a></li>
        //             </ul>
        //           </div>
        //           <div className="clearfix"></div>
        //         </div>
        //       </div>
        //     </div>
        //   </div>`;
        // document.getElementById('movie-details-sn-page').innerHTML = rcm;
        
        // let breadcrumb = '';
        // breadcrumb =
        // `<li><a href="/">Home</a></li>
        // <li className="active"><a href=${localStorage.getItem('movieDetailsURL')}>${selMovie.title}</a></li>`;
        // document.getElementById('breadcrumb-movie-details').innerHTML = breadcrumb;

        // this.setState(
        // {
        //   contents: rcm
        // });
      },
      error: (xhr, status, err) =>
      {
        // console.log('Failed to fetch movie data');
      }
    })
  }

  onSearchHandler()
  {
    window.location.href = '/';
  }

  handleScroll = () =>
  {
    if(this.scroller)
      console.log(this.scroller.scrollTop);
  }

  logout()
  {
    localStorage.clear();
    window.location.pathname = '/'
  }

  render()
  {
    return (
      <div>
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
                  placeholder="Search ..."
                  required=""
                  onClick={this.onSearchHandler}
                />
                {/* <input type="submit" value="Go"/> */}
              {/* </form> */}
            </div>
            <div className="w3l_sign_in_register">
              <ul className="pull-right">
                {
                  (localStorage.getItem('Authorization') !== null && localStorage.getItem('Auth Status') === 'true') ?
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

        {/* single */}
        <div className="single-page-agile-main">
          <div className="container">
            {/* /w3l-medile-movies-grids */}
            <div className="agileits-single-top">
              <ol className="breadcrumb" id="breadcrumb-movie-details"></ol>
            </div>

            <div className="single-page-agile-info">
              <div className="show-top-grids-w3lagile">

                <div className="col-sm-8 single-left">
                  <div className="song">
                    <div className="song-info" id="movie-title"></div>
                    <div className="video-grid-single-page-agileits">

                      <div className="container" style={{marginTop:20}}>
                        <div className="col-sm-2">
                          <div id="movie-poster-container"></div>
                          <div className="purchase-btn-container">
                          {
                            (localStorage.getItem('Authorization') === null || localStorage.getItem('Auth Status') === null) ?
                              <p id="no-login-purchase-disabled" style={{color:'gray'}}><i>Login to make a purchase</i></p>
                            :
                            ([
                              localStorage.getItem('purchased-'+localStorage.getItem('selMovieID')) === null &&
                                <a id="purchase-btn" className="fade" role="button" style={{cursor:'pointer',opacity:1}} onClick={this.purchase}>
                                  Purchase
                                </a>,
                              
                              localStorage.getItem('purchased-'+localStorage.getItem('selMovieID')) === 'true' &&
                                <a id="purchase-btn" className="is-purchased" style={{opacity:1,backgroundColor:'gray',pointerEvents:'none',marginLeft:-1,width:'86%'}}>
                                  Purchased
                                </a>
                            ])
                          }
                          </div>
                        </div>

                        <div className="col-sm-10" style={{marginTop:-15}}>

                          <div className="mov-details">
                            <h3>Overview</h3>
                            <p id="movie-overview-container"></p>
                          </div>

                          <div className="mov-details">
                            <h3>Release Date</h3>
                            <p id="movie-release-date"></p>
                          </div>

                          <div className="mov-details">
                            <table className="mov-det-votes">
                              <tbody>
                                <tr>
                                  <th><h3>Vote Average</h3></th>
                                  <th><h3>Vote Count</h3></th>
                                </tr>
                                <tr>
                                  <td><p id="vote-average-container"></p></td>
                                  <td><p id="vote-count-container"></p></td>
                                </tr>
                              </tbody>
                            </table>
                          </div>

                          <div className="mov-details">
                            <h3>Price</h3>
                            <div id="price-container"></div>
                          </div>

                        </div>
                      </div>

                    </div>
                  </div>
                  <div className="clearfix"> </div>
                </div>
                <div className="clearfix"> </div>

              </div>

              <div id="some-extras"></div>

              {/*body wrapper start*/}
              <h2 style={{margin: '60px 0 20px 0'}}>Recommended For You</h2>
              <div className="w3_agile_banner_bottom_grid">
                <div id="owl-demo" className="owl-carousel owl-theme">
                  { this.state.recommended }
                </div>
              </div>
              {/*body wrapper end*/}
            </div>
            {/* //w3l-latest-movies-grids */}
          </div>
        </div>
        {/* //w3l-medile-movies-grids */}
      </div>
    );
  }
}

export default DetailsHandler;