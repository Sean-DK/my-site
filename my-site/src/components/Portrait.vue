<template>
    <div class='portrait'>
        <img id='image' src='../assets/portrait.png'/>
        <div id='name'>
            Sean Gaffney
        </div>
        <div id='subtitle'>
            Consultant at 
            <a target='_blank' rel="noopener noreferrer" href='https://www.palittoconsulting.com/'> 
                Palitto Consulting Services
            </a>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Portrait'
}
</script>

<style scoped>
.portrait
{
    border: 1px solid red;
    bottom: 0;
    height: 50%;
    left: 0;
    margin: auto;
    position: absolute;
    right: 0;
    top: 0;
    width: 33%;
}

#image 
{
    -webkit-border-radius: 100%;
    -moz-border-radius: 100%;
    border: #fff solid 4px;
    border-radius: 100%;
    box-shadow: #c0c0c0 0px 0px 4px;
    height: 66.6%;
    width: 56.8%;
}

#name
{
    color: #fff;
    font-size: 40px;
    font-weight: normal;
    padding-top: 0.5em;
}

#subtitle
{
    color: #ccc;
    font-size: 1.4em;
    padding-top: 0.5em;
}

#subtitle a
{
    color: #ccc;
    text-decoration: none;
}

#subtitle a:hover
{
    text-decoration: none;
}
</style>