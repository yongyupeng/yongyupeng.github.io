// 請 jQuery 抓 button 元件，並且設定當 click 事件發生後，要執行的程式碼
$('button').on('click', function() {
    // 輸入花費
    var cost = $('#cost').val()
        // 輸入付出的金額
    var pay = $('#pay').val()

    var change = Number(pay - cost)

    var thousand = parseInt(change / 1000)

    var five_h = parseInt((change % 1000) / 500)

    var hundred = parseInt((change % 500) / 100)

    var fifty = parseInt((change % 100) / 50)

    var ten = parseInt((change % 50) / 10)

    var five = parseInt((change % 10) / 5)

    var one = parseInt((change % 5) / 1)

    $('#result1').val(change)

    $('#result2').val(thousand)

    $('#result3').val(five_h)

    $('#result4').val(hundred)

    $('#result5').val(fifty)

    $('#result6').val(ten)

    $('#result7').val(five)

    $('#result8').val(one)

})
