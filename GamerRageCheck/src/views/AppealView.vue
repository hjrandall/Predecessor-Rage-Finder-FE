<template>
  <div class="submit">
    <v-card
  width="600"
  title="Appeals"
>
  <v-container>
    <v-text-field
      color="primary"
      label="Player name"
      variant="underlined"
    ></v-text-field>

      <v-text-field
        color="primary"
        label="Game Name"
        variant="underlined"
      ></v-text-field>

    <v-textarea
      color="primary"
      label="Reason for appeal"
      variant="underlined"
    ></v-textarea>
  </v-container>

  <v-divider></v-divider>

  <v-card-actions>
    <v-spacer></v-spacer>

    <v-btn color="success">
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
  }
  </style>