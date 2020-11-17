<template>
  <div class="wrapper">
    <header class="container">
      <div class="title">itproject-managment</div>
    </header>
  </div>
  <router-view />
</template>

<style>
@import url("https://fonts.googleapis.com/css2?family=Montserrat&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Montserrat+Alternates&display=swap");

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html {
  font-family: Montserrat, Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

body {
  background-color: #f8f7f8;
}

.wrapper {
  width: 100%;
  background-color: white;
  box-shadow: 0 8px 8px -4px rgba(20, 16, 41, 0.12),
    0 2px 4px -1px rgba(20, 16, 41, 0.12), 0 0 1px 0 rgba(20, 16, 41, 0.24);
}

.container {
  max-width: 1170px;
  height: 60px;
  margin: 0 auto;
}

.title {
  font-family: "Montserrat Alternates", sans-serif;
  font-weight: 400;
  font-size: 24px;
  text-align: center;
  line-height: 60px;
}
</style>
