<template>
  <div class="v-cart-item">
   <img class="v-cart-item__image" :src=" require('../assets/img/' + cart_item_data.image)  " alt="">
   <div class="v-cart-item__info">
     <p> {{cart_item_data.name}} </p>
     <p> {{cart_item_data.price | fixNumbers}} P. </p>
     <p> {{cart_item_data.article}} </p>
   </div>
   <div class="v-cart-item__quantity"> 
     <p>Q-ty:</p>
     <span>
       <span class="quantity_btn" @click="decrementItem">-</span>
      {{this.cart_item_data.quantity}} 
       <span class="quantity_btn" @click="incrementItem">+</span>
     </span>
    </div>
   <button class="btn" @click="deleteFromCart" >Delete</button>
  </div>
</template>


<script>
import {fixNumbers} from '../fixNumbers'
export default {
  name: 'v-cart-item',
  props:{
    cart_item_data: {
      type: Object,
      default(){
        return{}
      }
    }
  },
  filters: {
    fixNumbers
  },
  methods:{
    decrementItem(){
      this.$emit('decrement')
    },
    incrementItem(){
      this.$emit('increment')
    },
    deleteFromCart(){
      this.$emit('deleteFromCart')
    }
  },
   mounted(){
    this.$set(this.cart_item_data, 'quantity', 1)
  }
  
}
</script>


<style lang="scss">
  .v-cart-item{
    display: flex;
    flex-wrap: nowrap;
    justify-content: space-between;
    align-items: center;
    box-shadow: 0 0 8px 0 #e0e0e0;
    margin-bottom: 13px;
    &__image {
      max-width: 50px;
    } 
    .quantity_btn {
      cursor: pointer;
    }
  }
</style>