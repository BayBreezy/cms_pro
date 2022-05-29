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
          <v-btn @click="exportData" text color="primary">
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
          <v-data-table :items="customers" show-select :headers="headers">
            <template #[`item.actions`]="{ item }">
              <v-icon small class="mr-2" @click="openDialog(item)"
                >mdi-pencil</v-icon
              >
              <v-icon small class="mr-2">mdi-delete</v-icon>
            </template>
            <!-- email slot -->
            <template #[`item.email`]="{ item }">
              <v-tooltip top>
                <template v-slot:activator="{ on, attrs }">
                  <a
                    v-on="on"
                    v-bind="attrs"
                    style="
                      text-decoration: underline dashed;
                      text-underline-offset: 5px;
                    "
                    :href="`mailto:${item.email}`"
                    >{{ item.email }}</a
                  >
                </template>
                <span class="text-caption"
                  >Send email to: {{ item.email }}</span
                >
              </v-tooltip>
            </template>
          </v-data-table>
        </div>
      </v-card>
    </v-container>
    <CustomerDialog :user="item" ref="customerDialog" />
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  layout: "admin",
  data() {
    return {
      item: null,
      headers: [
        { text: "Name", value: "name" },
        { text: "Email", value: "email" },
        { text: "Phone", value: "phone" },
        { text: "Actions", value: "actions", sortable: false },
      ],
    };
  },
  async asyncData({ store }) {
    await store.dispatch("customers/GetCustomers");
  },
  computed: {
    ...mapState({
      customers: (state) => state.customers.customers,
    }),
  },
  methods: {
    exportData() {
      this.$store.dispatch("utils/ExportData", {
        data: this.customers,
        sheetName: "Customers",
        fileName: "Customers.xlsx",
        headers: [
          "name",
          "email",
          "phone",
          "gender",
          "street",
          "street2",
          "city",
          "country",
        ],
      });
    },
    openDialog(item) {
      if (item) {
        this.item = JSON.parse(JSON.stringify(item));
        this.$refs.customerDialog.open();
        return;
      }
      this.item = null;
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
