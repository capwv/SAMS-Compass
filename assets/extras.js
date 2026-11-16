/* SAMS Compass - extras.js
   تحسينات الواجهة فوق app.js: ملخص سريع لكل وظيفة، فهرس للصفحة الطويلة، روابط مقارنة المرتبات،
   مرتب على كروت المجالات، "ابدأ من أول سنة"، إشعار نسخ بدل alert، وزر الرجوع لفوق.
   لو حصل أي خطأ هنا الموقع الأساسي بيشتغل عادي. */
(function () {
  'use strict';
  var out = document.getElementById('out');
  if (!out || typeof M === 'undefined') return;

  var enc = encodeURIComponent;
  var reduce = window.matchMedia && matchMedia('(prefers-reduced-motion: reduce)').matches;
  var esc = function (s) { return String(s).replace(/[&<>"]/g, function (c) { return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]; }); };

  /* ---------- حركة أقل لمن يفضّل ذلك ---------- */
  if (reduce) {
    var _sv = Element.prototype.scrollIntoView;
    Element.prototype.scrollIntoView = function (o) {
      if (o && typeof o === 'object') o = Object.assign({}, o, { behavior: 'auto' });
      return _sv.call(this, o);
    };
  }

  /* ---------- إشعار قصير (بدل alert) ---------- */
  var toastEl = document.createElement('div');
  toastEl.id = 'toast'; toastEl.className = 'toast'; toastEl.setAttribute('role', 'status'); toastEl.setAttribute('aria-live', 'polite');
  document.body.appendChild(toastEl);
  var toastT = 0;
  function toast(msg) {
    toastEl.textContent = msg; toastEl.classList.add('on');
    clearTimeout(toastT); toastT = setTimeout(function () { toastEl.classList.remove('on'); }, 2200);
  }
  function copyText(s, okMsg) {
    var done = function () { toast(okMsg || 'تم النسخ'); };
    var fallback = function () {
      try {
        var ta = document.createElement('textarea'); ta.value = s; ta.setAttribute('readonly', '');
        ta.style.cssText = 'position:fixed;top:-999px'; document.body.appendChild(ta); ta.select();
        var ok = document.execCommand('copy'); document.body.removeChild(ta);
        if (ok) done(); else prompt('انسخ من هنا:', s);
      } catch (e) { prompt('انسخ من هنا:', s); }
    };
    try { navigator.clipboard.writeText(s).then(done, fallback); } catch (e) { fallback(); }
  }

  /* نتيجة الاختبار: نسخ + رابط الاختبار */
  if (typeof qzCopy === 'function') {
    qzCopy = function () {
      var r = qzCalc(), t = r.ms[0], m = M[t.i];
      var f = t.f.slice(0, 3).map(function (x) { return sp(M[t.i].j[x.x].t)[0]; }).join('، ');
      copyText('نتيجة اختبار SAMS Compass: أنسب تخصص ليا "' + m.n + '". أنسب المجالات: ' + f + '.\n' +
        location.origin + location.pathname + '#quiz', 'اتنسخت النتيجة مع رابط الاختبار');
    };
  }

  /* ---------- زر الرجوع لفوق ---------- */
  var up = document.createElement('button');
  up.type = 'button'; up.className = 'to-top'; up.setAttribute('aria-label', 'الرجوع لأول الصفحة');
  up.innerHTML = '<i aria-hidden="true" class="fa-solid fa-arrow-up"></i>';
  up.onclick = function () { window.scrollTo({ top: 0, behavior: reduce ? 'auto' : 'smooth' }); };
  document.body.appendChild(up);
  var upTick = false;
  addEventListener('scroll', function () {
    if (upTick) return; upTick = true;
    requestAnimationFrame(function () { up.classList.toggle('on', scrollY > 900); upTick = false; });
  }, { passive: true });

  /* ---------- مساعدات ---------- */
  function cur() {
    var h = location.hash.slice(1), m;
    if ((m = h.match(/^m(\d+)-j(\d+)$/))) return { i: +m[1], x: +m[2] };
    if ((m = h.match(/^m(\d+)(?:-(\w+))?$/))) return { i: +m[1], k: m[2] || '' };
    return h === '' ? { i: 0, k: '' } : { h: h };
  }
  function A(u, t) { return '<a href="' + u + '" target="_blank" rel="noopener noreferrer">' + t + '</a>'; }

  /* تنبيه "آخر تحديث" كان بيتكرر 5 مرات في صفحة الوظيفة: نسيب آخر واحد بس */
  function dedupeNotes() {
    var n = [].filter.call(out.querySelectorAll('.gnote'), function (e) { return /آخر تحديث للموقع/.test(e.textContent); });
    n.slice(0, -1).forEach(function (e) { e.remove(); });
  }

  /* ---------- صفحة الوظيفة: ملخص سريع + فهرس ---------- */
  function jobPage(c) {
    if (out.querySelector('.facts') || !M[c.i] || !M[c.i].j[c.x]) return;
    var j = M[c.i].j[c.x], first = out.querySelector('.gh3'); if (!first) return;
    var en = sp(j.t)[0];
    var r = (typeof RMT !== 'undefined' && RMT.find(function (x) { return x[0].test(j.t); })) || [0, 0, 0, 1];
    var cell = function (l, v) { return '<div class="fact"><small>' + l + '</small><b>' + v + '</b></div>'; };
    var facts = '<section class="facts" aria-label="ملخص سريع عن الوظيفة">' +
      '<div class="facts-grid">' +
      cell('المرتب التقريبي شهريًا', esc(j.s)) +
      cell('طلب الريموت', LV[r[1]]) + cell('طلب الفري لانس', LV[r[2]]) + cell('سهولة البداية', EZ[r[3]]) +
      '</div>' +
      (j.sn ? '<p class="fact-note">' + esc(j.sn) + '</p>' : '') +
      '<p class="fact-note">الأرقام تقديرية وأغلبها للقاهرة والمدن الكبيرة. الشغل الحضوري في أسيوط والصعيد غالبًا أقل، والريموت بيقرّب الفرق.</p>' +
      '<div class="cmp"><span>قارن الرقم بنفسك:</span>' +
      A('https://wuzzuf.net/search/jobs/?q=' + enc(en), 'Wuzzuf') +
      A('https://www.linkedin.com/jobs/search/?keywords=' + enc(en) + '&location=Egypt', 'LinkedIn') +
      A('https://www.google.com/search?q=' + enc(en + ' salary Egypt'), 'بحث جوجل عن المرتبات') +
      '</div></section>';

    /* فهرس الأقسام */
    var heads = [].slice.call(out.querySelectorAll('h3.gh3')), chips = '';
    heads.forEach(function (h, k) {
      var id = 'sec-' + k; h.id = id; h.style.scrollMarginTop = '1rem';
      var sm = h.querySelector('small'), label = sm ? sm.textContent.replace(/^[\s·]+/, '') : h.textContent;
      chips += '<button type="button" class="toc-b" data-t="' + id + '">' + esc(label) + '</button>';
    });
    chips += '<button type="button" class="toc-b toc-share" data-share="1"><i aria-hidden="true" class="fa-solid fa-link"></i> انسخ رابط الصفحة</button>';
    first.insertAdjacentHTML('beforebegin', facts + '<nav class="toc" aria-label="أقسام الصفحة">' + chips + '</nav>');
    out.querySelector('.toc').addEventListener('click', function (e) {
      var b = e.target.closest('button'); if (!b) return;
      if (b.dataset.share) return copyText(location.href, 'اتنسخ رابط الصفحة');
      var t = document.getElementById(b.dataset.t); if (t) t.scrollIntoView({ behavior: reduce ? 'auto' : 'smooth', block: 'start' });
    });
  }

  /* ---------- قايمة المجالات: المرتب على كل كارت ---------- */
  function jobsList(c) {
    var cards = out.querySelectorAll('.subj-card'), js = M[c.i] && M[c.i].j;
    if (!js || cards.length !== js.length) return;
    cards.forEach(function (b, k) {
      if (b.querySelector('.sal-mini')) return;
      var p = nums(js[k].s); if (p.length < 2) return;
      b.insertAdjacentHTML('beforeend', '<div class="sal-mini">' + p[0].join('–') + ' ← ' + p[1].join('–') + ' ألف</div>');
    });
  }

  /* ---------- صفحة التخصص: ابدأ من أول سنة ---------- */
  function landing(c) {
    if (out.querySelector('.starter') || typeof BASE === 'undefined' || !BASE[c.i]) return;
    var rows = BASE[c.i][0].map(function (d) { return SKI[d]; }).filter(Boolean).map(function (x) {
      return '<div class="sk"><span>' + x[2] + '</span>' +
        A('https://www.youtube.com/results?search_query=' + enc(x[3]), 'يوتيوب عربي') +
        A('https://www.coursera.org/search?query=' + enc(x[4]), 'Coursera') + '</div>';
    }).join('');
    if (!rows) return;
    out.insertAdjacentHTML('beforeend', '<section class="starter"><h3 class="gh3">ابدأ من أول سنة</h3>' +
      '<p class="gp">مش لازم تستنى مواد المنهج. دي أول حاجات تتعلمها بالمجاني وانت لسه في الفرقة الأولى:</p>' +
      '<div class="job">' + rows + '</div></section>');
  }

  /* ---------- تشغيل بعد أي تغيير في #out ---------- */
  var busy = false, obs;
  function post() {
    if (busy) return; busy = true; obs.disconnect();
    try {
      dedupeNotes();
      var c = cur();
      if (c.x != null && out.querySelector('.lad')) jobPage(c);
      else if (c.k === 'jobs') jobsList(c);
      else if (c.k === '' && c.i != null && out.querySelector('.subj-card')) landing(c);
    } catch (e) { if (window.console) console.warn('extras:', e); }
    obs.observe(out, { childList: true });
    busy = false;
  }
  obs = new MutationObserver(post);
  obs.observe(out, { childList: true });
  post();
})();
