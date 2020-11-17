// リロード時にフェードイン
$('head').append(
    '<style>.box{display:none;}'
);
$(window).on("load", function () {
    $('.box').delay(600).fadeIn("slow");
});


// 自動保存 JSON
$('#text_area').on('keyup', function () {
    const data = {
        title: $('#text').val(),
        content: $('#text_area').val(),
    };
    const jsonData = JSON.stringify(data);
    localStorage.setItem('memo', jsonData)

})

// //ページ読み込み：保存データ取得表示

if (localStorage.getItem('memo')) {
    const jsonData = localStorage.getItem('memo');
    const data = JSON.parse(jsonData);
    $('#text').val(data.title);
    $('#text_area').val(data.content);
    console.log(data)
}


