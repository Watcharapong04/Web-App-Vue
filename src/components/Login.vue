<template>
  <v-container>
    <div v-if="loading" class="text-center">
      <v-progress-circular
        size="50"
        color="red"
        indeterminate
      ></v-progress-circular>
      <p>กำลังดำเนินการ...</p>
    </div>
    <form @submit.prevent="loginRequest">
      <br />
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
        <button class="btn-login"><p>login</p></button>
      </div>
    </form>
    <br />
    <p class="btn-sign">
      Don't have an account? <router-link to="/sign">Sign Up</router-link>
    </p>
    <v-card>
      <v-list>
        <v-list-item @click="signinByGoogle">
          <v-list-item-title>เข้าสู่ระบบด้วย Google</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-card>
  </v-container>
</template>

<script>
import firebase from "firebase/compat/app";
import "firebase/auth";

export default {
  data() {
    return {
      loading: true,
      email: "",
      password: "",
    };
  },
  mounted() {
    firebase
      .auth()
      .getRedirectResult()
      .then((result) => {
        if (result.user == null) {
          this.loading = false;
        } else {
          this.$router.replace("/");
        }
      });
  },
  methods: {
    signinByGoogle() {
      const provider = new firebase.auth.GoogleAuthProvider();
      firebase.auth().signInWithRedirect(provider);
    },
    loginRequest() {
      firebase
        .auth()
        .signInWithEmailAndPassword(this.email, this.password)
        .then(() => {
          alert("Login Sueccss");
          this.$router.replace("/");
        });
    },
  },
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

  border: 2px solid rgba(0, 0, 0, 0.25);
  border-radius: 5px;
}
.btn-login {
  display: flex;
  justify-content: center;
  width: 150px;
  height: 40px;

  color: white;
  font-size: 24px;
  background: #1d8348;
  border-radius: 20px;
}
.btn-sign {
  text-align: center;
}
</style>