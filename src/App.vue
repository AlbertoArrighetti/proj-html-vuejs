<script>
// store
import { store } from './store';

// components
import navBar from './components/navBar.vue';
import  mainContent from './components/mainContent.vue';
import footerContent from './components/footer.vue';

export default {
  components: {
    navBar,
    mainContent,
    footerContent,
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
    <footerContent></footerContent>
</template>

<script lang="scss">

</script>