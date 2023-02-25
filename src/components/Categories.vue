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
        <!-- eslint-disable-next-line vue/no-useless-template-attributes -->
        <template slot="prevButton" class="prevButton">
          <i class="icon-angle-left icon-left"></i>
        </template>
        <!-- eslint-disable-next-line vue/no-useless-template-attributes -->
        <template slot="nextButton" class="nextButton">
          <i class="icon-angle-right icon-right"></i>
        </template>
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
    { id: 5, background: "gray", text: "Для дома и дачи", router: "forHouse" },
    { id: 6, background: "gray", text: "Услуги", router: "services" },
    {
      id: 7,
      background: "gray",
      text: "Одежда, обувь и аксессуары",
      router: "clothes",
    },
    { id: 8, background: "gray", text: "Для бизнеса", router: "forBusiness" },
    {
      id: 9,
      background: "gray",
      text: "Красота и здоровье",
      router: "beautyHealth",
    },
    {
      id: 10,
      background: "gray",
      text: "Товары для детей",
      router: "forKids",
    },
    {
      id: 11,
      background: "gray",
      text: "Животные",
      router: "pets",
    },
    {
      id: 12,
      background: "gray",
      text: "Хобби и отдых",
      router: "habbits",
    },
    {
      id: 13,
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
    width: 100%;

    .agile__nav-button {
      border: none;
      width: 45px;
      height: 45px;
      background: #ffffff;
      box-shadow: 1px 1px 10px 3px rgba(0, 0, 0, 0.06);
      border-radius: 15px;
      cursor: pointer;
      position: absolute;
      top: 37%;

      &--next {
        right: 0;
      }

      &--prev {
        left: 0;
      }

      &:hover {
        background: grey;

        i {
          color: #fff;
        }
      }
    }
  }
}
</style>

<style lang="scss" scoped>
.icon {
  &-right,
  &-left {
    font-size: 20px;
  }
}
.categories {
  margin-top: 50px;
  padding-left: 68px;
  padding-right: 69px;
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
    padding-top: 17px;
    font-family: "interSemiBold", sans-serif;
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 19px;
    text-align: center;

    color: #000000;
  }
}
</style>
