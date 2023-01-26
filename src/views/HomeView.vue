<template>
  <div class="home">
    <Categories />

    <h2 class="home__title">Рекомендации для вас</h2>

    <uL class="home__list">
      <li class="home__item" v-for="card in MOCKcards" :key="card.id">
        <Card :card="card" />
      </li>
    </uL>
  </div>
</template>

<script>
import { Component, Vue } from "vue-property-decorator";
import Categories from "@/components/Categories.vue";
import Card from "@/components/Card.vue";
import MOCKcards from "@/store/modules/category/MOCKcards";

@Component({
  components: {
    Categories,
    Card,
  },
})
export default class Home extends Vue {
  //MOCK
  get MOCKcards() {
    return MOCKcards;
  }

  mounted() {
    if (localStorage.getItem("openedFirstMenu"))
      localStorage.removeItem("openedFirstMenu");
    if (localStorage.getItem("searchParams"))
      localStorage.removeItem("searchParams");
  }
}
</script>

<style scoped lang="scss">
.home {
  &__title {
    padding-left: 102px;
    font-family: "interSemiBold", sans-serif;
    font-style: normal;
    font-weight: 500;
    font-size: 20px;
    line-height: 24px;
    margin-top: 28px;
  }

  &__list {
    display: flex;
    padding: 28px 90px;
    flex-wrap: wrap;
    gap: 25px 35px;
  }
}
</style>
