<template>
  <v-container>
    <form @submit.prevent="signupRequest">
      <br>
      <v-text-field
        label="Email"
        placeholder="enter email"
        filled
        rounded
        dense
        v-model="email"
      ></v-text-field>
      <v-text-field
        label="Password"
        placeholder="enter password"
        filled
        rounded
        dense
        v-model="password"
      ></v-text-field>
      <div class="container-btn">
        <button class="btn-sign"><p>Sign Up</p></button>
      </div>
    </form>
    <br>
    <div class="container-btn">
        <p>Already have an account?<router-link to="/login"> Login</router-link></p>
    </div>
  </v-container>
</template>

<script>
import firebase from "firebase/compat/app"
import "firebase/auth";

export default {
    data() {
        return {
            email: "",
            password: ""
        }
    },
    methods: {
        signupRequest() {
            firebase.auth().createUserWithEmailAndPassword(this.email, this.password).then(
                () => {
                    alert("Register Success")
                    this.$router.replace("/login")
                }
            )
        }
    }
};
</script>

<style scoped>
.container-btn {
  display: flex;
  justify-content: center;
}
.form-control {
  width: 100%;
  height: 40px;

  border: 2px solid rgba(0, 0, 0, .25);
  border-radius: 5px;
}
.btn-sign {
  display: flex;
  justify-content: center;
  width: 150px;
  height: 40px;

  color: white;
  font-size: 24px;
  background: #1d8348;
  border-radius: 20px;
}
.btn-login p {
  padding-top: 5px;
}
</style>