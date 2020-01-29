<template>
    <div class='external-link' :style="cssProps">
        <a target="_blank" :href=this.dest>
            <i :class=this.icon></i>
            {{ text }}
        </a>
    </div>
</template>

<script>
export default {
    name: 'ExternalLink',
    props:
    {
        text: String,
        dest: String,
        color: String,
        icon: String,
        fontSize: {
            type: String,
            default: '40px'
        }
    },
    computed: {
        cssProps() { 
            return {
                '--hover-color': this.color,
                '--font-size': this.fontSize
            }
        }
    }
}
</script>

<style scoped>
.external-link
{
    margin: auto;
    text-align: left;
    color: #555;
    font-size: var(--font-size);
    margin-left: 70px;
}

a
{
    color: #555;
    text-decoration: none;
    border-radius: 100px;
    padding-top: 5px;
    padding-bottom: 5px;
    padding-left: 20px;
    padding-right: 20px;
    display: inline-block;
}

a:hover
{
    color: #fff !important;
    text-shadow: #c0c0c0 0px 0px 5px;
    background-color: var(--hover-color)
}
</style>