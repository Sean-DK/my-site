<template>
    <div class='personal'>
        <h1>
            Personal
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
        </ul>
    </div>
</template>

<script>
import ExternalLink from './ExternalLink.vue'
import SubList from './SubList.vue'

export default {
    name: 'Personal',
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
                    text: 'GitHub',
                    dest: 'https://github.com/Sean-DK',
                    color: '#171515',
                    icon: 'fab fa-github'
                },
                {
                    id: 2,
                    text: 'PayPal',
                    dest: 'https://www.paypal.me/smgaffney',
                    color: '#003087',
                    icon: 'fab fa-paypal'
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
                            dest: 'mail@sgaffney.me',
                            color: '#ea4335',
                            icon: 'far fa-copy',
                            fontSize: '32px'
                        },
                        {
                            id: 2,
                            type: 'ExternalLink',
                            text: 'Send email',
                            dest: 'mailto:mail@sgaffney.me',
                            color: '#ea4335',
                            icon: 'fas fa-share',
                            fontSize: '32px'
                        }
                    ]
                },
                {
                    id: 5,
                    text: 'Projects',
                    color: '#fea700',
                    icon: 'fas fa-tasks',
                    el: [
                        {
                            id: 1,
                            type: 'ExternalLink',
                            text: 'Coming Soon!',
                            dest: '',
                            color: '',
                            icon: 'fas fa-tools',
                            fontSize: '32px'
                        }
                    ]
                },
                {
                    id: 6,
                    text: 'Gaming',
                    color: '#00ff54',
                    icon: 'fas fa-gamepad',
                    el: [
                        {
                            id: 1,
                            type: 'Clipboard',
                            text: 'Discord',
                            dest: 'Sean#6407',
                            color: '#738ADB',
                            icon: 'fab fa-discord',
                            fontSize: '32px'
                        },
                        {
                            id: 2,
                            type: 'ExternalLink',
                            text: 'Steam',
                            dest: 'https://steamcommunity.com/profiles/76561198058562688/',
                            color: '#377096',
                            icon: 'fab fa-steam',
                            fontSize: '32px'
                        },
                        {
                            id: 3,
                            type: 'Clipboard',
                            text: 'Blizzard',
                            dest: 'Sean#14164',
                            color: '#0566b0 ',
                            icon: 'fab fa-battle-net',
                            fontSize: '32px'
                        },
                        {
                            id: 4,
                            type: 'ExternalLink',
                            text: '',
                            dest: 'https://osu.ppy.sh/users/3706392',
                            color: '#ff66aa',
                            fontSize: '100px'
                        }
                    ]
                }
            ]
        }
    }
}
</script>

<style scoped>
.personal
{
    border: 1px solid green;
    width: 33%;
    height: 75%;
    position: absolute;
    margin: auto;
    top: 0;
    bottom: 0;
    right: 0;
}

h1
{
    font-size: 3em;
    font-weight: normal;
    color: #ccc;
}
</style>