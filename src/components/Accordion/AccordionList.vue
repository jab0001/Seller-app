<template>
  <ul class="accordion">
    <AccordionItem>
      <h3 slot="header">{{ name }}</h3>
      <li class="accordion__item" v-for="item in items" :key="item.id">
        <AccordionItem v-if="isMainLocation">
          <h3 slot="header">{{ item.title }}</h3>
          {{ item.id }}
        </AccordionItem>
        <div v-else>
          <a slot="header" @click="test(item.id)">{{ item.title }}</a>
        </div>
      </li>
    </AccordionItem>
  </ul>
</template>

<script>
import { Component, Prop, Vue } from "vue-property-decorator";
import AccordionItem from "@/components/Accordion/AccordionItem.vue";

@Component({
  components: {
    AccordionItem,
  },
})
export default class AccordionList extends Vue {
  @Prop({ type: Array, default: () => [] }) items;
  @Prop({ type: String, default: "name" }) name;

  get isMainLocation() {
    const result = localStorage.getItem("filterCategory");
    return result === this.path;
  }

  test(test) {
    localStorage.setItem("filterCategorySecond", test);
    this.$store.commit("category/setPath", { id: test });
  }
}
</script>

<style lang="scss" scoped></style>
