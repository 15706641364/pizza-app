<template>
    <div class="row">
        <div class="col-sm-12 text-center" id="home">
            <h1 class="mb-5">欢迎大家品尝pizza!</h1>
            <h2 class="mb-5">这里有你非常喜欢的pizza!</h2>
            <button @click="goToMenu" class="btn btn-success">Let's order!</button>
        </div>
    </div>
</template>


<script>
export default {
    methods: {
        goToMenu() {
           this.$router.push({name:'menuLink'}) 
        }
    }
}
</script>
<style scoped>
#home{
    padding: 10%;
    background: url("../assets/pizza.jpg") no-repeat;
    height:85vh;
}
</style>



