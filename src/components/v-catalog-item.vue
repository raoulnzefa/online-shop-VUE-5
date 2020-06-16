
<template>
  <div class="v-catalog-item">
    <img class="v-catalog-item__image" :src=" require('../assets/img/' + product_data.image)  " alt="picture">
    <p class="v-catalog-item__name"> {{product_data.name}} </p>
    <p class="v-catalog-item__price"> {{product_data.price | fixNumbers}} p. </p>
    <button 
      class="v-catalog-item__add_to_cart_btn btn"
      @click="addToCart"
    >Add to cart
    </button>
      </div>
</template>

<script>
import {fixNumbers} from '../fixNumbers'
export default {
  name: 'v-catalog-item',
  props:{
    product_data:{
      type: Object,
      required: true,
      default(){
        return{}
      }
    }
  },
  data(){
    return{}
  },
  filters: {
    fixNumbers
  },
  computed:{},
  methods:{
   addToCart(){
     this.$emit('addToCart', this.product_data);
   }
  },
 
}
</script>

<style lang="scss">
  .v-catalog-item{
    flex-basis: 25%;
    box-shadow: 0 0 8px 0 #e0e0e0;
    padding: 16px;
    margin-bottom: 16px;

    &__image{
      width: 100px;
    }
  }

  .btn {
    background: rgb(117, 177, 29);
    padding: 10px;
    border: none;
    border-radius: 4px;
    color: #ffffff;
    cursor: pointer;
  }
</style>