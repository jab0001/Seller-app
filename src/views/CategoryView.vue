<template>
  <div class="category">
    <SearchArea />

    <ul class="category__list">
      <li class="category__item" v-for="card in MOCKcards" :key="card.id">
        <Card :card="card" />
      </li>
    </ul>
  </div>
</template>

<script>
import { Component, Vue } from "vue-property-decorator";
import SearchArea from "@/components/SearchArea.vue";
import Card from "@/components/Card.vue";

@Component({
  components: {
    SearchArea,
    Card,
  },
})
export default class Category extends Vue {
  get MOCKcards() {
    return this.$store.getters["category/getCards"];
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
