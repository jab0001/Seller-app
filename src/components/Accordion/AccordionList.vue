<template>
  <ul class="accordion">
    <slot></slot>
  </ul>
</template>

<script>
export default {
  props: {
    active: {
      type: Number,
      default: null,
    },
  },
  data() {
    return {
      Accordion: {
        count: 0,
        active: this.active,
      },
    };
  },
  provide() {
    return {
      Accordion: this.Accordion,
    };
  },
};
</script>

<style lang="scss" scoped>
.accordion {
  list-style: none;
  margin: 0;
  padding: 0;

  &__item:last-child {
    border-bottom: none;
  }
}
</style>
