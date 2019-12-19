<template>
    <div>
        <parallax>
            <!-- <img ref="img" class="img" :src="`/images/${image}`">         -->
            <img ref="img" class="img" src="../../assets/images/sans-abri.png">  
        </parallax>
    </div>
</template>

<style lang="scss" scoped>
    .img {
      width: 50%;
      height: 590px;
      object-fit: cover;
      margin: 90px 0;

      @include tablet {
        display: none;
      }
    }
</style>


<script>

import  Parallax  from 'vue-parallax'

export default {
    name: "imgBlock",
    components: {
        Parallax
    },
    // props: {
    //     image: {
    //         type: String,
    //         default: true
    //     },
    // },
    mounted() {
      const { img } = this.$refs
      // var tl = new TimelineLite() 

      // tl.to(img, 1, { y: scroll, ease:Linear.easeNone }) 

    }

}
</script>