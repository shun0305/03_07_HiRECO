// リロード時にフェードイン
$('head').append(
    '<style>.box{display:none;}'
);
$(window).on("load", function () {
    $('.box').delay(600).fadeIn("slow");
});





//  メモ作成
// var i = 1;
// function addForm() {
//     var input_data = document.createElement('input');
//     input_data.type = 'text';
//     input_data.id = 'texttitle-' + i;
//     input_data.placeholder = 'タイトル-' + i;
//     var parent = document.getElementById('memo');
//     parent.appendChild(input_data);

//     var input_data = document.createElement('textarea');
//     input_data.id = 'textarea-' + i;
//     // input_data.placeholder = '-' + i;
//     var parent = document.getElementById('memo');
//     parent.appendChild(input_data);

//     // var input_data = document.createElement('div');
//     // input_data.id = 'umemo' + i;
//     // // input_data.placeholder = '-' + i;
//     // var parent = document.getElementById('memo');
//     // parent.appendChild(input_data);

//     // var button_data = document.createElement('button');
//     // button_data.id = i;
//     // button_data.onclick = function () { deleteBtn(this); }
//     // button_data.innerHTML = '削除';
//     // var input_area = document.getElementById(input_data.id);
//     // parent.appendChild(button_data);

//     i++;
// }

//自動保存 JSON 

$('#text_area-').on('keyup', function () {
    const data = {
        title: $('#inputform_0').val(),
        content: $('#text_area-').val(),
    };
    const jsonData = JSON.stringify(data);
    localStorage.setItem('memo', jsonData)
    console.log(data)

})


// //ページ読み込み：保存データ取得表示

if (localStorage.getItem('memo')) {
    const jsonData = localStorage.getItem('memo');
    const data = JSON.parse(jsonData);
    $('#inputform_0').val(data.title);
    $('#text_area-').val(data.content);
    const target = document.getElementById("food0");
    target.textContent = '⌘' + ' ' + data.title;


}

//自動保存 JSON1
$('#text_area-1').on('keyup', function () {
    const data = {
        title: $('#inputform_1').val(),
        content: $('#text_area-1').val(),
    };
    const jsonData = JSON.stringify(data);
    localStorage.setItem('memo1', jsonData)
    console.log(data)
})

// //ページ読み込み：保存データ取得表示

if (localStorage.getItem('memo1')) {
    const jsonData = localStorage.getItem('memo1');
    const data = JSON.parse(jsonData);
    $('#inputform_1').val(data.title);
    $('#text_area-1').val(data.content);

}

//自動保存 JSON2
$('#text_area-2').on('keyup', function () {
    const data = {
        title: $('#inputform_2').val(),
        content: $('#text_area-2').val(),
    };
    const jsonData = JSON.stringify(data);
    localStorage.setItem('memo2', jsonData)
    console.log(data)
})

// //ページ読み込み：保存データ取得表示

if (localStorage.getItem('memo2')) {
    const jsonData = localStorage.getItem('memo2');
    const data = JSON.parse(jsonData);
    $('#inputform_2').val(data.title);
    $('#text_area-2').val(data.content);

}
//自動保存 JSON3
$('#text_area-3').on('keyup', function () {
    const data = {
        title: $('#inputform_3').val(),
        content: $('#text_area-3').val(),
    };
    const jsonData = JSON.stringify(data);
    localStorage.setItem('memo3', jsonData)
    console.log(data)
})

// //ページ読み込み：保存データ取得表示

if (localStorage.getItem('memo3')) {
    const jsonData = localStorage.getItem('memo3');
    const data = JSON.parse(jsonData);
    $('#inputform_3').val(data.title);
    $('#text_area-3').val(data.content);

}
//自動保存 JSON4
$('#text_area-4').on('keyup', function () {
    const data = {
        title: $('#inputform_4').val(),
        content: $('#text_area-4').val(),
    };
    const jsonData = JSON.stringify(data);
    localStorage.setItem('memo4', jsonData)
    console.log(data)
})

