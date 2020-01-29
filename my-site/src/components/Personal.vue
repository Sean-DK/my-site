<template>
    <div class='personal' role='personal_info' onclick="">
        <h1>
            Personal
        </h1>
        <ul>
            <li
                is='ExternalLink'
                v-for='link in this.links1'
                v-bind:key='link.id'
                v-bind:id='link.id'
                v-bind:text='link.text'
                v-bind:dest='link.dest'
                v-bind:color='link.color'
                v-bind:icon='link.icon'
            ></li>
            <li
                is="SubList"
                v-for='sublist in this.sublists'
                v-bind:key='sublist.id'
                v-bind:id='sublist.id'
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
                    id: 7,
                    text: 'GitHub',
                    dest: 'https://github.com/Sean-DK',
                    color: '#171515',
                    icon: 'fab fa-github'
                },
                {
                    id: 8,
                    text: 'PayPal',
                    dest: 'https://www.paypal.me/smgaffney',
                    color: '#003087',
                    icon: 'fab fa-paypal'
                }
            ],
            sublists: [
                {
                    id: 9,
                    text: 'Email',
                    color: '#ea4335',
                    icon: 'fas fa-envelope',
                    el: [
                        {
                            id: 10,
                            type: 'Clipboard',
                            text: 'Copy to clipboard',
                            dest: 'mail@sgaffney.me',
                            color: '#ea4335',
                            icon: 'far fa-copy',
                            fontSize: '1.7vw'
                        },
                        {
                            id: 11,
                            type: 'ExternalLink',
                            text: 'Send email',
                            dest: 'mailto:mail@sgaffney.me',
                            color: '#ea4335',
                            icon: 'fas fa-share',
                            fontSize: '1.7vw'
                        }
                    ]
                },
                {
                    id: 12,
                    text: 'Projects',
                    color: '#fea700',
                    icon: 'fas fa-tasks',
                    el: [
                        {
                            id: -1,
                            type: 'ExternalLink',
                            text: 'Coming Soon!',
                            dest: '',
                            color: '',
                            icon: 'fas fa-tools',
                            fontSize: '1.7vw'
                        }
                    ]
                },
                {
                    id: 13,
                    text: 'Stats',
                    color: '#ed713a',
                    icon: 'fas fa-trophy',
                    el: [
                        {
                            id: -1,
                            type: 'ExternalLink',
                            text: 'Coming Soon!',
                            dest: '',
                            color: '',
                            icon: 'fas fa-tools',
                            fontSize: '1.7vw'
                        }
                    ]
                },
                {
                    id: 14,
                    text: 'Gaming',
                    color: '#00ff54',
                    icon: 'fas fa-gamepad',
                    el: [
                        {
                            id: 15,
                            type: 'Clipboard',
                            text: 'Discord',
                            dest: 'Sean#6407',
                            color: '#738ADB',
                            icon: 'fab fa-discord',
                            fontSize: '1.7vw'
                        },
                        {
                            id: 16,
                            type: 'ExternalLink',
                            text: 'Steam',
                            dest: 'https://steamcommunity.com/profiles/76561198058562688/',
                            color: '#377096',
                            icon: 'fab fa-steam',
                            fontSize: '1.7vw'
                        },
                        {
                            id: 17,
                            type: 'Clipboard',
                            text: 'Blizzard',
                            dest: 'Sean#14164',
                            color: '#0566b0 ',
                            icon: 'fab fa-battle-net',
                            fontSize: '1.7vw'
                        },
                        {
                            id: -1,
                            type: 'ExternalLink',
                            text: '',
                            dest: 'https://osu.ppy.sh/users/3706392',
                            color: '#ff66aa',
                            fontSize: '5vw'
                        }
                    ]
                }
            ]
        }
    }
}
</script>

<style scoped>
/* Mobile */
@media only screen and (min-device-width : 300px) and (max-device-width : 599px) {
.personal
{
    background: url('https://firebasestorage.googleapis.com/v0/b/my-site-e8840.appspot.com/o/background.png?alt=media&token=281c8caa-dff9-483c-a2a9-c3aab131fc47');
    overflow: hidden;
    width: 100%;
    height: 6vh;
    position: absolute;
    margin: auto;
    z-index: 1;
    top: 50%;
    left: 0;
    text-align: center;
}

h1
{
    font-size: 3vh;
    font-weight: normal;
    color: #ccc;
}

.personal:hover
{
    height: 60vh;
}
}

/* Tablet */
@media only screen and (min-device-width : 600px) and (max-device-width : 999px) {
.personal
{
    overflow: hidden;
    width: 100%;
    height: 6vh;
    position: absolute;
    margin: auto;
    top: 40%;
    left: 0;
    text-align: center;
}

h1
{
    font-size: 3vh;
    font-weight: normal;
    color: #ccc;
}

.personal:hover
{
    height: 60vh;
}
}

/* Laptop */
@media only screen and (min-device-width : 1000px) and (max-device-width : 1399px) {
.personal
{
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
    font-size: 3vw;
    font-weight: normal;
    color: #ccc;
}
}

/* Small Desktop */
@media only screen and (min-device-width : 1400px) and (max-device-width : 1599px) {
.personal
{
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
    font-size: 3vw;
    font-weight: normal;
    color: #ccc;
}
}

/* Large Desktop */
@media only screen and (min-device-width : 1600px) and (max-device-width : 10000px) {
.personal
{
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
    font-size: 3vw;
    font-weight: normal;
    color: #ccc;
}
}

/* Special Cases */
/* @media only screen and (min-device-width : ???) and (max-device-width : ???) {} */
</style>