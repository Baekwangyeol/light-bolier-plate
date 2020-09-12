import React from 'react';
import './RegisterPage.css';

function RegisterPage() {
  return (
    <div className="Register">
      <div className="Register-form">
        <div className="logo"></div>
        <div className="container">
          <h1>회원가입 Sign up</h1>
          <form action="">
            <div className="txtb">
              <input type="email" placeholder=" " />
              <span className="placeholder">Email</span>
            </div>
            <div className="txtb">
              <input type="password" id="passwordInput" placeholder=" " />
              <span className="placeholder">Password</span>
            </div>
            <div className="txtb">
              <input type="password" id="passwordInput" placeholder=" " />
              <span className="placeholder">Password Confirm</span>
            </div>
            <div className="txtb">
              <input type="text" placeholder=" " />
              <span className="placeholder">Name</span>
            </div>

            <label className="checkbox">
              <input type="checkbox" />
              <span>개인정보 동의</span>
            </label>
            <div className="sign-up">
              <input type="button" value="회원가입" />
              <input type="button" value="취소" />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default RegisterPage;