// //ページ読み込み：保存データ取得表示

if (localStorage.getItem('memo4')) {
    const jsonData = localStorage.getItem('memo4');
    const data = JSON.parse(jsonData);
    $('#inputform_4').val(data.title);
    $('#text_area-4').val(data.content);

}
//自動保存 JSON5
$('#text_area-5').on('keyup', function () {
    const data = {
        title: $('#inputform_5').val(),
        content: $('#text_area-5').val(),
    };
    const jsonData = JSON.stringify(data);
    localStorage.setItem('memo5', jsonData)
    console.log(data)
})

// //ページ読み込み：保存データ取得表示

if (localStorage.getItem('memo5')) {
    const jsonData = localStorage.getItem('memo5');
    const data = JSON.parse(jsonData);
    $('#inputform_5').val(data.title);
    $('#text_area-5').val(data.content);

}
//自動保存 JSON6
$('#text_area-6').on('keyup', function () {
    const data = {
        title: $('#inputform_6').val(),
        content: $('#text_area-6').val(),
    };
    const jsonData = JSON.stringify(data);
    localStorage.setItem('memo6', jsonData)
    console.log(data)
})

// //ページ読み込み：保存データ取得表示

if (localStorage.getItem('memo6')) {
    const jsonData = localStorage.getItem('memo6');
    const data = JSON.parse(jsonData);
    $('#inputform_6').val(data.title);
    $('#text_area-6').val(data.content);

}
//自動保存 JSON7
$('#text_area-7').on('keyup', function () {
    const data = {
        title: $('#inputform_7').val(),
        content: $('#text_area-7').val(),
    };
    const jsonData = JSON.stringify(data);
    localStorage.setItem('memo7', jsonData)
    console.log(data)
})

// //ページ読み込み：保存データ取得表示

if (localStorage.getItem('memo7')) {
    const jsonData = localStorage.getItem('memo7');
    const data = JSON.parse(jsonData);
    $('#inputform_7').val(data.title);
    $('#text_area-7').val(data.content);

}
//メモ追加機能
// window.addEventListener('DOMContentLoaded', () => {
//     document.querySelector('#add').addEventListener('click', (e) => {
//         var f = document.querySelector('.f');
//         var cln = f.cloneNode(true);
//         var i = cln.querySelector('input');
//         var j = [...document.querySelectorAll('.f')].slice(-1)[0].querySelector('input');
//         var num = parseInt(j.id.match(/_(\d+)/)[1]) + 1;
//         i.id = "inputform_" + num;
//         i.placeholder = "タイトル";
//         f.parentNode.appendChild(cln);

//     });
// document.addEventListener('click', (e) => {
//     if (e.target.classList.contains('del')) {
//         var f = e.target.closest('form');
//         f.parentNode.removeChild(f);
//     }
// });
// });


$('#book_area-').on('keyup', function () {
    const data = {
        title: $('#bookform_0').val(),
        content: $('#book_area-').val(),
    };
    const jsonData = JSON.stringify(data);
    localStorage.setItem('book', jsonData)
    console.log(data)

})


// //ページ読み込み：保存データ取得表示

if (localStorage.getItem('book')) {
    const jsonData = localStorage.getItem('book');
    const data = JSON.parse(jsonData);
    $('#bookform_0').val(data.title);
    $('#book_area-').val(data.content);


}
$('#book_area-1').on('keyup', function () {
    const data = {
        title: $('#bookform_1').val(),
        content: $('#book_area-1').val(),
    };
    const jsonData = JSON.stringify(data);
    localStorage.setItem('book1', jsonData)
    console.log(data)

})


// //ページ読み込み：保存データ取得表示

