<template>
  <div>
    <router-view></router-view>
      <van-tabbar v-model="active" router>
        <van-tabbar-item icon="home-o" name="/goods" to="/goods">商品</van-tabbar-item>
        <van-tabbar-item icon="shopping-cart-o" :badge="$store.state.cartList.length" name="/cart" to="/cart">购物车</van-tabbar-item>
     </van-tabbar>
  </div>
</template>

<script>
export default {
    data(){
        return {
            active: window.location.pathname
        }
    }
}
</script>

<style>

</style>