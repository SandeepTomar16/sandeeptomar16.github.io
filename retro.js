/* Pixel columns in the page margins. Squares twinkle slowly; decorative only. */
(function () {
  try {
    var rows = 22, cols = 6, still = window.matchMedia && matchMedia('(prefers-reduced-motion:reduce)').matches;
    var panels = ['l', 'r'].map(function (side) {
      var d = document.createElement('div');
      d.className = 'px ' + side;
      d.setAttribute('aria-hidden', 'true');
      for (var i = 0; i < rows * cols; i++) d.appendChild(document.createElement('i'));
      document.body.appendChild(d);
      return d;
    });
    function paint(cell) {
      var r = Math.random();
      cell.style.opacity = r < 0.5 ? 0 : (0.15 + Math.random() * 0.65).toFixed(2);
      cell.style.background = Math.random() < 0.35 ? '#7c9cff' : '';
    }
    panels.forEach(function (p) { [].forEach.call(p.children, paint); });
    if (still) return;
    setInterval(function () {
      panels.forEach(function (p) {
        for (var n = 0; n < 6; n++) paint(p.children[Math.floor(Math.random() * p.children.length)]);
      });
    }, 500);
  } catch (e) {}
})();
