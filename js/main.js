$(document).ready(function() {
    let countTick = 0;

    let counter = {
        prevItem: '',
        curItem: ''
    };

    $('.block').on('click', function () {
        let id = this.id;
        console.log(id);
        showImg(id);
        registerClick(id);
    });

    function tick() {
        countTick++;
    }

    function showImg(item) {
        $('#' + item + ' img').show();
    }

    function hideImg() {
        $('#' + counter.prevItem + ' img').hide();
        $('#' + counter.curItem + ' img').hide();
    }

    function hideBlock() {
        let item1 = counter.prevItem;
        let item2 = counter.curItem;
        setTimeout(() => {
            $('#' + item1).hide();
            $('#' + item2).hide();
        }, 1000);
    }

    function registerClick(item) {
        if (counter.prevItem === '') {
            counter.prevItem = item;
        } else {
            counter.curItem = item;
        }

        if (counter.prevItem !== '' && counter.curItem !== '') {
            compareItem();
        }
    }

    function compareItem() {
        if (counter.prevItem[3] === counter.curItem[3]
            && counter.prevItem[4] !== counter.curItem[4]) {
            alert('Чудово, так тримати');
            hideBlock();
            tick();
        } else {
            hideImg();
            alert('Подумай краще');
            tick()
        }
        nullifyCounter();
    }

    function nullifyCounter() {
        counter.prevItem = '';
        counter.curItem = '';
        console.log(counter);
    }

    setInterval(() => {
        $('input').val(`${countTick}`);
    },500);
});