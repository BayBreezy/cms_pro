<template>
  <div>
    <v-app-bar color="white" app class="el">
      <v-app-bar-nav-icon
        @click="drawer = !drawer"
        v-if="$vuetify.breakpoint.smAndDown"
      ></v-app-bar-nav-icon>
      <v-spacer />
      <v-avatar size="40" color="primary">
        <span class="white--text">BB</span>
      </v-avatar>
    </v-app-bar>
    <v-navigation-drawer
      width="270"
      v-model="drawer"
      :mini-variant.sync="mini"
      :expand-on-hover="mini"
      app
      class=""
    >
      <v-list class="mb-10">
        <v-list-item>
          <v-list-item-icon class="mr-3">
            <v-icon>mdi-database</v-icon>
          </v-list-item-icon>
          <v-list-item-title class="text-h5 font-weight-medium">
            CMS Pro
          </v-list-item-title>
          <v-list-item-action
            v-if="!$vuetify.breakpoint.smAndDown"
            class="pr-3"
          >
            <v-btn @click="mini = !mini" icon>
              <v-icon>mdi-chevron-double-left</v-icon>
            </v-btn>
          </v-list-item-action>
        </v-list-item>
      </v-list>
      <v-list flat nav subheader>
        <v-subheader
          v-if="!mini"
          class="font-weight-bold text-caption text--disabled"
          >Managment</v-subheader
        >
        <v-list-item-group>
          <template v-for="(n, i) in nav">
            <v-list-item
              active-class="primary--text"
              :to="n.link"
              :key="`navItem-${i}`"
            >
              <v-list-item-icon class="mr-4">
                <v-icon size="20">{{ n.icon }}</v-icon>
              </v-list-item-icon>
              <v-list-item-content>
                <v-list-item-title class="text-body-2">{{
                  n.name
                }}</v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </template>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>
  </div>
</template>

<script>
export default {
  data() {
    return {
      drawer: null,
      mini: false,
      nav: [
        {
          name: "Customers",
          link: "/admin/customers",
          icon: "mdi-account-tie",
        },
        {
          name: "Orders",
          link: "/admin/orders",
          icon: "mdi-tag",
        },
      ],
    };
  },
};
</script>

<style></style>
