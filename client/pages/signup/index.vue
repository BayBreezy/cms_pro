<template>
  <v-container class="fill-height">
    <v-row align="center" justify="center">
      <v-col cols="11" md="5">
        <v-card rounded="lg" class="el pa-md-7">
          <h1 class="text-h4 font-weight-medium text-center">Join Us Today</h1>

          <p class="text--secondary text-body-2 mt-5 text-center">
            Hey there, create your account & get started!
          </p>
          <v-form @submit.prevent="" class="mt-15">
            <v-row dense>
              <v-col cols="12">
                <v-text-field
                  label="Email"
                  type="email"
                  id="email"
                  placeholder="Enter your email"
                  outlined
                ></v-text-field>
              </v-col>
              <v-col cols="12">
                <v-text-field
                  label="Password"
                  type="password"
                  id="password"
                  outlined
                ></v-text-field>
              </v-col>
              <v-col cols="12">
                <v-btn
                  type="submit"
                  color="primary"
                  min-height="48"
                  class="text-subtitle-1"
                  depressed
                  block
                  >Sign Up</v-btn
                >
              </v-col>

              <v-col
                cols="12"
                class="mt-10 d-flex align-center justify-space-between"
              >
                <nuxt-link class="text-caption" to="/">
                  Already have ann account? Login here
                </nuxt-link>
              </v-col>
            </v-row>
          </v-form>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {};
</script>
