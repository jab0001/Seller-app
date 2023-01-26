<template>
  <div class="stepTwo">
    <AccordionList :active="0">
      <AccordionItem :isStepOne="true" :isStepTwo="false">
        <template slot="accordion-trigger">
          <h3 class="stepTwo__title">{{ translatedName }}</h3>
        </template>
        <template slot="accordion-content">
          <AccordionList :active="menuOpened">
            <AccordionItem
              :isStepOne="false"
              :isStepTwo="true"
              v-for="item in menuList"
              :key="item.id"
            >
              <template slot="accordion-trigger">
                <h3 class="stepTwo__title-second" @click="setMenuOpen(item.id)">
                  {{ item.title }}
                </h3>
              </template>
              <template slot="accordion-content">
                <div v-for="(filter, index) in item.filters" :key="index">
                  <input
                    :id="filter.type"
                    v-model="params[filter.type]"
                    type="checkbox"
                    @change="saveFilter(currentPage)"
                  />
                  <label :for="filter.type">{{ filter.title }}</label>
                </div></template
              ></AccordionItem
            >
          </AccordionList>
        </template>
      </AccordionItem>
    </AccordionList>
  </div>
</template>

<script>
import { Component, Vue, Prop } from "vue-property-decorator";
import AccordionList from "@/components/Accordion/AccordionList.vue";
import AccordionItem from "@/components/Accordion/AccordionItem.vue";
import { translateName } from "@/helpers/translateName.js";

@Component({
  components: {
    AccordionList,
    AccordionItem,
  },
})
export default class StepTwo extends Vue {
  @Prop({ type: Object, default: () => {} }) params;
  /* params = {}; */

  get menuList() {
    return this.menuSecond[this.currentPage];
  }

  get menuOpened() {
    let open = null;
    if (localStorage.getItem("openedFirstMenu")) {
      const id = localStorage.getItem("openedFirstMenu");
      open = parseInt(id);
    }
    return open;
  }

  get menuSecond() {
    return this.$store.getters["category/getMenuSecond"];
  }

  setMenuOpen(id) {
    localStorage.setItem("openedFirstMenu", id - 1);
  }

  saveFilter(searchCategory) {
    this.$store.commit("category/setSearchParams", {
      [searchCategory]: { ...this.params },
    });

    this.$emit("transferSearch", { ...this.params });
    this.$emit("getCards", { stepTwo: searchCategory });
  }

  get currentPage() {
    return this.$route.params.stepTwo;
  }

  get translatedName() {
    return translateName[this.currentPage];
  }

  mounted() {
    this.$emit("getCards", { stepTwo: this.currentPage });
  }
}
</script>

<style lang="scss"></style>

<style lang="scss" scoped>
.stepTwo {
  cursor: pointer;
  padding: 12px 0 10px 0;
  position: relative;

  &__title {
    margin-bottom: 20px;
    font-family: "interRegular", sans-serif;
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 19px;

    color: #000000;

    &-second {
      margin-bottom: 7px;
      font-family: "InterThin", sans-serif;
      font-style: normal;
      font-weight: 300;
      font-size: 14px;
      line-height: 17px;

      color: #000000;
    }
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
