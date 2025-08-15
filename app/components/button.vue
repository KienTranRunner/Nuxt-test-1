<template>
    <NuxtLink :to="to" class="btn" :class="variant">
        {{ label }}
    </NuxtLink>
</template>

<script setup>
    defineProps({
        label: {
            type: String,
            required: true
        },
        to: {
            type: String,
            required: true
        },
        variant: {
            type: String,
            default: 'btn-primary'
        }
    })
</script>