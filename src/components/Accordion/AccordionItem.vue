<template>
  <li class="accordion__item">
    <div
      class="accordion__trigger"
      :class="{ accordion__trigger_active: visible }"
      @click="open"
      :style="`${isStepTwo ? 'justify-content: flex-start' : ''}`"
    >
      <i
        v-if="isStepTwo"
        :class="`icon-angle-${
          visible ? 'down' : 'left'
        } icon-angle-${isStepTwo}`"
      ></i>
      <slot name="accordion-trigger"></slot>
      <i
        v-if="isStepOne"
        :class="`icon-angle-${
          visible ? 'down' : 'up'
        } icon-angle-${!isStepOne}`"
      ></i>
    </div>

    <transition
      name="accordion"
      @enter="start"
      @after-enter="end"
      @before-leave="start"
      @after-leave="end"
    >
      <div class="accordion__content" v-show="visible">
        <ul>
          <slot name="accordion-content"></slot>
        </ul>
      </div>
    </transition>
  </li>
</template>

<script>
export default {
  props: {
    isStepOne: {
      type: Boolean,
      default: true,
    },
    isStepTwo: {
      type: Boolean,
      default: false,
    },
    step: {
      type: String,
      default: "",
    },
  },
  inject: ["Accordion"],
  data() {
    return {
      index: null,
    };
  },
  computed: {
    visible() {
      return this.index == this.Accordion.active;
    },
  },
  methods: {
    open() {
      if (this.visible) {
        this.Accordion.active = null;
      } else {
        this.Accordion.active = this.index;
      }
    },
    start(el) {
      el.style.height = el.scrollHeight + "px";
    },
    end(el) {
      el.style.height = "";
    },
  },
  created() {
    this.index = this.Accordion.count++;
  },
};
</script>

<style lang="scss" scoped>
.accordion__trigger {
  display: flex;
  justify-content: space-between;

  .icon-angle-false::before {
    margin-right: 0;
    font-size: 20px;
    position: relative;
    left: 3px;
  }

  .icon-angle-true::before {
    margin-right: 0;
    margin-left: 0;
    font-size: 16px;
    position: relative;
    right: 3px;
    top: -1px;
  }
}

.accordion-enter-active,
.accordion-leave-active {
  will-change: height, opacity;
  transition: height 0.3s ease, opacity 0.3s ease;
  overflow: hidden;
}

.accordion-enter,
.accordion-leave-to {
  height: 0 !important;
  opacity: 0;
}

.accordion__content {
  ul {
    display: flex;
    flex-direction: column;
  }
}
</style>
