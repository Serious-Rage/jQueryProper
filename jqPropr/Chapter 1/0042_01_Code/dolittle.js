jQuery.fn.toggleNext = function() {
  this.toggleClass('arrow-down')
    .next().slideToggle('fast');
  return this;
};

$(document).ready(function() {
  $('<div id="page-contents"></div>')
    .prepend('<a class="toggler" href="#">Page Contents</a>')
    .append('<div></div>')
    .prependTo('body'); 

  $('.content h2').each(function(index) {
    var $chapterTitle = $(this);
    var chapterId = 'chapter-' + (index + 1);
    $chapterTitle.attr('id', chapterId);
    $('<a></a>').text($chapterTitle.text())
      .attr({
        'title': 'Jump to ' + $chapterTitle.text(),
        'href': '#' + chapterId
      })
      .appendTo('#page-contents div');
  });
   
  $('#page-contents > a.toggler').click(function() {
    $(this).toggleNext();
    return false;
  });

  $('#introduction > h2 a').click(function() {
    $('#introduction').load(this.href);
    return false;
  });
});
