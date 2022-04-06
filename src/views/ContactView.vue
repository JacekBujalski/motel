<template>
    <div>
        <map-comp/>
        <contact-tiles/>
        <contact-form/>
    </div>
</template>


<script>
import MapComp from "@/components/Map";
import ContactTiles from "@/components/ContactTiles";
import ContactForm from "@/components/ContactForm";

export default {
    name: "Contact",
    components: {ContactForm, ContactTiles, MapComp},
}

</script>

<style scoped>


</style>