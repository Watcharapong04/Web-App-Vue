<template>
  <v-container>
    <v-card elevation="1">
      <v-card-title> รายการสินค้าในตระกร้า </v-card-title>
    </v-card>
    <v-card
      class="card-slot"
      elevation="1"
      v-for="(item, index) in orders"
      :key="index"
    >
      <v-list>
        <v-list-item>
          <v-list-item-content>
            <v-list-item-title>{{ item.text }}</v-list-item-title>
            <v-list-item-subtitle
              >ราคา : {{ item.price * item.qty }} &#3647;</v-list-item-subtitle
            >
          </v-list-item-content>

          <v-list-actions>
            <v-btn icon @click="deleteOrder">
              <fa class="btn-delete" icon="trash-alt"></fa>
            </v-btn>
          </v-list-actions>
        </v-list-item>
      </v-list>
    </v-card>
    <v-card-text class="text-center" v-show="totalPrice > 0">
      <h1>รวมเป็นเงิน : {{ totalPrice }} &#3647;</h1>
    </v-card-text>

    <v-divider></v-divider>

    <v-form v-model="valid">
      <v-card-text>
        <p>ข้อมูลลูกค้า</p>
        <v-text-field
          :rules="[(v) => (v == null || v == '' ? 'โปรดกรอกชื่อลูกค้า' : true)]"
          v-model="fname"
          label="ชื่อ"
          filled
        ></v-text-field>
        <v-text-field
          :rules="[
            (v) => (v == null || v == '' ? 'โปรดกรอกนามสกุลลูกค้า' : true),
          ]"
          v-model="lname"
          label="นามสกุล"
          filled
        ></v-text-field>
        <v-divider></v-divider>
        <br />
        <p>วิธีการส่งสินค้า</p>

        <form :v-model="shippingType" >
          <input
          type="radio"
          value="picking"
          v-model="shippingType"
        /><label for="picking"> รับสินค้าที่ร้าน</label>
        <br />
        <br />
        <input
          type="radio"
          value="shipping"
          v-model="shippingType"
        /><label for="shipping"> จัดส่งสินค้า</label>
        </form>
        <br />
        <textarea
          v-if="shippingType == 'shipping'"
          :rules="[(v) => (v == null || v == '' ? 'โปรดกรอกที่อยู่' : true)]"
          v-model="shippingAddress"
          placeholder=" ที่อยู่จัดส่งสินค้า"
          filled
        ></textarea>
        <br>
        <br>
        <v-text-field
          :rules="[
            (v) => (v == null || v == '' ? 'โปรดกรอกเบอร์โทรศัทพ์' : true),
          ]"
          v-model="telephone"
          counter
          maxlength="10"
          label="เบอร์โทรศัพท์"
          filled
        ></v-text-field>
      </v-card-text>

      <v-divider></v-divider>

      <v-card-text>
        <p>วิธีการชำระเงิน</p>

        <input type="radio" id="cash" value="cash" v-model="paymentMethod"/><label for="shipping">
          เก็บเงินปลายทาง</label
        >
      </v-card-text>
    </v-form>

    <v-divider></v-divider>
    <br />

    <v-card-actions>
      <v-btn
        x-large
        color="#1d8348"
        class="white--text"
        :disabled="valid == false"
        @click="submitOrder"
        >ชำระเงิน</v-btn
      >
      <v-spacer></v-spacer>
      <v-btn x-large to="/">กลับไปหน้าหลัก</v-btn>
    </v-card-actions>
  </v-container>
</template>

<script>
import { db } from "../main.js";

export default {
  data() {
    return {
      fname: "",
      lname: "",
      valid: false,
      shippingType: "picking",
      shippingAddress: null,
      telephone: null,
      paymentMethod: "cash",
    };
  },
  computed: {
    orders() {
      return this.$store.getters.orders;
    },
    totalPrice() {
      var total = 0;
      this.orders.forEach((item) => {
        total += item.price * item.qty;
      });

      return total;
    },
  },
  methods: {
    deleteOrder(index) {
      this.$store.commit("DELETE_ORDER", index);
    },
    submitOrder() {
      db.collection("Ordertree").add({
        fname: this.fname,
        lname: this.lname,
        orderstree: this.orders,
        money: this.totalPrice,
        address: this.shippingAddress,
        shipping: this.shippingType,
        paymenttype: this.paymentMethod,
        tel: this.telephone,
      });
      this.$router.replace("/Checkout-process");
    },
  },
};
</script>

<style scoped>
* {
  font-family: 'Kanit', sans-serif;
}
.card-slot {
  margin-top: 7px;
  border-bottom: 2px solid #1d8348;
  border-radius: 0px 0px 16px 16px;
}
.btn-delete {
  font-size: 24px;
  color: red;
}
textarea {
  width: 80%;
  height: 120px;

  border: 2px solid black;
  border-radius: 5px;
}
</style>
