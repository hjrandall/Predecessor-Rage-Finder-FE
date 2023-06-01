<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import HelloWorld from './components/GamerRageChecker.vue'
import { type DefineComponent } from 'vue';
</script>

<template>
  <v-app id="app">
    <div class="hamburger">
    <v-app-bar-nav-icon v-model="drawer" style="heigth:70px; width=70px" @click="changemenu"></v-app-bar-nav-icon>
    </div>
    <v-navigation-drawer disable-resize-watcher app v-model="drawer">
      <RouterLink to="/">Home</RouterLink>
      <RouterLink to="/lookUp">Lookup a Rager</RouterLink>
      <RouterLink to="/submit">Report a Rager</RouterLink>
      <RouterLink to="/appeal">Appeal Rager Status</RouterLink>
    </v-navigation-drawer>
    
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
.activenav{
  display: false;
}
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

a.router-link-exact-active {
  color: var(--color-text);
}

a.router-link-exact-active:hover {
  background-color: transparent;
}

a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid white;
}

a:first-of-type {
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
  .v-btn {
    display: none !important;
  }
 
  v-navigation-drawer RouterLink {
    width: 100%;
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
@media (max-width:635px){
  #header {
    margin-right: 7vw;
  }
  body{
    overflow-x: hidden;
}
  .v-btn {
    display: inline-block !important;
    position: fixed !important;
    top:0
  }
  v-navigation-drawer {
    display: flex;
    flex-flow: column nowrap;
    align-items: left;
  }
  .activenav {
    display: true;
  }
  a:first-of-type {
    border-left: 1px solid rgb(0, 189, 126)
}
  nav {
    display:none;
  }
  a{
    border-left: 1px solid rgb(0, 189, 126);
    width: 100%;
    font-size: 20px;
    margin-top: 15px;
  }

  h1{
    width: 100%;
    font-size: 25px !important;
  }
  #router-view{
    width: 95vw;
  }
}
</style>
<script lang="ts">
export default { 
  data: () => ({
    drawer:false}),
  methods:{
    changemenu(){
      if (this.drawer == false){
        this.drawer = true;
      }
      else{
        this.drawer = false;
      }
    }
    }
  }
</script>
  