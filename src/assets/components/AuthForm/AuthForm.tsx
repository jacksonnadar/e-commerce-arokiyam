import React, { useState } from 'react';
import './AuthForm.scss';

import { Authentications } from '../../../firebase';
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
  const [isPasshid, setIsPasshid] = useState(true);
  const [message, setMessage] = useState('');

  const inputOnChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValues((v) => {
      const values = { ...v };
      values[e.target.name] = e.target.value;
      return values;
    });
  };
  const formHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!values.email && !values.password) return;
    if (isSignIn) {
      Authentications.signInWithEmailAndPass(
        values.email,
        values.password,
        setMessage
      );
    }
    if (!isSignIn && values.name) {
      Authentications.creatUserWithEmailAndPass(
        values.name,
        values.email,
        values.password,
        setMessage
      );
    }
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
          <form onSubmit={formHandler}>
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
                        className={!isPasshid ? 'cross' : 'cross cross-active'}
                      ></div>
                    </span>
                  </div>
                </div>

                <p className="message">{message}</p>
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
                <div
                  className={'social-button google'}
                  onClick={Authentications.googleLogin}
                >
                  <div className="img-container">
                    <svg
                      width="28"
                      height="28"
                      viewBox="0 0 28 28"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M27.0741 11.3886H26.0001V11.3333H14.0001V16.6666H21.5354C20.4361 19.7713 17.4821 22 14.0001 22C9.58208 22 6.00008 18.418 6.00008 14C6.00008 9.58196 9.58208 5.99996 14.0001 5.99996C16.0394 5.99996 17.8947 6.76929 19.3074 8.02596L23.0787 4.25463C20.6974 2.03529 17.5121 0.666626 14.0001 0.666626C6.63675 0.666626 0.666748 6.63663 0.666748 14C0.666748 21.3633 6.63675 27.3333 14.0001 27.3333C21.3634 27.3333 27.3334 21.3633 27.3334 14C27.3334 13.106 27.2414 12.2333 27.0741 11.3886Z"
                        fill="#FFC107"
                      />
                      <path
                        d="M2.2041 7.79396L6.58477 11.0066C7.7701 8.07196 10.6408 5.99996 14.0001 5.99996C16.0394 5.99996 17.8948 6.76929 19.3074 8.02596L23.0788 4.25463C20.6974 2.03529 17.5121 0.666626 14.0001 0.666626C8.87877 0.666626 4.43743 3.55796 2.2041 7.79396Z"
                        fill="#FF3D00"
                      />
                      <path
                        d="M13.9999 27.3333C17.4439 27.3333 20.5732 26.0153 22.9392 23.872L18.8126 20.38C17.4289 21.4322 15.7382 22.0013 13.9999 22C10.5319 22 7.58722 19.7886 6.47788 16.7026L2.12988 20.0526C4.33655 24.3706 8.81788 27.3333 13.9999 27.3333Z"
                        fill="#4CAF50"
                      />
                      <path
                        d="M27.074 11.3887H26V11.3334H14V16.6667H21.5353C21.0095 18.1443 20.0622 19.4355 18.8107 20.3807L18.8127 20.3794L22.9393 23.8714C22.6473 24.1367 27.3333 20.6667 27.3333 14C27.3333 13.106 27.2413 12.2334 27.074 11.3887Z"
                        fill="#1976D2"
                      />
                    </svg>
                  </div>
                  <div className="join">join us with Google</div>
                </div>
                <div
                  onClick={Authentications.facebookLogin}
                  className="social-button facebook"
                >
                  <div className="img-container">
                    <svg
                      width="18"
                      height="32"
                      viewBox="0 0 18 32"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M16.4462 17.9999L17.3352 12.2089H11.7782V8.45085C11.7782 6.86685 12.5542 5.32185 15.0432 5.32185H17.5692V0.391854C17.5692 0.391854 15.2772 0.000854492 13.0852 0.000854492C8.50915 0.000854492 5.51815 2.77485 5.51815 7.79585V12.2099H0.431152V18.0009H5.51815V32.0009H11.7782V18.0009L16.4462 17.9999Z"
                        fill="#3B5998"
                      />
                    </svg>
                  </div>
                  <div className="join">join us with FB</div>
                </div>
              </div>
            </div>
          </div>
          <div className="secondary__button">
            <div className="qoute" onClick={Authentications.logOut}>
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
