<script setup xmlns="http://www.w3.org/1999/html">
import { RouterLink, RouterView } from 'vue-router'
import NavBar from '@/components/NavBar.vue'
import Reassurance from '@/components/Reassurance.vue'
import Footer from '@/components/Footer.vue'
</script>

<template>
  <header>
<NavBar></NavBar>
<!--        <RouterLink to="/">Home</RouterLink>-->
<!--        <RouterLink to="/about">About</RouterLink>-->
  </header>

  <main>
  <RouterView />
  </main>

  <div class="bordereau">
   <Reassurance> </Reassurance>
  </div>
  <footer>
    <Footer></Footer>
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



