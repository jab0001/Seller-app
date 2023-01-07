<template>
  <div class="card">
    <div class="card__img"></div>
    <div class="card__wrapper">
      <div class="card__wrapper-info">
        <h2 class="card__title">{{ card.title }}</h2>
        <p class="card__place">
          <svg
            width="19"
            height="23"
            viewBox="0 0 19 23"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M9.50001 21.5C9.50001 21.5 17.3261 14.5435 17.3261 9.32609C17.3261 5.00386 13.8222 1.5 9.50001 1.5C5.17778 1.5 1.67392 5.00386 1.67392 9.32609C1.67392 14.5435 9.50001 21.5 9.50001 21.5Z"
              stroke="black"
              stroke-opacity="0.3"
              stroke-width="2"
            />
            <path
              d="M12.0003 9.00016C12.0003 10.3809 10.881 11.5002 9.50033 11.5002C8.11962 11.5002 7.00033 10.3809 7.00033 9.00016C7.00033 7.61945 8.11962 6.50016 9.50033 6.50016C10.881 6.50016 12.0003 7.61945 12.0003 9.00016Z"
              stroke="black"
              stroke-opacity="0.3"
              stroke-width="2"
            />
          </svg>
          {{ card.place }}
        </p>
        <p class="card__price">{{ card.price }}&#8201;{{ card.priceName }}</p>
      </div>
      <ul class="card__list">
        <li
          class="card__item"
          v-for="(language, index) in card.languages"
          :key="index"
        >
          {{ languages[language].translate }}
          <span :style="`background: ${languages[language].dot}`"></span>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { Component, Prop, Vue } from "vue-property-decorator";

@Component({})
export default class Card extends Vue {
  @Prop({ type: Object, default: () => [] }) card;

  get languages() {
    return {
      rus: {
        translate: "русский",
        dot: "#9BCFFF",
      },
      eng: {
        translate: "english",
        dot: "#FF5757",
      },
    };
  }
}
</script>

<style lang="scss"></style>

<style lang="scss" scoped>
.card {
  width: 287px;
  height: 367px;
  box-shadow: 5px 5px 10px 8px rgba(0, 0, 0, 0.06);
  border-radius: 15px;
  padding: 14px 13px;
  box-sizing: border-box;

  &__list {
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    padding-bottom: 9px;
  }

  &__item {
    display: flex;
    justify-content: flex-end;
    margin-right: 3px;
    margin-top: 6px;

    font-family: "interRegular", sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 17px;
    letter-spacing: 0.4px;

    color: rgba(0, 0, 0, 0.4);
    span {
      display: block;
      width: 13.5px;
      height: 15px;
      border-radius: 50%;
      margin-left: 7px;
    }
  }

  &__img {
    width: 262px;
    height: 254px;
    background: #d9d9d9;
    border-radius: 10px;
  }

  &__title {
    font-family: "interMedium", sans-serif;
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 17px;
    letter-spacing: 0.4px;
    margin-top: 10px;
    margin-left: 10px;
  }

  &__place {
    display: flex;
    align-items: center;
    font-family: "interRegular", sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 17px;
    letter-spacing: 0.4px;
    padding-left: 13px;
    margin-top: 7px;

    color: rgba(0, 0, 0, 0.4);

    svg {
      margin-right: 6px;
    }
  }

  &__wrapper {
    display: flex;
    justify-content: space-between;
  }

  &__price {
    font-family: "interExtraBold", sans-serif;
    font-style: normal;
    font-weight: 800;
    font-size: 20px;
    line-height: 24px;
    letter-spacing: 2.4px;
    margin-left: 11px;
    margin-top: 4px;

    color: #000000;
  }
}
</style>
