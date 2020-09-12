import React from 'react';
import './LoginPage.css';
import { Link } from 'react-router-dom';

function LoginPage() {
  return (
    <div className="login">
      <div className="login-form">
        <div className="logo"></div>
        <div className="container">
          <h1>로그인 Sign in</h1>
          <form action="">
            <div className="txtb">
              <input type="text" placeholder=" " />
              <span className="placeholder">Email</span>
            </div>
            <div className="txtb">
              <input type="password" id="passwordInput" placeholder=" " />
              <span className="placeholder">Password</span>
            </div>
            <label className="checkbox">
              <input type="checkbox" />
              <span>로그인 유지</span>
            </label>
            <div className="forgot-signin-container">
              <a href="#" className="link">
                비밀번호를 잊으셧나요?
              </a>
              <input type="button" value="로그인" />
            </div>
          </form>
        </div>

        <div className="container bottom-container">
          <h3 className="row">Sign in using</h3>
          <div className="sm-login row">
            <a href="#">
              <img
                src={process.env.PUBLIC_URL + '/images/login/google.png'}
                alt=""
              />
            </a>
            <a href="#">
              <img
                src={process.env.PUBLIC_URL + '/images/login/fb.png'}
                alt=""
              />
            </a>
            <a href="#">
              <img
                src={process.env.PUBLIC_URL + '/images/login/twitter.png'}
                alt=""
              />
            </a>
          </div>
        </div>

        <div className="create-account">
          회원이 아니신가요?
          <Link to="/register" className="link">
            회원가입 하러가기
          </Link>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
