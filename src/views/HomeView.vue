<template>
  <div class="lookUp">
    <div id="homediv">
      <div>
        <h1 class="home-text home_title">Are you tired of Ragers?</h1> 
        <h3 class="home-text"> Now you have the ability to review player names and determine if they have been reported for displaying aggressive behavior, allowing you to focus on them during gameplay. It's an opportunity to promote a healthier gaming environment!</h3>
      </div>
    </div>
  </div>
</template>

<style>
  .lookUp {
    display: flex;
    align-items: center;
  }
  #homediv {
    box-shadow: 0 0 1000px rgb(41, 199, 238);
    background-color: rgb(33, 33, 33);
    border-radius: 4px;
    width: 600px;
    height: 400px;
    display: flex;
    flex-flow: column nowrap;
    justify-content: center;
  }
  .home-text {
    color: rgba(255, 255, 255, 0.7);
    text-align: center;
    padding-left: 3em;
    padding-right: 3em;
    line-height: 2em;
  }
  .home_title {
    color:rgb(41, 199, 238);
    margin-bottom: 1em;
  }
  @media (max-width:635px){
  .home-text {
    font-size: 15px;
    padding: 0;
  }
}
</style>
