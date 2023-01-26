<template>
  <div class="announcement">{{ card }}</div>
</template>

<script>
import { Component, Vue } from "vue-property-decorator";
import MOCKcards from "@/store/modules/category/MOCKcards";

@Component({})
export default class announcement extends Vue {
  get cardId() {
    return this.$route.params.id;
  }

  get category() {
    return this.$route.params.category;
  }

  //MOCK
  get MOCKcards() {
    return MOCKcards;
  }

  get card() {
    let result = MOCKcards.find((item) => {
      return item.id == this.cardId;
    });
    return result;
  }
}
</script>

<style lang="scss"></style>

<style lang="scss" scoped></style>
