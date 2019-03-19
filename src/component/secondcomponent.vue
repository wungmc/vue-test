<template>
    <div id="secondcomponent">
        <h2>2 page</h2>
        <a href="#">writted by {{ author }} at {{ date }}</a>

        <h2>豆瓣电影Top10</h2>
        <ul>
            <li v-for="article in articles" :key="article.id">
                {{ article.title }}
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    data () {
        return {
            author: 'wungmc',
            date: '2019.3.18',
            articles: []
        }
    },
    mounted: function() {
        this.$http.jsonp('https://api.douban.com/v2/movie/top250?count=10', {}, {
            headers: {

            },
            emulateJSON: true
        }).then(function(response) {
            // 处理正确的回调函数
            this.articles = response.data.subjects
        }, function(response) {
            // 处理错误的回调函数
            console.log(response)
        })
    }
}
</script>
