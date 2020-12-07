
<template>
  <v-container fluid fill-height>
    <v-row align="center" justify="center" no-gutters>
      <v-col xs="12" sm="8" md="5">
        <v-card>
          <v-card-title>Form</v-card-title>
        </v-card>
        <v-card-text>
          <v-form @submit.prevent="handleLogin">
            <v-text-field
              v-model="form.phone"
              id="loginFormPhone"
              label="Phone"
              placeholder="+62"
              prepend-icon="mdi-phone-outline"
              type="nan"
              required
            />
            <v-text-field
              v-model="form.password"
              id="loginFormPass"
              label="Password"
              placeholder="password"
              prepend-icon="mdi-lock-outline"
              type="text"
              required
            />
            <v-text-field
              v-model="form.country"
              id="loginFormCountry"
              label="Country"
              placeholder="country"
              prepend-icon="mdi-flag-outline"
              type="text"
              required
            />
            <v-btn
              id="loginFormLoginButton"
              class="orange-gradient btn-login"
              block
              color="green"
              type="submit"
            >
              Signup
            </v-btn>
          </v-form>
        </v-card-text>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "signup",
  layout: "clean",

  data: () => ({
    form: {
      phone: "",
      password: "",
      country: "",
      message: null,
    },
  }),
  methods: {
    async handleLogin() {
      console.log(this.form);
      try {
        await this.$store.dispatch("user/create", {
          data: {
            phone: this.form.phone,
            password: this.form.password,
            country: this.form.country,
            latlong: null,
          },
        });
        // this.$router.push("/bbb");
      } catch (err) {
        this.message = err.message;
      }
    },
  },
};
</script>

<style>
</style>