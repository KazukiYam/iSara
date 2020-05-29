//    <!-- question accordion -->
jQuery(function ($) {
  $('.question-article-title, .schedule-article-title').on('click', function () {
    /*クリックでコンテンツを開閉*/
    $(this).next().slideToggle(300);
    /*矢印の向きを変更*/
    $(this).toggleClass('open');
  });
  
  });

  // modal
  window.onload = function() {
    var popup = document.getElementById('js-popup');
    if(!popup) return;
    popup.classList.add('is-show');
  
    var blackBg = document.getElementById('js-black-bg');
    var closeBtn = document.getElementById('js-close-btn');
  
    closePopUp(blackBg);
    closePopUp(closeBtn);
  
    function closePopUp(elem) {
      if(!elem) return;
      elem.addEventListener('click', function() {
        popup.classList.remove('is-show');
      })
    }
  }