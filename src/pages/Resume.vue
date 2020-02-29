<template>
  <q-page class="flex flex-center">
    <q-card>
      <q-card-section>
        <p>
          {{resume.basics.name}}
          </p>
      </q-card-section>

    </q-card>
  </q-page>
</template>

<script>
export default {
  mounted() {
    this.fetchResume();
  },

  data() {
    return {
      resume: {
        basics: {
          name: "Daniel Clarke",
          picture: "https://avatars2.githubusercontent.com/u/43765893?v=4",
          label: "Software Developer",
          headline: null,
          summary:
            "Hard-working, motivated and honest individual with a passion for computing. Adaptable to different tasks\nand motivated to learn new skills. An avid and enthusiastic learner who takes pride in all areas of work,\nwhether this be acedemic or practical new challenges are always welcomed.",
          website: null,
          blog: null,
          yearsOfExperience: 0,
          id: "cb72070b-f77f-4820-8c6c-154b78dde9da",
          username: "ctorD",
          karma: 10,
          email: null,
          region: "Huddersfield",
          location: {},
          phone: null,
          followers: 3,
          following: 1,
          profiles: [
            {
              network: "gitconnected",
              username: "ctorD",
              url: "https://gitconnected.com/ctorD"
            },
            {
              network: "GitHub",
              username: "ctorD",
              url: "https://github.com/ctorD"
            }
          ]
        },
        skills: [
          {
            name: "C#",
            level: "",
            rating: 0,
            yearsOfExperience: null,
            keywords: []
          },
          {
            name: "C# .NET Core",
            level: "",
            rating: 0,
            yearsOfExperience: null,
            keywords: []
          },
          {
            name: "Javascript/Typescript",
            level: "",
            rating: 0,
            yearsOfExperience: null,
            keywords: []
          },
          {
            name: "Vue.js",
            level: "",
            rating: 0,
            yearsOfExperience: null,
            keywords: []
          }
        ],
        projects: [],
        work: [
          {
            company: "Foodmate UK",
            position: "C# Developer",
            website: "https://www.foodmate.uk/",
            location: "Huddersfield",
            summary: "",
            isCurrentRole: true,
            startDate: "2019-10-01",
            endDate: "",
            start: { year: 2019, month: 10 },
            end: {},
            highlights: []
          },
          {
            company: "Langland’s Garden Centre",
            position: "Kitchen Assistant",
            website: "",
            location: "Leeds",
            summary:
              "During my time at college I worked part-time in the Café on the weekends and at least one mid-week shift. I worked multiple different tasks depending on what was required during the shift. When I first started working my main task was to clear tables, and carry out table service in the busy cafe, as I continued working I started working in the kitchen as a Kitchen Porter where I would wash kitchen utensils and plates. When required I would also work out front as a barista, serving coffees to the customers. Working at Langland’s taught me how to multi-task efficiently in stressful situations and essential team-work skills. ",
            isCurrentRole: false,
            startDate: "2015-12-01",
            endDate: "2016-10-01",
            start: { year: 2015, month: 12 },
            end: { year: 2016, month: 10 },
            highlights: []
          }
        ],
        publications: [
          {
            name:
              "Implementing a Lightweight Cloud-Based Process Monitoring Solution for Smart Agriculture",
            summary:
              "In order to meet recent challenges for more efficient and economic industrial manufacturing plants and processes, existing infrastructure is undergoing a digital transformation towards Smart Factories/Industry 4.0. These technologies and approaches also have applications outside of manufacturing, including agriculture. We introduce a fully integrated data analytics infrastructure that can be used to transfer and store relevant agricultural sensor data from microcontrollers. This is applied to a prototype plant monitoring system using a Raspberry Pi for data processing and an IoT Cloud system for Real Time Application. The prototype implementation of the microcontroller integrates a temperature sensor, a humidity sensor, and a capacitive moisture sensor. The design uses a standalone ESP32 micro controller communicating to an MQTT Broker using the publish/subscribe method. Sensor data can be accessed by subscribing to the MQTT topic or by using the Web Application. The ESPlantMonitoring web application is developed for user management to grant access to the MQTT broker and view collected sensor data.",
            publisher: "Springer, Singapore",
            website:
              "https://link.springer.com/chapter/10.1007/978-981-15-1301-5_30",
            releaseDate: "2019-11-01",
            fullReleaseDate: { year: 2019, month: 11, day: 5 }
          }
        ],
        education: [
          {
            institution: "University of Huddersfield",
            area: "Computer Science",
            studyType: "Bachelor's of Science",
            startDate: "2016-10-01",
            endDate: "2019-07-01",
            start: { year: 2016, month: 10 },
            end: { year: 2019, month: 7 },
            description: "",
            activities: "",
            gpa: "1st",
            courses: []
          }
        ],
        volunteer: [],
        awards: [],
        languages: [],
        interests: [],
        references: []
      }
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

<style scoped lang="scss">

</style>
