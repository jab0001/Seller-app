<template>
  <div class="accordion-item">
    <div class="header" v-on:click="toggle">
      <slot name="header"></slot>
      <div></div>
    </div>
    <transition
      name="accordion"
      v-on:before-enter="beforeEnter"
      v-on:enter="enter"
      v-on:before-leave="beforeLeave"
      v-on:leave="leave"
    >
      <div class="body" v-show="show">
        <a href="#" class="body-inner">
          <slot></slot>
        </a>
      </div>
    </transition>
  </div>
</template>

<script>
import { Component, Vue } from "vue-property-decorator";

@Component()
export default class AccordionItem extends Vue {
  show = false;

  toggle() {
    this.show = !this.show;
  }

  beforeEnter(el) {
    el.style.height = "0";
  }

  enter(el) {
    el.style.height = el.scrollHeight + "px";
  }

  beforeLeave(el) {
    el.style.height = el.scrollHeight + "px";
  }

  leave(el) {
    el.style.height = "0";
  }
}
</script>

<style lang="scss" scoped>
.accordion-item .body-inner {
  padding: 8px;
  overflow-wrap: break-word;
  /*   white-space: pre-wrap; */

  @media (max-width: 600px) {
    font-size: 16px;
    line-height: 20px;
  }

  @media (min-width: 601px) and (max-width: 1279px) {
    padding: 1vw;
    font-size: 1.9vw;
    line-height: 2vw;
  }
}
</style>
