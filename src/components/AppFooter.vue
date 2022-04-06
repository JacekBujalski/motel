<template>
    <v-footer padless dark bottom>
        <v-col
            class="text-center"
            cols="12"
        >
            Copyright &copy; {{ new Date().getFullYear() }} — <strong>Pokoje Amber</strong>
        </v-col>
    </v-footer>
</template>

<script>
export default {
    name: "AppFooter",
    data: () => ({
        icons: [
            'mdi-facebook',
            'mdi-twitter',
            'mdi-linkedin',
            'mdi-instagram',
        ],
    }),
}
</script>

<style scoped>

</style>