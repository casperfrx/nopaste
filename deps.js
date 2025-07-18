/**
 * Combined by jsDelivr.
 * Original files:
 * - /npm/lzma@2.3.2/src/lzma.min.js
 * - /npm/slim-select@1.27.1/dist/slimselect.min.js
 * - /npm/clipboard@2.0.11/dist/clipboard.min.js
 * - /npm/micromodal@0.4.10/dist/micromodal.min.js
 * - /npm/codemirror@5.65.5/lib/codemirror.min.js
 * - /npm/codemirror@5.65.5/addon/mode/loadmode.min.js
 * - /npm/codemirror@5.65.5/addon/mode/overlay.min.js
 * - /npm/codemirror@5.65.5/addon/mode/multiplex.min.js
 * - /npm/codemirror@5.65.5/addon/mode/simple.min.js
 * - /npm/codemirror@5.65.5/addon/scroll/simplescrollbars.js
 * - /npm/codemirror@5.65.5/mode/meta.min.js
 *
 * Do NOT use SRI with dynamically generated files! More information: https://www.jsdelivr.com/using-sri-with-dynamic-files
 */
/**
 * Minified by jsDelivr using Terser v5.19.2.
 * Original file: /npm/lzma@2.3.2/src/lzma.js
 *
 * Do NOT use SRI with dynamically generated files! More information: https://www.jsdelivr.com/using-sri-with-dynamic-files
 */
//! © 2015 Nathan Rugg <nmrugg@gmail.com> | MIT
'undefined' == typeof Worker || ('undefined' != typeof location && 'file:' === location.protocol)
    ? 'undefined' != typeof global && 'undefined' != typeof require
        ? (this.LZMA = function (n) {
              return require(n || './lzma_worker.js').LZMA;
          })
        : 'undefined' != typeof window && window.document
        ? (function () {
              var n,
                  e = this;
              function o(r) {
                  var t;
                  return (
                      (function (n) {
                          var r = document.createElement('script');
                          (r.type = 'text/javascript'),
                              (r.src = n),
                              (r.onload = function () {
                                  e.LZMA = o;
                              }),
                              document.getElementsByTagName('head')[0].appendChild(r);
                      })(r),
                      (t = {
                          compress: function (e, o, r, i) {
                              n.LZMA_WORKER
                                  ? n.LZMA_WORKER.compress(e, o, r, i)
                                  : setTimeout(function () {
                                        t.compress(e, o, r, i);
                                    }, 50);
                          },
                          decompress: function (e, o, r) {
                              n.LZMA_WORKER
                                  ? n.LZMA_WORKER.decompress(e, o, r)
                                  : setTimeout(function () {
                                        t.decompress(e, o, r);
                                    }, 50);
                          },
                          worker: function () {
                              return null;
                          },
                      })
                  );
              }
              'undefined' != typeof window ? (n = window) : global && (n = global), (e.LZMA = o);
          })()
        : console.error("Can't load the worker. Sorry.")
    : (this.LZMA = function (n) {
          var e = {},
              o = new Worker(n || './lzma_worker-min.js');
          return (
              (o.onmessage = function (n) {
                  3 === n.data.action
                      ? e[n.data.cbn] && 'function' == typeof e[n.data.cbn].on_progress && e[n.data.cbn].on_progress(n.data.result)
                      : e[n.data.cbn] &&
                        'function' == typeof e[n.data.cbn].on_finish &&
                        (e[n.data.cbn].on_finish(n.data.result, n.data.error), delete e[n.data.cbn]);
              }),
              (o.onerror = function (n) {
                  var o = new Error(n.message + ' (' + n.filename + ':' + n.lineno + ')');
                  for (var r in e) e[r].on_finish(null, o);
                  console.error('Uncaught error in lzma_worker', o);
              }),
              (function () {
                  function n(n, r, t, i, a) {
                      var c;
                      do {
                          c = Math.floor(1e7 * Math.random());
                      } while (void 0 !== e[c]);
                      (e[c] = { on_finish: i, on_progress: a }), o.postMessage({ action: n, cbn: c, data: r, mode: t });
                  }
                  return {
                      compress: function (e, o, r, t) {
                          n(1, e, o, r, t);
                      },
                      decompress: function (e, o, r) {
                          n(2, e, !1, o, r);
                      },
                      worker: function () {
                          return o;
                      },
                  };
              })()
          );
      });
!(function (e, t) {
    'object' == typeof exports && 'object' == typeof module
        ? (module.exports = t())
        : 'function' == typeof define && define.amd
        ? define([], t)
        : 'object' == typeof exports
        ? (exports.SlimSelect = t())
        : (e.SlimSelect = t());
})(window, function () {
    return (
        (n = {}),
        (s.m = i = [
            function (e, t, i) {
                'use strict';
                function n(e, t) {
                    t = t || { bubbles: !1, cancelable: !1, detail: void 0 };
                    var i = document.createEvent('CustomEvent');
                    return i.initCustomEvent(e, t.bubbles, t.cancelable, t.detail), i;
                }
                (t.__esModule = !0),
                    (t.kebabCase = t.highlight = t.isValueInArrayOfObjects = t.debounce = t.putContent = t.ensureElementInView = t.hasClassInTree = void 0),
                    (t.hasClassInTree = function (e, t) {
                        function n(e, t) {
                            return t && e && e.classList && e.classList.contains(t) ? e : null;
                        }
                        return (
                            n(e, t) ||
                            (function e(t, i) {
                                return t && t !== document ? (n(t, i) ? t : e(t.parentNode, i)) : null;
                            })(e, t)
                        );
                    }),
                    (t.ensureElementInView = function (e, t) {
                        var i = e.scrollTop + e.offsetTop,
                            n = i + e.clientHeight,
                            s = t.offsetTop,
                            t = s + t.clientHeight;
                        s < i ? (e.scrollTop -= i - s) : n < t && (e.scrollTop += t - n);
                    }),
                    (t.putContent = function (e, t, i) {
                        var n = e.offsetHeight,
                            s = e.getBoundingClientRect(),
                            e = i ? s.top : s.top - n,
                            n = i ? s.bottom : s.bottom + n;
                        return e <= 0 ? 'below' : n >= window.innerHeight ? 'above' : i ? t : 'below';
                    }),
                    (t.debounce = function (s, a, o) {
                        var l;
                        return (
                            void 0 === a && (a = 100),
                            void 0 === o && (o = !1),
                            function () {
                                for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
                                var i = self,
                                    n = o && !l;
                                clearTimeout(l),
                                    (l = setTimeout(function () {
                                        (l = null), o || s.apply(i, e);
                                    }, a)),
                                    n && s.apply(i, e);
                            }
                        );
                    }),
                    (t.isValueInArrayOfObjects = function (e, t, i) {
                        if (!Array.isArray(e)) return e[t] === i;
                        for (var n = 0, s = e; n < s.length; n++) {
                            var a = s[n];
                            if (a && a[t] && a[t] === i) return !0;
                        }
                        return !1;
                    }),
                    (t.highlight = function (e, t, i) {
                        var n = e,
                            s = new RegExp('(' + t.trim() + ')(?![^<]*>[^<>]*</)', 'i');
                        if (!e.match(s)) return e;
                        var a = e.match(s).index,
                            t = a + e.match(s)[0].toString().length,
                            t = e.substring(a, t);
                        return (n = n.replace(s, '<mark class="'.concat(i, '">').concat(t, '</mark>')));
                    }),
                    (t.kebabCase = function (e) {
                        var t = e.replace(/[A-Z\u00C0-\u00D6\u00D8-\u00DE]/g, function (e) {
                            return '-' + e.toLowerCase();
                        });
                        return e[0] === e[0].toUpperCase() ? t.substring(1) : t;
                    }),
                    'function' != typeof (t = window).CustomEvent && ((n.prototype = t.Event.prototype), (t.CustomEvent = n));
            },
            function (e, t, i) {
                'use strict';
                (t.__esModule = !0), (t.validateOption = t.validateData = t.Data = void 0);
                var n =
                    ((s.prototype.newOption = function (e) {
                        return {
                            id: e.id || String(Math.floor(1e8 * Math.random())),
                            value: e.value || '',
                            text: e.text || '',
                            innerHTML: e.innerHTML || '',
                            selected: e.selected || !1,
                            display: void 0 === e.display || e.display,
                            disabled: e.disabled || !1,
                            placeholder: e.placeholder || !1,
                            class: e.class || void 0,
                            data: e.data || {},
                            mandatory: e.mandatory || !1,
                        };
                    }),
                    (s.prototype.add = function (e) {
                        this.data.push({
                            id: String(Math.floor(1e8 * Math.random())),
                            value: e.value,
                            text: e.text,
                            innerHTML: '',
                            selected: !1,
                            display: !0,
                            disabled: !1,
                            placeholder: !1,
                            class: void 0,
                            mandatory: e.mandatory,
                            data: {},
                        });
                    }),
                    (s.prototype.parseSelectData = function () {
                        this.data = [];
                        for (var e = 0, t = this.main.select.element.childNodes; e < t.length; e++) {
                            var i = t[e];
                            if ('OPTGROUP' === i.nodeName) {
                                for (var n = { label: i.label, options: [] }, s = 0, a = i.childNodes; s < a.length; s++) {
                                    var o,
                                        l = a[s];
                                    'OPTION' === l.nodeName &&
                                        ((o = this.pullOptionData(l)),
                                        n.options.push(o),
                                        o.placeholder && '' !== o.text.trim() && (this.main.config.placeholderText = o.text));
                                }
                                this.data.push(n);
                            } else
                                'OPTION' === i.nodeName &&
                                    ((o = this.pullOptionData(i)),
                                    this.data.push(o),
                                    o.placeholder && '' !== o.text.trim() && (this.main.config.placeholderText = o.text));
                        }
                    }),
                    (s.prototype.pullOptionData = function (e) {
                        return {
                            id: (!!e.dataset && e.dataset.id) || String(Math.floor(1e8 * Math.random())),
                            value: e.value,
                            text: e.text,
                            innerHTML: e.innerHTML,
                            selected: e.selected,
                            disabled: e.disabled,
                            placeholder: 'true' === e.dataset.placeholder,
                            class: e.className,
                            style: e.style.cssText,
                            data: e.dataset,
                            mandatory: !!e.dataset && 'true' === e.dataset.mandatory,
                        };
                    }),
                    (s.prototype.setSelectedFromSelect = function () {
                        if (this.main.config.isMultiple) {
                            for (var e = [], t = 0, i = this.main.select.element.options; t < i.length; t++) {
                                var n = i[t];
                                !n.selected || ((n = this.getObjectFromData(n.value, 'value')) && n.id && e.push(n.id));
                            }
                            this.setSelected(e, 'id');
                        } else {
                            var s = this.main.select.element;
                            -1 !== s.selectedIndex && ((s = s.options[s.selectedIndex].value), this.setSelected(s, 'value'));
                        }
                    }),
                    (s.prototype.setSelected = function (e, t) {
                        void 0 === t && (t = 'id');
                        for (var i = 0, n = this.data; i < n.length; i++) {
                            var s = n[i];
                            if (s.hasOwnProperty('label')) {
                                if (s.hasOwnProperty('options')) {
                                    var a = s.options;
                                    if (a)
                                        for (var o = 0, l = a; o < l.length; o++) {
                                            var r = l[o];
                                            r.placeholder || (r.selected = this.shouldBeSelected(r, e, t));
                                        }
                                }
                            } else s.selected = this.shouldBeSelected(s, e, t);
                        }
                    }),
                    (s.prototype.shouldBeSelected = function (e, t, i) {
                        if ((void 0 === i && (i = 'id'), Array.isArray(t)))
                            for (var n = 0, s = t; n < s.length; n++) {
                                var a = s[n];
                                if (i in e && String(e[i]) === String(a)) return !0;
                            }
                        else if (i in e && String(e[i]) === String(t)) return !0;
                        return !1;
                    }),
                    (s.prototype.getSelected = function () {
                        for (
                            var e = { text: '', placeholder: this.main.config.placeholderText }, t = [], i = 0, n = this.data;
                            i < n.length;
                            i++
                        ) {
                            var s = n[i];
                            if (s.hasOwnProperty('label')) {
                                if (s.hasOwnProperty('options')) {
                                    var a = s.options;
                                    if (a)
                                        for (var o = 0, l = a; o < l.length; o++) {
                                            var r = l[o];
                                            r.selected && (this.main.config.isMultiple ? t.push(r) : (e = r));
                                        }
                                }
                            } else s.selected && (this.main.config.isMultiple ? t.push(s) : (e = s));
                        }
                        return this.main.config.isMultiple ? t : e;
                    }),
                    (s.prototype.addToSelected = function (e, t) {
                        if ((void 0 === t && (t = 'id'), this.main.config.isMultiple)) {
                            var i = [],
                                n = this.getSelected();
                            if (Array.isArray(n))
                                for (var s = 0, a = n; s < a.length; s++) {
                                    var o = a[s];
                                    i.push(o[t]);
                                }
                            i.push(e), this.setSelected(i, t);
                        }
                    }),
                    (s.prototype.removeFromSelected = function (e, t) {
                        if ((void 0 === t && (t = 'id'), this.main.config.isMultiple)) {
                            for (var i = [], n = 0, s = this.getSelected(); n < s.length; n++) {
                                var a = s[n];
                                String(a[t]) !== String(e) && i.push(a[t]);
                            }
                            this.setSelected(i, t);
                        }
                    }),
                    (s.prototype.onDataChange = function () {
                        this.main.onChange && this.isOnChangeEnabled && this.main.onChange(JSON.parse(JSON.stringify(this.getSelected())));
                    }),
                    (s.prototype.getObjectFromData = function (e, t) {
                        void 0 === t && (t = 'id');
                        for (var i = 0, n = this.data; i < n.length; i++) {
                            var s = n[i];
                            if (t in s && String(s[t]) === String(e)) return s;
                            if (s.hasOwnProperty('options'))
                                if (s.options)
                                    for (var a = 0, o = s.options; a < o.length; a++) {
                                        var l = o[a];
                                        if (String(l[t]) === String(e)) return l;
                                    }
                        }
                        return null;
                    }),
                    (s.prototype.search = function (n) {
                        var s, e;
                        '' !== (this.searchValue = n).trim()
                            ? ((s = this.main.config.searchFilter),
                              (e = this.data.slice(0)),
                              (n = n.trim()),
                              (e = e.map(function (e) {
                                  if (e.hasOwnProperty('options')) {
                                      var t = e,
                                          i = [];
                                      if (
                                          0 !==
                                          (i = t.options
                                              ? t.options.filter(function (e) {
                                                    return s(e, n);
                                                })
                                              : i).length
                                      ) {
                                          t = Object.assign({}, t);
                                          return (t.options = i), t;
                                      }
                                  }
                                  if (e.hasOwnProperty('text') && s(e, n)) return e;
                                  return null;
                              })),
                              (this.filtered = e.filter(function (e) {
                                  return e;
                              })))
                            : (this.filtered = null);
                    }),
                    s);
                function s(e) {
                    (this.contentOpen = !1),
                        (this.contentPosition = 'below'),
                        (this.isOnChangeEnabled = !0),
                        (this.main = e.main),
                        (this.searchValue = ''),
                        (this.data = []),
                        (this.filtered = null),
                        this.parseSelectData(),
                        this.setSelectedFromSelect();
                }
                function r(e) {
                    return (
                        void 0 !== e.text ||
                        (console.error('Data object option must have at least have a text value. Check object: ' + JSON.stringify(e)), !1)
                    );
                }
                (t.Data = n),
                    (t.validateData = function (e) {
                        if (!e) return console.error('Data must be an array of objects'), !1;
                        for (var t = 0, i = 0, n = e; i < n.length; i++) {
                            var s = n[i];
                            if (s.hasOwnProperty('label')) {
                                if (s.hasOwnProperty('options')) {
                                    var a = s.options;
                                    if (a) for (var o = 0, l = a; o < l.length; o++) r(l[o]) || t++;
                                }
                            } else r(s) || t++;
                        }
                        return 0 === t;
                    }),
                    (t.validateOption = r);
            },
            function (e, t, i) {
                'use strict';
                t.__esModule = !0;
                var n = i(3),
                    s = i(4),
                    a = i(5),
                    r = i(1),
                    o = i(0),
                    i =
                        ((l.prototype.validate = function (e) {
                            e = 'string' == typeof e.select ? document.querySelector(e.select) : e.select;
                            if (!e) throw new Error('Could not find select element');
                            if ('SELECT' !== e.tagName) throw new Error('Element isnt of type select');
                            return e;
                        }),
                        (l.prototype.selected = function () {
                            if (this.config.isMultiple) {
                                for (var e = [], t = 0, i = (s = this.data.getSelected()); t < i.length; t++) {
                                    var n = i[t];
                                    e.push(n.value);
                                }
                                return e;
                            }
                            var s;
                            return (s = this.data.getSelected()) ? s.value : '';
                        }),
                        (l.prototype.set = function (e, t, i, n) {
                            void 0 === t && (t = 'value'),
                                void 0 === i && (i = !0),
                                void 0 === n && (n = !0),
                                this.config.isMultiple && !Array.isArray(e) ? this.data.addToSelected(e, t) : this.data.setSelected(e, t),
                                this.select.setValue(),
                                this.data.onDataChange(),
                                this.render(),
                                (i =
                                    this.config.hideSelectedOption &&
                                    this.config.isMultiple &&
                                    this.data.getSelected().length === this.data.data.length
                                        ? !0
                                        : i) && this.close();
                        }),
                        (l.prototype.setSelected = function (e, t, i, n) {
                            this.set(e, (t = void 0 === t ? 'value' : t), (i = void 0 === i ? !0 : i), (n = void 0 === n ? !0 : n));
                        }),
                        (l.prototype.setData = function (e) {
                            if ((0, r.validateData)(e)) {
                                for (var t = JSON.parse(JSON.stringify(e)), i = this.data.getSelected(), n = 0; n < t.length; n++)
                                    t[n].value || t[n].placeholder || (t[n].value = t[n].text);
                                if (this.config.isAjax && i)
                                    if (this.config.isMultiple)
                                        for (var s = 0, a = i.reverse(); s < a.length; s++) {
                                            var o = a[s];
                                            t.unshift(o);
                                        }
                                    else {
                                        t.unshift(i);
                                        for (n = 0; n < t.length; n++)
                                            t[n].placeholder || t[n].value !== i.value || t[n].text !== i.text || t.splice(n, 1);
                                        for (var l = !1, n = 0; n < t.length; n++) t[n].placeholder && (l = !0);
                                        l || t.unshift({ text: '', placeholder: !0 });
                                    }
                                this.select.create(t), this.data.parseSelectData(), this.data.setSelectedFromSelect();
                            } else console.error('Validation problem on: #' + this.select.element.id);
                        }),
                        (l.prototype.addData = function (e) {
                            (0, r.validateData)([e])
                                ? (this.data.add(this.data.newOption(e)),
                                  this.select.create(this.data.data),
                                  this.data.parseSelectData(),
                                  this.data.setSelectedFromSelect(),
                                  this.render())
                                : console.error('Validation problem on: #' + this.select.element.id);
                        }),
                        (l.prototype.open = function () {
                            var e,
                                t = this;
                            this.config.isEnabled &&
                                (this.data.contentOpen ||
                                    (this.config.hideSelectedOption &&
                                        this.config.isMultiple &&
                                        this.data.getSelected().length === this.data.data.length) ||
                                    (this.beforeOpen && this.beforeOpen(),
                                    this.config.isMultiple && this.slim.multiSelected
                                        ? this.slim.multiSelected.plus.classList.add('ss-cross')
                                        : this.slim.singleSelected &&
                                          (this.slim.singleSelected.arrowIcon.arrow.classList.remove('arrow-down'),
                                          this.slim.singleSelected.arrowIcon.arrow.classList.add('arrow-up')),
                                    this.slim[this.config.isMultiple ? 'multiSelected' : 'singleSelected'].container.classList.add(
                                        'above' === this.data.contentPosition ? this.config.openAbove : this.config.openBelow
                                    ),
                                    this.config.addToBody &&
                                        ((e = this.slim.container.getBoundingClientRect()),
                                        (this.slim.content.style.top = e.top + e.height + window.scrollY + 'px'),
                                        (this.slim.content.style.left = e.left + window.scrollX + 'px'),
                                        (this.slim.content.style.width = e.width + 'px')),
                                    this.slim.content.classList.add(this.config.open),
                                    'up' === this.config.showContent.toLowerCase() ||
                                    ('down' !== this.config.showContent.toLowerCase() &&
                                        'above' === (0, o.putContent)(this.slim.content, this.data.contentPosition, this.data.contentOpen))
                                        ? this.moveContentAbove()
                                        : this.moveContentBelow(),
                                    this.config.isMultiple ||
                                        ((e = this.data.getSelected()) &&
                                            ((e = e.id),
                                            (e = this.slim.list.querySelector('[data-id="' + e + '"]')) &&
                                                (0, o.ensureElementInView)(this.slim.list, e))),
                                    setTimeout(function () {
                                        (t.data.contentOpen = !0),
                                            t.config.searchFocus && t.slim.search.input.focus(),
                                            t.afterOpen && t.afterOpen();
                                    }, this.config.timeoutDelay)));
                        }),
                        (l.prototype.close = function () {
                            var e = this;
                            this.data.contentOpen &&
                                (this.beforeClose && this.beforeClose(),
                                this.config.isMultiple && this.slim.multiSelected
                                    ? (this.slim.multiSelected.container.classList.remove(this.config.openAbove),
                                      this.slim.multiSelected.container.classList.remove(this.config.openBelow),
                                      this.slim.multiSelected.plus.classList.remove('ss-cross'))
                                    : this.slim.singleSelected &&
                                      (this.slim.singleSelected.container.classList.remove(this.config.openAbove),
                                      this.slim.singleSelected.container.classList.remove(this.config.openBelow),
                                      this.slim.singleSelected.arrowIcon.arrow.classList.add('arrow-down'),
                                      this.slim.singleSelected.arrowIcon.arrow.classList.remove('arrow-up')),
                                this.slim.content.classList.remove(this.config.open),
                                (this.data.contentOpen = !1),
                                this.search(''),
                                setTimeout(function () {
                                    e.slim.content.removeAttribute('style'),
                                        (e.data.contentPosition = 'below'),
                                        e.config.isMultiple && e.slim.multiSelected
                                            ? (e.slim.multiSelected.container.classList.remove(e.config.openAbove),
                                              e.slim.multiSelected.container.classList.remove(e.config.openBelow))
                                            : e.slim.singleSelected &&
                                              (e.slim.singleSelected.container.classList.remove(e.config.openAbove),
                                              e.slim.singleSelected.container.classList.remove(e.config.openBelow)),
                                        e.slim.search.input.blur(),
                                        e.afterClose && e.afterClose();
                                }, this.config.timeoutDelay));
                        }),
                        (l.prototype.moveContentAbove = function () {
                            var e = 0;
                            this.config.isMultiple && this.slim.multiSelected
                                ? (e = this.slim.multiSelected.container.offsetHeight)
                                : this.slim.singleSelected && (e = this.slim.singleSelected.container.offsetHeight);
                            var t = e + this.slim.content.offsetHeight - 1;
                            (this.slim.content.style.margin = '-' + t + 'px 0 0 0'),
                                (this.slim.content.style.height = t - e + 1 + 'px'),
                                (this.slim.content.style.transformOrigin = 'center bottom'),
                                (this.data.contentPosition = 'above'),
                                this.config.isMultiple && this.slim.multiSelected
                                    ? (this.slim.multiSelected.container.classList.remove(this.config.openBelow),
                                      this.slim.multiSelected.container.classList.add(this.config.openAbove))
                                    : this.slim.singleSelected &&
                                      (this.slim.singleSelected.container.classList.remove(this.config.openBelow),
                                      this.slim.singleSelected.container.classList.add(this.config.openAbove));
                        }),
                        (l.prototype.moveContentBelow = function () {
                            (this.data.contentPosition = 'below'),
                                this.config.isMultiple && this.slim.multiSelected
                                    ? (this.slim.multiSelected.container.classList.remove(this.config.openAbove),
                                      this.slim.multiSelected.container.classList.add(this.config.openBelow))
                                    : this.slim.singleSelected &&
                                      (this.slim.singleSelected.container.classList.remove(this.config.openAbove),
                                      this.slim.singleSelected.container.classList.add(this.config.openBelow));
                        }),
                        (l.prototype.enable = function () {
                            (this.config.isEnabled = !0),
                                this.config.isMultiple && this.slim.multiSelected
                                    ? this.slim.multiSelected.container.classList.remove(this.config.disabled)
                                    : this.slim.singleSelected && this.slim.singleSelected.container.classList.remove(this.config.disabled),
                                (this.select.triggerMutationObserver = !1),
                                (this.select.element.disabled = !1),
                                (this.slim.search.input.disabled = !1),
                                (this.select.triggerMutationObserver = !0);
                        }),
                        (l.prototype.disable = function () {
                            (this.config.isEnabled = !1),
                                this.config.isMultiple && this.slim.multiSelected
                                    ? this.slim.multiSelected.container.classList.add(this.config.disabled)
                                    : this.slim.singleSelected && this.slim.singleSelected.container.classList.add(this.config.disabled),
                                (this.select.triggerMutationObserver = !1),
                                (this.select.element.disabled = !0),
                                (this.slim.search.input.disabled = !0),
                                (this.select.triggerMutationObserver = !0);
                        }),
                        (l.prototype.search = function (t) {
                            var i;
                            this.data.searchValue !== t &&
                                ((this.slim.search.input.value = t),
                                this.config.isAjax
                                    ? (((i = this).config.isSearching = !0),
                                      this.render(),
                                      this.ajax &&
                                          this.ajax(t, function (e) {
                                              (i.config.isSearching = !1),
                                                  Array.isArray(e)
                                                      ? (e.unshift({ text: '', placeholder: !0 }),
                                                        i.setData(e),
                                                        i.data.search(t),
                                                        i.render())
                                                      : 'string' == typeof e
                                                      ? i.slim.options(e)
                                                      : i.render();
                                          }))
                                    : (this.data.search(t), this.render()));
                        }),
                        (l.prototype.setSearchText = function (e) {
                            this.config.searchText = e;
                        }),
                        (l.prototype.render = function () {
                            this.config.isMultiple ? this.slim.values() : (this.slim.placeholder(), this.slim.deselect()),
                                this.slim.options();
                        }),
                        (l.prototype.destroy = function (e) {
                            var t = (e = void 0 === e ? null : e) ? document.querySelector('.' + e + '.ss-main') : this.slim.container,
                                i = e ? document.querySelector('[data-ssid='.concat(e, ']')) : this.select.element;
                            t &&
                                i &&
                                (document.removeEventListener('click', this.documentClick),
                                'auto' === this.config.showContent && window.removeEventListener('scroll', this.windowScroll, !1),
                                (i.style.display = ''),
                                delete i.dataset.ssid,
                                (i.slim = null),
                                t.parentElement && t.parentElement.removeChild(t),
                                !this.config.addToBody ||
                                    ((e = e ? document.querySelector('.' + e + '.ss-content') : this.slim.content) &&
                                        document.body.removeChild(e)));
                        }),
                        l);
                function l(e) {
                    var t = this;
                    (this.ajax = null),
                        (this.addable = null),
                        (this.beforeOnChange = null),
                        (this.onChange = null),
                        (this.beforeOpen = null),
                        (this.afterOpen = null),
                        (this.beforeClose = null),
                        (this.afterClose = null),
                        (this.windowScroll = (0, o.debounce)(function (e) {
                            t.data.contentOpen &&
                                ('above' === (0, o.putContent)(t.slim.content, t.data.contentPosition, t.data.contentOpen)
                                    ? t.moveContentAbove()
                                    : t.moveContentBelow());
                        })),
                        (this.documentClick = function (e) {
                            e.target && !(0, o.hasClassInTree)(e.target, t.config.id) && t.close();
                        });
                    var i = this.validate(e);
                    i.dataset.ssid && this.destroy(i.dataset.ssid),
                        e.ajax && (this.ajax = e.ajax),
                        e.addable && (this.addable = e.addable),
                        (this.config = new n.Config({
                            select: i,
                            isAjax: !!e.ajax,
                            showSearch: e.showSearch,
                            searchPlaceholder: e.searchPlaceholder,
                            searchText: e.searchText,
                            searchingText: e.searchingText,
                            searchFocus: e.searchFocus,
                            searchHighlight: e.searchHighlight,
                            searchFilter: e.searchFilter,
                            closeOnSelect: e.closeOnSelect,
                            showContent: e.showContent,
                            placeholderText: e.placeholder,
                            allowDeselect: e.allowDeselect,
                            allowDeselectOption: e.allowDeselectOption,
                            hideSelectedOption: e.hideSelectedOption,
                            deselectLabel: e.deselectLabel,
                            isEnabled: e.isEnabled,
                            valuesUseText: e.valuesUseText,
                            showOptionTooltips: e.showOptionTooltips,
                            selectByGroup: e.selectByGroup,
                            limit: e.limit,
                            timeoutDelay: e.timeoutDelay,
                            addToBody: e.addToBody,
                        })),
                        (this.select = new s.Select({ select: i, main: this })),
                        (this.data = new r.Data({ main: this })),
                        (this.slim = new a.Slim({ main: this })),
                        this.select.element.parentNode &&
                            this.select.element.parentNode.insertBefore(this.slim.container, this.select.element.nextSibling),
                        e.data ? this.setData(e.data) : this.render(),
                        document.addEventListener('click', this.documentClick),
                        'auto' === this.config.showContent && window.addEventListener('scroll', this.windowScroll, !1),
                        e.beforeOnChange && (this.beforeOnChange = e.beforeOnChange),
                        e.onChange && (this.onChange = e.onChange),
                        e.beforeOpen && (this.beforeOpen = e.beforeOpen),
                        e.afterOpen && (this.afterOpen = e.afterOpen),
                        e.beforeClose && (this.beforeClose = e.beforeClose),
                        e.afterClose && (this.afterClose = e.afterClose),
                        this.config.isEnabled || this.disable();
                }
                t.default = i;
            },
            function (e, t, i) {
                'use strict';
                (t.__esModule = !0), (t.Config = void 0);
                var n =
                    ((s.prototype.searchFilter = function (e, t) {
                        return -1 !== e.text.toLowerCase().indexOf(t.toLowerCase());
                    }),
                    s);
                function s(e) {
                    (this.id = ''),
                        (this.isMultiple = !1),
                        (this.isAjax = !1),
                        (this.isSearching = !1),
                        (this.showSearch = !0),
                        (this.searchFocus = !0),
                        (this.searchHighlight = !1),
                        (this.closeOnSelect = !0),
                        (this.showContent = 'auto'),
                        (this.searchPlaceholder = 'Search'),
                        (this.searchText = 'No Results'),
                        (this.searchingText = 'Searching...'),
                        (this.placeholderText = 'Select Value'),
                        (this.allowDeselect = !1),
                        (this.allowDeselectOption = !1),
                        (this.hideSelectedOption = !1),
                        (this.deselectLabel = 'x'),
                        (this.isEnabled = !0),
                        (this.valuesUseText = !1),
                        (this.showOptionTooltips = !1),
                        (this.selectByGroup = !1),
                        (this.limit = 0),
                        (this.timeoutDelay = 200),
                        (this.addToBody = !1),
                        (this.main = 'ss-main'),
                        (this.singleSelected = 'ss-single-selected'),
                        (this.arrow = 'ss-arrow'),
                        (this.multiSelected = 'ss-multi-selected'),
                        (this.add = 'ss-add'),
                        (this.plus = 'ss-plus'),
                        (this.values = 'ss-values'),
                        (this.value = 'ss-value'),
                        (this.valueText = 'ss-value-text'),
                        (this.valueDelete = 'ss-value-delete'),
                        (this.content = 'ss-content'),
                        (this.open = 'ss-open'),
                        (this.openAbove = 'ss-open-above'),
                        (this.openBelow = 'ss-open-below'),
                        (this.search = 'ss-search'),
                        (this.searchHighlighter = 'ss-search-highlight'),
                        (this.addable = 'ss-addable'),
                        (this.list = 'ss-list'),
                        (this.optgroup = 'ss-optgroup'),
                        (this.optgroupLabel = 'ss-optgroup-label'),
                        (this.optgroupLabelSelectable = 'ss-optgroup-label-selectable'),
                        (this.option = 'ss-option'),
                        (this.optionSelected = 'ss-option-selected'),
                        (this.highlighted = 'ss-highlighted'),
                        (this.disabled = 'ss-disabled'),
                        (this.hide = 'ss-hide'),
                        (this.id = 'ss-' + Math.floor(1e5 * Math.random())),
                        (this.style = e.select.style.cssText),
                        (this.class = e.select.className.split(' ')),
                        (this.isMultiple = e.select.multiple),
                        (this.isAjax = e.isAjax),
                        (this.showSearch = !1 !== e.showSearch),
                        (this.searchFocus = !1 !== e.searchFocus),
                        (this.searchHighlight = !0 === e.searchHighlight),
                        (this.closeOnSelect = !1 !== e.closeOnSelect),
                        e.showContent && (this.showContent = e.showContent),
                        (this.isEnabled = !1 !== e.isEnabled),
                        e.searchPlaceholder && (this.searchPlaceholder = e.searchPlaceholder),
                        e.searchText && (this.searchText = e.searchText),
                        e.searchingText && (this.searchingText = e.searchingText),
                        e.placeholderText && (this.placeholderText = e.placeholderText),
                        (this.allowDeselect = !0 === e.allowDeselect),
                        (this.allowDeselectOption = !0 === e.allowDeselectOption),
                        (this.hideSelectedOption = !0 === e.hideSelectedOption),
                        e.deselectLabel && (this.deselectLabel = e.deselectLabel),
                        e.valuesUseText && (this.valuesUseText = e.valuesUseText),
                        e.showOptionTooltips && (this.showOptionTooltips = e.showOptionTooltips),
                        e.selectByGroup && (this.selectByGroup = e.selectByGroup),
                        e.limit && (this.limit = e.limit),
                        e.searchFilter && (this.searchFilter = e.searchFilter),
                        null != e.timeoutDelay && (this.timeoutDelay = e.timeoutDelay),
                        (this.addToBody = !0 === e.addToBody);
                }
                t.Config = n;
            },
            function (e, t, i) {
                'use strict';
                (t.__esModule = !0), (t.Select = void 0);
                var n = i(0),
                    i =
                        ((s.prototype.setValue = function () {
                            if (this.main.data.getSelected()) {
                                if (this.main.config.isMultiple)
                                    for (var e = this.main.data.getSelected(), t = 0, i = this.element.options; t < i.length; t++) {
                                        var n = i[t];
                                        n.selected = !1;
                                        for (var s = 0, a = e; s < a.length; s++) a[s].value === n.value && (n.selected = !0);
                                    }
                                else {
                                    e = this.main.data.getSelected();
                                    this.element.value = e ? e.value : '';
                                }
                                (this.main.data.isOnChangeEnabled = !1),
                                    this.element.dispatchEvent(new CustomEvent('change', { bubbles: !0 })),
                                    (this.main.data.isOnChangeEnabled = !0);
                            }
                        }),
                        (s.prototype.addAttributes = function () {
                            (this.element.tabIndex = -1),
                                (this.element.style.display = 'none'),
                                (this.element.dataset.ssid = this.main.config.id),
                                this.element.setAttribute('aria-hidden', 'true');
                        }),
                        (s.prototype.addEventListeners = function () {
                            var t = this;
                            this.element.addEventListener('change', function (e) {
                                t.main.data.setSelectedFromSelect(), t.main.render();
                            });
                        }),
                        (s.prototype.addMutationObserver = function () {
                            var t = this;
                            this.main.config.isAjax ||
                                ((this.mutationObserver = new MutationObserver(function (e) {
                                    t.triggerMutationObserver &&
                                        (t.main.data.parseSelectData(),
                                        t.main.data.setSelectedFromSelect(),
                                        t.main.render(),
                                        e.forEach(function (e) {
                                            'class' === e.attributeName && t.main.slim.updateContainerDivClass(t.main.slim.container);
                                        }));
                                })),
                                this.observeMutationObserver());
                        }),
                        (s.prototype.observeMutationObserver = function () {
                            this.mutationObserver &&
                                this.mutationObserver.observe(this.element, { attributes: !0, childList: !0, characterData: !0 });
                        }),
                        (s.prototype.disconnectMutationObserver = function () {
                            this.mutationObserver && this.mutationObserver.disconnect();
                        }),
                        (s.prototype.create = function (e) {
                            this.element.innerHTML = '';
                            for (var t = 0, i = e; t < i.length; t++) {
                                var n = i[t];
                                if (n.hasOwnProperty('options')) {
                                    var s = n,
                                        a = document.createElement('optgroup');
                                    if (((a.label = s.label), s.options))
                                        for (var o = 0, l = s.options; o < l.length; o++) {
                                            var r = l[o];
                                            a.appendChild(this.createOption(r));
                                        }
                                    this.element.appendChild(a);
                                } else this.element.appendChild(this.createOption(n));
                            }
                        }),
                        (s.prototype.createOption = function (t) {
                            var i = document.createElement('option');
                            return (
                                (i.value = '' !== t.value ? t.value : t.text),
                                (i.innerHTML = t.innerHTML || t.text),
                                t.selected && (i.selected = t.selected),
                                !1 === t.display && (i.style.display = 'none'),
                                t.disabled && (i.disabled = !0),
                                t.placeholder && i.setAttribute('data-placeholder', 'true'),
                                t.mandatory && i.setAttribute('data-mandatory', 'true'),
                                t.class &&
                                    t.class.split(' ').forEach(function (e) {
                                        i.classList.add(e);
                                    }),
                                t.data &&
                                    'object' == typeof t.data &&
                                    Object.keys(t.data).forEach(function (e) {
                                        i.setAttribute('data-' + (0, n.kebabCase)(e), t.data[e]);
                                    }),
                                i
                            );
                        }),
                        s);
                function s(e) {
                    (this.triggerMutationObserver = !0),
                        (this.element = e.select),
                        (this.main = e.main),
                        this.element.disabled && (this.main.config.isEnabled = !1),
                        this.addAttributes(),
                        this.addEventListeners(),
                        (this.mutationObserver = null),
                        this.addMutationObserver(),
                        (this.element.slim = e.main);
                }
                t.Select = i;
            },
            function (e, t, i) {
                'use strict';
                (t.__esModule = !0), (t.Slim = void 0);
                var n = i(0),
                    o = i(1),
                    i =
                        ((s.prototype.containerDiv = function () {
                            var e = document.createElement('div');
                            return (e.style.cssText = this.main.config.style), this.updateContainerDivClass(e), e;
                        }),
                        (s.prototype.updateContainerDivClass = function (e) {
                            (this.main.config.class = this.main.select.element.className.split(' ')),
                                (e.className = ''),
                                e.classList.add(this.main.config.id),
                                e.classList.add(this.main.config.main);
                            for (var t = 0, i = this.main.config.class; t < i.length; t++) {
                                var n = i[t];
                                '' !== n.trim() && e.classList.add(n);
                            }
                        }),
                        (s.prototype.singleSelectedDiv = function () {
                            var t = this,
                                e = document.createElement('div');
                            e.classList.add(this.main.config.singleSelected);
                            var i = document.createElement('span');
                            i.classList.add('placeholder'), e.appendChild(i);
                            var n = document.createElement('span');
                            (n.innerHTML = this.main.config.deselectLabel),
                                n.classList.add('ss-deselect'),
                                (n.onclick = function (e) {
                                    e.stopPropagation(), t.main.config.isEnabled && t.main.set('');
                                }),
                                e.appendChild(n);
                            var s = document.createElement('span');
                            s.classList.add(this.main.config.arrow);
                            var a = document.createElement('span');
                            return (
                                a.classList.add('arrow-down'),
                                s.appendChild(a),
                                e.appendChild(s),
                                (e.onclick = function () {
                                    t.main.config.isEnabled && (t.main.data.contentOpen ? t.main.close() : t.main.open());
                                }),
                                { container: e, placeholder: i, deselect: n, arrowIcon: { container: s, arrow: a } }
                            );
                        }),
                        (s.prototype.placeholder = function () {
                            var e,
                                t = this.main.data.getSelected();
                            null === t || (t && t.placeholder)
                                ? ((e = document.createElement('span')).classList.add(this.main.config.disabled),
                                  (e.innerHTML = this.main.config.placeholderText),
                                  this.singleSelected && (this.singleSelected.placeholder.innerHTML = e.outerHTML))
                                : ((e = ''),
                                  t && (e = t.innerHTML && !0 !== this.main.config.valuesUseText ? t.innerHTML : t.text),
                                  this.singleSelected && (this.singleSelected.placeholder.innerHTML = t ? e : ''));
                        }),
                        (s.prototype.deselect = function () {
                            this.singleSelected &&
                                (!this.main.config.allowDeselect || '' === this.main.selected()
                                    ? this.singleSelected.deselect.classList.add('ss-hide')
                                    : this.singleSelected.deselect.classList.remove('ss-hide'));
                        }),
                        (s.prototype.multiSelectedDiv = function () {
                            var t = this,
                                e = document.createElement('div');
                            e.classList.add(this.main.config.multiSelected);
                            var i = document.createElement('div');
                            i.classList.add(this.main.config.values), e.appendChild(i);
                            var n = document.createElement('div');
                            n.classList.add(this.main.config.add);
                            var s = document.createElement('span');
                            return (
                                s.classList.add(this.main.config.plus),
                                (s.onclick = function (e) {
                                    t.main.data.contentOpen && (t.main.close(), e.stopPropagation());
                                }),
                                n.appendChild(s),
                                e.appendChild(n),
                                (e.onclick = function (e) {
                                    t.main.config.isEnabled &&
                                        (e.target.classList.contains(t.main.config.valueDelete) ||
                                            (t.main.data.contentOpen ? t.main.close() : t.main.open()));
                                }),
                                { container: e, values: i, add: n, plus: s }
                            );
                        }),
                        (s.prototype.values = function () {
                            if (this.multiSelected) {
                                for (
                                    var e = this.multiSelected.values.childNodes, t = this.main.data.getSelected(), i = [], n = 0, s = e;
                                    n < s.length;
                                    n++
                                ) {
                                    for (var a = s[n], o = !0, l = 0, r = t; l < r.length; l++) {
                                        var c = r[l];
                                        String(c.id) === String(a.dataset.id) && (o = !1);
                                    }
                                    o && i.push(a);
                                }
                                for (var d = 0, h = i; d < h.length; d++) {
                                    var u = h[d];
                                    u.classList.add('ss-out'), this.multiSelected.values.removeChild(u);
                                }
                                for (var p, e = this.multiSelected.values.childNodes, c = 0; c < t.length; c++) {
                                    o = !1;
                                    for (var m = 0, f = e; m < f.length; m++) {
                                        a = f[m];
                                        String(t[c].id) === String(a.dataset.id) && (o = !0);
                                    }
                                    o ||
                                        (0 !== e.length && HTMLElement.prototype.insertAdjacentElement
                                            ? 0 === c
                                                ? this.multiSelected.values.insertBefore(this.valueDiv(t[c]), e[c])
                                                : e[c - 1].insertAdjacentElement('afterend', this.valueDiv(t[c]))
                                            : this.multiSelected.values.appendChild(this.valueDiv(t[c])));
                                }
                                0 === t.length &&
                                    ((p = document.createElement('span')).classList.add(this.main.config.disabled),
                                    (p.innerHTML = this.main.config.placeholderText),
                                    (this.multiSelected.values.innerHTML = p.outerHTML));
                            }
                        }),
                        (s.prototype.valueDiv = function (s) {
                            var a = this,
                                e = document.createElement('div');
                            e.classList.add(this.main.config.value), (e.dataset.id = s.id);
                            var t = document.createElement('span');
                            return (
                                t.classList.add(this.main.config.valueText),
                                (t.innerHTML = s.innerHTML && !0 !== this.main.config.valuesUseText ? s.innerHTML : s.text),
                                e.appendChild(t),
                                s.mandatory ||
                                    ((t = document.createElement('span')).classList.add(this.main.config.valueDelete),
                                    (t.innerHTML = this.main.config.deselectLabel),
                                    (t.onclick = function (e) {
                                        e.preventDefault(), e.stopPropagation();
                                        var t = !1;
                                        if ((a.main.beforeOnChange || (t = !0), a.main.beforeOnChange)) {
                                            for (
                                                var e = a.main.data.getSelected(), i = JSON.parse(JSON.stringify(e)), n = 0;
                                                n < i.length;
                                                n++
                                            )
                                                i[n].id === s.id && i.splice(n, 1);
                                            !1 !== a.main.beforeOnChange(i) && (t = !0);
                                        }
                                        t &&
                                            (a.main.data.removeFromSelected(s.id, 'id'),
                                            a.main.render(),
                                            a.main.select.setValue(),
                                            a.main.data.onDataChange());
                                    }),
                                    e.appendChild(t)),
                                e
                            );
                        }),
                        (s.prototype.contentDiv = function () {
                            var e = document.createElement('div');
                            return e.classList.add(this.main.config.content), e;
                        }),
                        (s.prototype.searchDiv = function () {
                            var n = this,
                                e = document.createElement('div'),
                                s = document.createElement('input'),
                                a = document.createElement('div');
                            e.classList.add(this.main.config.search);
                            var t = { container: e, input: s };
                            return (
                                this.main.config.showSearch || (e.classList.add(this.main.config.hide), (s.readOnly = !0)),
                                (s.type = 'search'),
                                (s.placeholder = this.main.config.searchPlaceholder),
                                (s.tabIndex = 0),
                                s.setAttribute('aria-label', this.main.config.searchPlaceholder),
                                s.setAttribute('autocapitalize', 'off'),
                                s.setAttribute('autocomplete', 'off'),
                                s.setAttribute('autocorrect', 'off'),
                                (s.onclick = function (e) {
                                    setTimeout(function () {
                                        '' === e.target.value && n.main.search('');
                                    }, 10);
                                }),
                                (s.onkeydown = function (e) {
                                    'ArrowUp' === e.key
                                        ? (n.main.open(), n.highlightUp(), e.preventDefault())
                                        : 'ArrowDown' === e.key
                                        ? (n.main.open(), n.highlightDown(), e.preventDefault())
                                        : 'Tab' === e.key
                                        ? n.main.data.contentOpen
                                            ? n.main.close()
                                            : setTimeout(function () {
                                                  n.main.close();
                                              }, n.main.config.timeoutDelay)
                                        : 'Enter' === e.key && e.preventDefault();
                                }),
                                (s.onkeyup = function (e) {
                                    var t = e.target;
                                    if ('Enter' === e.key) {
                                        if (n.main.addable && e.ctrlKey) return a.click(), e.preventDefault(), void e.stopPropagation();
                                        var i = n.list.querySelector('.' + n.main.config.highlighted);
                                        i && i.click();
                                    } else
                                        'ArrowUp' === e.key ||
                                            'ArrowDown' === e.key ||
                                            ('Escape' === e.key
                                                ? n.main.close()
                                                : n.main.config.showSearch && n.main.data.contentOpen
                                                ? n.main.search(t.value)
                                                : (s.value = ''));
                                    e.preventDefault(), e.stopPropagation();
                                }),
                                (s.onfocus = function () {
                                    n.main.open();
                                }),
                                e.appendChild(s),
                                this.main.addable &&
                                    (a.classList.add(this.main.config.addable),
                                    (a.innerHTML = '+'),
                                    (a.onclick = function (e) {
                                        var t;
                                        n.main.addable &&
                                            (e.preventDefault(),
                                            e.stopPropagation(),
                                            '' !== (e = n.search.input.value).trim()
                                                ? ((e = n.main.addable(e)),
                                                  (t = ''),
                                                  e &&
                                                      ('object' == typeof e
                                                          ? (0, o.validateOption)(e) && (n.main.addData(e), (t = e.value || e.text))
                                                          : (n.main.addData(n.main.data.newOption({ text: e, value: e })), (t = e)),
                                                      n.main.search(''),
                                                      setTimeout(function () {
                                                          n.main.set(t, 'value', !1, !1);
                                                      }, 100),
                                                      n.main.config.closeOnSelect &&
                                                          setTimeout(function () {
                                                              n.main.close();
                                                          }, 100)))
                                                : n.search.input.focus());
                                    }),
                                    e.appendChild(a),
                                    (t.addable = a)),
                                t
                            );
                        }),
                        (s.prototype.highlightUp = function () {
                            var e = this.list.querySelector('.' + this.main.config.highlighted),
                                t = null;
                            if (e)
                                for (t = e.previousSibling; null !== t && t.classList.contains(this.main.config.disabled); )
                                    t = t.previousSibling;
                            else
                                var i = this.list.querySelectorAll(
                                        '.' + this.main.config.option + ':not(.' + this.main.config.disabled + ')'
                                    ),
                                    t = i[i.length - 1];
                            null !== (t = t && t.classList.contains(this.main.config.optgroupLabel) ? null : t) ||
                                ((i = e.parentNode).classList.contains(this.main.config.optgroup) &&
                                    (!i.previousSibling ||
                                        ((i = i.previousSibling.querySelectorAll(
                                            '.' + this.main.config.option + ':not(.' + this.main.config.disabled + ')'
                                        )).length &&
                                            (t = i[i.length - 1])))),
                                t &&
                                    (e && e.classList.remove(this.main.config.highlighted),
                                    t.classList.add(this.main.config.highlighted),
                                    (0, n.ensureElementInView)(this.list, t));
                        }),
                        (s.prototype.highlightDown = function () {
                            var e,
                                t = this.list.querySelector('.' + this.main.config.highlighted),
                                i = null;
                            if (t)
                                for (i = t.nextSibling; null !== i && i.classList.contains(this.main.config.disabled); ) i = i.nextSibling;
                            else i = this.list.querySelector('.' + this.main.config.option + ':not(.' + this.main.config.disabled + ')');
                            null !== i ||
                                null === t ||
                                ((e = t.parentNode).classList.contains(this.main.config.optgroup) &&
                                    e.nextSibling &&
                                    (i = e.nextSibling.querySelector(
                                        '.' + this.main.config.option + ':not(.' + this.main.config.disabled + ')'
                                    ))),
                                i &&
                                    (t && t.classList.remove(this.main.config.highlighted),
                                    i.classList.add(this.main.config.highlighted),
                                    (0, n.ensureElementInView)(this.list, i));
                        }),
                        (s.prototype.listDiv = function () {
                            var e = document.createElement('div');
                            return e.classList.add(this.main.config.list), e.setAttribute('role', 'listbox'), e;
                        }),
                        (s.prototype.options = function (e) {
                            void 0 === e && (e = '');
                            var t = this.main.data.filtered || this.main.data.data;
                            if ((this.list.innerHTML = '') !== e)
                                return (
                                    (i = document.createElement('div')).classList.add(this.main.config.option),
                                    i.classList.add(this.main.config.disabled),
                                    (i.innerHTML = e),
                                    void this.list.appendChild(i)
                                );
                            if (this.main.config.isAjax && this.main.config.isSearching)
                                return (
                                    (i = document.createElement('div')).classList.add(this.main.config.option),
                                    i.classList.add(this.main.config.disabled),
                                    (i.innerHTML = this.main.config.searchingText),
                                    void this.list.appendChild(i)
                                );
                            if (0 === t.length) {
                                var i = document.createElement('div');
                                return (
                                    i.classList.add(this.main.config.option),
                                    i.classList.add(this.main.config.disabled),
                                    (i.innerHTML = this.main.config.searchText),
                                    void this.list.appendChild(i)
                                );
                            }
                            for (var r = this, n = 0, s = t; n < s.length; n++)
                                !(function (e) {
                                    if (e.hasOwnProperty('label')) {
                                        var t = e,
                                            s = document.createElement('div');
                                        s.classList.add(r.main.config.optgroup);
                                        var i = document.createElement('div');
                                        i.classList.add(r.main.config.optgroupLabel),
                                            r.main.config.selectByGroup &&
                                                r.main.config.isMultiple &&
                                                i.classList.add(r.main.config.optgroupLabelSelectable),
                                            (i.innerHTML = t.label),
                                            s.appendChild(i);
                                        t = t.options;
                                        if (t) {
                                            for (var a, n = 0, o = t; n < o.length; n++) {
                                                var l = o[n];
                                                s.appendChild(r.option(l));
                                            }
                                            r.main.config.selectByGroup &&
                                                r.main.config.isMultiple &&
                                                ((a = r),
                                                i.addEventListener('click', function (e) {
                                                    e.preventDefault(), e.stopPropagation();
                                                    for (var t = 0, i = s.children; t < i.length; t++) {
                                                        var n = i[t];
                                                        -1 !== n.className.indexOf(a.main.config.option) && n.click();
                                                    }
                                                }));
                                        }
                                        r.list.appendChild(s);
                                    } else r.list.appendChild(r.option(e));
                                })(s[n]);
                        }),
                        (s.prototype.option = function (o) {
                            if (o.placeholder) {
                                var e = document.createElement('div');
                                return e.classList.add(this.main.config.option), e.classList.add(this.main.config.hide), e;
                            }
                            var t = document.createElement('div');
                            t.classList.add(this.main.config.option),
                                t.setAttribute('role', 'option'),
                                o.class &&
                                    o.class.split(' ').forEach(function (e) {
                                        t.classList.add(e);
                                    }),
                                o.style && (t.style.cssText = o.style);
                            var l = this.main.data.getSelected();
                            (t.dataset.id = o.id),
                                this.main.config.searchHighlight &&
                                this.main.slim &&
                                o.innerHTML &&
                                '' !== this.main.slim.search.input.value.trim()
                                    ? (t.innerHTML = (0, n.highlight)(
                                          o.innerHTML,
                                          this.main.slim.search.input.value,
                                          this.main.config.searchHighlighter
                                      ))
                                    : o.innerHTML && (t.innerHTML = o.innerHTML),
                                this.main.config.showOptionTooltips && t.textContent && t.setAttribute('title', t.textContent);
                            var r = this;
                            t.addEventListener('click', function (e) {
                                e.preventDefault(), e.stopPropagation();
                                var t = this.dataset.id;
                                if (!0 === o.selected && r.main.config.allowDeselectOption) {
                                    var i = !1;
                                    if (
                                        ((r.main.beforeOnChange && r.main.config.isMultiple) || (i = !0),
                                        r.main.beforeOnChange && r.main.config.isMultiple)
                                    ) {
                                        for (var n = r.main.data.getSelected(), s = JSON.parse(JSON.stringify(n)), a = 0; a < s.length; a++)
                                            s[a].id === t && s.splice(a, 1);
                                        !1 !== r.main.beforeOnChange(s) && (i = !0);
                                    }
                                    i &&
                                        (r.main.config.isMultiple
                                            ? (r.main.data.removeFromSelected(t, 'id'),
                                              r.main.render(),
                                              r.main.select.setValue(),
                                              r.main.data.onDataChange())
                                            : r.main.set(''));
                                } else o.disabled || o.selected || (r.main.config.limit && Array.isArray(l) && r.main.config.limit <= l.length) || (r.main.beforeOnChange ? ((n = void 0), ((i = JSON.parse(JSON.stringify(r.main.data.getObjectFromData(t)))).selected = !0), r.main.config.isMultiple ? (n = JSON.parse(JSON.stringify(l))).push(i) : (n = JSON.parse(JSON.stringify(i))), !1 !== r.main.beforeOnChange(n) && r.main.set(t, 'id', r.main.config.closeOnSelect)) : r.main.set(t, 'id', r.main.config.closeOnSelect));
                            });
                            e = l && (0, n.isValueInArrayOfObjects)(l, 'id', o.id);
                            return (
                                (o.disabled || e) &&
                                    ((t.onclick = null),
                                    r.main.config.allowDeselectOption || t.classList.add(this.main.config.disabled),
                                    r.main.config.hideSelectedOption && t.classList.add(this.main.config.hide)),
                                e ? t.classList.add(this.main.config.optionSelected) : t.classList.remove(this.main.config.optionSelected),
                                t
                            );
                        }),
                        s);
                function s(e) {
                    (this.main = e.main),
                        (this.container = this.containerDiv()),
                        (this.content = this.contentDiv()),
                        (this.search = this.searchDiv()),
                        (this.list = this.listDiv()),
                        this.options(),
                        (this.singleSelected = null),
                        (this.multiSelected = null),
                        this.main.config.isMultiple
                            ? ((this.multiSelected = this.multiSelectedDiv()),
                              this.multiSelected && this.container.appendChild(this.multiSelected.container))
                            : ((this.singleSelected = this.singleSelectedDiv()), this.container.appendChild(this.singleSelected.container)),
                        this.main.config.addToBody
                            ? (this.content.classList.add(this.main.config.id), document.body.appendChild(this.content))
                            : this.container.appendChild(this.content),
                        this.content.appendChild(this.search.container),
                        this.content.appendChild(this.list);
                }
                t.Slim = i;
            },
        ]),
        (s.c = n),
        (s.d = function (e, t, i) {
            s.o(e, t) || Object.defineProperty(e, t, { enumerable: !0, get: i });
        }),
        (s.r = function (e) {
            'undefined' != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, { value: 'Module' }),
                Object.defineProperty(e, '__esModule', { value: !0 });
        }),
        (s.t = function (t, e) {
            if ((1 & e && (t = s(t)), 8 & e)) return t;
            if (4 & e && 'object' == typeof t && t && t.__esModule) return t;
            var i = Object.create(null);
            if ((s.r(i), Object.defineProperty(i, 'default', { enumerable: !0, value: t }), 2 & e && 'string' != typeof t))
                for (var n in t)
                    s.d(
                        i,
                        n,
                        function (e) {
                            return t[e];
                        }.bind(null, n)
                    );
            return i;
        }),
        (s.n = function (e) {
            var t =
                e && e.__esModule
                    ? function () {
                          return e.default;
                      }
                    : function () {
                          return e;
                      };
            return s.d(t, 'a', t), t;
        }),
        (s.o = function (e, t) {
            return Object.prototype.hasOwnProperty.call(e, t);
        }),
        (s.p = ''),
        s((s.s = 2)).default
    );
    function s(e) {
        if (n[e]) return n[e].exports;
        var t = (n[e] = { i: e, l: !1, exports: {} });
        return i[e].call(t.exports, t, t.exports, s), (t.l = !0), t.exports;
    }
    var i, n;
});

/*!
 * clipboard.js v2.0.11
 * https://clipboardjs.com/
 *
 * Licensed MIT © Zeno Rocha
 */
!(function (t, e) {
    'object' == typeof exports && 'object' == typeof module
        ? (module.exports = e())
        : 'function' == typeof define && define.amd
        ? define([], e)
        : 'object' == typeof exports
        ? (exports.ClipboardJS = e())
        : (t.ClipboardJS = e());
})(this, function () {
    return (
        (n = {
            686: function (t, e, n) {
                'use strict';
                n.d(e, {
                    default: function () {
                        return b;
                    },
                });
                var e = n(279),
                    i = n.n(e),
                    e = n(370),
                    u = n.n(e),
                    e = n(817),
                    r = n.n(e);
                function c(t) {
                    try {
                        return document.execCommand(t);
                    } catch (t) {
                        return;
                    }
                }
                var a = function (t) {
                    t = r()(t);
                    return c('cut'), t;
                };
                function o(t, e) {
                    var n,
                        o,
                        t =
                            ((n = t),
                            (o = 'rtl' === document.documentElement.getAttribute('dir')),
                            ((t = document.createElement('textarea')).style.fontSize = '12pt'),
                            (t.style.border = '0'),
                            (t.style.padding = '0'),
                            (t.style.margin = '0'),
                            (t.style.position = 'absolute'),
                            (t.style[o ? 'right' : 'left'] = '-9999px'),
                            (o = window.pageYOffset || document.documentElement.scrollTop),
                            (t.style.top = ''.concat(o, 'px')),
                            t.setAttribute('readonly', ''),
                            (t.value = n),
                            t);
                    return e.container.appendChild(t), (e = r()(t)), c('copy'), t.remove(), e;
                }
                var f = function (t) {
                    var e = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : { container: document.body },
                        n = '';
                    return (
                        'string' == typeof t
                            ? (n = o(t, e))
                            : t instanceof HTMLInputElement &&
                              !['text', 'search', 'url', 'tel', 'password'].includes(null == t ? void 0 : t.type)
                            ? (n = o(t.value, e))
                            : ((n = r()(t)), c('copy')),
                        n
                    );
                };
                function l(t) {
                    return (l =
                        'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
                            ? function (t) {
                                  return typeof t;
                              }
                            : function (t) {
                                  return t && 'function' == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype
                                      ? 'symbol'
                                      : typeof t;
                              })(t);
                }
                var s = function () {
                    var t = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : {},
                        e = t.action,
                        n = void 0 === e ? 'copy' : e,
                        o = t.container,
                        e = t.target,
                        t = t.text;
                    if ('copy' !== n && 'cut' !== n) throw new Error('Invalid "action" value, use either "copy" or "cut"');
                    if (void 0 !== e) {
                        if (!e || 'object' !== l(e) || 1 !== e.nodeType) throw new Error('Invalid "target" value, use a valid Element');
                        if ('copy' === n && e.hasAttribute('disabled'))
                            throw new Error('Invalid "target" attribute. Please use "readonly" instead of "disabled" attribute');
                        if ('cut' === n && (e.hasAttribute('readonly') || e.hasAttribute('disabled')))
                            throw new Error(
                                'Invalid "target" attribute. You can\'t cut text from elements with "readonly" or "disabled" attributes'
                            );
                    }
                    return t ? f(t, { container: o }) : e ? ('cut' === n ? a(e) : f(e, { container: o })) : void 0;
                };
                function p(t) {
                    return (p =
                        'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
                            ? function (t) {
                                  return typeof t;
                              }
                            : function (t) {
                                  return t && 'function' == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype
                                      ? 'symbol'
                                      : typeof t;
                              })(t);
                }
                function d(t, e) {
                    for (var n = 0; n < e.length; n++) {
                        var o = e[n];
                        (o.enumerable = o.enumerable || !1),
                            (o.configurable = !0),
                            'value' in o && (o.writable = !0),
                            Object.defineProperty(t, o.key, o);
                    }
                }
                function y(t, e) {
                    return (y =
                        Object.setPrototypeOf ||
                        function (t, e) {
                            return (t.__proto__ = e), t;
                        })(t, e);
                }
                function h(n) {
                    var o = (function () {
                        if ('undefined' == typeof Reflect || !Reflect.construct) return !1;
                        if (Reflect.construct.sham) return !1;
                        if ('function' == typeof Proxy) return !0;
                        try {
                            return Date.prototype.toString.call(Reflect.construct(Date, [], function () {})), !0;
                        } catch (t) {
                            return !1;
                        }
                    })();
                    return function () {
                        var t,
                            e = v(n);
                        return (
                            (t = o ? ((t = v(this).constructor), Reflect.construct(e, arguments, t)) : e.apply(this, arguments)),
                            (e = this),
                            !(t = t) || ('object' !== p(t) && 'function' != typeof t)
                                ? (function (t) {
                                      if (void 0 !== t) return t;
                                      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                                  })(e)
                                : t
                        );
                    };
                }
                function v(t) {
                    return (v = Object.setPrototypeOf
                        ? Object.getPrototypeOf
                        : function (t) {
                              return t.__proto__ || Object.getPrototypeOf(t);
                          })(t);
                }
                function m(t, e) {
                    t = 'data-clipboard-'.concat(t);
                    if (e.hasAttribute(t)) return e.getAttribute(t);
                }
                var b = (function () {
                    !(function (t, e) {
                        if ('function' != typeof e && null !== e) throw new TypeError('Super expression must either be null or a function');
                        (t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } })),
                            e && y(t, e);
                    })(r, i());
                    var t,
                        e,
                        n,
                        o = h(r);
                    function r(t, e) {
                        var n;
                        return (
                            (function (t) {
                                if (!(t instanceof r)) throw new TypeError('Cannot call a class as a function');
                            })(this),
                            (n = o.call(this)).resolveOptions(e),
                            n.listenClick(t),
                            n
                        );
                    }
                    return (
                        (t = r),
                        (n = [
                            {
                                key: 'copy',
                                value: function (t) {
                                    var e = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : { container: document.body };
                                    return f(t, e);
                                },
                            },
                            {
                                key: 'cut',
                                value: function (t) {
                                    return a(t);
                                },
                            },
                            {
                                key: 'isSupported',
                                value: function () {
                                    var t = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : ['copy', 'cut'],
                                        t = 'string' == typeof t ? [t] : t,
                                        e = !!document.queryCommandSupported;
                                    return (
                                        t.forEach(function (t) {
                                            e = e && !!document.queryCommandSupported(t);
                                        }),
                                        e
                                    );
                                },
                            },
                        ]),
                        (e = [
                            {
                                key: 'resolveOptions',
                                value: function () {
                                    var t = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : {};
                                    (this.action = 'function' == typeof t.action ? t.action : this.defaultAction),
                                        (this.target = 'function' == typeof t.target ? t.target : this.defaultTarget),
                                        (this.text = 'function' == typeof t.text ? t.text : this.defaultText),
                                        (this.container = 'object' === p(t.container) ? t.container : document.body);
                                },
                            },
                            {
                                key: 'listenClick',
                                value: function (t) {
                                    var e = this;
                                    this.listener = u()(t, 'click', function (t) {
                                        return e.onClick(t);
                                    });
                                },
                            },
                            {
                                key: 'onClick',
                                value: function (t) {
                                    var e = t.delegateTarget || t.currentTarget,
                                        n = this.action(e) || 'copy',
                                        t = s({ action: n, container: this.container, target: this.target(e), text: this.text(e) });
                                    this.emit(t ? 'success' : 'error', {
                                        action: n,
                                        text: t,
                                        trigger: e,
                                        clearSelection: function () {
                                            e && e.focus(), window.getSelection().removeAllRanges();
                                        },
                                    });
                                },
                            },
                            {
                                key: 'defaultAction',
                                value: function (t) {
                                    return m('action', t);
                                },
                            },
                            {
                                key: 'defaultTarget',
                                value: function (t) {
                                    t = m('target', t);
                                    if (t) return document.querySelector(t);
                                },
                            },
                            {
                                key: 'defaultText',
                                value: function (t) {
                                    return m('text', t);
                                },
                            },
                            {
                                key: 'destroy',
                                value: function () {
                                    this.listener.destroy();
                                },
                            },
                        ]) && d(t.prototype, e),
                        n && d(t, n),
                        r
                    );
                })();
            },
            828: function (t) {
                var e;
                'undefined' == typeof Element ||
                    Element.prototype.matches ||
                    ((e = Element.prototype).matches =
                        e.matchesSelector || e.mozMatchesSelector || e.msMatchesSelector || e.oMatchesSelector || e.webkitMatchesSelector),
                    (t.exports = function (t, e) {
                        for (; t && 9 !== t.nodeType; ) {
                            if ('function' == typeof t.matches && t.matches(e)) return t;
                            t = t.parentNode;
                        }
                    });
            },
            438: function (t, e, n) {
                var u = n(828);
                function i(t, e, n, o, r) {
                    var i = function (e, n, t, o) {
                        return function (t) {
                            (t.delegateTarget = u(t.target, n)), t.delegateTarget && o.call(e, t);
                        };
                    }.apply(this, arguments);
                    return (
                        t.addEventListener(n, i, r),
                        {
                            destroy: function () {
                                t.removeEventListener(n, i, r);
                            },
                        }
                    );
                }
                t.exports = function (t, e, n, o, r) {
                    return 'function' == typeof t.addEventListener
                        ? i.apply(null, arguments)
                        : 'function' == typeof n
                        ? i.bind(null, document).apply(null, arguments)
                        : ('string' == typeof t && (t = document.querySelectorAll(t)),
                          Array.prototype.map.call(t, function (t) {
                              return i(t, e, n, o, r);
                          }));
                };
            },
            879: function (t, n) {
                (n.node = function (t) {
                    return void 0 !== t && t instanceof HTMLElement && 1 === t.nodeType;
                }),
                    (n.nodeList = function (t) {
                        var e = Object.prototype.toString.call(t);
                        return (
                            void 0 !== t &&
                            ('[object NodeList]' === e || '[object HTMLCollection]' === e) &&
                            'length' in t &&
                            (0 === t.length || n.node(t[0]))
                        );
                    }),
                    (n.string = function (t) {
                        return 'string' == typeof t || t instanceof String;
                    }),
                    (n.fn = function (t) {
                        return '[object Function]' === Object.prototype.toString.call(t);
                    });
            },
            370: function (t, e, n) {
                var f = n(879),
                    l = n(438);
                t.exports = function (t, e, n) {
                    if (!t && !e && !n) throw new Error('Missing required arguments');
                    if (!f.string(e)) throw new TypeError('Second argument must be a String');
                    if (!f.fn(n)) throw new TypeError('Third argument must be a Function');
                    if (f.node(t))
                        return (
                            (c = e),
                            (a = n),
                            (u = t).addEventListener(c, a),
                            {
                                destroy: function () {
                                    u.removeEventListener(c, a);
                                },
                            }
                        );
                    if (f.nodeList(t))
                        return (
                            (o = t),
                            (r = e),
                            (i = n),
                            Array.prototype.forEach.call(o, function (t) {
                                t.addEventListener(r, i);
                            }),
                            {
                                destroy: function () {
                                    Array.prototype.forEach.call(o, function (t) {
                                        t.removeEventListener(r, i);
                                    });
                                },
                            }
                        );
                    if (f.string(t)) return (t = t), (e = e), (n = n), l(document.body, t, e, n);
                    throw new TypeError('First argument must be a String, HTMLElement, HTMLCollection, or NodeList');
                    var o, r, i, u, c, a;
                };
            },
            817: function (t) {
                t.exports = function (t) {
                    var e,
                        n =
                            'SELECT' === t.nodeName
                                ? (t.focus(), t.value)
                                : 'INPUT' === t.nodeName || 'TEXTAREA' === t.nodeName
                                ? ((e = t.hasAttribute('readonly')) || t.setAttribute('readonly', ''),
                                  t.select(),
                                  t.setSelectionRange(0, t.value.length),
                                  e || t.removeAttribute('readonly'),
                                  t.value)
                                : (t.hasAttribute('contenteditable') && t.focus(),
                                  (n = window.getSelection()),
                                  (e = document.createRange()).selectNodeContents(t),
                                  n.removeAllRanges(),
                                  n.addRange(e),
                                  n.toString());
                    return n;
                };
            },
            279: function (t) {
                function e() {}
                (e.prototype = {
                    on: function (t, e, n) {
                        var o = this.e || (this.e = {});
                        return (o[t] || (o[t] = [])).push({ fn: e, ctx: n }), this;
                    },
                    once: function (t, e, n) {
                        var o = this;
                        function r() {
                            o.off(t, r), e.apply(n, arguments);
                        }
                        return (r._ = e), this.on(t, r, n);
                    },
                    emit: function (t) {
                        for (
                            var e = [].slice.call(arguments, 1), n = ((this.e || (this.e = {}))[t] || []).slice(), o = 0, r = n.length;
                            o < r;
                            o++
                        )
                            n[o].fn.apply(n[o].ctx, e);
                        return this;
                    },
                    off: function (t, e) {
                        var n = this.e || (this.e = {}),
                            o = n[t],
                            r = [];
                        if (o && e) for (var i = 0, u = o.length; i < u; i++) o[i].fn !== e && o[i].fn._ !== e && r.push(o[i]);
                        return r.length ? (n[t] = r) : delete n[t], this;
                    },
                }),
                    (t.exports = e),
                    (t.exports.TinyEmitter = e);
            },
        }),
        (r = {}),
        (o.n = function (t) {
            var e =
                t && t.__esModule
                    ? function () {
                          return t.default;
                      }
                    : function () {
                          return t;
                      };
            return o.d(e, { a: e }), e;
        }),
        (o.d = function (t, e) {
            for (var n in e) o.o(e, n) && !o.o(t, n) && Object.defineProperty(t, n, { enumerable: !0, get: e[n] });
        }),
        (o.o = function (t, e) {
            return Object.prototype.hasOwnProperty.call(t, e);
        }),
        o(686).default
    );
    function o(t) {
        if (r[t]) return r[t].exports;
        var e = (r[t] = { exports: {} });
        return n[t](e, e.exports, o), e.exports;
    }
    var n, r;
});

!(function (e, t) {
    'object' == typeof exports && 'undefined' != typeof module
        ? (module.exports = t())
        : 'function' == typeof define && define.amd
        ? define(t)
        : ((e = 'undefined' != typeof globalThis ? globalThis : e || self).MicroModal = t());
})(this, function () {
    'use strict';
    function e(e, t) {
        for (var o = 0; o < t.length; o++) {
            var n = t[o];
            (n.enumerable = n.enumerable || !1),
                (n.configurable = !0),
                'value' in n && (n.writable = !0),
                Object.defineProperty(e, n.key, n);
        }
    }
    function t(e) {
        return (
            (function (e) {
                if (Array.isArray(e)) return o(e);
            })(e) ||
            (function (e) {
                if ('undefined' != typeof Symbol && Symbol.iterator in Object(e)) return Array.from(e);
            })(e) ||
            (function (e, t) {
                if (!e) return;
                if ('string' == typeof e) return o(e, t);
                var n = Object.prototype.toString.call(e).slice(8, -1);
                'Object' === n && e.constructor && (n = e.constructor.name);
                if ('Map' === n || 'Set' === n) return Array.from(e);
                if ('Arguments' === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return o(e, t);
            })(e) ||
            (function () {
                throw new TypeError(
                    'Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.'
                );
            })()
        );
    }
    function o(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var o = 0, n = new Array(t); o < t; o++) n[o] = e[o];
        return n;
    }
    var n,
        i,
        a,
        r,
        s,
        l =
            ((n = [
                'a[href]',
                'area[href]',
                'input:not([disabled]):not([type="hidden"]):not([aria-hidden])',
                'select:not([disabled]):not([aria-hidden])',
                'textarea:not([disabled]):not([aria-hidden])',
                'button:not([disabled]):not([aria-hidden])',
                'iframe',
                'object',
                'embed',
                '[contenteditable]',
                '[tabindex]:not([tabindex^="-"])',
            ]),
            (i = (function () {
                function o(e) {
                    var n = e.targetModal,
                        i = e.triggers,
                        a = void 0 === i ? [] : i,
                        r = e.onShow,
                        s = void 0 === r ? function () {} : r,
                        l = e.onClose,
                        c = void 0 === l ? function () {} : l,
                        d = e.openTrigger,
                        u = void 0 === d ? 'data-micromodal-trigger' : d,
                        f = e.closeTrigger,
                        h = void 0 === f ? 'data-micromodal-close' : f,
                        v = e.openClass,
                        g = void 0 === v ? 'is-open' : v,
                        m = e.disableScroll,
                        b = void 0 !== m && m,
                        y = e.disableFocus,
                        p = void 0 !== y && y,
                        w = e.awaitCloseAnimation,
                        E = void 0 !== w && w,
                        k = e.awaitOpenAnimation,
                        M = void 0 !== k && k,
                        A = e.debugMode,
                        C = void 0 !== A && A;
                    !(function (e, t) {
                        if (!(e instanceof t)) throw new TypeError('Cannot call a class as a function');
                    })(this, o),
                        (this.modal = document.getElementById(n)),
                        (this.config = {
                            debugMode: C,
                            disableScroll: b,
                            openTrigger: u,
                            closeTrigger: h,
                            openClass: g,
                            onShow: s,
                            onClose: c,
                            awaitCloseAnimation: E,
                            awaitOpenAnimation: M,
                            disableFocus: p,
                        }),
                        a.length > 0 && this.registerTriggers.apply(this, t(a)),
                        (this.onClick = this.onClick.bind(this)),
                        (this.onKeydown = this.onKeydown.bind(this));
                }
                var i, a, r;
                return (
                    (i = o),
                    (a = [
                        {
                            key: 'registerTriggers',
                            value: function () {
                                for (var e = this, t = arguments.length, o = new Array(t), n = 0; n < t; n++) o[n] = arguments[n];
                                o.filter(Boolean).forEach(function (t) {
                                    t.addEventListener('click', function (t) {
                                        return e.showModal(t);
                                    });
                                });
                            },
                        },
                        {
                            key: 'showModal',
                            value: function () {
                                var e = this,
                                    t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
                                if (
                                    ((this.activeElement = document.activeElement),
                                    this.modal.setAttribute('aria-hidden', 'false'),
                                    this.modal.classList.add(this.config.openClass),
                                    this.scrollBehaviour('disable'),
                                    this.addEventListeners(),
                                    this.config.awaitOpenAnimation)
                                ) {
                                    var o = function t() {
                                        e.modal.removeEventListener('animationend', t, !1), e.setFocusToFirstNode();
                                    };
                                    this.modal.addEventListener('animationend', o, !1);
                                } else this.setFocusToFirstNode();
                                this.config.onShow(this.modal, this.activeElement, t);
                            },
                        },
                        {
                            key: 'closeModal',
                            value: function () {
                                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
                                    t = this.modal;
                                if (
                                    (this.modal.setAttribute('aria-hidden', 'true'),
                                    this.removeEventListeners(),
                                    this.scrollBehaviour('enable'),
                                    this.activeElement && this.activeElement.focus && this.activeElement.focus(),
                                    this.config.onClose(this.modal, this.activeElement, e),
                                    this.config.awaitCloseAnimation)
                                ) {
                                    var o = this.config.openClass;
                                    this.modal.addEventListener(
                                        'animationend',
                                        function e() {
                                            t.classList.remove(o), t.removeEventListener('animationend', e, !1);
                                        },
                                        !1
                                    );
                                } else t.classList.remove(this.config.openClass);
                            },
                        },
                        {
                            key: 'closeModalById',
                            value: function (e) {
                                (this.modal = document.getElementById(e)), this.modal && this.closeModal();
                            },
                        },
                        {
                            key: 'scrollBehaviour',
                            value: function (e) {
                                if (this.config.disableScroll) {
                                    var t = document.querySelector('body');
                                    switch (e) {
                                        case 'enable':
                                            Object.assign(t.style, { overflow: '' });
                                            break;
                                        case 'disable':
                                            Object.assign(t.style, { overflow: 'hidden' });
                                    }
                                }
                            },
                        },
                        {
                            key: 'addEventListeners',
                            value: function () {
                                this.modal.addEventListener('touchstart', this.onClick),
                                    this.modal.addEventListener('click', this.onClick),
                                    document.addEventListener('keydown', this.onKeydown);
                            },
                        },
                        {
                            key: 'removeEventListeners',
                            value: function () {
                                this.modal.removeEventListener('touchstart', this.onClick),
                                    this.modal.removeEventListener('click', this.onClick),
                                    document.removeEventListener('keydown', this.onKeydown);
                            },
                        },
                        {
                            key: 'onClick',
                            value: function (e) {
                                (e.target.hasAttribute(this.config.closeTrigger) ||
                                    e.target.parentNode.hasAttribute(this.config.closeTrigger)) &&
                                    (e.preventDefault(), e.stopPropagation(), this.closeModal(e));
                            },
                        },
                        {
                            key: 'onKeydown',
                            value: function (e) {
                                27 === e.keyCode && this.closeModal(e), 9 === e.keyCode && this.retainFocus(e);
                            },
                        },
                        {
                            key: 'getFocusableNodes',
                            value: function () {
                                var e = this.modal.querySelectorAll(n);
                                return Array.apply(void 0, t(e));
                            },
                        },
                        {
                            key: 'setFocusToFirstNode',
                            value: function () {
                                var e = this;
                                if (!this.config.disableFocus) {
                                    var t = this.getFocusableNodes();
                                    if (0 !== t.length) {
                                        var o = t.filter(function (t) {
                                            return !t.hasAttribute(e.config.closeTrigger);
                                        });
                                        o.length > 0 && o[0].focus(), 0 === o.length && t[0].focus();
                                    }
                                }
                            },
                        },
                        {
                            key: 'retainFocus',
                            value: function (e) {
                                var t = this.getFocusableNodes();
                                if (0 !== t.length)
                                    if (
                                        ((t = t.filter(function (e) {
                                            return null !== e.offsetParent;
                                        })),
                                        this.modal.contains(document.activeElement))
                                    ) {
                                        var o = t.indexOf(document.activeElement);
                                        e.shiftKey && 0 === o && (t[t.length - 1].focus(), e.preventDefault()),
                                            !e.shiftKey && t.length > 0 && o === t.length - 1 && (t[0].focus(), e.preventDefault());
                                    } else t[0].focus();
                            },
                        },
                    ]) && e(i.prototype, a),
                    r && e(i, r),
                    o
                );
            })()),
            (a = null),
            (r = function (e) {
                if (!document.getElementById(e))
                    return (
                        console.warn(
                            "MicroModal: ❗Seems like you have missed %c'".concat(e, "'"),
                            'background-color: #f8f9fa;color: #50596c;font-weight: bold;',
                            'ID somewhere in your code. Refer example below to resolve it.'
                        ),
                        console.warn(
                            '%cExample:',
                            'background-color: #f8f9fa;color: #50596c;font-weight: bold;',
                            '<div class="modal" id="'.concat(e, '"></div>')
                        ),
                        !1
                    );
            }),
            (s = function (e, t) {
                if (
                    ((function (e) {
                        e.length <= 0 &&
                            (console.warn(
                                "MicroModal: ❗Please specify at least one %c'micromodal-trigger'",
                                'background-color: #f8f9fa;color: #50596c;font-weight: bold;',
                                'data attribute.'
                            ),
                            console.warn(
                                '%cExample:',
                                'background-color: #f8f9fa;color: #50596c;font-weight: bold;',
                                '<a href="#" data-micromodal-trigger="my-modal"></a>'
                            ));
                    })(e),
                    !t)
                )
                    return !0;
                for (var o in t) r(o);
                return !0;
            }),
            {
                init: function (e) {
                    var o = Object.assign({}, { openTrigger: 'data-micromodal-trigger' }, e),
                        n = t(document.querySelectorAll('['.concat(o.openTrigger, ']'))),
                        r = (function (e, t) {
                            var o = [];
                            return (
                                e.forEach(function (e) {
                                    var n = e.attributes[t].value;
                                    void 0 === o[n] && (o[n] = []), o[n].push(e);
                                }),
                                o
                            );
                        })(n, o.openTrigger);
                    if (!0 !== o.debugMode || !1 !== s(n, r))
                        for (var l in r) {
                            var c = r[l];
                            (o.targetModal = l), (o.triggers = t(c)), (a = new i(o));
                        }
                },
                show: function (e, t) {
                    var o = t || {};
                    (o.targetModal = e), (!0 === o.debugMode && !1 === r(e)) || (a && a.removeEventListeners(), (a = new i(o)).showModal());
                },
                close: function (e) {
                    e ? a.closeModalById(e) : a.closeModal();
                },
            });
    return 'undefined' != typeof window && (window.MicroModal = l), l;
});
/**
 * Minified by jsDelivr using Terser v5.19.2.
 * Original file: /npm/codemirror@5.65.5/lib/codemirror.js
 *
 * Do NOT use SRI with dynamically generated files! More information: https://www.jsdelivr.com/using-sri-with-dynamic-files
 */
!(function (e, t) {
    'object' == typeof exports && 'undefined' != typeof module
        ? (module.exports = t())
        : 'function' == typeof define && define.amd
        ? define(t)
        : ((e = e || self).CodeMirror = t());
})(this, function () {
    'use strict';
    var e = navigator.userAgent,
        t = navigator.platform,
        r = /gecko\/\d/i.test(e),
        n = /MSIE \d/.test(e),
        i = /Trident\/(?:[7-9]|\d{2,})\..*rv:(\d+)/.exec(e),
        o = /Edge\/(\d+)/.exec(e),
        l = n || i || o,
        s = l && (n ? document.documentMode || 6 : +(o || i)[1]),
        a = !o && /WebKit\//.test(e),
        u = a && /Qt\/\d+\.\d+/.test(e),
        c = !o && /Chrome\/(\d+)/.exec(e),
        h = c && +c[1],
        f = /Opera\//.test(e),
        d = /Apple Computer/.test(navigator.vendor),
        p = /Mac OS X 1\d\D([8-9]|\d\d)\D/.test(e),
        g = /PhantomJS/.test(e),
        v = d && (/Mobile\/\w+/.test(e) || navigator.maxTouchPoints > 2),
        m = /Android/.test(e),
        y = v || m || /webOS|BlackBerry|Opera Mini|Opera Mobi|IEMobile/i.test(e),
        b = v || /Mac/.test(t),
        w = /\bCrOS\b/.test(e),
        x = /win/i.test(t),
        C = f && e.match(/Version\/(\d*\.\d*)/);
    C && (C = Number(C[1])), C && C >= 15 && ((f = !1), (a = !0));
    var S = b && (u || (f && (null == C || C < 12.11))),
        L = r || (l && s >= 9);
    function k(e) {
        return new RegExp('(^|\\s)' + e + '(?:$|\\s)\\s*');
    }
    var T,
        M = function (e, t) {
            var r = e.className,
                n = k(t).exec(r);
            if (n) {
                var i = r.slice(n.index + n[0].length);
                e.className = r.slice(0, n.index) + (i ? n[1] + i : '');
            }
        };
    function N(e) {
        for (var t = e.childNodes.length; t > 0; --t) e.removeChild(e.firstChild);
        return e;
    }
    function O(e, t) {
        return N(e).appendChild(t);
    }
    function A(e, t, r, n) {
        var i = document.createElement(e);
        if ((r && (i.className = r), n && (i.style.cssText = n), 'string' == typeof t)) i.appendChild(document.createTextNode(t));
        else if (t) for (var o = 0; o < t.length; ++o) i.appendChild(t[o]);
        return i;
    }
    function D(e, t, r, n) {
        var i = A(e, t, r, n);
        return i.setAttribute('role', 'presentation'), i;
    }
    function W(e, t) {
        if ((3 == t.nodeType && (t = t.parentNode), e.contains)) return e.contains(t);
        do {
            if ((11 == t.nodeType && (t = t.host), t == e)) return !0;
        } while ((t = t.parentNode));
    }
    function H() {
        var e;
        try {
            e = document.activeElement;
        } catch (t) {
            e = document.body || null;
        }
        for (; e && e.shadowRoot && e.shadowRoot.activeElement; ) e = e.shadowRoot.activeElement;
        return e;
    }
    function F(e, t) {
        var r = e.className;
        k(t).test(r) || (e.className += (r ? ' ' : '') + t);
    }
    function E(e, t) {
        for (var r = e.split(' '), n = 0; n < r.length; n++) r[n] && !k(r[n]).test(t) && (t += ' ' + r[n]);
        return t;
    }
    T = document.createRange
        ? function (e, t, r, n) {
              var i = document.createRange();
              return i.setEnd(n || e, r), i.setStart(e, t), i;
          }
        : function (e, t, r) {
              var n = document.body.createTextRange();
              try {
                  n.moveToElementText(e.parentNode);
              } catch (e) {
                  return n;
              }
              return n.collapse(!0), n.moveEnd('character', r), n.moveStart('character', t), n;
          };
    var P = function (e) {
        e.select();
    };
    function I(e) {
        var t = Array.prototype.slice.call(arguments, 1);
        return function () {
            return e.apply(null, t);
        };
    }
    function z(e, t, r) {
        for (var n in (t || (t = {}), e)) !e.hasOwnProperty(n) || (!1 === r && t.hasOwnProperty(n)) || (t[n] = e[n]);
        return t;
    }
    function R(e, t, r, n, i) {
        null == t && -1 == (t = e.search(/[^\s\u00a0]/)) && (t = e.length);
        for (var o = n || 0, l = i || 0; ; ) {
            var s = e.indexOf('\t', o);
            if (s < 0 || s >= t) return l + (t - o);
            (l += s - o), (l += r - (l % r)), (o = s + 1);
        }
    }
    v
        ? (P = function (e) {
              (e.selectionStart = 0), (e.selectionEnd = e.value.length);
          })
        : l &&
          (P = function (e) {
              try {
                  e.select();
              } catch (e) {}
          });
    var B = function () {
        (this.id = null), (this.f = null), (this.time = 0), (this.handler = I(this.onTimeout, this));
    };
    function G(e, t) {
        for (var r = 0; r < e.length; ++r) if (e[r] == t) return r;
        return -1;
    }
    (B.prototype.onTimeout = function (e) {
        (e.id = 0), e.time <= +new Date() ? e.f() : setTimeout(e.handler, e.time - +new Date());
    }),
        (B.prototype.set = function (e, t) {
            this.f = t;
            var r = +new Date() + e;
            (!this.id || r < this.time) && (clearTimeout(this.id), (this.id = setTimeout(this.handler, e)), (this.time = r));
        });
    var U = 50,
        V = {
            toString: function () {
                return 'CodeMirror.Pass';
            },
        },
        K = { scroll: !1 },
        j = { origin: '*mouse' },
        X = { origin: '+move' };
    function Y(e, t, r) {
        for (var n = 0, i = 0; ; ) {
            var o = e.indexOf('\t', n);
            -1 == o && (o = e.length);
            var l = o - n;
            if (o == e.length || i + l >= t) return n + Math.min(l, t - i);
            if (((i += o - n), (n = o + 1), (i += r - (i % r)) >= t)) return n;
        }
    }
    var $ = [''];
    function _(e) {
        for (; $.length <= e; ) $.push(q($) + ' ');
        return $[e];
    }
    function q(e) {
        return e[e.length - 1];
    }
    function Z(e, t) {
        for (var r = [], n = 0; n < e.length; n++) r[n] = t(e[n], n);
        return r;
    }
    function Q() {}
    function J(e, t) {
        var r;
        return Object.create ? (r = Object.create(e)) : ((Q.prototype = e), (r = new Q())), t && z(t, r), r;
    }
    var ee = /[\u00df\u0587\u0590-\u05f4\u0600-\u06ff\u3040-\u309f\u30a0-\u30ff\u3400-\u4db5\u4e00-\u9fcc\uac00-\ud7af]/;
    function te(e) {
        return /\w/.test(e) || (e > '' && (e.toUpperCase() != e.toLowerCase() || ee.test(e)));
    }
    function re(e, t) {
        return t ? !!(t.source.indexOf('\\w') > -1 && te(e)) || t.test(e) : te(e);
    }
    function ne(e) {
        for (var t in e) if (e.hasOwnProperty(t) && e[t]) return !1;
        return !0;
    }
    var ie = /[\u0300-\u036f\u0483-\u0489\u0591-\u05bd\u05bf\u05c1\u05c2\u05c4\u05c5\u05c7\u0610-\u061a\u064b-\u065e\u0670\u06d6-\u06dc\u06de-\u06e4\u06e7\u06e8\u06ea-\u06ed\u0711\u0730-\u074a\u07a6-\u07b0\u07eb-\u07f3\u0816-\u0819\u081b-\u0823\u0825-\u0827\u0829-\u082d\u0900-\u0902\u093c\u0941-\u0948\u094d\u0951-\u0955\u0962\u0963\u0981\u09bc\u09be\u09c1-\u09c4\u09cd\u09d7\u09e2\u09e3\u0a01\u0a02\u0a3c\u0a41\u0a42\u0a47\u0a48\u0a4b-\u0a4d\u0a51\u0a70\u0a71\u0a75\u0a81\u0a82\u0abc\u0ac1-\u0ac5\u0ac7\u0ac8\u0acd\u0ae2\u0ae3\u0b01\u0b3c\u0b3e\u0b3f\u0b41-\u0b44\u0b4d\u0b56\u0b57\u0b62\u0b63\u0b82\u0bbe\u0bc0\u0bcd\u0bd7\u0c3e-\u0c40\u0c46-\u0c48\u0c4a-\u0c4d\u0c55\u0c56\u0c62\u0c63\u0cbc\u0cbf\u0cc2\u0cc6\u0ccc\u0ccd\u0cd5\u0cd6\u0ce2\u0ce3\u0d3e\u0d41-\u0d44\u0d4d\u0d57\u0d62\u0d63\u0dca\u0dcf\u0dd2-\u0dd4\u0dd6\u0ddf\u0e31\u0e34-\u0e3a\u0e47-\u0e4e\u0eb1\u0eb4-\u0eb9\u0ebb\u0ebc\u0ec8-\u0ecd\u0f18\u0f19\u0f35\u0f37\u0f39\u0f71-\u0f7e\u0f80-\u0f84\u0f86\u0f87\u0f90-\u0f97\u0f99-\u0fbc\u0fc6\u102d-\u1030\u1032-\u1037\u1039\u103a\u103d\u103e\u1058\u1059\u105e-\u1060\u1071-\u1074\u1082\u1085\u1086\u108d\u109d\u135f\u1712-\u1714\u1732-\u1734\u1752\u1753\u1772\u1773\u17b7-\u17bd\u17c6\u17c9-\u17d3\u17dd\u180b-\u180d\u18a9\u1920-\u1922\u1927\u1928\u1932\u1939-\u193b\u1a17\u1a18\u1a56\u1a58-\u1a5e\u1a60\u1a62\u1a65-\u1a6c\u1a73-\u1a7c\u1a7f\u1b00-\u1b03\u1b34\u1b36-\u1b3a\u1b3c\u1b42\u1b6b-\u1b73\u1b80\u1b81\u1ba2-\u1ba5\u1ba8\u1ba9\u1c2c-\u1c33\u1c36\u1c37\u1cd0-\u1cd2\u1cd4-\u1ce0\u1ce2-\u1ce8\u1ced\u1dc0-\u1de6\u1dfd-\u1dff\u200c\u200d\u20d0-\u20f0\u2cef-\u2cf1\u2de0-\u2dff\u302a-\u302f\u3099\u309a\ua66f-\ua672\ua67c\ua67d\ua6f0\ua6f1\ua802\ua806\ua80b\ua825\ua826\ua8c4\ua8e0-\ua8f1\ua926-\ua92d\ua947-\ua951\ua980-\ua982\ua9b3\ua9b6-\ua9b9\ua9bc\uaa29-\uaa2e\uaa31\uaa32\uaa35\uaa36\uaa43\uaa4c\uaab0\uaab2-\uaab4\uaab7\uaab8\uaabe\uaabf\uaac1\uabe5\uabe8\uabed\udc00-\udfff\ufb1e\ufe00-\ufe0f\ufe20-\ufe26\uff9e\uff9f]/;
    function oe(e) {
        return e.charCodeAt(0) >= 768 && ie.test(e);
    }
    function le(e, t, r) {
        for (; (r < 0 ? t > 0 : t < e.length) && oe(e.charAt(t)); ) t += r;
        return t;
    }
    function se(e, t, r) {
        for (var n = t > r ? -1 : 1; ; ) {
            if (t == r) return t;
            var i = (t + r) / 2,
                o = n < 0 ? Math.ceil(i) : Math.floor(i);
            if (o == t) return e(o) ? t : r;
            e(o) ? (r = o) : (t = o + n);
        }
    }
    var ae = null;
    function ue(e, t, r) {
        var n;
        ae = null;
        for (var i = 0; i < e.length; ++i) {
            var o = e[i];
            if (o.from < t && o.to > t) return i;
            o.to == t && (o.from != o.to && 'before' == r ? (n = i) : (ae = i)),
                o.from == t && (o.from != o.to && 'before' != r ? (n = i) : (ae = i));
        }
        return null != n ? n : ae;
    }
    var ce = (function () {
        var e = /[\u0590-\u05f4\u0600-\u06ff\u0700-\u08ac]/,
            t = /[stwN]/,
            r = /[LRr]/,
            n = /[Lb1n]/,
            i = /[1n]/;
        function o(e, t, r) {
            (this.level = e), (this.from = t), (this.to = r);
        }
        return function (l, s) {
            var a = 'ltr' == s ? 'L' : 'R';
            if (0 == l.length || ('ltr' == s && !e.test(l))) return !1;
            for (var u, c = l.length, h = [], f = 0; f < c; ++f)
                h.push(
                    (u = l.charCodeAt(f)) <= 247
                        ? 'bbbbbbbbbtstwsbbbbbbbbbbbbbbssstwNN%%%NNNNNN,N,N1111111111NNNNNNNLLLLLLLLLLLLLLLLLLLLLLLLLLNNNNNNLLLLLLLLLLLLLLLLLLLLLLLLLLNNNNbbbbbbsbbbbbbbbbbbbbbbbbbbbbbbbbb,N%%%%NNNNLNNNNN%%11NLNNN1LNNNNNLLLLLLLLLLLLLLLLLLLLLLLNLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLN'.charAt(
                              u
                          )
                        : 1424 <= u && u <= 1524
                        ? 'R'
                        : 1536 <= u && u <= 1785
                        ? 'nnnnnnNNr%%r,rNNmmmmmmmmmmmrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrmmmmmmmmmmmmmmmmmmmmmnnnnnnnnnn%nnrrrmrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrmmmmmmmnNmmmmmmrrmmNmmmmrr1111111111'.charAt(
                              u - 1536
                          )
                        : 1774 <= u && u <= 2220
                        ? 'r'
                        : 8192 <= u && u <= 8203
                        ? 'w'
                        : 8204 == u
                        ? 'b'
                        : 'L'
                );
            for (var d = 0, p = a; d < c; ++d) {
                var g = h[d];
                'm' == g ? (h[d] = p) : (p = g);
            }
            for (var v = 0, m = a; v < c; ++v) {
                var y = h[v];
                '1' == y && 'r' == m ? (h[v] = 'n') : r.test(y) && ((m = y), 'r' == y && (h[v] = 'R'));
            }
            for (var b = 1, w = h[0]; b < c - 1; ++b) {
                var x = h[b];
                '+' == x && '1' == w && '1' == h[b + 1] ? (h[b] = '1') : ',' != x || w != h[b + 1] || ('1' != w && 'n' != w) || (h[b] = w),
                    (w = x);
            }
            for (var C = 0; C < c; ++C) {
                var S = h[C];
                if (',' == S) h[C] = 'N';
                else if ('%' == S) {
                    var L = void 0;
                    for (L = C + 1; L < c && '%' == h[L]; ++L);
                    for (var k = (C && '!' == h[C - 1]) || (L < c && '1' == h[L]) ? '1' : 'N', T = C; T < L; ++T) h[T] = k;
                    C = L - 1;
                }
            }
            for (var M = 0, N = a; M < c; ++M) {
                var O = h[M];
                'L' == N && '1' == O ? (h[M] = 'L') : r.test(O) && (N = O);
            }
            for (var A = 0; A < c; ++A)
                if (t.test(h[A])) {
                    var D = void 0;
                    for (D = A + 1; D < c && t.test(h[D]); ++D);
                    for (var W = 'L' == (A ? h[A - 1] : a), H = W == ('L' == (D < c ? h[D] : a)) ? (W ? 'L' : 'R') : a, F = A; F < D; ++F)
                        h[F] = H;
                    A = D - 1;
                }
            for (var E, P = [], I = 0; I < c; )
                if (n.test(h[I])) {
                    var z = I;
                    for (++I; I < c && n.test(h[I]); ++I);
                    P.push(new o(0, z, I));
                } else {
                    var R = I,
                        B = P.length,
                        G = 'rtl' == s ? 1 : 0;
                    for (++I; I < c && 'L' != h[I]; ++I);
                    for (var U = R; U < I; )
                        if (i.test(h[U])) {
                            R < U && (P.splice(B, 0, new o(1, R, U)), (B += G));
                            var V = U;
                            for (++U; U < I && i.test(h[U]); ++U);
                            P.splice(B, 0, new o(2, V, U)), (B += G), (R = U);
                        } else ++U;
                    R < I && P.splice(B, 0, new o(1, R, I));
                }
            return (
                'ltr' == s &&
                    (1 == P[0].level && (E = l.match(/^\s+/)) && ((P[0].from = E[0].length), P.unshift(new o(0, 0, E[0].length))),
                    1 == q(P).level && (E = l.match(/\s+$/)) && ((q(P).to -= E[0].length), P.push(new o(0, c - E[0].length, c)))),
                'rtl' == s ? P.reverse() : P
            );
        };
    })();
    function he(e, t) {
        var r = e.order;
        return null == r && (r = e.order = ce(e.text, t)), r;
    }
    var fe = [],
        de = function (e, t, r) {
            if (e.addEventListener) e.addEventListener(t, r, !1);
            else if (e.attachEvent) e.attachEvent('on' + t, r);
            else {
                var n = e._handlers || (e._handlers = {});
                n[t] = (n[t] || fe).concat(r);
            }
        };
    function pe(e, t) {
        return (e._handlers && e._handlers[t]) || fe;
    }
    function ge(e, t, r) {
        if (e.removeEventListener) e.removeEventListener(t, r, !1);
        else if (e.detachEvent) e.detachEvent('on' + t, r);
        else {
            var n = e._handlers,
                i = n && n[t];
            if (i) {
                var o = G(i, r);
                o > -1 && (n[t] = i.slice(0, o).concat(i.slice(o + 1)));
            }
        }
    }
    function ve(e, t) {
        var r = pe(e, t);
        if (r.length) for (var n = Array.prototype.slice.call(arguments, 2), i = 0; i < r.length; ++i) r[i].apply(null, n);
    }
    function me(e, t, r) {
        return (
            'string' == typeof t &&
                (t = {
                    type: t,
                    preventDefault: function () {
                        this.defaultPrevented = !0;
                    },
                }),
            ve(e, r || t.type, e, t),
            Se(t) || t.codemirrorIgnore
        );
    }
    function ye(e) {
        var t = e._handlers && e._handlers.cursorActivity;
        if (t)
            for (var r = e.curOp.cursorActivityHandlers || (e.curOp.cursorActivityHandlers = []), n = 0; n < t.length; ++n)
                -1 == G(r, t[n]) && r.push(t[n]);
    }
    function be(e, t) {
        return pe(e, t).length > 0;
    }
    function we(e) {
        (e.prototype.on = function (e, t) {
            de(this, e, t);
        }),
            (e.prototype.off = function (e, t) {
                ge(this, e, t);
            });
    }
    function xe(e) {
        e.preventDefault ? e.preventDefault() : (e.returnValue = !1);
    }
    function Ce(e) {
        e.stopPropagation ? e.stopPropagation() : (e.cancelBubble = !0);
    }
    function Se(e) {
        return null != e.defaultPrevented ? e.defaultPrevented : 0 == e.returnValue;
    }
    function Le(e) {
        xe(e), Ce(e);
    }
    function ke(e) {
        return e.target || e.srcElement;
    }
    function Te(e) {
        var t = e.which;
        return (
            null == t && (1 & e.button ? (t = 1) : 2 & e.button ? (t = 3) : 4 & e.button && (t = 2)), b && e.ctrlKey && 1 == t && (t = 3), t
        );
    }
    var Me,
        Ne,
        Oe = (function () {
            if (l && s < 9) return !1;
            var e = A('div');
            return 'draggable' in e || 'dragDrop' in e;
        })();
    function Ae(e) {
        if (null == Me) {
            var t = A('span', '​');
            O(e, A('span', [t, document.createTextNode('x')])),
                0 != e.firstChild.offsetHeight && (Me = t.offsetWidth <= 1 && t.offsetHeight > 2 && !(l && s < 8));
        }
        var r = Me ? A('span', '​') : A('span', ' ', null, 'display: inline-block; width: 1px; margin-right: -1px');
        return r.setAttribute('cm-text', ''), r;
    }
    function De(e) {
        if (null != Ne) return Ne;
        var t = O(e, document.createTextNode('AخA')),
            r = T(t, 0, 1).getBoundingClientRect(),
            n = T(t, 1, 2).getBoundingClientRect();
        return N(e), !(!r || r.left == r.right) && (Ne = n.right - r.right < 3);
    }
    var We,
        He =
            3 != '\n\nb'.split(/\n/).length
                ? function (e) {
                      for (var t = 0, r = [], n = e.length; t <= n; ) {
                          var i = e.indexOf('\n', t);
                          -1 == i && (i = e.length);
                          var o = e.slice(t, '\r' == e.charAt(i - 1) ? i - 1 : i),
                              l = o.indexOf('\r');
                          -1 != l ? (r.push(o.slice(0, l)), (t += l + 1)) : (r.push(o), (t = i + 1));
                      }
                      return r;
                  }
                : function (e) {
                      return e.split(/\r\n?|\n/);
                  },
        Fe = window.getSelection
            ? function (e) {
                  try {
                      return e.selectionStart != e.selectionEnd;
                  } catch (e) {
                      return !1;
                  }
              }
            : function (e) {
                  var t;
                  try {
                      t = e.ownerDocument.selection.createRange();
                  } catch (e) {}
                  return !(!t || t.parentElement() != e) && 0 != t.compareEndPoints('StartToEnd', t);
              },
        Ee = 'oncopy' in (We = A('div')) || (We.setAttribute('oncopy', 'return;'), 'function' == typeof We.oncopy),
        Pe = null;
    var Ie = {},
        ze = {};
    function Re(e, t) {
        arguments.length > 2 && (t.dependencies = Array.prototype.slice.call(arguments, 2)), (Ie[e] = t);
    }
    function Be(e) {
        if ('string' == typeof e && ze.hasOwnProperty(e)) e = ze[e];
        else if (e && 'string' == typeof e.name && ze.hasOwnProperty(e.name)) {
            var t = ze[e.name];
            'string' == typeof t && (t = { name: t }), ((e = J(t, e)).name = t.name);
        } else {
            if ('string' == typeof e && /^[\w\-]+\/[\w\-]+\+xml$/.test(e)) return Be('application/xml');
            if ('string' == typeof e && /^[\w\-]+\/[\w\-]+\+json$/.test(e)) return Be('application/json');
        }
        return 'string' == typeof e ? { name: e } : e || { name: 'null' };
    }
    function Ge(e, t) {
        t = Be(t);
        var r = Ie[t.name];
        if (!r) return Ge(e, 'text/plain');
        var n = r(e, t);
        if (Ue.hasOwnProperty(t.name)) {
            var i = Ue[t.name];
            for (var o in i) i.hasOwnProperty(o) && (n.hasOwnProperty(o) && (n['_' + o] = n[o]), (n[o] = i[o]));
        }
        if (((n.name = t.name), t.helperType && (n.helperType = t.helperType), t.modeProps))
            for (var l in t.modeProps) n[l] = t.modeProps[l];
        return n;
    }
    var Ue = {};
    function Ve(e, t) {
        z(t, Ue.hasOwnProperty(e) ? Ue[e] : (Ue[e] = {}));
    }
    function Ke(e, t) {
        if (!0 === t) return t;
        if (e.copyState) return e.copyState(t);
        var r = {};
        for (var n in t) {
            var i = t[n];
            i instanceof Array && (i = i.concat([])), (r[n] = i);
        }
        return r;
    }
    function je(e, t) {
        for (var r; e.innerMode && (r = e.innerMode(t)) && r.mode != e; ) (t = r.state), (e = r.mode);
        return r || { mode: e, state: t };
    }
    function Xe(e, t, r) {
        return !e.startState || e.startState(t, r);
    }
    var Ye = function (e, t, r) {
        (this.pos = this.start = 0),
            (this.string = e),
            (this.tabSize = t || 8),
            (this.lastColumnPos = this.lastColumnValue = 0),
            (this.lineStart = 0),
            (this.lineOracle = r);
    };
    function $e(e, t) {
        if ((t -= e.first) < 0 || t >= e.size) throw new Error('There is no line ' + (t + e.first) + ' in the document.');
        for (var r = e; !r.lines; )
            for (var n = 0; ; ++n) {
                var i = r.children[n],
                    o = i.chunkSize();
                if (t < o) {
                    r = i;
                    break;
                }
                t -= o;
            }
        return r.lines[t];
    }
    function _e(e, t, r) {
        var n = [],
            i = t.line;
        return (
            e.iter(t.line, r.line + 1, function (e) {
                var o = e.text;
                i == r.line && (o = o.slice(0, r.ch)), i == t.line && (o = o.slice(t.ch)), n.push(o), ++i;
            }),
            n
        );
    }
    function qe(e, t, r) {
        var n = [];
        return (
            e.iter(t, r, function (e) {
                n.push(e.text);
            }),
            n
        );
    }
    function Ze(e, t) {
        var r = t - e.height;
        if (r) for (var n = e; n; n = n.parent) n.height += r;
    }
    function Qe(e) {
        if (null == e.parent) return null;
        for (var t = e.parent, r = G(t.lines, e), n = t.parent; n; t = n, n = n.parent)
            for (var i = 0; n.children[i] != t; ++i) r += n.children[i].chunkSize();
        return r + t.first;
    }
    function Je(e, t) {
        var r = e.first;
        e: do {
            for (var n = 0; n < e.children.length; ++n) {
                var i = e.children[n],
                    o = i.height;
                if (t < o) {
                    e = i;
                    continue e;
                }
                (t -= o), (r += i.chunkSize());
            }
            return r;
        } while (!e.lines);
        for (var l = 0; l < e.lines.length; ++l) {
            var s = e.lines[l].height;
            if (t < s) break;
            t -= s;
        }
        return r + l;
    }
    function et(e, t) {
        return t >= e.first && t < e.first + e.size;
    }
    function tt(e, t) {
        return String(e.lineNumberFormatter(t + e.firstLineNumber));
    }
    function rt(e, t, r) {
        if ((void 0 === r && (r = null), !(this instanceof rt))) return new rt(e, t, r);
        (this.line = e), (this.ch = t), (this.sticky = r);
    }
    function nt(e, t) {
        return e.line - t.line || e.ch - t.ch;
    }
    function it(e, t) {
        return e.sticky == t.sticky && 0 == nt(e, t);
    }
    function ot(e) {
        return rt(e.line, e.ch);
    }
    function lt(e, t) {
        return nt(e, t) < 0 ? t : e;
    }
    function st(e, t) {
        return nt(e, t) < 0 ? e : t;
    }
    function at(e, t) {
        return Math.max(e.first, Math.min(t, e.first + e.size - 1));
    }
    function ut(e, t) {
        if (t.line < e.first) return rt(e.first, 0);
        var r = e.first + e.size - 1;
        return t.line > r
            ? rt(r, $e(e, r).text.length)
            : (function (e, t) {
                  var r = e.ch;
                  return null == r || r > t ? rt(e.line, t) : r < 0 ? rt(e.line, 0) : e;
              })(t, $e(e, t.line).text.length);
    }
    function ct(e, t) {
        for (var r = [], n = 0; n < t.length; n++) r[n] = ut(e, t[n]);
        return r;
    }
    (Ye.prototype.eol = function () {
        return this.pos >= this.string.length;
    }),
        (Ye.prototype.sol = function () {
            return this.pos == this.lineStart;
        }),
        (Ye.prototype.peek = function () {
            return this.string.charAt(this.pos) || void 0;
        }),
        (Ye.prototype.next = function () {
            if (this.pos < this.string.length) return this.string.charAt(this.pos++);
        }),
        (Ye.prototype.eat = function (e) {
            var t = this.string.charAt(this.pos);
            if ('string' == typeof e ? t == e : t && (e.test ? e.test(t) : e(t))) return ++this.pos, t;
        }),
        (Ye.prototype.eatWhile = function (e) {
            for (var t = this.pos; this.eat(e); );
            return this.pos > t;
        }),
        (Ye.prototype.eatSpace = function () {
            for (var e = this.pos; /[\s\u00a0]/.test(this.string.charAt(this.pos)); ) ++this.pos;
            return this.pos > e;
        }),
        (Ye.prototype.skipToEnd = function () {
            this.pos = this.string.length;
        }),
        (Ye.prototype.skipTo = function (e) {
            var t = this.string.indexOf(e, this.pos);
            if (t > -1) return (this.pos = t), !0;
        }),
        (Ye.prototype.backUp = function (e) {
            this.pos -= e;
        }),
        (Ye.prototype.column = function () {
            return (
                this.lastColumnPos < this.start &&
                    ((this.lastColumnValue = R(this.string, this.start, this.tabSize, this.lastColumnPos, this.lastColumnValue)),
                    (this.lastColumnPos = this.start)),
                this.lastColumnValue - (this.lineStart ? R(this.string, this.lineStart, this.tabSize) : 0)
            );
        }),
        (Ye.prototype.indentation = function () {
            return R(this.string, null, this.tabSize) - (this.lineStart ? R(this.string, this.lineStart, this.tabSize) : 0);
        }),
        (Ye.prototype.match = function (e, t, r) {
            if ('string' != typeof e) {
                var n = this.string.slice(this.pos).match(e);
                return n && n.index > 0 ? null : (n && !1 !== t && (this.pos += n[0].length), n);
            }
            var i = function (e) {
                return r ? e.toLowerCase() : e;
            };
            if (i(this.string.substr(this.pos, e.length)) == i(e)) return !1 !== t && (this.pos += e.length), !0;
        }),
        (Ye.prototype.current = function () {
            return this.string.slice(this.start, this.pos);
        }),
        (Ye.prototype.hideFirstChars = function (e, t) {
            this.lineStart += e;
            try {
                return t();
            } finally {
                this.lineStart -= e;
            }
        }),
        (Ye.prototype.lookAhead = function (e) {
            var t = this.lineOracle;
            return t && t.lookAhead(e);
        }),
        (Ye.prototype.baseToken = function () {
            var e = this.lineOracle;
            return e && e.baseToken(this.pos);
        });
    var ht = function (e, t) {
            (this.state = e), (this.lookAhead = t);
        },
        ft = function (e, t, r, n) {
            (this.state = t),
                (this.doc = e),
                (this.line = r),
                (this.maxLookAhead = n || 0),
                (this.baseTokens = null),
                (this.baseTokenPos = 1);
        };
    function dt(e, t, r, n) {
        var i = [e.state.modeGen],
            o = {};
        Ct(
            e,
            t.text,
            e.doc.mode,
            r,
            function (e, t) {
                return i.push(e, t);
            },
            o,
            n
        );
        for (
            var l = r.state,
                s = function (n) {
                    r.baseTokens = i;
                    var s = e.state.overlays[n],
                        a = 1,
                        u = 0;
                    (r.state = !0),
                        Ct(
                            e,
                            t.text,
                            s.mode,
                            r,
                            function (e, t) {
                                for (var r = a; u < e; ) {
                                    var n = i[a];
                                    n > e && i.splice(a, 1, e, i[a + 1], n), (a += 2), (u = Math.min(e, n));
                                }
                                if (t)
                                    if (s.opaque) i.splice(r, a - r, e, 'overlay ' + t), (a = r + 2);
                                    else
                                        for (; r < a; r += 2) {
                                            var o = i[r + 1];
                                            i[r + 1] = (o ? o + ' ' : '') + 'overlay ' + t;
                                        }
                            },
                            o
                        ),
                        (r.state = l),
                        (r.baseTokens = null),
                        (r.baseTokenPos = 1);
                },
                a = 0;
            a < e.state.overlays.length;
            ++a
        )
            s(a);
        return { styles: i, classes: o.bgClass || o.textClass ? o : null };
    }
    function pt(e, t, r) {
        if (!t.styles || t.styles[0] != e.state.modeGen) {
            var n = gt(e, Qe(t)),
                i = t.text.length > e.options.maxHighlightLength && Ke(e.doc.mode, n.state),
                o = dt(e, t, n);
            i && (n.state = i),
                (t.stateAfter = n.save(!i)),
                (t.styles = o.styles),
                o.classes ? (t.styleClasses = o.classes) : t.styleClasses && (t.styleClasses = null),
                r === e.doc.highlightFrontier && (e.doc.modeFrontier = Math.max(e.doc.modeFrontier, ++e.doc.highlightFrontier));
        }
        return t.styles;
    }
    function gt(e, t, r) {
        var n = e.doc,
            i = e.display;
        if (!n.mode.startState) return new ft(n, !0, t);
        var o = (function (e, t, r) {
                for (var n, i, o = e.doc, l = r ? -1 : t - (e.doc.mode.innerMode ? 1e3 : 100), s = t; s > l; --s) {
                    if (s <= o.first) return o.first;
                    var a = $e(o, s - 1),
                        u = a.stateAfter;
                    if (u && (!r || s + (u instanceof ht ? u.lookAhead : 0) <= o.modeFrontier)) return s;
                    var c = R(a.text, null, e.options.tabSize);
                    (null == i || n > c) && ((i = s - 1), (n = c));
                }
                return i;
            })(e, t, r),
            l = o > n.first && $e(n, o - 1).stateAfter,
            s = l ? ft.fromSaved(n, l, o) : new ft(n, Xe(n.mode), o);
        return (
            n.iter(o, t, function (r) {
                vt(e, r.text, s);
                var n = s.line;
                (r.stateAfter = n == t - 1 || n % 5 == 0 || (n >= i.viewFrom && n < i.viewTo) ? s.save() : null), s.nextLine();
            }),
            r && (n.modeFrontier = s.line),
            s
        );
    }
    function vt(e, t, r, n) {
        var i = e.doc.mode,
            o = new Ye(t, e.options.tabSize, r);
        for (o.start = o.pos = n || 0, '' == t && mt(i, r.state); !o.eol(); ) yt(i, o, r.state), (o.start = o.pos);
    }
    function mt(e, t) {
        if (e.blankLine) return e.blankLine(t);
        if (e.innerMode) {
            var r = je(e, t);
            return r.mode.blankLine ? r.mode.blankLine(r.state) : void 0;
        }
    }
    function yt(e, t, r, n) {
        for (var i = 0; i < 10; i++) {
            n && (n[0] = je(e, r).mode);
            var o = e.token(t, r);
            if (t.pos > t.start) return o;
        }
        throw new Error('Mode ' + e.name + ' failed to advance stream.');
    }
    (ft.prototype.lookAhead = function (e) {
        var t = this.doc.getLine(this.line + e);
        return null != t && e > this.maxLookAhead && (this.maxLookAhead = e), t;
    }),
        (ft.prototype.baseToken = function (e) {
            if (!this.baseTokens) return null;
            for (; this.baseTokens[this.baseTokenPos] <= e; ) this.baseTokenPos += 2;
            var t = this.baseTokens[this.baseTokenPos + 1];
            return { type: t && t.replace(/( |^)overlay .*/, ''), size: this.baseTokens[this.baseTokenPos] - e };
        }),
        (ft.prototype.nextLine = function () {
            this.line++, this.maxLookAhead > 0 && this.maxLookAhead--;
        }),
        (ft.fromSaved = function (e, t, r) {
            return t instanceof ht ? new ft(e, Ke(e.mode, t.state), r, t.lookAhead) : new ft(e, Ke(e.mode, t), r);
        }),
        (ft.prototype.save = function (e) {
            var t = !1 !== e ? Ke(this.doc.mode, this.state) : this.state;
            return this.maxLookAhead > 0 ? new ht(t, this.maxLookAhead) : t;
        });
    var bt = function (e, t, r) {
        (this.start = e.start), (this.end = e.pos), (this.string = e.current()), (this.type = t || null), (this.state = r);
    };
    function wt(e, t, r, n) {
        var i,
            o,
            l = e.doc,
            s = l.mode,
            a = $e(l, (t = ut(l, t)).line),
            u = gt(e, t.line, r),
            c = new Ye(a.text, e.options.tabSize, u);
        for (n && (o = []); (n || c.pos < t.ch) && !c.eol(); )
            (c.start = c.pos), (i = yt(s, c, u.state)), n && o.push(new bt(c, i, Ke(l.mode, u.state)));
        return n ? o : new bt(c, i, u.state);
    }
    function xt(e, t) {
        if (e)
            for (;;) {
                var r = e.match(/(?:^|\s+)line-(background-)?(\S+)/);
                if (!r) break;
                e = e.slice(0, r.index) + e.slice(r.index + r[0].length);
                var n = r[1] ? 'bgClass' : 'textClass';
                null == t[n] ? (t[n] = r[2]) : new RegExp('(?:^|\\s)' + r[2] + '(?:$|\\s)').test(t[n]) || (t[n] += ' ' + r[2]);
            }
        return e;
    }
    function Ct(e, t, r, n, i, o, l) {
        var s = r.flattenSpans;
        null == s && (s = e.options.flattenSpans);
        var a,
            u = 0,
            c = null,
            h = new Ye(t, e.options.tabSize, n),
            f = e.options.addModeClass && [null];
        for ('' == t && xt(mt(r, n.state), o); !h.eol(); ) {
            if (
                (h.pos > e.options.maxHighlightLength
                    ? ((s = !1), l && vt(e, t, n, h.pos), (h.pos = t.length), (a = null))
                    : (a = xt(yt(r, h, n.state, f), o)),
                f)
            ) {
                var d = f[0].name;
                d && (a = 'm-' + (a ? d + ' ' + a : d));
            }
            if (!s || c != a) {
                for (; u < h.start; ) i((u = Math.min(h.start, u + 5e3)), c);
                c = a;
            }
            h.start = h.pos;
        }
        for (; u < h.pos; ) {
            var p = Math.min(h.pos, u + 5e3);
            i(p, c), (u = p);
        }
    }
    var St = !1,
        Lt = !1;
    function kt(e, t, r) {
        (this.marker = e), (this.from = t), (this.to = r);
    }
    function Tt(e, t) {
        if (e)
            for (var r = 0; r < e.length; ++r) {
                var n = e[r];
                if (n.marker == t) return n;
            }
    }
    function Mt(e, t) {
        for (var r, n = 0; n < e.length; ++n) e[n] != t && (r || (r = [])).push(e[n]);
        return r;
    }
    function Nt(e, t) {
        if (t.full) return null;
        var r = et(e, t.from.line) && $e(e, t.from.line).markedSpans,
            n = et(e, t.to.line) && $e(e, t.to.line).markedSpans;
        if (!r && !n) return null;
        var i = t.from.ch,
            o = t.to.ch,
            l = 0 == nt(t.from, t.to),
            s = (function (e, t, r) {
                var n;
                if (e)
                    for (var i = 0; i < e.length; ++i) {
                        var o = e[i],
                            l = o.marker;
                        if (
                            null == o.from ||
                            (l.inclusiveLeft ? o.from <= t : o.from < t) ||
                            (o.from == t && 'bookmark' == l.type && (!r || !o.marker.insertLeft))
                        ) {
                            var s = null == o.to || (l.inclusiveRight ? o.to >= t : o.to > t);
                            (n || (n = [])).push(new kt(l, o.from, s ? null : o.to));
                        }
                    }
                return n;
            })(r, i, l),
            a = (function (e, t, r) {
                var n;
                if (e)
                    for (var i = 0; i < e.length; ++i) {
                        var o = e[i],
                            l = o.marker;
                        if (
                            null == o.to ||
                            (l.inclusiveRight ? o.to >= t : o.to > t) ||
                            (o.from == t && 'bookmark' == l.type && (!r || o.marker.insertLeft))
                        ) {
                            var s = null == o.from || (l.inclusiveLeft ? o.from <= t : o.from < t);
                            (n || (n = [])).push(new kt(l, s ? null : o.from - t, null == o.to ? null : o.to - t));
                        }
                    }
                return n;
            })(n, o, l),
            u = 1 == t.text.length,
            c = q(t.text).length + (u ? i : 0);
        if (s)
            for (var h = 0; h < s.length; ++h) {
                var f = s[h];
                if (null == f.to) {
                    var d = Tt(a, f.marker);
                    d ? u && (f.to = null == d.to ? null : d.to + c) : (f.to = i);
                }
            }
        if (a)
            for (var p = 0; p < a.length; ++p) {
                var g = a[p];
                if ((null != g.to && (g.to += c), null == g.from)) Tt(s, g.marker) || ((g.from = c), u && (s || (s = [])).push(g));
                else (g.from += c), u && (s || (s = [])).push(g);
            }
        s && (s = Ot(s)), a && a != s && (a = Ot(a));
        var v = [s];
        if (!u) {
            var m,
                y = t.text.length - 2;
            if (y > 0 && s) for (var b = 0; b < s.length; ++b) null == s[b].to && (m || (m = [])).push(new kt(s[b].marker, null, null));
            for (var w = 0; w < y; ++w) v.push(m);
            v.push(a);
        }
        return v;
    }
    function Ot(e) {
        for (var t = 0; t < e.length; ++t) {
            var r = e[t];
            null != r.from && r.from == r.to && !1 !== r.marker.clearWhenEmpty && e.splice(t--, 1);
        }
        return e.length ? e : null;
    }
    function At(e) {
        var t = e.markedSpans;
        if (t) {
            for (var r = 0; r < t.length; ++r) t[r].marker.detachLine(e);
            e.markedSpans = null;
        }
    }
    function Dt(e, t) {
        if (t) {
            for (var r = 0; r < t.length; ++r) t[r].marker.attachLine(e);
            e.markedSpans = t;
        }
    }
    function Wt(e) {
        return e.inclusiveLeft ? -1 : 0;
    }
    function Ht(e) {
        return e.inclusiveRight ? 1 : 0;
    }
    function Ft(e, t) {
        var r = e.lines.length - t.lines.length;
        if (0 != r) return r;
        var n = e.find(),
            i = t.find(),
            o = nt(n.from, i.from) || Wt(e) - Wt(t);
        if (o) return -o;
        var l = nt(n.to, i.to) || Ht(e) - Ht(t);
        return l || t.id - e.id;
    }
    function Et(e, t) {
        var r,
            n = Lt && e.markedSpans;
        if (n)
            for (var i = void 0, o = 0; o < n.length; ++o)
                (i = n[o]).marker.collapsed && null == (t ? i.from : i.to) && (!r || Ft(r, i.marker) < 0) && (r = i.marker);
        return r;
    }
    function Pt(e) {
        return Et(e, !0);
    }
    function It(e) {
        return Et(e, !1);
    }
    function zt(e, t) {
        var r,
            n = Lt && e.markedSpans;
        if (n)
            for (var i = 0; i < n.length; ++i) {
                var o = n[i];
                o.marker.collapsed &&
                    (null == o.from || o.from < t) &&
                    (null == o.to || o.to > t) &&
                    (!r || Ft(r, o.marker) < 0) &&
                    (r = o.marker);
            }
        return r;
    }
    function Rt(e, t, r, n, i) {
        var o = $e(e, t),
            l = Lt && o.markedSpans;
        if (l)
            for (var s = 0; s < l.length; ++s) {
                var a = l[s];
                if (a.marker.collapsed) {
                    var u = a.marker.find(0),
                        c = nt(u.from, r) || Wt(a.marker) - Wt(i),
                        h = nt(u.to, n) || Ht(a.marker) - Ht(i);
                    if (
                        !((c >= 0 && h <= 0) || (c <= 0 && h >= 0)) &&
                        ((c <= 0 && (a.marker.inclusiveRight && i.inclusiveLeft ? nt(u.to, r) >= 0 : nt(u.to, r) > 0)) ||
                            (c >= 0 && (a.marker.inclusiveRight && i.inclusiveLeft ? nt(u.from, n) <= 0 : nt(u.from, n) < 0)))
                    )
                        return !0;
                }
            }
    }
    function Bt(e) {
        for (var t; (t = Pt(e)); ) e = t.find(-1, !0).line;
        return e;
    }
    function Gt(e, t) {
        var r = $e(e, t),
            n = Bt(r);
        return r == n ? t : Qe(n);
    }
    function Ut(e, t) {
        if (t > e.lastLine()) return t;
        var r,
            n = $e(e, t);
        if (!Vt(e, n)) return t;
        for (; (r = It(n)); ) n = r.find(1, !0).line;
        return Qe(n) + 1;
    }
    function Vt(e, t) {
        var r = Lt && t.markedSpans;
        if (r)
            for (var n = void 0, i = 0; i < r.length; ++i)
                if ((n = r[i]).marker.collapsed) {
                    if (null == n.from) return !0;
                    if (!n.marker.widgetNode && 0 == n.from && n.marker.inclusiveLeft && Kt(e, t, n)) return !0;
                }
    }
    function Kt(e, t, r) {
        if (null == r.to) {
            var n = r.marker.find(1, !0);
            return Kt(e, n.line, Tt(n.line.markedSpans, r.marker));
        }
        if (r.marker.inclusiveRight && r.to == t.text.length) return !0;
        for (var i = void 0, o = 0; o < t.markedSpans.length; ++o)
            if (
                (i = t.markedSpans[o]).marker.collapsed &&
                !i.marker.widgetNode &&
                i.from == r.to &&
                (null == i.to || i.to != r.from) &&
                (i.marker.inclusiveLeft || r.marker.inclusiveRight) &&
                Kt(e, t, i)
            )
                return !0;
    }
    function jt(e) {
        for (var t = 0, r = (e = Bt(e)).parent, n = 0; n < r.lines.length; ++n) {
            var i = r.lines[n];
            if (i == e) break;
            t += i.height;
        }
        for (var o = r.parent; o; o = (r = o).parent)
            for (var l = 0; l < o.children.length; ++l) {
                var s = o.children[l];
                if (s == r) break;
                t += s.height;
            }
        return t;
    }
    function Xt(e) {
        if (0 == e.height) return 0;
        for (var t, r = e.text.length, n = e; (t = Pt(n)); ) {
            var i = t.find(0, !0);
            (n = i.from.line), (r += i.from.ch - i.to.ch);
        }
        for (n = e; (t = It(n)); ) {
            var o = t.find(0, !0);
            (r -= n.text.length - o.from.ch), (r += (n = o.to.line).text.length - o.to.ch);
        }
        return r;
    }
    function Yt(e) {
        var t = e.display,
            r = e.doc;
        (t.maxLine = $e(r, r.first)),
            (t.maxLineLength = Xt(t.maxLine)),
            (t.maxLineChanged = !0),
            r.iter(function (e) {
                var r = Xt(e);
                r > t.maxLineLength && ((t.maxLineLength = r), (t.maxLine = e));
            });
    }
    var $t = function (e, t, r) {
        (this.text = e), Dt(this, t), (this.height = r ? r(this) : 1);
    };
    function _t(e) {
        (e.parent = null), At(e);
    }
    ($t.prototype.lineNo = function () {
        return Qe(this);
    }),
        we($t);
    var qt = {},
        Zt = {};
    function Qt(e, t) {
        if (!e || /^\s*$/.test(e)) return null;
        var r = t.addModeClass ? Zt : qt;
        return r[e] || (r[e] = e.replace(/\S+/g, 'cm-$&'));
    }
    function Jt(e, t) {
        var r = D('span', null, null, a ? 'padding-right: .1px' : null),
            n = {
                pre: D('pre', [r], 'CodeMirror-line'),
                content: r,
                col: 0,
                pos: 0,
                cm: e,
                trailingSpace: !1,
                splitSpaces: e.getOption('lineWrapping'),
            };
        t.measure = {};
        for (var i = 0; i <= (t.rest ? t.rest.length : 0); i++) {
            var o = i ? t.rest[i - 1] : t.line,
                l = void 0;
            (n.pos = 0),
                (n.addToken = tr),
                De(e.display.measure) && (l = he(o, e.doc.direction)) && (n.addToken = rr(n.addToken, l)),
                (n.map = []),
                ir(o, n, pt(e, o, t != e.display.externalMeasured && Qe(o))),
                o.styleClasses &&
                    (o.styleClasses.bgClass && (n.bgClass = E(o.styleClasses.bgClass, n.bgClass || '')),
                    o.styleClasses.textClass && (n.textClass = E(o.styleClasses.textClass, n.textClass || ''))),
                0 == n.map.length && n.map.push(0, 0, n.content.appendChild(Ae(e.display.measure))),
                0 == i
                    ? ((t.measure.map = n.map), (t.measure.cache = {}))
                    : ((t.measure.maps || (t.measure.maps = [])).push(n.map), (t.measure.caches || (t.measure.caches = [])).push({}));
        }
        if (a) {
            var s = n.content.lastChild;
            (/\bcm-tab\b/.test(s.className) || (s.querySelector && s.querySelector('.cm-tab'))) &&
                (n.content.className = 'cm-tab-wrap-hack');
        }
        return ve(e, 'renderLine', e, t.line, n.pre), n.pre.className && (n.textClass = E(n.pre.className, n.textClass || '')), n;
    }
    function er(e) {
        var t = A('span', '•', 'cm-invalidchar');
        return (t.title = '\\u' + e.charCodeAt(0).toString(16)), t.setAttribute('aria-label', t.title), t;
    }
    function tr(e, t, r, n, i, o, a) {
        if (t) {
            var u,
                c = e.splitSpaces
                    ? (function (e, t) {
                          if (e.length > 1 && !/  /.test(e)) return e;
                          for (var r = t, n = '', i = 0; i < e.length; i++) {
                              var o = e.charAt(i);
                              ' ' != o || !r || (i != e.length - 1 && 32 != e.charCodeAt(i + 1)) || (o = ' '), (n += o), (r = ' ' == o);
                          }
                          return n;
                      })(t, e.trailingSpace)
                    : t,
                h = e.cm.state.specialChars,
                f = !1;
            if (h.test(t)) {
                u = document.createDocumentFragment();
                for (var d = 0; ; ) {
                    h.lastIndex = d;
                    var p = h.exec(t),
                        g = p ? p.index - d : t.length - d;
                    if (g) {
                        var v = document.createTextNode(c.slice(d, d + g));
                        l && s < 9 ? u.appendChild(A('span', [v])) : u.appendChild(v),
                            e.map.push(e.pos, e.pos + g, v),
                            (e.col += g),
                            (e.pos += g);
                    }
                    if (!p) break;
                    d += g + 1;
                    var m = void 0;
                    if ('\t' == p[0]) {
                        var y = e.cm.options.tabSize,
                            b = y - (e.col % y);
                        (m = u.appendChild(A('span', _(b), 'cm-tab'))).setAttribute('role', 'presentation'),
                            m.setAttribute('cm-text', '\t'),
                            (e.col += b);
                    } else
                        '\r' == p[0] || '\n' == p[0]
                            ? ((m = u.appendChild(A('span', '\r' == p[0] ? '␍' : '␤', 'cm-invalidchar'))).setAttribute('cm-text', p[0]),
                              (e.col += 1))
                            : ((m = e.cm.options.specialCharPlaceholder(p[0])).setAttribute('cm-text', p[0]),
                              l && s < 9 ? u.appendChild(A('span', [m])) : u.appendChild(m),
                              (e.col += 1));
                    e.map.push(e.pos, e.pos + 1, m), e.pos++;
                }
            } else
                (e.col += t.length),
                    (u = document.createTextNode(c)),
                    e.map.push(e.pos, e.pos + t.length, u),
                    l && s < 9 && (f = !0),
                    (e.pos += t.length);
            if (((e.trailingSpace = 32 == c.charCodeAt(t.length - 1)), r || n || i || f || o || a)) {
                var w = r || '';
                n && (w += n), i && (w += i);
                var x = A('span', [u], w, o);
                if (a) for (var C in a) a.hasOwnProperty(C) && 'style' != C && 'class' != C && x.setAttribute(C, a[C]);
                return e.content.appendChild(x);
            }
            e.content.appendChild(u);
        }
    }
    function rr(e, t) {
        return function (r, n, i, o, l, s, a) {
            i = i ? i + ' cm-force-border' : 'cm-force-border';
            for (var u = r.pos, c = u + n.length; ; ) {
                for (var h = void 0, f = 0; f < t.length && !((h = t[f]).to > u && h.from <= u); f++);
                if (h.to >= c) return e(r, n, i, o, l, s, a);
                e(r, n.slice(0, h.to - u), i, o, null, s, a), (o = null), (n = n.slice(h.to - u)), (u = h.to);
            }
        };
    }
    function nr(e, t, r, n) {
        var i = !n && r.widgetNode;
        i && e.map.push(e.pos, e.pos + t, i),
            !n &&
                e.cm.display.input.needsContentAttribute &&
                (i || (i = e.content.appendChild(document.createElement('span'))), i.setAttribute('cm-marker', r.id)),
            i && (e.cm.display.input.setUneditable(i), e.content.appendChild(i)),
            (e.pos += t),
            (e.trailingSpace = !1);
    }
    function ir(e, t, r) {
        var n = e.markedSpans,
            i = e.text,
            o = 0;
        if (n)
            for (var l, s, a, u, c, h, f, d = i.length, p = 0, g = 1, v = '', m = 0; ; ) {
                if (m == p) {
                    (a = u = c = s = ''), (f = null), (h = null), (m = 1 / 0);
                    for (var y = [], b = void 0, w = 0; w < n.length; ++w) {
                        var x = n[w],
                            C = x.marker;
                        if ('bookmark' == C.type && x.from == p && C.widgetNode) y.push(C);
                        else if (x.from <= p && (null == x.to || x.to > p || (C.collapsed && x.to == p && x.from == p))) {
                            if (
                                (null != x.to && x.to != p && m > x.to && ((m = x.to), (u = '')),
                                C.className && (a += ' ' + C.className),
                                C.css && (s = (s ? s + ';' : '') + C.css),
                                C.startStyle && x.from == p && (c += ' ' + C.startStyle),
                                C.endStyle && x.to == m && (b || (b = [])).push(C.endStyle, x.to),
                                C.title && ((f || (f = {})).title = C.title),
                                C.attributes)
                            )
                                for (var S in C.attributes) (f || (f = {}))[S] = C.attributes[S];
                            C.collapsed && (!h || Ft(h.marker, C) < 0) && (h = x);
                        } else x.from > p && m > x.from && (m = x.from);
                    }
                    if (b) for (var L = 0; L < b.length; L += 2) b[L + 1] == m && (u += ' ' + b[L]);
                    if (!h || h.from == p) for (var k = 0; k < y.length; ++k) nr(t, 0, y[k]);
                    if (h && (h.from || 0) == p) {
                        if ((nr(t, (null == h.to ? d + 1 : h.to) - p, h.marker, null == h.from), null == h.to)) return;
                        h.to == p && (h = !1);
                    }
                }
                if (p >= d) break;
                for (var T = Math.min(d, m); ; ) {
                    if (v) {
                        var M = p + v.length;
                        if (!h) {
                            var N = M > T ? v.slice(0, T - p) : v;
                            t.addToken(t, N, l ? l + a : a, c, p + N.length == m ? u : '', s, f);
                        }
                        if (M >= T) {
                            (v = v.slice(T - p)), (p = T);
                            break;
                        }
                        (p = M), (c = '');
                    }
                    (v = i.slice(o, (o = r[g++]))), (l = Qt(r[g++], t.cm.options));
                }
            }
        else for (var O = 1; O < r.length; O += 2) t.addToken(t, i.slice(o, (o = r[O])), Qt(r[O + 1], t.cm.options));
    }
    function or(e, t, r) {
        (this.line = t),
            (this.rest = (function (e) {
                for (var t, r; (t = It(e)); ) (e = t.find(1, !0).line), (r || (r = [])).push(e);
                return r;
            })(t)),
            (this.size = this.rest ? Qe(q(this.rest)) - r + 1 : 1),
            (this.node = this.text = null),
            (this.hidden = Vt(e, t));
    }
    function lr(e, t, r) {
        for (var n, i = [], o = t; o < r; o = n) {
            var l = new or(e.doc, $e(e.doc, o), o);
            (n = o + l.size), i.push(l);
        }
        return i;
    }
    var sr = null;
    var ar = null;
    function ur(e, t) {
        var r = pe(e, t);
        if (r.length) {
            var n,
                i = Array.prototype.slice.call(arguments, 2);
            sr ? (n = sr.delayedCallbacks) : ar ? (n = ar) : ((n = ar = []), setTimeout(cr, 0));
            for (
                var o = function (e) {
                        n.push(function () {
                            return r[e].apply(null, i);
                        });
                    },
                    l = 0;
                l < r.length;
                ++l
            )
                o(l);
        }
    }
    function cr() {
        var e = ar;
        ar = null;
        for (var t = 0; t < e.length; ++t) e[t]();
    }
    function hr(e, t, r, n) {
        for (var i = 0; i < t.changes.length; i++) {
            var o = t.changes[i];
            'text' == o ? pr(e, t) : 'gutter' == o ? vr(e, t, r, n) : 'class' == o ? gr(e, t) : 'widget' == o && mr(e, t, n);
        }
        t.changes = null;
    }
    function fr(e) {
        return (
            e.node == e.text &&
                ((e.node = A('div', null, null, 'position: relative')),
                e.text.parentNode && e.text.parentNode.replaceChild(e.node, e.text),
                e.node.appendChild(e.text),
                l && s < 8 && (e.node.style.zIndex = 2)),
            e.node
        );
    }
    function dr(e, t) {
        var r = e.display.externalMeasured;
        return r && r.line == t.line ? ((e.display.externalMeasured = null), (t.measure = r.measure), r.built) : Jt(e, t);
    }
    function pr(e, t) {
        var r = t.text.className,
            n = dr(e, t);
        t.text == t.node && (t.node = n.pre),
            t.text.parentNode.replaceChild(n.pre, t.text),
            (t.text = n.pre),
            n.bgClass != t.bgClass || n.textClass != t.textClass
                ? ((t.bgClass = n.bgClass), (t.textClass = n.textClass), gr(e, t))
                : r && (t.text.className = r);
    }
    function gr(e, t) {
        !(function (e, t) {
            var r = t.bgClass ? t.bgClass + ' ' + (t.line.bgClass || '') : t.line.bgClass;
            if ((r && (r += ' CodeMirror-linebackground'), t.background))
                r ? (t.background.className = r) : (t.background.parentNode.removeChild(t.background), (t.background = null));
            else if (r) {
                var n = fr(t);
                (t.background = n.insertBefore(A('div', null, r), n.firstChild)), e.display.input.setUneditable(t.background);
            }
        })(e, t),
            t.line.wrapClass ? (fr(t).className = t.line.wrapClass) : t.node != t.text && (t.node.className = '');
        var r = t.textClass ? t.textClass + ' ' + (t.line.textClass || '') : t.line.textClass;
        t.text.className = r || '';
    }
    function vr(e, t, r, n) {
        if (
            (t.gutter && (t.node.removeChild(t.gutter), (t.gutter = null)),
            t.gutterBackground && (t.node.removeChild(t.gutterBackground), (t.gutterBackground = null)),
            t.line.gutterClass)
        ) {
            var i = fr(t);
            (t.gutterBackground = A(
                'div',
                null,
                'CodeMirror-gutter-background ' + t.line.gutterClass,
                'left: ' + (e.options.fixedGutter ? n.fixedPos : -n.gutterTotalWidth) + 'px; width: ' + n.gutterTotalWidth + 'px'
            )),
                e.display.input.setUneditable(t.gutterBackground),
                i.insertBefore(t.gutterBackground, t.text);
        }
        var o = t.line.gutterMarkers;
        if (e.options.lineNumbers || o) {
            var l = fr(t),
                s = (t.gutter = A(
                    'div',
                    null,
                    'CodeMirror-gutter-wrapper',
                    'left: ' + (e.options.fixedGutter ? n.fixedPos : -n.gutterTotalWidth) + 'px'
                ));
            if (
                (s.setAttribute('aria-hidden', 'true'),
                e.display.input.setUneditable(s),
                l.insertBefore(s, t.text),
                t.line.gutterClass && (s.className += ' ' + t.line.gutterClass),
                !e.options.lineNumbers ||
                    (o && o['CodeMirror-linenumbers']) ||
                    (t.lineNumber = s.appendChild(
                        A(
                            'div',
                            tt(e.options, r),
                            'CodeMirror-linenumber CodeMirror-gutter-elt',
                            'left: ' + n.gutterLeft['CodeMirror-linenumbers'] + 'px; width: ' + e.display.lineNumInnerWidth + 'px'
                        )
                    )),
                o)
            )
                for (var a = 0; a < e.display.gutterSpecs.length; ++a) {
                    var u = e.display.gutterSpecs[a].className,
                        c = o.hasOwnProperty(u) && o[u];
                    c &&
                        s.appendChild(
                            A('div', [c], 'CodeMirror-gutter-elt', 'left: ' + n.gutterLeft[u] + 'px; width: ' + n.gutterWidth[u] + 'px')
                        );
                }
        }
    }
    function mr(e, t, r) {
        t.alignable && (t.alignable = null);
        for (var n = k('CodeMirror-linewidget'), i = t.node.firstChild, o = void 0; i; i = o)
            (o = i.nextSibling), n.test(i.className) && t.node.removeChild(i);
        br(e, t, r);
    }
    function yr(e, t, r, n) {
        var i = dr(e, t);
        return (
            (t.text = t.node = i.pre),
            i.bgClass && (t.bgClass = i.bgClass),
            i.textClass && (t.textClass = i.textClass),
            gr(e, t),
            vr(e, t, r, n),
            br(e, t, n),
            t.node
        );
    }
    function br(e, t, r) {
        if ((wr(e, t.line, t, r, !0), t.rest)) for (var n = 0; n < t.rest.length; n++) wr(e, t.rest[n], t, r, !1);
    }
    function wr(e, t, r, n, i) {
        if (t.widgets)
            for (var o = fr(r), l = 0, s = t.widgets; l < s.length; ++l) {
                var a = s[l],
                    u = A('div', [a.node], 'CodeMirror-linewidget' + (a.className ? ' ' + a.className : ''));
                a.handleMouseEvents || u.setAttribute('cm-ignore-events', 'true'),
                    xr(a, u, r, n),
                    e.display.input.setUneditable(u),
                    i && a.above ? o.insertBefore(u, r.gutter || r.text) : o.appendChild(u),
                    ur(a, 'redraw');
            }
    }
    function xr(e, t, r, n) {
        if (e.noHScroll) {
            (r.alignable || (r.alignable = [])).push(t);
            var i = n.wrapperWidth;
            (t.style.left = n.fixedPos + 'px'),
                e.coverGutter || ((i -= n.gutterTotalWidth), (t.style.paddingLeft = n.gutterTotalWidth + 'px')),
                (t.style.width = i + 'px');
        }
        e.coverGutter &&
            ((t.style.zIndex = 5), (t.style.position = 'relative'), e.noHScroll || (t.style.marginLeft = -n.gutterTotalWidth + 'px'));
    }
    function Cr(e) {
        if (null != e.height) return e.height;
        var t = e.doc.cm;
        if (!t) return 0;
        if (!W(document.body, e.node)) {
            var r = 'position: relative;';
            e.coverGutter && (r += 'margin-left: -' + t.display.gutters.offsetWidth + 'px;'),
                e.noHScroll && (r += 'width: ' + t.display.wrapper.clientWidth + 'px;'),
                O(t.display.measure, A('div', [e.node], null, r));
        }
        return (e.height = e.node.parentNode.offsetHeight);
    }
    function Sr(e, t) {
        for (var r = ke(t); r != e.wrapper; r = r.parentNode)
            if (!r || (1 == r.nodeType && 'true' == r.getAttribute('cm-ignore-events')) || (r.parentNode == e.sizer && r != e.mover))
                return !0;
    }
    function Lr(e) {
        return e.lineSpace.offsetTop;
    }
    function kr(e) {
        return e.mover.offsetHeight - e.lineSpace.offsetHeight;
    }
    function Tr(e) {
        if (e.cachedPaddingH) return e.cachedPaddingH;
        var t = O(e.measure, A('pre', 'x', 'CodeMirror-line-like')),
            r = window.getComputedStyle ? window.getComputedStyle(t) : t.currentStyle,
            n = { left: parseInt(r.paddingLeft), right: parseInt(r.paddingRight) };
        return isNaN(n.left) || isNaN(n.right) || (e.cachedPaddingH = n), n;
    }
    function Mr(e) {
        return U - e.display.nativeBarWidth;
    }
    function Nr(e) {
        return e.display.scroller.clientWidth - Mr(e) - e.display.barWidth;
    }
    function Or(e) {
        return e.display.scroller.clientHeight - Mr(e) - e.display.barHeight;
    }
    function Ar(e, t, r) {
        if (e.line == t) return { map: e.measure.map, cache: e.measure.cache };
        if (e.rest) {
            for (var n = 0; n < e.rest.length; n++) if (e.rest[n] == t) return { map: e.measure.maps[n], cache: e.measure.caches[n] };
            for (var i = 0; i < e.rest.length; i++)
                if (Qe(e.rest[i]) > r) return { map: e.measure.maps[i], cache: e.measure.caches[i], before: !0 };
        }
    }
    function Dr(e, t, r, n) {
        return Fr(e, Hr(e, t), r, n);
    }
    function Wr(e, t) {
        if (t >= e.display.viewFrom && t < e.display.viewTo) return e.display.view[fn(e, t)];
        var r = e.display.externalMeasured;
        return r && t >= r.lineN && t < r.lineN + r.size ? r : void 0;
    }
    function Hr(e, t) {
        var r = Qe(t),
            n = Wr(e, r);
        n && !n.text ? (n = null) : n && n.changes && (hr(e, n, r, sn(e)), (e.curOp.forceUpdate = !0)),
            n ||
                (n = (function (e, t) {
                    var r = Qe((t = Bt(t))),
                        n = (e.display.externalMeasured = new or(e.doc, t, r));
                    n.lineN = r;
                    var i = (n.built = Jt(e, n));
                    return (n.text = i.pre), O(e.display.lineMeasure, i.pre), n;
                })(e, t));
        var i = Ar(n, t, r);
        return { line: t, view: n, rect: null, map: i.map, cache: i.cache, before: i.before, hasHeights: !1 };
    }
    function Fr(e, t, r, n, i) {
        t.before && (r = -1);
        var o,
            a = r + (n || '');
        return (
            t.cache.hasOwnProperty(a)
                ? (o = t.cache[a])
                : (t.rect || (t.rect = t.view.text.getBoundingClientRect()),
                  t.hasHeights ||
                      (!(function (e, t, r) {
                          var n = e.options.lineWrapping,
                              i = n && Nr(e);
                          if (!t.measure.heights || (n && t.measure.width != i)) {
                              var o = (t.measure.heights = []);
                              if (n) {
                                  t.measure.width = i;
                                  for (var l = t.text.firstChild.getClientRects(), s = 0; s < l.length - 1; s++) {
                                      var a = l[s],
                                          u = l[s + 1];
                                      Math.abs(a.bottom - u.bottom) > 2 && o.push((a.bottom + u.top) / 2 - r.top);
                                  }
                              }
                              o.push(r.bottom - r.top);
                          }
                      })(e, t.view, t.rect),
                      (t.hasHeights = !0)),
                  (o = (function (e, t, r, n) {
                      var i,
                          o = Ir(t.map, r, n),
                          a = o.node,
                          u = o.start,
                          c = o.end,
                          h = o.collapse;
                      if (3 == a.nodeType) {
                          for (var f = 0; f < 4; f++) {
                              for (; u && oe(t.line.text.charAt(o.coverStart + u)); ) --u;
                              for (; o.coverStart + c < o.coverEnd && oe(t.line.text.charAt(o.coverStart + c)); ) ++c;
                              if (
                                  (i =
                                      l && s < 9 && 0 == u && c == o.coverEnd - o.coverStart
                                          ? a.parentNode.getBoundingClientRect()
                                          : zr(T(a, u, c).getClientRects(), n)).left ||
                                  i.right ||
                                  0 == u
                              )
                                  break;
                              (c = u), (u -= 1), (h = 'right');
                          }
                          l &&
                              s < 11 &&
                              (i = (function (e, t) {
                                  if (
                                      !window.screen ||
                                      null == screen.logicalXDPI ||
                                      screen.logicalXDPI == screen.deviceXDPI ||
                                      !(function (e) {
                                          if (null != Pe) return Pe;
                                          var t = O(e, A('span', 'x')),
                                              r = t.getBoundingClientRect(),
                                              n = T(t, 0, 1).getBoundingClientRect();
                                          return (Pe = Math.abs(r.left - n.left) > 1);
                                      })(e)
                                  )
                                      return t;
                                  var r = screen.logicalXDPI / screen.deviceXDPI,
                                      n = screen.logicalYDPI / screen.deviceYDPI;
                                  return { left: t.left * r, right: t.right * r, top: t.top * n, bottom: t.bottom * n };
                              })(e.display.measure, i));
                      } else {
                          var d;
                          u > 0 && (h = n = 'right'),
                              (i =
                                  e.options.lineWrapping && (d = a.getClientRects()).length > 1
                                      ? d['right' == n ? d.length - 1 : 0]
                                      : a.getBoundingClientRect());
                      }
                      if (l && s < 9 && !u && (!i || (!i.left && !i.right))) {
                          var p = a.parentNode.getClientRects()[0];
                          i = p ? { left: p.left, right: p.left + ln(e.display), top: p.top, bottom: p.bottom } : Pr;
                      }
                      for (
                          var g = i.top - t.rect.top, v = i.bottom - t.rect.top, m = (g + v) / 2, y = t.view.measure.heights, b = 0;
                          b < y.length - 1 && !(m < y[b]);
                          b++
                      );
                      var w = b ? y[b - 1] : 0,
                          x = y[b],
                          C = {
                              left: ('right' == h ? i.right : i.left) - t.rect.left,
                              right: ('left' == h ? i.left : i.right) - t.rect.left,
                              top: w,
                              bottom: x,
                          };
                      i.left || i.right || (C.bogus = !0);
                      e.options.singleCursorHeightPerLine || ((C.rtop = g), (C.rbottom = v));
                      return C;
                  })(e, t, r, n)),
                  o.bogus || (t.cache[a] = o)),
            { left: o.left, right: o.right, top: i ? o.rtop : o.top, bottom: i ? o.rbottom : o.bottom }
        );
    }
    var Er,
        Pr = { left: 0, right: 0, top: 0, bottom: 0 };
    function Ir(e, t, r) {
        for (var n, i, o, l, s, a, u = 0; u < e.length; u += 3)
            if (
                ((s = e[u]),
                (a = e[u + 1]),
                t < s
                    ? ((i = 0), (o = 1), (l = 'left'))
                    : t < a
                    ? (o = (i = t - s) + 1)
                    : (u == e.length - 3 || (t == a && e[u + 3] > t)) && ((i = (o = a - s) - 1), t >= a && (l = 'right')),
                null != i)
            ) {
                if (((n = e[u + 2]), s == a && r == (n.insertLeft ? 'left' : 'right') && (l = r), 'left' == r && 0 == i))
                    for (; u && e[u - 2] == e[u - 3] && e[u - 1].insertLeft; ) (n = e[2 + (u -= 3)]), (l = 'left');
                if ('right' == r && i == a - s)
                    for (; u < e.length - 3 && e[u + 3] == e[u + 4] && !e[u + 5].insertLeft; ) (n = e[(u += 3) + 2]), (l = 'right');
                break;
            }
        return { node: n, start: i, end: o, collapse: l, coverStart: s, coverEnd: a };
    }
    function zr(e, t) {
        var r = Pr;
        if ('left' == t) for (var n = 0; n < e.length && (r = e[n]).left == r.right; n++);
        else for (var i = e.length - 1; i >= 0 && (r = e[i]).left == r.right; i--);
        return r;
    }
    function Rr(e) {
        if (e.measure && ((e.measure.cache = {}), (e.measure.heights = null), e.rest))
            for (var t = 0; t < e.rest.length; t++) e.measure.caches[t] = {};
    }
    function Br(e) {
        (e.display.externalMeasure = null), N(e.display.lineMeasure);
        for (var t = 0; t < e.display.view.length; t++) Rr(e.display.view[t]);
    }
    function Gr(e) {
        Br(e),
            (e.display.cachedCharWidth = e.display.cachedTextHeight = e.display.cachedPaddingH = null),
            e.options.lineWrapping || (e.display.maxLineChanged = !0),
            (e.display.lineNumChars = null);
    }
    function Ur() {
        return c && m
            ? -(document.body.getBoundingClientRect().left - parseInt(getComputedStyle(document.body).marginLeft))
            : window.pageXOffset || (document.documentElement || document.body).scrollLeft;
    }
    function Vr() {
        return c && m
            ? -(document.body.getBoundingClientRect().top - parseInt(getComputedStyle(document.body).marginTop))
            : window.pageYOffset || (document.documentElement || document.body).scrollTop;
    }
    function Kr(e) {
        var t = Bt(e).widgets,
            r = 0;
        if (t) for (var n = 0; n < t.length; ++n) t[n].above && (r += Cr(t[n]));
        return r;
    }
    function jr(e, t, r, n, i) {
        if (!i) {
            var o = Kr(t);
            (r.top += o), (r.bottom += o);
        }
        if ('line' == n) return r;
        n || (n = 'local');
        var l = jt(t);
        if (('local' == n ? (l += Lr(e.display)) : (l -= e.display.viewOffset), 'page' == n || 'window' == n)) {
            var s = e.display.lineSpace.getBoundingClientRect();
            l += s.top + ('window' == n ? 0 : Vr());
            var a = s.left + ('window' == n ? 0 : Ur());
            (r.left += a), (r.right += a);
        }
        return (r.top += l), (r.bottom += l), r;
    }
    function Xr(e, t, r) {
        if ('div' == r) return t;
        var n = t.left,
            i = t.top;
        if ('page' == r) (n -= Ur()), (i -= Vr());
        else if ('local' == r || !r) {
            var o = e.display.sizer.getBoundingClientRect();
            (n += o.left), (i += o.top);
        }
        var l = e.display.lineSpace.getBoundingClientRect();
        return { left: n - l.left, top: i - l.top };
    }
    function Yr(e, t, r, n, i) {
        return n || (n = $e(e.doc, t.line)), jr(e, n, Dr(e, n, t.ch, i), r);
    }
    function $r(e, t, r, n, i, o) {
        function l(t, l) {
            var s = Fr(e, i, t, l ? 'right' : 'left', o);
            return l ? (s.left = s.right) : (s.right = s.left), jr(e, n, s, r);
        }
        (n = n || $e(e.doc, t.line)), i || (i = Hr(e, n));
        var s = he(n, e.doc.direction),
            a = t.ch,
            u = t.sticky;
        if ((a >= n.text.length ? ((a = n.text.length), (u = 'before')) : a <= 0 && ((a = 0), (u = 'after')), !s))
            return l('before' == u ? a - 1 : a, 'before' == u);
        function c(e, t, r) {
            return l(r ? e - 1 : e, (1 == s[t].level) != r);
        }
        var h = ue(s, a, u),
            f = ae,
            d = c(a, h, 'before' == u);
        return null != f && (d.other = c(a, f, 'before' != u)), d;
    }
    function _r(e, t) {
        var r = 0;
        (t = ut(e.doc, t)), e.options.lineWrapping || (r = ln(e.display) * t.ch);
        var n = $e(e.doc, t.line),
            i = jt(n) + Lr(e.display);
        return { left: r, right: r, top: i, bottom: i + n.height };
    }
    function qr(e, t, r, n, i) {
        var o = rt(e, t, r);
        return (o.xRel = i), n && (o.outside = n), o;
    }
    function Zr(e, t, r) {
        var n = e.doc;
        if ((r += e.display.viewOffset) < 0) return qr(n.first, 0, null, -1, -1);
        var i = Je(n, r),
            o = n.first + n.size - 1;
        if (i > o) return qr(n.first + n.size - 1, $e(n, o).text.length, null, 1, 1);
        t < 0 && (t = 0);
        for (var l = $e(n, i); ; ) {
            var s = tn(e, l, i, t, r),
                a = zt(l, s.ch + (s.xRel > 0 || s.outside > 0 ? 1 : 0));
            if (!a) return s;
            var u = a.find(1);
            if (u.line == i) return u;
            l = $e(n, (i = u.line));
        }
    }
    function Qr(e, t, r, n) {
        n -= Kr(t);
        var i = t.text.length,
            o = se(
                function (t) {
                    return Fr(e, r, t - 1).bottom <= n;
                },
                i,
                0
            );
        return {
            begin: o,
            end: (i = se(
                function (t) {
                    return Fr(e, r, t).top > n;
                },
                o,
                i
            )),
        };
    }
    function Jr(e, t, r, n) {
        return r || (r = Hr(e, t)), Qr(e, t, r, jr(e, t, Fr(e, r, n), 'line').top);
    }
    function en(e, t, r, n) {
        return !(e.bottom <= r) && (e.top > r || (n ? e.left : e.right) > t);
    }
    function tn(e, t, r, n, i) {
        i -= jt(t);
        var o = Hr(e, t),
            l = Kr(t),
            s = 0,
            a = t.text.length,
            u = !0,
            c = he(t, e.doc.direction);
        if (c) {
            var h = (e.options.lineWrapping ? nn : rn)(e, t, r, o, c, n, i);
            (s = (u = 1 != h.level) ? h.from : h.to - 1), (a = u ? h.to : h.from - 1);
        }
        var f,
            d,
            p = null,
            g = null,
            v = se(
                function (t) {
                    var r = Fr(e, o, t);
                    return (r.top += l), (r.bottom += l), !!en(r, n, i, !1) && (r.top <= i && r.left <= n && ((p = t), (g = r)), !0);
                },
                s,
                a
            ),
            m = !1;
        if (g) {
            var y = n - g.left < g.right - n,
                b = y == u;
            (v = p + (b ? 0 : 1)), (d = b ? 'after' : 'before'), (f = y ? g.left : g.right);
        } else {
            u || (v != a && v != s) || v++,
                (d =
                    0 == v ? 'after' : v == t.text.length ? 'before' : Fr(e, o, v - (u ? 1 : 0)).bottom + l <= i == u ? 'after' : 'before');
            var w = $r(e, rt(r, v, d), 'line', t, o);
            (f = w.left), (m = i < w.top ? -1 : i >= w.bottom ? 1 : 0);
        }
        return qr(r, (v = le(t.text, v, 1)), d, m, n - f);
    }
    function rn(e, t, r, n, i, o, l) {
        var s = se(
                function (s) {
                    var a = i[s],
                        u = 1 != a.level;
                    return en($r(e, rt(r, u ? a.to : a.from, u ? 'before' : 'after'), 'line', t, n), o, l, !0);
                },
                0,
                i.length - 1
            ),
            a = i[s];
        if (s > 0) {
            var u = 1 != a.level,
                c = $r(e, rt(r, u ? a.from : a.to, u ? 'after' : 'before'), 'line', t, n);
            en(c, o, l, !0) && c.top > l && (a = i[s - 1]);
        }
        return a;
    }
    function nn(e, t, r, n, i, o, l) {
        var s = Qr(e, t, n, l),
            a = s.begin,
            u = s.end;
        /\s/.test(t.text.charAt(u - 1)) && u--;
        for (var c = null, h = null, f = 0; f < i.length; f++) {
            var d = i[f];
            if (!(d.from >= u || d.to <= a)) {
                var p = Fr(e, n, 1 != d.level ? Math.min(u, d.to) - 1 : Math.max(a, d.from)).right,
                    g = p < o ? o - p + 1e9 : p - o;
                (!c || h > g) && ((c = d), (h = g));
            }
        }
        return (
            c || (c = i[i.length - 1]),
            c.from < a && (c = { from: a, to: c.to, level: c.level }),
            c.to > u && (c = { from: c.from, to: u, level: c.level }),
            c
        );
    }
    function on(e) {
        if (null != e.cachedTextHeight) return e.cachedTextHeight;
        if (null == Er) {
            Er = A('pre', null, 'CodeMirror-line-like');
            for (var t = 0; t < 49; ++t) Er.appendChild(document.createTextNode('x')), Er.appendChild(A('br'));
            Er.appendChild(document.createTextNode('x'));
        }
        O(e.measure, Er);
        var r = Er.offsetHeight / 50;
        return r > 3 && (e.cachedTextHeight = r), N(e.measure), r || 1;
    }
    function ln(e) {
        if (null != e.cachedCharWidth) return e.cachedCharWidth;
        var t = A('span', 'xxxxxxxxxx'),
            r = A('pre', [t], 'CodeMirror-line-like');
        O(e.measure, r);
        var n = t.getBoundingClientRect(),
            i = (n.right - n.left) / 10;
        return i > 2 && (e.cachedCharWidth = i), i || 10;
    }
    function sn(e) {
        for (var t = e.display, r = {}, n = {}, i = t.gutters.clientLeft, o = t.gutters.firstChild, l = 0; o; o = o.nextSibling, ++l) {
            var s = e.display.gutterSpecs[l].className;
            (r[s] = o.offsetLeft + o.clientLeft + i), (n[s] = o.clientWidth);
        }
        return {
            fixedPos: an(t),
            gutterTotalWidth: t.gutters.offsetWidth,
            gutterLeft: r,
            gutterWidth: n,
            wrapperWidth: t.wrapper.clientWidth,
        };
    }
    function an(e) {
        return e.scroller.getBoundingClientRect().left - e.sizer.getBoundingClientRect().left;
    }
    function un(e) {
        var t = on(e.display),
            r = e.options.lineWrapping,
            n = r && Math.max(5, e.display.scroller.clientWidth / ln(e.display) - 3);
        return function (i) {
            if (Vt(e.doc, i)) return 0;
            var o = 0;
            if (i.widgets) for (var l = 0; l < i.widgets.length; l++) i.widgets[l].height && (o += i.widgets[l].height);
            return r ? o + (Math.ceil(i.text.length / n) || 1) * t : o + t;
        };
    }
    function cn(e) {
        var t = e.doc,
            r = un(e);
        t.iter(function (e) {
            var t = r(e);
            t != e.height && Ze(e, t);
        });
    }
    function hn(e, t, r, n) {
        var i = e.display;
        if (!r && 'true' == ke(t).getAttribute('cm-not-content')) return null;
        var o,
            l,
            s = i.lineSpace.getBoundingClientRect();
        try {
            (o = t.clientX - s.left), (l = t.clientY - s.top);
        } catch (e) {
            return null;
        }
        var a,
            u = Zr(e, o, l);
        if (n && u.xRel > 0 && (a = $e(e.doc, u.line).text).length == u.ch) {
            var c = R(a, a.length, e.options.tabSize) - a.length;
            u = rt(u.line, Math.max(0, Math.round((o - Tr(e.display).left) / ln(e.display)) - c));
        }
        return u;
    }
    function fn(e, t) {
        if (t >= e.display.viewTo) return null;
        if ((t -= e.display.viewFrom) < 0) return null;
        for (var r = e.display.view, n = 0; n < r.length; n++) if ((t -= r[n].size) < 0) return n;
    }
    function dn(e, t, r, n) {
        null == t && (t = e.doc.first), null == r && (r = e.doc.first + e.doc.size), n || (n = 0);
        var i = e.display;
        if (
            (n && r < i.viewTo && (null == i.updateLineNumbers || i.updateLineNumbers > t) && (i.updateLineNumbers = t),
            (e.curOp.viewChanged = !0),
            t >= i.viewTo)
        )
            Lt && Gt(e.doc, t) < i.viewTo && gn(e);
        else if (r <= i.viewFrom) Lt && Ut(e.doc, r + n) > i.viewFrom ? gn(e) : ((i.viewFrom += n), (i.viewTo += n));
        else if (t <= i.viewFrom && r >= i.viewTo) gn(e);
        else if (t <= i.viewFrom) {
            var o = vn(e, r, r + n, 1);
            o ? ((i.view = i.view.slice(o.index)), (i.viewFrom = o.lineN), (i.viewTo += n)) : gn(e);
        } else if (r >= i.viewTo) {
            var l = vn(e, t, t, -1);
            l ? ((i.view = i.view.slice(0, l.index)), (i.viewTo = l.lineN)) : gn(e);
        } else {
            var s = vn(e, t, t, -1),
                a = vn(e, r, r + n, 1);
            s && a
                ? ((i.view = i.view.slice(0, s.index).concat(lr(e, s.lineN, a.lineN)).concat(i.view.slice(a.index))), (i.viewTo += n))
                : gn(e);
        }
        var u = i.externalMeasured;
        u && (r < u.lineN ? (u.lineN += n) : t < u.lineN + u.size && (i.externalMeasured = null));
    }
    function pn(e, t, r) {
        e.curOp.viewChanged = !0;
        var n = e.display,
            i = e.display.externalMeasured;
        if ((i && t >= i.lineN && t < i.lineN + i.size && (n.externalMeasured = null), !(t < n.viewFrom || t >= n.viewTo))) {
            var o = n.view[fn(e, t)];
            if (null != o.node) {
                var l = o.changes || (o.changes = []);
                -1 == G(l, r) && l.push(r);
            }
        }
    }
    function gn(e) {
        (e.display.viewFrom = e.display.viewTo = e.doc.first), (e.display.view = []), (e.display.viewOffset = 0);
    }
    function vn(e, t, r, n) {
        var i,
            o = fn(e, t),
            l = e.display.view;
        if (!Lt || r == e.doc.first + e.doc.size) return { index: o, lineN: r };
        for (var s = e.display.viewFrom, a = 0; a < o; a++) s += l[a].size;
        if (s != t) {
            if (n > 0) {
                if (o == l.length - 1) return null;
                (i = s + l[o].size - t), o++;
            } else i = s - t;
            (t += i), (r += i);
        }
        for (; Gt(e.doc, r) != r; ) {
            if (o == (n < 0 ? 0 : l.length - 1)) return null;
            (r += n * l[o - (n < 0 ? 1 : 0)].size), (o += n);
        }
        return { index: o, lineN: r };
    }
    function mn(e) {
        for (var t = e.display.view, r = 0, n = 0; n < t.length; n++) {
            var i = t[n];
            i.hidden || (i.node && !i.changes) || ++r;
        }
        return r;
    }
    function yn(e) {
        e.display.input.showSelection(e.display.input.prepareSelection());
    }
    function bn(e, t) {
        void 0 === t && (t = !0);
        var r = e.doc,
            n = {},
            i = (n.cursors = document.createDocumentFragment()),
            o = (n.selection = document.createDocumentFragment()),
            l = e.options.$customCursor;
        l && (t = !0);
        for (var s = 0; s < r.sel.ranges.length; s++)
            if (t || s != r.sel.primIndex) {
                var a = r.sel.ranges[s];
                if (!(a.from().line >= e.display.viewTo || a.to().line < e.display.viewFrom)) {
                    var u = a.empty();
                    if (l) {
                        var c = l(e, a);
                        c && wn(e, c, i);
                    } else (u || e.options.showCursorWhenSelecting) && wn(e, a.head, i);
                    u || Cn(e, a, o);
                }
            }
        return n;
    }
    function wn(e, t, r) {
        var n = $r(e, t, 'div', null, null, !e.options.singleCursorHeightPerLine),
            i = r.appendChild(A('div', ' ', 'CodeMirror-cursor'));
        if (
            ((i.style.left = n.left + 'px'),
            (i.style.top = n.top + 'px'),
            (i.style.height = Math.max(0, n.bottom - n.top) * e.options.cursorHeight + 'px'),
            /\bcm-fat-cursor\b/.test(e.getWrapperElement().className))
        ) {
            var o = Yr(e, t, 'div', null, null),
                l = o.right - o.left;
            i.style.width = (l > 0 ? l : e.defaultCharWidth()) + 'px';
        }
        if (n.other) {
            var s = r.appendChild(A('div', ' ', 'CodeMirror-cursor CodeMirror-secondarycursor'));
            (s.style.display = ''),
                (s.style.left = n.other.left + 'px'),
                (s.style.top = n.other.top + 'px'),
                (s.style.height = 0.85 * (n.other.bottom - n.other.top) + 'px');
        }
    }
    function xn(e, t) {
        return e.top - t.top || e.left - t.left;
    }
    function Cn(e, t, r) {
        var n = e.display,
            i = e.doc,
            o = document.createDocumentFragment(),
            l = Tr(e.display),
            s = l.left,
            a = Math.max(n.sizerWidth, Nr(e) - n.sizer.offsetLeft) - l.right,
            u = 'ltr' == i.direction;
        function c(e, t, r, n) {
            t < 0 && (t = 0),
                (t = Math.round(t)),
                (n = Math.round(n)),
                o.appendChild(
                    A(
                        'div',
                        null,
                        'CodeMirror-selected',
                        'position: absolute; left: ' +
                            e +
                            'px;\n                             top: ' +
                            t +
                            'px; width: ' +
                            (null == r ? a - e : r) +
                            'px;\n                             height: ' +
                            (n - t) +
                            'px'
                    )
                );
        }
        function h(t, r, n) {
            var o,
                l,
                h = $e(i, t),
                f = h.text.length;
            function d(r, n) {
                return Yr(e, rt(t, r), 'div', h, n);
            }
            function p(t, r, n) {
                var i = Jr(e, h, null, t),
                    o = ('ltr' == r) == ('after' == n) ? 'left' : 'right';
                return d('after' == n ? i.begin : i.end - (/\s/.test(h.text.charAt(i.end - 1)) ? 2 : 1), o)[o];
            }
            var g = he(h, i.direction);
            return (
                (function (e, t, r, n) {
                    if (!e) return n(t, r, 'ltr', 0);
                    for (var i = !1, o = 0; o < e.length; ++o) {
                        var l = e[o];
                        ((l.from < r && l.to > t) || (t == r && l.to == t)) &&
                            (n(Math.max(l.from, t), Math.min(l.to, r), 1 == l.level ? 'rtl' : 'ltr', o), (i = !0));
                    }
                    i || n(t, r, 'ltr');
                })(g, r || 0, null == n ? f : n, function (e, t, i, h) {
                    var v = 'ltr' == i,
                        m = d(e, v ? 'left' : 'right'),
                        y = d(t - 1, v ? 'right' : 'left'),
                        b = null == r && 0 == e,
                        w = null == n && t == f,
                        x = 0 == h,
                        C = !g || h == g.length - 1;
                    if (y.top - m.top <= 3) {
                        var S = (u ? w : b) && C,
                            L = (u ? b : w) && x ? s : (v ? m : y).left,
                            k = S ? a : (v ? y : m).right;
                        c(L, m.top, k - L, m.bottom);
                    } else {
                        var T, M, N, O;
                        v
                            ? ((T = u && b && x ? s : m.left),
                              (M = u ? a : p(e, i, 'before')),
                              (N = u ? s : p(t, i, 'after')),
                              (O = u && w && C ? a : y.right))
                            : ((T = u ? p(e, i, 'before') : s),
                              (M = !u && b && x ? a : m.right),
                              (N = !u && w && C ? s : y.left),
                              (O = u ? p(t, i, 'after') : a)),
                            c(T, m.top, M - T, m.bottom),
                            m.bottom < y.top && c(s, m.bottom, null, y.top),
                            c(N, y.top, O - N, y.bottom);
                    }
                    (!o || xn(m, o) < 0) && (o = m), xn(y, o) < 0 && (o = y), (!l || xn(m, l) < 0) && (l = m), xn(y, l) < 0 && (l = y);
                }),
                { start: o, end: l }
            );
        }
        var f = t.from(),
            d = t.to();
        if (f.line == d.line) h(f.line, f.ch, d.ch);
        else {
            var p = $e(i, f.line),
                g = $e(i, d.line),
                v = Bt(p) == Bt(g),
                m = h(f.line, f.ch, v ? p.text.length + 1 : null).end,
                y = h(d.line, v ? 0 : null, d.ch).start;
            v &&
                (m.top < y.top - 2
                    ? (c(m.right, m.top, null, m.bottom), c(s, y.top, y.left, y.bottom))
                    : c(m.right, m.top, y.left - m.right, m.bottom)),
                m.bottom < y.top && c(s, m.bottom, null, y.top);
        }
        r.appendChild(o);
    }
    function Sn(e) {
        if (e.state.focused) {
            var t = e.display;
            clearInterval(t.blinker);
            var r = !0;
            (t.cursorDiv.style.visibility = ''),
                e.options.cursorBlinkRate > 0
                    ? (t.blinker = setInterval(function () {
                          e.hasFocus() || Mn(e), (t.cursorDiv.style.visibility = (r = !r) ? '' : 'hidden');
                      }, e.options.cursorBlinkRate))
                    : e.options.cursorBlinkRate < 0 && (t.cursorDiv.style.visibility = 'hidden');
        }
    }
    function Ln(e) {
        e.hasFocus() || (e.display.input.focus(), e.state.focused || Tn(e));
    }
    function kn(e) {
        (e.state.delayingBlurEvent = !0),
            setTimeout(function () {
                e.state.delayingBlurEvent && ((e.state.delayingBlurEvent = !1), e.state.focused && Mn(e));
            }, 100);
    }
    function Tn(e, t) {
        e.state.delayingBlurEvent && !e.state.draggingText && (e.state.delayingBlurEvent = !1),
            'nocursor' != e.options.readOnly &&
                (e.state.focused ||
                    (ve(e, 'focus', e, t),
                    (e.state.focused = !0),
                    F(e.display.wrapper, 'CodeMirror-focused'),
                    e.curOp ||
                        e.display.selForContextMenu == e.doc.sel ||
                        (e.display.input.reset(),
                        a &&
                            setTimeout(function () {
                                return e.display.input.reset(!0);
                            }, 20)),
                    e.display.input.receivedFocus()),
                Sn(e));
    }
    function Mn(e, t) {
        e.state.delayingBlurEvent ||
            (e.state.focused && (ve(e, 'blur', e, t), (e.state.focused = !1), M(e.display.wrapper, 'CodeMirror-focused')),
            clearInterval(e.display.blinker),
            setTimeout(function () {
                e.state.focused || (e.display.shift = !1);
            }, 150));
    }
    function Nn(e) {
        for (
            var t = e.display,
                r = t.lineDiv.offsetTop,
                n = Math.max(0, t.scroller.getBoundingClientRect().top),
                i = t.lineDiv.getBoundingClientRect().top,
                o = 0,
                a = 0;
            a < t.view.length;
            a++
        ) {
            var u = t.view[a],
                c = e.options.lineWrapping,
                h = void 0,
                f = 0;
            if (!u.hidden) {
                if (((i += u.line.height), l && s < 8)) {
                    var d = u.node.offsetTop + u.node.offsetHeight;
                    (h = d - r), (r = d);
                } else {
                    var p = u.node.getBoundingClientRect();
                    (h = p.bottom - p.top), !c && u.text.firstChild && (f = u.text.firstChild.getBoundingClientRect().right - p.left - 1);
                }
                var g = u.line.height - h;
                if ((g > 0.005 || g < -0.005) && (i < n && (o -= g), Ze(u.line, h), On(u.line), u.rest))
                    for (var v = 0; v < u.rest.length; v++) On(u.rest[v]);
                if (f > e.display.sizerWidth) {
                    var m = Math.ceil(f / ln(e.display));
                    m > e.display.maxLineLength &&
                        ((e.display.maxLineLength = m), (e.display.maxLine = u.line), (e.display.maxLineChanged = !0));
                }
            }
        }
        Math.abs(o) > 2 && (t.scroller.scrollTop += o);
    }
    function On(e) {
        if (e.widgets)
            for (var t = 0; t < e.widgets.length; ++t) {
                var r = e.widgets[t],
                    n = r.node.parentNode;
                n && (r.height = n.offsetHeight);
            }
    }
    function An(e, t, r) {
        var n = r && null != r.top ? Math.max(0, r.top) : e.scroller.scrollTop;
        n = Math.floor(n - Lr(e));
        var i = r && null != r.bottom ? r.bottom : n + e.wrapper.clientHeight,
            o = Je(t, n),
            l = Je(t, i);
        if (r && r.ensure) {
            var s = r.ensure.from.line,
                a = r.ensure.to.line;
            s < o
                ? ((o = s), (l = Je(t, jt($e(t, s)) + e.wrapper.clientHeight)))
                : Math.min(a, t.lastLine()) >= l && ((o = Je(t, jt($e(t, a)) - e.wrapper.clientHeight)), (l = a));
        }
        return { from: o, to: Math.max(l, o + 1) };
    }
    function Dn(e, t) {
        var r = e.display,
            n = on(e.display);
        t.top < 0 && (t.top = 0);
        var i = e.curOp && null != e.curOp.scrollTop ? e.curOp.scrollTop : r.scroller.scrollTop,
            o = Or(e),
            l = {};
        t.bottom - t.top > o && (t.bottom = t.top + o);
        var s = e.doc.height + kr(r),
            a = t.top < n,
            u = t.bottom > s - n;
        if (t.top < i) l.scrollTop = a ? 0 : t.top;
        else if (t.bottom > i + o) {
            var c = Math.min(t.top, (u ? s : t.bottom) - o);
            c != i && (l.scrollTop = c);
        }
        var h = e.options.fixedGutter ? 0 : r.gutters.offsetWidth,
            f = e.curOp && null != e.curOp.scrollLeft ? e.curOp.scrollLeft : r.scroller.scrollLeft - h,
            d = Nr(e) - r.gutters.offsetWidth,
            p = t.right - t.left > d;
        return (
            p && (t.right = t.left + d),
            t.left < 10
                ? (l.scrollLeft = 0)
                : t.left < f
                ? (l.scrollLeft = Math.max(0, t.left + h - (p ? 0 : 10)))
                : t.right > d + f - 3 && (l.scrollLeft = t.right + (p ? 0 : 10) - d),
            l
        );
    }
    function Wn(e, t) {
        null != t && (En(e), (e.curOp.scrollTop = (null == e.curOp.scrollTop ? e.doc.scrollTop : e.curOp.scrollTop) + t));
    }
    function Hn(e) {
        En(e);
        var t = e.getCursor();
        e.curOp.scrollToPos = { from: t, to: t, margin: e.options.cursorScrollMargin };
    }
    function Fn(e, t, r) {
        (null == t && null == r) || En(e), null != t && (e.curOp.scrollLeft = t), null != r && (e.curOp.scrollTop = r);
    }
    function En(e) {
        var t = e.curOp.scrollToPos;
        t && ((e.curOp.scrollToPos = null), Pn(e, _r(e, t.from), _r(e, t.to), t.margin));
    }
    function Pn(e, t, r, n) {
        var i = Dn(e, {
            left: Math.min(t.left, r.left),
            top: Math.min(t.top, r.top) - n,
            right: Math.max(t.right, r.right),
            bottom: Math.max(t.bottom, r.bottom) + n,
        });
        Fn(e, i.scrollLeft, i.scrollTop);
    }
    function In(e, t) {
        Math.abs(e.doc.scrollTop - t) < 2 || (r || ci(e, { top: t }), zn(e, t, !0), r && ci(e), oi(e, 100));
    }
    function zn(e, t, r) {
        (t = Math.max(0, Math.min(e.display.scroller.scrollHeight - e.display.scroller.clientHeight, t))),
            (e.display.scroller.scrollTop != t || r) &&
                ((e.doc.scrollTop = t),
                e.display.scrollbars.setScrollTop(t),
                e.display.scroller.scrollTop != t && (e.display.scroller.scrollTop = t));
    }
    function Rn(e, t, r, n) {
        (t = Math.max(0, Math.min(t, e.display.scroller.scrollWidth - e.display.scroller.clientWidth))),
            ((r ? t == e.doc.scrollLeft : Math.abs(e.doc.scrollLeft - t) < 2) && !n) ||
                ((e.doc.scrollLeft = t),
                di(e),
                e.display.scroller.scrollLeft != t && (e.display.scroller.scrollLeft = t),
                e.display.scrollbars.setScrollLeft(t));
    }
    function Bn(e) {
        var t = e.display,
            r = t.gutters.offsetWidth,
            n = Math.round(e.doc.height + kr(e.display));
        return {
            clientHeight: t.scroller.clientHeight,
            viewHeight: t.wrapper.clientHeight,
            scrollWidth: t.scroller.scrollWidth,
            clientWidth: t.scroller.clientWidth,
            viewWidth: t.wrapper.clientWidth,
            barLeft: e.options.fixedGutter ? r : 0,
            docHeight: n,
            scrollHeight: n + Mr(e) + t.barHeight,
            nativeBarWidth: t.nativeBarWidth,
            gutterWidth: r,
        };
    }
    var Gn = function (e, t, r) {
        this.cm = r;
        var n = (this.vert = A('div', [A('div', null, null, 'min-width: 1px')], 'CodeMirror-vscrollbar')),
            i = (this.horiz = A('div', [A('div', null, null, 'height: 100%; min-height: 1px')], 'CodeMirror-hscrollbar'));
        (n.tabIndex = i.tabIndex = -1),
            e(n),
            e(i),
            de(n, 'scroll', function () {
                n.clientHeight && t(n.scrollTop, 'vertical');
            }),
            de(i, 'scroll', function () {
                i.clientWidth && t(i.scrollLeft, 'horizontal');
            }),
            (this.checkedZeroWidth = !1),
            l && s < 8 && (this.horiz.style.minHeight = this.vert.style.minWidth = '18px');
    };
    (Gn.prototype.update = function (e) {
        var t = e.scrollWidth > e.clientWidth + 1,
            r = e.scrollHeight > e.clientHeight + 1,
            n = e.nativeBarWidth;
        if (r) {
            (this.vert.style.display = 'block'), (this.vert.style.bottom = t ? n + 'px' : '0');
            var i = e.viewHeight - (t ? n : 0);
            this.vert.firstChild.style.height = Math.max(0, e.scrollHeight - e.clientHeight + i) + 'px';
        } else (this.vert.scrollTop = 0), (this.vert.style.display = ''), (this.vert.firstChild.style.height = '0');
        if (t) {
            (this.horiz.style.display = 'block'), (this.horiz.style.right = r ? n + 'px' : '0'), (this.horiz.style.left = e.barLeft + 'px');
            var o = e.viewWidth - e.barLeft - (r ? n : 0);
            this.horiz.firstChild.style.width = Math.max(0, e.scrollWidth - e.clientWidth + o) + 'px';
        } else (this.horiz.style.display = ''), (this.horiz.firstChild.style.width = '0');
        return (
            !this.checkedZeroWidth && e.clientHeight > 0 && (0 == n && this.zeroWidthHack(), (this.checkedZeroWidth = !0)),
            { right: r ? n : 0, bottom: t ? n : 0 }
        );
    }),
        (Gn.prototype.setScrollLeft = function (e) {
            this.horiz.scrollLeft != e && (this.horiz.scrollLeft = e),
                this.disableHoriz && this.enableZeroWidthBar(this.horiz, this.disableHoriz, 'horiz');
        }),
        (Gn.prototype.setScrollTop = function (e) {
            this.vert.scrollTop != e && (this.vert.scrollTop = e),
                this.disableVert && this.enableZeroWidthBar(this.vert, this.disableVert, 'vert');
        }),
        (Gn.prototype.zeroWidthHack = function () {
            var e = b && !p ? '12px' : '18px';
            (this.horiz.style.height = this.vert.style.width = e),
                (this.horiz.style.pointerEvents = this.vert.style.pointerEvents = 'none'),
                (this.disableHoriz = new B()),
                (this.disableVert = new B());
        }),
        (Gn.prototype.enableZeroWidthBar = function (e, t, r) {
            (e.style.pointerEvents = 'auto'),
                t.set(1e3, function n() {
                    var i = e.getBoundingClientRect();
                    ('vert' == r
                        ? document.elementFromPoint(i.right - 1, (i.top + i.bottom) / 2)
                        : document.elementFromPoint((i.right + i.left) / 2, i.bottom - 1)) != e
                        ? (e.style.pointerEvents = 'none')
                        : t.set(1e3, n);
                });
        }),
        (Gn.prototype.clear = function () {
            var e = this.horiz.parentNode;
            e.removeChild(this.horiz), e.removeChild(this.vert);
        });
    var Un = function () {};
    function Vn(e, t) {
        t || (t = Bn(e));
        var r = e.display.barWidth,
            n = e.display.barHeight;
        Kn(e, t);
        for (var i = 0; (i < 4 && r != e.display.barWidth) || n != e.display.barHeight; i++)
            r != e.display.barWidth && e.options.lineWrapping && Nn(e), Kn(e, Bn(e)), (r = e.display.barWidth), (n = e.display.barHeight);
    }
    function Kn(e, t) {
        var r = e.display,
            n = r.scrollbars.update(t);
        (r.sizer.style.paddingRight = (r.barWidth = n.right) + 'px'),
            (r.sizer.style.paddingBottom = (r.barHeight = n.bottom) + 'px'),
            (r.heightForcer.style.borderBottom = n.bottom + 'px solid transparent'),
            n.right && n.bottom
                ? ((r.scrollbarFiller.style.display = 'block'),
                  (r.scrollbarFiller.style.height = n.bottom + 'px'),
                  (r.scrollbarFiller.style.width = n.right + 'px'))
                : (r.scrollbarFiller.style.display = ''),
            n.bottom && e.options.coverGutterNextToScrollbar && e.options.fixedGutter
                ? ((r.gutterFiller.style.display = 'block'),
                  (r.gutterFiller.style.height = n.bottom + 'px'),
                  (r.gutterFiller.style.width = t.gutterWidth + 'px'))
                : (r.gutterFiller.style.display = '');
    }
    (Un.prototype.update = function () {
        return { bottom: 0, right: 0 };
    }),
        (Un.prototype.setScrollLeft = function () {}),
        (Un.prototype.setScrollTop = function () {}),
        (Un.prototype.clear = function () {});
    var jn = { native: Gn, null: Un };
    function Xn(e) {
        e.display.scrollbars &&
            (e.display.scrollbars.clear(), e.display.scrollbars.addClass && M(e.display.wrapper, e.display.scrollbars.addClass)),
            (e.display.scrollbars = new jn[e.options.scrollbarStyle](
                function (t) {
                    e.display.wrapper.insertBefore(t, e.display.scrollbarFiller),
                        de(t, 'mousedown', function () {
                            e.state.focused &&
                                setTimeout(function () {
                                    return e.display.input.focus();
                                }, 0);
                        }),
                        t.setAttribute('cm-not-content', 'true');
                },
                function (t, r) {
                    'horizontal' == r ? Rn(e, t) : In(e, t);
                },
                e
            )),
            e.display.scrollbars.addClass && F(e.display.wrapper, e.display.scrollbars.addClass);
    }
    var Yn = 0;
    function $n(e) {
        var t;
        (e.curOp = {
            cm: e,
            viewChanged: !1,
            startHeight: e.doc.height,
            forceUpdate: !1,
            updateInput: 0,
            typing: !1,
            changeObjs: null,
            cursorActivityHandlers: null,
            cursorActivityCalled: 0,
            selectionChanged: !1,
            updateMaxLine: !1,
            scrollLeft: null,
            scrollTop: null,
            scrollToPos: null,
            focus: !1,
            id: ++Yn,
            markArrays: null,
        }),
            (t = e.curOp),
            sr ? sr.ops.push(t) : (t.ownsGroup = sr = { ops: [t], delayedCallbacks: [] });
    }
    function _n(e) {
        var t = e.curOp;
        t &&
            (function (e, t) {
                var r = e.ownsGroup;
                if (r)
                    try {
                        !(function (e) {
                            var t = e.delayedCallbacks,
                                r = 0;
                            do {
                                for (; r < t.length; r++) t[r].call(null);
                                for (var n = 0; n < e.ops.length; n++) {
                                    var i = e.ops[n];
                                    if (i.cursorActivityHandlers)
                                        for (; i.cursorActivityCalled < i.cursorActivityHandlers.length; )
                                            i.cursorActivityHandlers[i.cursorActivityCalled++].call(null, i.cm);
                                }
                            } while (r < t.length);
                        })(r);
                    } finally {
                        (sr = null), t(r);
                    }
            })(t, function (e) {
                for (var t = 0; t < e.ops.length; t++) e.ops[t].cm.curOp = null;
                !(function (e) {
                    for (var t = e.ops, r = 0; r < t.length; r++) qn(t[r]);
                    for (var n = 0; n < t.length; n++) Zn(t[n]);
                    for (var i = 0; i < t.length; i++) Qn(t[i]);
                    for (var o = 0; o < t.length; o++) Jn(t[o]);
                    for (var l = 0; l < t.length; l++) ei(t[l]);
                })(e);
            });
    }
    function qn(e) {
        var t = e.cm,
            r = t.display;
        !(function (e) {
            var t = e.display;
            !t.scrollbarsClipped &&
                t.scroller.offsetWidth &&
                ((t.nativeBarWidth = t.scroller.offsetWidth - t.scroller.clientWidth),
                (t.heightForcer.style.height = Mr(e) + 'px'),
                (t.sizer.style.marginBottom = -t.nativeBarWidth + 'px'),
                (t.sizer.style.borderRightWidth = Mr(e) + 'px'),
                (t.scrollbarsClipped = !0));
        })(t),
            e.updateMaxLine && Yt(t),
            (e.mustUpdate =
                e.viewChanged ||
                e.forceUpdate ||
                null != e.scrollTop ||
                (e.scrollToPos && (e.scrollToPos.from.line < r.viewFrom || e.scrollToPos.to.line >= r.viewTo)) ||
                (r.maxLineChanged && t.options.lineWrapping)),
            (e.update = e.mustUpdate && new si(t, e.mustUpdate && { top: e.scrollTop, ensure: e.scrollToPos }, e.forceUpdate));
    }
    function Zn(e) {
        e.updatedDisplay = e.mustUpdate && ai(e.cm, e.update);
    }
    function Qn(e) {
        var t = e.cm,
            r = t.display;
        e.updatedDisplay && Nn(t),
            (e.barMeasure = Bn(t)),
            r.maxLineChanged &&
                !t.options.lineWrapping &&
                ((e.adjustWidthTo = Dr(t, r.maxLine, r.maxLine.text.length).left + 3),
                (t.display.sizerWidth = e.adjustWidthTo),
                (e.barMeasure.scrollWidth = Math.max(
                    r.scroller.clientWidth,
                    r.sizer.offsetLeft + e.adjustWidthTo + Mr(t) + t.display.barWidth
                )),
                (e.maxScrollLeft = Math.max(0, r.sizer.offsetLeft + e.adjustWidthTo - Nr(t)))),
            (e.updatedDisplay || e.selectionChanged) && (e.preparedSelection = r.input.prepareSelection());
    }
    function Jn(e) {
        var t = e.cm;
        null != e.adjustWidthTo &&
            ((t.display.sizer.style.minWidth = e.adjustWidthTo + 'px'),
            e.maxScrollLeft < t.doc.scrollLeft && Rn(t, Math.min(t.display.scroller.scrollLeft, e.maxScrollLeft), !0),
            (t.display.maxLineChanged = !1));
        var r = e.focus && e.focus == H();
        e.preparedSelection && t.display.input.showSelection(e.preparedSelection, r),
            (e.updatedDisplay || e.startHeight != t.doc.height) && Vn(t, e.barMeasure),
            e.updatedDisplay && fi(t, e.barMeasure),
            e.selectionChanged && Sn(t),
            t.state.focused && e.updateInput && t.display.input.reset(e.typing),
            r && Ln(e.cm);
    }
    function ei(e) {
        var t = e.cm,
            r = t.display,
            n = t.doc;
        if (
            (e.updatedDisplay && ui(t, e.update),
            null == r.wheelStartX ||
                (null == e.scrollTop && null == e.scrollLeft && !e.scrollToPos) ||
                (r.wheelStartX = r.wheelStartY = null),
            null != e.scrollTop && zn(t, e.scrollTop, e.forceScroll),
            null != e.scrollLeft && Rn(t, e.scrollLeft, !0, !0),
            e.scrollToPos)
        ) {
            var i = (function (e, t, r, n) {
                var i;
                null == n && (n = 0),
                    e.options.lineWrapping ||
                        t != r ||
                        ((r = 'before' == t.sticky ? rt(t.line, t.ch + 1, 'before') : t),
                        (t = t.ch ? rt(t.line, 'before' == t.sticky ? t.ch - 1 : t.ch, 'after') : t));
                for (var o = 0; o < 5; o++) {
                    var l = !1,
                        s = $r(e, t),
                        a = r && r != t ? $r(e, r) : s,
                        u = Dn(
                            e,
                            (i = {
                                left: Math.min(s.left, a.left),
                                top: Math.min(s.top, a.top) - n,
                                right: Math.max(s.left, a.left),
                                bottom: Math.max(s.bottom, a.bottom) + n,
                            })
                        ),
                        c = e.doc.scrollTop,
                        h = e.doc.scrollLeft;
                    if (
                        (null != u.scrollTop && (In(e, u.scrollTop), Math.abs(e.doc.scrollTop - c) > 1 && (l = !0)),
                        null != u.scrollLeft && (Rn(e, u.scrollLeft), Math.abs(e.doc.scrollLeft - h) > 1 && (l = !0)),
                        !l)
                    )
                        break;
                }
                return i;
            })(t, ut(n, e.scrollToPos.from), ut(n, e.scrollToPos.to), e.scrollToPos.margin);
            !(function (e, t) {
                if (!me(e, 'scrollCursorIntoView')) {
                    var r = e.display,
                        n = r.sizer.getBoundingClientRect(),
                        i = null;
                    if (
                        (t.top + n.top < 0
                            ? (i = !0)
                            : t.bottom + n.top > (window.innerHeight || document.documentElement.clientHeight) && (i = !1),
                        null != i && !g)
                    ) {
                        var o = A(
                            'div',
                            '​',
                            null,
                            'position: absolute;\n                         top: ' +
                                (t.top - r.viewOffset - Lr(e.display)) +
                                'px;\n                         height: ' +
                                (t.bottom - t.top + Mr(e) + r.barHeight) +
                                'px;\n                         left: ' +
                                t.left +
                                'px; width: ' +
                                Math.max(2, t.right - t.left) +
                                'px;'
                        );
                        e.display.lineSpace.appendChild(o), o.scrollIntoView(i), e.display.lineSpace.removeChild(o);
                    }
                }
            })(t, i);
        }
        var o = e.maybeHiddenMarkers,
            l = e.maybeUnhiddenMarkers;
        if (o) for (var s = 0; s < o.length; ++s) o[s].lines.length || ve(o[s], 'hide');
        if (l) for (var a = 0; a < l.length; ++a) l[a].lines.length && ve(l[a], 'unhide');
        r.wrapper.offsetHeight && (n.scrollTop = t.display.scroller.scrollTop),
            e.changeObjs && ve(t, 'changes', t, e.changeObjs),
            e.update && e.update.finish();
    }
    function ti(e, t) {
        if (e.curOp) return t();
        $n(e);
        try {
            return t();
        } finally {
            _n(e);
        }
    }
    function ri(e, t) {
        return function () {
            if (e.curOp) return t.apply(e, arguments);
            $n(e);
            try {
                return t.apply(e, arguments);
            } finally {
                _n(e);
            }
        };
    }
    function ni(e) {
        return function () {
            if (this.curOp) return e.apply(this, arguments);
            $n(this);
            try {
                return e.apply(this, arguments);
            } finally {
                _n(this);
            }
        };
    }
    function ii(e) {
        return function () {
            var t = this.cm;
            if (!t || t.curOp) return e.apply(this, arguments);
            $n(t);
            try {
                return e.apply(this, arguments);
            } finally {
                _n(t);
            }
        };
    }
    function oi(e, t) {
        e.doc.highlightFrontier < e.display.viewTo && e.state.highlight.set(t, I(li, e));
    }
    function li(e) {
        var t = e.doc;
        if (!(t.highlightFrontier >= e.display.viewTo)) {
            var r = +new Date() + e.options.workTime,
                n = gt(e, t.highlightFrontier),
                i = [];
            t.iter(n.line, Math.min(t.first + t.size, e.display.viewTo + 500), function (o) {
                if (n.line >= e.display.viewFrom) {
                    var l = o.styles,
                        s = o.text.length > e.options.maxHighlightLength ? Ke(t.mode, n.state) : null,
                        a = dt(e, o, n, !0);
                    s && (n.state = s), (o.styles = a.styles);
                    var u = o.styleClasses,
                        c = a.classes;
                    c ? (o.styleClasses = c) : u && (o.styleClasses = null);
                    for (
                        var h =
                                !l ||
                                l.length != o.styles.length ||
                                (u != c && (!u || !c || u.bgClass != c.bgClass || u.textClass != c.textClass)),
                            f = 0;
                        !h && f < l.length;
                        ++f
                    )
                        h = l[f] != o.styles[f];
                    h && i.push(n.line), (o.stateAfter = n.save()), n.nextLine();
                } else o.text.length <= e.options.maxHighlightLength && vt(e, o.text, n), (o.stateAfter = n.line % 5 == 0 ? n.save() : null), n.nextLine();
                if (+new Date() > r) return oi(e, e.options.workDelay), !0;
            }),
                (t.highlightFrontier = n.line),
                (t.modeFrontier = Math.max(t.modeFrontier, n.line)),
                i.length &&
                    ti(e, function () {
                        for (var t = 0; t < i.length; t++) pn(e, i[t], 'text');
                    });
        }
    }
    var si = function (e, t, r) {
        var n = e.display;
        (this.viewport = t),
            (this.visible = An(n, e.doc, t)),
            (this.editorIsHidden = !n.wrapper.offsetWidth),
            (this.wrapperHeight = n.wrapper.clientHeight),
            (this.wrapperWidth = n.wrapper.clientWidth),
            (this.oldDisplayWidth = Nr(e)),
            (this.force = r),
            (this.dims = sn(e)),
            (this.events = []);
    };
    function ai(e, t) {
        var r = e.display,
            n = e.doc;
        if (t.editorIsHidden) return gn(e), !1;
        if (
            !t.force &&
            t.visible.from >= r.viewFrom &&
            t.visible.to <= r.viewTo &&
            (null == r.updateLineNumbers || r.updateLineNumbers >= r.viewTo) &&
            r.renderedView == r.view &&
            0 == mn(e)
        )
            return !1;
        pi(e) && (gn(e), (t.dims = sn(e)));
        var i = n.first + n.size,
            o = Math.max(t.visible.from - e.options.viewportMargin, n.first),
            l = Math.min(i, t.visible.to + e.options.viewportMargin);
        r.viewFrom < o && o - r.viewFrom < 20 && (o = Math.max(n.first, r.viewFrom)),
            r.viewTo > l && r.viewTo - l < 20 && (l = Math.min(i, r.viewTo)),
            Lt && ((o = Gt(e.doc, o)), (l = Ut(e.doc, l)));
        var s = o != r.viewFrom || l != r.viewTo || r.lastWrapHeight != t.wrapperHeight || r.lastWrapWidth != t.wrapperWidth;
        !(function (e, t, r) {
            var n = e.display;
            0 == n.view.length || t >= n.viewTo || r <= n.viewFrom
                ? ((n.view = lr(e, t, r)), (n.viewFrom = t))
                : (n.viewFrom > t ? (n.view = lr(e, t, n.viewFrom).concat(n.view)) : n.viewFrom < t && (n.view = n.view.slice(fn(e, t))),
                  (n.viewFrom = t),
                  n.viewTo < r ? (n.view = n.view.concat(lr(e, n.viewTo, r))) : n.viewTo > r && (n.view = n.view.slice(0, fn(e, r)))),
                (n.viewTo = r);
        })(e, o, l),
            (r.viewOffset = jt($e(e.doc, r.viewFrom))),
            (e.display.mover.style.top = r.viewOffset + 'px');
        var u = mn(e);
        if (!s && 0 == u && !t.force && r.renderedView == r.view && (null == r.updateLineNumbers || r.updateLineNumbers >= r.viewTo))
            return !1;
        var c = (function (e) {
            if (e.hasFocus()) return null;
            var t = H();
            if (!t || !W(e.display.lineDiv, t)) return null;
            var r = { activeElt: t };
            if (window.getSelection) {
                var n = window.getSelection();
                n.anchorNode &&
                    n.extend &&
                    W(e.display.lineDiv, n.anchorNode) &&
                    ((r.anchorNode = n.anchorNode),
                    (r.anchorOffset = n.anchorOffset),
                    (r.focusNode = n.focusNode),
                    (r.focusOffset = n.focusOffset));
            }
            return r;
        })(e);
        return (
            u > 4 && (r.lineDiv.style.display = 'none'),
            (function (e, t, r) {
                var n = e.display,
                    i = e.options.lineNumbers,
                    o = n.lineDiv,
                    l = o.firstChild;
                function s(t) {
                    var r = t.nextSibling;
                    return a && b && e.display.currentWheelTarget == t ? (t.style.display = 'none') : t.parentNode.removeChild(t), r;
                }
                for (var u = n.view, c = n.viewFrom, h = 0; h < u.length; h++) {
                    var f = u[h];
                    if (f.hidden);
                    else if (f.node && f.node.parentNode == o) {
                        for (; l != f.node; ) l = s(l);
                        var d = i && null != t && t <= c && f.lineNumber;
                        f.changes && (G(f.changes, 'gutter') > -1 && (d = !1), hr(e, f, c, r)),
                            d && (N(f.lineNumber), f.lineNumber.appendChild(document.createTextNode(tt(e.options, c)))),
                            (l = f.node.nextSibling);
                    } else {
                        var p = yr(e, f, c, r);
                        o.insertBefore(p, l);
                    }
                    c += f.size;
                }
                for (; l; ) l = s(l);
            })(e, r.updateLineNumbers, t.dims),
            u > 4 && (r.lineDiv.style.display = ''),
            (r.renderedView = r.view),
            (function (e) {
                if (
                    e &&
                    e.activeElt &&
                    e.activeElt != H() &&
                    (e.activeElt.focus(),
                    !/^(INPUT|TEXTAREA)$/.test(e.activeElt.nodeName) &&
                        e.anchorNode &&
                        W(document.body, e.anchorNode) &&
                        W(document.body, e.focusNode))
                ) {
                    var t = window.getSelection(),
                        r = document.createRange();
                    r.setEnd(e.anchorNode, e.anchorOffset),
                        r.collapse(!1),
                        t.removeAllRanges(),
                        t.addRange(r),
                        t.extend(e.focusNode, e.focusOffset);
                }
            })(c),
            N(r.cursorDiv),
            N(r.selectionDiv),
            (r.gutters.style.height = r.sizer.style.minHeight = 0),
            s && ((r.lastWrapHeight = t.wrapperHeight), (r.lastWrapWidth = t.wrapperWidth), oi(e, 400)),
            (r.updateLineNumbers = null),
            !0
        );
    }
    function ui(e, t) {
        for (var r = t.viewport, n = !0; ; n = !1) {
            if (n && e.options.lineWrapping && t.oldDisplayWidth != Nr(e)) n && (t.visible = An(e.display, e.doc, r));
            else if (
                (r && null != r.top && (r = { top: Math.min(e.doc.height + kr(e.display) - Or(e), r.top) }),
                (t.visible = An(e.display, e.doc, r)),
                t.visible.from >= e.display.viewFrom && t.visible.to <= e.display.viewTo)
            )
                break;
            if (!ai(e, t)) break;
            Nn(e);
            var i = Bn(e);
            yn(e), Vn(e, i), fi(e, i), (t.force = !1);
        }
        t.signal(e, 'update', e),
            (e.display.viewFrom == e.display.reportedViewFrom && e.display.viewTo == e.display.reportedViewTo) ||
                (t.signal(e, 'viewportChange', e, e.display.viewFrom, e.display.viewTo),
                (e.display.reportedViewFrom = e.display.viewFrom),
                (e.display.reportedViewTo = e.display.viewTo));
    }
    function ci(e, t) {
        var r = new si(e, t);
        if (ai(e, r)) {
            Nn(e), ui(e, r);
            var n = Bn(e);
            yn(e), Vn(e, n), fi(e, n), r.finish();
        }
    }
    function hi(e) {
        var t = e.gutters.offsetWidth;
        (e.sizer.style.marginLeft = t + 'px'), ur(e, 'gutterChanged', e);
    }
    function fi(e, t) {
        (e.display.sizer.style.minHeight = t.docHeight + 'px'),
            (e.display.heightForcer.style.top = t.docHeight + 'px'),
            (e.display.gutters.style.height = t.docHeight + e.display.barHeight + Mr(e) + 'px');
    }
    function di(e) {
        var t = e.display,
            r = t.view;
        if (t.alignWidgets || (t.gutters.firstChild && e.options.fixedGutter)) {
            for (
                var n = an(t) - t.scroller.scrollLeft + e.doc.scrollLeft, i = t.gutters.offsetWidth, o = n + 'px', l = 0;
                l < r.length;
                l++
            )
                if (!r[l].hidden) {
                    e.options.fixedGutter &&
                        (r[l].gutter && (r[l].gutter.style.left = o), r[l].gutterBackground && (r[l].gutterBackground.style.left = o));
                    var s = r[l].alignable;
                    if (s) for (var a = 0; a < s.length; a++) s[a].style.left = o;
                }
            e.options.fixedGutter && (t.gutters.style.left = n + i + 'px');
        }
    }
    function pi(e) {
        if (!e.options.lineNumbers) return !1;
        var t = e.doc,
            r = tt(e.options, t.first + t.size - 1),
            n = e.display;
        if (r.length != n.lineNumChars) {
            var i = n.measure.appendChild(A('div', [A('div', r)], 'CodeMirror-linenumber CodeMirror-gutter-elt')),
                o = i.firstChild.offsetWidth,
                l = i.offsetWidth - o;
            return (
                (n.lineGutter.style.width = ''),
                (n.lineNumInnerWidth = Math.max(o, n.lineGutter.offsetWidth - l) + 1),
                (n.lineNumWidth = n.lineNumInnerWidth + l),
                (n.lineNumChars = n.lineNumInnerWidth ? r.length : -1),
                (n.lineGutter.style.width = n.lineNumWidth + 'px'),
                hi(e.display),
                !0
            );
        }
        return !1;
    }
    function gi(e, t) {
        for (var r = [], n = !1, i = 0; i < e.length; i++) {
            var o = e[i],
                l = null;
            if (('string' != typeof o && ((l = o.style), (o = o.className)), 'CodeMirror-linenumbers' == o)) {
                if (!t) continue;
                n = !0;
            }
            r.push({ className: o, style: l });
        }
        return t && !n && r.push({ className: 'CodeMirror-linenumbers', style: null }), r;
    }
    function vi(e) {
        var t = e.gutters,
            r = e.gutterSpecs;
        N(t), (e.lineGutter = null);
        for (var n = 0; n < r.length; ++n) {
            var i = r[n],
                o = i.className,
                l = i.style,
                s = t.appendChild(A('div', null, 'CodeMirror-gutter ' + o));
            l && (s.style.cssText = l),
                'CodeMirror-linenumbers' == o && ((e.lineGutter = s), (s.style.width = (e.lineNumWidth || 1) + 'px'));
        }
        (t.style.display = r.length ? '' : 'none'), hi(e);
    }
    function mi(e) {
        vi(e.display), dn(e), di(e);
    }
    function yi(e, t, n, i) {
        var o = this;
        (this.input = n),
            (o.scrollbarFiller = A('div', null, 'CodeMirror-scrollbar-filler')),
            o.scrollbarFiller.setAttribute('cm-not-content', 'true'),
            (o.gutterFiller = A('div', null, 'CodeMirror-gutter-filler')),
            o.gutterFiller.setAttribute('cm-not-content', 'true'),
            (o.lineDiv = D('div', null, 'CodeMirror-code')),
            (o.selectionDiv = A('div', null, null, 'position: relative; z-index: 1')),
            (o.cursorDiv = A('div', null, 'CodeMirror-cursors')),
            (o.measure = A('div', null, 'CodeMirror-measure')),
            (o.lineMeasure = A('div', null, 'CodeMirror-measure')),
            (o.lineSpace = D(
                'div',
                [o.measure, o.lineMeasure, o.selectionDiv, o.cursorDiv, o.lineDiv],
                null,
                'position: relative; outline: none'
            ));
        var u = D('div', [o.lineSpace], 'CodeMirror-lines');
        (o.mover = A('div', [u], null, 'position: relative')),
            (o.sizer = A('div', [o.mover], 'CodeMirror-sizer')),
            (o.sizerWidth = null),
            (o.heightForcer = A('div', null, null, 'position: absolute; height: ' + U + 'px; width: 1px;')),
            (o.gutters = A('div', null, 'CodeMirror-gutters')),
            (o.lineGutter = null),
            (o.scroller = A('div', [o.sizer, o.heightForcer, o.gutters], 'CodeMirror-scroll')),
            o.scroller.setAttribute('tabIndex', '-1'),
            (o.wrapper = A('div', [o.scrollbarFiller, o.gutterFiller, o.scroller], 'CodeMirror')),
            o.wrapper.setAttribute('translate', 'no'),
            l && s < 8 && ((o.gutters.style.zIndex = -1), (o.scroller.style.paddingRight = 0)),
            a || (r && y) || (o.scroller.draggable = !0),
            e && (e.appendChild ? e.appendChild(o.wrapper) : e(o.wrapper)),
            (o.viewFrom = o.viewTo = t.first),
            (o.reportedViewFrom = o.reportedViewTo = t.first),
            (o.view = []),
            (o.renderedView = null),
            (o.externalMeasured = null),
            (o.viewOffset = 0),
            (o.lastWrapHeight = o.lastWrapWidth = 0),
            (o.updateLineNumbers = null),
            (o.nativeBarWidth = o.barHeight = o.barWidth = 0),
            (o.scrollbarsClipped = !1),
            (o.lineNumWidth = o.lineNumInnerWidth = o.lineNumChars = null),
            (o.alignWidgets = !1),
            (o.cachedCharWidth = o.cachedTextHeight = o.cachedPaddingH = null),
            (o.maxLine = null),
            (o.maxLineLength = 0),
            (o.maxLineChanged = !1),
            (o.wheelDX = o.wheelDY = o.wheelStartX = o.wheelStartY = null),
            (o.shift = !1),
            (o.selForContextMenu = null),
            (o.activeTouch = null),
            (o.gutterSpecs = gi(i.gutters, i.lineNumbers)),
            vi(o),
            n.init(o);
    }
    (si.prototype.signal = function (e, t) {
        be(e, t) && this.events.push(arguments);
    }),
        (si.prototype.finish = function () {
            for (var e = 0; e < this.events.length; e++) ve.apply(null, this.events[e]);
        });
    var bi = 0,
        wi = null;
    function xi(e) {
        var t = e.wheelDeltaX,
            r = e.wheelDeltaY;
        return (
            null == t && e.detail && e.axis == e.HORIZONTAL_AXIS && (t = e.detail),
            null == r && e.detail && e.axis == e.VERTICAL_AXIS ? (r = e.detail) : null == r && (r = e.wheelDelta),
            { x: t, y: r }
        );
    }
    function Ci(e) {
        var t = xi(e);
        return (t.x *= wi), (t.y *= wi), t;
    }
    function Si(e, t) {
        c &&
            h >= 102 &&
            (null == e.display.chromeScrollHack ? (e.display.sizer.style.pointerEvents = 'none') : clearTimeout(e.display.chromeScrollHack),
            (e.display.chromeScrollHack = setTimeout(function () {
                (e.display.chromeScrollHack = null), (e.display.sizer.style.pointerEvents = '');
            }, 100)));
        var n = xi(t),
            i = n.x,
            o = n.y,
            l = wi;
        0 === t.deltaMode && ((i = t.deltaX), (o = t.deltaY), (l = 1));
        var s = e.display,
            u = s.scroller,
            d = u.scrollWidth > u.clientWidth,
            p = u.scrollHeight > u.clientHeight;
        if ((i && d) || (o && p)) {
            if (o && b && a)
                e: for (var g = t.target, v = s.view; g != u; g = g.parentNode)
                    for (var m = 0; m < v.length; m++)
                        if (v[m].node == g) {
                            e.display.currentWheelTarget = g;
                            break e;
                        }
            if (i && !r && !f && null != l)
                return (
                    o && p && In(e, Math.max(0, u.scrollTop + o * l)),
                    Rn(e, Math.max(0, u.scrollLeft + i * l)),
                    (!o || (o && p)) && xe(t),
                    void (s.wheelStartX = null)
                );
            if (o && null != l) {
                var y = o * l,
                    w = e.doc.scrollTop,
                    x = w + s.wrapper.clientHeight;
                y < 0 ? (w = Math.max(0, w + y - 50)) : (x = Math.min(e.doc.height, x + y + 50)), ci(e, { top: w, bottom: x });
            }
            bi < 20 &&
                0 !== t.deltaMode &&
                (null == s.wheelStartX
                    ? ((s.wheelStartX = u.scrollLeft),
                      (s.wheelStartY = u.scrollTop),
                      (s.wheelDX = i),
                      (s.wheelDY = o),
                      setTimeout(function () {
                          if (null != s.wheelStartX) {
                              var e = u.scrollLeft - s.wheelStartX,
                                  t = u.scrollTop - s.wheelStartY,
                                  r = (t && s.wheelDY && t / s.wheelDY) || (e && s.wheelDX && e / s.wheelDX);
                              (s.wheelStartX = s.wheelStartY = null), r && ((wi = (wi * bi + r) / (bi + 1)), ++bi);
                          }
                      }, 200))
                    : ((s.wheelDX += i), (s.wheelDY += o)));
        }
    }
    l ? (wi = -0.53) : r ? (wi = 15) : c ? (wi = -0.7) : d && (wi = -1 / 3);
    var Li = function (e, t) {
        (this.ranges = e), (this.primIndex = t);
    };
    (Li.prototype.primary = function () {
        return this.ranges[this.primIndex];
    }),
        (Li.prototype.equals = function (e) {
            if (e == this) return !0;
            if (e.primIndex != this.primIndex || e.ranges.length != this.ranges.length) return !1;
            for (var t = 0; t < this.ranges.length; t++) {
                var r = this.ranges[t],
                    n = e.ranges[t];
                if (!it(r.anchor, n.anchor) || !it(r.head, n.head)) return !1;
            }
            return !0;
        }),
        (Li.prototype.deepCopy = function () {
            for (var e = [], t = 0; t < this.ranges.length; t++) e[t] = new ki(ot(this.ranges[t].anchor), ot(this.ranges[t].head));
            return new Li(e, this.primIndex);
        }),
        (Li.prototype.somethingSelected = function () {
            for (var e = 0; e < this.ranges.length; e++) if (!this.ranges[e].empty()) return !0;
            return !1;
        }),
        (Li.prototype.contains = function (e, t) {
            t || (t = e);
            for (var r = 0; r < this.ranges.length; r++) {
                var n = this.ranges[r];
                if (nt(t, n.from()) >= 0 && nt(e, n.to()) <= 0) return r;
            }
            return -1;
        });
    var ki = function (e, t) {
        (this.anchor = e), (this.head = t);
    };
    function Ti(e, t, r) {
        var n = e && e.options.selectionsMayTouch,
            i = t[r];
        t.sort(function (e, t) {
            return nt(e.from(), t.from());
        }),
            (r = G(t, i));
        for (var o = 1; o < t.length; o++) {
            var l = t[o],
                s = t[o - 1],
                a = nt(s.to(), l.from());
            if (n && !l.empty() ? a > 0 : a >= 0) {
                var u = st(s.from(), l.from()),
                    c = lt(s.to(), l.to()),
                    h = s.empty() ? l.from() == l.head : s.from() == s.head;
                o <= r && --r, t.splice(--o, 2, new ki(h ? c : u, h ? u : c));
            }
        }
        return new Li(t, r);
    }
    function Mi(e, t) {
        return new Li([new ki(e, t || e)], 0);
    }
    function Ni(e) {
        return e.text ? rt(e.from.line + e.text.length - 1, q(e.text).length + (1 == e.text.length ? e.from.ch : 0)) : e.to;
    }
    function Oi(e, t) {
        if (nt(e, t.from) < 0) return e;
        if (nt(e, t.to) <= 0) return Ni(t);
        var r = e.line + t.text.length - (t.to.line - t.from.line) - 1,
            n = e.ch;
        return e.line == t.to.line && (n += Ni(t).ch - t.to.ch), rt(r, n);
    }
    function Ai(e, t) {
        for (var r = [], n = 0; n < e.sel.ranges.length; n++) {
            var i = e.sel.ranges[n];
            r.push(new ki(Oi(i.anchor, t), Oi(i.head, t)));
        }
        return Ti(e.cm, r, e.sel.primIndex);
    }
    function Di(e, t, r) {
        return e.line == t.line ? rt(r.line, e.ch - t.ch + r.ch) : rt(r.line + (e.line - t.line), e.ch);
    }
    function Wi(e) {
        (e.doc.mode = Ge(e.options, e.doc.modeOption)), Hi(e);
    }
    function Hi(e) {
        e.doc.iter(function (e) {
            e.stateAfter && (e.stateAfter = null), e.styles && (e.styles = null);
        }),
            (e.doc.modeFrontier = e.doc.highlightFrontier = e.doc.first),
            oi(e, 100),
            e.state.modeGen++,
            e.curOp && dn(e);
    }
    function Fi(e, t) {
        return 0 == t.from.ch && 0 == t.to.ch && '' == q(t.text) && (!e.cm || e.cm.options.wholeLineUpdateBefore);
    }
    function Ei(e, t, r, n) {
        function i(e) {
            return r ? r[e] : null;
        }
        function o(e, r, i) {
            !(function (e, t, r, n) {
                (e.text = t),
                    e.stateAfter && (e.stateAfter = null),
                    e.styles && (e.styles = null),
                    null != e.order && (e.order = null),
                    At(e),
                    Dt(e, r);
                var i = n ? n(e) : 1;
                i != e.height && Ze(e, i);
            })(e, r, i, n),
                ur(e, 'change', e, t);
        }
        function l(e, t) {
            for (var r = [], o = e; o < t; ++o) r.push(new $t(u[o], i(o), n));
            return r;
        }
        var s = t.from,
            a = t.to,
            u = t.text,
            c = $e(e, s.line),
            h = $e(e, a.line),
            f = q(u),
            d = i(u.length - 1),
            p = a.line - s.line;
        if (t.full) e.insert(0, l(0, u.length)), e.remove(u.length, e.size - u.length);
        else if (Fi(e, t)) {
            var g = l(0, u.length - 1);
            o(h, h.text, d), p && e.remove(s.line, p), g.length && e.insert(s.line, g);
        } else if (c == h)
            if (1 == u.length) o(c, c.text.slice(0, s.ch) + f + c.text.slice(a.ch), d);
            else {
                var v = l(1, u.length - 1);
                v.push(new $t(f + c.text.slice(a.ch), d, n)), o(c, c.text.slice(0, s.ch) + u[0], i(0)), e.insert(s.line + 1, v);
            }
        else if (1 == u.length) o(c, c.text.slice(0, s.ch) + u[0] + h.text.slice(a.ch), i(0)), e.remove(s.line + 1, p);
        else {
            o(c, c.text.slice(0, s.ch) + u[0], i(0)), o(h, f + h.text.slice(a.ch), d);
            var m = l(1, u.length - 1);
            p > 1 && e.remove(s.line + 1, p - 1), e.insert(s.line + 1, m);
        }
        ur(e, 'change', e, t);
    }
    function Pi(e, t, r) {
        !(function e(n, i, o) {
            if (n.linked)
                for (var l = 0; l < n.linked.length; ++l) {
                    var s = n.linked[l];
                    if (s.doc != i) {
                        var a = o && s.sharedHist;
                        (r && !a) || (t(s.doc, a), e(s.doc, n, a));
                    }
                }
        })(e, null, !0);
    }
    function Ii(e, t) {
        if (t.cm) throw new Error('This document is already in use.');
        (e.doc = t),
            (t.cm = e),
            cn(e),
            Wi(e),
            zi(e),
            (e.options.direction = t.direction),
            e.options.lineWrapping || Yt(e),
            (e.options.mode = t.modeOption),
            dn(e);
    }
    function zi(e) {
        ('rtl' == e.doc.direction ? F : M)(e.display.lineDiv, 'CodeMirror-rtl');
    }
    function Ri(e) {
        (this.done = []),
            (this.undone = []),
            (this.undoDepth = e ? e.undoDepth : 1 / 0),
            (this.lastModTime = this.lastSelTime = 0),
            (this.lastOp = this.lastSelOp = null),
            (this.lastOrigin = this.lastSelOrigin = null),
            (this.generation = this.maxGeneration = e ? e.maxGeneration : 1);
    }
    function Bi(e, t) {
        var r = { from: ot(t.from), to: Ni(t), text: _e(e, t.from, t.to) };
        return (
            ji(e, r, t.from.line, t.to.line + 1),
            Pi(
                e,
                function (e) {
                    return ji(e, r, t.from.line, t.to.line + 1);
                },
                !0
            ),
            r
        );
    }
    function Gi(e) {
        for (; e.length; ) {
            if (!q(e).ranges) break;
            e.pop();
        }
    }
    function Ui(e, t, r, n) {
        var i = e.history;
        i.undone.length = 0;
        var o,
            l,
            s = +new Date();
        if (
            (i.lastOp == n ||
                (i.lastOrigin == t.origin &&
                    t.origin &&
                    (('+' == t.origin.charAt(0) && i.lastModTime > s - (e.cm ? e.cm.options.historyEventDelay : 500)) ||
                        '*' == t.origin.charAt(0)))) &&
            (o = (function (e, t) {
                return t
                    ? (Gi(e.done), q(e.done))
                    : e.done.length && !q(e.done).ranges
                    ? q(e.done)
                    : e.done.length > 1 && !e.done[e.done.length - 2].ranges
                    ? (e.done.pop(), q(e.done))
                    : void 0;
            })(i, i.lastOp == n))
        )
            (l = q(o.changes)), 0 == nt(t.from, t.to) && 0 == nt(t.from, l.to) ? (l.to = Ni(t)) : o.changes.push(Bi(e, t));
        else {
            var a = q(i.done);
            for (
                (a && a.ranges) || Ki(e.sel, i.done), o = { changes: [Bi(e, t)], generation: i.generation }, i.done.push(o);
                i.done.length > i.undoDepth;

            )
                i.done.shift(), i.done[0].ranges || i.done.shift();
        }
        i.done.push(r),
            (i.generation = ++i.maxGeneration),
            (i.lastModTime = i.lastSelTime = s),
            (i.lastOp = i.lastSelOp = n),
            (i.lastOrigin = i.lastSelOrigin = t.origin),
            l || ve(e, 'historyAdded');
    }
    function Vi(e, t, r, n) {
        var i = e.history,
            o = n && n.origin;
        r == i.lastSelOp ||
        (o &&
            i.lastSelOrigin == o &&
            ((i.lastModTime == i.lastSelTime && i.lastOrigin == o) ||
                (function (e, t, r, n) {
                    var i = t.charAt(0);
                    return (
                        '*' == i ||
                        ('+' == i &&
                            r.ranges.length == n.ranges.length &&
                            r.somethingSelected() == n.somethingSelected() &&
                            new Date() - e.history.lastSelTime <= (e.cm ? e.cm.options.historyEventDelay : 500))
                    );
                })(e, o, q(i.done), t)))
            ? (i.done[i.done.length - 1] = t)
            : Ki(t, i.done),
            (i.lastSelTime = +new Date()),
            (i.lastSelOrigin = o),
            (i.lastSelOp = r),
            n && !1 !== n.clearRedo && Gi(i.undone);
    }
    function Ki(e, t) {
        var r = q(t);
        (r && r.ranges && r.equals(e)) || t.push(e);
    }
    function ji(e, t, r, n) {
        var i = t['spans_' + e.id],
            o = 0;
        e.iter(Math.max(e.first, r), Math.min(e.first + e.size, n), function (r) {
            r.markedSpans && ((i || (i = t['spans_' + e.id] = {}))[o] = r.markedSpans), ++o;
        });
    }
    function Xi(e) {
        if (!e) return null;
        for (var t, r = 0; r < e.length; ++r) e[r].marker.explicitlyCleared ? t || (t = e.slice(0, r)) : t && t.push(e[r]);
        return t ? (t.length ? t : null) : e;
    }
    function Yi(e, t) {
        var r = (function (e, t) {
                var r = t['spans_' + e.id];
                if (!r) return null;
                for (var n = [], i = 0; i < t.text.length; ++i) n.push(Xi(r[i]));
                return n;
            })(e, t),
            n = Nt(e, t);
        if (!r) return n;
        if (!n) return r;
        for (var i = 0; i < r.length; ++i) {
            var o = r[i],
                l = n[i];
            if (o && l)
                e: for (var s = 0; s < l.length; ++s) {
                    for (var a = l[s], u = 0; u < o.length; ++u) if (o[u].marker == a.marker) continue e;
                    o.push(a);
                }
            else l && (r[i] = l);
        }
        return r;
    }
    function $i(e, t, r) {
        for (var n = [], i = 0; i < e.length; ++i) {
            var o = e[i];
            if (o.ranges) n.push(r ? Li.prototype.deepCopy.call(o) : o);
            else {
                var l = o.changes,
                    s = [];
                n.push({ changes: s });
                for (var a = 0; a < l.length; ++a) {
                    var u = l[a],
                        c = void 0;
                    if ((s.push({ from: u.from, to: u.to, text: u.text }), t))
                        for (var h in u) (c = h.match(/^spans_(\d+)$/)) && G(t, Number(c[1])) > -1 && ((q(s)[h] = u[h]), delete u[h]);
                }
            }
        }
        return n;
    }
    function _i(e, t, r, n) {
        if (n) {
            var i = e.anchor;
            if (r) {
                var o = nt(t, i) < 0;
                o != nt(r, i) < 0 ? ((i = t), (t = r)) : o != nt(t, r) < 0 && (t = r);
            }
            return new ki(i, t);
        }
        return new ki(r || t, t);
    }
    function qi(e, t, r, n, i) {
        null == i && (i = e.cm && (e.cm.display.shift || e.extend)), to(e, new Li([_i(e.sel.primary(), t, r, i)], 0), n);
    }
    function Zi(e, t, r) {
        for (var n = [], i = e.cm && (e.cm.display.shift || e.extend), o = 0; o < e.sel.ranges.length; o++)
            n[o] = _i(e.sel.ranges[o], t[o], null, i);
        to(e, Ti(e.cm, n, e.sel.primIndex), r);
    }
    function Qi(e, t, r, n) {
        var i = e.sel.ranges.slice(0);
        (i[t] = r), to(e, Ti(e.cm, i, e.sel.primIndex), n);
    }
    function Ji(e, t, r, n) {
        to(e, Mi(t, r), n);
    }
    function eo(e, t, r) {
        var n = e.history.done,
            i = q(n);
        i && i.ranges ? ((n[n.length - 1] = t), ro(e, t, r)) : to(e, t, r);
    }
    function to(e, t, r) {
        ro(e, t, r), Vi(e, e.sel, e.cm ? e.cm.curOp.id : NaN, r);
    }
    function ro(e, t, r) {
        (be(e, 'beforeSelectionChange') || (e.cm && be(e.cm, 'beforeSelectionChange'))) &&
            (t = (function (e, t, r) {
                var n = {
                    ranges: t.ranges,
                    update: function (t) {
                        this.ranges = [];
                        for (var r = 0; r < t.length; r++) this.ranges[r] = new ki(ut(e, t[r].anchor), ut(e, t[r].head));
                    },
                    origin: r && r.origin,
                };
                return (
                    ve(e, 'beforeSelectionChange', e, n),
                    e.cm && ve(e.cm, 'beforeSelectionChange', e.cm, n),
                    n.ranges != t.ranges ? Ti(e.cm, n.ranges, n.ranges.length - 1) : t
                );
            })(e, t, r));
        var n = (r && r.bias) || (nt(t.primary().head, e.sel.primary().head) < 0 ? -1 : 1);
        no(e, oo(e, t, n, !0)), (r && !1 === r.scroll) || !e.cm || 'nocursor' == e.cm.getOption('readOnly') || Hn(e.cm);
    }
    function no(e, t) {
        t.equals(e.sel) ||
            ((e.sel = t), e.cm && ((e.cm.curOp.updateInput = 1), (e.cm.curOp.selectionChanged = !0), ye(e.cm)), ur(e, 'cursorActivity', e));
    }
    function io(e) {
        no(e, oo(e, e.sel, null, !1));
    }
    function oo(e, t, r, n) {
        for (var i, o = 0; o < t.ranges.length; o++) {
            var l = t.ranges[o],
                s = t.ranges.length == e.sel.ranges.length && e.sel.ranges[o],
                a = so(e, l.anchor, s && s.anchor, r, n),
                u = so(e, l.head, s && s.head, r, n);
            (i || a != l.anchor || u != l.head) && (i || (i = t.ranges.slice(0, o)), (i[o] = new ki(a, u)));
        }
        return i ? Ti(e.cm, i, t.primIndex) : t;
    }
    function lo(e, t, r, n, i) {
        var o = $e(e, t.line);
        if (o.markedSpans)
            for (var l = 0; l < o.markedSpans.length; ++l) {
                var s = o.markedSpans[l],
                    a = s.marker,
                    u = 'selectLeft' in a ? !a.selectLeft : a.inclusiveLeft,
                    c = 'selectRight' in a ? !a.selectRight : a.inclusiveRight;
                if ((null == s.from || (u ? s.from <= t.ch : s.from < t.ch)) && (null == s.to || (c ? s.to >= t.ch : s.to > t.ch))) {
                    if (i && (ve(a, 'beforeCursorEnter'), a.explicitlyCleared)) {
                        if (o.markedSpans) {
                            --l;
                            continue;
                        }
                        break;
                    }
                    if (!a.atomic) continue;
                    if (r) {
                        var h = a.find(n < 0 ? 1 : -1),
                            f = void 0;
                        if (
                            ((n < 0 ? c : u) && (h = ao(e, h, -n, h && h.line == t.line ? o : null)),
                            h && h.line == t.line && (f = nt(h, r)) && (n < 0 ? f < 0 : f > 0))
                        )
                            return lo(e, h, t, n, i);
                    }
                    var d = a.find(n < 0 ? -1 : 1);
                    return (n < 0 ? u : c) && (d = ao(e, d, n, d.line == t.line ? o : null)), d ? lo(e, d, t, n, i) : null;
                }
            }
        return t;
    }
    function so(e, t, r, n, i) {
        var o = n || 1,
            l = lo(e, t, r, o, i) || (!i && lo(e, t, r, o, !0)) || lo(e, t, r, -o, i) || (!i && lo(e, t, r, -o, !0));
        return l || ((e.cantEdit = !0), rt(e.first, 0));
    }
    function ao(e, t, r, n) {
        return r < 0 && 0 == t.ch
            ? t.line > e.first
                ? ut(e, rt(t.line - 1))
                : null
            : r > 0 && t.ch == (n || $e(e, t.line)).text.length
            ? t.line < e.first + e.size - 1
                ? rt(t.line + 1, 0)
                : null
            : new rt(t.line, t.ch + r);
    }
    function uo(e) {
        e.setSelection(rt(e.firstLine(), 0), rt(e.lastLine()), K);
    }
    function co(e, t, r) {
        var n = {
            canceled: !1,
            from: t.from,
            to: t.to,
            text: t.text,
            origin: t.origin,
            cancel: function () {
                return (n.canceled = !0);
            },
        };
        return (
            r &&
                (n.update = function (t, r, i, o) {
                    t && (n.from = ut(e, t)), r && (n.to = ut(e, r)), i && (n.text = i), void 0 !== o && (n.origin = o);
                }),
            ve(e, 'beforeChange', e, n),
            e.cm && ve(e.cm, 'beforeChange', e.cm, n),
            n.canceled ? (e.cm && (e.cm.curOp.updateInput = 2), null) : { from: n.from, to: n.to, text: n.text, origin: n.origin }
        );
    }
    function ho(e, t, r) {
        if (e.cm) {
            if (!e.cm.curOp) return ri(e.cm, ho)(e, t, r);
            if (e.cm.state.suppressEdits) return;
        }
        if (!(be(e, 'beforeChange') || (e.cm && be(e.cm, 'beforeChange'))) || (t = co(e, t, !0))) {
            var n =
                St &&
                !r &&
                (function (e, t, r) {
                    var n = null;
                    if (
                        (e.iter(t.line, r.line + 1, function (e) {
                            if (e.markedSpans)
                                for (var t = 0; t < e.markedSpans.length; ++t) {
                                    var r = e.markedSpans[t].marker;
                                    !r.readOnly || (n && -1 != G(n, r)) || (n || (n = [])).push(r);
                                }
                        }),
                        !n)
                    )
                        return null;
                    for (var i = [{ from: t, to: r }], o = 0; o < n.length; ++o)
                        for (var l = n[o], s = l.find(0), a = 0; a < i.length; ++a) {
                            var u = i[a];
                            if (!(nt(u.to, s.from) < 0 || nt(u.from, s.to) > 0)) {
                                var c = [a, 1],
                                    h = nt(u.from, s.from),
                                    f = nt(u.to, s.to);
                                (h < 0 || (!l.inclusiveLeft && !h)) && c.push({ from: u.from, to: s.from }),
                                    (f > 0 || (!l.inclusiveRight && !f)) && c.push({ from: s.to, to: u.to }),
                                    i.splice.apply(i, c),
                                    (a += c.length - 3);
                            }
                        }
                    return i;
                })(e, t.from, t.to);
            if (n)
                for (var i = n.length - 1; i >= 0; --i) fo(e, { from: n[i].from, to: n[i].to, text: i ? [''] : t.text, origin: t.origin });
            else fo(e, t);
        }
    }
    function fo(e, t) {
        if (1 != t.text.length || '' != t.text[0] || 0 != nt(t.from, t.to)) {
            var r = Ai(e, t);
            Ui(e, t, r, e.cm ? e.cm.curOp.id : NaN), vo(e, t, r, Nt(e, t));
            var n = [];
            Pi(e, function (e, r) {
                r || -1 != G(n, e.history) || (wo(e.history, t), n.push(e.history)), vo(e, t, null, Nt(e, t));
            });
        }
    }
    function po(e, t, r) {
        var n = e.cm && e.cm.state.suppressEdits;
        if (!n || r) {
            for (
                var i, o = e.history, l = e.sel, s = 'undo' == t ? o.done : o.undone, a = 'undo' == t ? o.undone : o.done, u = 0;
                u < s.length && ((i = s[u]), r ? !i.ranges || i.equals(e.sel) : i.ranges);
                u++
            );
            if (u != s.length) {
                for (o.lastOrigin = o.lastSelOrigin = null; ; ) {
                    if (!(i = s.pop()).ranges) {
                        if (n) return void s.push(i);
                        break;
                    }
                    if ((Ki(i, a), r && !i.equals(e.sel))) return void to(e, i, { clearRedo: !1 });
                    l = i;
                }
                var c = [];
                Ki(l, a), a.push({ changes: c, generation: o.generation }), (o.generation = i.generation || ++o.maxGeneration);
                for (
                    var h = be(e, 'beforeChange') || (e.cm && be(e.cm, 'beforeChange')),
                        f = function (r) {
                            var n = i.changes[r];
                            if (((n.origin = t), h && !co(e, n, !1))) return (s.length = 0), {};
                            c.push(Bi(e, n));
                            var o = r ? Ai(e, n) : q(s);
                            vo(e, n, o, Yi(e, n)), !r && e.cm && e.cm.scrollIntoView({ from: n.from, to: Ni(n) });
                            var l = [];
                            Pi(e, function (e, t) {
                                t || -1 != G(l, e.history) || (wo(e.history, n), l.push(e.history)), vo(e, n, null, Yi(e, n));
                            });
                        },
                        d = i.changes.length - 1;
                    d >= 0;
                    --d
                ) {
                    var p = f(d);
                    if (p) return p.v;
                }
            }
        }
    }
    function go(e, t) {
        if (
            0 != t &&
            ((e.first += t),
            (e.sel = new Li(
                Z(e.sel.ranges, function (e) {
                    return new ki(rt(e.anchor.line + t, e.anchor.ch), rt(e.head.line + t, e.head.ch));
                }),
                e.sel.primIndex
            )),
            e.cm)
        ) {
            dn(e.cm, e.first, e.first - t, t);
            for (var r = e.cm.display, n = r.viewFrom; n < r.viewTo; n++) pn(e.cm, n, 'gutter');
        }
    }
    function vo(e, t, r, n) {
        if (e.cm && !e.cm.curOp) return ri(e.cm, vo)(e, t, r, n);
        if (t.to.line < e.first) go(e, t.text.length - 1 - (t.to.line - t.from.line));
        else if (!(t.from.line > e.lastLine())) {
            if (t.from.line < e.first) {
                var i = t.text.length - 1 - (e.first - t.from.line);
                go(e, i), (t = { from: rt(e.first, 0), to: rt(t.to.line + i, t.to.ch), text: [q(t.text)], origin: t.origin });
            }
            var o = e.lastLine();
            t.to.line > o && (t = { from: t.from, to: rt(o, $e(e, o).text.length), text: [t.text[0]], origin: t.origin }),
                (t.removed = _e(e, t.from, t.to)),
                r || (r = Ai(e, t)),
                e.cm
                    ? (function (e, t, r) {
                          var n = e.doc,
                              i = e.display,
                              o = t.from,
                              l = t.to,
                              s = !1,
                              a = o.line;
                          e.options.lineWrapping ||
                              ((a = Qe(Bt($e(n, o.line)))),
                              n.iter(a, l.line + 1, function (e) {
                                  if (e == i.maxLine) return (s = !0), !0;
                              }));
                          n.sel.contains(t.from, t.to) > -1 && ye(e);
                          Ei(n, t, r, un(e)),
                              e.options.lineWrapping ||
                                  (n.iter(a, o.line + t.text.length, function (e) {
                                      var t = Xt(e);
                                      t > i.maxLineLength && ((i.maxLine = e), (i.maxLineLength = t), (i.maxLineChanged = !0), (s = !1));
                                  }),
                                  s && (e.curOp.updateMaxLine = !0));
                          (function (e, t) {
                              if (((e.modeFrontier = Math.min(e.modeFrontier, t)), !(e.highlightFrontier < t - 10))) {
                                  for (var r = e.first, n = t - 1; n > r; n--) {
                                      var i = $e(e, n).stateAfter;
                                      if (i && (!(i instanceof ht) || n + i.lookAhead < t)) {
                                          r = n + 1;
                                          break;
                                      }
                                  }
                                  e.highlightFrontier = Math.min(e.highlightFrontier, r);
                              }
                          })(n, o.line),
                              oi(e, 400);
                          var u = t.text.length - (l.line - o.line) - 1;
                          t.full
                              ? dn(e)
                              : o.line != l.line || 1 != t.text.length || Fi(e.doc, t)
                              ? dn(e, o.line, l.line + 1, u)
                              : pn(e, o.line, 'text');
                          var c = be(e, 'changes'),
                              h = be(e, 'change');
                          if (h || c) {
                              var f = { from: o, to: l, text: t.text, removed: t.removed, origin: t.origin };
                              h && ur(e, 'change', e, f), c && (e.curOp.changeObjs || (e.curOp.changeObjs = [])).push(f);
                          }
                          e.display.selForContextMenu = null;
                      })(e.cm, t, n)
                    : Ei(e, t, n),
                ro(e, r, K),
                e.cantEdit && so(e, rt(e.firstLine(), 0)) && (e.cantEdit = !1);
        }
    }
    function mo(e, t, r, n, i) {
        var o;
        n || (n = r),
            nt(n, r) < 0 && ((r = (o = [n, r])[0]), (n = o[1])),
            'string' == typeof t && (t = e.splitLines(t)),
            ho(e, { from: r, to: n, text: t, origin: i });
    }
    function yo(e, t, r, n) {
        r < e.line ? (e.line += n) : t < e.line && ((e.line = t), (e.ch = 0));
    }
    function bo(e, t, r, n) {
        for (var i = 0; i < e.length; ++i) {
            var o = e[i],
                l = !0;
            if (o.ranges) {
                o.copied || ((o = e[i] = o.deepCopy()).copied = !0);
                for (var s = 0; s < o.ranges.length; s++) yo(o.ranges[s].anchor, t, r, n), yo(o.ranges[s].head, t, r, n);
            } else {
                for (var a = 0; a < o.changes.length; ++a) {
                    var u = o.changes[a];
                    if (r < u.from.line) (u.from = rt(u.from.line + n, u.from.ch)), (u.to = rt(u.to.line + n, u.to.ch));
                    else if (t <= u.to.line) {
                        l = !1;
                        break;
                    }
                }
                l || (e.splice(0, i + 1), (i = 0));
            }
        }
    }
    function wo(e, t) {
        var r = t.from.line,
            n = t.to.line,
            i = t.text.length - (n - r) - 1;
        bo(e.done, r, n, i), bo(e.undone, r, n, i);
    }
    function xo(e, t, r, n) {
        var i = t,
            o = t;
        return 'number' == typeof t ? (o = $e(e, at(e, t))) : (i = Qe(t)), null == i ? null : (n(o, i) && e.cm && pn(e.cm, i, r), o);
    }
    function Co(e) {
        (this.lines = e), (this.parent = null);
        for (var t = 0, r = 0; r < e.length; ++r) (e[r].parent = this), (t += e[r].height);
        this.height = t;
    }
    function So(e) {
        this.children = e;
        for (var t = 0, r = 0, n = 0; n < e.length; ++n) {
            var i = e[n];
            (t += i.chunkSize()), (r += i.height), (i.parent = this);
        }
        (this.size = t), (this.height = r), (this.parent = null);
    }
    (ki.prototype.from = function () {
        return st(this.anchor, this.head);
    }),
        (ki.prototype.to = function () {
            return lt(this.anchor, this.head);
        }),
        (ki.prototype.empty = function () {
            return this.head.line == this.anchor.line && this.head.ch == this.anchor.ch;
        }),
        (Co.prototype = {
            chunkSize: function () {
                return this.lines.length;
            },
            removeInner: function (e, t) {
                for (var r = e, n = e + t; r < n; ++r) {
                    var i = this.lines[r];
                    (this.height -= i.height), _t(i), ur(i, 'delete');
                }
                this.lines.splice(e, t);
            },
            collapse: function (e) {
                e.push.apply(e, this.lines);
            },
            insertInner: function (e, t, r) {
                (this.height += r), (this.lines = this.lines.slice(0, e).concat(t).concat(this.lines.slice(e)));
                for (var n = 0; n < t.length; ++n) t[n].parent = this;
            },
            iterN: function (e, t, r) {
                for (var n = e + t; e < n; ++e) if (r(this.lines[e])) return !0;
            },
        }),
        (So.prototype = {
            chunkSize: function () {
                return this.size;
            },
            removeInner: function (e, t) {
                this.size -= t;
                for (var r = 0; r < this.children.length; ++r) {
                    var n = this.children[r],
                        i = n.chunkSize();
                    if (e < i) {
                        var o = Math.min(t, i - e),
                            l = n.height;
                        if (
                            (n.removeInner(e, o),
                            (this.height -= l - n.height),
                            i == o && (this.children.splice(r--, 1), (n.parent = null)),
                            0 == (t -= o))
                        )
                            break;
                        e = 0;
                    } else e -= i;
                }
                if (this.size - t < 25 && (this.children.length > 1 || !(this.children[0] instanceof Co))) {
                    var s = [];
                    this.collapse(s), (this.children = [new Co(s)]), (this.children[0].parent = this);
                }
            },
            collapse: function (e) {
                for (var t = 0; t < this.children.length; ++t) this.children[t].collapse(e);
            },
            insertInner: function (e, t, r) {
                (this.size += t.length), (this.height += r);
                for (var n = 0; n < this.children.length; ++n) {
                    var i = this.children[n],
                        o = i.chunkSize();
                    if (e <= o) {
                        if ((i.insertInner(e, t, r), i.lines && i.lines.length > 50)) {
                            for (var l = (i.lines.length % 25) + 25, s = l; s < i.lines.length; ) {
                                var a = new Co(i.lines.slice(s, (s += 25)));
                                (i.height -= a.height), this.children.splice(++n, 0, a), (a.parent = this);
                            }
                            (i.lines = i.lines.slice(0, l)), this.maybeSpill();
                        }
                        break;
                    }
                    e -= o;
                }
            },
            maybeSpill: function () {
                if (!(this.children.length <= 10)) {
                    var e = this;
                    do {
                        var t = new So(e.children.splice(e.children.length - 5, 5));
                        if (e.parent) {
                            (e.size -= t.size), (e.height -= t.height);
                            var r = G(e.parent.children, e);
                            e.parent.children.splice(r + 1, 0, t);
                        } else {
                            var n = new So(e.children);
                            (n.parent = e), (e.children = [n, t]), (e = n);
                        }
                        t.parent = e.parent;
                    } while (e.children.length > 10);
                    e.parent.maybeSpill();
                }
            },
            iterN: function (e, t, r) {
                for (var n = 0; n < this.children.length; ++n) {
                    var i = this.children[n],
                        o = i.chunkSize();
                    if (e < o) {
                        var l = Math.min(t, o - e);
                        if (i.iterN(e, l, r)) return !0;
                        if (0 == (t -= l)) break;
                        e = 0;
                    } else e -= o;
                }
            },
        });
    var Lo = function (e, t, r) {
        if (r) for (var n in r) r.hasOwnProperty(n) && (this[n] = r[n]);
        (this.doc = e), (this.node = t);
    };
    function ko(e, t, r) {
        jt(t) < ((e.curOp && e.curOp.scrollTop) || e.doc.scrollTop) && Wn(e, r);
    }
    (Lo.prototype.clear = function () {
        var e = this.doc.cm,
            t = this.line.widgets,
            r = this.line,
            n = Qe(r);
        if (null != n && t) {
            for (var i = 0; i < t.length; ++i) t[i] == this && t.splice(i--, 1);
            t.length || (r.widgets = null);
            var o = Cr(this);
            Ze(r, Math.max(0, r.height - o)),
                e &&
                    (ti(e, function () {
                        ko(e, r, -o), pn(e, n, 'widget');
                    }),
                    ur(e, 'lineWidgetCleared', e, this, n));
        }
    }),
        (Lo.prototype.changed = function () {
            var e = this,
                t = this.height,
                r = this.doc.cm,
                n = this.line;
            this.height = null;
            var i = Cr(this) - t;
            i &&
                (Vt(this.doc, n) || Ze(n, n.height + i),
                r &&
                    ti(r, function () {
                        (r.curOp.forceUpdate = !0), ko(r, n, i), ur(r, 'lineWidgetChanged', r, e, Qe(n));
                    }));
        }),
        we(Lo);
    var To = 0,
        Mo = function (e, t) {
            (this.lines = []), (this.type = t), (this.doc = e), (this.id = ++To);
        };
    function No(e, t, r, n, i) {
        if (n && n.shared)
            return (function (e, t, r, n, i) {
                (n = z(n)), (n.shared = !1);
                var o = [No(e, t, r, n, i)],
                    l = o[0],
                    s = n.widgetNode;
                return (
                    Pi(e, function (e) {
                        s && (n.widgetNode = s.cloneNode(!0)), o.push(No(e, ut(e, t), ut(e, r), n, i));
                        for (var a = 0; a < e.linked.length; ++a) if (e.linked[a].isParent) return;
                        l = q(o);
                    }),
                    new Oo(o, l)
                );
            })(e, t, r, n, i);
        if (e.cm && !e.cm.curOp) return ri(e.cm, No)(e, t, r, n, i);
        var o = new Mo(e, i),
            l = nt(t, r);
        if ((n && z(n, o, !1), l > 0 || (0 == l && !1 !== o.clearWhenEmpty))) return o;
        if (
            (o.replacedWith &&
                ((o.collapsed = !0),
                (o.widgetNode = D('span', [o.replacedWith], 'CodeMirror-widget')),
                n.handleMouseEvents || o.widgetNode.setAttribute('cm-ignore-events', 'true'),
                n.insertLeft && (o.widgetNode.insertLeft = !0)),
            o.collapsed)
        ) {
            if (Rt(e, t.line, t, r, o) || (t.line != r.line && Rt(e, r.line, t, r, o)))
                throw new Error('Inserting collapsed marker partially overlapping an existing one');
            Lt = !0;
        }
        o.addToHistory && Ui(e, { from: t, to: r, origin: 'markText' }, e.sel, NaN);
        var s,
            a = t.line,
            u = e.cm;
        if (
            (e.iter(a, r.line + 1, function (n) {
                u && o.collapsed && !u.options.lineWrapping && Bt(n) == u.display.maxLine && (s = !0),
                    o.collapsed && a != t.line && Ze(n, 0),
                    (function (e, t, r) {
                        var n = r && window.WeakSet && (r.markedSpans || (r.markedSpans = new WeakSet()));
                        n && e.markedSpans && n.has(e.markedSpans)
                            ? e.markedSpans.push(t)
                            : ((e.markedSpans = e.markedSpans ? e.markedSpans.concat([t]) : [t]), n && n.add(e.markedSpans)),
                            t.marker.attachLine(e);
                    })(n, new kt(o, a == t.line ? t.ch : null, a == r.line ? r.ch : null), e.cm && e.cm.curOp),
                    ++a;
            }),
            o.collapsed &&
                e.iter(t.line, r.line + 1, function (t) {
                    Vt(e, t) && Ze(t, 0);
                }),
            o.clearOnEnter &&
                de(o, 'beforeCursorEnter', function () {
                    return o.clear();
                }),
            o.readOnly && ((St = !0), (e.history.done.length || e.history.undone.length) && e.clearHistory()),
            o.collapsed && ((o.id = ++To), (o.atomic = !0)),
            u)
        ) {
            if ((s && (u.curOp.updateMaxLine = !0), o.collapsed)) dn(u, t.line, r.line + 1);
            else if (o.className || o.startStyle || o.endStyle || o.css || o.attributes || o.title)
                for (var c = t.line; c <= r.line; c++) pn(u, c, 'text');
            o.atomic && io(u.doc), ur(u, 'markerAdded', u, o);
        }
        return o;
    }
    (Mo.prototype.clear = function () {
        if (!this.explicitlyCleared) {
            var e = this.doc.cm,
                t = e && !e.curOp;
            if ((t && $n(e), be(this, 'clear'))) {
                var r = this.find();
                r && ur(this, 'clear', r.from, r.to);
            }
            for (var n = null, i = null, o = 0; o < this.lines.length; ++o) {
                var l = this.lines[o],
                    s = Tt(l.markedSpans, this);
                e && !this.collapsed ? pn(e, Qe(l), 'text') : e && (null != s.to && (i = Qe(l)), null != s.from && (n = Qe(l))),
                    (l.markedSpans = Mt(l.markedSpans, s)),
                    null == s.from && this.collapsed && !Vt(this.doc, l) && e && Ze(l, on(e.display));
            }
            if (e && this.collapsed && !e.options.lineWrapping)
                for (var a = 0; a < this.lines.length; ++a) {
                    var u = Bt(this.lines[a]),
                        c = Xt(u);
                    c > e.display.maxLineLength &&
                        ((e.display.maxLine = u), (e.display.maxLineLength = c), (e.display.maxLineChanged = !0));
                }
            null != n && e && this.collapsed && dn(e, n, i + 1),
                (this.lines.length = 0),
                (this.explicitlyCleared = !0),
                this.atomic && this.doc.cantEdit && ((this.doc.cantEdit = !1), e && io(e.doc)),
                e && ur(e, 'markerCleared', e, this, n, i),
                t && _n(e),
                this.parent && this.parent.clear();
        }
    }),
        (Mo.prototype.find = function (e, t) {
            var r, n;
            null == e && 'bookmark' == this.type && (e = 1);
            for (var i = 0; i < this.lines.length; ++i) {
                var o = this.lines[i],
                    l = Tt(o.markedSpans, this);
                if (null != l.from && ((r = rt(t ? o : Qe(o), l.from)), -1 == e)) return r;
                if (null != l.to && ((n = rt(t ? o : Qe(o), l.to)), 1 == e)) return n;
            }
            return r && { from: r, to: n };
        }),
        (Mo.prototype.changed = function () {
            var e = this,
                t = this.find(-1, !0),
                r = this,
                n = this.doc.cm;
            t &&
                n &&
                ti(n, function () {
                    var i = t.line,
                        o = Qe(t.line),
                        l = Wr(n, o);
                    if (
                        (l && (Rr(l), (n.curOp.selectionChanged = n.curOp.forceUpdate = !0)),
                        (n.curOp.updateMaxLine = !0),
                        !Vt(r.doc, i) && null != r.height)
                    ) {
                        var s = r.height;
                        r.height = null;
                        var a = Cr(r) - s;
                        a && Ze(i, i.height + a);
                    }
                    ur(n, 'markerChanged', n, e);
                });
        }),
        (Mo.prototype.attachLine = function (e) {
            if (!this.lines.length && this.doc.cm) {
                var t = this.doc.cm.curOp;
                (t.maybeHiddenMarkers && -1 != G(t.maybeHiddenMarkers, this)) ||
                    (t.maybeUnhiddenMarkers || (t.maybeUnhiddenMarkers = [])).push(this);
            }
            this.lines.push(e);
        }),
        (Mo.prototype.detachLine = function (e) {
            if ((this.lines.splice(G(this.lines, e), 1), !this.lines.length && this.doc.cm)) {
                var t = this.doc.cm.curOp;
                (t.maybeHiddenMarkers || (t.maybeHiddenMarkers = [])).push(this);
            }
        }),
        we(Mo);
    var Oo = function (e, t) {
        (this.markers = e), (this.primary = t);
        for (var r = 0; r < e.length; ++r) e[r].parent = this;
    };
    function Ao(e) {
        return e.findMarks(rt(e.first, 0), e.clipPos(rt(e.lastLine())), function (e) {
            return e.parent;
        });
    }
    function Do(e) {
        for (
            var t = function (t) {
                    var r = e[t],
                        n = [r.primary.doc];
                    Pi(r.primary.doc, function (e) {
                        return n.push(e);
                    });
                    for (var i = 0; i < r.markers.length; i++) {
                        var o = r.markers[i];
                        -1 == G(n, o.doc) && ((o.parent = null), r.markers.splice(i--, 1));
                    }
                },
                r = 0;
            r < e.length;
            r++
        )
            t(r);
    }
    (Oo.prototype.clear = function () {
        if (!this.explicitlyCleared) {
            this.explicitlyCleared = !0;
            for (var e = 0; e < this.markers.length; ++e) this.markers[e].clear();
            ur(this, 'clear');
        }
    }),
        (Oo.prototype.find = function (e, t) {
            return this.primary.find(e, t);
        }),
        we(Oo);
    var Wo = 0,
        Ho = function (e, t, r, n, i) {
            if (!(this instanceof Ho)) return new Ho(e, t, r, n, i);
            null == r && (r = 0),
                So.call(this, [new Co([new $t('', null)])]),
                (this.first = r),
                (this.scrollTop = this.scrollLeft = 0),
                (this.cantEdit = !1),
                (this.cleanGeneration = 1),
                (this.modeFrontier = this.highlightFrontier = r);
            var o = rt(r, 0);
            (this.sel = Mi(o)),
                (this.history = new Ri(null)),
                (this.id = ++Wo),
                (this.modeOption = t),
                (this.lineSep = n),
                (this.direction = 'rtl' == i ? 'rtl' : 'ltr'),
                (this.extend = !1),
                'string' == typeof e && (e = this.splitLines(e)),
                Ei(this, { from: o, to: o, text: e }),
                to(this, Mi(o), K);
        };
    (Ho.prototype = J(So.prototype, {
        constructor: Ho,
        iter: function (e, t, r) {
            r ? this.iterN(e - this.first, t - e, r) : this.iterN(this.first, this.first + this.size, e);
        },
        insert: function (e, t) {
            for (var r = 0, n = 0; n < t.length; ++n) r += t[n].height;
            this.insertInner(e - this.first, t, r);
        },
        remove: function (e, t) {
            this.removeInner(e - this.first, t);
        },
        getValue: function (e) {
            var t = qe(this, this.first, this.first + this.size);
            return !1 === e ? t : t.join(e || this.lineSeparator());
        },
        setValue: ii(function (e) {
            var t = rt(this.first, 0),
                r = this.first + this.size - 1;
            ho(this, { from: t, to: rt(r, $e(this, r).text.length), text: this.splitLines(e), origin: 'setValue', full: !0 }, !0),
                this.cm && Fn(this.cm, 0, 0),
                to(this, Mi(t), K);
        }),
        replaceRange: function (e, t, r, n) {
            mo(this, e, (t = ut(this, t)), (r = r ? ut(this, r) : t), n);
        },
        getRange: function (e, t, r) {
            var n = _e(this, ut(this, e), ut(this, t));
            return !1 === r ? n : '' === r ? n.join('') : n.join(r || this.lineSeparator());
        },
        getLine: function (e) {
            var t = this.getLineHandle(e);
            return t && t.text;
        },
        getLineHandle: function (e) {
            if (et(this, e)) return $e(this, e);
        },
        getLineNumber: function (e) {
            return Qe(e);
        },
        getLineHandleVisualStart: function (e) {
            return 'number' == typeof e && (e = $e(this, e)), Bt(e);
        },
        lineCount: function () {
            return this.size;
        },
        firstLine: function () {
            return this.first;
        },
        lastLine: function () {
            return this.first + this.size - 1;
        },
        clipPos: function (e) {
            return ut(this, e);
        },
        getCursor: function (e) {
            var t = this.sel.primary();
            return null == e || 'head' == e ? t.head : 'anchor' == e ? t.anchor : 'end' == e || 'to' == e || !1 === e ? t.to() : t.from();
        },
        listSelections: function () {
            return this.sel.ranges;
        },
        somethingSelected: function () {
            return this.sel.somethingSelected();
        },
        setCursor: ii(function (e, t, r) {
            Ji(this, ut(this, 'number' == typeof e ? rt(e, t || 0) : e), null, r);
        }),
        setSelection: ii(function (e, t, r) {
            Ji(this, ut(this, e), ut(this, t || e), r);
        }),
        extendSelection: ii(function (e, t, r) {
            qi(this, ut(this, e), t && ut(this, t), r);
        }),
        extendSelections: ii(function (e, t) {
            Zi(this, ct(this, e), t);
        }),
        extendSelectionsBy: ii(function (e, t) {
            Zi(this, ct(this, Z(this.sel.ranges, e)), t);
        }),
        setSelections: ii(function (e, t, r) {
            if (e.length) {
                for (var n = [], i = 0; i < e.length; i++) n[i] = new ki(ut(this, e[i].anchor), ut(this, e[i].head || e[i].anchor));
                null == t && (t = Math.min(e.length - 1, this.sel.primIndex)), to(this, Ti(this.cm, n, t), r);
            }
        }),
        addSelection: ii(function (e, t, r) {
            var n = this.sel.ranges.slice(0);
            n.push(new ki(ut(this, e), ut(this, t || e))), to(this, Ti(this.cm, n, n.length - 1), r);
        }),
        getSelection: function (e) {
            for (var t, r = this.sel.ranges, n = 0; n < r.length; n++) {
                var i = _e(this, r[n].from(), r[n].to());
                t = t ? t.concat(i) : i;
            }
            return !1 === e ? t : t.join(e || this.lineSeparator());
        },
        getSelections: function (e) {
            for (var t = [], r = this.sel.ranges, n = 0; n < r.length; n++) {
                var i = _e(this, r[n].from(), r[n].to());
                !1 !== e && (i = i.join(e || this.lineSeparator())), (t[n] = i);
            }
            return t;
        },
        replaceSelection: function (e, t, r) {
            for (var n = [], i = 0; i < this.sel.ranges.length; i++) n[i] = e;
            this.replaceSelections(n, t, r || '+input');
        },
        replaceSelections: ii(function (e, t, r) {
            for (var n = [], i = this.sel, o = 0; o < i.ranges.length; o++) {
                var l = i.ranges[o];
                n[o] = { from: l.from(), to: l.to(), text: this.splitLines(e[o]), origin: r };
            }
            for (
                var s =
                        t &&
                        'end' != t &&
                        (function (e, t, r) {
                            for (var n = [], i = rt(e.first, 0), o = i, l = 0; l < t.length; l++) {
                                var s = t[l],
                                    a = Di(s.from, i, o),
                                    u = Di(Ni(s), i, o);
                                if (((i = s.to), (o = u), 'around' == r)) {
                                    var c = e.sel.ranges[l],
                                        h = nt(c.head, c.anchor) < 0;
                                    n[l] = new ki(h ? u : a, h ? a : u);
                                } else n[l] = new ki(a, a);
                            }
                            return new Li(n, e.sel.primIndex);
                        })(this, n, t),
                    a = n.length - 1;
                a >= 0;
                a--
            )
                ho(this, n[a]);
            s ? eo(this, s) : this.cm && Hn(this.cm);
        }),
        undo: ii(function () {
            po(this, 'undo');
        }),
        redo: ii(function () {
            po(this, 'redo');
        }),
        undoSelection: ii(function () {
            po(this, 'undo', !0);
        }),
        redoSelection: ii(function () {
            po(this, 'redo', !0);
        }),
        setExtending: function (e) {
            this.extend = e;
        },
        getExtending: function () {
            return this.extend;
        },
        historySize: function () {
            for (var e = this.history, t = 0, r = 0, n = 0; n < e.done.length; n++) e.done[n].ranges || ++t;
            for (var i = 0; i < e.undone.length; i++) e.undone[i].ranges || ++r;
            return { undo: t, redo: r };
        },
        clearHistory: function () {
            var e = this;
            (this.history = new Ri(this.history)),
                Pi(
                    this,
                    function (t) {
                        return (t.history = e.history);
                    },
                    !0
                );
        },
        markClean: function () {
            this.cleanGeneration = this.changeGeneration(!0);
        },
        changeGeneration: function (e) {
            return e && (this.history.lastOp = this.history.lastSelOp = this.history.lastOrigin = null), this.history.generation;
        },
        isClean: function (e) {
            return this.history.generation == (e || this.cleanGeneration);
        },
        getHistory: function () {
            return { done: $i(this.history.done), undone: $i(this.history.undone) };
        },
        setHistory: function (e) {
            var t = (this.history = new Ri(this.history));
            (t.done = $i(e.done.slice(0), null, !0)), (t.undone = $i(e.undone.slice(0), null, !0));
        },
        setGutterMarker: ii(function (e, t, r) {
            return xo(this, e, 'gutter', function (e) {
                var n = e.gutterMarkers || (e.gutterMarkers = {});
                return (n[t] = r), !r && ne(n) && (e.gutterMarkers = null), !0;
            });
        }),
        clearGutter: ii(function (e) {
            var t = this;
            this.iter(function (r) {
                r.gutterMarkers &&
                    r.gutterMarkers[e] &&
                    xo(t, r, 'gutter', function () {
                        return (r.gutterMarkers[e] = null), ne(r.gutterMarkers) && (r.gutterMarkers = null), !0;
                    });
            });
        }),
        lineInfo: function (e) {
            var t;
            if ('number' == typeof e) {
                if (!et(this, e)) return null;
                if (((t = e), !(e = $e(this, e)))) return null;
            } else if (null == (t = Qe(e))) return null;
            return {
                line: t,
                handle: e,
                text: e.text,
                gutterMarkers: e.gutterMarkers,
                textClass: e.textClass,
                bgClass: e.bgClass,
                wrapClass: e.wrapClass,
                widgets: e.widgets,
            };
        },
        addLineClass: ii(function (e, t, r) {
            return xo(this, e, 'gutter' == t ? 'gutter' : 'class', function (e) {
                var n = 'text' == t ? 'textClass' : 'background' == t ? 'bgClass' : 'gutter' == t ? 'gutterClass' : 'wrapClass';
                if (e[n]) {
                    if (k(r).test(e[n])) return !1;
                    e[n] += ' ' + r;
                } else e[n] = r;
                return !0;
            });
        }),
        removeLineClass: ii(function (e, t, r) {
            return xo(this, e, 'gutter' == t ? 'gutter' : 'class', function (e) {
                var n = 'text' == t ? 'textClass' : 'background' == t ? 'bgClass' : 'gutter' == t ? 'gutterClass' : 'wrapClass',
                    i = e[n];
                if (!i) return !1;
                if (null == r) e[n] = null;
                else {
                    var o = i.match(k(r));
                    if (!o) return !1;
                    var l = o.index + o[0].length;
                    e[n] = i.slice(0, o.index) + (o.index && l != i.length ? ' ' : '') + i.slice(l) || null;
                }
                return !0;
            });
        }),
        addLineWidget: ii(function (e, t, r) {
            return (function (e, t, r, n) {
                var i = new Lo(e, r, n),
                    o = e.cm;
                return (
                    o && i.noHScroll && (o.display.alignWidgets = !0),
                    xo(e, t, 'widget', function (t) {
                        var r = t.widgets || (t.widgets = []);
                        if (
                            (null == i.insertAt ? r.push(i) : r.splice(Math.min(r.length, Math.max(0, i.insertAt)), 0, i),
                            (i.line = t),
                            o && !Vt(e, t))
                        ) {
                            var n = jt(t) < e.scrollTop;
                            Ze(t, t.height + Cr(i)), n && Wn(o, i.height), (o.curOp.forceUpdate = !0);
                        }
                        return !0;
                    }),
                    o && ur(o, 'lineWidgetAdded', o, i, 'number' == typeof t ? t : Qe(t)),
                    i
                );
            })(this, e, t, r);
        }),
        removeLineWidget: function (e) {
            e.clear();
        },
        markText: function (e, t, r) {
            return No(this, ut(this, e), ut(this, t), r, (r && r.type) || 'range');
        },
        setBookmark: function (e, t) {
            var r = {
                replacedWith: t && (null == t.nodeType ? t.widget : t),
                insertLeft: t && t.insertLeft,
                clearWhenEmpty: !1,
                shared: t && t.shared,
                handleMouseEvents: t && t.handleMouseEvents,
            };
            return No(this, (e = ut(this, e)), e, r, 'bookmark');
        },
        findMarksAt: function (e) {
            var t = [],
                r = $e(this, (e = ut(this, e)).line).markedSpans;
            if (r)
                for (var n = 0; n < r.length; ++n) {
                    var i = r[n];
                    (null == i.from || i.from <= e.ch) && (null == i.to || i.to >= e.ch) && t.push(i.marker.parent || i.marker);
                }
            return t;
        },
        findMarks: function (e, t, r) {
            (e = ut(this, e)), (t = ut(this, t));
            var n = [],
                i = e.line;
            return (
                this.iter(e.line, t.line + 1, function (o) {
                    var l = o.markedSpans;
                    if (l)
                        for (var s = 0; s < l.length; s++) {
                            var a = l[s];
                            (null != a.to && i == e.line && e.ch >= a.to) ||
                                (null == a.from && i != e.line) ||
                                (null != a.from && i == t.line && a.from >= t.ch) ||
                                (r && !r(a.marker)) ||
                                n.push(a.marker.parent || a.marker);
                        }
                    ++i;
                }),
                n
            );
        },
        getAllMarks: function () {
            var e = [];
            return (
                this.iter(function (t) {
                    var r = t.markedSpans;
                    if (r) for (var n = 0; n < r.length; ++n) null != r[n].from && e.push(r[n].marker);
                }),
                e
            );
        },
        posFromIndex: function (e) {
            var t,
                r = this.first,
                n = this.lineSeparator().length;
            return (
                this.iter(function (i) {
                    var o = i.text.length + n;
                    if (o > e) return (t = e), !0;
                    (e -= o), ++r;
                }),
                ut(this, rt(r, t))
            );
        },
        indexFromPos: function (e) {
            var t = (e = ut(this, e)).ch;
            if (e.line < this.first || e.ch < 0) return 0;
            var r = this.lineSeparator().length;
            return (
                this.iter(this.first, e.line, function (e) {
                    t += e.text.length + r;
                }),
                t
            );
        },
        copy: function (e) {
            var t = new Ho(qe(this, this.first, this.first + this.size), this.modeOption, this.first, this.lineSep, this.direction);
            return (
                (t.scrollTop = this.scrollTop),
                (t.scrollLeft = this.scrollLeft),
                (t.sel = this.sel),
                (t.extend = !1),
                e && ((t.history.undoDepth = this.history.undoDepth), t.setHistory(this.getHistory())),
                t
            );
        },
        linkedDoc: function (e) {
            e || (e = {});
            var t = this.first,
                r = this.first + this.size;
            null != e.from && e.from > t && (t = e.from), null != e.to && e.to < r && (r = e.to);
            var n = new Ho(qe(this, t, r), e.mode || this.modeOption, t, this.lineSep, this.direction);
            return (
                e.sharedHist && (n.history = this.history),
                (this.linked || (this.linked = [])).push({ doc: n, sharedHist: e.sharedHist }),
                (n.linked = [{ doc: this, isParent: !0, sharedHist: e.sharedHist }]),
                (function (e, t) {
                    for (var r = 0; r < t.length; r++) {
                        var n = t[r],
                            i = n.find(),
                            o = e.clipPos(i.from),
                            l = e.clipPos(i.to);
                        if (nt(o, l)) {
                            var s = No(e, o, l, n.primary, n.primary.type);
                            n.markers.push(s), (s.parent = n);
                        }
                    }
                })(n, Ao(this)),
                n
            );
        },
        unlinkDoc: function (e) {
            if ((e instanceof Ol && (e = e.doc), this.linked))
                for (var t = 0; t < this.linked.length; ++t) {
                    if (this.linked[t].doc == e) {
                        this.linked.splice(t, 1), e.unlinkDoc(this), Do(Ao(this));
                        break;
                    }
                }
            if (e.history == this.history) {
                var r = [e.id];
                Pi(
                    e,
                    function (e) {
                        return r.push(e.id);
                    },
                    !0
                ),
                    (e.history = new Ri(null)),
                    (e.history.done = $i(this.history.done, r)),
                    (e.history.undone = $i(this.history.undone, r));
            }
        },
        iterLinkedDocs: function (e) {
            Pi(this, e);
        },
        getMode: function () {
            return this.mode;
        },
        getEditor: function () {
            return this.cm;
        },
        splitLines: function (e) {
            return this.lineSep ? e.split(this.lineSep) : He(e);
        },
        lineSeparator: function () {
            return this.lineSep || '\n';
        },
        setDirection: ii(function (e) {
            var t;
            ('rtl' != e && (e = 'ltr'), e != this.direction) &&
                ((this.direction = e),
                this.iter(function (e) {
                    return (e.order = null);
                }),
                this.cm &&
                    ti((t = this.cm), function () {
                        zi(t), dn(t);
                    }));
        }),
    })),
        (Ho.prototype.eachLine = Ho.prototype.iter);
    var Fo = 0;
    function Eo(e) {
        var t = this;
        if ((Po(t), !me(t, e) && !Sr(t.display, e))) {
            xe(e), l && (Fo = +new Date());
            var r = hn(t, e, !0),
                n = e.dataTransfer.files;
            if (r && !t.isReadOnly())
                if (n && n.length && window.FileReader && window.File)
                    for (
                        var i = n.length,
                            o = Array(i),
                            s = 0,
                            a = function () {
                                ++s == i &&
                                    ri(t, function () {
                                        var e = {
                                            from: (r = ut(t.doc, r)),
                                            to: r,
                                            text: t.doc.splitLines(
                                                o
                                                    .filter(function (e) {
                                                        return null != e;
                                                    })
                                                    .join(t.doc.lineSeparator())
                                            ),
                                            origin: 'paste',
                                        };
                                        ho(t.doc, e), eo(t.doc, Mi(ut(t.doc, r), ut(t.doc, Ni(e))));
                                    })();
                            },
                            u = function (e, r) {
                                if (t.options.allowDropFileTypes && -1 == G(t.options.allowDropFileTypes, e.type)) a();
                                else {
                                    var n = new FileReader();
                                    (n.onerror = function () {
                                        return a();
                                    }),
                                        (n.onload = function () {
                                            var e = n.result;
                                            /[\x00-\x08\x0e-\x1f]{2}/.test(e) || (o[r] = e), a();
                                        }),
                                        n.readAsText(e);
                                }
                            },
                            c = 0;
                        c < n.length;
                        c++
                    )
                        u(n[c], c);
                else {
                    if (t.state.draggingText && t.doc.sel.contains(r) > -1)
                        return (
                            t.state.draggingText(e),
                            void setTimeout(function () {
                                return t.display.input.focus();
                            }, 20)
                        );
                    try {
                        var h = e.dataTransfer.getData('Text');
                        if (h) {
                            var f;
                            if ((t.state.draggingText && !t.state.draggingText.copy && (f = t.listSelections()), ro(t.doc, Mi(r, r)), f))
                                for (var d = 0; d < f.length; ++d) mo(t.doc, '', f[d].anchor, f[d].head, 'drag');
                            t.replaceSelection(h, 'around', 'paste'), t.display.input.focus();
                        }
                    } catch (e) {}
                }
        }
    }
    function Po(e) {
        e.display.dragCursor && (e.display.lineSpace.removeChild(e.display.dragCursor), (e.display.dragCursor = null));
    }
    function Io(e) {
        if (document.getElementsByClassName) {
            for (var t = document.getElementsByClassName('CodeMirror'), r = [], n = 0; n < t.length; n++) {
                var i = t[n].CodeMirror;
                i && r.push(i);
            }
            r.length &&
                r[0].operation(function () {
                    for (var t = 0; t < r.length; t++) e(r[t]);
                });
        }
    }
    var zo = !1;
    function Ro() {
        var e;
        zo ||
            (de(window, 'resize', function () {
                null == e &&
                    (e = setTimeout(function () {
                        (e = null), Io(Bo);
                    }, 100));
            }),
            de(window, 'blur', function () {
                return Io(Mn);
            }),
            (zo = !0));
    }
    function Bo(e) {
        var t = e.display;
        (t.cachedCharWidth = t.cachedTextHeight = t.cachedPaddingH = null), (t.scrollbarsClipped = !1), e.setSize();
    }
    for (
        var Go = {
                3: 'Pause',
                8: 'Backspace',
                9: 'Tab',
                13: 'Enter',
                16: 'Shift',
                17: 'Ctrl',
                18: 'Alt',
                19: 'Pause',
                20: 'CapsLock',
                27: 'Esc',
                32: 'Space',
                33: 'PageUp',
                34: 'PageDown',
                35: 'End',
                36: 'Home',
                37: 'Left',
                38: 'Up',
                39: 'Right',
                40: 'Down',
                44: 'PrintScrn',
                45: 'Insert',
                46: 'Delete',
                59: ';',
                61: '=',
                91: 'Mod',
                92: 'Mod',
                93: 'Mod',
                106: '*',
                107: '=',
                109: '-',
                110: '.',
                111: '/',
                145: 'ScrollLock',
                173: '-',
                186: ';',
                187: '=',
                188: ',',
                189: '-',
                190: '.',
                191: '/',
                192: '`',
                219: '[',
                220: '\\',
                221: ']',
                222: "'",
                224: 'Mod',
                63232: 'Up',
                63233: 'Down',
                63234: 'Left',
                63235: 'Right',
                63272: 'Delete',
                63273: 'Home',
                63275: 'End',
                63276: 'PageUp',
                63277: 'PageDown',
                63302: 'Insert',
            },
            Uo = 0;
        Uo < 10;
        Uo++
    )
        Go[Uo + 48] = Go[Uo + 96] = String(Uo);
    for (var Vo = 65; Vo <= 90; Vo++) Go[Vo] = String.fromCharCode(Vo);
    for (var Ko = 1; Ko <= 12; Ko++) Go[Ko + 111] = Go[Ko + 63235] = 'F' + Ko;
    var jo = {};
    function Xo(e) {
        var t,
            r,
            n,
            i,
            o = e.split(/-(?!$)/);
        e = o[o.length - 1];
        for (var l = 0; l < o.length - 1; l++) {
            var s = o[l];
            if (/^(cmd|meta|m)$/i.test(s)) i = !0;
            else if (/^a(lt)?$/i.test(s)) t = !0;
            else if (/^(c|ctrl|control)$/i.test(s)) r = !0;
            else {
                if (!/^s(hift)?$/i.test(s)) throw new Error('Unrecognized modifier name: ' + s);
                n = !0;
            }
        }
        return t && (e = 'Alt-' + e), r && (e = 'Ctrl-' + e), i && (e = 'Cmd-' + e), n && (e = 'Shift-' + e), e;
    }
    function Yo(e) {
        var t = {};
        for (var r in e)
            if (e.hasOwnProperty(r)) {
                var n = e[r];
                if (/^(name|fallthrough|(de|at)tach)$/.test(r)) continue;
                if ('...' == n) {
                    delete e[r];
                    continue;
                }
                for (var i = Z(r.split(' '), Xo), o = 0; o < i.length; o++) {
                    var l = void 0,
                        s = void 0;
                    o == i.length - 1 ? ((s = i.join(' ')), (l = n)) : ((s = i.slice(0, o + 1).join(' ')), (l = '...'));
                    var a = t[s];
                    if (a) {
                        if (a != l) throw new Error('Inconsistent bindings for ' + s);
                    } else t[s] = l;
                }
                delete e[r];
            }
        for (var u in t) e[u] = t[u];
        return e;
    }
    function $o(e, t, r, n) {
        var i = (t = Qo(t)).call ? t.call(e, n) : t[e];
        if (!1 === i) return 'nothing';
        if ('...' === i) return 'multi';
        if (null != i && r(i)) return 'handled';
        if (t.fallthrough) {
            if ('[object Array]' != Object.prototype.toString.call(t.fallthrough)) return $o(e, t.fallthrough, r, n);
            for (var o = 0; o < t.fallthrough.length; o++) {
                var l = $o(e, t.fallthrough[o], r, n);
                if (l) return l;
            }
        }
    }
    function _o(e) {
        var t = 'string' == typeof e ? e : Go[e.keyCode];
        return 'Ctrl' == t || 'Alt' == t || 'Shift' == t || 'Mod' == t;
    }
    function qo(e, t, r) {
        var n = e;
        return (
            t.altKey && 'Alt' != n && (e = 'Alt-' + e),
            (S ? t.metaKey : t.ctrlKey) && 'Ctrl' != n && (e = 'Ctrl-' + e),
            (S ? t.ctrlKey : t.metaKey) && 'Mod' != n && (e = 'Cmd-' + e),
            !r && t.shiftKey && 'Shift' != n && (e = 'Shift-' + e),
            e
        );
    }
    function Zo(e, t) {
        if (f && 34 == e.keyCode && e.char) return !1;
        var r = Go[e.keyCode];
        return null != r && !e.altGraphKey && (3 == e.keyCode && e.code && (r = e.code), qo(r, e, t));
    }
    function Qo(e) {
        return 'string' == typeof e ? jo[e] : e;
    }
    function Jo(e, t) {
        for (var r = e.doc.sel.ranges, n = [], i = 0; i < r.length; i++) {
            for (var o = t(r[i]); n.length && nt(o.from, q(n).to) <= 0; ) {
                var l = n.pop();
                if (nt(l.from, o.from) < 0) {
                    o.from = l.from;
                    break;
                }
            }
            n.push(o);
        }
        ti(e, function () {
            for (var t = n.length - 1; t >= 0; t--) mo(e.doc, '', n[t].from, n[t].to, '+delete');
            Hn(e);
        });
    }
    function el(e, t, r) {
        var n = le(e.text, t + r, r);
        return n < 0 || n > e.text.length ? null : n;
    }
    function tl(e, t, r) {
        var n = el(e, t.ch, r);
        return null == n ? null : new rt(t.line, n, r < 0 ? 'after' : 'before');
    }
    function rl(e, t, r, n, i) {
        if (e) {
            'rtl' == t.doc.direction && (i = -i);
            var o = he(r, t.doc.direction);
            if (o) {
                var l,
                    s = i < 0 ? q(o) : o[0],
                    a = i < 0 == (1 == s.level) ? 'after' : 'before';
                if (s.level > 0 || 'rtl' == t.doc.direction) {
                    var u = Hr(t, r);
                    l = i < 0 ? r.text.length - 1 : 0;
                    var c = Fr(t, u, l).top;
                    (l = se(
                        function (e) {
                            return Fr(t, u, e).top == c;
                        },
                        i < 0 == (1 == s.level) ? s.from : s.to - 1,
                        l
                    )),
                        'before' == a && (l = el(r, l, 1));
                } else l = i < 0 ? s.to : s.from;
                return new rt(n, l, a);
            }
        }
        return new rt(n, i < 0 ? r.text.length : 0, i < 0 ? 'before' : 'after');
    }
    (jo.basic = {
        Left: 'goCharLeft',
        Right: 'goCharRight',
        Up: 'goLineUp',
        Down: 'goLineDown',
        End: 'goLineEnd',
        Home: 'goLineStartSmart',
        PageUp: 'goPageUp',
        PageDown: 'goPageDown',
        Delete: 'delCharAfter',
        Backspace: 'delCharBefore',
        'Shift-Backspace': 'delCharBefore',
        Tab: 'defaultTab',
        'Shift-Tab': 'indentAuto',
        Enter: 'newlineAndIndent',
        Insert: 'toggleOverwrite',
        Esc: 'singleSelection',
    }),
        (jo.pcDefault = {
            'Ctrl-A': 'selectAll',
            'Ctrl-D': 'deleteLine',
            'Ctrl-Z': 'undo',
            'Shift-Ctrl-Z': 'redo',
            'Ctrl-Y': 'redo',
            'Ctrl-Home': 'goDocStart',
            'Ctrl-End': 'goDocEnd',
            'Ctrl-Up': 'goLineUp',
            'Ctrl-Down': 'goLineDown',
            'Ctrl-Left': 'goGroupLeft',
            'Ctrl-Right': 'goGroupRight',
            'Alt-Left': 'goLineStart',
            'Alt-Right': 'goLineEnd',
            'Ctrl-Backspace': 'delGroupBefore',
            'Ctrl-Delete': 'delGroupAfter',
            'Ctrl-S': 'save',
            'Ctrl-F': 'find',
            'Ctrl-G': 'findNext',
            'Shift-Ctrl-G': 'findPrev',
            'Shift-Ctrl-F': 'replace',
            'Shift-Ctrl-R': 'replaceAll',
            'Ctrl-[': 'indentLess',
            'Ctrl-]': 'indentMore',
            'Ctrl-U': 'undoSelection',
            'Shift-Ctrl-U': 'redoSelection',
            'Alt-U': 'redoSelection',
            fallthrough: 'basic',
        }),
        (jo.emacsy = {
            'Ctrl-F': 'goCharRight',
            'Ctrl-B': 'goCharLeft',
            'Ctrl-P': 'goLineUp',
            'Ctrl-N': 'goLineDown',
            'Ctrl-A': 'goLineStart',
            'Ctrl-E': 'goLineEnd',
            'Ctrl-V': 'goPageDown',
            'Shift-Ctrl-V': 'goPageUp',
            'Ctrl-D': 'delCharAfter',
            'Ctrl-H': 'delCharBefore',
            'Alt-Backspace': 'delWordBefore',
            'Ctrl-K': 'killLine',
            'Ctrl-T': 'transposeChars',
            'Ctrl-O': 'openLine',
        }),
        (jo.macDefault = {
            'Cmd-A': 'selectAll',
            'Cmd-D': 'deleteLine',
            'Cmd-Z': 'undo',
            'Shift-Cmd-Z': 'redo',
            'Cmd-Y': 'redo',
            'Cmd-Home': 'goDocStart',
            'Cmd-Up': 'goDocStart',
            'Cmd-End': 'goDocEnd',
            'Cmd-Down': 'goDocEnd',
            'Alt-Left': 'goGroupLeft',
            'Alt-Right': 'goGroupRight',
            'Cmd-Left': 'goLineLeft',
            'Cmd-Right': 'goLineRight',
            'Alt-Backspace': 'delGroupBefore',
            'Ctrl-Alt-Backspace': 'delGroupAfter',
            'Alt-Delete': 'delGroupAfter',
            'Cmd-S': 'save',
            'Cmd-F': 'find',
            'Cmd-G': 'findNext',
            'Shift-Cmd-G': 'findPrev',
            'Cmd-Alt-F': 'replace',
            'Shift-Cmd-Alt-F': 'replaceAll',
            'Cmd-[': 'indentLess',
            'Cmd-]': 'indentMore',
            'Cmd-Backspace': 'delWrappedLineLeft',
            'Cmd-Delete': 'delWrappedLineRight',
            'Cmd-U': 'undoSelection',
            'Shift-Cmd-U': 'redoSelection',
            'Ctrl-Up': 'goDocStart',
            'Ctrl-Down': 'goDocEnd',
            fallthrough: ['basic', 'emacsy'],
        }),
        (jo.default = b ? jo.macDefault : jo.pcDefault);
    var nl = {
        selectAll: uo,
        singleSelection: function (e) {
            return e.setSelection(e.getCursor('anchor'), e.getCursor('head'), K);
        },
        killLine: function (e) {
            return Jo(e, function (t) {
                if (t.empty()) {
                    var r = $e(e.doc, t.head.line).text.length;
                    return t.head.ch == r && t.head.line < e.lastLine()
                        ? { from: t.head, to: rt(t.head.line + 1, 0) }
                        : { from: t.head, to: rt(t.head.line, r) };
                }
                return { from: t.from(), to: t.to() };
            });
        },
        deleteLine: function (e) {
            return Jo(e, function (t) {
                return { from: rt(t.from().line, 0), to: ut(e.doc, rt(t.to().line + 1, 0)) };
            });
        },
        delLineLeft: function (e) {
            return Jo(e, function (e) {
                return { from: rt(e.from().line, 0), to: e.from() };
            });
        },
        delWrappedLineLeft: function (e) {
            return Jo(e, function (t) {
                var r = e.charCoords(t.head, 'div').top + 5;
                return { from: e.coordsChar({ left: 0, top: r }, 'div'), to: t.from() };
            });
        },
        delWrappedLineRight: function (e) {
            return Jo(e, function (t) {
                var r = e.charCoords(t.head, 'div').top + 5,
                    n = e.coordsChar({ left: e.display.lineDiv.offsetWidth + 100, top: r }, 'div');
                return { from: t.from(), to: n };
            });
        },
        undo: function (e) {
            return e.undo();
        },
        redo: function (e) {
            return e.redo();
        },
        undoSelection: function (e) {
            return e.undoSelection();
        },
        redoSelection: function (e) {
            return e.redoSelection();
        },
        goDocStart: function (e) {
            return e.extendSelection(rt(e.firstLine(), 0));
        },
        goDocEnd: function (e) {
            return e.extendSelection(rt(e.lastLine()));
        },
        goLineStart: function (e) {
            return e.extendSelectionsBy(
                function (t) {
                    return il(e, t.head.line);
                },
                { origin: '+move', bias: 1 }
            );
        },
        goLineStartSmart: function (e) {
            return e.extendSelectionsBy(
                function (t) {
                    return ol(e, t.head);
                },
                { origin: '+move', bias: 1 }
            );
        },
        goLineEnd: function (e) {
            return e.extendSelectionsBy(
                function (t) {
                    return (function (e, t) {
                        var r = $e(e.doc, t),
                            n = (function (e) {
                                for (var t; (t = It(e)); ) e = t.find(1, !0).line;
                                return e;
                            })(r);
                        n != r && (t = Qe(n));
                        return rl(!0, e, r, t, -1);
                    })(e, t.head.line);
                },
                { origin: '+move', bias: -1 }
            );
        },
        goLineRight: function (e) {
            return e.extendSelectionsBy(function (t) {
                var r = e.cursorCoords(t.head, 'div').top + 5;
                return e.coordsChar({ left: e.display.lineDiv.offsetWidth + 100, top: r }, 'div');
            }, X);
        },
        goLineLeft: function (e) {
            return e.extendSelectionsBy(function (t) {
                var r = e.cursorCoords(t.head, 'div').top + 5;
                return e.coordsChar({ left: 0, top: r }, 'div');
            }, X);
        },
        goLineLeftSmart: function (e) {
            return e.extendSelectionsBy(function (t) {
                var r = e.cursorCoords(t.head, 'div').top + 5,
                    n = e.coordsChar({ left: 0, top: r }, 'div');
                return n.ch < e.getLine(n.line).search(/\S/) ? ol(e, t.head) : n;
            }, X);
        },
        goLineUp: function (e) {
            return e.moveV(-1, 'line');
        },
        goLineDown: function (e) {
            return e.moveV(1, 'line');
        },
        goPageUp: function (e) {
            return e.moveV(-1, 'page');
        },
        goPageDown: function (e) {
            return e.moveV(1, 'page');
        },
        goCharLeft: function (e) {
            return e.moveH(-1, 'char');
        },
        goCharRight: function (e) {
            return e.moveH(1, 'char');
        },
        goColumnLeft: function (e) {
            return e.moveH(-1, 'column');
        },
        goColumnRight: function (e) {
            return e.moveH(1, 'column');
        },
        goWordLeft: function (e) {
            return e.moveH(-1, 'word');
        },
        goGroupRight: function (e) {
            return e.moveH(1, 'group');
        },
        goGroupLeft: function (e) {
            return e.moveH(-1, 'group');
        },
        goWordRight: function (e) {
            return e.moveH(1, 'word');
        },
        delCharBefore: function (e) {
            return e.deleteH(-1, 'codepoint');
        },
        delCharAfter: function (e) {
            return e.deleteH(1, 'char');
        },
        delWordBefore: function (e) {
            return e.deleteH(-1, 'word');
        },
        delWordAfter: function (e) {
            return e.deleteH(1, 'word');
        },
        delGroupBefore: function (e) {
            return e.deleteH(-1, 'group');
        },
        delGroupAfter: function (e) {
            return e.deleteH(1, 'group');
        },
        indentAuto: function (e) {
            return e.indentSelection('smart');
        },
        indentMore: function (e) {
            return e.indentSelection('add');
        },
        indentLess: function (e) {
            return e.indentSelection('subtract');
        },
        insertTab: function (e) {
            return e.replaceSelection('\t');
        },
        insertSoftTab: function (e) {
            for (var t = [], r = e.listSelections(), n = e.options.tabSize, i = 0; i < r.length; i++) {
                var o = r[i].from(),
                    l = R(e.getLine(o.line), o.ch, n);
                t.push(_(n - (l % n)));
            }
            e.replaceSelections(t);
        },
        defaultTab: function (e) {
            e.somethingSelected() ? e.indentSelection('add') : e.execCommand('insertTab');
        },
        transposeChars: function (e) {
            return ti(e, function () {
                for (var t = e.listSelections(), r = [], n = 0; n < t.length; n++)
                    if (t[n].empty()) {
                        var i = t[n].head,
                            o = $e(e.doc, i.line).text;
                        if (o)
                            if ((i.ch == o.length && (i = new rt(i.line, i.ch - 1)), i.ch > 0))
                                (i = new rt(i.line, i.ch + 1)),
                                    e.replaceRange(o.charAt(i.ch - 1) + o.charAt(i.ch - 2), rt(i.line, i.ch - 2), i, '+transpose');
                            else if (i.line > e.doc.first) {
                                var l = $e(e.doc, i.line - 1).text;
                                l &&
                                    ((i = new rt(i.line, 1)),
                                    e.replaceRange(
                                        o.charAt(0) + e.doc.lineSeparator() + l.charAt(l.length - 1),
                                        rt(i.line - 1, l.length - 1),
                                        i,
                                        '+transpose'
                                    ));
                            }
                        r.push(new ki(i, i));
                    }
                e.setSelections(r);
            });
        },
        newlineAndIndent: function (e) {
            return ti(e, function () {
                for (var t = e.listSelections(), r = t.length - 1; r >= 0; r--)
                    e.replaceRange(e.doc.lineSeparator(), t[r].anchor, t[r].head, '+input');
                t = e.listSelections();
                for (var n = 0; n < t.length; n++) e.indentLine(t[n].from().line, null, !0);
                Hn(e);
            });
        },
        openLine: function (e) {
            return e.replaceSelection('\n', 'start');
        },
        toggleOverwrite: function (e) {
            return e.toggleOverwrite();
        },
    };
    function il(e, t) {
        var r = $e(e.doc, t),
            n = Bt(r);
        return n != r && (t = Qe(n)), rl(!0, e, n, t, 1);
    }
    function ol(e, t) {
        var r = il(e, t.line),
            n = $e(e.doc, r.line),
            i = he(n, e.doc.direction);
        if (!i || 0 == i[0].level) {
            var o = Math.max(r.ch, n.text.search(/\S/)),
                l = t.line == r.line && t.ch <= o && t.ch;
            return rt(r.line, l ? 0 : o, r.sticky);
        }
        return r;
    }
    function ll(e, t, r) {
        if ('string' == typeof t && !(t = nl[t])) return !1;
        e.display.input.ensurePolled();
        var n = e.display.shift,
            i = !1;
        try {
            e.isReadOnly() && (e.state.suppressEdits = !0), r && (e.display.shift = !1), (i = t(e) != V);
        } finally {
            (e.display.shift = n), (e.state.suppressEdits = !1);
        }
        return i;
    }
    var sl = new B();
    function al(e, t, r, n) {
        var i = e.state.keySeq;
        if (i) {
            if (_o(t)) return 'handled';
            if (
                (/\'$/.test(t)
                    ? (e.state.keySeq = null)
                    : sl.set(50, function () {
                          e.state.keySeq == i && ((e.state.keySeq = null), e.display.input.reset());
                      }),
                ul(e, i + ' ' + t, r, n))
            )
                return !0;
        }
        return ul(e, t, r, n);
    }
    function ul(e, t, r, n) {
        var i = (function (e, t, r) {
            for (var n = 0; n < e.state.keyMaps.length; n++) {
                var i = $o(t, e.state.keyMaps[n], r, e);
                if (i) return i;
            }
            return (e.options.extraKeys && $o(t, e.options.extraKeys, r, e)) || $o(t, e.options.keyMap, r, e);
        })(e, t, n);
        return (
            'multi' == i && (e.state.keySeq = t),
            'handled' == i && ur(e, 'keyHandled', e, t, r),
            ('handled' != i && 'multi' != i) || (xe(r), Sn(e)),
            !!i
        );
    }
    function cl(e, t) {
        var r = Zo(t, !0);
        return (
            !!r &&
            (t.shiftKey && !e.state.keySeq
                ? al(e, 'Shift-' + r, t, function (t) {
                      return ll(e, t, !0);
                  }) ||
                  al(e, r, t, function (t) {
                      if ('string' == typeof t ? /^go[A-Z]/.test(t) : t.motion) return ll(e, t);
                  })
                : al(e, r, t, function (t) {
                      return ll(e, t);
                  }))
        );
    }
    var hl = null;
    function fl(e) {
        var t = this;
        if (!((e.target && e.target != t.display.input.getField()) || ((t.curOp.focus = H()), me(t, e)))) {
            l && s < 11 && 27 == e.keyCode && (e.returnValue = !1);
            var n = e.keyCode;
            t.display.shift = 16 == n || e.shiftKey;
            var i = cl(t, e);
            f && ((hl = i ? n : null), i || 88 != n || Ee || !(b ? e.metaKey : e.ctrlKey) || t.replaceSelection('', null, 'cut')),
                r && !b && !i && 46 == n && e.shiftKey && !e.ctrlKey && document.execCommand && document.execCommand('cut'),
                18 != n ||
                    /\bCodeMirror-crosshair\b/.test(t.display.lineDiv.className) ||
                    (function (e) {
                        var t = e.display.lineDiv;
                        function r(e) {
                            (18 != e.keyCode && e.altKey) ||
                                (M(t, 'CodeMirror-crosshair'), ge(document, 'keyup', r), ge(document, 'mouseover', r));
                        }
                        F(t, 'CodeMirror-crosshair'), de(document, 'keyup', r), de(document, 'mouseover', r);
                    })(t);
        }
    }
    function dl(e) {
        16 == e.keyCode && (this.doc.sel.shift = !1), me(this, e);
    }
    function pl(e) {
        var t = this;
        if (
            !(
                (e.target && e.target != t.display.input.getField()) ||
                Sr(t.display, e) ||
                me(t, e) ||
                (e.ctrlKey && !e.altKey) ||
                (b && e.metaKey)
            )
        ) {
            var r = e.keyCode,
                n = e.charCode;
            if (f && r == hl) return (hl = null), void xe(e);
            if (!f || (e.which && !(e.which < 10)) || !cl(t, e)) {
                var i = String.fromCharCode(null == n ? r : n);
                '\b' != i &&
                    ((function (e, t, r) {
                        return al(e, "'" + r + "'", t, function (t) {
                            return ll(e, t, !0);
                        });
                    })(t, e, i) ||
                        t.display.input.onKeyPress(e));
            }
        }
    }
    var gl,
        vl,
        ml = function (e, t, r) {
            (this.time = e), (this.pos = t), (this.button = r);
        };
    function yl(e) {
        var t = this,
            r = t.display;
        if (!(me(t, e) || (r.activeTouch && r.input.supportsTouch())))
            if ((r.input.ensurePolled(), (r.shift = e.shiftKey), Sr(r, e)))
                a ||
                    ((r.scroller.draggable = !1),
                    setTimeout(function () {
                        return (r.scroller.draggable = !0);
                    }, 100));
            else if (!xl(t, e)) {
                var n = hn(t, e),
                    i = Te(e),
                    o = n
                        ? (function (e, t) {
                              var r = +new Date();
                              return vl && vl.compare(r, e, t)
                                  ? ((gl = vl = null), 'triple')
                                  : gl && gl.compare(r, e, t)
                                  ? ((vl = new ml(r, e, t)), (gl = null), 'double')
                                  : ((gl = new ml(r, e, t)), (vl = null), 'single');
                          })(n, i)
                        : 'single';
                window.focus(),
                    1 == i && t.state.selectingText && t.state.selectingText(e),
                    (n &&
                        (function (e, t, r, n, i) {
                            var o = 'Click';
                            'double' == n ? (o = 'Double' + o) : 'triple' == n && (o = 'Triple' + o);
                            return (
                                (o = (1 == t ? 'Left' : 2 == t ? 'Middle' : 'Right') + o),
                                al(e, qo(o, i), i, function (t) {
                                    if (('string' == typeof t && (t = nl[t]), !t)) return !1;
                                    var n = !1;
                                    try {
                                        e.isReadOnly() && (e.state.suppressEdits = !0), (n = t(e, r) != V);
                                    } finally {
                                        e.state.suppressEdits = !1;
                                    }
                                    return n;
                                })
                            );
                        })(t, i, n, o, e)) ||
                        (1 == i
                            ? n
                                ? (function (e, t, r, n) {
                                      l ? setTimeout(I(Ln, e), 0) : (e.curOp.focus = H());
                                      var i,
                                          o = (function (e, t, r) {
                                              var n = e.getOption('configureMouse'),
                                                  i = n ? n(e, t, r) : {};
                                              if (null == i.unit) {
                                                  var o = w ? r.shiftKey && r.metaKey : r.altKey;
                                                  i.unit = o ? 'rectangle' : 'single' == t ? 'char' : 'double' == t ? 'word' : 'line';
                                              }
                                              (null == i.extend || e.doc.extend) && (i.extend = e.doc.extend || r.shiftKey);
                                              null == i.addNew && (i.addNew = b ? r.metaKey : r.ctrlKey);
                                              null == i.moveOnDrag && (i.moveOnDrag = !(b ? r.altKey : r.ctrlKey));
                                              return i;
                                          })(e, r, n),
                                          u = e.doc.sel;
                                      e.options.dragDrop &&
                                      Oe &&
                                      !e.isReadOnly() &&
                                      'single' == r &&
                                      (i = u.contains(t)) > -1 &&
                                      (nt((i = u.ranges[i]).from(), t) < 0 || t.xRel > 0) &&
                                      (nt(i.to(), t) > 0 || t.xRel < 0)
                                          ? (function (e, t, r, n) {
                                                var i = e.display,
                                                    o = !1,
                                                    u = ri(e, function (t) {
                                                        a && (i.scroller.draggable = !1),
                                                            (e.state.draggingText = !1),
                                                            e.state.delayingBlurEvent &&
                                                                (e.hasFocus() ? (e.state.delayingBlurEvent = !1) : kn(e)),
                                                            ge(i.wrapper.ownerDocument, 'mouseup', u),
                                                            ge(i.wrapper.ownerDocument, 'mousemove', c),
                                                            ge(i.scroller, 'dragstart', h),
                                                            ge(i.scroller, 'drop', u),
                                                            o ||
                                                                (xe(t),
                                                                n.addNew || qi(e.doc, r, null, null, n.extend),
                                                                (a && !d) || (l && 9 == s)
                                                                    ? setTimeout(function () {
                                                                          i.wrapper.ownerDocument.body.focus({ preventScroll: !0 }),
                                                                              i.input.focus();
                                                                      }, 20)
                                                                    : i.input.focus());
                                                    }),
                                                    c = function (e) {
                                                        o = o || Math.abs(t.clientX - e.clientX) + Math.abs(t.clientY - e.clientY) >= 10;
                                                    },
                                                    h = function () {
                                                        return (o = !0);
                                                    };
                                                a && (i.scroller.draggable = !0);
                                                (e.state.draggingText = u),
                                                    (u.copy = !n.moveOnDrag),
                                                    de(i.wrapper.ownerDocument, 'mouseup', u),
                                                    de(i.wrapper.ownerDocument, 'mousemove', c),
                                                    de(i.scroller, 'dragstart', h),
                                                    de(i.scroller, 'drop', u),
                                                    (e.state.delayingBlurEvent = !0),
                                                    setTimeout(function () {
                                                        return i.input.focus();
                                                    }, 20),
                                                    i.scroller.dragDrop && i.scroller.dragDrop();
                                            })(e, n, t, o)
                                          : (function (e, t, r, n) {
                                                l && kn(e);
                                                var i = e.display,
                                                    o = e.doc;
                                                xe(t);
                                                var s,
                                                    a,
                                                    u = o.sel,
                                                    c = u.ranges;
                                                n.addNew && !n.extend
                                                    ? ((a = o.sel.contains(r)), (s = a > -1 ? c[a] : new ki(r, r)))
                                                    : ((s = o.sel.primary()), (a = o.sel.primIndex));
                                                if ('rectangle' == n.unit) n.addNew || (s = new ki(r, r)), (r = hn(e, t, !0, !0)), (a = -1);
                                                else {
                                                    var h = bl(e, r, n.unit);
                                                    s = n.extend ? _i(s, h.anchor, h.head, n.extend) : h;
                                                }
                                                n.addNew
                                                    ? -1 == a
                                                        ? ((a = c.length), to(o, Ti(e, c.concat([s]), a), { scroll: !1, origin: '*mouse' }))
                                                        : c.length > 1 && c[a].empty() && 'char' == n.unit && !n.extend
                                                        ? (to(o, Ti(e, c.slice(0, a).concat(c.slice(a + 1)), 0), {
                                                              scroll: !1,
                                                              origin: '*mouse',
                                                          }),
                                                          (u = o.sel))
                                                        : Qi(o, a, s, j)
                                                    : ((a = 0), to(o, new Li([s], 0), j), (u = o.sel));
                                                var f = r;
                                                function d(t) {
                                                    if (0 != nt(f, t))
                                                        if (((f = t), 'rectangle' == n.unit)) {
                                                            for (
                                                                var i = [],
                                                                    l = e.options.tabSize,
                                                                    c = R($e(o, r.line).text, r.ch, l),
                                                                    h = R($e(o, t.line).text, t.ch, l),
                                                                    d = Math.min(c, h),
                                                                    p = Math.max(c, h),
                                                                    g = Math.min(r.line, t.line),
                                                                    v = Math.min(e.lastLine(), Math.max(r.line, t.line));
                                                                g <= v;
                                                                g++
                                                            ) {
                                                                var m = $e(o, g).text,
                                                                    y = Y(m, d, l);
                                                                d == p
                                                                    ? i.push(new ki(rt(g, y), rt(g, y)))
                                                                    : m.length > y && i.push(new ki(rt(g, y), rt(g, Y(m, p, l))));
                                                            }
                                                            i.length || i.push(new ki(r, r)),
                                                                to(o, Ti(e, u.ranges.slice(0, a).concat(i), a), {
                                                                    origin: '*mouse',
                                                                    scroll: !1,
                                                                }),
                                                                e.scrollIntoView(t);
                                                        } else {
                                                            var b,
                                                                w = s,
                                                                x = bl(e, t, n.unit),
                                                                C = w.anchor;
                                                            nt(x.anchor, C) > 0
                                                                ? ((b = x.head), (C = st(w.from(), x.anchor)))
                                                                : ((b = x.anchor), (C = lt(w.to(), x.head)));
                                                            var S = u.ranges.slice(0);
                                                            (S[a] = (function (e, t) {
                                                                var r = t.anchor,
                                                                    n = t.head,
                                                                    i = $e(e.doc, r.line);
                                                                if (0 == nt(r, n) && r.sticky == n.sticky) return t;
                                                                var o = he(i);
                                                                if (!o) return t;
                                                                var l = ue(o, r.ch, r.sticky),
                                                                    s = o[l];
                                                                if (s.from != r.ch && s.to != r.ch) return t;
                                                                var a,
                                                                    u = l + ((s.from == r.ch) == (1 != s.level) ? 0 : 1);
                                                                if (0 == u || u == o.length) return t;
                                                                if (n.line != r.line)
                                                                    a = (n.line - r.line) * ('ltr' == e.doc.direction ? 1 : -1) > 0;
                                                                else {
                                                                    var c = ue(o, n.ch, n.sticky),
                                                                        h = c - l || (n.ch - r.ch) * (1 == s.level ? -1 : 1);
                                                                    a = c == u - 1 || c == u ? h < 0 : h > 0;
                                                                }
                                                                var f = o[u + (a ? -1 : 0)],
                                                                    d = a == (1 == f.level),
                                                                    p = d ? f.from : f.to,
                                                                    g = d ? 'after' : 'before';
                                                                return r.ch == p && r.sticky == g ? t : new ki(new rt(r.line, p, g), n);
                                                            })(e, new ki(ut(o, C), b))),
                                                                to(o, Ti(e, S, a), j);
                                                        }
                                                }
                                                var p = i.wrapper.getBoundingClientRect(),
                                                    g = 0;
                                                function v(t) {
                                                    var r = ++g,
                                                        l = hn(e, t, !0, 'rectangle' == n.unit);
                                                    if (l)
                                                        if (0 != nt(l, f)) {
                                                            (e.curOp.focus = H()), d(l);
                                                            var s = An(i, o);
                                                            (l.line >= s.to || l.line < s.from) &&
                                                                setTimeout(
                                                                    ri(e, function () {
                                                                        g == r && v(t);
                                                                    }),
                                                                    150
                                                                );
                                                        } else {
                                                            var a = t.clientY < p.top ? -20 : t.clientY > p.bottom ? 20 : 0;
                                                            a &&
                                                                setTimeout(
                                                                    ri(e, function () {
                                                                        g == r && ((i.scroller.scrollTop += a), v(t));
                                                                    }),
                                                                    50
                                                                );
                                                        }
                                                }
                                                function m(t) {
                                                    (e.state.selectingText = !1),
                                                        (g = 1 / 0),
                                                        t && (xe(t), i.input.focus()),
                                                        ge(i.wrapper.ownerDocument, 'mousemove', y),
                                                        ge(i.wrapper.ownerDocument, 'mouseup', b),
                                                        (o.history.lastSelOrigin = null);
                                                }
                                                var y = ri(e, function (e) {
                                                        0 !== e.buttons && Te(e) ? v(e) : m(e);
                                                    }),
                                                    b = ri(e, m);
                                                (e.state.selectingText = b),
                                                    de(i.wrapper.ownerDocument, 'mousemove', y),
                                                    de(i.wrapper.ownerDocument, 'mouseup', b);
                                            })(e, n, t, o);
                                  })(t, n, o, e)
                                : ke(e) == r.scroller && xe(e)
                            : 2 == i
                            ? (n && qi(t.doc, n),
                              setTimeout(function () {
                                  return r.input.focus();
                              }, 20))
                            : 3 == i && (L ? t.display.input.onContextMenu(e) : kn(t)));
            }
    }
    function bl(e, t, r) {
        if ('char' == r) return new ki(t, t);
        if ('word' == r) return e.findWordAt(t);
        if ('line' == r) return new ki(rt(t.line, 0), ut(e.doc, rt(t.line + 1, 0)));
        var n = r(e, t);
        return new ki(n.from, n.to);
    }
    function wl(e, t, r, n) {
        var i, o;
        if (t.touches) (i = t.touches[0].clientX), (o = t.touches[0].clientY);
        else
            try {
                (i = t.clientX), (o = t.clientY);
            } catch (e) {
                return !1;
            }
        if (i >= Math.floor(e.display.gutters.getBoundingClientRect().right)) return !1;
        n && xe(t);
        var l = e.display,
            s = l.lineDiv.getBoundingClientRect();
        if (o > s.bottom || !be(e, r)) return Se(t);
        o -= s.top - l.viewOffset;
        for (var a = 0; a < e.display.gutterSpecs.length; ++a) {
            var u = l.gutters.childNodes[a];
            if (u && u.getBoundingClientRect().right >= i) return ve(e, r, e, Je(e.doc, o), e.display.gutterSpecs[a].className, t), Se(t);
        }
    }
    function xl(e, t) {
        return wl(e, t, 'gutterClick', !0);
    }
    function Cl(e, t) {
        Sr(e.display, t) ||
            (function (e, t) {
                if (!be(e, 'gutterContextMenu')) return !1;
                return wl(e, t, 'gutterContextMenu', !1);
            })(e, t) ||
            me(e, t, 'contextmenu') ||
            L ||
            e.display.input.onContextMenu(t);
    }
    function Sl(e) {
        (e.display.wrapper.className =
            e.display.wrapper.className.replace(/\s*cm-s-\S+/g, '') + e.options.theme.replace(/(^|\s)\s*/g, ' cm-s-')),
            Gr(e);
    }
    ml.prototype.compare = function (e, t, r) {
        return this.time + 400 > e && 0 == nt(t, this.pos) && r == this.button;
    };
    var Ll = {
            toString: function () {
                return 'CodeMirror.Init';
            },
        },
        kl = {},
        Tl = {};
    function Ml(e, t, r) {
        if (!t != !(r && r != Ll)) {
            var n = e.display.dragFunctions,
                i = t ? de : ge;
            i(e.display.scroller, 'dragstart', n.start),
                i(e.display.scroller, 'dragenter', n.enter),
                i(e.display.scroller, 'dragover', n.over),
                i(e.display.scroller, 'dragleave', n.leave),
                i(e.display.scroller, 'drop', n.drop);
        }
    }
    function Nl(e) {
        e.options.lineWrapping
            ? (F(e.display.wrapper, 'CodeMirror-wrap'), (e.display.sizer.style.minWidth = ''), (e.display.sizerWidth = null))
            : (M(e.display.wrapper, 'CodeMirror-wrap'), Yt(e)),
            cn(e),
            dn(e),
            Gr(e),
            setTimeout(function () {
                return Vn(e);
            }, 100);
    }
    function Ol(e, t) {
        var r = this;
        if (!(this instanceof Ol)) return new Ol(e, t);
        (this.options = t = t ? z(t) : {}), z(kl, t, !1);
        var n = t.value;
        'string' == typeof n ? (n = new Ho(n, t.mode, null, t.lineSeparator, t.direction)) : t.mode && (n.modeOption = t.mode),
            (this.doc = n);
        var i = new Ol.inputStyles[t.inputStyle](this),
            o = (this.display = new yi(e, n, i, t));
        for (var u in ((o.wrapper.CodeMirror = this),
        Sl(this),
        t.lineWrapping && (this.display.wrapper.className += ' CodeMirror-wrap'),
        Xn(this),
        (this.state = {
            keyMaps: [],
            overlays: [],
            modeGen: 0,
            overwrite: !1,
            delayingBlurEvent: !1,
            focused: !1,
            suppressEdits: !1,
            pasteIncoming: -1,
            cutIncoming: -1,
            selectingText: !1,
            draggingText: !1,
            highlight: new B(),
            keySeq: null,
            specialChars: null,
        }),
        t.autofocus && !y && o.input.focus(),
        l &&
            s < 11 &&
            setTimeout(function () {
                return r.display.input.reset(!0);
            }, 20),
        (function (e) {
            var t = e.display;
            de(t.scroller, 'mousedown', ri(e, yl)),
                de(
                    t.scroller,
                    'dblclick',
                    l && s < 11
                        ? ri(e, function (t) {
                              if (!me(e, t)) {
                                  var r = hn(e, t);
                                  if (r && !xl(e, t) && !Sr(e.display, t)) {
                                      xe(t);
                                      var n = e.findWordAt(r);
                                      qi(e.doc, n.anchor, n.head);
                                  }
                              }
                          })
                        : function (t) {
                              return me(e, t) || xe(t);
                          }
                );
            de(t.scroller, 'contextmenu', function (t) {
                return Cl(e, t);
            }),
                de(t.input.getField(), 'contextmenu', function (r) {
                    t.scroller.contains(r.target) || Cl(e, r);
                });
            var r,
                n = { end: 0 };
            function i() {
                t.activeTouch &&
                    ((r = setTimeout(function () {
                        return (t.activeTouch = null);
                    }, 1e3)),
                    ((n = t.activeTouch).end = +new Date()));
            }
            function o(e) {
                if (1 != e.touches.length) return !1;
                var t = e.touches[0];
                return t.radiusX <= 1 && t.radiusY <= 1;
            }
            function a(e, t) {
                if (null == t.left) return !0;
                var r = t.left - e.left,
                    n = t.top - e.top;
                return r * r + n * n > 400;
            }
            de(t.scroller, 'touchstart', function (i) {
                if (!me(e, i) && !o(i) && !xl(e, i)) {
                    t.input.ensurePolled(), clearTimeout(r);
                    var l = +new Date();
                    (t.activeTouch = { start: l, moved: !1, prev: l - n.end <= 300 ? n : null }),
                        1 == i.touches.length && ((t.activeTouch.left = i.touches[0].pageX), (t.activeTouch.top = i.touches[0].pageY));
                }
            }),
                de(t.scroller, 'touchmove', function () {
                    t.activeTouch && (t.activeTouch.moved = !0);
                }),
                de(t.scroller, 'touchend', function (r) {
                    var n = t.activeTouch;
                    if (n && !Sr(t, r) && null != n.left && !n.moved && new Date() - n.start < 300) {
                        var o,
                            l = e.coordsChar(t.activeTouch, 'page');
                        (o =
                            !n.prev || a(n, n.prev)
                                ? new ki(l, l)
                                : !n.prev.prev || a(n, n.prev.prev)
                                ? e.findWordAt(l)
                                : new ki(rt(l.line, 0), ut(e.doc, rt(l.line + 1, 0)))),
                            e.setSelection(o.anchor, o.head),
                            e.focus(),
                            xe(r);
                    }
                    i();
                }),
                de(t.scroller, 'touchcancel', i),
                de(t.scroller, 'scroll', function () {
                    t.scroller.clientHeight && (In(e, t.scroller.scrollTop), Rn(e, t.scroller.scrollLeft, !0), ve(e, 'scroll', e));
                }),
                de(t.scroller, 'mousewheel', function (t) {
                    return Si(e, t);
                }),
                de(t.scroller, 'DOMMouseScroll', function (t) {
                    return Si(e, t);
                }),
                de(t.wrapper, 'scroll', function () {
                    return (t.wrapper.scrollTop = t.wrapper.scrollLeft = 0);
                }),
                (t.dragFunctions = {
                    enter: function (t) {
                        me(e, t) || Le(t);
                    },
                    over: function (t) {
                        me(e, t) ||
                            (!(function (e, t) {
                                var r = hn(e, t);
                                if (r) {
                                    var n = document.createDocumentFragment();
                                    wn(e, r, n),
                                        e.display.dragCursor ||
                                            ((e.display.dragCursor = A('div', null, 'CodeMirror-cursors CodeMirror-dragcursors')),
                                            e.display.lineSpace.insertBefore(e.display.dragCursor, e.display.cursorDiv)),
                                        O(e.display.dragCursor, n);
                                }
                            })(e, t),
                            Le(t));
                    },
                    start: function (t) {
                        return (function (e, t) {
                            if (l && (!e.state.draggingText || +new Date() - Fo < 100)) Le(t);
                            else if (
                                !me(e, t) &&
                                !Sr(e.display, t) &&
                                (t.dataTransfer.setData('Text', e.getSelection()),
                                (t.dataTransfer.effectAllowed = 'copyMove'),
                                t.dataTransfer.setDragImage && !d)
                            ) {
                                var r = A('img', null, null, 'position: fixed; left: 0; top: 0;');
                                (r.src = 'data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=='),
                                    f && ((r.width = r.height = 1), e.display.wrapper.appendChild(r), (r._top = r.offsetTop)),
                                    t.dataTransfer.setDragImage(r, 0, 0),
                                    f && r.parentNode.removeChild(r);
                            }
                        })(e, t);
                    },
                    drop: ri(e, Eo),
                    leave: function (t) {
                        me(e, t) || Po(e);
                    },
                });
            var u = t.input.getField();
            de(u, 'keyup', function (t) {
                return dl.call(e, t);
            }),
                de(u, 'keydown', ri(e, fl)),
                de(u, 'keypress', ri(e, pl)),
                de(u, 'focus', function (t) {
                    return Tn(e, t);
                }),
                de(u, 'blur', function (t) {
                    return Mn(e, t);
                });
        })(this),
        Ro(),
        $n(this),
        (this.curOp.forceUpdate = !0),
        Ii(this, n),
        (t.autofocus && !y) || this.hasFocus()
            ? setTimeout(function () {
                  r.hasFocus() && !r.state.focused && Tn(r);
              }, 20)
            : Mn(this),
        Tl))
            Tl.hasOwnProperty(u) && Tl[u](this, t[u], Ll);
        pi(this), t.finishInit && t.finishInit(this);
        for (var c = 0; c < Al.length; ++c) Al[c](this);
        _n(this),
            a &&
                t.lineWrapping &&
                'optimizelegibility' == getComputedStyle(o.lineDiv).textRendering &&
                (o.lineDiv.style.textRendering = 'auto');
    }
    (Ol.defaults = kl), (Ol.optionHandlers = Tl);
    var Al = [];
    function Dl(e, t, r, n) {
        var i,
            o = e.doc;
        null == r && (r = 'add'), 'smart' == r && (o.mode.indent ? (i = gt(e, t).state) : (r = 'prev'));
        var l = e.options.tabSize,
            s = $e(o, t),
            a = R(s.text, null, l);
        s.stateAfter && (s.stateAfter = null);
        var u,
            c = s.text.match(/^\s*/)[0];
        if (n || /\S/.test(s.text)) {
            if ('smart' == r && ((u = o.mode.indent(i, s.text.slice(c.length), s.text)) == V || u > 150)) {
                if (!n) return;
                r = 'prev';
            }
        } else (u = 0), (r = 'not');
        'prev' == r
            ? (u = t > o.first ? R($e(o, t - 1).text, null, l) : 0)
            : 'add' == r
            ? (u = a + e.options.indentUnit)
            : 'subtract' == r
            ? (u = a - e.options.indentUnit)
            : 'number' == typeof r && (u = a + r),
            (u = Math.max(0, u));
        var h = '',
            f = 0;
        if (e.options.indentWithTabs) for (var d = Math.floor(u / l); d; --d) (f += l), (h += '\t');
        if ((f < u && (h += _(u - f)), h != c)) return mo(o, h, rt(t, 0), rt(t, c.length), '+input'), (s.stateAfter = null), !0;
        for (var p = 0; p < o.sel.ranges.length; p++) {
            var g = o.sel.ranges[p];
            if (g.head.line == t && g.head.ch < c.length) {
                var v = rt(t, c.length);
                Qi(o, p, new ki(v, v));
                break;
            }
        }
    }
    Ol.defineInitHook = function (e) {
        return Al.push(e);
    };
    var Wl = null;
    function Hl(e) {
        Wl = e;
    }
    function Fl(e, t, r, n, i) {
        var o = e.doc;
        (e.display.shift = !1), n || (n = o.sel);
        var l = +new Date() - 200,
            s = 'paste' == i || e.state.pasteIncoming > l,
            a = He(t),
            u = null;
        if (s && n.ranges.length > 1)
            if (Wl && Wl.text.join('\n') == t) {
                if (n.ranges.length % Wl.text.length == 0) {
                    u = [];
                    for (var c = 0; c < Wl.text.length; c++) u.push(o.splitLines(Wl.text[c]));
                }
            } else
                a.length == n.ranges.length &&
                    e.options.pasteLinesPerSelection &&
                    (u = Z(a, function (e) {
                        return [e];
                    }));
        for (var h = e.curOp.updateInput, f = n.ranges.length - 1; f >= 0; f--) {
            var d = n.ranges[f],
                p = d.from(),
                g = d.to();
            d.empty() &&
                (r && r > 0
                    ? (p = rt(p.line, p.ch - r))
                    : e.state.overwrite && !s
                    ? (g = rt(g.line, Math.min($e(o, g.line).text.length, g.ch + q(a).length)))
                    : s && Wl && Wl.lineWise && Wl.text.join('\n') == a.join('\n') && (p = g = rt(p.line, 0)));
            var v = {
                from: p,
                to: g,
                text: u ? u[f % u.length] : a,
                origin: i || (s ? 'paste' : e.state.cutIncoming > l ? 'cut' : '+input'),
            };
            ho(e.doc, v), ur(e, 'inputRead', e, v);
        }
        t && !s && Pl(e, t),
            Hn(e),
            e.curOp.updateInput < 2 && (e.curOp.updateInput = h),
            (e.curOp.typing = !0),
            (e.state.pasteIncoming = e.state.cutIncoming = -1);
    }
    function El(e, t) {
        var r = e.clipboardData && e.clipboardData.getData('Text');
        if (r)
            return (
                e.preventDefault(),
                t.isReadOnly() ||
                    t.options.disableInput ||
                    !t.hasFocus() ||
                    ti(t, function () {
                        return Fl(t, r, 0, null, 'paste');
                    }),
                !0
            );
    }
    function Pl(e, t) {
        if (e.options.electricChars && e.options.smartIndent)
            for (var r = e.doc.sel, n = r.ranges.length - 1; n >= 0; n--) {
                var i = r.ranges[n];
                if (!(i.head.ch > 100 || (n && r.ranges[n - 1].head.line == i.head.line))) {
                    var o = e.getModeAt(i.head),
                        l = !1;
                    if (o.electricChars) {
                        for (var s = 0; s < o.electricChars.length; s++)
                            if (t.indexOf(o.electricChars.charAt(s)) > -1) {
                                l = Dl(e, i.head.line, 'smart');
                                break;
                            }
                    } else
                        o.electricInput &&
                            o.electricInput.test($e(e.doc, i.head.line).text.slice(0, i.head.ch)) &&
                            (l = Dl(e, i.head.line, 'smart'));
                    l && ur(e, 'electricInput', e, i.head.line);
                }
            }
    }
    function Il(e) {
        for (var t = [], r = [], n = 0; n < e.doc.sel.ranges.length; n++) {
            var i = e.doc.sel.ranges[n].head.line,
                o = { anchor: rt(i, 0), head: rt(i + 1, 0) };
            r.push(o), t.push(e.getRange(o.anchor, o.head));
        }
        return { text: t, ranges: r };
    }
    function zl(e, t, r, n) {
        e.setAttribute('autocorrect', r ? '' : 'off'), e.setAttribute('autocapitalize', n ? '' : 'off'), e.setAttribute('spellcheck', !!t);
    }
    function Rl() {
        var e = A(
                'textarea',
                null,
                null,
                'position: absolute; bottom: -1em; padding: 0; width: 1px; height: 1em; min-height: 1em; outline: none'
            ),
            t = A('div', [e], null, 'overflow: hidden; position: relative; width: 3px; height: 0px;');
        return a ? (e.style.width = '1000px') : e.setAttribute('wrap', 'off'), v && (e.style.border = '1px solid black'), zl(e), t;
    }
    function Bl(e, t, r, n, i) {
        var o = t,
            l = r,
            s = $e(e, t.line),
            a = i && 'rtl' == e.direction ? -r : r;
        function u(o) {
            var l, u;
            if ('codepoint' == n) {
                var c = s.text.charCodeAt(t.ch + (r > 0 ? 0 : -1));
                if (isNaN(c)) l = null;
                else {
                    var h = r > 0 ? c >= 55296 && c < 56320 : c >= 56320 && c < 57343;
                    l = new rt(t.line, Math.max(0, Math.min(s.text.length, t.ch + r * (h ? 2 : 1))), -r);
                }
            } else
                l = i
                    ? (function (e, t, r, n) {
                          var i = he(t, e.doc.direction);
                          if (!i) return tl(t, r, n);
                          r.ch >= t.text.length
                              ? ((r.ch = t.text.length), (r.sticky = 'before'))
                              : r.ch <= 0 && ((r.ch = 0), (r.sticky = 'after'));
                          var o = ue(i, r.ch, r.sticky),
                              l = i[o];
                          if ('ltr' == e.doc.direction && l.level % 2 == 0 && (n > 0 ? l.to > r.ch : l.from < r.ch)) return tl(t, r, n);
                          var s,
                              a = function (e, r) {
                                  return el(t, e instanceof rt ? e.ch : e, r);
                              },
                              u = function (r) {
                                  return e.options.lineWrapping ? ((s = s || Hr(e, t)), Jr(e, t, s, r)) : { begin: 0, end: t.text.length };
                              },
                              c = u('before' == r.sticky ? a(r, -1) : r.ch);
                          if ('rtl' == e.doc.direction || 1 == l.level) {
                              var h = (1 == l.level) == n < 0,
                                  f = a(r, h ? 1 : -1);
                              if (null != f && (h ? f <= l.to && f <= c.end : f >= l.from && f >= c.begin)) {
                                  var d = h ? 'before' : 'after';
                                  return new rt(r.line, f, d);
                              }
                          }
                          var p = function (e, t, n) {
                                  for (
                                      var o = function (e, t) {
                                          return t ? new rt(r.line, a(e, 1), 'before') : new rt(r.line, e, 'after');
                                      };
                                      e >= 0 && e < i.length;
                                      e += t
                                  ) {
                                      var l = i[e],
                                          s = t > 0 == (1 != l.level),
                                          u = s ? n.begin : a(n.end, -1);
                                      if (l.from <= u && u < l.to) return o(u, s);
                                      if (((u = s ? l.from : a(l.to, -1)), n.begin <= u && u < n.end)) return o(u, s);
                                  }
                              },
                              g = p(o + n, n, c);
                          if (g) return g;
                          var v = n > 0 ? c.end : a(c.begin, -1);
                          return null == v || (n > 0 && v == t.text.length) || !(g = p(n > 0 ? 0 : i.length - 1, n, u(v))) ? null : g;
                      })(e.cm, s, t, r)
                    : tl(s, t, r);
            if (null == l) {
                if (o || (u = t.line + a) < e.first || u >= e.first + e.size || ((t = new rt(u, t.ch, t.sticky)), !(s = $e(e, u))))
                    return !1;
                t = rl(i, e.cm, s, t.line, a);
            } else t = l;
            return !0;
        }
        if ('char' == n || 'codepoint' == n) u();
        else if ('column' == n) u(!0);
        else if ('word' == n || 'group' == n)
            for (var c = null, h = 'group' == n, f = e.cm && e.cm.getHelper(t, 'wordChars'), d = !0; !(r < 0) || u(!d); d = !1) {
                var p = s.text.charAt(t.ch) || '\n',
                    g = re(p, f) ? 'w' : h && '\n' == p ? 'n' : !h || /\s/.test(p) ? null : 'p';
                if ((!h || d || g || (g = 's'), c && c != g)) {
                    r < 0 && ((r = 1), u(), (t.sticky = 'after'));
                    break;
                }
                if ((g && (c = g), r > 0 && !u(!d))) break;
            }
        var v = so(e, t, o, l, !0);
        return it(o, v) && (v.hitSide = !0), v;
    }
    function Gl(e, t, r, n) {
        var i,
            o,
            l = e.doc,
            s = t.left;
        if ('page' == n) {
            var a = Math.min(e.display.wrapper.clientHeight, window.innerHeight || document.documentElement.clientHeight),
                u = Math.max(a - 0.5 * on(e.display), 3);
            i = (r > 0 ? t.bottom : t.top) + r * u;
        } else 'line' == n && (i = r > 0 ? t.bottom + 3 : t.top - 3);
        for (; (o = Zr(e, s, i)).outside; ) {
            if (r < 0 ? i <= 0 : i >= l.height) {
                o.hitSide = !0;
                break;
            }
            i += 5 * r;
        }
        return o;
    }
    var Ul = function (e) {
        (this.cm = e),
            (this.lastAnchorNode = this.lastAnchorOffset = this.lastFocusNode = this.lastFocusOffset = null),
            (this.polling = new B()),
            (this.composing = null),
            (this.gracePeriod = !1),
            (this.readDOMTimeout = null);
    };
    function Vl(e, t) {
        var r = Wr(e, t.line);
        if (!r || r.hidden) return null;
        var n = $e(e.doc, t.line),
            i = Ar(r, n, t.line),
            o = he(n, e.doc.direction),
            l = 'left';
        o && (l = ue(o, t.ch) % 2 ? 'right' : 'left');
        var s = Ir(i.map, t.ch, l);
        return (s.offset = 'right' == s.collapse ? s.end : s.start), s;
    }
    function Kl(e, t) {
        return t && (e.bad = !0), e;
    }
    function jl(e, t, r) {
        var n;
        if (t == e.display.lineDiv) {
            if (!(n = e.display.lineDiv.childNodes[r])) return Kl(e.clipPos(rt(e.display.viewTo - 1)), !0);
            (t = null), (r = 0);
        } else
            for (n = t; ; n = n.parentNode) {
                if (!n || n == e.display.lineDiv) return null;
                if (n.parentNode && n.parentNode == e.display.lineDiv) break;
            }
        for (var i = 0; i < e.display.view.length; i++) {
            var o = e.display.view[i];
            if (o.node == n) return Xl(o, t, r);
        }
    }
    function Xl(e, t, r) {
        var n = e.text.firstChild,
            i = !1;
        if (!t || !W(n, t)) return Kl(rt(Qe(e.line), 0), !0);
        if (t == n && ((i = !0), (t = n.childNodes[r]), (r = 0), !t)) {
            var o = e.rest ? q(e.rest) : e.line;
            return Kl(rt(Qe(o), o.text.length), i);
        }
        var l = 3 == t.nodeType ? t : null,
            s = t;
        for (
            l || 1 != t.childNodes.length || 3 != t.firstChild.nodeType || ((l = t.firstChild), r && (r = l.nodeValue.length));
            s.parentNode != n;

        )
            s = s.parentNode;
        var a = e.measure,
            u = a.maps;
        function c(t, r, n) {
            for (var i = -1; i < (u ? u.length : 0); i++)
                for (var o = i < 0 ? a.map : u[i], l = 0; l < o.length; l += 3) {
                    var s = o[l + 2];
                    if (s == t || s == r) {
                        var c = Qe(i < 0 ? e.line : e.rest[i]),
                            h = o[l] + n;
                        return (n < 0 || s != t) && (h = o[l + (n ? 1 : 0)]), rt(c, h);
                    }
                }
        }
        var h = c(l, s, r);
        if (h) return Kl(h, i);
        for (var f = s.nextSibling, d = l ? l.nodeValue.length - r : 0; f; f = f.nextSibling) {
            if ((h = c(f, f.firstChild, 0))) return Kl(rt(h.line, h.ch - d), i);
            d += f.textContent.length;
        }
        for (var p = s.previousSibling, g = r; p; p = p.previousSibling) {
            if ((h = c(p, p.firstChild, -1))) return Kl(rt(h.line, h.ch + g), i);
            g += p.textContent.length;
        }
    }
    (Ul.prototype.init = function (e) {
        var t = this,
            r = this,
            n = r.cm,
            i = (r.div = e.lineDiv);
        function o(e) {
            for (var t = e.target; t; t = t.parentNode) {
                if (t == i) return !0;
                if (/\bCodeMirror-(?:line)?widget\b/.test(t.className)) break;
            }
            return !1;
        }
        function l(e) {
            if (o(e) && !me(n, e)) {
                if (n.somethingSelected())
                    Hl({ lineWise: !1, text: n.getSelections() }), 'cut' == e.type && n.replaceSelection('', null, 'cut');
                else {
                    if (!n.options.lineWiseCopyCut) return;
                    var t = Il(n);
                    Hl({ lineWise: !0, text: t.text }),
                        'cut' == e.type &&
                            n.operation(function () {
                                n.setSelections(t.ranges, 0, K), n.replaceSelection('', null, 'cut');
                            });
                }
                if (e.clipboardData) {
                    e.clipboardData.clearData();
                    var l = Wl.text.join('\n');
                    if ((e.clipboardData.setData('Text', l), e.clipboardData.getData('Text') == l)) return void e.preventDefault();
                }
                var s = Rl(),
                    a = s.firstChild;
                n.display.lineSpace.insertBefore(s, n.display.lineSpace.firstChild), (a.value = Wl.text.join('\n'));
                var u = H();
                P(a),
                    setTimeout(function () {
                        n.display.lineSpace.removeChild(s), u.focus(), u == i && r.showPrimarySelection();
                    }, 50);
            }
        }
        (i.contentEditable = !0),
            zl(i, n.options.spellcheck, n.options.autocorrect, n.options.autocapitalize),
            de(i, 'paste', function (e) {
                !o(e) ||
                    me(n, e) ||
                    El(e, n) ||
                    (s <= 11 &&
                        setTimeout(
                            ri(n, function () {
                                return t.updateFromDOM();
                            }),
                            20
                        ));
            }),
            de(i, 'compositionstart', function (e) {
                t.composing = { data: e.data, done: !1 };
            }),
            de(i, 'compositionupdate', function (e) {
                t.composing || (t.composing = { data: e.data, done: !1 });
            }),
            de(i, 'compositionend', function (e) {
                t.composing && (e.data != t.composing.data && t.readFromDOMSoon(), (t.composing.done = !0));
            }),
            de(i, 'touchstart', function () {
                return r.forceCompositionEnd();
            }),
            de(i, 'input', function () {
                t.composing || t.readFromDOMSoon();
            }),
            de(i, 'copy', l),
            de(i, 'cut', l);
    }),
        (Ul.prototype.screenReaderLabelChanged = function (e) {
            e ? this.div.setAttribute('aria-label', e) : this.div.removeAttribute('aria-label');
        }),
        (Ul.prototype.prepareSelection = function () {
            var e = bn(this.cm, !1);
            return (e.focus = H() == this.div), e;
        }),
        (Ul.prototype.showSelection = function (e, t) {
            e && this.cm.display.view.length && ((e.focus || t) && this.showPrimarySelection(), this.showMultipleSelections(e));
        }),
        (Ul.prototype.getSelection = function () {
            return this.cm.display.wrapper.ownerDocument.getSelection();
        }),
        (Ul.prototype.showPrimarySelection = function () {
            var e = this.getSelection(),
                t = this.cm,
                n = t.doc.sel.primary(),
                i = n.from(),
                o = n.to();
            if (t.display.viewTo == t.display.viewFrom || i.line >= t.display.viewTo || o.line < t.display.viewFrom) e.removeAllRanges();
            else {
                var l = jl(t, e.anchorNode, e.anchorOffset),
                    s = jl(t, e.focusNode, e.focusOffset);
                if (!l || l.bad || !s || s.bad || 0 != nt(st(l, s), i) || 0 != nt(lt(l, s), o)) {
                    var a = t.display.view,
                        u = (i.line >= t.display.viewFrom && Vl(t, i)) || { node: a[0].measure.map[2], offset: 0 },
                        c = o.line < t.display.viewTo && Vl(t, o);
                    if (!c) {
                        var h = a[a.length - 1].measure,
                            f = h.maps ? h.maps[h.maps.length - 1] : h.map;
                        c = { node: f[f.length - 1], offset: f[f.length - 2] - f[f.length - 3] };
                    }
                    if (u && c) {
                        var d,
                            p = e.rangeCount && e.getRangeAt(0);
                        try {
                            d = T(u.node, u.offset, c.offset, c.node);
                        } catch (e) {}
                        d &&
                            (!r && t.state.focused
                                ? (e.collapse(u.node, u.offset), d.collapsed || (e.removeAllRanges(), e.addRange(d)))
                                : (e.removeAllRanges(), e.addRange(d)),
                            p && null == e.anchorNode ? e.addRange(p) : r && this.startGracePeriod()),
                            this.rememberSelection();
                    } else e.removeAllRanges();
                }
            }
        }),
        (Ul.prototype.startGracePeriod = function () {
            var e = this;
            clearTimeout(this.gracePeriod),
                (this.gracePeriod = setTimeout(function () {
                    (e.gracePeriod = !1),
                        e.selectionChanged() &&
                            e.cm.operation(function () {
                                return (e.cm.curOp.selectionChanged = !0);
                            });
                }, 20));
        }),
        (Ul.prototype.showMultipleSelections = function (e) {
            O(this.cm.display.cursorDiv, e.cursors), O(this.cm.display.selectionDiv, e.selection);
        }),
        (Ul.prototype.rememberSelection = function () {
            var e = this.getSelection();
            (this.lastAnchorNode = e.anchorNode),
                (this.lastAnchorOffset = e.anchorOffset),
                (this.lastFocusNode = e.focusNode),
                (this.lastFocusOffset = e.focusOffset);
        }),
        (Ul.prototype.selectionInEditor = function () {
            var e = this.getSelection();
            if (!e.rangeCount) return !1;
            var t = e.getRangeAt(0).commonAncestorContainer;
            return W(this.div, t);
        }),
        (Ul.prototype.focus = function () {
            'nocursor' != this.cm.options.readOnly &&
                ((this.selectionInEditor() && H() == this.div) || this.showSelection(this.prepareSelection(), !0), this.div.focus());
        }),
        (Ul.prototype.blur = function () {
            this.div.blur();
        }),
        (Ul.prototype.getField = function () {
            return this.div;
        }),
        (Ul.prototype.supportsTouch = function () {
            return !0;
        }),
        (Ul.prototype.receivedFocus = function () {
            var e = this,
                t = this;
            this.selectionInEditor()
                ? setTimeout(function () {
                      return e.pollSelection();
                  }, 20)
                : ti(this.cm, function () {
                      return (t.cm.curOp.selectionChanged = !0);
                  }),
                this.polling.set(this.cm.options.pollInterval, function e() {
                    t.cm.state.focused && (t.pollSelection(), t.polling.set(t.cm.options.pollInterval, e));
                });
        }),
        (Ul.prototype.selectionChanged = function () {
            var e = this.getSelection();
            return (
                e.anchorNode != this.lastAnchorNode ||
                e.anchorOffset != this.lastAnchorOffset ||
                e.focusNode != this.lastFocusNode ||
                e.focusOffset != this.lastFocusOffset
            );
        }),
        (Ul.prototype.pollSelection = function () {
            if (null == this.readDOMTimeout && !this.gracePeriod && this.selectionChanged()) {
                var e = this.getSelection(),
                    t = this.cm;
                if (
                    m &&
                    c &&
                    this.cm.display.gutterSpecs.length &&
                    (function (e) {
                        for (var t = e; t; t = t.parentNode) if (/CodeMirror-gutter-wrapper/.test(t.className)) return !0;
                        return !1;
                    })(e.anchorNode)
                )
                    return (
                        this.cm.triggerOnKeyDown({ type: 'keydown', keyCode: 8, preventDefault: Math.abs }), this.blur(), void this.focus()
                    );
                if (!this.composing) {
                    this.rememberSelection();
                    var r = jl(t, e.anchorNode, e.anchorOffset),
                        n = jl(t, e.focusNode, e.focusOffset);
                    r &&
                        n &&
                        ti(t, function () {
                            to(t.doc, Mi(r, n), K), (r.bad || n.bad) && (t.curOp.selectionChanged = !0);
                        });
                }
            }
        }),
        (Ul.prototype.pollContent = function () {
            null != this.readDOMTimeout && (clearTimeout(this.readDOMTimeout), (this.readDOMTimeout = null));
            var e,
                t,
                r,
                n = this.cm,
                i = n.display,
                o = n.doc.sel.primary(),
                l = o.from(),
                s = o.to();
            if (
                (0 == l.ch && l.line > n.firstLine() && (l = rt(l.line - 1, $e(n.doc, l.line - 1).length)),
                s.ch == $e(n.doc, s.line).text.length && s.line < n.lastLine() && (s = rt(s.line + 1, 0)),
                l.line < i.viewFrom || s.line > i.viewTo - 1)
            )
                return !1;
            l.line == i.viewFrom || 0 == (e = fn(n, l.line))
                ? ((t = Qe(i.view[0].line)), (r = i.view[0].node))
                : ((t = Qe(i.view[e].line)), (r = i.view[e - 1].node.nextSibling));
            var a,
                u,
                c = fn(n, s.line);
            if (
                (c == i.view.length - 1
                    ? ((a = i.viewTo - 1), (u = i.lineDiv.lastChild))
                    : ((a = Qe(i.view[c + 1].line) - 1), (u = i.view[c + 1].node.previousSibling)),
                !r)
            )
                return !1;
            for (
                var h = n.doc.splitLines(
                        (function (e, t, r, n, i) {
                            var o = '',
                                l = !1,
                                s = e.doc.lineSeparator(),
                                a = !1;
                            function u(e) {
                                return function (t) {
                                    return t.id == e;
                                };
                            }
                            function c() {
                                l && ((o += s), a && (o += s), (l = a = !1));
                            }
                            function h(e) {
                                e && (c(), (o += e));
                            }
                            function f(t) {
                                if (1 == t.nodeType) {
                                    var r = t.getAttribute('cm-text');
                                    if (r) return void h(r);
                                    var o,
                                        d = t.getAttribute('cm-marker');
                                    if (d) {
                                        var p = e.findMarks(rt(n, 0), rt(i + 1, 0), u(+d));
                                        return void (p.length && (o = p[0].find(0)) && h(_e(e.doc, o.from, o.to).join(s)));
                                    }
                                    if ('false' == t.getAttribute('contenteditable')) return;
                                    var g = /^(pre|div|p|li|table|br)$/i.test(t.nodeName);
                                    if (!/^br$/i.test(t.nodeName) && 0 == t.textContent.length) return;
                                    g && c();
                                    for (var v = 0; v < t.childNodes.length; v++) f(t.childNodes[v]);
                                    /^(pre|p)$/i.test(t.nodeName) && (a = !0), g && (l = !0);
                                } else 3 == t.nodeType && h(t.nodeValue.replace(/\u200b/g, '').replace(/\u00a0/g, ' '));
                            }
                            for (; f(t), t != r; ) (t = t.nextSibling), (a = !1);
                            return o;
                        })(n, r, u, t, a)
                    ),
                    f = _e(n.doc, rt(t, 0), rt(a, $e(n.doc, a).text.length));
                h.length > 1 && f.length > 1;

            )
                if (q(h) == q(f)) h.pop(), f.pop(), a--;
                else {
                    if (h[0] != f[0]) break;
                    h.shift(), f.shift(), t++;
                }
            for (var d = 0, p = 0, g = h[0], v = f[0], m = Math.min(g.length, v.length); d < m && g.charCodeAt(d) == v.charCodeAt(d); ) ++d;
            for (
                var y = q(h), b = q(f), w = Math.min(y.length - (1 == h.length ? d : 0), b.length - (1 == f.length ? d : 0));
                p < w && y.charCodeAt(y.length - p - 1) == b.charCodeAt(b.length - p - 1);

            )
                ++p;
            if (1 == h.length && 1 == f.length && t == l.line)
                for (; d && d > l.ch && y.charCodeAt(y.length - p - 1) == b.charCodeAt(b.length - p - 1); ) d--, p++;
            (h[h.length - 1] = y.slice(0, y.length - p).replace(/^\u200b+/, '')), (h[0] = h[0].slice(d).replace(/\u200b+$/, ''));
            var x = rt(t, d),
                C = rt(a, f.length ? q(f).length - p : 0);
            return h.length > 1 || h[0] || nt(x, C) ? (mo(n.doc, h, x, C, '+input'), !0) : void 0;
        }),
        (Ul.prototype.ensurePolled = function () {
            this.forceCompositionEnd();
        }),
        (Ul.prototype.reset = function () {
            this.forceCompositionEnd();
        }),
        (Ul.prototype.forceCompositionEnd = function () {
            this.composing &&
                (clearTimeout(this.readDOMTimeout), (this.composing = null), this.updateFromDOM(), this.div.blur(), this.div.focus());
        }),
        (Ul.prototype.readFromDOMSoon = function () {
            var e = this;
            null == this.readDOMTimeout &&
                (this.readDOMTimeout = setTimeout(function () {
                    if (((e.readDOMTimeout = null), e.composing)) {
                        if (!e.composing.done) return;
                        e.composing = null;
                    }
                    e.updateFromDOM();
                }, 80));
        }),
        (Ul.prototype.updateFromDOM = function () {
            var e = this;
            (!this.cm.isReadOnly() && this.pollContent()) ||
                ti(this.cm, function () {
                    return dn(e.cm);
                });
        }),
        (Ul.prototype.setUneditable = function (e) {
            e.contentEditable = 'false';
        }),
        (Ul.prototype.onKeyPress = function (e) {
            0 == e.charCode ||
                this.composing ||
                (e.preventDefault(),
                this.cm.isReadOnly() || ri(this.cm, Fl)(this.cm, String.fromCharCode(null == e.charCode ? e.keyCode : e.charCode), 0));
        }),
        (Ul.prototype.readOnlyChanged = function (e) {
            this.div.contentEditable = String('nocursor' != e);
        }),
        (Ul.prototype.onContextMenu = function () {}),
        (Ul.prototype.resetPosition = function () {}),
        (Ul.prototype.needsContentAttribute = !0);
    var Yl = function (e) {
        (this.cm = e),
            (this.prevInput = ''),
            (this.pollingFast = !1),
            (this.polling = new B()),
            (this.hasSelection = !1),
            (this.composing = null);
    };
    (Yl.prototype.init = function (e) {
        var t = this,
            r = this,
            n = this.cm;
        this.createField(e);
        var i = this.textarea;
        function o(e) {
            if (!me(n, e)) {
                if (n.somethingSelected()) Hl({ lineWise: !1, text: n.getSelections() });
                else {
                    if (!n.options.lineWiseCopyCut) return;
                    var t = Il(n);
                    Hl({ lineWise: !0, text: t.text }),
                        'cut' == e.type ? n.setSelections(t.ranges, null, K) : ((r.prevInput = ''), (i.value = t.text.join('\n')), P(i));
                }
                'cut' == e.type && (n.state.cutIncoming = +new Date());
            }
        }
        e.wrapper.insertBefore(this.wrapper, e.wrapper.firstChild),
            v && (i.style.width = '0px'),
            de(i, 'input', function () {
                l && s >= 9 && t.hasSelection && (t.hasSelection = null), r.poll();
            }),
            de(i, 'paste', function (e) {
                me(n, e) || El(e, n) || ((n.state.pasteIncoming = +new Date()), r.fastPoll());
            }),
            de(i, 'cut', o),
            de(i, 'copy', o),
            de(e.scroller, 'paste', function (t) {
                if (!Sr(e, t) && !me(n, t)) {
                    if (!i.dispatchEvent) return (n.state.pasteIncoming = +new Date()), void r.focus();
                    var o = new Event('paste');
                    (o.clipboardData = t.clipboardData), i.dispatchEvent(o);
                }
            }),
            de(e.lineSpace, 'selectstart', function (t) {
                Sr(e, t) || xe(t);
            }),
            de(i, 'compositionstart', function () {
                var e = n.getCursor('from');
                r.composing && r.composing.range.clear(),
                    (r.composing = { start: e, range: n.markText(e, n.getCursor('to'), { className: 'CodeMirror-composing' }) });
            }),
            de(i, 'compositionend', function () {
                r.composing && (r.poll(), r.composing.range.clear(), (r.composing = null));
            });
    }),
        (Yl.prototype.createField = function (e) {
            (this.wrapper = Rl()), (this.textarea = this.wrapper.firstChild);
        }),
        (Yl.prototype.screenReaderLabelChanged = function (e) {
            e ? this.textarea.setAttribute('aria-label', e) : this.textarea.removeAttribute('aria-label');
        }),
        (Yl.prototype.prepareSelection = function () {
            var e = this.cm,
                t = e.display,
                r = e.doc,
                n = bn(e);
            if (e.options.moveInputWithCursor) {
                var i = $r(e, r.sel.primary().head, 'div'),
                    o = t.wrapper.getBoundingClientRect(),
                    l = t.lineDiv.getBoundingClientRect();
                (n.teTop = Math.max(0, Math.min(t.wrapper.clientHeight - 10, i.top + l.top - o.top))),
                    (n.teLeft = Math.max(0, Math.min(t.wrapper.clientWidth - 10, i.left + l.left - o.left)));
            }
            return n;
        }),
        (Yl.prototype.showSelection = function (e) {
            var t = this.cm.display;
            O(t.cursorDiv, e.cursors),
                O(t.selectionDiv, e.selection),
                null != e.teTop && ((this.wrapper.style.top = e.teTop + 'px'), (this.wrapper.style.left = e.teLeft + 'px'));
        }),
        (Yl.prototype.reset = function (e) {
            if (!this.contextMenuPending && !this.composing) {
                var t = this.cm;
                if (t.somethingSelected()) {
                    this.prevInput = '';
                    var r = t.getSelection();
                    (this.textarea.value = r), t.state.focused && P(this.textarea), l && s >= 9 && (this.hasSelection = r);
                } else e || ((this.prevInput = this.textarea.value = ''), l && s >= 9 && (this.hasSelection = null));
            }
        }),
        (Yl.prototype.getField = function () {
            return this.textarea;
        }),
        (Yl.prototype.supportsTouch = function () {
            return !1;
        }),
        (Yl.prototype.focus = function () {
            if ('nocursor' != this.cm.options.readOnly && (!y || H() != this.textarea))
                try {
                    this.textarea.focus();
                } catch (e) {}
        }),
        (Yl.prototype.blur = function () {
            this.textarea.blur();
        }),
        (Yl.prototype.resetPosition = function () {
            this.wrapper.style.top = this.wrapper.style.left = 0;
        }),
        (Yl.prototype.receivedFocus = function () {
            this.slowPoll();
        }),
        (Yl.prototype.slowPoll = function () {
            var e = this;
            this.pollingFast ||
                this.polling.set(this.cm.options.pollInterval, function () {
                    e.poll(), e.cm.state.focused && e.slowPoll();
                });
        }),
        (Yl.prototype.fastPoll = function () {
            var e = !1,
                t = this;
            (t.pollingFast = !0),
                t.polling.set(20, function r() {
                    t.poll() || e ? ((t.pollingFast = !1), t.slowPoll()) : ((e = !0), t.polling.set(60, r));
                });
        }),
        (Yl.prototype.poll = function () {
            var e = this,
                t = this.cm,
                r = this.textarea,
                n = this.prevInput;
            if (
                this.contextMenuPending ||
                !t.state.focused ||
                (Fe(r) && !n && !this.composing) ||
                t.isReadOnly() ||
                t.options.disableInput ||
                t.state.keySeq
            )
                return !1;
            var i = r.value;
            if (i == n && !t.somethingSelected()) return !1;
            if ((l && s >= 9 && this.hasSelection === i) || (b && /[\uf700-\uf7ff]/.test(i))) return t.display.input.reset(), !1;
            if (t.doc.sel == t.display.selForContextMenu) {
                var o = i.charCodeAt(0);
                if ((8203 != o || n || (n = '​'), 8666 == o)) return this.reset(), this.cm.execCommand('undo');
            }
            for (var a = 0, u = Math.min(n.length, i.length); a < u && n.charCodeAt(a) == i.charCodeAt(a); ) ++a;
            return (
                ti(t, function () {
                    Fl(t, i.slice(a), n.length - a, null, e.composing ? '*compose' : null),
                        i.length > 1e3 || i.indexOf('\n') > -1 ? (r.value = e.prevInput = '') : (e.prevInput = i),
                        e.composing &&
                            (e.composing.range.clear(),
                            (e.composing.range = t.markText(e.composing.start, t.getCursor('to'), { className: 'CodeMirror-composing' })));
                }),
                !0
            );
        }),
        (Yl.prototype.ensurePolled = function () {
            this.pollingFast && this.poll() && (this.pollingFast = !1);
        }),
        (Yl.prototype.onKeyPress = function () {
            l && s >= 9 && (this.hasSelection = null), this.fastPoll();
        }),
        (Yl.prototype.onContextMenu = function (e) {
            var t = this,
                r = t.cm,
                n = r.display,
                i = t.textarea;
            t.contextMenuPending && t.contextMenuPending();
            var o = hn(r, e),
                u = n.scroller.scrollTop;
            if (o && !f) {
                r.options.resetSelectionOnContextMenu && -1 == r.doc.sel.contains(o) && ri(r, to)(r.doc, Mi(o), K);
                var c,
                    h = i.style.cssText,
                    d = t.wrapper.style.cssText,
                    p = t.wrapper.offsetParent.getBoundingClientRect();
                if (
                    ((t.wrapper.style.cssText = 'position: static'),
                    (i.style.cssText =
                        'position: absolute; width: 30px; height: 30px;\n      top: ' +
                        (e.clientY - p.top - 5) +
                        'px; left: ' +
                        (e.clientX - p.left - 5) +
                        'px;\n      z-index: 1000; background: ' +
                        (l ? 'rgba(255, 255, 255, .05)' : 'transparent') +
                        ';\n      outline: none; border-width: 0; outline: none; overflow: hidden; opacity: .05; filter: alpha(opacity=5);'),
                    a && (c = window.scrollY),
                    n.input.focus(),
                    a && window.scrollTo(null, c),
                    n.input.reset(),
                    r.somethingSelected() || (i.value = t.prevInput = ' '),
                    (t.contextMenuPending = m),
                    (n.selForContextMenu = r.doc.sel),
                    clearTimeout(n.detectingSelectAll),
                    l && s >= 9 && v(),
                    L)
                ) {
                    Le(e);
                    var g = function () {
                        ge(window, 'mouseup', g), setTimeout(m, 20);
                    };
                    de(window, 'mouseup', g);
                } else setTimeout(m, 50);
            }
            function v() {
                if (null != i.selectionStart) {
                    var e = r.somethingSelected(),
                        o = '​' + (e ? i.value : '');
                    (i.value = '⇚'),
                        (i.value = o),
                        (t.prevInput = e ? '' : '​'),
                        (i.selectionStart = 1),
                        (i.selectionEnd = o.length),
                        (n.selForContextMenu = r.doc.sel);
                }
            }
            function m() {
                if (
                    t.contextMenuPending == m &&
                    ((t.contextMenuPending = !1),
                    (t.wrapper.style.cssText = d),
                    (i.style.cssText = h),
                    l && s < 9 && n.scrollbars.setScrollTop((n.scroller.scrollTop = u)),
                    null != i.selectionStart)
                ) {
                    (!l || (l && s < 9)) && v();
                    var e = 0,
                        o = function () {
                            n.selForContextMenu == r.doc.sel && 0 == i.selectionStart && i.selectionEnd > 0 && '​' == t.prevInput
                                ? ri(r, uo)(r)
                                : e++ < 10
                                ? (n.detectingSelectAll = setTimeout(o, 500))
                                : ((n.selForContextMenu = null), n.input.reset());
                        };
                    n.detectingSelectAll = setTimeout(o, 200);
                }
            }
        }),
        (Yl.prototype.readOnlyChanged = function (e) {
            e || this.reset(), (this.textarea.disabled = 'nocursor' == e), (this.textarea.readOnly = !!e);
        }),
        (Yl.prototype.setUneditable = function () {}),
        (Yl.prototype.needsContentAttribute = !1),
        (function (e) {
            var t = e.optionHandlers;
            function r(r, n, i, o) {
                (e.defaults[r] = n),
                    i &&
                        (t[r] = o
                            ? function (e, t, r) {
                                  r != Ll && i(e, t, r);
                              }
                            : i);
            }
            (e.defineOption = r),
                (e.Init = Ll),
                r(
                    'value',
                    '',
                    function (e, t) {
                        return e.setValue(t);
                    },
                    !0
                ),
                r(
                    'mode',
                    null,
                    function (e, t) {
                        (e.doc.modeOption = t), Wi(e);
                    },
                    !0
                ),
                r('indentUnit', 2, Wi, !0),
                r('indentWithTabs', !1),
                r('smartIndent', !0),
                r(
                    'tabSize',
                    4,
                    function (e) {
                        Hi(e), Gr(e), dn(e);
                    },
                    !0
                ),
                r('lineSeparator', null, function (e, t) {
                    if (((e.doc.lineSep = t), t)) {
                        var r = [],
                            n = e.doc.first;
                        e.doc.iter(function (e) {
                            for (var i = 0; ; ) {
                                var o = e.text.indexOf(t, i);
                                if (-1 == o) break;
                                (i = o + t.length), r.push(rt(n, o));
                            }
                            n++;
                        });
                        for (var i = r.length - 1; i >= 0; i--) mo(e.doc, t, r[i], rt(r[i].line, r[i].ch + t.length));
                    }
                }),
                r('specialChars', /[\u0000-\u001f\u007f-\u009f\u00ad\u061c\u200b\u200e\u200f\u2028\u2029\ufeff\ufff9-\ufffc]/g, function (
                    e,
                    t,
                    r
                ) {
                    (e.state.specialChars = new RegExp(t.source + (t.test('\t') ? '' : '|\t'), 'g')), r != Ll && e.refresh();
                }),
                r(
                    'specialCharPlaceholder',
                    er,
                    function (e) {
                        return e.refresh();
                    },
                    !0
                ),
                r('electricChars', !0),
                r(
                    'inputStyle',
                    y ? 'contenteditable' : 'textarea',
                    function () {
                        throw new Error('inputStyle can not (yet) be changed in a running editor');
                    },
                    !0
                ),
                r(
                    'spellcheck',
                    !1,
                    function (e, t) {
                        return (e.getInputField().spellcheck = t);
                    },
                    !0
                ),
                r(
                    'autocorrect',
                    !1,
                    function (e, t) {
                        return (e.getInputField().autocorrect = t);
                    },
                    !0
                ),
                r(
                    'autocapitalize',
                    !1,
                    function (e, t) {
                        return (e.getInputField().autocapitalize = t);
                    },
                    !0
                ),
                r('rtlMoveVisually', !x),
                r('wholeLineUpdateBefore', !0),
                r(
                    'theme',
                    'default',
                    function (e) {
                        Sl(e), mi(e);
                    },
                    !0
                ),
                r('keyMap', 'default', function (e, t, r) {
                    var n = Qo(t),
                        i = r != Ll && Qo(r);
                    i && i.detach && i.detach(e, n), n.attach && n.attach(e, i || null);
                }),
                r('extraKeys', null),
                r('configureMouse', null),
                r('lineWrapping', !1, Nl, !0),
                r(
                    'gutters',
                    [],
                    function (e, t) {
                        (e.display.gutterSpecs = gi(t, e.options.lineNumbers)), mi(e);
                    },
                    !0
                ),
                r(
                    'fixedGutter',
                    !0,
                    function (e, t) {
                        (e.display.gutters.style.left = t ? an(e.display) + 'px' : '0'), e.refresh();
                    },
                    !0
                ),
                r(
                    'coverGutterNextToScrollbar',
                    !1,
                    function (e) {
                        return Vn(e);
                    },
                    !0
                ),
                r(
                    'scrollbarStyle',
                    'native',
                    function (e) {
                        Xn(e),
                            Vn(e),
                            e.display.scrollbars.setScrollTop(e.doc.scrollTop),
                            e.display.scrollbars.setScrollLeft(e.doc.scrollLeft);
                    },
                    !0
                ),
                r(
                    'lineNumbers',
                    !1,
                    function (e, t) {
                        (e.display.gutterSpecs = gi(e.options.gutters, t)), mi(e);
                    },
                    !0
                ),
                r('firstLineNumber', 1, mi, !0),
                r(
                    'lineNumberFormatter',
                    function (e) {
                        return e;
                    },
                    mi,
                    !0
                ),
                r('showCursorWhenSelecting', !1, yn, !0),
                r('resetSelectionOnContextMenu', !0),
                r('lineWiseCopyCut', !0),
                r('pasteLinesPerSelection', !0),
                r('selectionsMayTouch', !1),
                r('readOnly', !1, function (e, t) {
                    'nocursor' == t && (Mn(e), e.display.input.blur()), e.display.input.readOnlyChanged(t);
                }),
                r('screenReaderLabel', null, function (e, t) {
                    (t = '' === t ? null : t), e.display.input.screenReaderLabelChanged(t);
                }),
                r(
                    'disableInput',
                    !1,
                    function (e, t) {
                        t || e.display.input.reset();
                    },
                    !0
                ),
                r('dragDrop', !0, Ml),
                r('allowDropFileTypes', null),
                r('cursorBlinkRate', 530),
                r('cursorScrollMargin', 0),
                r('cursorHeight', 1, yn, !0),
                r('singleCursorHeightPerLine', !0, yn, !0),
                r('workTime', 100),
                r('workDelay', 100),
                r('flattenSpans', !0, Hi, !0),
                r('addModeClass', !1, Hi, !0),
                r('pollInterval', 100),
                r('undoDepth', 200, function (e, t) {
                    return (e.doc.history.undoDepth = t);
                }),
                r('historyEventDelay', 1250),
                r(
                    'viewportMargin',
                    10,
                    function (e) {
                        return e.refresh();
                    },
                    !0
                ),
                r('maxHighlightLength', 1e4, Hi, !0),
                r('moveInputWithCursor', !0, function (e, t) {
                    t || e.display.input.resetPosition();
                }),
                r('tabindex', null, function (e, t) {
                    return (e.display.input.getField().tabIndex = t || '');
                }),
                r('autofocus', null),
                r(
                    'direction',
                    'ltr',
                    function (e, t) {
                        return e.doc.setDirection(t);
                    },
                    !0
                ),
                r('phrases', null);
        })(Ol),
        (function (e) {
            var t = e.optionHandlers,
                r = (e.helpers = {});
            (e.prototype = {
                constructor: e,
                focus: function () {
                    window.focus(), this.display.input.focus();
                },
                setOption: function (e, r) {
                    var n = this.options,
                        i = n[e];
                    (n[e] == r && 'mode' != e) ||
                        ((n[e] = r), t.hasOwnProperty(e) && ri(this, t[e])(this, r, i), ve(this, 'optionChange', this, e));
                },
                getOption: function (e) {
                    return this.options[e];
                },
                getDoc: function () {
                    return this.doc;
                },
                addKeyMap: function (e, t) {
                    this.state.keyMaps[t ? 'push' : 'unshift'](Qo(e));
                },
                removeKeyMap: function (e) {
                    for (var t = this.state.keyMaps, r = 0; r < t.length; ++r) if (t[r] == e || t[r].name == e) return t.splice(r, 1), !0;
                },
                addOverlay: ni(function (t, r) {
                    var n = t.token ? t : e.getMode(this.options, t);
                    if (n.startState) throw new Error('Overlays may not be stateful.');
                    !(function (e, t, r) {
                        for (var n = 0, i = r(t); n < e.length && r(e[n]) <= i; ) n++;
                        e.splice(n, 0, t);
                    })(this.state.overlays, { mode: n, modeSpec: t, opaque: r && r.opaque, priority: (r && r.priority) || 0 }, function (
                        e
                    ) {
                        return e.priority;
                    }),
                        this.state.modeGen++,
                        dn(this);
                }),
                removeOverlay: ni(function (e) {
                    for (var t = this.state.overlays, r = 0; r < t.length; ++r) {
                        var n = t[r].modeSpec;
                        if (n == e || ('string' == typeof e && n.name == e)) return t.splice(r, 1), this.state.modeGen++, void dn(this);
                    }
                }),
                indentLine: ni(function (e, t, r) {
                    'string' != typeof t &&
                        'number' != typeof t &&
                        (t = null == t ? (this.options.smartIndent ? 'smart' : 'prev') : t ? 'add' : 'subtract'),
                        et(this.doc, e) && Dl(this, e, t, r);
                }),
                indentSelection: ni(function (e) {
                    for (var t = this.doc.sel.ranges, r = -1, n = 0; n < t.length; n++) {
                        var i = t[n];
                        if (i.empty())
                            i.head.line > r && (Dl(this, i.head.line, e, !0), (r = i.head.line), n == this.doc.sel.primIndex && Hn(this));
                        else {
                            var o = i.from(),
                                l = i.to(),
                                s = Math.max(r, o.line);
                            r = Math.min(this.lastLine(), l.line - (l.ch ? 0 : 1)) + 1;
                            for (var a = s; a < r; ++a) Dl(this, a, e);
                            var u = this.doc.sel.ranges;
                            0 == o.ch && t.length == u.length && u[n].from().ch > 0 && Qi(this.doc, n, new ki(o, u[n].to()), K);
                        }
                    }
                }),
                getTokenAt: function (e, t) {
                    return wt(this, e, t);
                },
                getLineTokens: function (e, t) {
                    return wt(this, rt(e), t, !0);
                },
                getTokenTypeAt: function (e) {
                    e = ut(this.doc, e);
                    var t,
                        r = pt(this, $e(this.doc, e.line)),
                        n = 0,
                        i = (r.length - 1) / 2,
                        o = e.ch;
                    if (0 == o) t = r[2];
                    else
                        for (;;) {
                            var l = (n + i) >> 1;
                            if ((l ? r[2 * l - 1] : 0) >= o) i = l;
                            else {
                                if (!(r[2 * l + 1] < o)) {
                                    t = r[2 * l + 2];
                                    break;
                                }
                                n = l + 1;
                            }
                        }
                    var s = t ? t.indexOf('overlay ') : -1;
                    return s < 0 ? t : 0 == s ? null : t.slice(0, s - 1);
                },
                getModeAt: function (t) {
                    var r = this.doc.mode;
                    return r.innerMode ? e.innerMode(r, this.getTokenAt(t).state).mode : r;
                },
                getHelper: function (e, t) {
                    return this.getHelpers(e, t)[0];
                },
                getHelpers: function (e, t) {
                    var n = [];
                    if (!r.hasOwnProperty(t)) return n;
                    var i = r[t],
                        o = this.getModeAt(e);
                    if ('string' == typeof o[t]) i[o[t]] && n.push(i[o[t]]);
                    else if (o[t])
                        for (var l = 0; l < o[t].length; l++) {
                            var s = i[o[t][l]];
                            s && n.push(s);
                        }
                    else o.helperType && i[o.helperType] ? n.push(i[o.helperType]) : i[o.name] && n.push(i[o.name]);
                    for (var a = 0; a < i._global.length; a++) {
                        var u = i._global[a];
                        u.pred(o, this) && -1 == G(n, u.val) && n.push(u.val);
                    }
                    return n;
                },
                getStateAfter: function (e, t) {
                    var r = this.doc;
                    return gt(this, (e = at(r, null == e ? r.first + r.size - 1 : e)) + 1, t).state;
                },
                cursorCoords: function (e, t) {
                    var r = this.doc.sel.primary();
                    return $r(this, null == e ? r.head : 'object' == typeof e ? ut(this.doc, e) : e ? r.from() : r.to(), t || 'page');
                },
                charCoords: function (e, t) {
                    return Yr(this, ut(this.doc, e), t || 'page');
                },
                coordsChar: function (e, t) {
                    return Zr(this, (e = Xr(this, e, t || 'page')).left, e.top);
                },
                lineAtHeight: function (e, t) {
                    return (e = Xr(this, { top: e, left: 0 }, t || 'page').top), Je(this.doc, e + this.display.viewOffset);
                },
                heightAtLine: function (e, t, r) {
                    var n,
                        i = !1;
                    if ('number' == typeof e) {
                        var o = this.doc.first + this.doc.size - 1;
                        e < this.doc.first ? (e = this.doc.first) : e > o && ((e = o), (i = !0)), (n = $e(this.doc, e));
                    } else n = e;
                    return jr(this, n, { top: 0, left: 0 }, t || 'page', r || i).top + (i ? this.doc.height - jt(n) : 0);
                },
                defaultTextHeight: function () {
                    return on(this.display);
                },
                defaultCharWidth: function () {
                    return ln(this.display);
                },
                getViewport: function () {
                    return { from: this.display.viewFrom, to: this.display.viewTo };
                },
                addWidget: function (e, t, r, n, i) {
                    var o,
                        l,
                        s,
                        a = this.display,
                        u = (e = $r(this, ut(this.doc, e))).bottom,
                        c = e.left;
                    if (
                        ((t.style.position = 'absolute'),
                        t.setAttribute('cm-ignore-events', 'true'),
                        this.display.input.setUneditable(t),
                        a.sizer.appendChild(t),
                        'over' == n)
                    )
                        u = e.top;
                    else if ('above' == n || 'near' == n) {
                        var h = Math.max(a.wrapper.clientHeight, this.doc.height),
                            f = Math.max(a.sizer.clientWidth, a.lineSpace.clientWidth);
                        ('above' == n || e.bottom + t.offsetHeight > h) && e.top > t.offsetHeight
                            ? (u = e.top - t.offsetHeight)
                            : e.bottom + t.offsetHeight <= h && (u = e.bottom),
                            c + t.offsetWidth > f && (c = f - t.offsetWidth);
                    }
                    (t.style.top = u + 'px'),
                        (t.style.left = t.style.right = ''),
                        'right' == i
                            ? ((c = a.sizer.clientWidth - t.offsetWidth), (t.style.right = '0px'))
                            : ('left' == i ? (c = 0) : 'middle' == i && (c = (a.sizer.clientWidth - t.offsetWidth) / 2),
                              (t.style.left = c + 'px')),
                        r &&
                            ((o = this),
                            (l = { left: c, top: u, right: c + t.offsetWidth, bottom: u + t.offsetHeight }),
                            null != (s = Dn(o, l)).scrollTop && In(o, s.scrollTop),
                            null != s.scrollLeft && Rn(o, s.scrollLeft));
                },
                triggerOnKeyDown: ni(fl),
                triggerOnKeyPress: ni(pl),
                triggerOnKeyUp: dl,
                triggerOnMouseDown: ni(yl),
                execCommand: function (e) {
                    if (nl.hasOwnProperty(e)) return nl[e].call(null, this);
                },
                triggerElectric: ni(function (e) {
                    Pl(this, e);
                }),
                findPosH: function (e, t, r, n) {
                    var i = 1;
                    t < 0 && ((i = -1), (t = -t));
                    for (var o = ut(this.doc, e), l = 0; l < t && !(o = Bl(this.doc, o, i, r, n)).hitSide; ++l);
                    return o;
                },
                moveH: ni(function (e, t) {
                    var r = this;
                    this.extendSelectionsBy(function (n) {
                        return r.display.shift || r.doc.extend || n.empty()
                            ? Bl(r.doc, n.head, e, t, r.options.rtlMoveVisually)
                            : e < 0
                            ? n.from()
                            : n.to();
                    }, X);
                }),
                deleteH: ni(function (e, t) {
                    var r = this.doc.sel,
                        n = this.doc;
                    r.somethingSelected()
                        ? n.replaceSelection('', null, '+delete')
                        : Jo(this, function (r) {
                              var i = Bl(n, r.head, e, t, !1);
                              return e < 0 ? { from: i, to: r.head } : { from: r.head, to: i };
                          });
                }),
                findPosV: function (e, t, r, n) {
                    var i = 1,
                        o = n;
                    t < 0 && ((i = -1), (t = -t));
                    for (var l = ut(this.doc, e), s = 0; s < t; ++s) {
                        var a = $r(this, l, 'div');
                        if ((null == o ? (o = a.left) : (a.left = o), (l = Gl(this, a, i, r)).hitSide)) break;
                    }
                    return l;
                },
                moveV: ni(function (e, t) {
                    var r = this,
                        n = this.doc,
                        i = [],
                        o = !this.display.shift && !n.extend && n.sel.somethingSelected();
                    if (
                        (n.extendSelectionsBy(function (l) {
                            if (o) return e < 0 ? l.from() : l.to();
                            var s = $r(r, l.head, 'div');
                            null != l.goalColumn && (s.left = l.goalColumn), i.push(s.left);
                            var a = Gl(r, s, e, t);
                            return 'page' == t && l == n.sel.primary() && Wn(r, Yr(r, a, 'div').top - s.top), a;
                        }, X),
                        i.length)
                    )
                        for (var l = 0; l < n.sel.ranges.length; l++) n.sel.ranges[l].goalColumn = i[l];
                }),
                findWordAt: function (e) {
                    var t = $e(this.doc, e.line).text,
                        r = e.ch,
                        n = e.ch;
                    if (t) {
                        var i = this.getHelper(e, 'wordChars');
                        ('before' != e.sticky && n != t.length) || !r ? ++n : --r;
                        for (
                            var o = t.charAt(r),
                                l = re(o, i)
                                    ? function (e) {
                                          return re(e, i);
                                      }
                                    : /\s/.test(o)
                                    ? function (e) {
                                          return /\s/.test(e);
                                      }
                                    : function (e) {
                                          return !/\s/.test(e) && !re(e);
                                      };
                            r > 0 && l(t.charAt(r - 1));

                        )
                            --r;
                        for (; n < t.length && l(t.charAt(n)); ) ++n;
                    }
                    return new ki(rt(e.line, r), rt(e.line, n));
                },
                toggleOverwrite: function (e) {
                    (null != e && e == this.state.overwrite) ||
                        ((this.state.overwrite = !this.state.overwrite)
                            ? F(this.display.cursorDiv, 'CodeMirror-overwrite')
                            : M(this.display.cursorDiv, 'CodeMirror-overwrite'),
                        ve(this, 'overwriteToggle', this, this.state.overwrite));
                },
                hasFocus: function () {
                    return this.display.input.getField() == H();
                },
                isReadOnly: function () {
                    return !(!this.options.readOnly && !this.doc.cantEdit);
                },
                scrollTo: ni(function (e, t) {
                    Fn(this, e, t);
                }),
                getScrollInfo: function () {
                    var e = this.display.scroller;
                    return {
                        left: e.scrollLeft,
                        top: e.scrollTop,
                        height: e.scrollHeight - Mr(this) - this.display.barHeight,
                        width: e.scrollWidth - Mr(this) - this.display.barWidth,
                        clientHeight: Or(this),
                        clientWidth: Nr(this),
                    };
                },
                scrollIntoView: ni(function (e, t) {
                    null == e
                        ? ((e = { from: this.doc.sel.primary().head, to: null }), null == t && (t = this.options.cursorScrollMargin))
                        : 'number' == typeof e
                        ? (e = { from: rt(e, 0), to: null })
                        : null == e.from && (e = { from: e, to: null }),
                        e.to || (e.to = e.from),
                        (e.margin = t || 0),
                        null != e.from.line
                            ? (function (e, t) {
                                  En(e), (e.curOp.scrollToPos = t);
                              })(this, e)
                            : Pn(this, e.from, e.to, e.margin);
                }),
                setSize: ni(function (e, t) {
                    var r = this,
                        n = function (e) {
                            return 'number' == typeof e || /^\d+$/.test(String(e)) ? e + 'px' : e;
                        };
                    null != e && (this.display.wrapper.style.width = n(e)),
                        null != t && (this.display.wrapper.style.height = n(t)),
                        this.options.lineWrapping && Br(this);
                    var i = this.display.viewFrom;
                    this.doc.iter(i, this.display.viewTo, function (e) {
                        if (e.widgets)
                            for (var t = 0; t < e.widgets.length; t++)
                                if (e.widgets[t].noHScroll) {
                                    pn(r, i, 'widget');
                                    break;
                                }
                        ++i;
                    }),
                        (this.curOp.forceUpdate = !0),
                        ve(this, 'refresh', this);
                }),
                operation: function (e) {
                    return ti(this, e);
                },
                startOperation: function () {
                    return $n(this);
                },
                endOperation: function () {
                    return _n(this);
                },
                refresh: ni(function () {
                    var e = this.display.cachedTextHeight;
                    dn(this),
                        (this.curOp.forceUpdate = !0),
                        Gr(this),
                        Fn(this, this.doc.scrollLeft, this.doc.scrollTop),
                        hi(this.display),
                        (null == e || Math.abs(e - on(this.display)) > 0.5 || this.options.lineWrapping) && cn(this),
                        ve(this, 'refresh', this);
                }),
                swapDoc: ni(function (e) {
                    var t = this.doc;
                    return (
                        (t.cm = null),
                        this.state.selectingText && this.state.selectingText(),
                        Ii(this, e),
                        Gr(this),
                        this.display.input.reset(),
                        Fn(this, e.scrollLeft, e.scrollTop),
                        (this.curOp.forceScroll = !0),
                        ur(this, 'swapDoc', this, t),
                        t
                    );
                }),
                phrase: function (e) {
                    var t = this.options.phrases;
                    return t && Object.prototype.hasOwnProperty.call(t, e) ? t[e] : e;
                },
                getInputField: function () {
                    return this.display.input.getField();
                },
                getWrapperElement: function () {
                    return this.display.wrapper;
                },
                getScrollerElement: function () {
                    return this.display.scroller;
                },
                getGutterElement: function () {
                    return this.display.gutters;
                },
            }),
                we(e),
                (e.registerHelper = function (t, n, i) {
                    r.hasOwnProperty(t) || (r[t] = e[t] = { _global: [] }), (r[t][n] = i);
                }),
                (e.registerGlobalHelper = function (t, n, i, o) {
                    e.registerHelper(t, n, o), r[t]._global.push({ pred: i, val: o });
                });
        })(Ol);
    var $l = 'iter insert remove copy getEditor constructor'.split(' ');
    for (var _l in Ho.prototype)
        Ho.prototype.hasOwnProperty(_l) &&
            G($l, _l) < 0 &&
            (Ol.prototype[_l] = (function (e) {
                return function () {
                    return e.apply(this.doc, arguments);
                };
            })(Ho.prototype[_l]));
    return (
        we(Ho),
        (Ol.inputStyles = { textarea: Yl, contenteditable: Ul }),
        (Ol.defineMode = function (e) {
            Ol.defaults.mode || 'null' == e || (Ol.defaults.mode = e), Re.apply(this, arguments);
        }),
        (Ol.defineMIME = function (e, t) {
            ze[e] = t;
        }),
        Ol.defineMode('null', function () {
            return {
                token: function (e) {
                    return e.skipToEnd();
                },
            };
        }),
        Ol.defineMIME('text/plain', 'null'),
        (Ol.defineExtension = function (e, t) {
            Ol.prototype[e] = t;
        }),
        (Ol.defineDocExtension = function (e, t) {
            Ho.prototype[e] = t;
        }),
        (Ol.fromTextArea = function (e, t) {
            if (
                (((t = t ? z(t) : {}).value = e.value),
                !t.tabindex && e.tabIndex && (t.tabindex = e.tabIndex),
                !t.placeholder && e.placeholder && (t.placeholder = e.placeholder),
                null == t.autofocus)
            ) {
                var r = H();
                t.autofocus = r == e || (null != e.getAttribute('autofocus') && r == document.body);
            }
            function n() {
                e.value = s.getValue();
            }
            var i;
            if (e.form && (de(e.form, 'submit', n), !t.leaveSubmitMethodAlone)) {
                var o = e.form;
                i = o.submit;
                try {
                    var l = (o.submit = function () {
                        n(), (o.submit = i), o.submit(), (o.submit = l);
                    });
                } catch (e) {}
            }
            (t.finishInit = function (r) {
                (r.save = n),
                    (r.getTextArea = function () {
                        return e;
                    }),
                    (r.toTextArea = function () {
                        (r.toTextArea = isNaN),
                            n(),
                            e.parentNode.removeChild(r.getWrapperElement()),
                            (e.style.display = ''),
                            e.form &&
                                (ge(e.form, 'submit', n),
                                t.leaveSubmitMethodAlone || 'function' != typeof e.form.submit || (e.form.submit = i));
                    });
            }),
                (e.style.display = 'none');
            var s = Ol(function (t) {
                return e.parentNode.insertBefore(t, e.nextSibling);
            }, t);
            return s;
        }),
        (function (e) {
            (e.off = ge),
                (e.on = de),
                (e.wheelEventPixels = Ci),
                (e.Doc = Ho),
                (e.splitLines = He),
                (e.countColumn = R),
                (e.findColumn = Y),
                (e.isWordChar = te),
                (e.Pass = V),
                (e.signal = ve),
                (e.Line = $t),
                (e.changeEnd = Ni),
                (e.scrollbarModel = jn),
                (e.Pos = rt),
                (e.cmpPos = nt),
                (e.modes = Ie),
                (e.mimeModes = ze),
                (e.resolveMode = Be),
                (e.getMode = Ge),
                (e.modeExtensions = Ue),
                (e.extendMode = Ve),
                (e.copyState = Ke),
                (e.startState = Xe),
                (e.innerMode = je),
                (e.commands = nl),
                (e.keyMap = jo),
                (e.keyName = Zo),
                (e.isModifierKey = _o),
                (e.lookupKey = $o),
                (e.normalizeKeyMap = Yo),
                (e.StringStream = Ye),
                (e.SharedTextMarker = Oo),
                (e.TextMarker = Mo),
                (e.LineWidget = Lo),
                (e.e_preventDefault = xe),
                (e.e_stopPropagation = Ce),
                (e.e_stop = Le),
                (e.addClass = F),
                (e.contains = W),
                (e.rmClass = M),
                (e.keyNames = Go);
        })(Ol),
        (Ol.version = '5.65.5'),
        Ol
    );
});
/**
 * Minified by jsDelivr using Terser v5.19.2.
 * Original file: /npm/codemirror@5.65.5/addon/mode/loadmode.js
 *
 * Do NOT use SRI with dynamically generated files! More information: https://www.jsdelivr.com/using-sri-with-dynamic-files
 */
!(function (e) {
    'object' == typeof exports && 'object' == typeof module
        ? e(require('../../lib/codemirror'), 'cjs')
        : 'function' == typeof define && define.amd
        ? define(['../../lib/codemirror'], function (o) {
              e(o, 'amd');
          })
        : e(CodeMirror, 'plain');
})(function (e, o) {
    e.modeURL || (e.modeURL = '../mode/%N/%N.js');
    var r = {};
    function n(o, r, n) {
        var t = e.modes[o],
            i = t && t.dependencies;
        if (!i) return r();
        for (var d = [], a = 0; a < i.length; ++a) e.modes.hasOwnProperty(i[a]) || d.push(i[a]);
        if (!d.length) return r();
        var f = (function (e, o) {
            var r = o;
            return function () {
                0 == --r && e();
            };
        })(r, d.length);
        for (a = 0; a < d.length; ++a) e.requireMode(d[a], f, n);
    }
    (e.requireMode = function (t, i, d) {
        if (('string' != typeof t && (t = t.name), e.modes.hasOwnProperty(t))) return n(t, i, d);
        if (r.hasOwnProperty(t)) return r[t].push(i);
        var a = d && d.path ? d.path(t) : e.modeURL.replace(/%N/g, t);
        if (d && d.loadMode)
            d.loadMode(a, function () {
                n(t, i, d);
            });
        else if ('plain' == o) {
            var f = document.createElement('script');
            f.src = a;
            var u = document.getElementsByTagName('script')[0],
                c = (r[t] = [i]);
            e.on(f, 'load', function () {
                n(
                    t,
                    function () {
                        for (var e = 0; e < c.length; ++e) c[e]();
                    },
                    d
                );
            }),
                u.parentNode.insertBefore(f, u);
        } else 'cjs' == o ? (require(a), i()) : 'amd' == o && requirejs([a], i);
    }),
        (e.autoLoadMode = function (o, r, n) {
            e.modes.hasOwnProperty(r) ||
                e.requireMode(
                    r,
                    function () {
                        o.setOption('mode', o.getOption('mode'));
                    },
                    n
                );
        });
});
/**
 * Minified by jsDelivr using Terser v5.19.2.
 * Original file: /npm/codemirror@5.65.5/addon/mode/overlay.js
 *
 * Do NOT use SRI with dynamically generated files! More information: https://www.jsdelivr.com/using-sri-with-dynamic-files
 */
!(function (e) {
    'object' == typeof exports && 'object' == typeof module
        ? e(require('../../lib/codemirror'))
        : 'function' == typeof define && define.amd
        ? define(['../../lib/codemirror'], e)
        : e(CodeMirror);
})(function (e) {
    'use strict';
    e.overlayMode = function (o, r, a) {
        return {
            startState: function () {
                return {
                    base: e.startState(o),
                    overlay: e.startState(r),
                    basePos: 0,
                    baseCur: null,
                    overlayPos: 0,
                    overlayCur: null,
                    streamSeen: null,
                };
            },
            copyState: function (a) {
                return {
                    base: e.copyState(o, a.base),
                    overlay: e.copyState(r, a.overlay),
                    basePos: a.basePos,
                    baseCur: null,
                    overlayPos: a.overlayPos,
                    overlayCur: null,
                };
            },
            token: function (e, n) {
                return (
                    (e != n.streamSeen || Math.min(n.basePos, n.overlayPos) < e.start) &&
                        ((n.streamSeen = e), (n.basePos = n.overlayPos = e.start)),
                    e.start == n.basePos && ((n.baseCur = o.token(e, n.base)), (n.basePos = e.pos)),
                    e.start == n.overlayPos && ((e.pos = e.start), (n.overlayCur = r.token(e, n.overlay)), (n.overlayPos = e.pos)),
                    (e.pos = Math.min(n.basePos, n.overlayPos)),
                    null == n.overlayCur
                        ? n.baseCur
                        : (null != n.baseCur && n.overlay.combineTokens) || (a && null == n.overlay.combineTokens)
                        ? n.baseCur + ' ' + n.overlayCur
                        : n.overlayCur
                );
            },
            indent:
                o.indent &&
                function (e, r, a) {
                    return o.indent(e.base, r, a);
                },
            electricChars: o.electricChars,
            innerMode: function (e) {
                return { state: e.base, mode: o };
            },
            blankLine: function (e) {
                var n, t;
                return (
                    o.blankLine && (n = o.blankLine(e.base)),
                    r.blankLine && (t = r.blankLine(e.overlay)),
                    null == t ? n : a && null != n ? n + ' ' + t : t
                );
            },
        };
    };
});
/**
 * Minified by jsDelivr using Terser v5.19.2.
 * Original file: /npm/codemirror@5.65.5/addon/mode/multiplex.js
 *
 * Do NOT use SRI with dynamically generated files! More information: https://www.jsdelivr.com/using-sri-with-dynamic-files
 */
!(function (e) {
    'object' == typeof exports && 'object' == typeof module
        ? e(require('../../lib/codemirror'))
        : 'function' == typeof define && define.amd
        ? define(['../../lib/codemirror'], e)
        : e(CodeMirror);
})(function (e) {
    'use strict';
    e.multiplexingMode = function (n) {
        var t = Array.prototype.slice.call(arguments, 1);
        function r(e, n, t, r) {
            if ('string' == typeof n) {
                var i = e.indexOf(n, t);
                return r && i > -1 ? i + n.length : i;
            }
            var o = n.exec(t ? e.slice(t) : e);
            return o ? o.index + t + (r ? o[0].length : 0) : -1;
        }
        return {
            startState: function () {
                return { outer: e.startState(n), innerActive: null, inner: null, startingInner: !1 };
            },
            copyState: function (t) {
                return {
                    outer: e.copyState(n, t.outer),
                    innerActive: t.innerActive,
                    inner: t.innerActive && e.copyState(t.innerActive.mode, t.inner),
                    startingInner: t.startingInner,
                };
            },
            token: function (i, o) {
                if (o.innerActive) {
                    var l = o.innerActive;
                    a = i.string;
                    if (!l.close && i.sol()) return (o.innerActive = o.inner = null), this.token(i, o);
                    if ((v = l.close && !o.startingInner ? r(a, l.close, i.pos, l.parseDelimiters) : -1) == i.pos && !l.parseDelimiters)
                        return (
                            i.match(l.close), (o.innerActive = o.inner = null), l.delimStyle && l.delimStyle + ' ' + l.delimStyle + '-close'
                        );
                    v > -1 && (i.string = a.slice(0, v));
                    var c = l.mode.token(i, o.inner);
                    return (
                        v > -1 ? (i.string = a) : i.pos > i.start && (o.startingInner = !1),
                        v == i.pos && l.parseDelimiters && (o.innerActive = o.inner = null),
                        l.innerStyle && (c = c ? c + ' ' + l.innerStyle : l.innerStyle),
                        c
                    );
                }
                for (var s = 1 / 0, a = i.string, u = 0; u < t.length; ++u) {
                    var v,
                        d = t[u];
                    if ((v = r(a, d.open, i.pos)) == i.pos) {
                        d.parseDelimiters || i.match(d.open), (o.startingInner = !!d.parseDelimiters), (o.innerActive = d);
                        var f = 0;
                        if (n.indent) {
                            var m = n.indent(o.outer, '', '');
                            m !== e.Pass && (f = m);
                        }
                        return (o.inner = e.startState(d.mode, f)), d.delimStyle && d.delimStyle + ' ' + d.delimStyle + '-open';
                    }
                    -1 != v && v < s && (s = v);
                }
                s != 1 / 0 && (i.string = a.slice(0, s));
                var p = n.token(i, o.outer);
                return s != 1 / 0 && (i.string = a), p;
            },
            indent: function (t, r, i) {
                var o = t.innerActive ? t.innerActive.mode : n;
                return o.indent ? o.indent(t.innerActive ? t.inner : t.outer, r, i) : e.Pass;
            },
            blankLine: function (r) {
                var i = r.innerActive ? r.innerActive.mode : n;
                if ((i.blankLine && i.blankLine(r.innerActive ? r.inner : r.outer), r.innerActive))
                    '\n' === r.innerActive.close && (r.innerActive = r.inner = null);
                else
                    for (var o = 0; o < t.length; ++o) {
                        var l = t[o];
                        '\n' === l.open &&
                            ((r.innerActive = l), (r.inner = e.startState(l.mode, i.indent ? i.indent(r.outer, '', '') : 0)));
                    }
            },
            electricChars: n.electricChars,
            innerMode: function (e) {
                return e.inner ? { state: e.inner, mode: e.innerActive.mode } : { state: e.outer, mode: n };
            },
        };
    };
});
/**
 * Minified by jsDelivr using Terser v5.19.2.
 * Original file: /npm/codemirror@5.65.5/addon/mode/simple.js
 *
 * Do NOT use SRI with dynamically generated files! More information: https://www.jsdelivr.com/using-sri-with-dynamic-files
 */
!(function (e) {
    'object' == typeof exports && 'object' == typeof module
        ? e(require('../../lib/codemirror'))
        : 'function' == typeof define && define.amd
        ? define(['../../lib/codemirror'], e)
        : e(CodeMirror);
})(function (e) {
    'use strict';
    function t(e, t) {
        if (!e.hasOwnProperty(t)) throw new Error('Undefined state ' + t + ' in simple mode');
    }
    function n(e, t) {
        if (!e) return /(?:)/;
        var n = '';
        return (
            e instanceof RegExp ? (e.ignoreCase && (n = 'i'), e.unicode && (n += 'u'), (e = e.source)) : (e = String(e)),
            new RegExp((!1 === t ? '' : '^') + '(?:' + e + ')', n)
        );
    }
    function a(e, a) {
        (e.next || e.push) && t(a, e.next || e.push),
            (this.regex = n(e.regex)),
            (this.token = (function (e) {
                if (!e) return null;
                if (e.apply) return e;
                if ('string' == typeof e) return e.replace(/\./g, ' ');
                for (var t = [], n = 0; n < e.length; n++) t.push(e[n] && e[n].replace(/\./g, ' '));
                return t;
            })(e.token)),
            (this.data = e);
    }
    function r(e, t) {
        return function (n, a) {
            if (a.pending) {
                var r = a.pending.shift();
                return 0 == a.pending.length && (a.pending = null), (n.pos += r.text.length), r.token;
            }
            if (a.local) {
                if (a.local.end && n.match(a.local.end)) {
                    var o = a.local.endToken || null;
                    return (a.local = a.localState = null), o;
                }
                var l;
                o = a.local.mode.token(n, a.localState);
                return a.local.endScan && (l = a.local.endScan.exec(n.current())) && (n.pos = n.start + l.index), o;
            }
            for (var s = e[a.state], d = 0; d < s.length; d++) {
                var c = s[d],
                    u = (!c.data.sol || n.sol()) && n.match(c.regex);
                if (u) {
                    c.data.next
                        ? (a.state = c.data.next)
                        : c.data.push
                        ? ((a.stack || (a.stack = [])).push(a.state), (a.state = c.data.push))
                        : c.data.pop && a.stack && a.stack.length && (a.state = a.stack.pop()),
                        c.data.mode && i(t, a, c.data.mode, c.token),
                        c.data.indent && a.indent.push(n.indentation() + t.indentUnit),
                        c.data.dedent && a.indent.pop();
                    var p = c.token;
                    if ((p && p.apply && (p = p(u)), u.length > 2 && c.token && 'string' != typeof c.token)) {
                        for (var f = 2; f < u.length; f++)
                            u[f] && (a.pending || (a.pending = [])).push({ text: u[f], token: c.token[f - 1] });
                        return n.backUp(u[0].length - (u[1] ? u[1].length : 0)), p[0];
                    }
                    return p && p.join ? p[0] : p;
                }
            }
            return n.next(), null;
        };
    }
    function o(e, t) {
        if (e === t) return !0;
        if (!e || 'object' != typeof e || !t || 'object' != typeof t) return !1;
        var n = 0;
        for (var a in e)
            if (e.hasOwnProperty(a)) {
                if (!t.hasOwnProperty(a) || !o(e[a], t[a])) return !1;
                n++;
            }
        for (var a in t) t.hasOwnProperty(a) && n--;
        return 0 == n;
    }
    function i(t, a, r, i) {
        var l;
        if (r.persistent) for (var s = a.persistentStates; s && !l; s = s.next) (r.spec ? o(r.spec, s.spec) : r.mode == s.mode) && (l = s);
        var d = l ? l.mode : r.mode || e.getMode(t, r.spec),
            c = l ? l.state : e.startState(d);
        r.persistent && !l && (a.persistentStates = { mode: d, spec: r.spec, state: c, next: a.persistentStates }),
            (a.localState = c),
            (a.local = {
                mode: d,
                end: r.end && n(r.end),
                endScan: r.end && !1 !== r.forceEnd && n(r.end, !1),
                endToken: i && i.join ? i[i.length - 1] : i,
            });
    }
    function l(t, n) {
        return function (a, r, o) {
            if (a.local && a.local.mode.indent) return a.local.mode.indent(a.localState, r, o);
            if (
                null == a.indent ||
                a.local ||
                (n.dontIndentStates &&
                    (function (e, t) {
                        for (var n = 0; n < t.length; n++) if (t[n] === e) return !0;
                    })(a.state, n.dontIndentStates) > -1)
            )
                return e.Pass;
            var i = a.indent.length - 1,
                l = t[a.state];
            e: for (;;) {
                for (var s = 0; s < l.length; s++) {
                    var d = l[s];
                    if (d.data.dedent && !1 !== d.data.dedentIfLineStart) {
                        var c = d.regex.exec(r);
                        if (c && c[0]) {
                            i--, (d.next || d.push) && (l = t[d.next || d.push]), (r = r.slice(c[0].length));
                            continue e;
                        }
                    }
                }
                break;
            }
            return i < 0 ? 0 : a.indent[i];
        };
    }
    (e.defineSimpleMode = function (t, n) {
        e.defineMode(t, function (t) {
            return e.simpleMode(t, n);
        });
    }),
        (e.simpleMode = function (n, o) {
            t(o, 'start');
            var i = {},
                s = o.meta || {},
                d = !1;
            for (var c in o)
                if (c != s && o.hasOwnProperty(c))
                    for (var u = (i[c] = []), p = o[c], f = 0; f < p.length; f++) {
                        var h = p[f];
                        u.push(new a(h, o)), (h.indent || h.dedent) && (d = !0);
                    }
            var g = {
                startState: function () {
                    return { state: 'start', pending: null, local: null, localState: null, indent: d ? [] : null };
                },
                copyState: function (t) {
                    var n = { state: t.state, pending: t.pending, local: t.local, localState: null, indent: t.indent && t.indent.slice(0) };
                    t.localState && (n.localState = e.copyState(t.local.mode, t.localState)), t.stack && (n.stack = t.stack.slice(0));
                    for (var a = t.persistentStates; a; a = a.next)
                        n.persistentStates = {
                            mode: a.mode,
                            spec: a.spec,
                            state: a.state == t.localState ? n.localState : e.copyState(a.mode, a.state),
                            next: n.persistentStates,
                        };
                    return n;
                },
                token: r(i, n),
                innerMode: function (e) {
                    return e.local && { mode: e.local.mode, state: e.localState };
                },
                indent: l(i, s),
            };
            if (s) for (var S in s) s.hasOwnProperty(S) && (g[S] = s[S]);
            return g;
        });
});
// CodeMirror, copyright (c) by Marijn Haverbeke and others
// Distributed under an MIT license: https://codemirror.net/LICENSE

(function (mod) {
    if (typeof exports == 'object' && typeof module == 'object')
        // CommonJS
        mod(require('../../lib/codemirror'));
    else if (typeof define == 'function' && define.amd)
        // AMD
        define(['../../lib/codemirror'], mod);
    // Plain browser env
    else mod(CodeMirror);
})(function (CodeMirror) {
    'use strict';

    function Bar(cls, orientation, scroll) {
        this.orientation = orientation;
        this.scroll = scroll;
        this.screen = this.total = this.size = 1;
        this.pos = 0;

        this.node = document.createElement('div');
        this.node.className = cls + '-' + orientation;
        this.inner = this.node.appendChild(document.createElement('div'));

        var self = this;
        CodeMirror.on(this.inner, 'mousedown', function (e) {
            if (e.which != 1) return;
            CodeMirror.e_preventDefault(e);
            var axis = self.orientation == 'horizontal' ? 'pageX' : 'pageY';
            var start = e[axis],
                startpos = self.pos;
            function done() {
                CodeMirror.off(document, 'mousemove', move);
                CodeMirror.off(document, 'mouseup', done);
            }
            function move(e) {
                if (e.which != 1) return done();
                self.moveTo(startpos + (e[axis] - start) * (self.total / self.size));
            }
            CodeMirror.on(document, 'mousemove', move);
            CodeMirror.on(document, 'mouseup', done);
        });

        CodeMirror.on(this.node, 'click', function (e) {
            CodeMirror.e_preventDefault(e);
            var innerBox = self.inner.getBoundingClientRect(),
                where;
            if (self.orientation == 'horizontal') where = e.clientX < innerBox.left ? -1 : e.clientX > innerBox.right ? 1 : 0;
            else where = e.clientY < innerBox.top ? -1 : e.clientY > innerBox.bottom ? 1 : 0;
            self.moveTo(self.pos + where * self.screen);
        });

        function onWheel(e) {
            var moved = CodeMirror.wheelEventPixels(e)[self.orientation == 'horizontal' ? 'x' : 'y'];
            var oldPos = self.pos;
            self.moveTo(self.pos + moved);
            if (self.pos != oldPos) CodeMirror.e_preventDefault(e);
        }
        CodeMirror.on(this.node, 'mousewheel', onWheel);
        CodeMirror.on(this.node, 'DOMMouseScroll', onWheel);
    }

    Bar.prototype.setPos = function (pos, force) {
        if (pos < 0) pos = 0;
        if (pos > this.total - this.screen) pos = this.total - this.screen;
        if (!force && pos == this.pos) return false;
        this.pos = pos;
        this.inner.style[this.orientation == 'horizontal' ? 'left' : 'top'] = pos * (this.size / this.total) + 'px';
        return true;
    };

    Bar.prototype.moveTo = function (pos) {
        if (this.setPos(pos)) this.scroll(pos, this.orientation);
    };

    var minButtonSize = 10;

    Bar.prototype.update = function (scrollSize, clientSize, barSize) {
        var sizeChanged = this.screen != clientSize || this.total != scrollSize || this.size != barSize;
        if (sizeChanged) {
            this.screen = clientSize;
            this.total = scrollSize;
            this.size = barSize;
        }

        var buttonSize = this.screen * (this.size / this.total);
        if (buttonSize < minButtonSize) {
            this.size -= minButtonSize - buttonSize;
            buttonSize = minButtonSize;
        }
        this.inner.style[this.orientation == 'horizontal' ? 'width' : 'height'] = buttonSize + 'px';
        this.setPos(this.pos, sizeChanged);
    };

    function SimpleScrollbars(cls, place, scroll) {
        this.addClass = cls;
        this.horiz = new Bar(cls, 'horizontal', scroll);
        place(this.horiz.node);
        this.vert = new Bar(cls, 'vertical', scroll);
        place(this.vert.node);
        this.width = null;
    }

    SimpleScrollbars.prototype.update = function (measure) {
        if (this.width == null) {
            var style = window.getComputedStyle ? window.getComputedStyle(this.horiz.node) : this.horiz.node.currentStyle;
            if (style) this.width = parseInt(style.height);
        }
        var width = this.width || 0;

        var needsH = measure.scrollWidth > measure.clientWidth + 1;
        var needsV = measure.scrollHeight > measure.clientHeight + 1;
        this.vert.node.style.display = needsV ? 'block' : 'none';
        this.horiz.node.style.display = needsH ? 'block' : 'none';

        if (needsV) {
            this.vert.update(measure.scrollHeight, measure.clientHeight, measure.viewHeight - (needsH ? width : 0));
            this.vert.node.style.bottom = needsH ? width + 'px' : '0';
        }
        if (needsH) {
            this.horiz.update(measure.scrollWidth, measure.clientWidth, measure.viewWidth - (needsV ? width : 0) - measure.barLeft);
            this.horiz.node.style.right = needsV ? width + 'px' : '0';
            this.horiz.node.style.left = measure.barLeft + 'px';
        }

        return { right: needsV ? width : 0, bottom: needsH ? width : 0 };
    };

    SimpleScrollbars.prototype.setScrollTop = function (pos) {
        this.vert.setPos(pos);
    };

    SimpleScrollbars.prototype.setScrollLeft = function (pos) {
        this.horiz.setPos(pos);
    };

    SimpleScrollbars.prototype.clear = function () {
        var parent = this.horiz.node.parentNode;
        parent.removeChild(this.horiz.node);
        parent.removeChild(this.vert.node);
    };

    CodeMirror.scrollbarModel.simple = function (place, scroll) {
        return new SimpleScrollbars('CodeMirror-simplescroll', place, scroll);
    };
    CodeMirror.scrollbarModel.overlay = function (place, scroll) {
        return new SimpleScrollbars('CodeMirror-overlayscroll', place, scroll);
    };
});
/**
 * Minified by jsDelivr using Terser v5.19.2.
 * Original file: /npm/codemirror@5.65.5/mode/meta.js
 *
 * Do NOT use SRI with dynamically generated files! More information: https://www.jsdelivr.com/using-sri-with-dynamic-files
 */
!(function (e) {
    'object' == typeof exports && 'object' == typeof module
        ? e(require('../lib/codemirror'))
        : 'function' == typeof define && define.amd
        ? define(['../lib/codemirror'], e)
        : e(CodeMirror);
})(function (e) {
    'use strict';
    e.modeInfo = [
        { name: 'APL', mime: 'text/apl', mode: 'apl', ext: ['dyalog', 'apl'] },
        {
            name: 'PGP',
            mimes: ['application/pgp', 'application/pgp-encrypted', 'application/pgp-keys', 'application/pgp-signature'],
            mode: 'asciiarmor',
            ext: ['asc', 'pgp', 'sig'],
        },
        { name: 'ASN.1', mime: 'text/x-ttcn-asn', mode: 'asn.1', ext: ['asn', 'asn1'] },
        { name: 'Asterisk', mime: 'text/x-asterisk', mode: 'asterisk', file: /^extensions\.conf$/i },
        { name: 'Brainfuck', mime: 'text/x-brainfuck', mode: 'brainfuck', ext: ['b', 'bf'] },
        { name: 'C', mime: 'text/x-csrc', mode: 'clike', ext: ['c', 'h', 'ino'] },
        { name: 'C++', mime: 'text/x-c++src', mode: 'clike', ext: ['cpp', 'c++', 'cc', 'cxx', 'hpp', 'h++', 'hh', 'hxx'], alias: ['cpp'] },
        { name: 'Cobol', mime: 'text/x-cobol', mode: 'cobol', ext: ['cob', 'cpy', 'cbl'] },
        { name: 'C#', mime: 'text/x-csharp', mode: 'clike', ext: ['cs'], alias: ['csharp', 'cs'] },
        { name: 'Clojure', mime: 'text/x-clojure', mode: 'clojure', ext: ['clj', 'cljc', 'cljx'] },
        { name: 'ClojureScript', mime: 'text/x-clojurescript', mode: 'clojure', ext: ['cljs'] },
        { name: 'Closure Stylesheets (GSS)', mime: 'text/x-gss', mode: 'css', ext: ['gss'] },
        { name: 'CMake', mime: 'text/x-cmake', mode: 'cmake', ext: ['cmake', 'cmake.in'], file: /^CMakeLists\.txt$/ },
        {
            name: 'CoffeeScript',
            mimes: ['application/vnd.coffeescript', 'text/coffeescript', 'text/x-coffeescript'],
            mode: 'coffeescript',
            ext: ['coffee'],
            alias: ['coffee', 'coffee-script'],
        },
        { name: 'Common Lisp', mime: 'text/x-common-lisp', mode: 'commonlisp', ext: ['cl', 'lisp', 'el'], alias: ['lisp'] },
        { name: 'Cypher', mime: 'application/x-cypher-query', mode: 'cypher', ext: ['cyp', 'cypher'] },
        { name: 'Cython', mime: 'text/x-cython', mode: 'python', ext: ['pyx', 'pxd', 'pxi'] },
        { name: 'Crystal', mime: 'text/x-crystal', mode: 'crystal', ext: ['cr'] },
        { name: 'CSS', mime: 'text/css', mode: 'css', ext: ['css'] },
        { name: 'CQL', mime: 'text/x-cassandra', mode: 'sql', ext: ['cql'] },
        { name: 'D', mime: 'text/x-d', mode: 'd', ext: ['d'] },
        { name: 'Dart', mimes: ['application/dart', 'text/x-dart'], mode: 'dart', ext: ['dart'] },
        { name: 'diff', mime: 'text/x-diff', mode: 'diff', ext: ['diff', 'patch'] },
        { name: 'Django', mime: 'text/x-django', mode: 'django' },
        { name: 'Dockerfile', mime: 'text/x-dockerfile', mode: 'dockerfile', file: /^Dockerfile$/ },
        { name: 'DTD', mime: 'application/xml-dtd', mode: 'dtd', ext: ['dtd'] },
        { name: 'Dylan', mime: 'text/x-dylan', mode: 'dylan', ext: ['dylan', 'dyl', 'intr'] },
        { name: 'EBNF', mime: 'text/x-ebnf', mode: 'ebnf' },
        { name: 'ECL', mime: 'text/x-ecl', mode: 'ecl', ext: ['ecl'] },
        { name: 'edn', mime: 'application/edn', mode: 'clojure', ext: ['edn'] },
        { name: 'Eiffel', mime: 'text/x-eiffel', mode: 'eiffel', ext: ['e'] },
        { name: 'Elm', mime: 'text/x-elm', mode: 'elm', ext: ['elm'] },
        { name: 'Embedded JavaScript', mime: 'application/x-ejs', mode: 'htmlembedded', ext: ['ejs'] },
        { name: 'Embedded Ruby', mime: 'application/x-erb', mode: 'htmlembedded', ext: ['erb'] },
        { name: 'Erlang', mime: 'text/x-erlang', mode: 'erlang', ext: ['erl'] },
        { name: 'Esper', mime: 'text/x-esper', mode: 'sql' },
        { name: 'Factor', mime: 'text/x-factor', mode: 'factor', ext: ['factor'] },
        { name: 'FCL', mime: 'text/x-fcl', mode: 'fcl' },
        { name: 'Forth', mime: 'text/x-forth', mode: 'forth', ext: ['forth', 'fth', '4th'] },
        { name: 'Fortran', mime: 'text/x-fortran', mode: 'fortran', ext: ['f', 'for', 'f77', 'f90', 'f95'] },
        { name: 'F#', mime: 'text/x-fsharp', mode: 'mllike', ext: ['fs'], alias: ['fsharp'] },
        { name: 'Gas', mime: 'text/x-gas', mode: 'gas', ext: ['s'] },
        { name: 'Gherkin', mime: 'text/x-feature', mode: 'gherkin', ext: ['feature'] },
        { name: 'GitHub Flavored Markdown', mime: 'text/x-gfm', mode: 'gfm', file: /^(readme|contributing|history)\.md$/i },
        { name: 'Go', mime: 'text/x-go', mode: 'go', ext: ['go'] },
        { name: 'Groovy', mime: 'text/x-groovy', mode: 'groovy', ext: ['groovy', 'gradle'], file: /^Jenkinsfile$/ },
        { name: 'HAML', mime: 'text/x-haml', mode: 'haml', ext: ['haml'] },
        { name: 'Haskell', mime: 'text/x-haskell', mode: 'haskell', ext: ['hs'] },
        { name: 'Haskell (Literate)', mime: 'text/x-literate-haskell', mode: 'haskell-literate', ext: ['lhs'] },
        { name: 'Haxe', mime: 'text/x-haxe', mode: 'haxe', ext: ['hx'] },
        { name: 'HXML', mime: 'text/x-hxml', mode: 'haxe', ext: ['hxml'] },
        { name: 'ASP.NET', mime: 'application/x-aspx', mode: 'htmlembedded', ext: ['aspx'], alias: ['asp', 'aspx'] },
        { name: 'HTML', mime: 'text/html', mode: 'htmlmixed', ext: ['html', 'htm', 'handlebars', 'hbs'], alias: ['xhtml'] },
        { name: 'HTTP', mime: 'message/http', mode: 'http' },
        { name: 'IDL', mime: 'text/x-idl', mode: 'idl', ext: ['pro'] },
        { name: 'Pug', mime: 'text/x-pug', mode: 'pug', ext: ['jade', 'pug'], alias: ['jade'] },
        { name: 'Java', mime: 'text/x-java', mode: 'clike', ext: ['java'] },
        { name: 'Java Server Pages', mime: 'application/x-jsp', mode: 'htmlembedded', ext: ['jsp'], alias: ['jsp'] },
        {
            name: 'JavaScript',
            mimes: ['text/javascript', 'text/ecmascript', 'application/javascript', 'application/x-javascript', 'application/ecmascript'],
            mode: 'javascript',
            ext: ['js'],
            alias: ['ecmascript', 'js', 'node'],
        },
        { name: 'JSON', mimes: ['application/json', 'application/x-json'], mode: 'javascript', ext: ['json', 'map'], alias: ['json5'] },
        { name: 'JSON-LD', mime: 'application/ld+json', mode: 'javascript', ext: ['jsonld'], alias: ['jsonld'] },
        { name: 'JSX', mime: 'text/jsx', mode: 'jsx', ext: ['jsx'] },
        { name: 'Jinja2', mime: 'text/jinja2', mode: 'jinja2', ext: ['j2', 'jinja', 'jinja2'] },
        { name: 'Julia', mime: 'text/x-julia', mode: 'julia', ext: ['jl'], alias: ['jl'] },
        { name: 'Kotlin', mime: 'text/x-kotlin', mode: 'clike', ext: ['kt'] },
        { name: 'LESS', mime: 'text/x-less', mode: 'css', ext: ['less'] },
        { name: 'LiveScript', mime: 'text/x-livescript', mode: 'livescript', ext: ['ls'], alias: ['ls'] },
        { name: 'Lua', mime: 'text/x-lua', mode: 'lua', ext: ['lua'] },
        { name: 'Markdown', mime: 'text/x-markdown', mode: 'markdown', ext: ['markdown', 'md', 'mkd'] },
        { name: 'mIRC', mime: 'text/mirc', mode: 'mirc' },
        { name: 'MariaDB SQL', mime: 'text/x-mariadb', mode: 'sql' },
        { name: 'Mathematica', mime: 'text/x-mathematica', mode: 'mathematica', ext: ['m', 'nb', 'wl', 'wls'] },
        { name: 'Modelica', mime: 'text/x-modelica', mode: 'modelica', ext: ['mo'] },
        { name: 'MUMPS', mime: 'text/x-mumps', mode: 'mumps', ext: ['mps'] },
        { name: 'MS SQL', mime: 'text/x-mssql', mode: 'sql' },
        { name: 'mbox', mime: 'application/mbox', mode: 'mbox', ext: ['mbox'] },
        { name: 'MySQL', mime: 'text/x-mysql', mode: 'sql' },
        { name: 'Nginx', mime: 'text/x-nginx-conf', mode: 'nginx', file: /nginx.*\.conf$/i },
        { name: 'NSIS', mime: 'text/x-nsis', mode: 'nsis', ext: ['nsh', 'nsi'] },
        {
            name: 'NTriples',
            mimes: ['application/n-triples', 'application/n-quads', 'text/n-triples'],
            mode: 'ntriples',
            ext: ['nt', 'nq'],
        },
        { name: 'Objective-C', mime: 'text/x-objectivec', mode: 'clike', ext: ['m'], alias: ['objective-c', 'objc'] },
        { name: 'Objective-C++', mime: 'text/x-objectivec++', mode: 'clike', ext: ['mm'], alias: ['objective-c++', 'objc++'] },
        { name: 'OCaml', mime: 'text/x-ocaml', mode: 'mllike', ext: ['ml', 'mli', 'mll', 'mly'] },
        { name: 'Octave', mime: 'text/x-octave', mode: 'octave', ext: ['m'] },
        { name: 'Oz', mime: 'text/x-oz', mode: 'oz', ext: ['oz'] },
        { name: 'Pascal', mime: 'text/x-pascal', mode: 'pascal', ext: ['p', 'pas'] },
        { name: 'PEG.js', mime: 'null', mode: 'pegjs', ext: ['jsonld'] },
        { name: 'Perl', mime: 'text/x-perl', mode: 'perl', ext: ['pl', 'pm'] },
        {
            name: 'PHP',
            mimes: ['text/x-php', 'application/x-httpd-php', 'application/x-httpd-php-open'],
            mode: 'php',
            ext: ['php', 'php3', 'php4', 'php5', 'php7', 'phtml'],
        },
        { name: 'Pig', mime: 'text/x-pig', mode: 'pig', ext: ['pig'] },
        { name: 'Plain Text', mime: 'text/plain', mode: 'null', ext: ['txt', 'text', 'conf', 'def', 'list', 'log'] },
        { name: 'PLSQL', mime: 'text/x-plsql', mode: 'sql', ext: ['pls'] },
        { name: 'PostgreSQL', mime: 'text/x-pgsql', mode: 'sql' },
        { name: 'PowerShell', mime: 'application/x-powershell', mode: 'powershell', ext: ['ps1', 'psd1', 'psm1'] },
        {
            name: 'Properties files',
            mime: 'text/x-properties',
            mode: 'properties',
            ext: ['properties', 'ini', 'in'],
            alias: ['ini', 'properties'],
        },
        { name: 'ProtoBuf', mime: 'text/x-protobuf', mode: 'protobuf', ext: ['proto'] },
        { name: 'Python', mime: 'text/x-python', mode: 'python', ext: ['BUILD', 'bzl', 'py', 'pyw'], file: /^(BUCK|BUILD)$/ },
        { name: 'Puppet', mime: 'text/x-puppet', mode: 'puppet', ext: ['pp'] },
        { name: 'Q', mime: 'text/x-q', mode: 'q', ext: ['q'] },
        { name: 'R', mime: 'text/x-rsrc', mode: 'r', ext: ['r', 'R'], alias: ['rscript'] },
        { name: 'reStructuredText', mime: 'text/x-rst', mode: 'rst', ext: ['rst'], alias: ['rst'] },
        { name: 'RPM Changes', mime: 'text/x-rpm-changes', mode: 'rpm' },
        { name: 'RPM Spec', mime: 'text/x-rpm-spec', mode: 'rpm', ext: ['spec'] },
        { name: 'Ruby', mime: 'text/x-ruby', mode: 'ruby', ext: ['rb'], alias: ['jruby', 'macruby', 'rake', 'rb', 'rbx'] },
        { name: 'Rust', mime: 'text/x-rustsrc', mode: 'rust', ext: ['rs'] },
        { name: 'SAS', mime: 'text/x-sas', mode: 'sas', ext: ['sas'] },
        { name: 'Sass', mime: 'text/x-sass', mode: 'sass', ext: ['sass'] },
        { name: 'Scala', mime: 'text/x-scala', mode: 'clike', ext: ['scala'] },
        { name: 'Scheme', mime: 'text/x-scheme', mode: 'scheme', ext: ['scm', 'ss'] },
        { name: 'SCSS', mime: 'text/x-scss', mode: 'css', ext: ['scss'] },
        {
            name: 'Shell',
            mimes: ['text/x-sh', 'application/x-sh'],
            mode: 'shell',
            ext: ['sh', 'ksh', 'bash'],
            alias: ['bash', 'sh', 'zsh'],
            file: /^PKGBUILD$/,
        },
        { name: 'Sieve', mime: 'application/sieve', mode: 'sieve', ext: ['siv', 'sieve'] },
        { name: 'Slim', mimes: ['text/x-slim', 'application/x-slim'], mode: 'slim', ext: ['slim'] },
        { name: 'Smalltalk', mime: 'text/x-stsrc', mode: 'smalltalk', ext: ['st'] },
        { name: 'Smarty', mime: 'text/x-smarty', mode: 'smarty', ext: ['tpl'] },
        { name: 'Solr', mime: 'text/x-solr', mode: 'solr' },
        { name: 'SML', mime: 'text/x-sml', mode: 'mllike', ext: ['sml', 'sig', 'fun', 'smackspec'] },
        { name: 'Soy', mime: 'text/x-soy', mode: 'soy', ext: ['soy'], alias: ['closure template'] },
        { name: 'SPARQL', mime: 'application/sparql-query', mode: 'sparql', ext: ['rq', 'sparql'], alias: ['sparul'] },
        { name: 'Spreadsheet', mime: 'text/x-spreadsheet', mode: 'spreadsheet', alias: ['excel', 'formula'] },
        { name: 'SQL', mime: 'text/x-sql', mode: 'sql', ext: ['sql'] },
        { name: 'SQLite', mime: 'text/x-sqlite', mode: 'sql' },
        { name: 'Squirrel', mime: 'text/x-squirrel', mode: 'clike', ext: ['nut'] },
        { name: 'Stylus', mime: 'text/x-styl', mode: 'stylus', ext: ['styl'] },
        { name: 'Swift', mime: 'text/x-swift', mode: 'swift', ext: ['swift'] },
        { name: 'sTeX', mime: 'text/x-stex', mode: 'stex' },
        { name: 'LaTeX', mime: 'text/x-latex', mode: 'stex', ext: ['text', 'ltx', 'tex'], alias: ['tex'] },
        { name: 'SystemVerilog', mime: 'text/x-systemverilog', mode: 'verilog', ext: ['v', 'sv', 'svh'] },
        { name: 'Tcl', mime: 'text/x-tcl', mode: 'tcl', ext: ['tcl'] },
        { name: 'Textile', mime: 'text/x-textile', mode: 'textile', ext: ['textile'] },
        { name: 'TiddlyWiki', mime: 'text/x-tiddlywiki', mode: 'tiddlywiki' },
        { name: 'Tiki wiki', mime: 'text/tiki', mode: 'tiki' },
        { name: 'TOML', mime: 'text/x-toml', mode: 'toml', ext: ['toml'] },
        { name: 'Tornado', mime: 'text/x-tornado', mode: 'tornado' },
        { name: 'troff', mime: 'text/troff', mode: 'troff', ext: ['1', '2', '3', '4', '5', '6', '7', '8', '9'] },
        { name: 'TTCN', mime: 'text/x-ttcn', mode: 'ttcn', ext: ['ttcn', 'ttcn3', 'ttcnpp'] },
        { name: 'TTCN_CFG', mime: 'text/x-ttcn-cfg', mode: 'ttcn-cfg', ext: ['cfg'] },
        { name: 'Turtle', mime: 'text/turtle', mode: 'turtle', ext: ['ttl'] },
        { name: 'TypeScript', mime: 'application/typescript', mode: 'javascript', ext: ['ts'], alias: ['ts'] },
        { name: 'TypeScript-JSX', mime: 'text/typescript-jsx', mode: 'jsx', ext: ['tsx'], alias: ['tsx'] },
        { name: 'Twig', mime: 'text/x-twig', mode: 'twig' },
        { name: 'Web IDL', mime: 'text/x-webidl', mode: 'webidl', ext: ['webidl'] },
        { name: 'VB.NET', mime: 'text/x-vb', mode: 'vb', ext: ['vb'] },
        { name: 'VBScript', mime: 'text/vbscript', mode: 'vbscript', ext: ['vbs'] },
        { name: 'Velocity', mime: 'text/velocity', mode: 'velocity', ext: ['vtl'] },
        { name: 'Verilog', mime: 'text/x-verilog', mode: 'verilog', ext: ['v'] },
        { name: 'VHDL', mime: 'text/x-vhdl', mode: 'vhdl', ext: ['vhd', 'vhdl'] },
        { name: 'Vue.js Component', mimes: ['script/x-vue', 'text/x-vue'], mode: 'vue', ext: ['vue'] },
        {
            name: 'XML',
            mimes: ['application/xml', 'text/xml'],
            mode: 'xml',
            ext: ['xml', 'xsl', 'xsd', 'svg'],
            alias: ['rss', 'wsdl', 'xsd'],
        },
        { name: 'XQuery', mime: 'application/xquery', mode: 'xquery', ext: ['xy', 'xquery'] },
        { name: 'Yacas', mime: 'text/x-yacas', mode: 'yacas', ext: ['ys'] },
        { name: 'YAML', mimes: ['text/x-yaml', 'text/yaml'], mode: 'yaml', ext: ['yaml', 'yml'], alias: ['yml'] },
        { name: 'Z80', mime: 'text/x-z80', mode: 'z80', ext: ['z80'] },
        { name: 'mscgen', mime: 'text/x-mscgen', mode: 'mscgen', ext: ['mscgen', 'mscin', 'msc'] },
        { name: 'xu', mime: 'text/x-xu', mode: 'mscgen', ext: ['xu'] },
        { name: 'msgenny', mime: 'text/x-msgenny', mode: 'mscgen', ext: ['msgenny'] },
        { name: 'WebAssembly', mime: 'text/webassembly', mode: 'wast', ext: ['wat', 'wast'] },
    ];
    for (var m = 0; m < e.modeInfo.length; m++) {
        var t = e.modeInfo[m];
        t.mimes && (t.mime = t.mimes[0]);
    }
    (e.findModeByMIME = function (m) {
        m = m.toLowerCase();
        for (var t = 0; t < e.modeInfo.length; t++) {
            var a = e.modeInfo[t];
            if (a.mime == m) return a;
            if (a.mimes) for (var i = 0; i < a.mimes.length; i++) if (a.mimes[i] == m) return a;
        }
        return /\+xml$/.test(m) ? e.findModeByMIME('application/xml') : /\+json$/.test(m) ? e.findModeByMIME('application/json') : void 0;
    }),
        (e.findModeByExtension = function (m) {
            m = m.toLowerCase();
            for (var t = 0; t < e.modeInfo.length; t++) {
                var a = e.modeInfo[t];
                if (a.ext) for (var i = 0; i < a.ext.length; i++) if (a.ext[i] == m) return a;
            }
        }),
        (e.findModeByFileName = function (m) {
            for (var t = 0; t < e.modeInfo.length; t++) {
                var a = e.modeInfo[t];
                if (a.file && a.file.test(m)) return a;
            }
            var i = m.lastIndexOf('.'),
                x = i > -1 && m.substring(i + 1, m.length);
            if (x) return e.findModeByExtension(x);
        }),
        (e.findModeByName = function (m) {
            m = m.toLowerCase();
            for (var t = 0; t < e.modeInfo.length; t++) {
                var a = e.modeInfo[t];
                if (a.name.toLowerCase() == m) return a;
                if (a.alias) for (var i = 0; i < a.alias.length; i++) if (a.alias[i].toLowerCase() == m) return a;
            }
        });
});
//# sourceMappingURL=/sm/200ccef707ee567cb63879d70e1af67c0a6786faad0171779d5a13c2c762efc7.map
