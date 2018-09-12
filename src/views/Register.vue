<template>
    <div class="register">
        <h3>Please enter your information:</h3>
        <form>
          <div>
            <label for="email">Email: </label>
            <input name="email"
              v-model.lazy="registerData.email"
              type="email"/>
          </div>
          <div>
            <label for="password">Password: </label>
            <input name="password"
              v-model.lazy="registerData.password"
              type="password"/>
          </div>
          <div>
            <label for="password">Repeat Password: </label>
            <input name="repeatPassword"
              v-model.lazy="repeatPassword"
              type="password"/>
          </div>
          <button type="button" @click="submit">Click me!</button>
        </form>
    </div>
</template>

<script>
import axios from "axios";

export default {
  name: "register",
  data: () => ({
    registerData: {
      email: "",
      password: ""
    },
    repeatPassword: ""
  }),
  methods: {
    submit: function() {
      axios
        .get("http://localhost:3000/posts")
        // eslint-disable-next-line
        .then(data => console.log(data))
    }
  }
};
</script>
