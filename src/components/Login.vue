<template>
  <div>
    <div class="column is-half is-offset-one-quarter">
      <b-field label="Username">
        <b-input v-model="username"></b-input>
      </b-field>
      <b-field label="Password">
        <b-input type="password" v-model="password"></b-input>
      </b-field>
      <a class="button is-info is-fullwidth" @click="login">Log in</a>
    </div>
  </div>
</template>
<script>
import auth from "./auth";
export default {
  name: 'Login',
  data: function() {
    return {
      username: "",
      password: ""
    }
  },
  methods: {
    login:  function() {
      console.log(`${this.username}, ${this.password}`);
      auth.login(this, this.username, this.password, "/");
    }
  }
}
</script>
