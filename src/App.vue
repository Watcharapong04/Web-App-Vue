<template>
  <v-app>
    <v-app-bar app color="#1D8348" dark elevation="3">
      <i><fa icon="tree"/></i>
      <v-toolbar-title class="name">Tree Market</v-toolbar-title>

      <v-spacer></v-spacer>

      <v-menu>
        <template v-slot:activator="{ on }">
          <v-btn icon v-on="on">
            <fa class="icon-bars" icon="bars"/>
          </v-btn>
        </template>

        <v-list> 
          <v-list-item @click="Profile" class="name">
            <v-list-item-title>Profile</v-list-item-title>
          </v-list-item>
          <v-divider></v-divider>
          <v-list-item @click="signout" class="name">
            <v-list-item-title class="red--text">Logout</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>
      
    </v-app-bar>

    <v-content>
      <router-view></router-view>
    </v-content>
    <br>
    <br>
    <v-footer color="#1D8348" dark class="copy-name">
      <h3>&copy; Watcharapong Tunpattanasirikul</h3>
    </v-footer>
  </v-app>
</template>

<script>
import firebase from "firebase/compat/app";

export default {
  name: 'App',
  mounted() {
    firebase.auth().onAuthStateChanged((user) => {
      if(user == null) this.$router.replace("/login");
      else this.$router.replace("/");
    });
  },
  methods: {
    signout() {
      firebase.auth().signOut();
    },
    Profile() {
      firebase.auth().onAuthStateChanged((user) => {
      if(user == null) this.$router.replace("/login");
      else this.$router.replace("/profile");
    });
    }
  }
};
</script>

<style lang="scss" scoped>
* {
  font-family: 'Kanit', sans-serif;
}
i {
  font-size: 24px;
}
.container {
  font-family: 'Kanit', sans-serif;
}
.name {
  margin-left: 5px;
}
.icon-bars {
  font-size: 24px;
}
.copy-name {
  position: fixed;
  bottom: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 50px;
}
</style>
