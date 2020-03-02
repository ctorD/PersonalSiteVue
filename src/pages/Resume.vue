<template>
  <q-page padding>
    <div
      class="fit row wrap justify-start items-stretch content-stretch row q-pa-sm"
    >
      <div class="col-xs-12 col-sm-12 col-md-6 q-pa-sm">
        <q-card>
          <q-card-section>
            <div class="text-h4 ibm-bold" align="center">Profile</div>
            <q-separator dark></q-separator>

            <div class="text-h6 ibm-bold">
              {{ resume.basics.name }}
            </div>

            <div>
              {{ resume.basics.summary }}
            </div>
          </q-card-section>
        </q-card>
      </div>

      <div class="col-xs-12 col-sm-12 col-md-6 q-pa-sm">
        <q-card>
          <q-card-section>
            <div class="text-h4 ibm-bold" align="center">Education</div>
            <q-separator dark></q-separator>

            <q-list dense>
              <q-item>
                <q-item-section
                  v-for="(skill, index) in resume.education"
                  :key="index"
                >
                  <div>{{ skill.institution }}</div>
                  <div>
                    {{ skill.area }} | {{ skill.studyType }} | {{ skill.gpa }}
                  </div>
                  <div></div>
                  <div>{{ skill.start.year }} - {{ skill.end.year }}</div>
                </q-item-section>
              </q-item>
            </q-list>
          </q-card-section>
        </q-card>
      </div>

      <div class="col-xs-12 col-sm-12 col-md-6 q-pa-sm">
        <q-card>
          <q-card-section>
            <div class="text-h4 ibm-bold" align="center">Skills</div>
            <q-separator dark></q-separator>

            <q-list dense v-for="(skill, index) in resume.skills" :key="index">
              <q-item>
                <q-item-section>
                  {{ skill.name }}
                </q-item-section>
              </q-item>
            </q-list>
          </q-card-section>
        </q-card>
      </div>

      <div class="col-xs-12 col-sm-12 col-md-6 q-pa-sm">
        <q-card>
          <q-card-section>
            <div class="text-h4 ibm-bold" align="center">Papers</div>
            <q-separator dark></q-separator>
            <div
              class="text-h6 ibm-bold"
              v-for="(paper, index) in resume.publications"
              :key="index"
            >
              <paper-item class="q-pa-sm" :paper="paper"> </paper-item>
            </div>
          </q-card-section>
        </q-card>
      </div>

      <div class="col-xs-12 col-sm-12 col-md-6 q-pa-sm">
        <q-card>
          <q-card-section>
            <div class="text-h4 ibm-bold" align="center">Work</div>
            <q-separator dark></q-separator>

            <div
              class="text-h6 ibm-bold"
              v-for="(jobitem, index) in resume.work"
              :key="index"
            >
              <work-item :job="jobitem"> </work-item>
            </div>
          </q-card-section>
        </q-card>
      </div>
    </div>
  </q-page>
</template>

<script>
import { mapActions, mapGetters } from "vuex"
export default {
  components: {
    "work-item": require("components/Resume/Work").default,
    "paper-item": require("components/Resume/Paper").default
  },
  computed:{
    ...mapGetters("resume",["resume"])
  },
  async mounted() {
    this.fetchResume();
  },

  data() {
    return {
      resume: {}
    };
  },
  methods: {
    fetchResume() {
      this.$axios
        .get("https://gitconnected.com/v1/portfolio/ctord")
        .then(response => {
          this.resume = response.data;
        });
    }
  }
};
</script>

<style scoped lang="scss"></style>
