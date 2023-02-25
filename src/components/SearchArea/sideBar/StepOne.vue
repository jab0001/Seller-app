<template>
  <div class="stepOne">
    <AccordionList :active="0">
      <AccordionItem :isStepOne="true" :isStepTwo="false">
        <template slot="accordion-trigger">
          <h3 class="stepOne__title">{{ translatedName }}</h3>
        </template>
        <template slot="accordion-content">
          <router-link
            class="stepOne__item"
            tag="li"
            v-for="item in menuList"
            :key="item.id"
            :to="`/category/${currentStep}/${item.type}`"
            >{{ item.title }}</router-link
          >
        </template>
      </AccordionItem>
    </AccordionList>
  </div>
</template>

<script>
import { Component, Vue } from "vue-property-decorator";
import AccordionList from "@/components/Accordion/AccordionList.vue";
import AccordionItem from "@/components/Accordion/AccordionItem.vue";
import { translateName } from "@/helpers/translateName.js";
import menu from "@/helpers/menuStepOne.js";

@Component({
  components: {
    AccordionList,
    AccordionItem,
  },
})
export default class StepOne extends Vue {
  get menuList() {
    return menu[this.currentStep];
  }

  get currentStep() {
    return this.$route.params.children;
  }

  get translatedName() {
    const pageName = this.currentStep;

    return translateName[pageName];
  }

  mounted() {
    this.$emit("getCards", { stepOne: this.currentStep });
    if (localStorage.getItem("openedFirstMenu"))
      localStorage.removeItem("openedFirstMenu");
    if (localStorage.getItem("searchParams"))
      localStorage.removeItem("searchParams");
  }
}
</script>

<style lang="scss"></style>

<style lang="scss" scoped>
.stepOne {
  cursor: pointer;
  padding: 12px 0 25px 0;
  position: relative;
  border-bottom: 1px solid rgba(0, 0, 0, 0.3);

  &__title {
    margin-bottom: 21px;
    font-family: "interRegular", sans-serif;
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 19px;

    color: #000000;
  }

  &__item {
    padding: 0;
    margin-bottom: 8px;

    font-family: "InterThin", sans-serif;
    font-style: normal;
    font-weight: 300;
    font-size: 14px;
    line-height: 17px;

    color: #000000;

    &:hover {
      color: #3d8a68;
    }
  }
}
</style>
