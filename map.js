/* <tur-map> — flat map of Europe and Asia with routes to destinations.
   Land is lazy-loaded from public map data; without it a simple grid
   remains. Attributes: accent, animate ("0" disables route drawing). */
(function () {
  var ORIGIN = { n: 'Rogaška Slatina', lat: 46.24, lon: 15.64 };
  var DEST = [
    { n: 'Slovenija', lat: 46.05, lon: 14.51 },
    { n: 'Italija', lat: 45.46, lon: 9.19 },
    { n: 'Avstrija', lat: 48.21, lon: 16.37 },
    { n: 'Švica', lat: 47.38, lon: 8.54 },
    { n: 'Madžarska', lat: 47.50, lon: 19.04 },
    { n: 'Francija', lat: 48.86, lon: 2.35 },
    { n: 'Nemčija', lat: 50.94, lon: 6.96 },
    { n: 'Grčija', lat: 37.98, lon: 23.73 },
    { n: 'Španija', lat: 40.42, lon: -3.70 },
    { n: 'Portugalska', lat: 38.72, lon: -9.14 },
    { n: 'Luksemburg', lat: 49.61, lon: 6.13 },
    { n: 'Nizozemska', lat: 51.92, lon: 4.48 },
    { n: 'Belgija', lat: 50.85, lon: 4.35 },
    { n: 'Velika Britanija', lat: 52.48, lon: -1.90 },
    { n: 'Poljska', lat: 52.23, lon: 21.01 },
    { n: 'Češka', lat: 50.08, lon: 14.44 },
    { n: 'Litva', lat: 54.69, lon: 25.28 },
    { n: 'Latvija', lat: 56.95, lon: 24.11 },
    { n: 'Estonija', lat: 59.44, lon: 24.75 },
    { n: 'Bosna in Hercegovina', lat: 43.86, lon: 18.41 },
    { n: 'Srbija', lat: 44.79, lon: 20.45 },
    { n: 'Črna gora', lat: 42.44, lon: 19.26 },
    { n: 'Kosovo', lat: 42.66, lon: 21.17 },
    { n: 'Rusija', lat: 55.75, lon: 37.62 },
    { n: 'Ukrajina', lat: 50.45, lon: 30.52 },
    { n: 'Gruzija', lat: 41.72, lon: 44.78 },
    { n: 'Armenija', lat: 40.18, lon: 44.51 },
    { n: 'Kazahstan', lat: 51.13, lon: 71.43 },
    { n: 'Kirgizistan', lat: 42.87, lon: 74.59 }
  ];

  var LON0 = -13, LON1 = 84, LAT0 = 27, LAT1 = 63;
  var KX = Math.cos(47 * Math.PI / 180);
  var W = (LON1 - LON0) * KX, H = LAT1 - LAT0;
  var NS = 'http://www.w3.org/2000/svg';

  function px(lon) { return (lon - LON0) * KX; }
  function py(lat) { return LAT1 - lat; }
  function el(tag, attrs) {
    var n = document.createElementNS(NS, tag);
    for (var k in attrs) n.setAttribute(k, attrs[k]);
    return n;
  }

  class TurMap extends HTMLElement {
    connectedCallback() {
      if (this._booted) return;
      this._booted = true;
      var accent = this.getAttribute('accent') || '#0058CC';
      var dark = this.getAttribute('theme') === 'dark';
      this._dark = dark;
      this._C = dark
        ? { sea: 'none', land: '#13203A', landStroke: '#2E4straight', route: accent, home: '#FFFFFF' }
        : { sea: '#D5E6F8', land: '#FFFFFF', landStroke: '#9FB6CE', route: accent, home: '#1D1D1F' };
      if (dark) this._C.landStroke = '#2A3E63';
      this.style.display = 'block';
      this.style.position = 'relative';

      var svg = el('svg', {
        viewBox: '0 0 ' + W.toFixed(2) + ' ' + H.toFixed(2),
        role: 'img',
        'aria-label': 'Karta Evrope in Azije z destinacijami, kamor vozimo'
      });
      svg.style.cssText = 'width:100%;height:auto;display:block;overflow:hidden';
      this.appendChild(svg);
      this._svg = svg;
      this._accent = accent;

      var uid = 'turmap-clip-' + Math.random().toString(36).slice(2, 8);
      var defs = el('defs', {});
      var cp = el('clipPath', { id: uid });
      cp.appendChild(el('rect', { x: 0, y: 0, width: W, height: H, rx: 1.2 }));
      defs.appendChild(cp);
      svg.appendChild(defs);

      if (this._C.sea !== 'none') {
        svg.appendChild(el('rect', { x: 0, y: 0, width: W, height: H, rx: 1.2, fill: this._C.sea }));
      }

      var frame = el('g', { 'clip-path': 'url(#' + uid + ')' });
      svg.appendChild(frame);
      this._frame = frame;

      this._landG = el('g', {});
      frame.appendChild(this._landG);
      this._routeG = el('g', { fill: 'none' });
      frame.appendChild(this._routeG);
      this._dotG = el('g', {});
      frame.appendChild(this._dotG);

      this._tip = document.createElement('div');
      this._tip.style.cssText = 'position:absolute;left:0;top:0;pointer-events:none;opacity:0;' +
        'transform:translate(-50%,-150%);background:rgba(29,29,31,.92);color:#fff;padding:6px 11px;' +
        'border-radius:9px;corner-shape:squircle;white-space:nowrap;z-index:3;' +
        'font:500 13px/1 -apple-system,BlinkMacSystemFont,"Segoe UI",Helvetica,sans-serif;' +
        'transition:opacity .18s cubic-bezier(.16,1,.3,1)';
      this.appendChild(this._tip);

      if (this.getAttribute('routes') !== '0') this._routes();
      this._dots();

      var self = this;
      /* land is the main visual, so load it immediately and retry on failure */
      this._loadLand();
      /* path animation starts once the map enters the viewport */
      if ('IntersectionObserver' in window) {
        var io = new IntersectionObserver(function (e) {
          if (!e[0].isIntersecting) return;
          io.disconnect();
          self._draw();
        }, { rootMargin: '250px' });
        io.observe(this);
        setTimeout(function () { if (!self._drawn) { io.disconnect(); self._draw(); } }, 1200);
      } else {
        this._draw();
      }
    }

    _routes() {
      var ox = px(ORIGIN.lon), oy = py(ORIGIN.lat), g = this._routeG, accent = this._accent, dark = this._dark;
      this._lines = DEST.map(function (d) {
        var x = px(d.lon), y = py(d.lat);
        var mx = (ox + x) / 2, my = (oy + y) / 2;
        var dx = x - ox, dy = y - oy;
        var len = Math.hypot(dx, dy) || 1;
        var lift = Math.min(len * 0.2, 5);
        var cx = mx - (dy / len) * lift, cy = my + (dx / len) * lift;
        var p = el('path', {
          d: 'M' + ox.toFixed(2) + ' ' + oy.toFixed(2) + ' Q' + cx.toFixed(2) + ' ' + cy.toFixed(2) +
             ' ' + x.toFixed(2) + ' ' + y.toFixed(2),
          stroke: accent, 'stroke-width': dark ? 0.075 : 0.11, 'stroke-opacity': dark ? 0.42 : 0.55, 'stroke-linecap': 'round'
        });
        g.appendChild(p);
        return p;
      });
    }

    _dots() {
      var self = this, accent = this._accent;
      DEST.forEach(function (d) {
        var x = px(d.lon), y = py(d.lat);
        var hit = el('circle', { cx: x, cy: y, r: 1.5, fill: 'transparent', style: 'cursor:pointer' });
        var r0 = self._dark ? 0.3 : 0.42;
        var dot = el('circle', { cx: x, cy: y, r: r0, fill: accent });
        dot.style.transition = 'r .35s cubic-bezier(.22,1.4,.36,1)';
        var halo = el('circle', { cx: x, cy: y, r: r0, fill: accent, 'fill-opacity': self._dark ? 0.22 : 0.16 });
        halo.style.transition = 'r .45s cubic-bezier(.22,1.4,.36,1)';
        self._dotG.appendChild(halo);
        self._dotG.appendChild(dot);
        self._dotG.appendChild(hit);

        var label = el('title', {});
        label.textContent = d.n;
        hit.appendChild(label);

        function on(ev) {
          dot.setAttribute('r', r0 * 1.6);
          halo.setAttribute('r', r0 * 3.2);
          var r = self.getBoundingClientRect();
          self._tip.textContent = window.TurI18n ? window.TurI18n.t(d.n) : d.n;
          self._tip.style.left = (ev.clientX - r.left) + 'px';
          self._tip.style.top = (ev.clientY - r.top) + 'px';
          self._tip.style.opacity = '1';
        }
        function off() {
          dot.setAttribute('r', r0);
          halo.setAttribute('r', r0);
          self._tip.style.opacity = '0';
        }
        hit.addEventListener('pointerenter', on);
        hit.addEventListener('pointermove', on);
        hit.addEventListener('pointerleave', off);
      });

      var ox = px(ORIGIN.lon), oy = py(ORIGIN.lat);
      var home = el('circle', { cx: ox, cy: oy, r: this._dark ? 0.42 : 0.62, fill: this._C.home });
      var ring = el('circle', { cx: ox, cy: oy, r: this._dark ? 0.9 : 1.15, fill: 'none', stroke: this._C.home, 'stroke-width': 0.09, 'stroke-opacity': 0.55 });
      this._dotG.appendChild(ring);
      this._dotG.appendChild(home);
    }

    /* dots gently fade in on first display */
    _draw() {
      if (this._drawn) return;
      this._drawn = true;
      if (this.getAttribute('animate') === '0' ||
          window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
      (this._lines || []).forEach(function (p, i) {
        var len = p.getTotalLength();
        p.style.strokeDasharray = len;
        p.style.strokeDashoffset = len;
        p.style.transition = 'stroke-dashoffset 1.8s cubic-bezier(.16,1,.3,1) ' + (0.06 * i).toFixed(2) + 's';
        requestAnimationFrame(function () { p.style.strokeDashoffset = 0; });
      });
      Array.prototype.forEach.call(this._dotG.children, function (n, i) {
        n.style.opacity = '0';
        n.style.transition = 'opacity .7s cubic-bezier(.16,1,.3,1) ' + (0.04 * i).toFixed(2) + 's';
        requestAnimationFrame(function () { n.style.opacity = '1'; });
      });
    }

    async _loadLand() {
      for (var attempt = 0; attempt < 3; attempt++) {
        if (!this.isConnected) return;
        try {
          await this._land();
          if (this._landG.children.length) return;
        } catch (e) {
          console.warn('[tur-map] nalaganje kopna ni uspelo (poskus ' + (attempt + 1) + '):', e && (e.message || e));
        }
        await new Promise(function (r) { setTimeout(r, 600 * (attempt + 1)); });
      }
    }

    async _land() {
      /* built-in geometry first (works offline) */
      if (Array.isArray(window.TUR_LAND) && window.TUR_LAND.length) {
        this._paint(window.TUR_LAND);
        return;
      }
      var topo = await import('https://cdn.jsdelivr.net/npm/topojson-client@3/+esm');
      var res = await fetch('https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json');
      var world = await res.json();
      var geo = topo.feature(world, world.objects.countries);
      var out = [];
      (geo.features || []).forEach(function (f) {
        var g = f.geometry;
        if (!g) return;
        var polys = g.type === 'Polygon' ? [g.coordinates] : g.coordinates;
        polys.forEach(function (rings) {
          var d = '';
          var inView = false;
          rings.forEach(function (ring) {
            for (var i = 0; i < ring.length; i++) {
              var lon = ring[i][0], lat = ring[i][1];
              if (lon > LON0 - 6 && lon < LON1 + 6 && lat > LAT0 - 6 && lat < LAT1 + 6) inView = true;
              d += (i ? 'L' : 'M') + px(lon).toFixed(2) + ' ' + py(lat).toFixed(2);
            }
            d += 'Z';
          });
          if (inView && d) out.push(d);
        });
      });
      this._paint(out);
    }

    _paint(list) {
      var frag = document.createDocumentFragment();
      var C = this._C;
      list.forEach(function (d) {
        frag.appendChild(el('path', {
          d: d, fill: C.land, 'fill-rule': 'evenodd',
          stroke: C.landStroke, 'stroke-width': 0.075, 'stroke-linejoin': 'round'
        }));
      });
      this._landG.appendChild(frag);
    }
  }

  if (!window.customElements.get('tur-map')) window.customElements.define('tur-map', TurMap);
})();
