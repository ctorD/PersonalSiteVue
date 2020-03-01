<template>
  <q-layout view="hHh Lpr lff">
    <q-drawer show-if-above v-model="left" side="left">
      <!-- drawer content -->

      <q-card class="my-card">
        <q-card-section class=" text-white" align="center">
          <div class="text-h6 ibm-bold">Daniel Clarke</div>
          <div class="text-subtitle2 ibm-reg">Software Developer</div>
        </q-card-section>

        <q-card-section class="ibm-reg" align="center">
          <q-chip clickable @click="openURL('https://www.linkedin.com/in/daniel-clarke-625042188/')">
            <q-avatar>
              <q-icon color="blue" size="22px" name="fab fa-linkedin-in" />
            </q-avatar>
            Linkedin
          </q-chip>

          <q-chip clickable @click="openURL('https://github.com/ctorD')">
            <q-avatar>
            <q-icon color="red" size="24px" name="fab fa-github" />

            </q-avatar>

            Github
          </q-chip>
        </q-card-section>
      </q-card>

      <q-list class="ibm-bold">
        <q-item to="/" exact clickable v-ripple>
          <q-item-section avatar>
            <q-icon name="home" />
          </q-item-section>

          <q-item-section>
            Home
          </q-item-section>
        </q-item>

        <q-item to="/projects" clickable v-ripple>
          <q-item-section avatar>
            <q-icon name="folder" />
          </q-item-section>

          <q-item-section>
            Projects
          </q-item-section>
        </q-item>

        <q-item to="/resume" clickable v-ripple>
          <q-item-section avatar>
            <q-icon name="send" />
          </q-item-section>

          <q-item-section>
            Resume
          </q-item-section>
        </q-item>
      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import { openURL } from "quasar";
export default {
  data() {
    return {
      left: true
    };
  },
  methods: {
    openURL
  }
};
</script>

<style lang="scss">
.q-drawer {
  background-color: rgba(131, 23, 134, 0.4);

  .q-card {
    background: rgba(0, 0, 0, 0.3);
  }
}
.q-page-container {
  background: $color2;
  background-image: url("../statics/img/low_poly_abstract_banner_design_2203.jpg");
}
.my-card {
  width: 100%;
  max-width: 350px;
}

.q-layout {
  color: white;
  .q-icon {
    color: white;
  }
}
.a {
  outline: none;
}
</style>
