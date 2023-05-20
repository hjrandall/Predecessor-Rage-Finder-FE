<template>
    <div class="submit">
      <v-card id="submitRagerCard" width="600">
      <v-card-title id="sugmitRagertitle">Submit a Rager</v-card-title>

    <v-container>
      <v-text-field
        v-model="playerName"
        color="white"
        label="Player name"
        variant="underlined"
      ></v-text-field>

      <v-text-field
        v-model="recordingID"
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
    box-shadow: 0 0 10000px rgb(117, 78, 255);
  }

  #sugmitRagertitle {
    color: rgb(117, 78, 255);
  }
  }
  </style>

<script lang=ts>
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
      if (this.game === "" || this.game == null || this.playerName === "" || this.recordingID === "" || this.reasonsForReport == "") {
          return true;
        }
        return false;
        }
},
  methods:{
    onsubmit(){
      console.log(this.game)
      console.log(this.playerName)
      console.log(this.recordingID)
      console.log(this.reasonsForReport)
    }
    },
}
</script>