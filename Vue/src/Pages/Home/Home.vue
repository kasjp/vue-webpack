<template>
  <div>
    <BaseContainer>
      <HelloVue />
    </BaseContainer>
  </div>
</template>

<script>
import HelloVue from "@Components/Shared/HelloVue.vue";
export default {
  name: "DashboardMain",
  components: {
    HelloVue
  },
  data: () => {
    return {
      hello: "hello vue!"
    };
  }
};
</script>