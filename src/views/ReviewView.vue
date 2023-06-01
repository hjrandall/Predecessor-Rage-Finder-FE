<template>
    <div class="review" >
      <div>
        <v-btn class="review-btns" :disabled="isRagersList" @click="viewRagers">ragers</v-btn>
        <v-btn class="review-btns" :disabled="!isRagersList" @click="getAppeals">appeals</v-btn>
      </div>
      <v-card id="lookUpCardreview">
      <v-card-title v-if="isRagersList" id="reviewTitle">Review Rager Reports</v-card-title>
      <v-card-title v-else id="reviewTitle">Review Appeals</v-card-title>
    <v-divider></v-divider>
    <v-table fixed-header height="350px">
      <thead>
        <tr>
          <th class="header-right-border table-text-align ">
            Player Name
          </th>
          <th class="header-right-border table-text-align ">
            Game
        </th >
        <th v-if="isRagersList" class="header-right-border table-text-align ">
            Recording ID
        </th>
        <th class="header-right-border table-text-align ">
            Reason
        </th>
        <th v-if="isRagersList" class="header-right-border table-text-align ">
         Reports
        </th>
          <th class="header-right-border table-text-align ">
            yes
          </th>
          <th class=" table-text-align ">
            no
          </th>
        </tr>
      </thead>
      <tbody>
      <tr v-for="(object, index) in tableData" :key="index">
        <td>{{object.playerName}}</td>
        <td>{{object.game}}</td>
        <td v-if="isRagersList">{{object.recordingID}}</td>
        <td>{{object.reasons}}</td>
        <td v-if="isRagersList">{{object.reports}}</td>
        <td v-if="isRagersList"><btn @click="addRager(object.playerName, object.reports, object.game)">yes</btn></td>
        <td v-else><btn @click="approveAppeal(object.playerName, object.reasons, object.game)">yes</btn></td>
        <td v-if="isRagersList"><btn @click="deletePotentialRager(object.playerName, object.reports, object.game)">no</btn></td>
        <td v-else><btn @click="deleteAppeal(object.playerName, object.reasons, object.game)">no</btn></td>

      </tr>
    </tbody>
    </v-table>
  </v-card>
    </div>
  </template>
  
  <style>
    .review-btns{
      margin-bottom: 2em;
      margin-right: 3em;
    }

    #lookUpCardreview {
      box-shadow: 0 0 1000px rgb(207, 43, 51);
      width: 800px;
    }
  
    #reviewTitle {
      color: rgb(207, 43, 51);
    }
    .review {
      display: flex;
      flex-flow: column nowrap;;
      align-items: center;
      margin-left: 40px;
    }
  </style>
  
  <script>
  import axios from 'axios'
  
  export default {
    data: () => ({
      gameView:"Predecessor",
      playerName: "",
      tableData: {},
      isRagersList: true
    }),
    computed: {
  },
    methods:{
      async viewRagers(){
        axios.post('https://predecessorrage-1-u4279220.deta.app/getpotentialRagers',{"game": this.gameView})
        .then((response) => {
          this.tableData = response.data;
        })
        this.isRagersList = true
      },
      async getAppeals(){
        await axios.post('https://predecessorrage-1-u4279220.deta.app/getAppeals',{"game": this.gameView})
        .then((response) => {
          this.tableData = response.data;
        })
        this.isRagersList = false
      },
      async addRager(playerName,reports,game){
       await axios.post('https://predecessorrage-1-u4279220.deta.app/addRager', 
        {
            "playerName": playerName,
            "reports": reports,
            "game": game
        });
        this.viewRagers()
    },
    async deletePotentialRager(playerName,reports,game){
      await axios.post('https://predecessorrage-1-u4279220.deta.app/deletePotentialRager', 
      {
        "playerName": playerName,
        "reports": reports,
        "game": game
      });
      this.viewRagers()
    },
    async deleteAppeal(playerName,reasons,game){
      await axios.post('https://predecessorrage-1-u4279220.deta.app/deleteAppeal', 
      {
        "playerName": playerName,
        "reasons": reasons,
        "game": game
      });
      this.getAppeals()
    },
    async approveAppeal(playerName,reasons,game){
      await axios.post('https://predecessorrage-1-u4279220.deta.app/deleteRager', 
      {
        "playerName": playerName,
        "reasons": reasons,
        "game": game
      });
      this.deleteAppeal(playerName,reasons,game)
      this.getAppeals()
    },
},
   async mounted(){
       await axios.post('https://predecessorrage-1-u4279220.deta.app/getpotentialRagers',{"game": this.gameView})
        .then((response) => {
          this.tableData = response.data;
          
        })
      }
    
        
    }
</script>