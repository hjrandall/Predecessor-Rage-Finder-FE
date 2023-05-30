<template>
  <div class="submit">
    <v-card id="appealCard">
    <v-card-title id="appealTitleCard">Appeal Rager Status</v-card-title>
  <v-container>
    <v-text-field
      v-model="playerName"
      maxlength="50"
      color="white"
      label="Player name"
      variant="underlined"
    ></v-text-field>

    <v-select
        v-model="game"
        color="white"
        label="Game"
        :items="gameList"
        variant="underlined">
    </v-select>

    <v-textarea
      v-model="reasonsForAppeal"
      maxlength="100"
      color="white"
      label="Reason for appeal"
      variant="underlined"
    ></v-textarea>
  </v-container>

  <v-divider></v-divider>

  <v-card-actions>
    <v-spacer></v-spacer>

    <v-btn :disabled="isDisabled" @click="onsubmit" id="appealButton">
      Submit Appeal
      <v-icon icon="mdi-chevron-right" end></v-icon>
    </v-btn>
  </v-card-actions>
</v-card>
  </div>
</template>
  
  <style>
  @media (min-width: 1024px) {

    #appealButton {
      width: 100%;
      border: 1px solid rgb(255, 255, 255);
      text-align: center;
      color: rgb(255, 255, 255);
    }

    #appealCard {
      box-shadow: 0 0 1000px rgb(255, 255, 255);
      width: 600px;
    }

    #appealTitleCard {
      color: rgb(255, 255, 255);
    }
  }
  </style>

<script>
import axios from "axios"
import {toast, Zoom} from 'vue3-toastify';
import 'vue3-toastify/dist/index.css';
export default {
  data: () => ({
    gameList: ['','Predecessor'],
    game: "",
    playerName: "",
    reasonsForAppeal: "",
  }),
  computed: {
    isDisabled() {
      if (this.game.trim() === "" || this.game == null || this.playerName.trim() === "" || this.reasonsForAppeal.trim() == "") {
          return true;
        }
        return false;
        }
},
  methods:{
    async onsubmit(){
       var result = await axios.post('https://gamerragecheck.com/API/submitAppeal', 
       {
        "playerName": this.playerName.toUpperCase(),
        "reasons": this.reasonsForAppeal,
        "game": this.game
      });
      this.game = "";
      this.playerName = "";
      this.reasonsForAppeal = "";
      toast.success(result.data.message,{autoClose: 4000, position: 'bottom-center', transition:Zoom, theme:'dark', toastClassName:'toast'});
      }
}
}
</script>