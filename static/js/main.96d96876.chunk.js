(window.webpackJsonp = window.webpackJsonp || []).push([
  [0],
  {
    11: function(n, e, t) {
      "use strict";
      (function(n) {
        t.d(e, "a", function() {
          return o;
        });
        var r = Boolean(
          "localhost" === window.location.hostname ||
            "[::1]" === window.location.hostname ||
            window.location.hostname.match(
              /^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/
            )
        );
        function o(e) {
          if ("serviceWorker" in navigator) {
            if (
              new URL(n.env.PUBLIC_URL, window.location.href).origin !==
              window.location.origin
            )
              return;
            window.addEventListener("load", function() {
              console.log(n, n.env, n.env.PUBLIC_URL);
              var t = "".concat(n.env.PUBLIC_URL, "/service-worker.js");
              r
                ? (!(function(n, e) {
                    fetch(n, { headers: { "Service-Worker": "script" } })
                      .then(function(t) {
                        var r = t.headers.get("content-type");
                        404 === t.status ||
                        (null != r && -1 === r.indexOf("javascript"))
                          ? navigator.serviceWorker.ready.then(function(n) {
                              n.unregister().then(function() {
                                window.location.reload();
                              });
                            })
                          : i(n, e);
                      })
                      .catch(function() {
                        console.log(
                          "No internet connection found. App is running in offline mode."
                        );
                      });
                  })(t, e),
                  navigator.serviceWorker.ready.then(function() {
                    console.log(
                      "This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA"
                    );
                  }))
                : i(t, e);
            });
          }
        }
        function i(n, e) {
          navigator.serviceWorker
            .register(n)
            .then(function(n) {
              n.onupdatefound = function() {
                var t = n.installing;
                null != t &&
                  (t.onstatechange = function() {
                    "installed" === t.state &&
                      (navigator.serviceWorker.controller
                        ? (console.log(
                            "New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."
                          ),
                          e && e.onUpdate && e.onUpdate(n))
                        : (console.log("Content is cached for offline use."),
                          e && e.onSuccess && e.onSuccess(n)));
                  });
              };
            })
            .catch(function(n) {
              console.error("Error during service worker registration:", n);
            });
        }
      }.call(this, t(7)));
    },
    18: function(n, e, t) {
      (e = t(19)(!1)).push([
        n.i,
        "body {\n  margin: auto;\n  padding: 0;\n  width: 80vw;\n  font-family: Futura, -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',\n    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',\n    sans-serif;\n  line-height: 1.7;\n  color: #000;\n  transition: background-color 200ms linear;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n}\n\ncode {\n  font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',\n    monospace;\n}\n",
        ""
      ]),
        (n.exports = e);
    },
    23: function(n, e, t) {
      "use strict";
      t.r(e);
      var r = t(0),
        o = t.n(r),
        i = t(2),
        a = t.n(i),
        c = (t(18), t(1));
      function u() {
        var n = w([
          "\n  margin: 20px;\n  border: 2px solid;\n  border-radius: 10px;\n  padding: 10px;\n  line-height: 1.7;\n  font-size: inherit;\n  font-family: inherit;\n"
        ]);
        return (
          (u = function() {
            return n;
          }),
          n
        );
      }
      function l() {
        var n = w([
          "\n  float: left;\n  margin: 20px;\n  border: 2px solid;\n  border-radius: 10px;\n  padding: 10px;\n\n  span {\n    padding-left: 15px;\n    &:hover {\n      cursor: pointer;\n    }\n  }\n"
        ]);
        return (
          (l = function() {
            return n;
          }),
          n
        );
      }
      function s() {
        var n = w([
          "\n  list-style: none;\n  -webkit-margin-before: 0;\n  -webkit-margin-after: 0;\n  -webkit-padding-start: 0;\n"
        ]);
        return (
          (s = function() {
            return n;
          }),
          n
        );
      }
      function f() {
        var n = w([""]);
        return (
          (f = function() {
            return n;
          }),
          n
        );
      }
      function d() {
        var n = w([
          '\n  position: absolute;\n  left: -25px;\n  bottom: -25px;\n  border-radius: 50%;\n  width: 50px;\n  background-color: #eee;\n  text-align: center;\n  line-height: 50px;\n  color: black;\n\n  &::before {\n    content: "";\n    position: absolute;\n    top: -9px;\n    left: 10px;\n    width: 0;\n    height: 0;\n    border-width: 0 15px 15px 15px;\n    border-style: solid;\n    border-color: transparent transparent #eee transparent;\n  }\n\n  &:hover {\n    cursor: pointer;\n  }\n'
        ]);
        return (
          (d = function() {
            return n;
          }),
          n
        );
      }
      function p() {
        var n = w([
          "\n  position: absolute;\n  top: 0;\n  right: 0;\n  width: 50%;\n  height: 50%;\n"
        ]);
        return (
          (p = function() {
            return n;
          }),
          n
        );
      }
      function b() {
        var n = w([
          "\n  position: absolute;\n  left: -100%;\n  width: 200%;\n  height: 200%;\n  padding-top: 20px;\n  text-align: center;\n  ",
          "\n  ",
          "\n"
        ]);
        return (
          (b = function() {
            return n;
          }),
          n
        );
      }
      function g() {
        var n = w([
          "\n  position: absolute;\n  top: 0;\n  right: 0;\n  width: 50%;\n  height: 50%;\n  overflow: hidden;\n  transform-origin: 0 100%;\n  opacity: 1;\n  ",
          "\n"
        ]);
        return (
          (g = function() {
            return n;
          }),
          n
        );
      }
      function h() {
        var n = w([
          "\n  position: relative;\n  border: 2px solid #000;\n  border-radius: 50%;\n  margin: 0;\n  padding: 0;\n  width: 100%;\n  height: 100%;\n  list-style: none;\n  background-color: #000;\n  overflow: hidden;\n  transition: transform 6s cubic-bezier(0, 0.99, 0.44, 0.99);\n  box-shadow: 0 0 5px 10px rgba(0, 0, 0, 0.2);\n"
        ]);
        return (
          (h = function() {
            return n;
          }),
          n
        );
      }
      function m() {
        var n = w([
          "\n  position: relative;\n  margin: 50px auto;\n  width: 20em;\n  height: 20em;\n  color: #fff;\n"
        ]);
        return (
          (m = function() {
            return n;
          }),
          n
        );
      }
      function v() {
        var n = w([
          "\n  height: fit-content;\n  margin: 20px;\n  border: 2px solid #000;\n  border-radius: 10px;\n  padding: 10px;\n  text-align: center;\n  box-shadow: 0 0 5px 5px rgba(0, 0, 0, 0.2);\n"
        ]);
        return (
          (v = function() {
            return n;
          }),
          n
        );
      }
      function y() {
        var n = w([
          "\n  z-index: 1000;\n  position: fixed;\n  top: 50%;\n  border: 2px solid;\n  border-radius: 10px;\n  margin: 0 15vw;\n  padding: 16px;\n  width: 50vw;\n  box-shadow: 0 0 2px 2px rgba(0, 0, 0, 0.2);\n  background-color: #fff;\n  /* transition: opacity 200ms linear; */\n  font-size: 20px;\n  text-align: center;\n  transition: opacity 1000ms ease-in-out;\n  opacity: 0;\n"
        ]);
        return (
          (y = function() {
            return n;
          }),
          n
        );
      }
      function w(n, e) {
        return (
          e || (e = n.slice(0)),
          Object.freeze(
            Object.defineProperties(n, { raw: { value: Object.freeze(e) } })
          )
        );
      }
      var x = c.a.div(y()),
        O = c.a.div(v()),
        k = c.a.div(m()),
        j = c.a.ul(h()),
        E = c.a.li(g(), function(n) {
          var e = n.rotate,
            t = n.skew;
          return "transform: rotate("
            .concat(e, "deg) skewY(-")
            .concat(t, "deg)");
        }),
        S = c.a.div(
          b(),
          function(n) {
            var e = n.color;
            return "background-color: ".concat(e, ";");
          },
          function(n) {
            var e = n.skew,
              t = n.rotate;
            return "transform: skewY("
              .concat(e, "deg) rotate(")
              .concat(t, "deg)");
          }
        ),
        P = c.a.div(p()),
        A = c.a.div(d()),
        C = c.a.div(f()),
        U = c.a.ul(s()),
        W = c.a.li(l()),
        I = c.a.input(u()),
        z = t(26);
      function M(n) {
        return (
          (function(n) {
            if (Array.isArray(n)) return F(n);
          })(n) ||
          (function(n) {
            if ("undefined" !== typeof Symbol && Symbol.iterator in Object(n))
              return Array.from(n);
          })(n) ||
          D(n) ||
          (function() {
            throw new TypeError(
              "Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
            );
          })()
        );
      }
      function T(n, e) {
        var t = Object.keys(n);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(n);
          e &&
            (r = r.filter(function(e) {
              return Object.getOwnPropertyDescriptor(n, e).enumerable;
            })),
            t.push.apply(t, r);
        }
        return t;
      }
      function L(n) {
        for (var e = 1; e < arguments.length; e++) {
          var t = null != arguments[e] ? arguments[e] : {};
          e % 2
            ? T(Object(t), !0).forEach(function(e) {
                R(n, e, t[e]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(t))
            : T(Object(t)).forEach(function(e) {
                Object.defineProperty(
                  n,
                  e,
                  Object.getOwnPropertyDescriptor(t, e)
                );
              });
        }
        return n;
      }
      function R(n, e, t) {
        return (
          e in n
            ? Object.defineProperty(n, e, {
                value: t,
                enumerable: !0,
                configurable: !0,
                writable: !0
              })
            : (n[e] = t),
          n
        );
      }
      function B(n, e) {
        return (
          (function(n) {
            if (Array.isArray(n)) return n;
          })(n) ||
          (function(n, e) {
            if (
              "undefined" === typeof Symbol ||
              !(Symbol.iterator in Object(n))
            )
              return;
            var t = [],
              r = !0,
              o = !1,
              i = void 0;
            try {
              for (
                var a, c = n[Symbol.iterator]();
                !(r = (a = c.next()).done) &&
                (t.push(a.value), !e || t.length !== e);
                r = !0
              );
            } catch (u) {
              (o = !0), (i = u);
            } finally {
              try {
                r || null == c.return || c.return();
              } finally {
                if (o) throw i;
              }
            }
            return t;
          })(n, e) ||
          D(n, e) ||
          (function() {
            throw new TypeError(
              "Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
            );
          })()
        );
      }
      function D(n, e) {
        if (n) {
          if ("string" === typeof n) return F(n, e);
          var t = Object.prototype.toString.call(n).slice(8, -1);
          return (
            "Object" === t && n.constructor && (t = n.constructor.name),
            "Map" === t || "Set" === t
              ? Array.from(t)
              : "Arguments" === t ||
                /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)
              ? F(n, e)
              : void 0
          );
        }
      }
      function F(n, e) {
        (null == e || e > n.length) && (e = n.length);
        for (var t = 0, r = new Array(e); t < e; t++) r[t] = n[t];
        return r;
      }
      var N = function(n) {
          var e = n.players,
            t = n.setWinner,
            i = B(Object(r.useState)(!1), 2),
            a = i[0],
            c = i[1],
            u = B(Object(r.useState)(0), 2),
            l = u[0],
            s = u[1],
            f = [
              "#16a085",
              "#2980b9",
              "#34495e",
              "#f39c12",
              "#d35400",
              "#c0392b"
            ],
            d = e.length,
            p = 360 / d,
            b = {
              transition: "transform ".concat(
                5e3,
                "ms cubic-bezier(0,.99,.44,.99)"
              ),
              transform: "rotate(0deg)"
            },
            g = {
              entered: { transform: "rotate(0deg)" },
              entering: { transform: "rotate(0deg)" },
              exiting: { transform: "rotate(".concat(l, "deg)") },
              exited: { transform: "rotate(".concat(l, "deg)") }
            };
          return (
            Object(r.useEffect)(
              function() {
                c(!1);
              },
              [a]
            ),
            o.a.createElement(
              k,
              null,
              o.a.createElement(z.a, { in: a, timeout: 5e3 }, function(n) {
                return o.a.createElement(
                  j,
                  { style: L({}, b, {}, g[n]) },
                  e.map(function(n, e) {
                    var t = Math.floor(p * e),
                      r = 90 - p;
                    return o.a.createElement(
                      E,
                      { key: e, skew: r, rotate: t },
                      o.a.createElement(
                        S,
                        { skew: r, rotate: p / 2, color: f[e] },
                        n
                      )
                    );
                  })
                );
              }),
              o.a.createElement(
                P,
                null,
                o.a.createElement(
                  A,
                  {
                    onClick: function() {
                      var n = 1 + Math.floor(360 * Math.random()),
                        r = l + 1800 + n,
                        o = d - Math.floor((r % 360) / p) - 1;
                      setTimeout(function() {
                        t(e[o]);
                      }, 5e3),
                        c(!0),
                        s(r);
                    }
                  },
                  "Spin"
                )
              )
            )
          );
        },
        J = function() {
          var n = B(
              Object(r.useState)(["Player1", "Player2", "Player3", "Player4"]),
              2
            ),
            e = n[0],
            t = n[1],
            i = B(Object(r.useState)(""), 2),
            a = i[0],
            c = i[1],
            u = B(Object(r.useState)(""), 2),
            l = u[0],
            s = u[1],
            f = B(Object(r.useState)(!1), 2),
            d = f[0],
            p = f[1],
            b = {
              entering: { opacity: 1 },
              entered: { opacity: 1 },
              exiting: { opacity: 0 },
              exited: { opacity: 0 }
            };
          return (
            Object(r.useEffect)(
              function() {
                setTimeout(function() {
                  p(!1);
                }, 1e3);
              },
              [d]
            ),
            o.a.createElement(
              o.a.Fragment,
              null,
              o.a.createElement(
                O,
                null,
                o.a.createElement("span", null, "The Winner is ", a)
              ),
              o.a.createElement(z.a, { in: d, timeout: 1e3 }, function(n) {
                return o.a.createElement(
                  x,
                  { style: L({}, b[n]) },
                  "Player already exists"
                );
              }),
              o.a.createElement(N, { players: e, setWinner: c }),
              o.a.createElement(
                C,
                null,
                o.a.createElement(
                  U,
                  null,
                  e.map(function(n, e) {
                    return o.a.createElement(
                      W,
                      { key: e },
                      o.a.createElement("input", {
                        type: "checkbox",
                        value: n
                      }),
                      n
                    );
                  })
                ),
                o.a.createElement(I, {
                  onKeyUp: function(n) {
                    13 === n.keyCode &&
                      (-1 === e.indexOf(l)
                        ? (t([].concat(M(e), [l])), s(""))
                        : p(!0));
                  },
                  onChange: function(n) {
                    return s(n.target.value);
                  },
                  value: l,
                  type: "text",
                  placeholder: "Add player"
                })
              )
            )
          );
        },
        Y = t(11);
      a.a.render(o.a.createElement(J, null), document.getElementById("root")),
        Y.a();
    }
  },
  [[23, 1, 2]]
]);
