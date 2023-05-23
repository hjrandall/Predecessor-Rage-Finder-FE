<template>
    <div class="submit">
      <v-card id="submitRagerCard" width="600">
      <v-card-title id="sugmitRagertitle">Submit a Rager</v-card-title>

    <v-container>
      <v-text-field
        v-model="playerName"
        maxlength="50"
        color="white"
        label="Player name"
        variant="underlined"
      ></v-text-field>

      <v-text-field
        v-model="recordingID"
        maxlength="50"
        color="white"
        label="Recording ID"
        variant="underlined"
      ></v-text-field>

      <v-select
        v-model="game"
        color="white"
        label="Game"
        :items="gameList"
        variant="underlined"
      ></v-select>
        
      <v-textarea
        v-model="reasonsForReport"
        maxlength="100"
        color="white"
        label="Reason for report"
        variant="underlined"
      ></v-textarea>
    </v-container>

    <v-divider></v-divider>

    <v-card-actions>
      <v-spacer></v-spacer>

      <v-btn :disabled="isDisabled" @click="onsubmit" id="submitButton">
        Submit
        <v-icon icon="mdi-chevron-right" end></v-icon>
      </v-btn>
    </v-card-actions>
  </v-card>
    </div>
  </template>
  
  <style>
  #submitButton {
      width: 100%;
      border: 1px solid rgb(117, 78, 255);
      text-align: center;
      color: rgb(117, 78, 255);
    }
  @media (min-width: 1024px) {
    .submit {
      min-height: 100vh;
      display: flex;
      align-items: center;
    }

  #submitRagerCard {
    box-shadow: 0 0 1000px rgb(117, 78, 255);
  }

  #sugmitRagertitle {
    color: rgb(117, 78, 255);
  }
  }
  .toast{
    width: 25em;
  }
  </style>

<script>
import axios from 'axios';
import {toast, Zoom} from 'vue3-toastify';
import 'vue3-toastify/dist/index.css';
export default {
  data: () => ({
    gameList: ['','Predecessor'],
    game: "",
    playerName: "",
    recordingID: "",
    reasonsForReport: "",
  }),
  computed: {
    isDisabled() {
      if (this.game.trim() === "" || this.game == null || this.playerName.trim() === "" || this.recordingID.trim() === "" || this.reasonsForReport.trim() == "") {
          return true;
        }
        return false;
        }
},
  methods:{
    async onsubmit(){
      var result= await axios.post('http://127.0.0.1:5000/submitRagerReview', 
       {
        "playerName": this.playerName.toUpperCase(),
        "recordingID": this.recordingID,
        "reasons": this.reasonsForReport,
        "reports": 1,
        "game": 1
      });
      this.game = "";
      this.playerName = "";
      this.recordingID = "";
      this.reasonsForReport = "";
      toast.success(result.data.message,{autoClose: 4000, position: 'bottom-center', transition:Zoom, theme:'dark', toastClassName:'toast'});
      }
    },
}
</script>