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
import { Component, Vue } from "vue-property-decorator";
import { translateName } from "@/helpers/translateName.js";

@Component({})
export default class Breadcrumbs extends Vue {
  get breadcrumbs() {
    let resultUrls = [
      { name: "Главная", url: "/" },
      {
        name: translateName[this.$route.params.children],
        url: `/category/${this.$route.params.children}`,
      },
    ];
    if (this.$route.params.stepTwo) {
      resultUrls.push({
        name: translateName[this.$route.params.stepTwo],
        url: `/category/${this.$route.params.children}/${this.$route.params.stepTwo}`,
      });
    }

    return resultUrls;
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
