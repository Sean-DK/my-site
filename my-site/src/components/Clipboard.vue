<template>
    <div class='clipboard' :style="cssProps">
        <a target="_blank" v-on:click="doCopy">
                {{ text }}
        </a>
    </div>
</template>

<script>
export default {
    name: 'Clipboard',
    props:
    {
        text: String,
        dest: String,
        color: String,
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
    },
    methods: {
        doCopy: function () {
            this.$copyText(this.$props.dest).then(function() {
                alert('Copied') // TODO: make this more graceful
            }, function () {
                alert('Error copying')
            })
        }
    }
}
</script>

<style scoped>
.clipboard
{
    width: 50%;
    margin: auto;
    text-align: left;
    color: #555;
    font-size: var(--font-size);
    margin-bottom: 10px;
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
}

a:hover
{
    color: #fff !important;
    text-shadow: #c0c0c0 0px 0px 5px;
    background-color: var(--hover-color);
    cursor: pointer;
}
</style>