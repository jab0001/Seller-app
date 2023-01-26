<template>
  <div class="category">
    <router-view @getCards="getCards" />

    <ul class="category__list">
      <li class="category__item" v-for="card in MOCKcards" :key="card.id">
        <Card :card="card" />
      </li>
    </ul>
  </div>
</template>

<script>
import { Component, Vue } from "vue-property-decorator";
import SearchArea from "@/components/SearchArea/SearchArea.vue";
import Card from "@/components/Card.vue";
import MOCKcards from "@/store/modules/category/MOCKcards";

@Component({
  components: {
    SearchArea,
    Card,
  },
})
export default class Category extends Vue {
  //MOCK
  get MOCKcards() {
    return MOCKcards;
  }

  get filterForCards() {
    if (this.$route.params.stepTwo) {
      return this.$router.params.stepTwo;
    } else {
      return this.$route.params.children;
    }
  }

  getCards(params) {
    console.log(params);
  }
}
</script>

<style lang="scss"></style>

<style lang="scss" scoped>
.category {
  display: flex;
  padding: 10px 90px;

  &__list {
    display: flex;
    flex-wrap: wrap;
  }
}
</style>
