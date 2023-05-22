<template>
  <div class="submit">
    <v-card id="appealCard" width="600">
    <v-card-title id="appealTitleCard">Appeal a name</v-card-title>
  <v-container>
    <v-text-field
      v-model="playerName"
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
      color="white"
      label="Reason for appeal"
      variant="underlined"
    ></v-textarea>
  </v-container>

  <v-divider></v-divider>

  <v-card-actions>
    <v-spacer></v-spacer>

    <v-btn :disabled="isDisabled" @click="onsubmit" id="appealButton">
      Submit
      <v-icon icon="mdi-chevron-right" end></v-icon>
    </v-btn>
  </v-card-actions>
</v-card>
  </div>
</template>
  
  <style>
  @media (min-width: 1024px) {
    .appeal {
      min-height: 100vh;
      display: flex;
      align-items: center;
    }

    #appealButton {
      width: 100%;
      border: 1px solid rgb(255, 255, 255);
      text-align: center;
      color: rgb(255, 255, 255);
    }

    #appealCard {
      box-shadow: 0 0 10000px rgb(255, 255, 255);
      width: 600;
    }

    #appealTitleCard {
      color: rgb(255, 255, 255);
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
    onsubmit(){
      console.log(this.game)
      console.log(this.playerName)
      console.log(this.recordingID)
      console.log(this.reasonsForAppeal)
    }
    },
}
</script>