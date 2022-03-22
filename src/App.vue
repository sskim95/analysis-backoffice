<template>
  <v-app>
    <v-app-bar color="#716FF5">
      <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
      <v-app-bar-title style="cursor: pointer" @click="$router.push('/')">
        보답
      </v-app-bar-title>
    </v-app-bar>
    <v-navigation-drawer width="225" permanent v-model="drawer">
      <v-list>
        <v-list-group v-for="menu in menus" :key="menu.id">
          <template v-slot:activator="{ props }">
            <v-list-item :="props" :title="menu.title"></v-list-item>
          </template>
          <v-list-item
            v-for="subMenu in menu.subMenus"
            :key="subMenu.id"
            :title="subMenu.title"
            :value="subMenu.title"
            :to="menu.route + subMenu.route"
          ></v-list-item>
        </v-list-group>
      </v-list>
    </v-navigation-drawer>
    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script>
export default {
  data() {
    return {
      drawer: null,
      menus: [
        {
          id: 1,
          title: "Default",
          route: "",
          subMenus: [
            {
              id: 11,
              title: "Home",
              route: "/",
            },
            {
              id: 12,
              title: "About",
              route: "/about",
            },
          ],
        },
        {
          id: 2,
          title: "Manage",
          route: "/manage",
          subMenus: [
            {
              id: 21,
              title: "Account",
              route: "/account",
            },
            {
              id: 22,
              title: "Menu",
              route: "/menu",
            },
          ],
        },
      ],
    };
  },
};
</script>
