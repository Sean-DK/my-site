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
                v-bind:icon='link.icon'
            ></li>
            <li
                is="SubList"
                v-for='sublist in this.sublists'
                v-bind:key='sublist.id'
                v-bind:text='sublist.text'
                v-bind:color='sublist.color'
                v-bind:icon='sublist.icon'
                v-bind:elements='sublist.el'
            ></li>
            <li
                is='ExternalLink'
                v-for='link in this.links2'
                v-bind:key='link.id'
                v-bind:text='link.text'
                v-bind:dest='link.dest'
                v-bind:color='link.color'
                v-bind:icon='link.icon'
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
                    icon: 'fas fa-file-pdf'
                },
                {
                    id: 2,
                    text: 'LinkedIn',
                    dest: '',
                    color: '#0077b5',
                    icon: 'fab fa-linkedin'
                }
            ],
            links2: [
                {
                    id: 3,
                    text: 'PCS Bio',
                    dest: 'https://www.palittoconsulting.com/team_members/sean-gaffney/',
                    color: '#2384B7',
                    icon: 'fas fa-user-tie'
                }
            ],
            sublists: [
                {
                    id: 4,
                    text: 'Email',
                    color: '#ea4335',
                    icon: 'fas fa-envelope',
                    el: [
                        {
                            id: 1,
                            type: 'Clipboard',
                            text: 'Copy to clipboard',
                            dest: 'seang@palittoconsulting.com',
                            color: '#ea4335',
                            icon: 'far fa-copy',
                            fontSize: '32px'
                        },
                        {
                            id: 2,
                            type: 'ExternalLink',
                            text: 'Send email',
                            dest: 'mailto:seang@palittoconsulting.com',
                            color: '#ea4335',
                            icon: 'fas fa-share',
                            fontSize: '32px'
                        }
                    ]
                }
            ]
        }
    }
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