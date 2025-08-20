<template>
    <div class="resume-item-header">
        <h3 class="d-flex align-center wrap">
            <template v-if="icon">
                <div class="role-badge mr-2">
                    <v-icon :icon="icon" size="16" color="primary" />
                </div>
            </template>
            {{ company ? `${company} — ${title}` : title }}
        </h3>

        <p v-if="subtitle" class="text-medium-emphasis text-body-2 mt-1 wrap">
            {{ subtitle }}
        </p>

        <span class="date-location text-medium-emphasis text-body-1">
            <template v-if="location">{{ location }}<span v-if="date"> | </span></template>
            <template v-if="date">
                <v-chip v-if="dateChip" size="small" color="secondary" variant="tonal" rounded="pill" class="ml-1">
                    {{ date }}
                </v-chip>
                <template v-else>{{ date }}</template>
            </template>
        </span>
    </div>
</template>

<script setup lang="ts">
interface Props {
    title: string
    company?: string
    date?: string
    location?: string
    icon?: string
    subtitle?: string
    dateChip?: boolean
}
defineProps<Props>()
</script>

<style scoped>
.wrap {
    white-space: normal;
    overflow-wrap: anywhere;
    word-break: break-word;
}
</style>
