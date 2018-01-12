$(document).ready(function() {
    // event at block welcome
    let nameUser;
    
    $('#newGame').on('click', function () {
        nameUser = $('#name').val();

        if(nameUser !== "") {
            $('#welcome').hide();
            $('#wrapper').show();
            StartStop();

        } else alert('Введіть Ваше імʼя');
    });

    // code for game
    let countTick = 0;
    let successTick = 0;

    let counter = {
        prevItem: '',
        curItem: ''
    };

    $('.block').on('click', function () {
        let id = this.id;
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
            successfulTick();
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
    }
    
    function successfulTick() {
        successTick++;
        if(successTick == 8) {
            console.log('game over');
            congratuation();
        }
    }

    // view congratuation modal window
    function congratuation() {
        StartStop();
        let time = $('#timer').val();
        $('#tickResult').val('' + countTick);
        $('#timeResult').val('' + time);
        let url = "#openModal";
        $(location).attr('href', url);
    }

    // update count tick on page
    setInterval(() => {
        $('input').val('' + countTick);
    },500);
});