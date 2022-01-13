<template>
  <v-container>
          <v-card-text class="text-center">
              <fa class="icon-check" icon="check-circle"/>
              <br>
              <br>
              <p>ขอบคุณที่ชำระเงิน เรากำลังดำเนินการตามคำสั่งซื้อสินค้าของคุณ</p>
          </v-card-text>

          <v-card-actions class="d-flex justify-center">
              <v-btn x-large to="/">กลับไปหน้าหลัก</v-btn>
          </v-card-actions>
  </v-container>
</template>

<script>
export default {
    mounted() {
        this.$store.commit("CLEAR_ORDER");
    }
}
</script>

<style scoped> 
* {
  font-family: 'Kanit', sans-serif;
}
.icon-check {
    font-size: 150px;
}
</style>