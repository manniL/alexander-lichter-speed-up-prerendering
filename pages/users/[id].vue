<script setup lang="ts">
const route = useRoute()
const id = computed(() => route.params.id)
const { data } = await useFetch(`/api/users/${id.value}`)
</script>

<template>
  <div>
    <h1>User</h1>
    <p>Name: {{ data?.name }}</p>
    <NuxtLink to="/users/">Back</NuxtLink>
  </div>
</template>