(function () {
  var panel = document.querySelector('.news-scroll');
  if (!panel) return;

  var list = panel.querySelector('.timeline-list');
  var visibleCount = 6;

  function updateHeight() {
    var items = list.children;
    if (items.length <= visibleCount) {
      panel.style.maxHeight = 'none';
      return;
    }

    // Measure actual rows so wrapped text still leaves exactly six entries visible.
    var first = items[0].getBoundingClientRect();
    var last = items[visibleCount - 1].getBoundingClientRect();
    panel.style.maxHeight = Math.ceil(last.bottom - first.top) + 'px';
  }

  updateHeight();
  if ('ResizeObserver' in window) {
    new ResizeObserver(updateHeight).observe(list);
  } else {
    window.addEventListener('resize', updateHeight);
    window.addEventListener('load', updateHeight);
  }
})();
