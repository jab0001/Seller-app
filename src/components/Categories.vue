<template>
  <div class="categories">
    <div class="categories__slider slider">
      <agile :slidesToShow="5" :navButtons="true" :dots="false">
        <div
          class="slider-wrapper"
          v-for="sliders in MOCKsliderList"
          :key="sliders.id"
        >
          <router-link
            class="slider-item"
            @click.native="setPathMain(sliders.router)"
            :to="{ path: `category/${sliders.router}` }"
          >
            <div class="slider__container">
              <h3 class="slider__title">{{ sliders.text }}</h3>
              <img />
            </div>
          </router-link>
        </div>
      </agile>
    </div>
  </div>
</template>

<script>
import { Component, Vue } from "vue-property-decorator";
import { VueAgile } from "vue-agile";

@Component({
  components: {
    agile: VueAgile,
  },
})
export default class Categories extends Vue {
  MOCKsliderList = [
    { id: 1, background: "gray", text: "Недвижимость", router: "buildings" },
    { id: 2, background: "gray", text: "Работа", router: "work" },
    { id: 3, background: "gray", text: "Электроника", router: "technic" },
    { id: 4, background: "gray", text: "Транспорт", router: "transport" },
    { id: 5, background: "gray", text: "Для дома и дачи", router: "for-house" },
    { id: 6, background: "gray", text: "Услуги", router: "services" },
    {
      id: 7,
      background: "gray",
      text: "Автозапчасти и аксессуары",
      router: "auto-parts",
    },
    {
      id: 8,
      background: "gray",
      text: "Одежда, обувь и аксессуары",
      router: "clothes",
    },
    { id: 9, background: "gray", text: "Для бизнеса", router: "for-business" },
    {
      id: 10,
      background: "gray",
      text: "Красота и здоровье",
      router: "beauty-health",
    },
    {
      id: 11,
      background: "gray",
      text: "Товары для детей",
      router: "for-kids",
    },
    {
      id: 12,
      background: "gray",
      text: "Животные",
      router: "pets",
    },
    {
      id: 13,
      background: "gray",
      text: "Хобби и отдых",
      router: "hobbys",
    },
    {
      id: 14,
      background: "gray",
      text: "Ручная работа",
      router: "handmade",
    },
  ];

  async setPathMain(filter) {
    localStorage.setItem("filterCategory", filter);
    this.$store.commit("category/setPath", { main: filter });
  }
}
</script>

<style lang="scss">
.agile {
  &__actions {
    position: relative;
    bottom: 116px;
  }
}
</style>

<style lang="scss" scoped>
.categories {
  margin-top: 50px;
  padding-left: 74px;
  padding-right: 75px;
}
.slider {
  &__container {
    margin: 0 auto;
    width: 222px;
    height: 207px;
    background: #eaeaea;
    border-radius: 20px;
  }

  &__title {
    text-align: center;
  }
}
</style>
