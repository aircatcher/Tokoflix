import React from 'react';

class Popup extends React.Component
{
  render()
  {
    return (
      <div className="modal video-modal fade" id="myModal" tabIndex="-1" role="dialog" aria-labelledby="myModal">
        <div className="modal-dialog" role="document">
          <div className="modal-content">

            <div className="modal-header">
              Sign In &amp; Sign Up
              <button type="button" className="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>						
            </div>

            <section>
              <div className="modal-body">
                <div className="w3_login_module">
                  <div className="module form-module">

                    <div className="toggle">
                      <i className="fa fa-times fa-pencil"></i>
                      <div className="tooltip">Click Me</div>
                    </div>

                    <div className="form">
                      <h3>Login to your account</h3>
                      <form action={null} method="post">
                        <input type="text" name="Username" placeholder="Username" required="" />
                        <input type="password" name="Password" placeholder="Password" required="" />
                        <input type="submit" value="Login" />
                      </form>
                    </div>

                    <div className="form">
                      <h3>Create an account</h3>
                      <form action={null} method="post">
                        <input type="text" name="Username" placeholder="Username" required="" />
                        <input type="password" name="Password" placeholder="Password" required="" />
                        <input type="email" name="Email" placeholder="Email Address" required="" />
                        <input type="text" name="Phone" placeholder="Phone Number" required="" />
                        <input type="submit" value="Register" />
                      </form>
                    </div>

                    <div className="cta"><a href={null}>Forgot your password?</a></div>
                    
                  </div>
                </div>
              </div>
            </section>

          </div>
        </div>
      </div>
    );
  }
}

export default Popup;