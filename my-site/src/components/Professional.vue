<template>
    <div class='professional'>
        <h1>
            Professional
        </h1>
        <ul>
            <li
                is='ExternalLink'
                v-for='link in this.links1'
                v-bind:key='link.id'
                v-bind:text='link.text'
                v-bind:dest='link.dest'
                v-bind:color='link.color'
            ></li>
            <li
                is="SubList"
                v-for='sublist in this.sublists'
                v-bind:key='sublist.id'
                v-bind:text='sublist.text'
                v-bind:color='sublist.color'
            ></li>
            <li
                is='ExternalLink'
                v-for='link in this.links2'
                v-bind:key='link.id'
                v-bind:text='link.text'
                v-bind:dest='link.dest'
                v-bind:color='link.color'
            ></li>
        </ul>
    </div>
</template>

<script>
import ExternalLink from './ExternalLink.vue'
import SubList from './SubList.vue'

export default {
    name: 'Professional',
    components:
    {
        ExternalLink,
        SubList
    },
    data() {
        return {
            links1: [
                {
                    id: 1,
                    text: 'Resume',
                    dest: '',
                    color: '#ff0000',
                },
                {
                    id: 2,
                    text: 'LinkedIn',
                    dest: 'mailto:seang@palittoconsulting.com',
                    color: '#0077b5'
                }
            ],
            links2: [
                {
                    id: 1,
                    text: 'PCS Bio',
                    dest: 'https://www.palittoconsulting.com/team_members/sean-gaffney/',
                    color: '#2384B7'
                }
            ],
            sublists: [
                {
                    id: 1,
                    text: 'Email',
                    color: '#ea4335'
                }
            ]
        }
    },
}
</script>

<style scoped>
.professional
{
    border: 1px solid blue;
    width: 33%;
    height: 75%;
    position: absolute;
    margin: auto;
    top: 0;
    bottom: 0;
    left: 0;
}

h1
{
    font-size: 3em;
    font-weight: normal;
    color: #ccc;
}
</style>