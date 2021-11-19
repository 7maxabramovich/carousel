let agg = (function () {
  let list = carousel.querySelector('.gallery');
  let listElems = carousel.querySelectorAll('.gallery li');
  let width = 180;
  let count = 2;
  let ammount = 3;
  let position = 0;
  let index = 0;

  return {

    next: function () {
      if (!this.hasNext()) {
        this.rewind();
      }
      else {
        position -= width * count;
        list.style.marginLeft = position + 'px';
        index = -position/width;
        this.current();
      }
    },
    prev: function () {
      if (!this.hasPrev()) {
        this.rewindPrev();
      }
      else {
        position += width * count;
        list.style.marginLeft = position + 'px';
        index = -position/width;
        this.current();
      }
    },
    hasNext: function () {
      return index < listElems.length - ammount;
    },
    hasPrev: function () {
      return index > 0;
    },
    rewind: function () {
      index = 0;
      position = 0;
      list.style.marginLeft = position + 'px';
      this.current();
    },
    rewindPrev: function () {
      index = listElems.length - ammount;
      position = -index*width;
      list.style.marginLeft = position + 'px';
      this.current();
    },
    current: function () {
      console.log(index);
    }
  };
}());

carousel.querySelector('.next').onclick = function() {
  agg.next();
};
carousel.querySelector('.prev').onclick = function() {
  agg.prev();
};

let timerId = setInterval(() => agg.next(), 2000);