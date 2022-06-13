<template>
    <div>
        <carousel-main/>
        <rooms/>
        <contact-form/>
    </div>
</template>

<script>

import CarouselMain from "@/components/CarouselMain";
import Rooms from "@/components/RoomsList";
import ContactForm from "@/components/ContactForm";

export default {
    name: 'Home',

    components: {
        ContactForm,
        Rooms,
        CarouselMain
    },
}
</script>
