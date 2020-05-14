<template>
  <div class="container">
    <div class="login-container">
      <div>
        <div>
          <button class="loginBtn loginBtn--facebook">
            Login with Facebook
          </button>
        </div>
        <div>
          <button class="loginBtn loginBtn--google" @click="googleLogin">
            Login with Google
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  mounted() {
    let config = process.env.NODE_ENV === 'production'
    this.config = config ? '' : 'http://localhost:3000';
  },
  methods: {
    googleLogin() {
      window.location.href =  this.config + '/auth/google';
    },
    facebookLogin() {
      window.location.href = this.config + '/auth/facebook';
    },
  },
  data() {
    return {
      config: ''
    }
  }
}
</script>

<style>
  .container {
    display: flex;
    justify-content: center;
    align-items: center;
    height: calc(100vh);
  }
  .login-container {
    background-color: lightgray;
    width: 280px;
    height: 240px;
    border-radius: 2%;
    opacity: 0.8;
  }

  .login-container > div {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    height: 100%;
  }
  /* Shared */
  .loginBtn {
    box-sizing: border-box;
    position: relative;
    /* width: 13em;  - apply for fixed size */
    width: 224px;
    margin: 0.2em;
    padding: 0 15px 0 46px;
    border: none;
    text-align: left;
    line-height: 34px;
    white-space: nowrap;
    border-radius: 0.2em;
    font-size: 1rem;
    color: #FFF;
    opacity: 1;
  }
  .loginBtn:before {
    content: "";
    box-sizing: border-box;
    position: absolute;
    top: 0;
    left: 0;
    width: 34px;
    height: 100%;
  }
  .loginBtn:focus {
    outline: none;
  }
  .loginBtn:active {
    box-shadow: inset 0 0 0 32px rgba(0,0,0,0.1);
  }

  /* Facebook */
  .loginBtn--facebook {
    background-color: #4C69BA;
    background-image: linear-gradient(#4C69BA, #3B55A0);
    /*font-family: "Helvetica neue", Helvetica Neue, Helvetica, Arial, sans-serif;*/
    text-shadow: 0 -1px 0 #354C8C;
  }
  .loginBtn--facebook:before {
    border-right: #364e92 1px solid;
    background: url('https://s3-us-west-2.amazonaws.com/s.cdpn.io/14082/icon_facebook.png') 6px 6px no-repeat;
  }
  .loginBtn--facebook:hover,
  .loginBtn--facebook:focus {
    background-color: #5B7BD5;
    background-image: linear-gradient(#5B7BD5, #4864B1);
  }


  /* Google */
  .loginBtn--google {
    /*font-family: "Roboto", Roboto, arial, sans-serif;*/
    background: #DD4B39;
  }
  .loginBtn--google:before {
    border-right: #BB3F30 1px solid;
    background: url('https://s3-us-west-2.amazonaws.com/s.cdpn.io/14082/icon_google.png') 6px 6px no-repeat;
  }
  .loginBtn--google:hover,
  .loginBtn--google:focus {
    background: #E74B37;
  }
</style>