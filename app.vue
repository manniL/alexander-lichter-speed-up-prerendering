<script setup lang="ts">
const { data } = useFetch('/api/header')
</script>

<template>
  <div>
    <header>
      <NuxtLink to="/">Home</NuxtLink> |
      <NuxtLink to="/users">User overview</NuxtLink> | {{ data?.title }}
    </header>
    <NuxtPage />
  </div>
</template>