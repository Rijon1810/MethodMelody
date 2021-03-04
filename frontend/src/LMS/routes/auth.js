import axios from "../api/Config";
const jwt = require("jsonwebtoken");

class Auth {
  constructor() {
    this.authenticated = false;
    this.type = false;
  }

  login(v_token, email, type, name, id, course) {
    //   this.authenticated = true;
    localStorage.setItem("v_token", v_token);
    //   localStorage.setItem("email", email);
    //   localStorage.setItem("type", type);
    //   localStorage.setItem("name", name);
    //   localStorage.setItem("id", id);
    //   localStorage.setItem("v_auth", "OK");
    //   localStorage.setItem("course", course);
  }

  logout() {
    localStorage.removeItem("v_token");
    localStorage.clear();
    //   this.authenticated = false;
    //   localStorage.removeItem("name");
    //   localStorage.removeItem("id");
    //   localStorage.removeItem("email");
    //   localStorage.removeItem("v_auth");
    //   // localStorage.removeItem("course", course);
  }

  isAuthenticated() {
    let _id = localStorage.getItem("v_token");
    console.log("_id" + _id);
    try {
      const { id } = jwt.verify(_id, "potatoPotatopOtato726");
      console.log("verifedid " + id);
      this.authenticated = true;
    } catch (error) {
      console.log("expired");
      this.authenticated = false;
    }
    // axios
    //   .get(`user/_ga/${_id}`, {
    //     headers: {
    //       "auth-token": `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InNoYW5ld2FzYWhtZWRAZ21haWwuY29tIiwicGFzc3dvcmQiOiJQb3RhdG83MjYiLCJpYXQiOjE1OTU4NjA3MzYsImV4cCI6MTU5NTg2NDMzNn0.IRPW-1hioz4LZABZrmtYakjmDwORfKnzIWkwK3DzAXc`,
    //     },
    //   })
    //   .then((res) => {
    //     console.log("res" + res.data.status);
    //     if (res.data.status === "OK") {
    //       console.log("authas" + JSON.stringify(res.data.status));
    //       this.authenticated = true;
    //     } else {
    //       // localStorage.removeItem("v_token");
    //       // localStorage.removeItem("email");
    //       // localStorage.removeItem("v_auth");
    //       this.authenticated = false;
    //     }
    //   });
    return this.authenticated;
  }
  isAdmin(type) {
    if (type !== 1) return false;
  }
}

export default new Auth();
