(function(){"use strict";try{if(typeof document!="undefined"){var e=document.createElement("style");e.appendChild(document.createTextNode(".add-to-homescreen-plugin-container .add-to-homescreen-container{z-index:10000;border-top:1px solid #e0e0e0;font-family:-apple-system,BlinkMacSystemFont,Roboto,sans-serif;width:100%;box-sizing:border-box;background:white;position:fixed;bottom:0;left:0;padding:16px;align-items:center;transition:all .5s}.add-to-homescreen-plugin-container .add-to-homescreen-container.add-to-homescreen-visible{transform:translateY(0)}.add-to-homescreen-plugin-container .add-to-homescreen-container.add-to-homescreen-hidden{transform:translateY(100%)}.add-to-homescreen-plugin-container button{cursor:pointer}.add-to-homescreen-plugin-container .close_btn{cursor:pointer;position:absolute;top:15px;right:15px;width:20px;height:20px;border:0;background:url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGNsYXNzPSJmZWF0aGVyIGZlYXRoZXIteCI+PGxpbmUgeDE9IjE4IiB5MT0iNiIgeDI9IjYiIHkyPSIxOCI+PC9saW5lPjxsaW5lIHgxPSI2IiB5MT0iNiIgeDI9IjE4IiB5Mj0iMTgiPjwvbGluZT48L3N2Zz4=)}.add-to-homescreen-plugin-container .flex{display:flex;flex-wrap:wrap}.add-to-homescreen-plugin-container .col{flex:1}.add-to-homescreen-plugin-container .icon{background-size:contain;background-repeat:no-repeat;background-position:center}.add-to-homescreen-plugin-container .icon-container .icon{width:60px;height:60px;display:block;line-height:60px;text-align:center;border-radius:30px;font-size:1.3rem;margin-right:15px;text-transform:uppercase}.add-to-homescreen-plugin-container .app-title{font-size:1.3rem;display:inline-block}.add-to-homescreen-plugin-container .app-content{font-size:.8rem;display:inline-block}.add-to-homescreen-plugin-container .btn-container{float:right}.add-to-homescreen-plugin-container .add-button,.add-to-homescreen-plugin-container .add-button:hover,.add-to-homescreen-plugin-container .add-button:visited{width:100%;border:0;outline:0;font-size:1rem;padding:5px}.add-to-homescreen-plugin-container .close:hover,.add-to-homescreen-plugin-container .close:focus{color:#000;text-decoration:none;cursor:pointer}.add-to-homescreen-plugin-container .modal{display:none;position:fixed;z-index:10000;left:0;top:0;width:100%;height:100%;background-color:#0006}.add-to-homescreen-plugin-container .modal-content{background-color:#fff;border-radius:1rem;text-align:center;margin:50% auto;border:1px solid #27e9b8;width:80%}.add-to-homescreen-plugin-container .modal-content ul{padding:0 0 0 15px;text-align:left;list-style-type:none}.add-to-homescreen-plugin-container .shareIOS,.add-to-homescreen-plugin-container .addIOS{width:20px;vertical-align:top}.add-to-homescreen-plugin-container .modal-content .closeModal{border:0;outline:0;font-size:1rem;padding:5px;margin-bottom:15px}")),document.head.appendChild(e)}}catch(n){console.error("vite-plugin-css-injected-by-js",n)}})();
import { defineComponent as Le, ref as Me, computed as P, onMounted as ze, openBlock as Ne, createElementBlock as Ce, createElementVNode as N, normalizeClass as Se, normalizeStyle as U, Fragment as Ie, createTextVNode as ae, toDisplayString as R, createCommentVNode as Oe, h as Ee, render as De } from "vue";
/*! js-cookie v3.0.1 | MIT */
function Y(n) {
  for (var b = 1; b < arguments.length; b++) {
    var v = arguments[b];
    for (var m in v)
      n[m] = v[m];
  }
  return n;
}
var Ae = {
  read: function(n) {
    return n[0] === '"' && (n = n.slice(1, -1)), n.replace(/(%[\dA-F]{2})+/gi, decodeURIComponent);
  },
  write: function(n) {
    return encodeURIComponent(n).replace(
      /%(2[346BF]|3[AC-F]|40|5[BDE]|60|7[BCD])/g,
      decodeURIComponent
    );
  }
};
function se(n, b) {
  function v(h, y, w) {
    if (!(typeof document > "u")) {
      w = Y({}, b, w), typeof w.expires == "number" && (w.expires = new Date(Date.now() + w.expires * 864e5)), w.expires && (w.expires = w.expires.toUTCString()), h = encodeURIComponent(h).replace(/%(2[346B]|5E|60|7C)/g, decodeURIComponent).replace(/[()]/g, escape);
      var C = "";
      for (var k in w)
        w[k] && (C += "; " + k, w[k] !== !0 && (C += "=" + w[k].split(";")[0]));
      return document.cookie = h + "=" + n.write(y, h) + C;
    }
  }
  function m(h) {
    if (!(typeof document > "u" || arguments.length && !h)) {
      for (var y = document.cookie ? document.cookie.split("; ") : [], w = {}, C = 0; C < y.length; C++) {
        var k = y[C].split("="), z = k.slice(1).join("=");
        try {
          var T = decodeURIComponent(k[0]);
          if (w[T] = n.read(z, T), h === T)
            break;
        } catch {
        }
      }
      return h ? w[h] : w;
    }
  }
  return Object.create(
    {
      set: v,
      get: m,
      remove: function(h, y) {
        v(
          h,
          "",
          Y({}, y, {
            expires: -1
          })
        );
      },
      withAttributes: function(h) {
        return se(this.converter, Y({}, this.attributes, h));
      },
      withConverter: function(h) {
        return se(Y({}, this.converter, h), this.attributes);
      }
    },
    {
      attributes: { value: Object.freeze(b) },
      converter: { value: Object.freeze(n) }
    }
  );
}
var le = se(Ae, { path: "/" });
const _e = {
  en_GB: {
    addToHomescreen: "Add to homescreen",
    addMessages: {
      ios1: "1. On Safari browser, open Share menu",
      ios2: '2. Tap on "Add to Home Screen" button',
      android: `1. Open browser parameters
2. Tap on "Add to homescreen"`,
      windows: {
        chrome: "Click on (+) button to the right of your navigation bar.",
        firefox: `1. Resize your browser so you can see your desktop
2. Drag and drop the (i) button left of your navigation bar to your desktop`
      },
      macos: {
        chrome: "Click on (+) button to the right of your navigation bar.",
        safari: `1. Resize your browser so you can see your desktop
2. Drag & drop the earth icon left of your notification bar to your desktop`,
        firefox: `1. Resize your browser so you can see your desktop
2. Drag and drop the (i) button left of your navigation bar to your desktop`
      },
      others: "Looks like your browser doesn't support add to homescreen natively. Feel free to update/change your browser."
    }
  },
  fr_FR: {
    addToHomescreen: "Installer l'application",
    addMessages: {
      ios1: "1. Sur le navigateur Safari, ouvrir le menu de partage",
      ios2: `2. Appuyez sur le bouton "Sur l'écran d'accueil"`,
      android: `1. Ouvrez les paramètres de la page
2. Appuyez sur le bouton "Ajouter à l'écran d'accueil"`,
      windows: {
        chrome: "Cliquez sur le bouton (+) présent à droite dans votre barre de navigation",
        firefox: `1. Redimensionnez votre navigateur pour voir votre bureau
2. Cliquez & glissez l'icône (i) présent à gauche de votre barre de navigation sur votre bureau`
      },
      macos: {
        chrome: "Cliquez sur le bouton (+) présent à droite dans votre barre de navigation",
        safari: `1. Redimensionnez votre navigateur pour voir votre bureau
2. Cliquez & glissez l'icône 'terre' présent à gauche de votre barre de navigation sur votre bureau`,
        firefox: `1. Redimensionnez votre navigateur pour voir votre bureau
2. Cliquez & glissez l'icône (i) présent à gauche de votre barre de navigation sur votre bureau`
      },
      others: "Il semblerait que votre navigateur ne supporte pas la fonctionnalité d'ajout à la page d'accueil. Mettez-le à jour ou changez de navigateur."
    }
  },
  ru_RU: {
    addToHomescreen: "Добавить на рабочий стол",
    addMessages: {
      ios1: "1. Откройте меню «Поделиться»",
      ios2: "2. Нажмите на кнопку «Добавить на главный экран»",
      android: `1. Откройте параметры браузера.
2. Нажмите «Добавить на рабочий стол»`,
      windows: {
        chrome: "Нажмите кнопку (+) справа от панели навигации.",
        firefox: `1. Измените размер браузера, чтобы Вы могли видеть свой рабочий стол
2. Перетащите кнопку (i) слева от панели навигации на рабочий стол.`
      },
      macos: {
        chrome: "Нажмите кнопку (+) справа от панели навигации",
        safari: `1. Измените размер браузера, чтобы Вы могли видеть свой рабочий стол
2. Перетащите значок "Земля" слева от панели уведомлений на рабочий стол`,
        firefox: `1. Измените размер браузера, чтобы Вы могли видеть свой рабочий стол
2. Перетащите кнопку (i) слева от панели навигации на рабочий стол.`
      },
      others: "Похоже, Ваш браузер изначально не поддерживает добавление на рабочий стол. Попробуйте обновить/изменить свой браузер."
    }
  }
}, Pe = () => {
  const n = ["file:", "cordova:", "capacitor:"];
  return window.matchMedia("(display-mode: standalone)").matches || window.location && window.location.protocol && n.indexOf(window.location.protocol) !== -1;
};
var Ue = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {}, J = {}, Re = {
  get exports() {
    return J;
  },
  set exports(n) {
    J = n;
  }
};
(function(n, b) {
  (function(v, m) {
    var h = "1.0.33", y = "", w = "?", C = "function", k = "undefined", z = "object", T = "string", O = "major", o = "model", t = "name", e = "type", i = "vendor", r = "version", l = "architecture", g = "console", a = "mobile", s = "tablet", j = "smarttv", E = "wearable", ce = "embedded", K = 350, X = "Amazon", H = "Apple", de = "ASUS", ue = "BlackBerry", S = "Browser", B = "Chrome", ke = "Edge", q = "Firefox", Z = "Google", be = "Huawei", $ = "LG", ee = "Microsoft", we = "Motorola", G = "Opera", ie = "Samsung", pe = "Sharp", Q = "Sony", oe = "Xiaomi", te = "Zebra", me = "Facebook", Te = function(c, p) {
      var d = {};
      for (var M in c)
        p[M] && p[M].length % 2 === 0 ? d[M] = p[M].concat(c[M]) : d[M] = c[M];
      return d;
    }, V = function(c) {
      for (var p = {}, d = 0; d < c.length; d++)
        p[c[d].toUpperCase()] = c[d];
      return p;
    }, ge = function(c, p) {
      return typeof c === T ? D(p).indexOf(D(c)) !== -1 : !1;
    }, D = function(c) {
      return c.toLowerCase();
    }, je = function(c) {
      return typeof c === T ? c.replace(/[^\d\.]/g, y).split(".")[0] : m;
    }, re = function(c, p) {
      if (typeof c === T)
        return c = c.replace(/^\s\s*/, y), typeof p === k ? c : c.substring(0, K);
    }, A = function(c, p) {
      for (var d = 0, M, u, F, f, _, L; d < p.length && !_; ) {
        var he = p[d], ye = p[d + 1];
        for (M = u = 0; M < he.length && !_; )
          if (_ = he[M++].exec(c), _)
            for (F = 0; F < ye.length; F++)
              L = _[++u], f = ye[F], typeof f === z && f.length > 0 ? f.length === 2 ? typeof f[1] == C ? this[f[0]] = f[1].call(this, L) : this[f[0]] = f[1] : f.length === 3 ? typeof f[1] === C && !(f[1].exec && f[1].test) ? this[f[0]] = L ? f[1].call(this, L, f[2]) : m : this[f[0]] = L ? L.replace(f[1], f[2]) : m : f.length === 4 && (this[f[0]] = L ? f[3].call(this, L.replace(f[1], f[2])) : m) : this[f] = L || m;
        d += 2;
      }
    }, ne = function(c, p) {
      for (var d in p)
        if (typeof p[d] === z && p[d].length > 0) {
          for (var M = 0; M < p[d].length; M++)
            if (ge(p[d][M], c))
              return d === w ? m : d;
        } else if (ge(p[d], c))
          return d === w ? m : d;
      return c;
    }, xe = {
      "1.0": "/8",
      "1.2": "/1",
      "1.3": "/3",
      "2.0": "/412",
      "2.0.2": "/416",
      "2.0.3": "/417",
      "2.0.4": "/419",
      "?": "/"
    }, fe = {
      ME: "4.90",
      "NT 3.11": "NT3.51",
      "NT 4.0": "NT4.0",
      2e3: "NT 5.0",
      XP: ["NT 5.1", "NT 5.2"],
      Vista: "NT 6.0",
      7: "NT 6.1",
      8: "NT 6.2",
      "8.1": "NT 6.3",
      10: ["NT 6.4", "NT 10.0"],
      RT: "ARM"
    }, ve = {
      browser: [
        [
          /\b(?:crmo|crios)\/([\w\.]+)/i
          // Chrome for Android/iOS
        ],
        [r, [t, "Chrome"]],
        [
          /edg(?:e|ios|a)?\/([\w\.]+)/i
          // Microsoft Edge
        ],
        [r, [t, "Edge"]],
        [
          // Presto based
          /(opera mini)\/([-\w\.]+)/i,
          // Opera Mini
          /(opera [mobiletab]{3,6})\b.+version\/([-\w\.]+)/i,
          // Opera Mobi/Tablet
          /(opera)(?:.+version\/|[\/ ]+)([\w\.]+)/i
          // Opera
        ],
        [t, r],
        [
          /opios[\/ ]+([\w\.]+)/i
          // Opera mini on iphone >= 8.0
        ],
        [r, [t, G + " Mini"]],
        [
          /\bopr\/([\w\.]+)/i
          // Opera Webkit
        ],
        [r, [t, G]],
        [
          // Mixed
          /(kindle)\/([\w\.]+)/i,
          // Kindle
          /(lunascape|maxthon|netfront|jasmine|blazer)[\/ ]?([\w\.]*)/i,
          // Lunascape/Maxthon/Netfront/Jasmine/Blazer
          // Trident based
          /(avant |iemobile|slim)(?:browser)?[\/ ]?([\w\.]*)/i,
          // Avant/IEMobile/SlimBrowser
          /(ba?idubrowser)[\/ ]?([\w\.]+)/i,
          // Baidu Browser
          /(?:ms|\()(ie) ([\w\.]+)/i,
          // Internet Explorer
          // Webkit/KHTML based                                               // Flock/RockMelt/Midori/Epiphany/Silk/Skyfire/Bolt/Iron/Iridium/PhantomJS/Bowser/QupZilla/Falkon
          /(flock|rockmelt|midori|epiphany|silk|skyfire|ovibrowser|bolt|iron|vivaldi|iridium|phantomjs|bowser|quark|qupzilla|falkon|rekonq|puffin|brave|whale|qqbrowserlite|qq|duckduckgo)\/([-\w\.]+)/i,
          // Rekonq/Puffin/Brave/Whale/QQBrowserLite/QQ, aka ShouQ
          /(weibo)__([\d\.]+)/i
          // Weibo
        ],
        [t, r],
        [
          /(?:\buc? ?browser|(?:juc.+)ucweb)[\/ ]?([\w\.]+)/i
          // UCBrowser
        ],
        [r, [t, "UC" + S]],
        [
          /microm.+\bqbcore\/([\w\.]+)/i,
          // WeChat Desktop for Windows Built-in Browser
          /\bqbcore\/([\w\.]+).+microm/i
        ],
        [r, [t, "WeChat(Win) Desktop"]],
        [
          /micromessenger\/([\w\.]+)/i
          // WeChat
        ],
        [r, [t, "WeChat"]],
        [
          /konqueror\/([\w\.]+)/i
          // Konqueror
        ],
        [r, [t, "Konqueror"]],
        [
          /trident.+rv[: ]([\w\.]{1,9})\b.+like gecko/i
          // IE11
        ],
        [r, [t, "IE"]],
        [
          /yabrowser\/([\w\.]+)/i
          // Yandex
        ],
        [r, [t, "Yandex"]],
        [
          /(avast|avg)\/([\w\.]+)/i
          // Avast/AVG Secure Browser
        ],
        [[t, /(.+)/, "$1 Secure " + S], r],
        [
          /\bfocus\/([\w\.]+)/i
          // Firefox Focus
        ],
        [r, [t, q + " Focus"]],
        [
          /\bopt\/([\w\.]+)/i
          // Opera Touch
        ],
        [r, [t, G + " Touch"]],
        [
          /coc_coc\w+\/([\w\.]+)/i
          // Coc Coc Browser
        ],
        [r, [t, "Coc Coc"]],
        [
          /dolfin\/([\w\.]+)/i
          // Dolphin
        ],
        [r, [t, "Dolphin"]],
        [
          /coast\/([\w\.]+)/i
          // Opera Coast
        ],
        [r, [t, G + " Coast"]],
        [
          /miuibrowser\/([\w\.]+)/i
          // MIUI Browser
        ],
        [r, [t, "MIUI " + S]],
        [
          /fxios\/([-\w\.]+)/i
          // Firefox for iOS
        ],
        [r, [t, q]],
        [
          /\bqihu|(qi?ho?o?|360)browser/i
          // 360
        ],
        [[t, "360 " + S]],
        [
          /(oculus|samsung|sailfish|huawei)browser\/([\w\.]+)/i
        ],
        [[t, /(.+)/, "$1 " + S], r],
        [
          // Oculus/Samsung/Sailfish/Huawei Browser
          /(comodo_dragon)\/([\w\.]+)/i
          // Comodo Dragon
        ],
        [[t, /_/g, " "], r],
        [
          /(electron)\/([\w\.]+) safari/i,
          // Electron-based App
          /(tesla)(?: qtcarbrowser|\/(20\d\d\.[-\w\.]+))/i,
          // Tesla
          /m?(qqbrowser|baiduboxapp|2345Explorer)[\/ ]?([\w\.]+)/i
          // QQBrowser/Baidu App/2345 Browser
        ],
        [t, r],
        [
          /(metasr)[\/ ]?([\w\.]+)/i,
          // SouGouBrowser
          /(lbbrowser)/i,
          // LieBao Browser
          /\[(linkedin)app\]/i
          // LinkedIn App for iOS & Android
        ],
        [t],
        [
          // WebView
          /((?:fban\/fbios|fb_iab\/fb4a)(?!.+fbav)|;fbav\/([\w\.]+);)/i
          // Facebook App for iOS & Android
        ],
        [[t, me], r],
        [
          /safari (line)\/([\w\.]+)/i,
          // Line App for iOS
          /\b(line)\/([\w\.]+)\/iab/i,
          // Line App for Android
          /(chromium|instagram)[\/ ]([-\w\.]+)/i
          // Chromium/Instagram
        ],
        [t, r],
        [
          /\bgsa\/([\w\.]+) .*safari\//i
          // Google Search Appliance on iOS
        ],
        [r, [t, "GSA"]],
        [
          /headlesschrome(?:\/([\w\.]+)| )/i
          // Chrome Headless
        ],
        [r, [t, B + " Headless"]],
        [
          / wv\).+(chrome)\/([\w\.]+)/i
          // Chrome WebView
        ],
        [[t, B + " WebView"], r],
        [
          /droid.+ version\/([\w\.]+)\b.+(?:mobile safari|safari)/i
          // Android Browser
        ],
        [r, [t, "Android " + S]],
        [
          /(chrome|omniweb|arora|[tizenoka]{5} ?browser)\/v?([\w\.]+)/i
          // Chrome/OmniWeb/Arora/Tizen/Nokia
        ],
        [t, r],
        [
          /version\/([\w\.\,]+) .*mobile\/\w+ (safari)/i
          // Mobile Safari
        ],
        [r, [t, "Mobile Safari"]],
        [
          /version\/([\w(\.|\,)]+) .*(mobile ?safari|safari)/i
          // Safari & Safari Mobile
        ],
        [r, t],
        [
          /webkit.+?(mobile ?safari|safari)(\/[\w\.]+)/i
          // Safari < 3.0
        ],
        [t, [r, ne, xe]],
        [
          /(webkit|khtml)\/([\w\.]+)/i
        ],
        [t, r],
        [
          // Gecko based
          /(navigator|netscape\d?)\/([-\w\.]+)/i
          // Netscape
        ],
        [[t, "Netscape"], r],
        [
          /mobile vr; rv:([\w\.]+)\).+firefox/i
          // Firefox Reality
        ],
        [r, [t, q + " Reality"]],
        [
          /ekiohf.+(flow)\/([\w\.]+)/i,
          // Flow
          /(swiftfox)/i,
          // Swiftfox
          /(icedragon|iceweasel|camino|chimera|fennec|maemo browser|minimo|conkeror|klar)[\/ ]?([\w\.\+]+)/i,
          // IceDragon/Iceweasel/Camino/Chimera/Fennec/Maemo/Minimo/Conkeror/Klar
          /(seamonkey|k-meleon|icecat|iceape|firebird|phoenix|palemoon|basilisk|waterfox)\/([-\w\.]+)$/i,
          // Firefox/SeaMonkey/K-Meleon/IceCat/IceApe/Firebird/Phoenix
          /(firefox)\/([\w\.]+)/i,
          // Other Firefox-based
          /(mozilla)\/([\w\.]+) .+rv\:.+gecko\/\d+/i,
          // Mozilla
          // Other
          /(polaris|lynx|dillo|icab|doris|amaya|w3m|netsurf|sleipnir|obigo|mosaic|(?:go|ice|up)[\. ]?browser)[-\/ ]?v?([\w\.]+)/i,
          // Polaris/Lynx/Dillo/iCab/Doris/Amaya/w3m/NetSurf/Sleipnir/Obigo/Mosaic/Go/ICE/UP.Browser
          /(links) \(([\w\.]+)/i
          // Links
        ],
        [t, r],
        [
          /(cobalt)\/([\w\.]+)/i
          // Cobalt
        ],
        [t, [r, /master.|lts./, ""]]
      ],
      cpu: [
        [
          /(?:(amd|x(?:(?:86|64)[-_])?|wow|win)64)[;\)]/i
          // AMD64 (x64)
        ],
        [[l, "amd64"]],
        [
          /(ia32(?=;))/i
          // IA32 (quicktime)
        ],
        [[l, D]],
        [
          /((?:i[346]|x)86)[;\)]/i
          // IA32 (x86)
        ],
        [[l, "ia32"]],
        [
          /\b(aarch64|arm(v?8e?l?|_?64))\b/i
          // ARM64
        ],
        [[l, "arm64"]],
        [
          /\b(arm(?:v[67])?ht?n?[fl]p?)\b/i
          // ARMHF
        ],
        [[l, "armhf"]],
        [
          // PocketPC mistakenly identified as PowerPC
          /windows (ce|mobile); ppc;/i
        ],
        [[l, "arm"]],
        [
          /((?:ppc|powerpc)(?:64)?)(?: mac|;|\))/i
          // PowerPC
        ],
        [[l, /ower/, y, D]],
        [
          /(sun4\w)[;\)]/i
          // SPARC
        ],
        [[l, "sparc"]],
        [
          /((?:avr32|ia64(?=;))|68k(?=\))|\barm(?=v(?:[1-7]|[5-7]1)l?|;|eabi)|(?=atmel )avr|(?:irix|mips|sparc)(?:64)?\b|pa-risc)/i
          // IA64, 68K, ARM/64, AVR/32, IRIX/64, MIPS/64, SPARC/64, PA-RISC
        ],
        [[l, D]]
      ],
      device: [
        [
          //////////////////////////
          // MOBILES & TABLETS
          // Ordered by popularity
          /////////////////////////
          // Samsung
          /\b(sch-i[89]0\d|shw-m380s|sm-[ptx]\w{2,4}|gt-[pn]\d{2,4}|sgh-t8[56]9|nexus 10)/i
        ],
        [o, [i, ie], [e, s]],
        [
          /\b((?:s[cgp]h|gt|sm)-\w+|galaxy nexus)/i,
          /samsung[- ]([-\w]+)/i,
          /sec-(sgh\w+)/i
        ],
        [o, [i, ie], [e, a]],
        [
          // Apple
          /\((ip(?:hone|od)[\w ]*);/i
          // iPod/iPhone
        ],
        [o, [i, H], [e, a]],
        [
          /\((ipad);[-\w\),; ]+apple/i,
          // iPad
          /applecoremedia\/[\w\.]+ \((ipad)/i,
          /\b(ipad)\d\d?,\d\d?[;\]].+ios/i
        ],
        [o, [i, H], [e, s]],
        [
          /(macintosh);/i
        ],
        [o, [i, H]],
        [
          // Huawei
          /\b((?:ag[rs][23]?|bah2?|sht?|btv)-a?[lw]\d{2})\b(?!.+d\/s)/i
        ],
        [o, [i, be], [e, s]],
        [
          /(?:huawei|honor)([-\w ]+)[;\)]/i,
          /\b(nexus 6p|\w{2,4}e?-[atu]?[ln][\dx][012359c][adn]?)\b(?!.+d\/s)/i
        ],
        [o, [i, be], [e, a]],
        [
          // Xiaomi
          /\b(poco[\w ]+)(?: bui|\))/i,
          // Xiaomi POCO
          /\b; (\w+) build\/hm\1/i,
          // Xiaomi Hongmi 'numeric' models
          /\b(hm[-_ ]?note?[_ ]?(?:\d\w)?) bui/i,
          // Xiaomi Hongmi
          /\b(redmi[\-_ ]?(?:note|k)?[\w_ ]+)(?: bui|\))/i,
          // Xiaomi Redmi
          /\b(mi[-_ ]?(?:a\d|one|one[_ ]plus|note lte|max|cc)?[_ ]?(?:\d?\w?)[_ ]?(?:plus|se|lite)?)(?: bui|\))/i
          // Xiaomi Mi
        ],
        [[o, /_/g, " "], [i, oe], [e, a]],
        [
          /\b(mi[-_ ]?(?:pad)(?:[\w_ ]+))(?: bui|\))/i
          // Mi Pad tablets
        ],
        [[o, /_/g, " "], [i, oe], [e, s]],
        [
          // OPPO
          /; (\w+) bui.+ oppo/i,
          /\b(cph[12]\d{3}|p(?:af|c[al]|d\w|e[ar])[mt]\d0|x9007|a101op)\b/i
        ],
        [o, [i, "OPPO"], [e, a]],
        [
          // Vivo
          /vivo (\w+)(?: bui|\))/i,
          /\b(v[12]\d{3}\w?[at])(?: bui|;)/i
        ],
        [o, [i, "Vivo"], [e, a]],
        [
          // Realme
          /\b(rmx[12]\d{3})(?: bui|;|\))/i
        ],
        [o, [i, "Realme"], [e, a]],
        [
          // Motorola
          /\b(milestone|droid(?:[2-4x]| (?:bionic|x2|pro|razr))?:?( 4g)?)\b[\w ]+build\//i,
          /\bmot(?:orola)?[- ](\w*)/i,
          /((?:moto[\w\(\) ]+|xt\d{3,4}|nexus 6)(?= bui|\)))/i
        ],
        [o, [i, we], [e, a]],
        [
          /\b(mz60\d|xoom[2 ]{0,2}) build\//i
        ],
        [o, [i, we], [e, s]],
        [
          // LG
          /((?=lg)?[vl]k\-?\d{3}) bui| 3\.[-\w; ]{10}lg?-([06cv9]{3,4})/i
        ],
        [o, [i, $], [e, s]],
        [
          /(lm(?:-?f100[nv]?|-[\w\.]+)(?= bui|\))|nexus [45])/i,
          /\blg[-e;\/ ]+((?!browser|netcast|android tv)\w+)/i,
          /\blg-?([\d\w]+) bui/i
        ],
        [o, [i, $], [e, a]],
        [
          // Lenovo
          /(ideatab[-\w ]+)/i,
          /lenovo ?(s[56]000[-\w]+|tab(?:[\w ]+)|yt[-\d\w]{6}|tb[-\d\w]{6})/i
        ],
        [o, [i, "Lenovo"], [e, s]],
        [
          // Nokia
          /(?:maemo|nokia).*(n900|lumia \d+)/i,
          /nokia[-_ ]?([-\w\.]*)/i
        ],
        [[o, /_/g, " "], [i, "Nokia"], [e, a]],
        [
          // Google
          /(pixel c)\b/i
          // Google Pixel C
        ],
        [o, [i, Z], [e, s]],
        [
          /droid.+; (pixel[\daxl ]{0,6})(?: bui|\))/i
          // Google Pixel
        ],
        [o, [i, Z], [e, a]],
        [
          // Sony
          /droid.+ (a?\d[0-2]{2}so|[c-g]\d{4}|so[-gl]\w+|xq-a\w[4-7][12])(?= bui|\).+chrome\/(?![1-6]{0,1}\d\.))/i
        ],
        [o, [i, Q], [e, a]],
        [
          /sony tablet [ps]/i,
          /\b(?:sony)?sgp\w+(?: bui|\))/i
        ],
        [[o, "Xperia Tablet"], [i, Q], [e, s]],
        [
          // OnePlus
          / (kb2005|in20[12]5|be20[12][59])\b/i,
          /(?:one)?(?:plus)? (a\d0\d\d)(?: b|\))/i
        ],
        [o, [i, "OnePlus"], [e, a]],
        [
          // Amazon
          /(alexa)webm/i,
          /(kf[a-z]{2}wi)( bui|\))/i,
          // Kindle Fire without Silk
          /(kf[a-z]+)( bui|\)).+silk\//i
          // Kindle Fire HD
        ],
        [o, [i, X], [e, s]],
        [
          /((?:sd|kf)[0349hijorstuw]+)( bui|\)).+silk\//i
          // Fire Phone
        ],
        [[o, /(.+)/g, "Fire Phone $1"], [i, X], [e, a]],
        [
          // BlackBerry
          /(playbook);[-\w\),; ]+(rim)/i
          // BlackBerry PlayBook
        ],
        [o, i, [e, s]],
        [
          /\b((?:bb[a-f]|st[hv])100-\d)/i,
          /\(bb10; (\w+)/i
          // BlackBerry 10
        ],
        [o, [i, ue], [e, a]],
        [
          // Asus
          /(?:\b|asus_)(transfo[prime ]{4,10} \w+|eeepc|slider \w+|nexus 7|padfone|p00[cj])/i
        ],
        [o, [i, de], [e, s]],
        [
          / (z[bes]6[027][012][km][ls]|zenfone \d\w?)\b/i
        ],
        [o, [i, de], [e, a]],
        [
          // HTC
          /(nexus 9)/i
          // HTC Nexus 9
        ],
        [o, [i, "HTC"], [e, s]],
        [
          /(htc)[-;_ ]{1,2}([\w ]+(?=\)| bui)|\w+)/i,
          // HTC
          // ZTE
          /(zte)[- ]([\w ]+?)(?: bui|\/|\))/i,
          /(alcatel|geeksphone|nexian|panasonic|sony(?!-bra))[-_ ]?([-\w]*)/i
          // Alcatel/GeeksPhone/Nexian/Panasonic/Sony
        ],
        [i, [o, /_/g, " "], [e, a]],
        [
          // Acer
          /droid.+; ([ab][1-7]-?[0178a]\d\d?)/i
        ],
        [o, [i, "Acer"], [e, s]],
        [
          // Meizu
          /droid.+; (m[1-5] note) bui/i,
          /\bmz-([-\w]{2,})/i
        ],
        [o, [i, "Meizu"], [e, a]],
        [
          // Sharp
          /\b(sh-?[altvz]?\d\d[a-ekm]?)/i
        ],
        [o, [i, pe], [e, a]],
        [
          // MIXED
          /(blackberry|benq|palm(?=\-)|sonyericsson|acer|asus|dell|meizu|motorola|polytron)[-_ ]?([-\w]*)/i,
          // BlackBerry/BenQ/Palm/Sony-Ericsson/Acer/Asus/Dell/Meizu/Motorola/Polytron
          /(hp) ([\w ]+\w)/i,
          // HP iPAQ
          /(asus)-?(\w+)/i,
          // Asus
          /(microsoft); (lumia[\w ]+)/i,
          // Microsoft Lumia
          /(lenovo)[-_ ]?([-\w]+)/i,
          // Lenovo
          /(jolla)/i,
          // Jolla
          /(oppo) ?([\w ]+) bui/i
          // OPPO
        ],
        [i, o, [e, a]],
        [
          /(archos) (gamepad2?)/i,
          // Archos
          /(hp).+(touchpad(?!.+tablet)|tablet)/i,
          // HP TouchPad
          /(kindle)\/([\w\.]+)/i,
          // Kindle
          /(nook)[\w ]+build\/(\w+)/i,
          // Nook
          /(dell) (strea[kpr\d ]*[\dko])/i,
          // Dell Streak
          /(le[- ]+pan)[- ]+(\w{1,9}) bui/i,
          // Le Pan Tablets
          /(trinity)[- ]*(t\d{3}) bui/i,
          // Trinity Tablets
          /(gigaset)[- ]+(q\w{1,9}) bui/i,
          // Gigaset Tablets
          /(vodafone) ([\w ]+)(?:\)| bui)/i
          // Vodafone
        ],
        [i, o, [e, s]],
        [
          /(surface duo)/i
          // Surface Duo
        ],
        [o, [i, ee], [e, s]],
        [
          /droid [\d\.]+; (fp\du?)(?: b|\))/i
          // Fairphone
        ],
        [o, [i, "Fairphone"], [e, a]],
        [
          /(u304aa)/i
          // AT&T
        ],
        [o, [i, "AT&T"], [e, a]],
        [
          /\bsie-(\w*)/i
          // Siemens
        ],
        [o, [i, "Siemens"], [e, a]],
        [
          /\b(rct\w+) b/i
          // RCA Tablets
        ],
        [o, [i, "RCA"], [e, s]],
        [
          /\b(venue[\d ]{2,7}) b/i
          // Dell Venue Tablets
        ],
        [o, [i, "Dell"], [e, s]],
        [
          /\b(q(?:mv|ta)\w+) b/i
          // Verizon Tablet
        ],
        [o, [i, "Verizon"], [e, s]],
        [
          /\b(?:barnes[& ]+noble |bn[rt])([\w\+ ]*) b/i
          // Barnes & Noble Tablet
        ],
        [o, [i, "Barnes & Noble"], [e, s]],
        [
          /\b(tm\d{3}\w+) b/i
        ],
        [o, [i, "NuVision"], [e, s]],
        [
          /\b(k88) b/i
          // ZTE K Series Tablet
        ],
        [o, [i, "ZTE"], [e, s]],
        [
          /\b(nx\d{3}j) b/i
          // ZTE Nubia
        ],
        [o, [i, "ZTE"], [e, a]],
        [
          /\b(gen\d{3}) b.+49h/i
          // Swiss GEN Mobile
        ],
        [o, [i, "Swiss"], [e, a]],
        [
          /\b(zur\d{3}) b/i
          // Swiss ZUR Tablet
        ],
        [o, [i, "Swiss"], [e, s]],
        [
          /\b((zeki)?tb.*\b) b/i
          // Zeki Tablets
        ],
        [o, [i, "Zeki"], [e, s]],
        [
          /\b([yr]\d{2}) b/i,
          /\b(dragon[- ]+touch |dt)(\w{5}) b/i
          // Dragon Touch Tablet
        ],
        [[i, "Dragon Touch"], o, [e, s]],
        [
          /\b(ns-?\w{0,9}) b/i
          // Insignia Tablets
        ],
        [o, [i, "Insignia"], [e, s]],
        [
          /\b((nxa|next)-?\w{0,9}) b/i
          // NextBook Tablets
        ],
        [o, [i, "NextBook"], [e, s]],
        [
          /\b(xtreme\_)?(v(1[045]|2[015]|[3469]0|7[05])) b/i
          // Voice Xtreme Phones
        ],
        [[i, "Voice"], o, [e, a]],
        [
          /\b(lvtel\-)?(v1[12]) b/i
          // LvTel Phones
        ],
        [[i, "LvTel"], o, [e, a]],
        [
          /\b(ph-1) /i
          // Essential PH-1
        ],
        [o, [i, "Essential"], [e, a]],
        [
          /\b(v(100md|700na|7011|917g).*\b) b/i
          // Envizen Tablets
        ],
        [o, [i, "Envizen"], [e, s]],
        [
          /\b(trio[-\w\. ]+) b/i
          // MachSpeed Tablets
        ],
        [o, [i, "MachSpeed"], [e, s]],
        [
          /\btu_(1491) b/i
          // Rotor Tablets
        ],
        [o, [i, "Rotor"], [e, s]],
        [
          /(shield[\w ]+) b/i
          // Nvidia Shield Tablets
        ],
        [o, [i, "Nvidia"], [e, s]],
        [
          /(sprint) (\w+)/i
          // Sprint Phones
        ],
        [i, o, [e, a]],
        [
          /(kin\.[onetw]{3})/i
          // Microsoft Kin
        ],
        [[o, /\./g, " "], [i, ee], [e, a]],
        [
          /droid.+; (cc6666?|et5[16]|mc[239][23]x?|vc8[03]x?)\)/i
          // Zebra
        ],
        [o, [i, te], [e, s]],
        [
          /droid.+; (ec30|ps20|tc[2-8]\d[kx])\)/i
        ],
        [o, [i, te], [e, a]],
        [
          ///////////////////
          // CONSOLES
          ///////////////////
          /(ouya)/i,
          // Ouya
          /(nintendo) ([wids3utch]+)/i
          // Nintendo
        ],
        [i, o, [e, g]],
        [
          /droid.+; (shield) bui/i
          // Nvidia
        ],
        [o, [i, "Nvidia"], [e, g]],
        [
          /(playstation [345portablevi]+)/i
          // Playstation
        ],
        [o, [i, Q], [e, g]],
        [
          /\b(xbox(?: one)?(?!; xbox))[\); ]/i
          // Microsoft Xbox
        ],
        [o, [i, ee], [e, g]],
        [
          ///////////////////
          // SMARTTVS
          ///////////////////
          /smart-tv.+(samsung)/i
          // Samsung
        ],
        [i, [e, j]],
        [
          /hbbtv.+maple;(\d+)/i
        ],
        [[o, /^/, "SmartTV"], [i, ie], [e, j]],
        [
          /(nux; netcast.+smarttv|lg (netcast\.tv-201\d|android tv))/i
          // LG SmartTV
        ],
        [[i, $], [e, j]],
        [
          /(apple) ?tv/i
          // Apple TV
        ],
        [i, [o, H + " TV"], [e, j]],
        [
          /crkey/i
          // Google Chromecast
        ],
        [[o, B + "cast"], [i, Z], [e, j]],
        [
          /droid.+aft(\w)( bui|\))/i
          // Fire TV
        ],
        [o, [i, X], [e, j]],
        [
          /\(dtv[\);].+(aquos)/i,
          /(aquos-tv[\w ]+)\)/i
          // Sharp
        ],
        [o, [i, pe], [e, j]],
        [
          /(bravia[\w ]+)( bui|\))/i
          // Sony
        ],
        [o, [i, Q], [e, j]],
        [
          /(mitv-\w{5}) bui/i
          // Xiaomi
        ],
        [o, [i, oe], [e, j]],
        [
          /\b(roku)[\dx]*[\)\/]((?:dvp-)?[\d\.]*)/i,
          // Roku
          /hbbtv\/\d+\.\d+\.\d+ +\([\w ]*; *(\w[^;]*);([^;]*)/i
          // HbbTV devices
        ],
        [[i, re], [o, re], [e, j]],
        [
          /\b(android tv|smart[- ]?tv|opera tv|tv; rv:)\b/i
          // SmartTV from Unidentified Vendors
        ],
        [[e, j]],
        [
          ///////////////////
          // WEARABLES
          ///////////////////
          /((pebble))app/i
          // Pebble
        ],
        [i, o, [e, E]],
        [
          /droid.+; (glass) \d/i
          // Google Glass
        ],
        [o, [i, Z], [e, E]],
        [
          /droid.+; (wt63?0{2,3})\)/i
        ],
        [o, [i, te], [e, E]],
        [
          /(quest( 2)?)/i
          // Oculus Quest
        ],
        [o, [i, me], [e, E]],
        [
          ///////////////////
          // EMBEDDED
          ///////////////////
          /(tesla)(?: qtcarbrowser|\/[-\w\.]+)/i
          // Tesla
        ],
        [i, [e, ce]],
        [
          ////////////////////
          // MIXED (GENERIC)
          ///////////////////
          /droid .+?; ([^;]+?)(?: bui|\) applew).+? mobile safari/i
          // Android Phones from Unidentified Vendors
        ],
        [o, [e, a]],
        [
          /droid .+?; ([^;]+?)(?: bui|\) applew).+?(?! mobile) safari/i
          // Android Tablets from Unidentified Vendors
        ],
        [o, [e, s]],
        [
          /\b((tablet|tab)[;\/]|focus\/\d(?!.+mobile))/i
          // Unidentifiable Tablet
        ],
        [[e, s]],
        [
          /(phone|mobile(?:[;\/]| [ \w\/\.]*safari)|pda(?=.+windows ce))/i
          // Unidentifiable Mobile
        ],
        [[e, a]],
        [
          /(android[-\w\. ]{0,9});.+buil/i
          // Generic Android Device
        ],
        [o, [i, "Generic"]]
      ],
      engine: [
        [
          /windows.+ edge\/([\w\.]+)/i
          // EdgeHTML
        ],
        [r, [t, ke + "HTML"]],
        [
          /webkit\/537\.36.+chrome\/(?!27)([\w\.]+)/i
          // Blink
        ],
        [r, [t, "Blink"]],
        [
          /(presto)\/([\w\.]+)/i,
          // Presto
          /(webkit|trident|netfront|netsurf|amaya|lynx|w3m|goanna)\/([\w\.]+)/i,
          // WebKit/Trident/NetFront/NetSurf/Amaya/Lynx/w3m/Goanna
          /ekioh(flow)\/([\w\.]+)/i,
          // Flow
          /(khtml|tasman|links)[\/ ]\(?([\w\.]+)/i,
          // KHTML/Tasman/Links
          /(icab)[\/ ]([23]\.[\d\.]+)/i
          // iCab
        ],
        [t, r],
        [
          /rv\:([\w\.]{1,9})\b.+(gecko)/i
          // Gecko
        ],
        [r, t]
      ],
      os: [
        [
          // Windows
          /microsoft (windows) (vista|xp)/i
          // Windows (iTunes)
        ],
        [t, r],
        [
          /(windows) nt 6\.2; (arm)/i,
          // Windows RT
          /(windows (?:phone(?: os)?|mobile))[\/ ]?([\d\.\w ]*)/i,
          // Windows Phone
          /(windows)[\/ ]?([ntce\d\. ]+\w)(?!.+xbox)/i
        ],
        [t, [r, ne, fe]],
        [
          /(win(?=3|9|n)|win 9x )([nt\d\.]+)/i
        ],
        [[t, "Windows"], [r, ne, fe]],
        [
          // iOS/macOS
          /ip[honead]{2,4}\b(?:.*os ([\w]+) like mac|; opera)/i,
          // iOS
          /cfnetwork\/.+darwin/i
        ],
        [[r, /_/g, "."], [t, "iOS"]],
        [
          /(mac os x) ?([\w\. ]*)/i,
          /(macintosh|mac_powerpc\b)(?!.+haiku)/i
          // Mac OS
        ],
        [[t, "Mac OS"], [r, /_/g, "."]],
        [
          // Mobile OSes
          /droid ([\w\.]+)\b.+(android[- ]x86|harmonyos)/i
          // Android-x86/HarmonyOS
        ],
        [r, t],
        [
          // Android/WebOS/QNX/Bada/RIM/Maemo/MeeGo/Sailfish OS
          /(android|webos|qnx|bada|rim tablet os|maemo|meego|sailfish)[-\/ ]?([\w\.]*)/i,
          /(blackberry)\w*\/([\w\.]*)/i,
          // Blackberry
          /(tizen|kaios)[\/ ]([\w\.]+)/i,
          // Tizen/KaiOS
          /\((series40);/i
          // Series 40
        ],
        [t, r],
        [
          /\(bb(10);/i
          // BlackBerry 10
        ],
        [r, [t, ue]],
        [
          /(?:symbian ?os|symbos|s60(?=;)|series60)[-\/ ]?([\w\.]*)/i
          // Symbian
        ],
        [r, [t, "Symbian"]],
        [
          /mozilla\/[\d\.]+ \((?:mobile|tablet|tv|mobile; [\w ]+); rv:.+ gecko\/([\w\.]+)/i
          // Firefox OS
        ],
        [r, [t, q + " OS"]],
        [
          /web0s;.+rt(tv)/i,
          /\b(?:hp)?wos(?:browser)?\/([\w\.]+)/i
          // WebOS
        ],
        [r, [t, "webOS"]],
        [
          // Google Chromecast
          /crkey\/([\d\.]+)/i
          // Google Chromecast
        ],
        [r, [t, B + "cast"]],
        [
          /(cros) [\w]+ ([\w\.]+\w)/i
          // Chromium OS
        ],
        [[t, "Chromium OS"], r],
        [
          // Console
          /(nintendo|playstation) ([wids345portablevuch]+)/i,
          // Nintendo/Playstation
          /(xbox); +xbox ([^\);]+)/i,
          // Microsoft Xbox (360, One, X, S, Series X, Series S)
          // Other
          /\b(joli|palm)\b ?(?:os)?\/?([\w\.]*)/i,
          // Joli/Palm
          /(mint)[\/\(\) ]?(\w*)/i,
          // Mint
          /(mageia|vectorlinux)[; ]/i,
          // Mageia/VectorLinux
          /([kxln]?ubuntu|debian|suse|opensuse|gentoo|arch(?= linux)|slackware|fedora|mandriva|centos|pclinuxos|red ?hat|zenwalk|linpus|raspbian|plan 9|minix|risc os|contiki|deepin|manjaro|elementary os|sabayon|linspire)(?: gnu\/linux)?(?: enterprise)?(?:[- ]linux)?(?:-gnu)?[-\/ ]?(?!chrom|package)([-\w\.]*)/i,
          // Ubuntu/Debian/SUSE/Gentoo/Arch/Slackware/Fedora/Mandriva/CentOS/PCLinuxOS/RedHat/Zenwalk/Linpus/Raspbian/Plan9/Minix/RISCOS/Contiki/Deepin/Manjaro/elementary/Sabayon/Linspire
          /(hurd|linux) ?([\w\.]*)/i,
          // Hurd/Linux
          /(gnu) ?([\w\.]*)/i,
          // GNU
          /\b([-frentopcghs]{0,5}bsd|dragonfly)[\/ ]?(?!amd|[ix346]{1,2}86)([\w\.]*)/i,
          // FreeBSD/NetBSD/OpenBSD/PC-BSD/GhostBSD/DragonFly
          /(haiku) (\w+)/i
          // Haiku
        ],
        [t, r],
        [
          /(sunos) ?([\w\.\d]*)/i
          // Solaris
        ],
        [[t, "Solaris"], r],
        [
          /((?:open)?solaris)[-\/ ]?([\w\.]*)/i,
          // Solaris
          /(aix) ((\d)(?=\.|\)| )[\w\.])*/i,
          // AIX
          /\b(beos|os\/2|amigaos|morphos|openvms|fuchsia|hp-ux)/i,
          // BeOS/OS2/AmigaOS/MorphOS/OpenVMS/Fuchsia/HP-UX
          /(unix) ?([\w\.]*)/i
          // UNIX
        ],
        [t, r]
      ]
    }, x = function(c, p) {
      if (typeof c === z && (p = c, c = m), !(this instanceof x))
        return new x(c, p).getResult();
      var d = c || (typeof v !== k && v.navigator && v.navigator.userAgent ? v.navigator.userAgent : y), M = p ? Te(ve, p) : ve;
      return this.getBrowser = function() {
        var u = {};
        return u[t] = m, u[r] = m, A.call(u, d, M.browser), u.major = je(u.version), u;
      }, this.getCPU = function() {
        var u = {};
        return u[l] = m, A.call(u, d, M.cpu), u;
      }, this.getDevice = function() {
        var u = {};
        return u[i] = m, u[o] = m, u[e] = m, A.call(u, d, M.device), u;
      }, this.getEngine = function() {
        var u = {};
        return u[t] = m, u[r] = m, A.call(u, d, M.engine), u;
      }, this.getOS = function() {
        var u = {};
        return u[t] = m, u[r] = m, A.call(u, d, M.os), u;
      }, this.getResult = function() {
        return {
          ua: this.getUA(),
          browser: this.getBrowser(),
          engine: this.getEngine(),
          os: this.getOS(),
          device: this.getDevice(),
          cpu: this.getCPU()
        };
      }, this.getUA = function() {
        return d;
      }, this.setUA = function(u) {
        return d = typeof u === T && u.length > K ? re(u, K) : u, this;
      }, this.setUA(d), this;
    };
    x.VERSION = h, x.BROWSER = V([t, r, O]), x.CPU = V([l]), x.DEVICE = V([o, i, e, g, a, j, s, E, ce]), x.ENGINE = x.OS = V([t, r]), n.exports && (b = n.exports = x), b.UAParser = x;
    var I = typeof v !== k && (v.jQuery || v.Zepto);
    if (I && !I.ua) {
      var W = new x();
      I.ua = W.getResult(), I.ua.get = function() {
        return W.getUA();
      }, I.ua.set = function(c) {
        W.setUA(c);
        var p = W.getResult();
        for (var d in p)
          I.ua[d] = p[d];
      };
    }
  })(typeof window == "object" ? window : Ue);
})(Re, J);
const He = J, Be = Le({
  name: "addToHomescreen",
  props: {
    title: {
      type: String,
      required: !1
    },
    content: {
      type: String,
      required: !1
    },
    titleColor: {
      type: String,
      required: !1
    },
    contentColor: {
      type: String,
      required: !1
    },
    iconPath: {
      type: String,
      required: !1
    },
    iconColor: {
      type: String,
      required: !1
    },
    iconTextColor: {
      type: String,
      required: !1
    },
    buttonColor: {
      type: String,
      required: !1
    },
    buttonTextColor: {
      type: String,
      required: !1
    },
    background: {
      type: String,
      required: !1
    },
    lang: {
      type: String,
      required: !1
    },
    expires: {
      type: Number,
      required: !1
    }
  },
  setup(n) {
    const b = (l) => n ? n[l] : void 0, v = (l) => {
      const g = n ? n[l] : l;
      return g && typeof g == "string" ? g : l;
    }, m = b("lang") || "en_GB", h = _e[m], y = (l) => l.split(".").reduce((g, a) => {
      if (g)
        return g[a];
    }, h), w = Me(), C = P(() => document.title), k = P(() => window.location.href), z = P(() => C.value.substring(0, 1)), T = Me(!1), O = () => {
      let l = new Date();
      const g = n.expires || 365;
      l.setDate(l.getDate() + g), le.set("addToHomescreenCalled", "true", {
        expires: l
      });
    }, o = P(() => {
      const l = b("iconColor"), g = b("iconPath"), a = b("iconTextColor");
      return {
        backgroundColor: l && typeof l == "string" ? l : "transparent",
        backgroundImage: g ? "url(" + b("iconPath") + ")" : "none",
        color: a && typeof a == "string" ? a : "black"
      };
    }), t = P(() => {
      const l = b("buttonTextColor"), g = b("buttonColor");
      return {
        color: l && l === "string" ? l : "white",
        backgroundColor: g && typeof g == "string" ? g : "black"
      };
    }), e = () => {
      O(), T.value = !1;
    }, i = () => {
      const l = document.getElementById("IOSmodal");
      l && (l.style.display = "none");
    }, r = () => {
      const g = new He().getResult(), a = {
        os: g.os.name,
        browser: g.browser.name
      }, s = document.getElementById("IOSmodal");
      w.value ? w.value.prompt() : a.os === "iOS" ? s && (s.style.display = "block") : a.os === "Android" ? alert(y("addMessages.android")) : a.os === "Windows" && (a.browser === "Chrome" || a.browser === "Edge") ? alert(y("addMessages.windows.chrome")) : a.os === "Windows" && a.browser === "Firefox" ? alert(y("addMessages.windows.firefox")) : a.os === "Mac OS" ? "ontouchstart" in window || navigator.maxTouchPoints > 0 ? s && (s.style.display = "block") : a.browser === "Firefox" ? alert(y("addMessages.macos.firefox")) : a.browser === "Chrome" ? alert(y("addMessages.macos.chrome")) : a.browser === "Safari" && alert(y("addMessages.macos.safari")) : alert(y("addMessages.others")), T.value = !1;
    };
    return ze(() => {
      window.addEventListener("beforeinstallprompt", (g) => {
        g.preventDefault(), w.value = g;
      });
      const l = le.get("addToHomescreenCalled");
      !Pe() && !l && (T.value = !0, O());
    }), {
      t: y,
      addToHomescreen: r,
      closeModal: i,
      close: e,
      buttonStyle: t,
      iconStyle: o,
      getCssOpt: v,
      getOpt: b,
      appUrl: k,
      firstCharTitle: z,
      appTitle: C,
      opened: T
    };
  }
}), qe = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pg0KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE3LjEuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPg0KPCFET0NUWVBFIHN2ZyBQVUJMSUMgIi0vL1czQy8vRFREIFNWRyAxLjEvL0VOIiAiaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEuZHRkIj4NCjxzdmcgdmVyc2lvbj0iMS4xIiBpZD0iQ2FwYV8xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB4PSIwcHgiIHk9IjBweCINCgkgdmlld0JveD0iMCAwIDMzMy4zMjQgMzMzLjMyNCIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgMzMzLjMyNCAzMzMuMzI0OyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI+DQo8Zz4NCgk8cGF0aCBzdHlsZT0iZmlsbDojMjIyMjIwOyIgZD0iTTEyNS4yNTUsNTkuNTEzbDMzLjkwNy0zMy45MDd2MTQ5LjQ1MWMwLDQuMTQzLDMuMzU4LDcuNSw3LjUsNy41czcuNS0zLjM1Nyw3LjUtNy41VjI1LjYwNg0KCQlsMzMuOTA3LDMzLjkwN2MxLjQ2NCwxLjQ2NCwzLjM4NCwyLjE5Niw1LjMwMywyLjE5NnMzLjgzOS0wLjczMiw1LjMwMy0yLjE5NmMyLjkyOS0yLjkzLDIuOTI5LTcuNjc4LDAtMTAuNjA3bC00Ni43MS00Ni43MQ0KCQljLTIuOTI5LTIuOTI4LTcuNjc4LTIuOTI4LTEwLjYwNiwwbC00Ni43MSw0Ni43MWMtMi45MjksMi45My0yLjkyOSw3LjY3OCwwLDEwLjYwN0MxMTcuNTc3LDYyLjQ0MSwxMjIuMzI2LDYyLjQ0MSwxMjUuMjU1LDU5LjUxM3oNCgkJIi8+DQoJPHBhdGggc3R5bGU9ImZpbGw6IzIyMjIyMDsiIGQ9Ik0yNjMuMzI4LDg3LjU1N2gtNjEuNjQ1Yy00LjE0MiwwLTcuNSwzLjM1Ny03LjUsNy41czMuMzU4LDcuNSw3LjUsNy41aDU0LjE0NXYyMTUuNzY3SDc3LjQ5NQ0KCQlWMTAyLjU1N2g1NC4xNDVjNC4xNDIsMCw3LjUtMy4zNTcsNy41LTcuNXMtMy4zNTgtNy41LTcuNS03LjVINjkuOTk1Yy00LjE0MiwwLTcuNSwzLjM1Ny03LjUsNy41djIzMC43NjcNCgkJYzAsNC4xNDMsMy4zNTgsNy41LDcuNSw3LjVoMTkzLjMzM2M0LjE0MiwwLDcuNS0zLjM1Nyw3LjUtNy41Vjk1LjA1N0MyNzAuODI4LDkwLjkxNSwyNjcuNDcsODcuNTU3LDI2My4zMjgsODcuNTU3eiIvPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPC9zdmc+DQo=", Ze = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgd2lkdGg9IjI0Ij48cGF0aCBkPSJNMCAwaDI0djI0SDBWMHoiIGZpbGw9Im5vbmUiLz48cGF0aCBkPSJNMTkgM0g1Yy0xLjExIDAtMiAuOS0yIDJ2MTRjMCAxLjEuODkgMiAyIDJoMTRjMS4xIDAgMi0uOSAyLTJWNWMwLTEuMS0uOS0yLTItMnptMCAxNkg1VjVoMTR2MTR6bS04LTJoMnYtNGg0di0yaC00VjdoLTJ2NEg3djJoNHoiLz48L3N2Zz4=";
const Ge = (n, b) => {
  const v = n.__vccOpts || n;
  for (const [m, h] of b)
    v[m] = h;
  return v;
}, Qe = { class: "add-to-homescreen-plugin-container" }, Ve = { class: "flex" }, We = { class: "icon-container" }, Fe = { class: "col" }, Ye = /* @__PURE__ */ N("br", null, null, -1), Je = ["innerHTML"], Ke = { class: "flex" }, Xe = { class: "col" }, $e = { class: "btn-container" }, ei = {
  id: "IOSmodal",
  class: "modal add-to-homescreen-visible"
}, ii = { class: "modal-content" }, oi = /* @__PURE__ */ N("img", {
  class: "shareIOS",
  src: qe,
  alt: "share IOS"
}, null, -1), ti = /* @__PURE__ */ N("img", {
  class: "addIOS",
  src: Ze,
  alt: "add IOS"
}, null, -1);
function ri(n, b, v, m, h, y) {
  return Ne(), Ce("div", Qe, [
    N("div", {
      class: Se([
        "add-to-homescreen-container",
        n.opened ? "add-to-homescreen-visible" : "add-to-homescreen-hidden"
      ])
    }, [
      N("div", Ve, [
        N("div", We, [
          N("span", {
            class: "icon",
            style: U(n.iconStyle)
          }, [
            n.getOpt("iconPath") ? Oe("", !0) : (Ne(), Ce(Ie, { key: 0 }, [
              ae(R(n.firstCharTitle), 1)
            ], 64))
          ], 4)
        ]),
        N("div", Fe, [
          N("span", {
            class: "app-title",
            style: U(n.getCssOpt("titleColor"))
          }, R(n.getOpt("title") ? n.getOpt("title") : n.appTitle), 5),
          Ye,
          N("span", {
            class: "app-content",
            style: U({ color: n.getCssOpt("contentColor") }),
            innerHTML: n.getOpt("content") || n.appUrl
          }, null, 12, Je)
        ])
      ]),
      N("div", Ke, [
        N("div", Xe, [
          N("div", $e, [
            N("button", {
              onClick: b[0] || (b[0] = (...w) => n.addToHomescreen && n.addToHomescreen(...w)),
              class: "add-button",
              style: U(n.buttonStyle)
            }, R(n.t("addToHomescreen")), 5)
          ])
        ])
      ]),
      N("button", {
        class: "close_btn",
        onClick: b[1] || (b[1] = (...w) => n.close && n.close(...w))
      })
    ], 2),
    N("div", ei, [
      N("div", ii, [
        N("ul", null, [
          N("li", null, [
            ae(R(n.t("addMessages.ios1")) + " ", 1),
            oi
          ]),
          N("li", null, [
            ae(R(n.t("addMessages.ios2")) + " ", 1),
            ti
          ])
        ]),
        N("button", {
          class: "closeModal",
          style: U(n.buttonStyle),
          label: "OK",
          onClick: b[2] || (b[2] = (...w) => n.closeModal && n.closeModal(...w))
        }, " OK ", 4)
      ])
    ])
  ]);
}
const ni = /* @__PURE__ */ Ge(Be, [["render", ri]]), ai = () => {
  const n = ["file:", "cordova:", "capacitor:"];
  return window.matchMedia("(display-mode: standalone)").matches || window.location && window.location.protocol && n.indexOf(window.location.protocol) !== -1;
};
function si(n) {
  if (!ai() || !le.get("addToHomescreenCalled")) {
    const b = Ee(ni, n), v = document.createElement("div");
    return document.body.appendChild(v), De(b, v), b.component;
  }
}
const ci = {
  install(n, b) {
    si(b);
  }
};
export {
  ci as default,
  si as useAddToHomescreen
};
