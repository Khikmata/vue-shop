<script setup lang="ts"></script>

<template>
  <div class="navbar">
    <div class="navbar-container">
      <img class="navbar-container__logo" height="32" src="@/assets/images/logo.svg" />
      <div class="navbar-search">
        <input placeholder="Поиск" />
      </div>
      <nav class="navbar-nav">
        <button class="navbar-nav__link">
          <img src="@/assets/icons/favorite.svg" alt="favorite" />
          <p>Избранное</p>
        </button>
        <button class="navbar-nav__link">
          <img src="@/assets/icons/signin.svg" alt="sign in" />
          <p>Войти</p>
        </button>
        <button class="navbar-nav__link">
          <img src="@/assets/icons/cart.svg" alt="cart" />
          <p>Корзина</p>
        </button>
      </nav>
    </div>
  </div>
</template>

<style scoped lang="scss">
.navbar {
  width: 100%;
  height: 80px;
  position: fixed;
  top: 0;
  left: 0;

  display: flex;
  justify-content: center;
  align-items: center;
}
.navbar-container {
  width: 100%;
  height: 100%;
  max-width: 1200px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  &__logo {
    margin-right: 39px;
  }
}

.navbar-search {
  width: clamp(100px, 100%, 625px);

  input {
    width: 100%;
    height: 48px;
    border: 2px solid #9298a6;
    border-radius: 10px;
    padding: 16px;
  }

  margin-right: 29px;
}

.navbar-nav {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  &__link {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-right: 29px;
    img {
      margin-right: 8px;
    }
  }
}
</style>