if (localStorage.getItem('book1')) {
    const jsonData = localStorage.getItem('book1');
    const data = JSON.parse(jsonData);
    $('#bookform_1').val(data.title);
    $('#book_area-1').val(data.content);


}
$('#book_area-2').on('keyup', function () {
    const data = {
        title: $('#bookform_2').val(),
        content: $('#book_area-2').val(),
    };
    const jsonData = JSON.stringify(data);
    localStorage.setItem('book2', jsonData)
    console.log(data)

})


// //ページ読み込み：保存データ取得表示

if (localStorage.getItem('book2')) {
    const jsonData = localStorage.getItem('book2');
    const data = JSON.parse(jsonData);
    $('#bookform_2').val(data.title);
    $('#book_area-2').val(data.content);


}
$('#book_area-3').on('keyup', function () {
    const data = {
        title: $('#bookform_3').val(),
        content: $('#book_area-3').val(),
    };
    const jsonData = JSON.stringify(data);
    localStorage.setItem('book3', jsonData)
    console.log(data)

})


// //ページ読み込み：保存データ取得表示

if (localStorage.getItem('book3')) {
    const jsonData = localStorage.getItem('book3');
    const data = JSON.parse(jsonData);
    $('#bookform_3').val(data.title);
    $('#book_area-3').val(data.content);


}
$('#book_area-4').on('keyup', function () {
    const data = {
        title: $('#bookform_4').val(),
        content: $('#book_area-4').val(),
    };
    const jsonData = JSON.stringify(data);
    localStorage.setItem('book4', jsonData)
    console.log(data)

})


// //ページ読み込み：保存データ取得表示

if (localStorage.getItem('book4')) {
    const jsonData = localStorage.getItem('book4');
    const data = JSON.parse(jsonData);
    $('#bookform_4').val(data.title);
    $('#book_area-4').val(data.content);


}
$('#book_area-5').on('keyup', function () {
    const data = {
        title: $('#bookform_5').val(),
        content: $('#book_area-5').val(),
    };
    const jsonData = JSON.stringify(data);
    localStorage.setItem('book5', jsonData)
    console.log(data)

})


// //ページ読み込み：保存データ取得表示

if (localStorage.getItem('book5')) {
    const jsonData = localStorage.getItem('book5');
    const data = JSON.parse(jsonData);
    $('#bookform_5').val(data.title);
    $('#book_area-5').val(data.content);


}
$('#book_area-').on('keyup', function () {
    const data = {
        title: $('#bookform_6').val(),
        content: $('#book_area-6').val(),
    };
    const jsonData = JSON.stringify(data);
    localStorage.setItem('book6', jsonData)
    console.log(data)

})


// //ページ読み込み：保存データ取得表示

if (localStorage.getItem('book6')) {
    const jsonData = localStorage.getItem('book6');
    const data = JSON.parse(jsonData);
    $('#bookform_6').val(data.title);
    $('#book_area-6').val(data.content);


}
$('#book_area-7').on('keyup', function () {
    const data = {
        title: $('#bookform_7').val(),
        content: $('#book_area-7').val(),
    };
    const jsonData = JSON.stringify(data);
    localStorage.setItem('book7', jsonData)
    console.log(data)

})


// //ページ読み込み：保存データ取得表示

if (localStorage.getItem('book7')) {
    const jsonData = localStorage.getItem('book7');
    const data = JSON.parse(jsonData);
    $('#bookform_7').val(data.title);
    $('#book_area-7').val(data.content);


}
$('#movie_area-').on('keyup', function () {
    const data = {
        title: $('#movieform_0').val(),
        content: $('#movie_area-').val(),
    };
    const jsonData = JSON.stringify(data);
    localStorage.setItem('movie', jsonData)
    console.log(data)

})


// //ページ読み込み：保存データ取得表示

