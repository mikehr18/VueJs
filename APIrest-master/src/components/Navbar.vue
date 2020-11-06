<template>
  <b-navbar color="indigo" dark>
    <b-navbar-brand >
      Navbar
    </b-navbar-brand>
    <b-navbar-toggler>
      <b-navbar-nav>
        <b-nav-item href="#" active>Home</b-nav-item>
        <b-nav-item href="#">Features</b-nav-item>
        <b-nav-item href="#">Pricing</b-nav-item>
        <b-dropdown tag="li" class="nav-item">
          <b-dropdown-toggle tag="a" navLink color="indigo" slot="toggle" waves-fixed>Dropdown</b-dropdown-toggle>
          <b-dropdown-menu>
            <b-dropdown-item>Action</b-dropdown-item>
            <b-dropdown-item>Another action</b-dropdown-item>
            <b-dropdown-item>Something else here</b-dropdown-item>
          </b-dropdown-menu>
        </b-dropdown>
      </b-navbar-nav>
      <form>
        <b-input type="text" class="text-white" placeholder="Search" aria-label="Search" label navInput waves waves-fixed/>
      </form>
    </b-navbar-toggler>
  </b-navbar>
</template>
<script>
  export default {
    name: 'NavbarPage',

  }
</script>

