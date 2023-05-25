<template>
  <div class="submit">
    <v-card id="lookUpCard">
    <v-card-title id="lookUpTitle">Lookup a Rager</v-card-title>

  <v-container>
    <v-text-field
        v-model="search"
        color="white"
        label="Search for a Player"
        append-icon="mdi-magnify"
        variant="underlined"
      ><v-tooltip
        class="toolTipSearch"
        activator="parent"
        location="bottom"
      >If the player is already listed, you can report them again in 'Report a Rager'.</v-tooltip></v-text-field>
  </v-container>
  <v-divider></v-divider>
 <v-data-table
       height= "350"
       fixed-header
      :headers="headers"
      :items="tableData"
      :search="search"
    ></v-data-table>  
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
import { VDataTable } from 'vuetify/labs/VDataTable'

export default { 

  components: {
    VDataTable,
  },

  data: () => ({
    gameView:"Predecessor",
    playerName: "",
    tableData: [],
    search: '',
    headers: [
      {
        key: 'playerName',
        title: 'Player Name',
      },
      {
        key: 'game',
        title: 'Game Name',
      },
      {
        key: 'reports',
        title: '# of Reports',
      }, 
    ],
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
      }
    },
  mounted(){
    axios.post('http://3.128.155.1/getRagers',{"game": this.gameView})
      .then((response) => {
        this.tableData = response.data;
      })
    },
  }

</script>