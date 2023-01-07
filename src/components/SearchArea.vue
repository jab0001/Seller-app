<template>
  <div class="search-area">
    <Breadcrumbs :name="translatedName" />

    <h2 class="search-area__title">{{ translatedName }}</h2>

    <div class="search-area__wrapper">
      <div class="search-area__wrapper-line">
        <a @click="cleanLocalSecond" class="search-area__nav-link">
          Все категории
        </a>
      </div>

      <AccordionList :items="menuList" :name="translatedName" />
    </div>
  </div>
</template>

<script>
import { Component, Vue } from "vue-property-decorator";
import Breadcrumbs from "@/components/Breadcrumbs.vue";
import AccordionList from "@/components/Accordion/AccordionList.vue";

@Component({
  components: {
    Breadcrumbs,
    AccordionList,
  },
})
export default class SearchArea extends Vue {
  get menuList() {
    if (this.menuId || localStorage.getItem("filterCategorySecond")) {
      const id = this.menuId || localStorage.getItem("filterCategorySecond");
      return this.menuSecond[id];
    } else {
      return this.menu;
    }
  }

  get menu() {
    return this.$store.getters["category/getMenu"];
  }

  get menuSecond() {
    return this.$store.getters["category/getMenuSecond"];
  }

  get menuId() {
    return this.$store.getters["category/getPath"].id;
  }

  cleanLocalSecond() {
    if (this.menuId || localStorage.getItem("filterCategorySecond")) {
      localStorage.removeItem("filterCategorySecond");
      this.$store.commit("category/setPath", { id: "" });
    }
  }

  get currentLocation() {
    const result = localStorage.getItem("filterCategory");
    const path = this.$store.getters["category/getPath"].main;
    return path || result;
  }

  get translatedName() {
    if (this.menuId || localStorage.getItem("filterCategorySecond")) {
      const id = this.menuId || localStorage.getItem("filterCategorySecond");
      const result = this.menu.find((item) => item.id == id).title;
      return result;
    } else {
      const translateList = {
        buildings: "Недвижимость",
        work: "Работа",
        technic: "Электроника",
        transport: "Транспорт",
        "for-house": "Для дома и дачи",
        services: "Услуги",
        "auto-parts": "Автозапчасти и аксессуары",
        clothes: "Одежда, обувь и аксессуары",
        "for-business": "Для бизнеса",
        "beauty-health": "Красота и здоровье",
        "for-kids": "Товары для детей",
        pets: "Животные",
        hobbys: "Хобби и отдых",
        handmade: "Ручная работа",
      };

      const pageName = this.currentLocation;

      return translateList[pageName];
    }
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
    width: 287px;
    height: 616px;
    padding: 14px 20px 42px;

    &-line {
      width: 100%;
      padding-bottom: 14px;
      border-bottom: 1px solid rgba(0, 0, 0, 0.3);
    }
  }

  &__title {
    font-family: "interMedium", sans-serif;
    font-style: normal;
    font-weight: 500;
    font-size: 20px;
    line-height: 24px;
    letter-spacing: 0.4;

    color: #000000;
    &-search {
      margin-bottom: 21px;
      font-family: "interMedium", sans-serif;
      font-style: normal;
      font-weight: 500;
      font-size: 16px;
      line-height: 19px;
      letter-spacing: 0.4;

      color: #000000;
    }
  }

  &__list {
    padding-top: 12px;
    padding-bottom: 25px;
    border-bottom: 1px solid rgba(0, 0, 0, 0.3);
  }

  &__nav-link {
    color: #3d8a68;
    text-decoration: none;
  }
}
</style>
