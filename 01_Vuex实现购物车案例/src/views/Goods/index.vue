<template>
  <div>
      
      <van-card
        v-for="item in goodsList"
        :key="item.goodsId"
        :price="item.originalPrice"
        :title="item.title"
        :thumb="item.mainPic"
        @click="addCart(item)"
        />
  </div>
</template>

<script>
export default {
    data(){
        return {
            goodsList: [] 
        }
    },
    created(){

        this.$axios.get("/list.json").then(res=>{
            // console.log(res.data.data.data.list)
            this.goodsList = res.data.data.data.list
        })
    },
    methods: {
        addCart(item){
            this.$store.commit('add',item)
        }
    }
}
</script>

<style>

</style>