<template>
  <v-app>
    <v-container>
      <v-row justify="center">
        <v-col cols="12" md="6">
          <v-card class="elevation-3">
            <v-card-title class="text-center">
              <h1>Create An Account</h1>
            </v-card-title>
            <v-card-text>
              <v-form @submit.prevent="signup">
                <v-text-field
                  label="Username"
                  v-model="username"
                  :rules="usernameRules"
                  type="text"
                  variant="outlined"
                  required
                ></v-text-field>
                <v-text-field
                  label="Email"
                  v-model="email"
                  :rules="emailRules"
                  type="email"
                  variant="outlined"
                  required
                ></v-text-field>
                <v-text-field
                  label="Password"
                  v-model="password"
                  :rules="passwordRules"
                  type="password"
                  variant="outlined"
                  required
                ></v-text-field>
                <v-text-field
                  label="Confirm Password"
                  v-model="confirmPassword"
                  :rules="confirmPasswordRules"
                  type="password"
                  variant="outlined"
                  required
                ></v-text-field>
                <v-btn block color="primary" type="submit">Sign Up</v-btn>
                <br />
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
      username: '',
      email: '',
      password: '',
      confirmPassword: '',
    };
  },
  computed: {
    usernameRules() {
      return [
        value => !!value || 'Username is required.',
        value => /^(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&]{1,}$/.test(value) || 'Username should have at least 1 capital letter, a number, and one special character.'
      ];
    },
    emailRules() {
      return [
        value => !!value || 'Email is required.',
        value => /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(value) || 'Email format is invalid.'
      ];
    },
    passwordRules() {
      return [
        value => !!value || 'Password is required.',
        value => /^(?=.*[A-Z]).{8,}$/.test(value) || 'Password should be 8 characters long and include a capital letter.'
      ];
    },
    confirmPasswordRules() {
      return [
        value => !!value || 'Please confirm your password.',
        value => value === this.password || 'Passwords do not match.'
      ];
    },
  },
  methods: {
    signup() {
      const storedUsers = JSON.parse(localStorage.getItem('users')) || [];
      storedUsers.push({
        username: this.username,
        email: this.email,
        password: this.password,
      });
      localStorage.setItem('users', JSON.stringify(storedUsers));
      this.$emit('signup-success', { username: this.username, email: this.email });
    },
  },
};
</script>

<style scoped>
.text-center {
  text-align: center;
}
</style>
