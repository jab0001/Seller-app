<template>
  <div class="app">
    <header class="header">
      <router-link to="/">
        <img
          class="header__logo"
          src="/static/img/seller.svg"
          width="140"
          height="45"
          alt="logo logo-seller"
        />
      </router-link>
      <div class="header__wrapper">
        <ul class="header__list">
          <li class="header__item" v-for="btn in navBtns" :key="btn.id">
            <i
              v-if="btn.id === 4"
              :class="`icon-${btn.icon} ${
                btn.new
                  ? 'header__item-message--new'
                  : 'header__item-message--old'
              }`"
            >
            </i>
            <i v-else :class="`icon-${btn.icon}`"> </i>

            {{ btn.text }}
          </li>
        </ul>
        <button class="header__btn">+&ensp;&ensp;Разместить объявление</button>
      </div>
    </header>
    <div class="app__wrapper">
      <div class="search__navigation">
        <a class="search__btn">
          <svg
            width="22"
            height="17"
            viewBox="0 0 22 17"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M20.2 15.4H1M20.2 8.2H1M20.2 1H1"
              stroke="white"
              stroke-width="2"
              stroke-linecap="round"
            />
          </svg>
        </a>
        <FormulateForm
          class="search__form"
          @submit="onSubmit"
          autocomplete="off"
        >
          <FormulateInput
            v-model="value"
            :options="{
              first: 'First',
              second: 'Second',
              third: 'Third',
              fourth: 'Fourth',
            }"
            type="select"
            placeholder="Select an option"
          />
          <FormulateInput
            type="search"
            name="sample"
            placeholder="Поиск по объявлениям"
          />
          <FormulateInput
            v-model="value"
            :options="{
              first: 'First',
              second: 'Second',
              third: 'Third',
              fourth: 'Fourth',
            }"
            type="select"
            placeholder="Select an option"
          />
        </FormulateForm>
        <a class="search__btn">
          <svg
            width="19"
            height="19"
            viewBox="0 0 19 19"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M14.3269 14.44L17.8 17.8M8.8 4.6C10.7882 4.6 12.4 6.21177 12.4 8.2M16.68 8.84C16.68 13.1699 13.1699 16.68 8.84 16.68C4.51009 16.68 1 13.1699 1 8.84C1 4.51009 4.51009 1 8.84 1C13.1699 1 16.68 4.51009 16.68 8.84Z"
              stroke="white"
              stroke-width="2"
              stroke-linecap="round"
            />
          </svg>
        </a>
      </div>

      <router-view />
    </div>
  </div>
</template>

<script>
import { Component, Vue } from "vue-property-decorator";

@Component({})
export default class App extends Vue {
  get navBtns() {
    return this.$store.getters["header/getNavBtns"];
  }
}
</script>

<style lang="scss" scoped>
.app {
  display: block;
  margin: 0 auto;
  height: 100vh;

  &__wrapper {
    height: 100vh;
    padding-top: 69px;
    background: linear-gradient(
      180deg,
      #53bd8f 0%,
      rgba(61, 138, 104, 0) 250px
    );
  }
}
.header {
  background: white;
  display: flex;
  padding: 23px 91px 19px 83px;
  justify-content: space-between;

  &__list {
    display: flex;
    align-items: center;
    margin-right: 15px;
  }

  &__wrapper {
    display: flex;
  }

  &__item {
    margin-right: 30px;
    cursor: pointer;
    height: fit-content;
    font-family: "interRegular", sans-serif;
    font-weight: 400;
    font-size: 14px;
    line-height: 17px;
    display: flex;
    align-items: center;

    &:first-child {
      margin-right: 14px;
    }

    i {
      position: relative;
      color: rgba(28, 39, 76, 0.3);
      opacity: 0.7;
      font-size: 26px;
    }

    &-message {
      &--new:after {
        content: "";
        position: absolute;
        width: 7.5px;
        height: 7.5px;
        border-radius: 50%;
        background: red;
        right: 5px;
        top: 2px;
      }
      &--old:after {
        content: "";
        position: absolute;
        width: 7.5px;
        height: 7.5px;
        border-radius: 50%;
        background: rgba(28, 39, 76);
        right: 5px;
        top: 2px;
      }
    }

    &:hover {
      opacity: 0.5;
    }
  }

  &__btn {
    font-family: "interRegular", sans-serif;
    font-weight: 400;
    font-size: 14px;
    line-height: 17px;
    border: none;
    background-color: rgba(27, 61, 46, 0.8);
    border-radius: 15px;
    color: #fff;
    padding: 15px 19px 15px 21px;
    cursor: pointer;

    &:hover {
      opacity: 0.5;
    }
  }
}

.search {
  width: 100%;
  padding-top: 69px;

  &__form {
    display: flex;
    flex-grow: 1;
    justify-content: space-between;
    padding-left: 10px;
    padding-right: 7px;
  }

  &__navigation {
    display: flex;
    justify-content: space-between;
    max-width: 1048px;
    height: 72px;
    margin: 0 auto;
    min-height: 72px;
    background: rgba(255, 255, 255, 0.5);
    border-radius: 20px;
    padding: 10px 9px 9px 11px;
    box-sizing: border-box;
  }

  &__btn {
    display: flex;
    width: 53px;
    min-height: 100%;
    background: rgba(27, 61, 46, 0.8);
    border-radius: 15px;
    border: none;
    color: #fff;
    justify-content: center;
    align-items: center;

    cursor: pointer;

    &:hover {
      opacity: 0.5;
    }
  }
}
</style>
