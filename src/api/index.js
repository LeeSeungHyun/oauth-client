import axios from 'axios';

let env = process.env.NODE_ENV === 'production'
const url = env ? 'https://book-fishing.herokuapp.com' : 'http://localhost:3000';

export default{
  checkUser: async () => {
    try {
      let response = await axios.get(url + '/auth/check', {
        headers: { 'Content-Type': 'application/json' },
        withCredentials: true
      });
      return response || null;
    } catch(err) {
      console.log(err);
    }
  },
  logoutUser: async () => {
    try {
      let response = await axios.get(url + '/auth/logout', {
        headers: { 'Content-Type': 'application/json' },
        withCredentials: true
      });
      return response || null;
    } catch(err) {
      console.log(err);
    }
  }
}