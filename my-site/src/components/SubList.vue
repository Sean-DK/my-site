<template>
    <div class='sub-list' :style="cssProps">
        <a v-on:click='show = !show'>
            <i :class=this.icon></i>
            {{ text }}
        </a>
        <transition name="fade">
        <ul v-if='show'>
            <li
                v-for='el in this.elements'
                v-bind:is='el.type'
                v-bind:key='el.id'
                v-bind:text='el.text'
                v-bind:dest='el.dest'
                v-bind:color='el.color'
                v-bind:icon='el.icon'
                v-bind:fontSize='el.fontSize'
            ></li>
        </ul>
        </transition>
    </div>
</template>

<script>
import ExternalLink from './ExternalLink.vue'
import Clipboard from './Clipboard.vue'

export default {
    name: 'SubList',
    components: 
    {
        ExternalLink,
        Clipboard
    },
    props:
    {
        text: String,
        color: String,
        icon: String,
        fontSize: {
            type: String,
            default: '2vw'
        },
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
                '--hover-color': this.color,
                '--font-size': this.fontSize
            }
        }
    }
}
</script>

<style scoped>
/* Mobile */
@media only screen and (min-device-width : 300px) and (max-device-width : 599px) {
.sub-list
{
    max-height: 1000px;
    overflow: hidden;
    margin: auto;
    text-align: left;
    color: #555;
    font-size: 2.5vh;
    margin-left: 50px;
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
    background-color: var(--hover-color);
    cursor: pointer;
}

ul
{
    margin-top: 10px;
    margin-left: -90px;
}

.fade-enter-active, .fade-leave-active {
    transition: all 0.3s;
}

.fade-enter, .fade-leave-to {
    transform: translateX(-20px);
    max-height: 0px;
    opacity: 0;
}

.fade-enter-to, .fade-leave {
    max-height: 1000px;
    opacity: 1;
}
}

/* Tablet */
@media only screen and (min-device-width : 600px) and (max-device-width : 999px) {
.sub-list
{
    max-height: 1000px;
    overflow: hidden;
    margin: auto;
    text-align: left;
    color: #555;
    font-size: 2.5vh;
    margin-left: 100px;
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
    background-color: var(--hover-color);
    cursor: pointer;
}

ul
{
    margin-top: 10px;
    margin-left: -90px;
}

.fade-enter-active, .fade-leave-active {
    transition: all 0.3s;
}

.fade-enter, .fade-leave-to {
    transform: translateX(-20px);
    max-height: 0px;
    opacity: 0;
}

.fade-enter-to, .fade-leave {
    max-height: 1000px;
    opacity: 1;
}
}

/* Laptop */
@media only screen and (min-device-width : 1000px) and (max-device-width : 1399px) {
.sub-list
{
    max-height: 1000px;
    overflow: hidden;
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
    background-color: var(--hover-color);
    cursor: pointer;
}

ul
{
    margin-top: 10px;
    margin-left: -90px;
}

.fade-enter-active, .fade-leave-active {
    transition: all 0.3s;
}

.fade-enter, .fade-leave-to {
    transform: translateX(-20px);
    max-height: 0px;
    opacity: 0;
}

.fade-enter-to, .fade-leave {
    max-height: 1000px;
    opacity: 1;
}
}

/* Small Desktop */
@media only screen and (min-device-width : 1400px) and (max-device-width : 1599px) {
.sub-list
{
    max-height: 1000px;
    overflow: hidden;
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
    background-color: var(--hover-color);
    cursor: pointer;
}

ul
{
    margin-top: 10px;
    margin-left: -90px;
}

.fade-enter-active, .fade-leave-active {
    transition: all 0.3s;
}

.fade-enter, .fade-leave-to {
    transform: translateX(-20px);
    max-height: 0px;
    opacity: 0;
}

.fade-enter-to, .fade-leave {
    max-height: 1000px;
    opacity: 1;
}
}

/* Large Desktop */
@media only screen and (min-device-width : 1600px) and (max-device-width : 10000px) {
.sub-list
{
    max-height: 1000px;
    overflow: hidden;
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
    background-color: var(--hover-color);
    cursor: pointer;
}

ul
{
    margin-top: 10px;
    margin-left: -90px;
}

.fade-enter-active, .fade-leave-active {
    transition: all 0.3s;
}

.fade-enter, .fade-leave-to {
    transform: translateX(-20px);
    max-height: 0px;
    opacity: 0;
}

.fade-enter-to, .fade-leave {
    max-height: 1000px;
    opacity: 1;
}
}

/* Special Cases */
/* @media only screen and (min-device-width : ???) and (max-device-width : ???) {} */
</style>