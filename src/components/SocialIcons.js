import React from 'react';

class SocialIcons extends React.Component
{
  render()
  {
    return (
      <div className="general_social_icons">
        <nav className="social">
          <ul>
            <li className="w3_twitter"><a href="#">Twitter <i className="fa fa-twitter"></i></a></li>
            <li className="w3_facebook"><a href="#">Facebook <i className="fa fa-facebook"></i></a></li>
            <li className="w3_dribbble"><a href="#">Dribbble <i className="fa fa-dribbble"></i></a></li>
            <li className="w3_g_plus"><a href="#">Google+ <i className="fa fa-google-plus"></i></a></li>				  
          </ul>
        </nav>
      </div>
    );
  }
}

export default SocialIcons;