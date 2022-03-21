<template>
  <v-app>
    <v-app-bar color="grey-lighten-2">
      <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
      <v-app-bar-title style="cursor: pointer" @click="$router.push('/')">
        보답
      </v-app-bar-title>
    </v-app-bar>
    <v-navigation-drawer color="grey-darken-2" permanent v-model="drawer">
      <v-list-item to="/">
        Home
      </v-list-item>
      <v-list-item to="/about">
        About
      </v-list-item>
    </v-navigation-drawer>
    <v-main>
      <router-view/>
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
          id: 0,
          title: '메인메뉴 0',
          route: '/main0',
          subMenus: []
        },
        {
          id: 1,
          title: '메인메뉴 1',
          route: '/main1',
          subMenus: [
            {
              id: 11,
              title: '서브메뉴 11',
              route: '/sub11'
            }
          ]
        },
        {
          id: 2,
          title: '메인메뉴 2',
          route: '/main2',
          subMenus: [
            {
              id: 21,
              title: '서브메뉴 21',
              route: '/sub21'
            },
            {
              id: 22,
              title: '서브메뉴 22',
              route: '/sub22'
            }
          ]
        }
      ],
    }
  }
}
</script>
