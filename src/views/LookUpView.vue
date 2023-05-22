<template>
  <div class="submit">
    <v-card id="lookUpCard" width="600">
    <v-card-title id="lookUpTitle">Look Up a Rager</v-card-title>

  <v-container>
    <v-text-field
        v-model="playerName"
        color="white"
        label="Player name"
        append-icon="mdi-magnify"
        variant="underlined"
      ></v-text-field>
  </v-container>
  
  <v-card-actions>
    <v-spacer></v-spacer>
    <v-btn color="success" block variant="outlined" :disabled="isDisabled" @click="onsubmit" id="lookUpButton">
      Lookup
      <v-icon icon="mdi-chevron-right" end></v-icon>
    </v-btn>
  </v-card-actions>
  <v-divider></v-divider>
  <v-table>
    <thead>
      <tr>
        <th class="playerName">
          Player Name
        </th>
        <th class="playerName">
          Number of Reports
        </th>
      </tr>
    </thead>
  </v-table>
</v-card>
  </div>
</template>

<style>
@media (min-width: 1024px) {
  .lookUp {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }

  .submitBtn {
    margin-bottom: 1vw;
    left: 170px;
  }

  #lookUpCard {
    box-shadow: 0 0 10000px rgb(0, 189, 126);
    width: 600;
  }

  #lookUpTitle {
    color: rgb(0, 189, 126);
  }

}
</style>

<script lang=ts>
import axios from 'axios'

export default { 
  data: () => ({
    playerName: "",
    tableData: {},
  }),
  computed: {
    isDisabled() {
      if (this.playerName == "" || this.playerName === null) {
          return true;
        }
        return false;
        }
      },
  methods:{
    onsubmit(){
      console.log(this.tableData)
      }
    },
  mounted(){
    axios.get('http://127.0.0.1:5000/getRagers?game=1')
      .then((response) => {
        this.tableData = JSON.stringify(response.data);
        console.log(" this is the data my dude");
        console.log(this.tableData);
      })
    },
  }

</script>