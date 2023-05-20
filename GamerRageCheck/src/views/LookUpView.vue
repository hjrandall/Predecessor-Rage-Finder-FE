<template>
  <div class="lookUp">
    <v-responsive
    class="mx-auto"
    max-width="344">
    
    <v-text-field class="pNameTxtField" label="Player Name" type="string" clearable inner-icon="mdi-magnify"></v-text-field>
    
  </v-responsive>
  <v-responsive
    class="mx-auto"
    max-width="344">
    <v-btn>
      Submit
    </v-btn>
  </v-responsive>
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
}
</style>