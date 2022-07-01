$(function() {
    function getNewsList() {
        $.get()
    }
    getNewsList('http://www.liulongbin.top:3006/api/news', function(res) {
        if (res.status !== 200) {
            return alert('OK')
        } else {
            console.log(res);
            for (var i = 0; i < res.data.length; i++) {
                // 把每一项的 tags 属性，从字符串改造成字符串的数组
                res.data[i].tags = res.data[i].tags.split(',')
            }
            var htmlStr = template('tpl-news', res)
            $('#news-list').html(htmlStr)

        }
    })
})