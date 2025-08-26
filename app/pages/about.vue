<template>
    <div>
    <h2>Homes</h2>
    <ul>
      <li v-for="item in data" :key="item.id">
        {{ item.title }}
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
const { $supabase } = useNuxtApp()

const { data, error } = await $supabase
  .from('homepage_sections') //bảng này ad đã định nghĩa ở superbase rồi
  .select('*') //select 1 số cột nếu muốn.
  .order('created_at', { ascending: false })
  .limit(10) //10 or số nào cũng đc

if (error) {
  console.error(error.message)
}
</script>