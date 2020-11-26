<template>
  <div>
      <van-checkbox-group v-model="result">
          <!-- item购物车对象 -->
          <van-row v-for="(item,index) in $store.state.cartList" :key="index">
              <van-col span="2">
                  <van-checkbox :name="item"></van-checkbox>
              </van-col>
              <van-col span="22">
                   <van-card
                        :price="item.goods.originalPrice"
                        :title="item.goods.title"
                        :thumb="item.goods.mainPic"
                    >

                    <template #num>
                        <van-stepper v-model="item.num" @minus="handleNum(index,-1)" @plus="handleNum(index,1)" />
                    </template>
                   </van-card>
              </van-col>
          </van-row>

        
       
      </van-checkbox-group>
  </div>
</template>

<script>
export default {
    data(){
        return {
            result: []
        }
    },
    watch: {
        hobby: {
            handler(arry){
                console.log(arry)
            },
            deep:true
        }
    },
    methods: {
       handleNum(index,num){ //加减购买商品数量
            this.$store.commit('update',{
                index,
                num
            })
       }
    }
}
</script>

<style>

</style>