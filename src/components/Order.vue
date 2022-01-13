<template>
  <v-container class="container">
    <button x-large @click="$router.go(-1)" class="btn"><fa class="btn-back" icon="chevron-left"/></button>
    <br>
    <v-card width="250" class="order-img">
      <v-img height="250" v-bind:src="menu.image"></v-img>
    </v-card>
    <br />
    <div class="img-name-order">
      <h2>{{ menu.text }}</h2>
    </div>
    <v-card-actions>
      <div class="container-btn">
          <div class="btn-qty">
        <v-btn icon x-large @click="decQty">
          <fa class="btn-qty" icon="minus"/>
        </v-btn>

        <h1>{{ qty }}</h1>

        <v-btn icon x-large @click="incQty">
          <fa class="btn-qty" icon="plus"/>
        </v-btn>
      </div>
      </div>
    </v-card-actions>

    <v-card-text class="text-center">
        <h2>รวมเป็นเงิน {{qty * menu.price}} &#3647;</h2>
    </v-card-text>
    <br>
    <v-card-actions class="d-flex justify-center">
        <v-btn x-large color="#1D8348" dark @click="addOrder"><h4 class="name-btn"><fa class="btn-cart" icon="cart-arrow-down"></fa>เพิ่มลงตระกร้า</h4></v-btn>
    </v-card-actions>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      qty: 1,
    };
  },
  computed: {
    menu() {
      var id = this.$route.params.id;
      return this.$store.getters.menus[id];
    },
  },
  methods: {
    incQty() {
      if (this.qty < 50) this.qty++;
    },
    decQty() {
      if (this.qty > 1) this.qty--;
    },
    addOrder() {
        this.$store.commit("ADD_ORDER", {
            id: this.$route.params.id,
            price: this.menu.price,
            text: this.menu.text,
            qty: this.qty
        });

        this.$router.go(-1);
    }
  },
};
</script>

<style scoped>
.container {
  font-family: 'Kanit', sans-serif;
}
.img-name-order {
  display: flex;
  justify-content: center;
}
.container-btn {
    width: 100%;
    display: flex;
    justify-content: center;
}
.order-img {
  margin: 0 auto;
}
.btn-qty {
    width: 70%;
    display: flex;
    justify-content: space-between;
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
.name-btn {
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: 'Kanit', sans-serif;
}
.btn-qty {
  color: black;
  font-size: 20px;
}
.btn-cart {
  padding-right: 5px;
  font-size: 32px;
}
</style>