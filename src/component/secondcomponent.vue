<template>
    <div id="secondcomponent">
        <h2>2 page</h2>
        <a href="#">writted by {{ author }} at {{ date }}</a>
    </div>
</template>

<script>
export default {
    data () {
        return {
            author: 'wungmc',
            date: '2019.3.18'
        }
    }
}
</script>
