<template>
    <div class="submit">
      <v-card id="lookUpCardreview">
      <v-card-title id="reviewTitle">Review Rager Reports</v-card-title>
    <v-divider></v-divider>
    <v-table fixed-header class="vtable">
      <thead>
        <tr>
          <th>
            Player Name
          </th>
          <th>
            Game
        </th>
        <th>
            Recording ID
        </th>
        <th>
            Reason
        </th>
        <th>
         Reports
        </th>
          <th>
            yes
          </th>
          <th>
            no
          </th>
        </tr>
      </thead>
      <tbody>
      <tr v-for="(object, index) in tableData" :key="index">
        <td>{{object.playerName}}</td>
        <td>{{GAMES[object.game]}}</td>
        <td>{{object.recordingID}}</td>
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

    #lookUpCardreview {
      box-shadow: 0 0 1000px rgb(207, 43, 51);
      width: 800px;
    }
  
    #reviewTitle {
      color: rgb(207, 43, 51);
    }
  
  }
  </style>
  
  <script>
  import axios from 'axios'
  
  export default {
    data: () => ({
      GAMES:["","Predecessor"],
      playerName: "",
      tableData: {}
    }),
    computed: {
  },
    methods:{
      async addRager(playerName,reports,game){
       await axios.post('http://127.0.0.1:5000/addRager', 
        {
            "playerName": playerName,
            "reports": reports,
            "game": game
        });
        location.reload();
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