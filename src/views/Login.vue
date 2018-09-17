<template>
    <div class="register">
        <h3>Please enter your information:</h3>
        <form>
          <div>
            <label for="email">Email: </label>
            <input name="email"
              v-model.lazy="loginData.email"
              type="email"/>
          </div>
          <div>
            <label for="password">Password: </label>
            <input name="password"
              v-model.lazy="loginData.password"
              type="password"/>
          </div>
          <button type="button" @click="submit">Login</button>
        </form>
    </div>
</template>

<script>
export default {
  name: "register",
  data: () => ({
    loginData: {
      email: "",
      password: ""
    },
    repeatPassword: ""
  }),
  methods: {
    submit: function() {
      this.$router.push("topics");
    }
  }
};
</script>
