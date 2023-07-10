<script setup lang='ts'>
// findone doesnt work?
const { data } = await useAsyncData('home', () => queryContent('/blog').findOne())
// Find works
// const { data } = await useAsyncData('home', () => queryContent('/blog').find())
</script>

<template>
  <main>
    <h1>This is a test</h1>
    <pre>
    {{ data }}
  </pre>
  </main>
</template>
