<template>
    <div id="PageBgWrap">
        <!-- 星空背景组件 -->
        <canvas id="canvas" ref="canvas"></canvas>
    </div>
</template>

<script>
    export default {
        data(){
            return {
                canvas:this.$refs.canvas,
                canvas2:this.$refs.canvas
            }
        },
        created(){
            
        },
        mounted(){
            console.log(this.canvas)
        }
    }
</script>

<style scoped>
    #PageBgWrap{
        width: 100%;
        height:100vh;
        background-color: #060e1b;
        overflow: hidden;
    }
    /* #PageBgWrap #canvas{

    } */
</style>