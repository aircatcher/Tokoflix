import React from 'react';

class CategoryGeneral extends React.Component
{
  render()
  {
    return (
      <div className="general">
        <h4 className="latest-text w3_latest_text">Featured Movies</h4>
        <div className="container">
          <div className="bs-example bs-example-tabs" role="tabpanel" data-example-id="togglable-tabs">
            <ul id="myTab" className="nav nav-tabs" role="tablist">
              <li role="presentation" className="active"><a href="#home" id="home-tab" role="tab" data-toggle="tab" aria-controls="home" aria-expanded="true">Featured</a></li>
              <li role="presentation"><a href="#profile" role="tab" id="profile-tab" data-toggle="tab" aria-controls="profile" aria-expanded="false">Top viewed</a></li>
              <li role="presentation"><a href="#rating" id="rating-tab" role="tab" data-toggle="tab" aria-controls="rating" aria-expanded="true">Top Rating</a></li>
              <li role="presentation"><a href="#imdb" role="tab" id="imdb-tab" data-toggle="tab" aria-controls="imdb" aria-expanded="false">Recently Added</a></li>
            </ul>
            <div id="myTabContent" className="tab-content">
              <div role="tabpanel" className="tab-pane fade active in" id="home" aria-labelledby="home-tab">
                <div className="w3_agile_featured_movies">
                  <div className="col-md-2 w3l-movie-gride-agile">
                    <a href="single.html" className="hvr-shutter-out-horizontal"><img src="images/m15.jpg" title="album-name" className="img-responsive" alt=" " />
                      <div className="w3l-action-icon"><i className="fa fa-play-circle" aria-hidden="true"></i></div>
                    </a>
                    <div className="mid-1 agileits_w3layouts_mid_1_home">
                      <div className="w3l-movie-text">
                        <h6><a href="single.html">God’s Compass</a></h6>							
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
                    <div className="ribben">
                      <p>NEW</p>
                    </div>
                  </div>
                  <div className="col-md-2 w3l-movie-gride-agile">
                    <a href="single.html" className="hvr-shutter-out-horizontal"><img src="images/m2.jpg" title="album-name" className="img-responsive" alt=" "  />
                      <div className="w3l-action-icon"><i className="fa fa-play-circle" aria-hidden="true"></i></div>
                    </a>
                    <div className="mid-1 agileits_w3layouts_mid_1_home">
                      <div className="w3l-movie-text">
                        <h6><a href="single.html">Bad Moms</a></h6>							
                      </div>
                      <div className="mid-2 agile_mid_2_home">
                        <p>2016</p>
                        <div className="block-stars">
                          <ul className="w3l-ratings">
                            <li><a href="#"><i className="fa fa-star" aria-hidden="true"></i></a></li>
                            <li><a href="#"><i className="fa fa-star" aria-hidden="true"></i></a></li>
                            <li><a href="#"><i className="fa fa-star-o" aria-hidden="true"></i></a></li>
                            <li><a href="#"><i className="fa fa-star-o" aria-hidden="true"></i></a></li>
                            <li><a href="#"><i className="fa fa-star-o" aria-hidden="true"></i></a></li>
                          </ul>
                        </div>
                        <div className="clearfix"></div>
                      </div>
                    </div>
                    <div className="ribben">
                      <p>NEW</p>
                    </div>
                  </div>
                  <div className="col-md-2 w3l-movie-gride-agile">
                    <a href="single.html" className="hvr-shutter-out-horizontal"><img src="images/m5.jpg" title="album-name" className="img-responsive" alt=" " />
                      <div className="w3l-action-icon"><i className="fa fa-play-circle" aria-hidden="true"></i></div>
                    </a>
                    <div className="mid-1 agileits_w3layouts_mid_1_home">
                      <div className="w3l-movie-text">
                        <h6><a href="single.html">Jason Bourne</a></h6>							
                      </div>
                      <div className="mid-2 agile_mid_2_home">
                        <p>2016</p>
                        <div className="block-stars">
                          <ul className="w3l-ratings">
                            <li><a href="#"><i className="fa fa-star" aria-hidden="true"></i></a></li>
                            <li><a href="#"><i className="fa fa-star" aria-hidden="true"></i></a></li>
                            <li><a href="#"><i className="fa fa-star-half-o" aria-hidden="true"></i></a></li>
                            <li><a href="#"><i className="fa fa-star-o" aria-hidden="true"></i></a></li>
                            <li><a href="#"><i className="fa fa-star-o" aria-hidden="true"></i></a></li>
                          </ul>
                        </div>
                        <div className="clearfix"></div>
                      </div>
                    </div>
                    <div className="ribben">
                      <p>NEW</p>
                    </div>
                  </div>
                  <div className="col-md-2 w3l-movie-gride-agile">
                    <a href="single.html" className="hvr-shutter-out-horizontal"><img src="images/m16.jpg" title="album-name" className="img-responsive" alt=" " />
                      <div className="w3l-action-icon"><i className="fa fa-play-circle" aria-hidden="true"></i></div>
                    </a>
                    <div className="mid-1 agileits_w3layouts_mid_1_home">
                      <div className="w3l-movie-text">
                        <h6><a href="single.html">Rezort</a></h6>							
                      </div>
                      <div className="mid-2 agile_mid_2_home">
                        <p>2016</p>
                        <div className="block-stars">
                          <ul className="w3l-ratings">
                            <li><a href="#"><i className="fa fa-star" aria-hidden="true"></i></a></li>
                            <li><a href="#"><i className="fa fa-star" aria-hidden="true"></i></a></li>
                            <li><a href="#"><i className="fa fa-star" aria-hidden="true"></i></a></li>
                            <li><a href="#"><i className="fa fa-star-half-o" aria-hidden="true"></i></a></li>
                            <li><a href="#"><i className="fa fa-star-o" aria-hidden="true"></i></a></li>
                          </ul>
                        </div>
                        <div className="clearfix"></div>
                      </div>
                    </div>
                    <div className="ribben">
                      <p>NEW</p>
                    </div>
                  </div>
                  <div className="col-md-2 w3l-movie-gride-agile">
                    <a href="single.html" className="hvr-shutter-out-horizontal"><img src="images/m17.jpg" title="album-name" className="img-responsive" alt=" " />
                      <div className="w3l-action-icon"><i className="fa fa-play-circle" aria-hidden="true"></i></div>
                    </a>
                    <div className="mid-1 agileits_w3layouts_mid_1_home">
                      <div className="w3l-movie-text">
                        <h6><a href="single.html">Peter</a></h6>							
                      </div>
                      <div className="mid-2 agile_mid_2_home">
                        <p>2016</p>
                        <div className="block-stars">
                          <ul className="w3l-ratings">
                            <li><a href="#"><i className="fa fa-star" aria-hidden="true"></i></a></li>
                            <li><a href="#"><i className="fa fa-star" aria-hidden="true"></i></a></li>
                            <li><a href="#"><i className="fa fa-star" aria-hidden="true"></i></a></li>
                            <li><a href="#"><i className="fa fa-star-o" aria-hidden="true"></i></a></li>
                            <li><a href="#"><i className="fa fa-star-o" aria-hidden="true"></i></a></li>
                          </ul>
                        </div>
                        <div className="clearfix"></div>
                      </div>
                    </div>
                    <div className="ribben">
                      <p>NEW</p>
                    </div>
                  </div>
                  <div className="col-md-2 w3l-movie-gride-agile">
                    <a href="single.html" className="hvr-shutter-out-horizontal"><img src="images/m18.jpg" title="album-name" className="img-responsive" alt=" " />
                      <div className="w3l-action-icon"><i className="fa fa-play-circle" aria-hidden="true"></i></div>
                    </a>
                    <div className="mid-1 agileits_w3layouts_mid_1_home">
                      <div className="w3l-movie-text">
                        <h6><a href="single.html">ISRA 88</a></h6>							
                      </div>
                      <div className="mid-2 agile_mid_2_home">
                        <p>2016</p>
                        <div className="block-stars">
                          <ul className="w3l-ratings">
                            <li><a href="#"><i className="fa fa-star" aria-hidden="true"></i></a></li>
                            <li><a href="#"><i className="fa fa-star" aria-hidden="true"></i></a></li>
                            <li><a href="#"><i className="fa fa-star" aria-hidden="true"></i></a></li>
                            <li><a href="#"><i className="fa fa-star" aria-hidden="true"></i></a></li>
                            <li><a href="#"><i className="fa fa-star-o" aria-hidden="true"></i></a></li>
                          </ul>
                        </div>
                        <div className="clearfix"></div>
                      </div>
                    </div>
                    <div className="ribben">
                      <p>NEW</p>
                    </div>
                  </div>
                  <div className="col-md-2 w3l-movie-gride-agile">
                    <a href="single.html" className="hvr-shutter-out-horizontal"><img src="images/m1.jpg" title="album-name" className="img-responsive" alt=" " />
                      <div className="w3l-action-icon"><i className="fa fa-play-circle" aria-hidden="true"></i></div>
                    </a>
                    <div className="mid-1 agileits_w3layouts_mid_1_home">
                      <div className="w3l-movie-text">
                        <h6><a href="single.html">War Dogs</a></h6>							
                      </div>
                      <div className="mid-2 agile_mid_2_home">
                        <p>2016</p>
                        <div className="block-stars">
                          <ul className="w3l-ratings">
                            <li><a href="#"><i className="fa fa-star" aria-hidden="true"></i></a></li>
                            <li><a href="#"><i className="fa fa-star" aria-hidden="true"></i></a></li>
                            <li><a href="#"><i className="fa fa-star" aria-hidden="true"></i></a></li>
                            <li><a href="#"><i className="fa fa-star-half-o" aria-hidden="true"></i></a></li>
                            <li><a href="#"><i className="fa fa-star-o" aria-hidden="true"></i></a></li>
                          </ul>
                        </div>
                        <div className="clearfix"></div>
                      </div>
                    </div>
                    <div className="ribben">
                      <p>NEW</p>
                    </div>
                  </div>
                  <div className="col-md-2 w3l-movie-gride-agile">
                    <a href="single.html" className="hvr-shutter-out-horizontal"><img src="images/m14.jpg" title="album-name" className="img-responsive" alt=" " />
                      <div className="w3l-action-icon"><i className="fa fa-play-circle" aria-hidden="true"></i></div>
                    </a>
                    <div className="mid-1 agileits_w3layouts_mid_1_home">
                      <div className="w3l-movie-text">
                        <h6><a href="single.html">The Other Side</a></h6>							
                      </div>
                      <div className="mid-2 agile_mid_2_home">
                        <p>2016</p>
                        <div className="block-stars">
                          <ul className="w3l-ratings">
                            <li><a href="#"><i className="fa fa-star" aria-hidden="true"></i></a></li>
                            <li><a href="#"><i className="fa fa-star" aria-hidden="true"></i></a></li>
                            <li><a href="#"><i className="fa fa-star-half-o" aria-hidden="true"></i></a></li>
                            <li><a href="#"><i className="fa fa-star-o" aria-hidden="true"></i></a></li>
                            <li><a href="#"><i className="fa fa-star-o" aria-hidden="true"></i></a></li>
                          </ul>
                        </div>
                        <div className="clearfix"></div>
                      </div>
                    </div>
                    <div className="ribben">
                      <p>NEW</p>
                    </div>
                  </div>
                  <div className="col-md-2 w3l-movie-gride-agile">
                    <a href="single.html" className="hvr-shutter-out-horizontal"><img src="images/m19.jpg" title="album-name" className="img-responsive" alt=" " />
                      <div className="w3l-action-icon"><i className="fa fa-play-circle" aria-hidden="true"></i></div>
                    </a>
                    <div className="mid-1 agileits_w3layouts_mid_1_home">
                      <div className="w3l-movie-text">
                        <h6><a href="single.html">Civil War</a></h6>							
                      </div>
                      <div className="mid-2 agile_mid_2_home">
                        <p>2016</p>
                        <div className="block-stars">
                          <ul className="w3l-ratings">
                            <li><a href="#"><i className="fa fa-star" aria-hidden="true"></i></a></li>
                            <li><a href="#"><i className="fa fa-star" aria-hidden="true"></i></a></li>
                            <li><a href="#"><i className="fa fa-star-half-o" aria-hidden="true"></i></a></li>
                            <li><a href="#"><i className="fa fa-star-o" aria-hidden="true"></i></a></li>
                            <li><a href="#"><i className="fa fa-star-o" aria-hidden="true"></i></a></li>
                          </ul>
                        </div>
                        <div className="clearfix"></div>
                      </div>
                    </div>
                    <div className="ribben">
                      <p>NEW</p>
                    </div>
                  </div>
                  <div className="col-md-2 w3l-movie-gride-agile">
                    <a href="single.html" className="hvr-shutter-out-horizontal"><img src="images/m20.jpg" title="album-name" className="img-responsive" alt=" " />
                      <div className="w3l-action-icon"><i className="fa fa-play-circle" aria-hidden="true"></i></div>
                    </a>
                    <div className="mid-1 agileits_w3layouts_mid_1_home">
                      <div className="w3l-movie-text">
                        <h6><a href="single.html">The Secret Life of Pets</a></h6>							
                      </div>
                      <div className="mid-2 agile_mid_2_home">
                        <p>2016</p>
                        <div className="block-stars">
                          <ul className="w3l-ratings">
                            <li><a href="#"><i className="fa fa-star" aria-hidden="true"></i></a></li>
                            <li><a href="#"><i className="fa fa-star-half-o" aria-hidden="true"></i></a></li>
                            <li><a href="#"><i className="fa fa-star-o" aria-hidden="true"></i></a></li>
                            <li><a href="#"><i className="fa fa-star-o" aria-hidden="true"></i></a></li>
                            <li><a href="#"><i className="fa fa-star-o" aria-hidden="true"></i></a></li>
                          </ul>
                        </div>
                        <div className="clearfix"></div>
                      </div>
                    </div>
                    <div className="ribben">
                      <p>NEW</p>
                    </div>
                  </div>
                  <div className="col-md-2 w3l-movie-gride-agile">
                    <a href="single.html" className="hvr-shutter-out-horizontal"><img src="images/m21.jpg" title="album-name" className="img-responsive" alt=" " />
                      <div className="w3l-action-icon"><i className="fa fa-play-circle" aria-hidden="true"></i></div>
                    </a>
                    <div className="mid-1 agileits_w3layouts_mid_1_home">
                      <div className="w3l-movie-text">
                        <h6><a href="single.html">The Jungle Book</a></h6>							
                      </div>
                      <div className="mid-2 agile_mid_2_home">
                        <p>2016</p>
                        <div className="block-stars">
                          <ul className="w3l-ratings">
                            <li><a href="#"><i className="fa fa-star" aria-hidden="true"></i></a></li>
                            <li><a href="#"><i className="fa fa-star" aria-hidden="true"></i></a></li>
                            <li><a href="#"><i className="fa fa-star" aria-hidden="true"></i></a></li>
                            <li><a href="#"><i className="fa fa-star-half-o" aria-hidden="true"></i></a></li>
                            <li><a href="#"><i className="fa fa-star-o" aria-hidden="true"></i></a></li>
                          </ul>
                        </div>
                        <div className="clearfix"></div>
                      </div>
                    </div>
                    <div className="ribben">
                      <p>NEW</p>
                    </div>
                  </div>
                  <div className="col-md-2 w3l-movie-gride-agile">
                    <a href="single.html" className="hvr-shutter-out-horizontal"><img src="images/m22.jpg" title="album-name" className="img-responsive" alt=" " />
                      <div className="w3l-action-icon"><i className="fa fa-play-circle" aria-hidden="true"></i></div>
                    </a>
                    <div className="mid-1 agileits_w3layouts_mid_1_home">
                      <div className="w3l-movie-text">
                        <h6><a href="single.html">Assassin's Creed 3</a></h6>							
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
                    <div className="ribben">
                      <p>NEW</p>
                    </div>
                  </div>
                  <div className="clearfix"> </div>
                </div>
              </div>
              <div role="tabpanel" className="tab-pane fade" id="profile" aria-labelledby="profile-tab">
                <div className="col-md-2 w3l-movie-gride-agile">
                  <a href="single.html" className="hvr-shutter-out-horizontal"><img src="images/m22.jpg" title="album-name" className="img-responsive" alt=" " />
                    <div className="w3l-action-icon"><i className="fa fa-play-circle" aria-hidden="true"></i></div>
                  </a>
                  <div className="mid-1 agileits_w3layouts_mid_1_home">
                    <div className="w3l-movie-text">
                      <h6><a href="single.html">Assassin's Creed 3</a></h6>							
                    </div>
                    <div className="mid-2 agile_mid_2_home">
                      <p>2016</p>
                      <div className="block-stars">
                        <ul className="w3l-ratings">
                          <li><a href="#"><i className="fa fa-star" aria-hidden="true"></i></a></li>
                          <li><a href="#"><i className="fa fa-star-half-o" aria-hidden="true"></i></a></li>
                          <li><a href="#"><i className="fa fa-star-o" aria-hidden="true"></i></a></li>
                          <li><a href="#"><i className="fa fa-star-o" aria-hidden="true"></i></a></li>
                          <li><a href="#"><i className="fa fa-star-o" aria-hidden="true"></i></a></li>
                        </ul>
                      </div>
                      <div className="clearfix"></div>
                    </div>
                  </div>
                  <div className="ribben">
                    <p>NEW</p>
                  </div>
                </div>
                <div className="col-md-2 w3l-movie-gride-agile">
                  <a href="single.html" className="hvr-shutter-out-horizontal"><img src="images/m2.jpg" title="album-name" className="img-responsive" alt=" " />
                    <div className="w3l-action-icon"><i className="fa fa-play-circle" aria-hidden="true"></i></div>
                  </a>
                  <div className="mid-1 agileits_w3layouts_mid_1_home">
                    <div className="w3l-movie-text">
                      <h6><a href="single.html">Bad Moms</a></h6>							
                    </div>
                    <div className="mid-2 agile_mid_2_home">
                      <p>2016</p>
                      <div className="block-stars">
                        <ul className="w3l-ratings">
                          <li><a href="#"><i className="fa fa-star" aria-hidden="true"></i></a></li>
                          <li><a href="#"><i className="fa fa-star" aria-hidden="true"></i></a></li>
                          <li><a href="#"><i className="fa fa-star" aria-hidden="true"></i></a></li>
                          <li><a href="#"><i className="fa fa-star-o" aria-hidden="true"></i></a></li>
                          <li><a href="#"><i className="fa fa-star-o" aria-hidden="true"></i></a></li>
                        </ul>
                      </div>
                      <div className="clearfix"></div>
                    </div>
                  </div>
                  <div className="ribben">
                    <p>NEW</p>
                  </div>
                </div>
                <div className="col-md-2 w3l-movie-gride-agile">
                  <a href="single.html" className="hvr-shutter-out-horizontal"><img src="images/m9.jpg" title="album-name" className="img-responsive" alt=" " />
                    <div className="w3l-action-icon"><i className="fa fa-play-circle" aria-hidden="true"></i></div>
                  </a>
                  <div className="mid-1 agileits_w3layouts_mid_1_home">
                    <div className="w3l-movie-text">
                      <h6><a href="single.html">Central Intelligence</a></h6>							
                    </div>
                    <div className="mid-2 agile_mid_2_home">
                      <p>2016</p>
                      <div className="block-stars">
                        <ul className="w3l-ratings">
                          <li><a href="#"><i className="fa fa-star" aria-hidden="true"></i></a></li>
                          <li><a href="#"><i className="fa fa-star" aria-hidden="true"></i></a></li>
                          <li><a href="#"><i className="fa fa-star" aria-hidden="true"></i></a></li>
                          <li><a href="#"><i className="fa fa-star-half-o" aria-hidden="true"></i></a></li>
                          <li><a href="#"><i className="fa fa-star-o" aria-hidden="true"></i></a></li>
                        </ul>
                      </div>
                      <div className="clearfix"></div>
                    </div>
                  </div>
                  <div className="ribben">
                    <p>NEW</p>
                  </div>
                </div>
                <div className="clearfix"> </div>
              </div>
              <div role="tabpanel" className="tab-pane fade" id="rating" aria-labelledby="rating-tab">
                <div className="col-md-2 w3l-movie-gride-agile">
                  <a href="single.html" className="hvr-shutter-out-horizontal"><img src="images/m7.jpg" title="album-name" className="img-responsive" alt=" " />
                    <div className="w3l-action-icon"><i className="fa fa-play-circle" aria-hidden="true"></i></div>
                  </a>
                  <div className="mid-1 agileits_w3layouts_mid_1_home">
                    <div className="w3l-movie-text">
                      <h6><a href="single.html">Light B/t Oceans</a></h6>							
                    </div>
                    <div className="mid-2 agile_mid_2_home">
                      <p>2016</p>
                      <div className="block-stars">
                        <ul className="w3l-ratings">
                          <li><a href="#"><i className="fa fa-star" aria-hidden="true"></i></a></li>
                          <li><a href="#"><i className="fa fa-star" aria-hidden="true"></i></a></li>
                          <li><a href="#"><i className="fa fa-star" aria-hidden="true"></i></a></li>
                          <li><a href="#"><i className="fa fa-star-half-o" aria-hidden="true"></i></a></li>
                          <li><a href="#"><i className="fa fa-star-o" aria-hidden="true"></i></a></li>
                        </ul>
                      </div>
                      <div className="clearfix"></div>
                    </div>
                  </div>
                  <div className="ribben">
                    <p>NEW</p>
                  </div>
                </div>
                <div className="col-md-2 w3l-movie-gride-agile">
                  <a href="single.html" className="hvr-shutter-out-horizontal"><img src="images/m11.jpg" title="album-name" className="img-responsive" alt=" " />
                    <div className="w3l-action-icon"><i className="fa fa-play-circle" aria-hidden="true"></i></div>
                  </a>
                  <div className="mid-1 agileits_w3layouts_mid_1_home">
                    <div className="w3l-movie-text">
                      <h6><a href="single.html">X-Men</a></h6>							
                    </div>
                    <div className="mid-2 agile_mid_2_home">
                      <p>2016</p>
                      <div className="block-stars">
                        <ul className="w3l-ratings">
                          <li><a href="#"><i className="fa fa-star" aria-hidden="true"></i></a></li>
                          <li><a href="#"><i className="fa fa-star" aria-hidden="true"></i></a></li>
                          <li><a href="#"><i className="fa fa-star-half-o" aria-hidden="true"></i></a></li>
                          <li><a href="#"><i className="fa fa-star-o" aria-hidden="true"></i></a></li>
                          <li><a href="#"><i className="fa fa-star-o" aria-hidden="true"></i></a></li>
                        </ul>
                      </div>
                      <div className="clearfix"></div>
                    </div>
                  </div>
                  <div className="ribben">
                    <p>NEW</p>
                  </div>
                </div>
                <div className="col-md-2 w3l-movie-gride-agile">
                  <a href="single.html" className="hvr-shutter-out-horizontal"><img src="images/m8.jpg" title="album-name" className="img-responsive" alt=" " />
                    <div className="w3l-action-icon"><i className="fa fa-play-circle" aria-hidden="true"></i></div>
                  </a>
                  <div className="mid-1 agileits_w3layouts_mid_1_home">
                    <div className="w3l-movie-text">
                      <h6><a href="single.html">The BFG</a></h6>							
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
                  <div className="ribben">
                    <p>NEW</p>
                  </div>
                </div>
                <div className="col-md-2 w3l-movie-gride-agile">
                  <a href="single.html" className="hvr-shutter-out-horizontal"><img src="images/m17.jpg" title="album-name" className="img-responsive" alt=" " />
                    <div className="w3l-action-icon"><i className="fa fa-play-circle" aria-hidden="true"></i></div>
                  </a>
                  <div className="mid-1 agileits_w3layouts_mid_1_home">
                    <div className="w3l-movie-text">
                      <h6><a href="single.html">Peter</a></h6>							
                    </div>
                    <div className="mid-2 agile_mid_2_home">
                      <p>2016</p>
                      <div className="block-stars">
                        <ul className="w3l-ratings">
                          <li><a href="#"><i className="fa fa-star" aria-hidden="true"></i></a></li>
                          <li><a href="#"><i className="fa fa-star" aria-hidden="true"></i></a></li>
                          <li><a href="#"><i className="fa fa-star" aria-hidden="true"></i></a></li>
                          <li><a href="#"><i className="fa fa-star" aria-hidden="true"></i></a></li>
                          <li><a href="#"><i className="fa fa-star-o" aria-hidden="true"></i></a></li>
                        </ul>
                      </div>
                      <div className="clearfix"></div>
                    </div>
                  </div>
                  <div className="ribben">
                    <p>NEW</p>
                  </div>
                </div>
                <div className="clearfix"> </div>
              </div>
              <div role="tabpanel" className="tab-pane fade" id="imdb" aria-labelledby="imdb-tab">
                <div className="col-md-2 w3l-movie-gride-agile">
                  <a href="single.html" className="hvr-shutter-out-horizontal"><img src="images/m22.jpg" title="album-name" className="img-responsive" alt=" " />
                    <div className="w3l-action-icon"><i className="fa fa-play-circle" aria-hidden="true"></i></div>
                  </a>
                  <div className="mid-1 agileits_w3layouts_mid_1_home">
                    <div className="w3l-movie-text">
                      <h6><a href="single.html">Assassin's Creed 3</a></h6>							
                    </div>
                    <div className="mid-2 agile_mid_2_home">
                      <p>2016</p>
                      <div className="block-stars">
                        <ul className="w3l-ratings">
                          <li><a href="#"><i className="fa fa-star" aria-hidden="true"></i></a></li>
                          <li><a href="#"><i className="fa fa-star" aria-hidden="true"></i></a></li>
                          <li><a href="#"><i className="fa fa-star-half-o" aria-hidden="true"></i></a></li>
                          <li><a href="#"><i className="fa fa-star-o" aria-hidden="true"></i></a></li>
                          <li><a href="#"><i className="fa fa-star-o" aria-hidden="true"></i></a></li>
                        </ul>
                      </div>
                      <div className="clearfix"></div>
                    </div>
                  </div>
                  <div className="ribben">
                    <p>NEW</p>
                  </div>
                </div>
                <div className="col-md-2 w3l-movie-gride-agile">
                  <a href="single.html" className="hvr-shutter-out-horizontal"><img src="images/m2.jpg" title="album-name" className="img-responsive" alt=" " />
                    <div className="w3l-action-icon"><i className="fa fa-play-circle" aria-hidden="true"></i></div>
                  </a>
                  <div className="mid-1 agileits_w3layouts_mid_1_home">
                    <div className="w3l-movie-text">
                      <h6><a href="single.html">Bad Moms</a></h6>							
                    </div>
                    <div className="mid-2 agile_mid_2_home">
                      <p>2016</p>
                      <div className="block-stars">
                        <ul className="w3l-ratings">
                          <li><a href="#"><i className="fa fa-star" aria-hidden="true"></i></a></li>
                          <li><a href="#"><i className="fa fa-star" aria-hidden="true"></i></a></li>
                          <li><a href="#"><i className="fa fa-star" aria-hidden="true"></i></a></li>
                          <li><a href="#"><i className="fa fa-star-half-o" aria-hidden="true"></i></a></li>
                          <li><a href="#"><i className="fa fa-star-o" aria-hidden="true"></i></a></li>
                        </ul>
                      </div>
                      <div className="clearfix"></div>
                    </div>
                  </div>
                  <div className="ribben">
                    <p>NEW</p>
                  </div>
                </div>
                <div className="col-md-2 w3l-movie-gride-agile">
                  <a href="single.html" className="hvr-shutter-out-horizontal"><img src="images/m9.jpg" title="album-name" className="img-responsive" alt=" " />
                    <div className="w3l-action-icon"><i className="fa fa-play-circle" aria-hidden="true"></i></div>
                  </a>
                  <div className="mid-1 agileits_w3layouts_mid_1_home">
                    <div className="w3l-movie-text">
                      <h6><a href="single.html">Central Intelligence</a></h6>							
                    </div>
                    <div className="mid-2 agile_mid_2_home">
                      <p>2016</p>
                      <div className="block-stars">
                        <ul className="w3l-ratings">
                          <li><a href="#"><i className="fa fa-star" aria-hidden="true"></i></a></li>
                          <li><a href="#"><i className="fa fa-star" aria-hidden="true"></i></a></li>
                          <li><a href="#"><i className="fa fa-star-o" aria-hidden="true"></i></a></li>
                          <li><a href="#"><i className="fa fa-star-o" aria-hidden="true"></i></a></li>
                          <li><a href="#"><i className="fa fa-star-o" aria-hidden="true"></i></a></li>
                        </ul>
                      </div>
                      <div className="clearfix"></div>
                    </div>
                  </div>
                  <div className="ribben">
                    <p>NEW</p>
                  </div>
                </div>
                <div className="col-md-2 w3l-movie-gride-agile">
                  <a href="single.html" className="hvr-shutter-out-horizontal"><img src="images/m10.jpg" title="album-name" className="img-responsive" alt=" " />
                    <div className="w3l-action-icon"><i className="fa fa-play-circle" aria-hidden="true"></i></div>
                  </a>
                  <div className="mid-1 agileits_w3layouts_mid_1_home">
                    <div className="w3l-movie-text">
                      <h6><a href="single.html">Don't Think Twice</a></h6>							
                    </div>
                    <div className="mid-2 agile_mid_2_home">
                      <p>2016</p>
                      <div className="block-stars">
                        <ul className="w3l-ratings">
                          <li><a href="#"><i className="fa fa-star" aria-hidden="true"></i></a></li>
                          <li><a href="#"><i className="fa fa-star" aria-hidden="true"></i></a></li>
                          <li><a href="#"><i className="fa fa-star" aria-hidden="true"></i></a></li>
                          <li><a href="#"><i className="fa fa-star-half-o" aria-hidden="true"></i></a></li>
                          <li><a href="#"><i className="fa fa-star-o" aria-hidden="true"></i></a></li>
                        </ul>
                      </div>
                      <div className="clearfix"></div>
                    </div>
                  </div>
                  <div className="ribben">
                    <p>NEW</p>
                  </div>
                </div>
                <div className="col-md-2 w3l-movie-gride-agile">
                  <a href="single.html" className="hvr-shutter-out-horizontal"><img src="images/m23.jpg" title="album-name" className="img-responsive" alt=" " />
                    <div className="w3l-action-icon"><i className="fa fa-play-circle" aria-hidden="true"></i></div>
                  </a>
                  <div className="mid-1 agileits_w3layouts_mid_1_home">
                    <div className="w3l-movie-text">
                      <h6><a href="single.html">Dead Island 2</a></h6>							
                    </div>
                    <div className="mid-2 agile_mid_2_home">
                      <p>2016</p>
                      <div className="block-stars">
                        <ul className="w3l-ratings">
                          <li><a href="#"><i className="fa fa-star" aria-hidden="true"></i></a></li>
                          <li><a href="#"><i className="fa fa-star" aria-hidden="true"></i></a></li>
                          <li><a href="#"><i className="fa fa-star-half-o" aria-hidden="true"></i></a></li>
                          <li><a href="#"><i className="fa fa-star-o" aria-hidden="true"></i></a></li>
                          <li><a href="#"><i className="fa fa-star-o" aria-hidden="true"></i></a></li>
                        </ul>
                      </div>
                      <div className="clearfix"></div>
                    </div>
                  </div>
                  <div className="ribben">
                    <p>NEW</p>
                  </div>
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

export default CategoryGeneral;