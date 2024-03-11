<script>
// store
import { store } from './store';

// components
import navBar from './components/navBar.vue';
import  mainContent from './components/mainContent.vue';

export default {
  components: {
    navBar,
    mainContent,
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
    <mainContent></mainContent>
</template>

<script lang="scss">

</script>