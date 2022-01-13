<template>
  <v-container class="container">
    <v-row>
      <v-col cols="12">
        <v-card elevation="2">
          <v-carousel hide-delimiters height="300">
            <v-carousel-item v-for="(item, index) in specials" :key="index">
              <v-img
                height="300"
                :src="item.image"
                class="align-end"
                gradient="to bottom, rgba(0,0,0,0.1), rgba(0,0,0,0.5)"
              >
              </v-img>
            </v-carousel-item>
          </v-carousel>
        </v-card>
      </v-col>
    </v-row>

    <v-row>
      <v-col cols="6" md="3" v-for="(item, index) in menus" :key="index">
        <v-card :to="'/order/' + index">
          <v-img
            height="200 "
            :src="item.image"
            class="align-end"
            gradient="to bottom, rgba(0,0,0,0.1), rgba(0,0,0,0.5)"
          >
          <div class="text-name">
            <p>{{ item.price }} &#3647;</p>
            <p>{{ item.text }}</p>
          </div>
          </v-img>
        </v-card>
      </v-col>
    </v-row>

    <v-btn v-if="haveOrders" elevation="1" icon class="btn-carts" x-large to="/checkout">
      <fa class="btn" icon="shopping-cart"/>
      <p class="number-red">{{numberOrders}}</p>
    </v-btn>
  </v-container>
</template>

<script>
export default {
  computed: {
    specials() {
      return this.$store.getters.specials;
    },
    menus() {
      return this.$store.getters.menus;
    },
    haveOrders() {
      return this.$store.getters.haveOrders;
    },
    numberOrders() {
      return this.$store.getters.numberOrders;
    }
  },
};
</script>

<style scoped>
.container {
  font-family: 'Kanit', sans-serif;
}
.text-name {
  margin-right: 5px;
  text-align: end;
  color: white;
  font-size: 20px;
}
.text-name-carousel {
  text-align: center;
  color: white;
  font-size: 24px;
}
.btn-carts {
  position: fixed;
  right: 15px;
  bottom: 55px;
  background: #1d8348;
}
.btn-carts .btn {
  font-size: 20px;
  color: white;
}
.number-red {
  position: absolute;
  top: -17px;
  right: -1px;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 20px;
  height: 20px;
  background: red;
  border-radius: 50%;
  color: white;
  font-family: 'Kanit', sans-serif;
}
</style>