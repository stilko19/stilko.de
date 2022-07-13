<template>
  <div
    v-bind="$attrs"
    v-on="$listeners"
    :class="{'has-subproducts': subproducts && subproducts.length > 0}"
    class="product"
  >
    <div class="photo" :class="{'no-photo': !photo, 'special': special }">
      <img v-if="photo" :src="photo" :alt="name"/>
    </div>
    <h4 class="name">{{name}}</h4>
    <p class="description">{{description}}</p>
  </div>
</template>

<script>
import Product from '~/components/Product.vue'

export default {
  props: {
    photo: {
      type: String
    },
    name: {
      type: String,
      required: true
    },
    description: {
      type: String,
      required: true
    },
    subproducts: {
      type: Array
    },
    special: {
      type: Boolean,
      default: false
    }
  },
  components: {
    Product
  }
}
</script>

<style lang="scss" scoped>
.product {
  display: block;
  // cursor: pointer;

  .photo {
    // background: #ddd;
    margin-bottom: 16px;

    &.no-photo {
      height: 320px;
      width: 100%;
      background: #ddd;
    }

    img {
      width: 100%;
      height: 320px;
      @media screen and (min-width: 576px) {
        height: 220px;
      }
      @media screen and (min-width: 768px) {
        height: 170px;
      }
      @media screen and (min-width: 1300px) {
        height: 320px;
      }

    }

    &.special {
      display: flex;
      align-items: center;
      justify-content: center;
        img {
          width: 70%;
        }

      }
  }

  .name,
  .description {
    text-align: center;
  }

  .name {
    margin-bottom: 4px;
  }
}
</style>