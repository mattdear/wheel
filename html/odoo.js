var spinResults = (function () {
    // Clone the first element and append it to the end of the list
    var list = $('#slotmachine>ul:first');
    var firstItem = list.find('li:first');
    var totalElements = $("#slotmachine>ul").children().length;
    firstItem.clone().appendTo(list);

    function moveTo(val) {
        val = -val % (totalElements*200);
        if (val > 0) val -= (totalElements*200);
        $('#slotmachine').css({
            top: val
        });
    }

    function spin(count) {
        $('#slotmachine').stop().animate({
            top: -(totalElements*200)
        }, 2000, 'linear', function () {
            if (count == 0) {
                var slot = Math.floor(Math.random() * totalElements - 1),
                    top = -slot * 200,
                    time =  (2000 * slot / totalElements);
                $(this).css({
                    top: 0
                }).animate({
                    top: top
                },time, 'easeOut');
            } else {
                $(this).css({
                    top: 0
                })
                spin(count - 1);
            };
        });
    }
    $('#slotmachine').css({
        top: 0
    }) 
    spin(4)
});
spinResults();