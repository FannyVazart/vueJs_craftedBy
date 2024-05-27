<template>
  <div class="max-w-screen-xl mx-auto items-center container flex">
       <nav class="max-w-screen-xl mx-auto items-center">
          <ul class="flex md:space-x-24 md:mt-0">
            <li>
              <img alt="logo" class="logo" src="@/assets/logo_complet.svg" width="270px"/>
            </li>
            <li>
              <input type="text" id="email-adress-icon" class="bg-gray-50 border border-gray-300 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2" placeholder="Rechercher">
            </li>
            <div class="flex md:space-x-4 items-center">
              <li>
                <a href="#" class="">Sign in</a>
              </li>
              <li>
                <button id="dropdownNavbarLink" data-dropdown-toggle="dropdownNavbar" class=""><img src="@/components/icons/Menu.svg" width="35"></button>
              <!-- Dropdown menu -->
                <div id="dropdownNavbar" class="hidden bg-white text-base z-10 list-none divide-y divide-gray-100 rounded shadow my-4 w-44">
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
              <a href="#" class=""><img src="@/components/icons/cart.svg" width="40"></a>
            </li>
            <li>
              <a href="#" class=""><img src="@/components/icons/plusOne.svg" width="30"></a>
            </li>
            </div>
          </ul>
       </nav>
    </div>
</template>

<script setup>
</script>

<style scoped>
nav {
  background-color: #2B2D42;
  font-size: 20px;
  color: #FCFAFA;
  margin-top: 1rem;
  margin-bottom: 1rem;
}

</style>