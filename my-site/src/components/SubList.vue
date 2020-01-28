<template>
    <div class='sub-list' :style="cssProps">
        <a>
            {{ text }}
        </a>
    </div>
</template>

<script>
export default {
    name: 'SubList',
    props:
    {
        text: String,
        color: String
    },
    computed: {
        cssProps() { 
            return {
                '--hover-color': this.color
            }
        }
    }
}
</script>

<style scoped>
.sub-list
{
    width: 50%;
    margin: auto;
    text-align: left;
    font-size: 18px;
    color: #555;
    margin-bottom: 10px;
}

a
{
    color: #555;
    text-decoration: none;
    font-size: 2em;
    border-radius: 100px;
    padding-top: 5px;
    padding-bottom: 5px;
    padding-left: 20px;
    padding-right: 20px;
}

a:hover
{
    color: #fff !important;
    text-shadow: #c0c0c0 0px 0px 5px;
    background-color: var(--hover-color);
    cursor: pointer;
}
</style>