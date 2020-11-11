<template>
  <div class="white">
    <header class="container">
      <div class="title">itproject-managment</div>
    </header>
  </div>
  <Contacts :data="data" />

  <router-view></router-view>
</template>

<script>
import Contacts from "@/components/Contacts.vue";

/** Начальное состояние */
const initialState = {
  contacts: [
    {
      id: 1,
      name: "Adam",
      mobile: "+79998887744",
      email: "adam@mail.com",
    },
    {
      id: 2,
      name: "Igor",
      mobile: "+79998887743",
      email: "igor@mail.com",
    },
    {
      id: 3,
      name: "Stepa",
      mobile: "+79998887742",
      email: "stepa@mail.com",
    },
  ],
};

export default {
  name: "App",
  components: {
    Contacts,
  },
  data() {
    return {
      data: initialState,
    };
  },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Montserrat&display=swap");

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

@import url("https://fonts.googleapis.com/css2?family=Montserrat+Alternates&display=swap");

.white {
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
