<template>
  <div>
    <v-container class="pt-10">
      <div class="d-flex align-center justify-space-between">
        <h1 class="font-weight-medium text-md-h4">Customers</h1>
        <div>
          <v-btn @click="exportData" text color="primary">
            <v-icon small class="mr-3">mdi-cloud-download-outline</v-icon>
            <span>Export</span>
          </v-btn>
          <v-btn class="ml-3" @click="openDialog" color="primary">
            <v-icon small class="mr-2">mdi-plus</v-icon> <span>Add</span>
          </v-btn>
        </div>
      </div>

      <v-card class="mt-10" outlined rounded="lg">
        <div class="pa-5">
          <v-text-field
            v-model="search"
            outlined
            prepend-inner-icon="mdi-magnify"
            label="Search customer"
            single-line
            hide-details="auto"
          ></v-text-field>
        </div>
        <div class="pa-3 mt-3">
          <v-data-table
            :search="search"
            :items="customers"
            show-select
            item-key="_id"
            :headers="headers"
          >
            <template #[`item.actions`]="{ item }">
              <v-icon small class="mr-2" @click="openDialog(item)"
                >mdi-pencil</v-icon
              >
              <v-icon @click="deleteCustomer(item)" small class="mr-2"
                >mdi-delete</v-icon
              >
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
    <ConfirmDialog
      ref="deleteDialog"
      title="Confirm Delete"
      message="Are you sure you want to remove this user?"
    />
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  layout: "admin",
  data() {
    return {
      item: null,
      search: "",
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
    async deleteCustomer(customer) {
      this.$refs.deleteDialog.open(() => {
        this.$store.dispatch("customers/DeleteCustomer", customer);
      });
    },
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
  background-color: #f1f5fd !important;
}
</style>
