
<template>
  <v-form v-model="valid">
    <v-container>
      <v-row>
        <v-col cols="12" md="4">
          <v-text-field
            v-model="phone"
            :rules="phoneRules"
            :counter="12"
            label="Phone"
            required
          ></v-text-field>
        </v-col>

        <v-col cols="12" md="4">
          <v-text-field
            v-model="password"
            :rules="passRules"
            label="Password"
            required
          ></v-text-field>
        </v-col>
      </v-row>
    </v-container>
  </v-form>
</template>

<script>
export default {
  name: "login",
  layout: "clean",
  data: () => ({
    valid: false,
    phone: "",
    phoneRules: [
      (v) => !!v || "Phone is required",
      (v) => v.length <= 10 || "Phone must be less than 10 characters",
    ],
    password: "",
    passRules: [
      (v) => !!v || "Password is required",
      (v) => /.+@.+/.test(v) || "Password must be valid",
    ],
  }),
};
</script>

<style>
</style>