<template id="lists-template">
  <ul class="breadcrumb">
    <li
      :class="{ active: index + 1 == breadcrumbs.length }"
      v-for="(item, index) in breadcrumbs"
      :key="index"
    >
      <a v-if="index + 1 < breadcrumbs.length" :href="item.url">{{
        item.name
      }}</a>
      <span v-else>{{ item.name }}</span>
      <span v-if="index + 1 < breadcrumbs.length" class="m-x-10">/</span>
    </li>
  </ul>
</template>

<script>
import { Component, Prop, Vue } from "vue-property-decorator";

@Component({})
export default class Breadcrumbs extends Vue {
  @Prop({ Type: String, default: "" }) name;
  get breadcrumbs() {
    return [
      { name: "Главная", url: "/" },
      {
        name: this.name,
        url: this.currentLocation,
      },
    ];
  }

  get currentLocation() {
    const name = localStorage.getItem("filterCategory");
    return name;
  }
}
</script>

<style scoped lanf="scss">
.m-x-10 {
  margin-right: 10px;
  margin-left: 10px;
}

.breadcrumb li {
  display: inline-block;
  white-space: nowrap;
}
.breadcrumb > .active {
  color: #37474f;
  font-weight: bold;
}
.breadcrumb > li a {
  color: #515356;
}
</style>
