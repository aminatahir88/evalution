<template>
  <v-app>
    <v-toolbar
      light
      prominent
      color="indigo"
      dark
      src="https://cdn.vuetifyjs.com/images/backgrounds/vbanner.jpg"
    >
      <v-btn icon>
        <v-icon>mdi-export</v-icon>
      </v-btn>
      <span class="white--text">TASK MANAGEMENT APPLICATION</span>
    </v-toolbar>
    <v-container>
      <div class="title-container">
        <div class="text-1xl">
          <h3 class="display-4 purple yellow--text text--darken-2">
            WELCOME TO THE TASK MANAGEMENT WEB APPLICATION
          </h3>
        </div>
      </div>
      <v-row justify="center">
        <v-col cols="12" sm="6" md="6">
          <v-card class="elevation-4">
            <v-card-title class="text-center custom-font">
              <h1>Sign in</h1>
            </v-card-title>
            <v-card-text>
              <v-form @submit.prevent="login">
                <v-text-field
                  label="Username"
                  v-model="username"
                  type="text"
                  variant="outlined"
                ></v-text-field>
                <v-text-field
                  label="Password"
                  v-model="password"
                  type="password"
                  variant="outlined"
                ></v-text-field>
                <v-btn block color="primary" type="submit">Login</v-btn>
                <br />
                <router-link to="/signup">Create a new account</router-link>
              </v-form>
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </v-app>
</template>

<script>
export default {
  data() {
    return {
      username: "",
      password: "",
    };
  },
  methods: {
    login() {
      const storedUsers = JSON.parse(localStorage.getItem("users")) || [];
      const user = storedUsers.find(
        (user) =>
          user.username === this.username && user.password === this.password
      );
      if (user) {
        this.$emit("login-success", { username: this.username });
        alert("Successfully logged in.");
      } else {
        alert("Invalid username or password");
      }
    },
  },
};
</script>

<style scoped>
.text-center {
  text-align: center;
}
.custom-font {
  font-family: "Merienda", cursive;
}
</style>
