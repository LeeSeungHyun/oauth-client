<template>
  <div>
    <div class="logout-container" v-if="Object.keys(user).length !== 0">
      <h4>성공적으로 로그인 되었습니다.</h4>
      <div class="sub-container">
        <div>
          <img :src='user.picture' alt="profile" width="50" height="50">
        </div>
        <div>
          <div>
            {{user.username}}
          </div>
            <div>
            {{user.email}}
          </div>
        </div>
      </div>
      <button @click="logout">
        logout
      </button>
    </div>
  </div>
</template>

<script>
import API from '@/api/index.js';

export default {
  mounted() {
    this.checkUser();
  },
  methods: {
    async checkUser() {
      let response = await API.checkUser();
      console.log(response);
      if(Object.keys(response.data).length === 0) {
        this.$router.push({ path: 'login' })
      } else {
        this.user = {...response.data.user};
      }
    },
    async logout() {
      let response = await API.logoutUser();
      // object
      this.$router.push({ path: 'login' })
    }
  },
   data() {
    return {
      user: {}
    }
  }
}
</script>

<style>
  .logout-container {
    padding: 10px;
    /* background-color: lightgray;
    width: 280px;
    height: 240px; */
    width: 280px;
    /* text-align: center; */
  }
  .sub-container {
    display: flex;
  }
  .sub-container img{
    border-radius: 50%;
  }
  .sub-container > div{
    margin-right: 10px;
  }
  button {
    float: right;
  }
</style>