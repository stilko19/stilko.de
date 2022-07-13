<template functional>
  <nuxt-link
    :to="`#${props.id}`"
    :id="props.id"
    class="section-header"
  >
    <slot/>
  </nuxt-link>
</template>

<script>
export default {
  props: {
    id: {
      type: String,
      required: true
    }
  }
}
</script>

<style lang="scss" scoped>
.section-header {
  font-weight: bold;
  font-size: 2.4rem;
  margin-bottom: 20px;
  display: block;
  position: relative;

  &:before {
    content: '#';
    transition: color .3s;
    padding-right: 10px;
    color: $colGreen;
  }

  &:after {
    content: '';
    position: absolute;
    width: 0;
    height: 0;
    border-style: solid;
    border-width: 0 0 25px 25px;
    border-color: transparent transparent $colGreen transparent;
    right: 0;
    bottom: 0;
    transition: border-color .3s;

  }

  &:hover {
    &:before {
      color: $colBlue;
    }
    &:after {
      border-color: transparent transparent $colBlue transparent;
    }
  }
}
</style>