<template>
  <div class="topics">
      <div>
          Topics:
          <div v-for="topic in topics" :key="topic.id">
            <div>{{topic.title}}</div>
            <button @click="removeTopic(topic.id)">Delete this topic</button>
          </div>
      </div>
      <form>
          <div>
            <label for="register">Create a topic:</label> 
            <input type="text" name="register" v-model="topicTitle">
        </div>
        <button type="button" @click="addTopic(topicTitle)">Add topic</button>
      </form>
  </div>
</template>

<script>
// @ is an alias to /src
import axios from "axios";

export default {
  name: "topics",
  data: () => ({
    topics: [],
    topicTitle: ""
  }),
  created() {
    this.getTopics();
  },
  methods: {
    getTopics: function() {
      axios
        .get("http://localhost:3000/topics")
        .then(({ data }) => (this.topics = data));
    },
    addTopic: function(title) {
      axios
        .post("http://localhost:3000/topics", { title })
        .then(() => this.getTopics());
    },
    removeTopic: function(id) {
      axios
        .delete(`http://localhost:3000/topics/${id}`)
        .then(() => this.getTopics());
    }
  }
};
</script>