if (localStorage.getItem('movie')) {
    const jsonData = localStorage.getItem('movie');
    const data = JSON.parse(jsonData);
    $('#movieform_0').val(data.title);
    $('#movie_area-').val(data.content);


}
$('#movie_area-1').on('keyup', function () {
    const data = {
        title: $('#movieform_1').val(),
        content: $('#movie_area-1').val(),
    };
    const jsonData = JSON.stringify(data);
    localStorage.setItem('movie1', jsonData)
    console.log(data)

})


// //ページ読み込み：保存データ取得表示

if (localStorage.getItem('movie1')) {
    const jsonData = localStorage.getItem('movie1');
    const data = JSON.parse(jsonData);
    $('#movieform_1').val(data.title);
    $('#movie_area-1').val(data.content);


}
$('#movie_area-2').on('keyup', function () {
    const data = {
        title: $('#movieform_2').val(),
        content: $('#movie_area-2').val(),
    };
    const jsonData = JSON.stringify(data);
    localStorage.setItem('movie2', jsonData)
    console.log(data)

})


// //ページ読み込み：保存データ取得表示

if (localStorage.getItem('bmovie2')) {
    const jsonData = localStorage.getItem('movie2');
    const data = JSON.parse(jsonData);
    $('#movie_2').val(data.title);
    $('#movie_area-2').val(data.content);


}
$('#movie_area-3').on('keyup', function () {
    const data = {
        title: $('#movieform_3').val(),
        content: $('#movie_area-3').val(),
    };
    const jsonData = JSON.stringify(data);
    localStorage.setItem('movie3', jsonData)
    console.log(data)

})


// //ページ読み込み：保存データ取得表示

if (localStorage.getItem('movie3')) {
    const jsonData = localStorage.getItem('movie3');
    const data = JSON.parse(jsonData);
    $('#movieform_3').val(data.title);
    $('#movie_area-3').val(data.content);


}
$('#movie_area-4').on('keyup', function () {
    const data = {
        title: $('#movieform_4').val(),
        content: $('#movie_area-4').val(),
    };
    const jsonData = JSON.stringify(data);
    localStorage.setItem('movie4', jsonData)
    console.log(data)

})


// //ページ読み込み：保存データ取得表示

if (localStorage.getItem('movie4')) {
    const jsonData = localStorage.getItem('movie4');
    const data = JSON.parse(jsonData);
    $('#movieform_4').val(data.title);
    $('#movie_area-4').val(data.content);


}
$('#movie_area-5').on('keyup', function () {
    const data = {
        title: $('#movieform_5').val(),
        content: $('#movie_area-5').val(),
    };
    const jsonData = JSON.stringify(data);
    localStorage.setItem('movie5', jsonData)
    console.log(data)

})


// //ページ読み込み：保存データ取得表示

if (localStorage.getItem('movie5')) {
    const jsonData = localStorage.getItem('movie5');
    const data = JSON.parse(jsonData);
    $('#movieform_5').val(data.title);
    $('#movie_area-5').val(data.content);


}
$('#movie_area-').on('keyup', function () {
    const data = {
        title: $('#movieform_6').val(),
        content: $('#movie_area-6').val(),
    };
    const jsonData = JSON.stringify(data);
    localStorage.setItem('movie6', jsonData)
    console.log(data)

})


// //ページ読み込み：保存データ取得表示

if (localStorage.getItem('movie6')) {
    const jsonData = localStorage.getItem('movie6');
    const data = JSON.parse(jsonData);
    $('#movieform_6').val(data.title);
    $('#movie_area-6').val(data.content);


}
$('#movie_area-7').on('keyup', function () {
    const data = {
        title: $('#movieform_7').val(),
        content: $('#movie_area-7').val(),
    };
    const jsonData = JSON.stringify(data);
    localStorage.setItem('movie7', jsonData)
    console.log(data)

})


// //ページ読み込み：保存データ取得表示

if (localStorage.getItem('movie7')) {
    const jsonData = localStorage.getItem('movie7');
    const data = JSON.parse(jsonData);
    $('#movieform_7').val(data.title);
    $('#movie_area-7').val(data.content);


}
