<template>
  <div class="submit">
    <v-card
  width="600"
  title="LookUp a Rager"
>
  <v-container>
    <v-text-field
      color="primary"
      label="Player name"
      variant="underlined"
    ></v-text-field>
  </v-container>
  <v-card-actions>
    <v-spacer></v-spacer>
    <v-btn color="success" block variant="outlined">
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

  .pNameTxtField {

  }

  .submitBtn {
    margin-bottom: 1vw;
    left: 170px;
  }

  .pTable {

  }
}
</style>