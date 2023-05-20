<template>
    <div class="submit">
      <v-card width="600" style="box-shadow: 0 0 1000px rgb(0, 189, 126)">
      <v-card-title style="color: rgb(0, 189, 126) ;">Submit a Rager</v-card-title>
    <v-container>
      <v-text-field
        v-model="this.playerName"
        color="primary"
        label="Player name"
        variant="underlined"
      ></v-text-field>

      <v-text-field
        v-model="this.recordingID"
        color="primary"
        label="Recording ID"
        variant="underlined"
      ></v-text-field>

      <v-select
        v-model="this.game"
        color="primary"
        label="Game"
        :items="gameList"
        variant="underlined"
      ></v-select>
        
      <v-textarea
        v-model="this.reasonsForReport"
        color="primary"
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
      border: 1px solid rgb(0, 189, 126);
      text-align: center;
      color: rgb(0, 189, 126);
    }
  @media (min-width: 1024px) {
    .submit {
      min-height: 100vh;
      display: flex;
      align-items: center;
    }
  }
  </style>

<script>
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