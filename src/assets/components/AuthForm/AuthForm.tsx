import React, { useState } from 'react';
import google from '../../images/svgs/google.svg';
import fb from '../../images/svgs/facebook.svg';
import './AuthForm.scss';
export interface Values {
  [name: string]: string;
  email: string;
  password: string;
}
const AuthForm = () => {
  const [values, setValues] = useState<Values>({
    name: '',
    email: '',
    password: '',
  });
  const [isSignIn, setIsSignIn] = useState(!false);
  const [isPasshid, setIsPasshid] = useState(false);
  // const [message, setMessage] = useState('');

  const inputOnChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValues((v) => {
      const values = { ...v };
      values[e.target.name] = e.target.value;
      console.log(values);

      return values;
    });
  };
  return (
    <div className="AuthForm">
      <div className="grids">
        <div className="primary">
          <div className="primary__heading">
            <div className="heading">{isSignIn ? 'Sign-in' : 'Sign-up'}</div>
            <div className="greeting">
              {isSignIn
                ? 'Welcome back.Happy to see you'
                : 'Looks like you are new here.'}
            </div>
          </div>
          <form>
            <div className="input-container">
              <div className="input-wrapper">
                {!isSignIn && (
                  <div className="input">
                    <label htmlFor="name">Name</label>
                    <input
                      value={values['name']}
                      onChange={inputOnChangeHandler}
                      name="name"
                      type="name"
                    />
                  </div>
                )}
                <div className="input">
                  <label htmlFor="email">E-mail</label>
                  <input
                    value={values['email']}
                    onChange={inputOnChangeHandler}
                    name="email"
                    type="email"
                  />
                </div>

                <div className="input">
                  <label htmlFor="password">Password</label>
                  <div className="pass">
                    <input
                      value={values['password']}
                      onChange={inputOnChangeHandler}
                      name="password"
                      type={isPasshid ? 'password' : 'text'}
                    />
                    <span
                      className="hid-icon"
                      onClick={() => setIsPasshid(!isPasshid)}
                    >
                      <svg
                        viewBox="0 0 19 11"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M9.83317 0.0523682C4.1565 0.0523682 0.666504 5.05237 0.666504 5.05237C0.666504 5.05237 4.1565 10.0524 9.83317 10.0524C15.5098 10.0524 18.9998 5.05237 18.9998 5.05237C18.9998 5.05237 15.5098 0.0523682 9.83317 0.0523682ZM9.83317 8.3857C6.54734 8.3857 4.0615 6.3157 2.84984 5.05237C3.7165 4.1482 5.23567 2.8382 7.229 2.1607C6.75993 2.74448 6.50286 3.47016 6.49984 4.21904C6.49984 6.0607 7.9915 7.55237 9.83317 7.55237C11.6748 7.55237 13.1665 6.0607 13.1665 4.21904C13.1665 3.4382 12.8873 2.72987 12.4373 2.1607C14.4315 2.8382 15.9507 4.14904 16.8157 5.05237C15.6023 6.31737 13.1173 8.3857 9.83234 8.3857H9.83317Z"
                          fill="white"
                        />
                      </svg>
                      <div
                        className={isPasshid ? 'cross' : 'cross cross-active'}
                      ></div>
                    </span>
                  </div>
                </div>

                <p className="message">{/* {message} */}</p>
              </div>
            </div>

            <button className="primary-button auth-button">
              {isSignIn ? 'Sign in' : 'Sign up'}
            </button>
          </form>
        </div>
        <div className="divider">
          <p>or</p>
          <div className="divide"></div>
        </div>
        <div className="secondary">
          <div className="secondary__signin">
            <div className="socials-signin">
              <div className="social">
                <div className={'social-button google'}>
                  <div className="img-container">
                    <img src={google} alt={'google'} />
                  </div>
                  <div className="join">join us with Google</div>
                </div>
                <div className="social-button facebool">
                  <div className="img-container">
                    <img src={fb} alt="facebook" />
                  </div>
                  <div className="join">join us with Facebook</div>
                </div>
              </div>
            </div>
          </div>
          <div className="secondary__button">
            <div className="qoute">
              {isSignIn
                ? 'Not a member. quick Sign up'
                : 'Already signed up. you can Sign-in'}
            </div>
            <button
              onClick={() => setIsSignIn(!isSignIn)}
              className="secondary-button  auth-button"
            >
              {!isSignIn ? 'Sign in' : 'Sign up'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthForm;
