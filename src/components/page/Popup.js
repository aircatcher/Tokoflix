import React from 'react';
import $ from 'jquery';
import { Form, Input } from 'semantic-ui-react';

var api_key = '1c67c0067c6a82a74b92665f1e488325';

export default class Popup extends React.Component
{
  constructor(props)
  {
    super(props);
    this.loginTokenValidated = this.loginTokenValidated.bind(this);
  }
  
  /**
   * #1 Create a Request Token
   */
  login(e)
  {
    e.preventDefault();
    
    const newToken = 'https://api.themoviedb.org/3/authentication/token/new?api_key=' + api_key;
    $.ajax({
      url: newToken,
      success: (result) =>
      {
        // console.log('Successfuly fetched the data');
        localStorage.setItem('Auth Status', result.success);
        localStorage.setItem('Authorization', 'Bearer ' + result.request_token)
        window.open('https://www.themoviedb.org/authenticate/' + result.request_token);
      },
      error: (xhr, status, err) =>
      {
        // console.log('Failed to fetch data');
      }
    });

    const newSessionID = 'https://api.themoviedb.org/3/authentication/session/new?api_key=' + api_key;
    $.ajax({
      url: newSessionID,
      success: (result) =>
      {
        console.log(result)
        // console.log('Successfuly fetched the data');
      },
      error: (xhr, status, err) =>
      {
        // console.log('Failed to fetch data');
      }
    });
  }

  /**
   * #2 Create a new session ID with the user-authorized request token
   * https://www.themoviedb.org/authenticate/{REQUEST_TOKEN}
   */
  loginTokenValidated(e)
  {
    e.preventDefault();
    
    const newSessionID = 'https://api.themoviedb.org/3/authentication/session/new?api_key=' + api_key;
    $.ajax({
      url: newSessionID,
      success: (result) =>
      {
        console.log(result)
        // console.log('Successfuly fetched the data');
      },
      error: (xhr, status, err) =>
      {
        // console.log('Failed to fetch data');
      }
    });
  }

  loginGuest(e)
  {
    e.preventDefault();

    var api_key = '1c67c0067c6a82a74b92665f1e488325';
    // return fetch(`https://api.themoviedb.org/3/authentication/token/new?api_key=` + api_key)
    // .then(res => { return localStorage.setItem('Authorization', 'Bearer ' + res.request_token) })
    // .then(data => console.log(data));
    const authRequest = 'https://api.themoviedb.org/3/authentication/guest_session/new?api_key=' + api_key;

    $.ajax({
      url: authRequest,
      success: (tokenRes) =>
      {
        // console.log('Successfuly fetched the data');
        localStorage.setItem('Authorization', tokenRes.guest_session_id);
        window.location.reload();
      },
      error: (xhr, status, err) =>
      {
        // console.log('Failed to fetch data');
      }
    });

    // document.getElementById('please-refresh').innerHTML = 'Please refresh this window';
  }

  forgotPassword(e)
  {
    e.preventDefault();
  }

  handleChange(field, e)
  {         
    let fields = this.state.fields;
    fields[field] = e.target.value;        
    this.setState(
    {
      fields,
      [e.target.name]: e.target.value
    });
  }

  errorCheck()
  {
    document.getElementById('errm-container').style.display = 'flex';
    document.getElementById('errm').innerHTML = 'Registered users need to verify E-Mail first<br/>Please check your E-Mail if you haven\'t';
    document.getElementById('login-card').classList.add('shaker');
  }

  // handleValidation()
  // {
  //   let fields = this.state.fields;
  //   let errors = {};
  //   // let formIsValid = true;

  //   //Name
  //   if(!fields["username"])
  //   {
  //     // formIsValid = false;
  //     errors["username"] = "Username cannot be empty";
  //   }

  //   //Email
  //   if(!fields["password"])
  //   {
  //     // formIsValid = false;
  //     errors["password"] = "Password be empty";
  //   }

  //   this.setState({ errors: errors });
  //   // return formIsValid;
  // }

  render()
  {
    return (
      <div className="modal video-modal fade in" id="authModal" tabIndex="-1" role="dialog" aria-labelledby="authModal">
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header">
                Sign In
                <button type="button" className="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>						
              </div>
              <section>
                <div className="modal-body">
                  <div className="w3_login_module">
                    <center><p id="please-refresh"></p></center>
                    <div className="module form-module">

                      <div className="toggle">
                        <i className="fa fa-times fa-pencil"></i>
                        {/* <div className="tooltip">Click Me</div> */}
                      </div>

                      <Form onSubmit={this.login}>
                        <Form.Field id="token-is-validated"></Form.Field>
                        <Form.Field>
                          <h3><label>Login</label></h3>
                          <Input type="text" name="username" placeholder="Username" disabled/>
                          <Input type="password" name="password" placeholder="Password" disabled/>
                          <input type="submit" name="login_user" value="Login"/>
                        </Form.Field>
                      </Form>

                      {/* <div className="form">
                        <h3>Create an account</h3>
                        <form action="#" method="post">
                          <input type="text" name="Username" placeholder="Username" required=""/>
                          <input type="password" name="Password" placeholder="Password" required=""/>
                          <input type="email" name="Email" placeholder="Email Address" required=""/>
                          <input type="text" name="Phone" placeholder="Phone Number" required=""/>
                          <input type="submit" value="Register"/>
                        </form>
                      </div> */}

                      <div className="cta" onClick={this.loginGuest} style={{cursor:'pointer'}}>
                        <a>GUUEST LOGIN - DEMO</a>
                      </div>
                      <div className="cta" onClick={this.forgotPassword} style={{cursor:'pointer'}}>
                        <a>Forgot your password?</a>
                      </div>
                      
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