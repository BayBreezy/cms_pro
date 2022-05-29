<template>
  <v-dialog v-model="dialog" width="650" transition="scroll-y-transition">
    <v-card rounded="lg" class="pa-2">
      <v-card-title class="mb-7">
        <span>{{ title }}</span>
      </v-card-title>
      <v-card-text>
        <v-form @submit.prevent="submitData">
          <v-row dense>
            <v-col cols="12" md="6">
              <v-text-field
                v-model="form.name"
                label="Name"
                outlined
                required
              ></v-text-field>
            </v-col>
            <v-col cols="12" md="6">
              <v-text-field
                v-model="form.email"
                label="Email"
                outlined
                type="email"
                required
              ></v-text-field>
            </v-col>
            <v-col cols="12" md="6">
              <v-text-field
                v-model="form.phone"
                label="Phone"
                outlined
                type="tel"
              ></v-text-field>
            </v-col>
            <v-col cols="12" md="6">
              <v-select
                :items="[
                  { text: 'Male', value: 'male' },
                  { text: 'Female', value: 'female' },
                ]"
                v-model="form.gender"
                label="Gender"
                outlined
              ></v-select>
            </v-col>
            <v-col cols="12" md="6">
              <v-text-field
                v-model="form.street"
                label="Street"
                outlined
              ></v-text-field>
            </v-col>
            <v-col cols="12" md="6">
              <v-text-field
                v-model="form.street2"
                label="Street 2"
                outlined
              ></v-text-field>
            </v-col>
            <v-col cols="12" md="6">
              <v-text-field
                v-model="form.city"
                label="City"
                outlined
              ></v-text-field>
            </v-col>
            <v-col cols="12" md="6">
              <v-text-field
                v-model="form.country"
                label="Country"
                outlined
              ></v-text-field>
            </v-col>
            <v-col class="d-flex" cols="12">
              <v-spacer />
              <v-btn type="button" @click="close" text min-height="45">
                Cancel
              </v-btn>
              <v-btn type="submit" color="primary" class="ml-5" min-height="45">
                Submit
              </v-btn>
            </v-col>
          </v-row>
        </v-form>
      </v-card-text>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: "Create A New User",
    },
    user: {
      type: Object,
      default: () => {},
    },
  },
  mounted() {
    if (this.user) {
      this.form = JSON.parse(JSON.stringify(this.user));
    }
  },
  data() {
    return {
      dialog: false,
      form: {
        name: "",
        email: "",
        phone: "",
        gender: "",
        street: "",
        street2: "",
        city: "",
        country: "",
      },
    };
  },
  methods: {
    async submitData() {
      try {
        let isEditing = !!this.form.id;
        if (isEditing) {
          await this.$axios.put(`/api/customers/${this.form.id}`, this.form);
        } else {
          await this.$axios.post(`/api/customers`, this.form);
        }
        this.$toast.success(
          `${isEditing ? "Updated" : "Created"} Successfully`
        );
        this.close();
      } catch (error) {
        console.log(error);
      }
    },
    open() {
      this.dialog = true;
    },
    close() {
      this.dialog = false;
    },
  },
};
</script>

<style></style>
