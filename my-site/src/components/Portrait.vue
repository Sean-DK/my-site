<template>
    <div class='portrait'>
        <img id='image' src='https://firebasestorage.googleapis.com/v0/b/my-site-e8840.appspot.com/o/portrait.png?alt=media&token=53952428-7178-4b92-8937-d3480ac82255'/>
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
/* Mobile */
@media only screen and (min-device-width : 300px) and (max-device-width : 599px) {
.portrait
{
    text-align: center;
    height: 33%;
    left: 0;
    margin: auto;
    position: absolute;
    right: 0;
    top: 0;
    width: 100%;
}

#image 
{
    -webkit-border-radius: 100%;
    -moz-border-radius: 100%;
    border: #fff solid 4px;
    border-radius: 100%;
    box-shadow: #c0c0c0 0px 0px 4px;
    margin-top: 3vh;
    height: 57%;
    width: 33%;
}

#name
{
    color: #fff;
    font-size: 3vh;
    font-weight: normal;
    padding-top: 1.1vh;
}

#subtitle
{
    color: #ccc;
    font-size: 2vh;
    padding-top: 0.8vh;
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
}

/* Tablet */
@media only screen and (min-device-width : 600px) and (max-device-width : 999px) {
.portrait
{
    text-align: center;
    height: 33%;
    left: 0;
    margin: auto;
    position: absolute;
    right: 0;
    top: 0;
    width: 100%;
}

#image 
{
    -webkit-border-radius: 100%;
    -moz-border-radius: 100%;
    border: #fff solid 4px;
    border-radius: 100%;
    box-shadow: #c0c0c0 0px 0px 4px;
    margin-top: 3vh;
    height: 57%;
    width: 33%;
}

#name
{
    color: #fff;
    font-size: 2.5vh;
    font-weight: normal;
    padding-top: 1.1vh;
}

#subtitle
{
    color: #ccc;
    font-size: 1.3vh;
    padding-top: 0.8vh;
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
}

/* Laptop */
@media only screen and (min-device-width : 1000px) and (max-device-width : 1399px) {
.portrait
{
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
    font-size: 2.5vw;
    font-weight: normal;
    padding-top: 1.1vw;
}

#subtitle
{
    color: #ccc;
    font-size: 1.3vw;
    padding-top: 0.8vw;
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
}

/* Small Desktop */
@media only screen and (min-device-width : 1400px) and (max-device-width : 1599px) {
.portrait
{
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
    font-size: 2.5vw;
    font-weight: normal;
    padding-top: 1.1vw;
}

#subtitle
{
    color: #ccc;
    font-size: 1.4vw;
    padding-top: 0.8vw;
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
}

/* Large Desktop */
@media only screen and (min-device-width : 1600px) and (max-device-width : 10000px) {
.portrait
{
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
    font-size: 2.5vw;
    font-weight: normal;
    padding-top: 1.1vw;
}

#subtitle
{
    color: #ccc;
    font-size: 1.4vw;
    padding-top: 0.8vw;
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
}

/* Special Cases */
/* @media only screen and (min-device-width : ???) and (max-device-width : ???) {} */
</style>