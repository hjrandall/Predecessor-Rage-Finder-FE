<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import HelloWorld from './components/GamerRageChecker.vue'
import { type DefineComponent } from 'vue';
</script>

<template>
  <v-app id="app">
    <div id="main">
      <div id="header">
        <img class="logo" src="@/assets/Rager.svg" width="350" height="350" />

        <div class="wrapper">
          <HelloWorld msg="Gamer Rage Checker" />

          <nav>
            <RouterLink to="/">Home</RouterLink>
            <RouterLink to="/lookUp">LookUp a Player</RouterLink>
            <RouterLink to="/submit">Report a Rager</RouterLink>
            <RouterLink to="/appeal">Appeal Player Name</RouterLink>
          </nav>
        </div>
      </div>

      <RouterView id="router-view" />
    </div>
  </v-app>
</template>

<style>
body::-webkit-scrollbar {
    background-color: rgb(22, 21, 21);
  }
 ::-webkit-scrollbar {
    width: .65em;
  }
  ::-webkit-scrollbar-track {
    border-radius: 30px;
  }
  ::-webkit-scrollbar-thumb {
    background-color: rgb(0, 189, 126);
    border-radius: 30px;
    margin-block: 2em;
  }
#app {
  margin: 0 auto;
  width: 100vw;
  height: 100vh;
  font-weight: normal;
}

#main {
  display: flex;
  justify-content: space-around;
  align-items: center;
}

#header {
  line-height: 1.5;
  max-height: 100vh;
  width: 40vw;
  margin-left: 15%;
}

#router-view {
  margin-left: 32px;
  width: 60vw;
}

.logo {
  display: block;
  margin-left: 50px;

}

nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
  padding-left: .2rem;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid white;
}

nav a:first-of-type {
  border: 0;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin-left: 4vw;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }

  nav {
    text-align: left;
    margin-left: -1rem;
    font-size: 1rem;

    padding: 1rem 0;
    margin-top: 1rem;
    margin-left: .2rem
  }
  
  .green {
    margin-left: 4vw;
  }
}
</style>