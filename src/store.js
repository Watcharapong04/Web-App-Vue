import Vue from "vue";
import Vuex from "vuex";

const state = {
    specials : [
        {
            image: "/img/tree-1.jpg",
        },
        {
            image: "/img/tree-2.jpg",
        },
        {
            image: "/img/tree-7.jpg",
        },
        {
            image: "/img/tree-8.jpg",
        },
    ],
    menus: [
        {
            image: "/img/tree-1.jpg",
            text: "บอนสีแดงเขียว",
            price: 1200,
            love: true
        },
        {
            image: "/img/tree-2.jpg",
            text: "บอนสีแดงดำ",
            price: 1300,
            love: false
        },
        {
            image: "/img/tree-3.jpg",
            text: "บอนสีดำเขียว",
            price: 1250,
            love: false
        },
        {
            image: "/img/tree-4.jpg",
            text: "บอนสีเขียว",
            price: 1100,
            love: false
        },
        {
            image: "/img/tree-5.jpg",
            text: "บอนสีแดงส้ม",
            price: 1000,
            love: false
        },
        {
            image: "/img/tree-6.jpg",
            text: "บอนสีแดง",
            price: 1500,
            love: false
        },
        {
            image: "/img/tree-7.jpg",
            text: "บอนสีเขียวชมพู",
            price: 1400,
            love: false
        },
        {
            image: "/img/tree-8.jpg",
            text: "บอนสีชมพู",
            price: 1499,
            love: false
        },
    ],
    orders: [],
    orderInfo: null,
    email: []
};

const getters = {
    specials(state) {
        return state.specials;
    },
    menus(state) {
        return state.menus;
    },
    haveOrders(state) {
        return state.orders.length > 0;
    },
    numberOrders(state) {
        return state.orders.length;
    },
    orders(state) {
        return state.orders;
    },
}

const mutations = {
    ADD_ORDER(state, order) {
        state.orders.push(order);
    },
    DELETE_ORDER(state, index) {
        state.orders.splice(index, 1);
    },
    SUBMIT_ORDER(state, orderInfo) {
        state.orderInfo = orderInfo;
    },
    CLEAR_ORDER(state) {
        state.orders = [];
    }
}

Vue.use(Vuex);

const store = new Vuex.Store({
    state,
    getters,
    mutations
});

export default store;