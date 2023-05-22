<template>
    <div class="submit">
      <v-card id="lookUpCard" width="700">
      <v-card-title id="lookUpTitle">Review Rager Reports</v-card-title>
    <v-divider></v-divider>
    <v-table style="width: 100%;">
      <thead>
        <tr>
          <th style="width: 125px;">
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
  
  <script lang=ts>
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
      }
    
        
    }
  
  </script>