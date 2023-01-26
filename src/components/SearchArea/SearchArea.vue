<template>
  <div class="search-area">
    <Breadcrumbs />

    <h2 class="search-area__title">{{ translatedName }}</h2>

    <div class="search-area__wrapper">
      <div class="search-area__wrapper-line">
        <router-link to="/" class="search-area__nav-link">
          <i class="icon-angle-left"></i>
          Все категории
        </router-link>
      </div>

      <router-view
        :params="searchParams"
        @transferSearch="searchUpdate"
        @getCards="getCards"
      />
    </div>

    <button v-if="clearBtn" @click="clearSearch">btn</button>
  </div>
</template>

<script>
import { Component, Vue } from "vue-property-decorator";
import Breadcrumbs from "@/components/Breadcrumbs.vue";
import AccordionList from "@/components/Accordion/AccordionList.vue";
import { translateName } from "@/helpers/translateName.js";

@Component({
  components: {
    Breadcrumbs,
    AccordionList,
  },
})
export default class SearchArea extends Vue {
  searchParams = {};

  get menuId() {
    return this.$store.getters["category/getPath"];
  }

  searchUpdate(params) {
    this.searchParams = params;
    this.$emit("getCards", params);
  }

  get currentStep() {
    return this.$route.params.children;
  }

  get translatedName() {
    const pageName = this.currentStep;

    return translateName[pageName];
  }

  getCards(params) {
    this.$emit("getCards", {
      ...params,
      optionalParams: this.searchParams,
    });
  }

  get clearBtn() {
    let notEmpty = false;
    if (Object.keys(this.searchParams).length !== 0) {
      let values = Object.values(this.searchParams);
      notEmpty = values.some((item) => {
        return item === true;
      });
    }

    return notEmpty;
  }

  clearSearch() {
    this.searchParams = {};
    if (localStorage.getItem("searchParams")) {
      localStorage.removeItem("searchParams");
    }
    this.$emit("getCards", { clear: "clear" });
  }

  mounted() {
    const page = this.$route.params.stepTwo;
    this.searchParams =
      this.$store.getters["category/getSearchParams"][page] || {};
  }
}
</script>

<style lang="scss"></style>

<style lang="scss" scoped>
.search-area {
  &__wrapper {
    background: #ffffff;
    box-shadow: 5px 5px 10px 8px rgba(0, 0, 0, 0.06);
    border-radius: 15px;
    width: 288px;
    height: 616px;
    padding: 14px 17px 42px;
    box-sizing: border-box;
    margin-top: 12px;

    &-line {
      position: relative;
      width: 100%;
      padding-bottom: 12px;
      border-bottom: 1px solid rgba(0, 0, 0, 0.3);
    }
  }

  &__title {
    font-family: "interSemiBold", sans-serif;
    font-style: normal;
    font-weight: 500;
    font-size: 20px;
    line-height: 24px;
    margin-top: 5px;

    color: #000000;
    &-search {
      margin-bottom: 21px;
      font-family: "interSemiBold", sans-serif;
      font-style: normal;
      font-weight: 500;
      font-size: 16px;
      line-height: 19px;

      color: #000000;
    }
  }

  &__list {
    padding-top: 12px;
    padding-bottom: 25px;
    border-bottom: 1px solid rgba(0, 0, 0, 0.3);
  }

  &__nav-link {
    padding-left: 15px;
    font-family: "interSemiBold", sans-serif;
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 17px;

    color: #3d8a68;

    i {
      position: absolute;
      left: -7px;
    }
  }
}
</style>
