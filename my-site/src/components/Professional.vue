<template>
    <div class='professional' role='professional_info' onclick="">
        <h1>
            Professional
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
            <li
                is='ExternalLink'
                v-for='link in this.links2'
                v-bind:key='link.id'
                v-bind:id='link.id'
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
                    dest: 'https://firebasestorage.googleapis.com/v0/b/my-site-e8840.appspot.com/o/Resume.pdf?alt=media&token=6f0d5a24-d844-4989-ac40-e1a5fe9e87e2',
                    color: '#ff0000',
                    icon: 'fas fa-file-pdf'
                },
                {
                    id: 2,
                    text: 'LinkedIn',
                    dest: 'https://www.linkedin.com/in/smgaffney1/',
                    color: '#0077b5',
                    icon: 'fab fa-linkedin'
                }
            ],
            links2: [
                {
                    id: 6,
                    text: 'PCS Bio',
                    dest: 'https://www.palittoconsulting.com/team_members/sean-gaffney/',
                    color: '#2384B7',
                    icon: 'fas fa-user-tie'
                }
            ],
            sublists: [
                {
                    id: 3,
                    text: 'Email',
                    color: '#ea4335',
                    icon: 'fas fa-envelope',
                    el: [
                        {
                            id: 4,
                            type: 'Clipboard',
                            text: 'Copy to clipboard',
                            dest: 'seang@palittoconsulting.com',
                            color: '#ea4335',
                            icon: 'far fa-copy',
                            fontSize: '1.7vw'
                        },
                        {
                            id: 5,
                            type: 'ExternalLink',
                            text: 'Send email',
                            dest: 'mailto:seang@palittoconsulting.com',
                            color: '#ea4335',
                            icon: 'fas fa-share',
                            fontSize: '1.7vw'
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
.professional
{
    overflow: hidden;
    width: 100%;
    height: 6vh;
    position: absolute;
    margin: auto;
    top: 40%;
    left: 0;
    z-index: 2;
    background: url('https://firebasestorage.googleapis.com/v0/b/my-site-e8840.appspot.com/o/background.png?alt=media&token=281c8caa-dff9-483c-a2a9-c3aab131fc47');
    text-align: center;
}

h1
{
    font-size: 3vh;
    font-weight: normal;
    color: #ccc;
}

.professional:hover
{
    height: 60vh;
}
}

/* Tablet */
@media only screen and (min-device-width : 600px) and (max-device-width : 999px) {
.professional
{
    overflow: hidden;
    width: 100%;
    height: 6vh;
    position: absolute;
    margin: auto;
    top: 33%;
    left: 0;
    z-index: 1;
    background: url('https://firebasestorage.googleapis.com/v0/b/my-site-e8840.appspot.com/o/background.png?alt=media&token=281c8caa-dff9-483c-a2a9-c3aab131fc47');
    text-align: center;
}

h1
{
    font-size: 3vh;
    font-weight: normal;
    color: #ccc;
}

.professional:hover
{
    height: 60vh;
}
}

/* Laptop */
@media only screen and (min-device-width : 1000px) and (max-device-width : 1399px) {
.professional
{
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
    font-size: 3vw;
    font-weight: normal;
    color: #ccc;
}
}

/* Small Desktop */
@media only screen and (min-device-width : 1400px) and (max-device-width : 1599px) {
.professional
{
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
    font-size: 3vw;
    font-weight: normal;
    color: #ccc;
}
}

/* Large Desktop */
@media only screen and (min-device-width : 1600px) and (max-device-width : 10000px) {
.professional
{
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
    font-size: 3vw;
    font-weight: normal;
    color: #ccc;
}
}

/* Special Cases */
/* @media only screen and (min-device-width : ???) and (max-device-width : ???) {} */
</style>