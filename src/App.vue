<script setup xmlns="http://www.w3.org/1999/html">
import { RouterLink, RouterView } from 'vue-router'
import NavBar from '@/components/NavBar.vue'
import Reassurance from '@/components/Reassurance.vue'
</script>

<template>
  <header>
<NavBar></NavBar>
<!--        <RouterLink to="/">Home</RouterLink>-->
<!--        <RouterLink to="/about">About</RouterLink>-->
  </header>

  <RouterView />

  <div class="bordereau">
   <Reassurance> </Reassurance>
  </div>
  <footer>
    boubou
  </footer>

</template>

<style scoped>
header {
  background-color: #2B2D42;
}

.bordereau {
  background-color: #2B2D42;
}

</style>



