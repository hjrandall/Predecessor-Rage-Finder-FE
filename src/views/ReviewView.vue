<template>
    <div class="submit">
      <v-card id="lookUpCard" width="700">
      <v-card-title id="lookUpTitle">Review Rager Reports</v-card-title>
    <v-divider></v-divider>
    <v-table style="width: 100%;">
      <thead>
        <tr>
          <th style="width: 150px;">
            Player Name
          </th>
          <th style="width: 125px;">
            Game
        </th>
        <th style="width: 300px;">
            Reason
        </th>
        <th style="width: 50px;">
         Reports
        </th>
          <th style="width: 50px;">
            yes
          </th>
          <th style="width: 50px;">
            no
          </th>
        </tr>
      </thead>
      <tbody>
      <tr v-for="(object, index) in tableData" :key="index">
        <td>{{object.playerName}}</td>
        <td>{{object.game}}</td>
        <td>{{object.reasons}}</td>
        <td>{{object.reports}}</td>
        <td ><v-btn @click="addRager(object.playerName, object.reports, object.game)">yes</v-btn></td>
        <td><v-btn @click="deletePotentialRager(object.playerName, object.reports, object.game)">no</v-btn></td>

      </tr>
    </tbody>
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
      box-shadow: 0 0 1000px rgb(207, 43, 51);
      width: 800px;
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
      playerName: "",
      tableData: {}
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
      async addRager(playerName,reports,game){
       await axios.post('http://127.0.0.1:5000/addRager', 
        {
            "playerName": playerName,
            "reports": reports,
            "game": game
        });
    },
      async deletePotentialRager(playerName,reports,game){
       await axios.post('http://127.0.0.1:5000/deletePotentialRager', 
        {
            "playerName": playerName,
            "reports": reports,
            "game": game
        });
        location.reload();
    },
},
    mounted(){
      axios.get('http://127.0.0.1:5000/getpotentialRagers?game=1')
        .then((response) => {
          this.tableData = response.data;
        })
      }
    
        
    }
</script>