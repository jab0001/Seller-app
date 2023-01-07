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

@Component({
  components: {
    Categories,
    Card,
  },
})
export default class Home extends Vue {
  get MOCKcards() {
    return this.$store.getters["category/getCards"];
  }
}
</script>

<style scoped lang="scss">
.home {
  &__title {
    padding-left: 103px;
    font-family: "interMedium", sans-serif;
    font-style: normal;
    font-weight: 500;
    font-size: 20px;
    line-height: 24px;
    letter-spacing: 0.4px;
    margin-top: 6px;
  }

  &__list {
    display: flex;
    padding: 28px 90px;
    /* justify-content: space-between; */
    flex-wrap: wrap;
    gap: 25px 36px;
  }
}
</style>
