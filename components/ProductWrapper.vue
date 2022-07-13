<template>
  <div>
    <Product
      :photo="photo"
      :name="name"
      :description="description"
      class="separate"
      @click="opened = !opened"
    />
    <div class="subproducts" :class="{'opened': opened}">
      <Product
        v-for="(subproduct, index) in subproducts"
        :key="index"
        :photo="subproduct.photo"
        :name="subproduct.name"
        :description="subproduct.description"
      />

      <div v-if="subproducts" class="close-icon" @click="opened = !opened" />
    </div>
  </div>
</template>

<script>
import Product from '~/components/Product.vue'

export default {
  data() {
    return {
      opened: false
    }
  },
  props: {
    photo: {
      type: String,
      required: true
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
    }
  },
  components: {
    Product
  }
}
</script>

<style lang="scss" scoped>
.close-icon {
  width: 35px;
  height: 35px;
  background: url('../assets/close.svg');
  margin: 0 auto;
  cursor: pointer;
}

.subproducts {
  opacity: 0;
  position: absolute;
  transform: scaleY(0);

  &.opened {
    opacity: 1;
    transform: none;
    transition: opacity 0.7s;
    position: relative;
  }
}

.product {
  display: block;
  &.separate {
    margin-bottom: 60px;
  }

  .photo {
    background: #ddd;
    margin-bottom: 16px;

    img {
      width: 100%;
      height: 320px;
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