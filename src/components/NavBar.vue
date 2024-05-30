<template>

    <nav class="max-w-screen-xl mx-auto items-center">
      <ul class="flex md:space-x-2 md:mt-0 justify-between">
        <li>
          <RouterLink to="/"><img alt="logo" class="logo" src="@/assets/logo_complet.svg" width="270px"/></RouterLink>
        </li>
        <li>
          <input type="text" id="email-adress-icon" class="text-indigo-950 border border-amber-500 rounded-3xl pl-5 p-2" placeholder="Rechercher">
        </li>

        <div class="flex md:space-x-4 items-center">
          <li>
            <RouterLink to="/identification"><button class="border border-b-blue-100 rounded-2xl p-1.5 pl-2.5 pr-2.5">Sign in</button></RouterLink>
          </li>
          <li>
            <button id="dropdownNavbarLink" data-dropdown-toggle="dropdownNavbar" class=""><img src="@/components/icons/Menu.svg" width="35"></button>
            <!-- Dropdown menu -->
            <div id="dropdownNavbar" class="hidden">
              <ul class="py-1" aria-labelledby="dropdownLargeButton">
                <li>
                  <a href="#" class="">Option1</a>
                </li>
                <li>
                  <a href="#" class="">Option2</a>
                </li>
                <li>
                  <a href="#" class="">Option3</a>
                </li>
              </ul>
            </div>
          </li>
          <li>
            <RouterLink to="/cart"><cart-icon></cart-icon></RouterLink>
          </li>
          <li>
            <a href="#" class=""><img src="@/components/icons/plusOne.svg" width="30"></a>
          </li>
        </div>

      </ul>
    </nav>

</template>

<script setup>
import CartIcon from '@/components/CartIcon.vue'
</script>

<style scoped>
nav {
  background-color: #2B2D42;
  font-size: 20px;
  color: #FCFAFA;
  padding-top: 1rem;
  padding-bottom: 1rem;
}

</style>