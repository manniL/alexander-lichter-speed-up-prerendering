<template>
  <h1>User Overview</h1>
  <ul>
    <li v-for="n in 1000">
      <NuxtLink :to="`/users/${n}`">To user {{ n }}</NuxtLink>
    </li>
  </ul>
</template>