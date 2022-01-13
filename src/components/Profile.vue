<template>
  <v-container>
    <button x-large @click="back" class="btn"><fa class="btn-back" icon="chevron-left"/></button>
    <br>
    <v-img class="text-center">
      <fa class="icon-user" icon="user-alt"></fa>
    </v-img>
    <br>
    <br>
    <h1 class="ty">Thank you purchasing <br>from my store.</h1>
  </v-container>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      
    }
  },
  methods: {
    back() {
      this.$router.replace("/");
    }
  }
}
</script>

<style scoped>
.ty {
  text-align: center;
}
.icon-user {
  font-size: 100px;
}
.btn {
  position: relative;
  right: 0px;
  margin-bottom: 10px;
}
.btn-back {
  font-size: 26px;
  color: black;
}
</style>