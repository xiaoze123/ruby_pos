function open_pay_page() {
    window.location.href = 'pay'
}
var barcodes = ['ITEM000000', 'ITEM000001', 'ITEM000005'];
function show_number(id, status) {
    var item_sum = 0;
    var number_id = '.' + id;
    var item_number = $(number_id).val();
    var sum = 0;
    var number = 0;
    $.ajax({
        type: "get",
        url: "/show_number",
        data: {"id": id, 'status': status},
        success: function (data) {
            for (var i in data) {
                var item = data[i];
                if (data.length == 1 && item.count == 0) {
                    window.location.href = 'item_list';
                }
                if (item.count == 0) {
                    $('#tr_' + id).remove()
                }
                if (item.id == id) {
                    item_number = item.count;
                    $(number_id).val(item_number);
                }
                item_sum = get_item_sum(item, item_sum);
                var td_id = '#' + item.name;
                $(td_id).html(item_sum);
                sum = sum + item.price * item.count;
                number = number + item.count;
            }
            $('#sum').html('总计：' + sum + '(元)');
            $('#number').html('(' + number + ')');
        }

    });
}
function get_item_sum(item, item_sum) {

    for (var j = 0; j < barcodes.length; j++) {
        if (item.barcode == barcodes[j]) {
            item_sum = item.price * (item.count - parseInt(item.count / 3)) + '元' + '(原价:' + item.price * item.count + '(元))';
            break;
        }
        else {
            item_sum = item.price * item.count + '(元)';
        }
    }
    return item_sum;
}
$().ready(function(){
   show_time()
});
function show_time() {

    dateDigitToString = function (num) {
        return num < 10 ? '0' + num : num;
    };
    var currentDate = new Date()
    year = dateDigitToString(currentDate.getFullYear()),
        month = dateDigitToString(currentDate.getMonth() + 1),
        date = dateDigitToString(currentDate.getDate()),
        hour = dateDigitToString(currentDate.getHours()),
        minute = dateDigitToString(currentDate.getMinutes()),
        second = dateDigitToString(currentDate.getSeconds()),
       formattedDateString = year + '年' + month + '月' + date + '日 ' + hour + ':' + minute + ':' + second;
    console.log(formattedDateString)
    $('#show_time').html(formattedDateString);
}
