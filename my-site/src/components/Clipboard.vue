<template>
    <div class='clipboard' :style="cssProps">
        <a target="_blank" v-on:click="doCopy" v-on:keyup.enter="doCopy" :tabindex=this.id>
            <i :class=this.icon></i>
            {{ text }}
        </a>
    </div>
</template>

<script>
export default {
    name: 'Clipboard',
    props:
    {
        id: Number,
        text: String,
        dest: String,
        color: String,
        icon: String,
        fontSize: {
            type: String,
            default: '2vw'
        }
    },
    computed: {
        cssProps() { 
            return {
                '--hover-color': this.color,
                '--font-size': this.fontSize
            }
        }
    },
    methods: {
        doCopy: function () {
            this.$copyText(this.$props.dest)
            this.$notify({type: 'success', text: 'Copied to clipboard'})
        }
    }
}
</script>

<style scoped>
/* Mobile */
@media only screen and (min-device-width : 300px) and (max-device-width : 599px) {
.clipboard
{
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

a:hover, a:focus
{
    color: #fff !important;
    text-shadow: #c0c0c0 0px 0px 5px;
    background-color: var(--hover-color);
    cursor: pointer;
}
}

/* Tablet */
@media only screen and (min-device-width : 600px) and (max-device-width : 999px) {
.clipboard
{
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

a:hover, a:focus
{
    color: #fff !important;
    text-shadow: #c0c0c0 0px 0px 5px;
    background-color: var(--hover-color);
    cursor: pointer;
}
}

/* Laptop */
@media only screen and (min-device-width : 1000px) and (max-device-width : 1399px) {
.clipboard
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

a:hover, a:focus
{
    color: #fff !important;
    text-shadow: #c0c0c0 0px 0px 5px;
    background-color: var(--hover-color);
    cursor: pointer;
}
}

/* Small Desktop */
@media only screen and (min-device-width : 1400px) and (max-device-width : 1599px) {
.clipboard
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

a:hover, a:focus
{
    color: #fff !important;
    text-shadow: #c0c0c0 0px 0px 5px;
    background-color: var(--hover-color);
    cursor: pointer;
}
}

/* Large Desktop */
@media only screen and (min-device-width : 1600px) and (max-device-width : 10000px) {
.clipboard
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

a:hover, a:focus
{
    color: #fff !important;
    text-shadow: #c0c0c0 0px 0px 5px;
    background-color: var(--hover-color);
    cursor: pointer;
}
}

/* Special Cases */
/* @media only screen and (min-device-width : ???) and (max-device-width : ???) {} */
</style>