<template>
    <div>
        <carousel-main/>
        <rooms/>
    </div>
</template>

<script>

import CarouselMain from "@/components/CarouselMain";
import Rooms from "@/components/Rooms";

export default {
    name: 'Home',

    components: {
        Rooms,
        CarouselMain
    },
}
</script>
