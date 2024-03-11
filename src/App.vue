<script>
// store
import { store } from './store';

// components
import navBar from './components/navBar.vue';

export default {
  components: {
    navBar,

  },
  data() {
    return {
      store,
    }
  },
}

</script>

<template>
    <navBar></navBar>
</template>

<script lang="scss">

</script>