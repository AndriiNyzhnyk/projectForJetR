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

function showImg(item) {
    $('#' + item + ' img').show();
}

function hideImg() {
    $('#' + counter.prevItem + ' img').hide();
    $('#' + counter.curItem + ' img').hide();
}

function hideBlock() {
    $('#' + counter.prevItem).hide();
    $('#' + counter.curItem).hide();
}

function registerClick(item) {
    if(counter.prevItem === '') {
        counter.prevItem = item;
        console.log(counter.prevItem + ' prev');
    } else  {
        counter.curItem = item;
        console.log(counter.curItem + ' cur');
    }

    if(counter.prevItem !== '' && counter.curItem !== '') {
        compareItem();
    }


}

function compareItem() {
    console.log(counter);
    if(counter.prevItem[3] === counter.curItem[3]) {
        setTimeout(hideBlock(), 1500);
    } else {
        // alert('false');
        hideImg();
    }
    
    nullifyCounter();
}

function nullifyCounter() {
    counter.prevItem = '';
    counter.curItem = '';
    console.log(counter);
}