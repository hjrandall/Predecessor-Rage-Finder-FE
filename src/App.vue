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
            <RouterLink to="/lookUp">Lookup a Rager</RouterLink>
            <RouterLink to="/submit">Report a Rager</RouterLink>
            <RouterLink to="/appeal">Appeal Rager Status</RouterLink>
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
  width: 100%;
  height: 100%;
  font-weight: normal;
}

#main {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
/*   background-image: url("./assets/pull_from_the_heavens.PNG");
  background-size: auto;
  background-color:rgba(0, 0, 0, 0.5) */
}

#header {
  line-height: 1.5;
  width: 600px;
  margin-right: 30px;
}

#router-view {
  width: 600px;
  margin-right: 20px;
  height: 500px;
}

.logo {
  display: block;
  margin-left: 135px;

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

header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
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

@media (max-width: 1220px) {
  #main {
    display: flex;
    flex-flow: column nowrap;
  }
  #header {
    margin: 0;
    margin-left: 20px;
  }
  #router-view {
    margin: 0;
    margin-top: 30px;
    margin-bottom: 30px;
  }
}
</style>