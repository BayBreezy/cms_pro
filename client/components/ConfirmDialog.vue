<template>
  <div>
    <v-dialog v-model="dialog" :width="width" transition="scroll-y-transition">
      <v-card class="pa-2" rounded="lg">
        <v-card-title class="mb-5">
          <span>{{ title }}</span>
        </v-card-title>
        <v-card-text>
          {{ message }}
        </v-card-text>
        <div class="d-flex">
          <v-spacer />
          <v-btn @click="deny" text min-height="45">
            {{ cancelText }}
          </v-btn>
          <v-btn color="primary" @click="confirm" class="ml-5" min-height="45">
            {{ submitText }}
          </v-btn>
        </div>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
export default {
  props: {
    width: {
      type: [String, Number],
      default: "450px",
    },
    title: {
      type: String,
      default: "Confirm",
    },
    message: {
      type: String,
      default: "Are you sure?",
    },
    cancelText: {
      type: String,
      default: "Cancel",
    },
    submitText: {
      type: String,
      default: "Yes, Go Ahead",
    },
  },
  data() {
    return {
      dialog: false,
      denyFn: null,
      confirmFn: null,
    };
  },
  methods: {
    async deny() {
      if (this.denyFn) {
        await this.denyFn();
      }
      this.dialog = false;
    },
    async confirm() {
      if (this.confirmFn) {
        await this.confirmFn();
      }
      this.dialog = false;
    },
    open(cFn, dFn = null) {
      this.confirmFn = cFn;
      this.denyFn = dFn;
      this.dialog = true;
    },
  },
};
</script>

<style></style>
