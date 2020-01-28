<template>
    <div class='sub-list' :style="cssProps">
        <a v-on:click='show = !show'>
            {{ text }}
        </a>
        <ul v-if='show'>
            <li
                v-for='el in this.elements'
                v-bind:is='el.type'
                v-bind:key='el.id'
                v-bind:text='el.text'
                v-bind:dest='el.dest'
                v-bind:color='el.color'
            ></li>
        </ul>
    </div>
</template>

<script>
import ExternalLink from './ExternalLink.vue'

export default {
    name: 'SubList',
    components: 
    {
        ExternalLink
    },
    props:
    {
        text: String,
        color: String,
        elements: Array
    },
    data: function () {
        return {
            show: false
        }
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

ul
{
    margin-top: 10px;
    margin-left: -90px;
}
</style>