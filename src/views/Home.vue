<template>
<div class="home">
<div v-if="checkRoles(['USER'])">
    Hello User
</div>
<div v-if="checkRoles(['ADMIN'])">
   Hello Admin
</div>
</div>

</template>

<script>
// @ is an alias to /src
import auth from '@/components/auth.js';

export default {
  name: "Home",
  components: {
   // HelloWorld,
  },
      methods: {
    checkRoles: function(roles) {
      return auth.hasAnyOf(roles);}
    }

};
</script>
