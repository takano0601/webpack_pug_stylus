'use strict';
import objectFitImages from 'object-fit-images';
import MicroModal from 'micromodal';

const tap = 'ontouchstart' in window ? 'touchstart' : 'click';

$(() => {
  // objectfitのポリフィル
  objectFitImages();
  // モーダル
  MicroModal.init({
    disableScroll: true,
    awaitCloseAnimation: true,
  });
  // スムーズスクロール
  smoothScroll();
});

/* スムーズスクロール */
function smoothScroll() {
  $('a[href^="#"]').on('click', e => {
    const speed = 400;
    const href = e.currentTarget.attr('href');
    const target = $(href == '#' || href == '' ? 'html' : href);
    const position = target.offset().top;
    $('body,html').animate({ scrollTop: position }, speed);
    return false;
  });
}
