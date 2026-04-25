(function () {
  if (!window.Lenis) return;

  var reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)');

  if (reduceMotion.matches) return;

  var lenis = new window.Lenis({
    anchors: true,
    autoRaf: true,
    lerp: 0.08,
    wheelMultiplier: 0.9,
  });

  window.lenis = lenis;

  reduceMotion.addEventListener('change', function (event) {
    if (event.matches) {
      lenis.destroy();
      delete window.lenis;
    }
  });
})();
