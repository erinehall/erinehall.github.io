<template>
    <div class="resume-item-header">
        <h3 class="d-flex align-center">
            <template v-if="icon">
                <v-icon :icon="icon" start class="mr-2" />
            </template>
            {{ company ? `${company} — ${title}` : title }}
        </h3>
        <span class="date-location text-medium-emphasis text-body-1">
            <template v-if="location">{{ location }} | </template>{{ date }}
        </span>
    </div>
</template>

<script setup lang="ts">
interface Props {
    title: string
    company?: string
    date: string
    location?: string
    icon?: string
}
const props = defineProps<Props>()
</script>