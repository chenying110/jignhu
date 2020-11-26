import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: { //购物车数据
    cartList: [],
    num: 0,
    datetime: '2020-11-12'
  },
  mutations: { //操作state
    init(){

    },
    add(state,params){ //添加购物车，参数1为state对象，参数为添加的购物车数据的商品对象
      //过滤购物车数组
      // let arry = state.cartList.filter(item=>{
      //   //获取到购物车对象，即item
      //   return item.goods == params //判断购物车中的商品对象与传过来的商品对象是否一致
      // })

      //判断是否已经添加过该商品了
      let double = false
      state.cartList.map(item=>{
        if(item.goods == params){
          item.num ++
          double = true
          return
        }
      })

      //如果为第一次添加
      if(!double){
        state.cartList.push({
          goods: params,
          num: 1
        })
      }

    },
    del(state,index){//删除购物车数据
      state.cartList.splice(index,1)
    },
    update(state,params){//修改购买数量，参数2为要修改的商品对象
      state.cartList[params.index].num += params.num 
      console.log(state.cartList)
    }
  },
  actions: { 
    init(){

    },
    //添加购物车
    add(store,params){
      store.state.num++
      store.commit("add",params)
    },
    //修改
    update(store,params){
      store.commit('update',params)
    }
  },
  modules: {
  },
  getters:{
    num2(state){
      let n = state.num + 10
      return n
    },
    gettime(state){
      let time = state.datetime
      let arr = time.split("-")
      return `${arr[0]}年${arr[1]}月${arr[2]}日`
    }
  }
})
