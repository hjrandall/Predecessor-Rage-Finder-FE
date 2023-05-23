<template>
  <div class="submit">
    <v-card id="lookUpCard">
    <v-card-title id="lookUpTitle">Look Up a Rager</v-card-title>

  <v-container>
    <v-text-field
        v-model="playerName"
        maxlength="50"
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
  <v-table fixed-header height="350px">
    <thead>
      <tr>
        <th class="header-right-border table-header-styling table-text-align ">
          Player Name
        </th>
        <th class="header-right-border table-header-styling table-text-align ">
          Game
        </th>
        <th class=" table-header-styling table-text-align " >
          # of Reports
        </th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="(object, index) in tableData" :key="index">
        <td class="table-text-align ">{{object.playerName}}</td>
        <td class="table-text-align ">{{GAMES[object.game]}}</td>
        <td class="table-text-align ">{{object.reports}}</td>

      </tr>
    </tbody>
    
  </v-table>
</v-card>
  </div>
</template>

<style>
@media (min-width: 1024px) {

  .table-text-align {
    text-align: center !important;
  }
  .table-header-styling {
    font-size: 25px;
  }

  .header-right-border {
    border-right: .5px white solid;
  }
  tr:nth-child(even) {
  background-color: rgb(39, 41, 43);
}
tr:hover {
  background-color: rgb(28, 38, 44);
}
  #lookUpCard {
    box-shadow: 0 0 1000px rgb(0, 189, 126);
    width: 600px;
  }

  #lookUpTitle {
    color: rgb(0, 189, 126);
  }

}
</style>

<script>
import axios from 'axios'

export default { 
  data: () => ({
    GAMES:["","Predecessor"],
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
        this.tableData = response.data;
        console.log(" this is the data my dude");
        console.log(this.tableData);
      })
    },
  }

</script>