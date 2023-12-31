$(document).ready(function () {
  $('.tabs__caption').on('click', 'li:not(.active)', function () {
    
    $(this)
      .addClass('active').siblings().removeClass('active')
      .closest('div.tabs').find('div.tabs__content').removeClass('active').eq($(this).index()).addClass('active');
  });
})
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiIiwic291cmNlcyI6WyJ0YWJzLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIiQoZG9jdW1lbnQpLnJlYWR5KGZ1bmN0aW9uICgpIHtcbiAgJCgnLnRhYnNfX2NhcHRpb24nKS5vbignY2xpY2snLCAnbGk6bm90KC5hY3RpdmUpJywgZnVuY3Rpb24gKCkge1xuICAgIFxuICAgICQodGhpcylcbiAgICAgIC5hZGRDbGFzcygnYWN0aXZlJykuc2libGluZ3MoKS5yZW1vdmVDbGFzcygnYWN0aXZlJylcbiAgICAgIC5jbG9zZXN0KCdkaXYudGFicycpLmZpbmQoJ2Rpdi50YWJzX19jb250ZW50JykucmVtb3ZlQ2xhc3MoJ2FjdGl2ZScpLmVxKCQodGhpcykuaW5kZXgoKSkuYWRkQ2xhc3MoJ2FjdGl2ZScpO1xuICB9KTtcbn0pIl0sImZpbGUiOiJ0YWJzLmpzIn0=
