<template>
    <div id="firstcomponent">
        <h2>vue start</h2>
        <a href="#">writted by {{ author }} at {{ date }}</a>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                author: 'wungmc',
                date: '2019.3.19'
            }
        }
    }

</script>
