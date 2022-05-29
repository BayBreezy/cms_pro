<template>
  <div>
    <v-container class="pt-10">
      <div class="d-flex align-center justify-space-between">
        <h1 class="font-weight-medium text-md-h4">Customers</h1>
        <v-btn @click="openDialog" color="primary">
          <v-icon small class="mr-2">mdi-plus</v-icon> <span>Add</span>
        </v-btn>
      </div>
      <div class="d-flex align-center justify-space-between mt-10">
        <div>
          <v-btn text color="primary" class="mr-2">
            <v-icon small class="mr-3">mdi-cloud-upload-outline</v-icon>
            <span>Import</span>
          </v-btn>
          <v-btn text color="primary">
            <v-icon small class="mr-3">mdi-cloud-download-outline</v-icon>
            <span>Export</span>
          </v-btn>
        </div>
      </div>

      <v-card class="mt-10" outlined rounded="lg">
        <div class="pa-5">
          <v-text-field
            outlined
            prepend-inner-icon="mdi-magnify"
            label="Search customer"
            single-line
            hide-details="auto"
          ></v-text-field>
        </div>
        <div class="pa-3 mt-3">
          <v-data-table show-select :headers="headers"></v-data-table>
        </div>
      </v-card>
    </v-container>
    <CustomerDialog ref="customerDialog" />
  </div>
</template>

<script>
export default {
  layout: "admin",
  data() {
    return {
      item: null,
      headers: [
        { text: "Name", value: "name" },
        { text: "Email", value: "email" },
        { text: "Phone", value: "phone" },
        { text: "Address", value: "address" },
        { text: "Actions", value: "actions", sortable: false },
      ],
    };
  },
  methods: {
    openDialog(item) {
      if (item) {
        this.item = JSON.parse(JSON.stringify(item));
        return this.$refs.customerDialog.open();
      }
      this.$refs.customerDialog.open();
    },
  },
};
</script>

<style scoped>
::v-deep thead.v-data-table-header {
  background-color: #f3f6f8 !important;
}
</style>
