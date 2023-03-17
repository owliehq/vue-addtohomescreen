(function(){"use strict";try{if(typeof document!="undefined"){var e=document.createElement("style");e.appendChild(document.createTextNode(".add-to-homescreen-plugin-container .add-to-homescreen-container{z-index:10000;border-top:1px solid #e0e0e0;font-family:-apple-system,BlinkMacSystemFont,Roboto,sans-serif;width:100%;box-sizing:border-box;background:white;position:fixed;bottom:0;left:0;padding:16px;align-items:center;transition:all .5s}.add-to-homescreen-plugin-container .add-to-homescreen-container.add-to-homescreen-visible{transform:translateY(0)}.add-to-homescreen-plugin-container .add-to-homescreen-container.add-to-homescreen-hidden{transform:translateY(100%)}.add-to-homescreen-plugin-container button{cursor:pointer}.add-to-homescreen-plugin-container .close_btn{cursor:pointer;position:absolute;top:15px;right:15px;width:20px;height:20px;border:0;background:url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGNsYXNzPSJmZWF0aGVyIGZlYXRoZXIteCI+PGxpbmUgeDE9IjE4IiB5MT0iNiIgeDI9IjYiIHkyPSIxOCI+PC9saW5lPjxsaW5lIHgxPSI2IiB5MT0iNiIgeDI9IjE4IiB5Mj0iMTgiPjwvbGluZT48L3N2Zz4=)}.add-to-homescreen-plugin-container .flex{display:flex;flex-wrap:wrap}.add-to-homescreen-plugin-container .col{flex:1}.add-to-homescreen-plugin-container .icon{background-size:contain;background-repeat:no-repeat;background-position:center}.add-to-homescreen-plugin-container .icon-container .icon{width:60px;height:60px;display:block;line-height:60px;text-align:center;border-radius:30px;font-size:1.3rem;margin-right:15px;text-transform:uppercase}.add-to-homescreen-plugin-container .app-title{font-size:1.3rem;display:inline-block}.add-to-homescreen-plugin-container .app-content{font-size:.8rem;display:inline-block}.add-to-homescreen-plugin-container .btn-container{float:right}.add-to-homescreen-plugin-container .add-button,.add-to-homescreen-plugin-container .add-button:hover,.add-to-homescreen-plugin-container .add-button:visited{width:100%;border:0;outline:0;font-size:1rem;padding:5px}.add-to-homescreen-plugin-container .close:hover,.add-to-homescreen-plugin-container .close:focus{color:#000;text-decoration:none;cursor:pointer}.add-to-homescreen-plugin-container .modal{display:none;position:fixed;z-index:10000;left:0;top:0;width:100%;height:100%;background-color:#0006}.add-to-homescreen-plugin-container .modal-content{background-color:#fff;border-radius:1rem;text-align:center;margin:50% auto;border:1px solid #27e9b8;width:80%}.add-to-homescreen-plugin-container .modal-content ul{padding:0 0 0 15px;text-align:left;list-style-type:none}.add-to-homescreen-plugin-container .shareIOS,.add-to-homescreen-plugin-container .addIOS{width:20px;vertical-align:top}.add-to-homescreen-plugin-container .modal-content .closeModal{border:0;outline:0;font-size:1rem;padding:5px;margin-bottom:15px}")),document.head.appendChild(e)}}catch(n){console.error("vite-plugin-css-injected-by-js",n)}})();
import { defineComponent as Ce, ref as ke, computed as P, onMounted as xe, openBlock as Me, createElementBlock as ze, createElementVNode as M, normalizeClass as Le, normalizeStyle as R, Fragment as Ie, createTextVNode as te, toDisplayString as U, createCommentVNode as De, h as Oe, render as Ae } from "vue";
/*! js-cookie v3.0.1 | MIT */
function Y(n) {
  for (var b = 1; b < arguments.length; b++) {
    var h = arguments[b];
    for (var m in h)
      n[m] = h[m];
  }
  return n;
}
var Ee = {
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
  function h(v, y, w) {
    if (!(typeof document > "u")) {
      w = Y({}, b, w), typeof w.expires == "number" && (w.expires = new Date(Date.now() + w.expires * 864e5)), w.expires && (w.expires = w.expires.toUTCString()), v = encodeURIComponent(v).replace(/%(2[346B]|5E|60|7C)/g, decodeURIComponent).replace(/[()]/g, escape);
      var z = "";
      for (var j in w)
        w[j] && (z += "; " + j, w[j] !== !0 && (z += "=" + w[j].split(";")[0]));
      return document.cookie = v + "=" + n.write(y, v) + z;
    }
  }
  function m(v) {
    if (!(typeof document > "u" || arguments.length && !v)) {
      for (var y = document.cookie ? document.cookie.split("; ") : [], w = {}, z = 0; z < y.length; z++) {
        var j = y[z].split("="), x = j.slice(1).join("=");
        try {
          var N = decodeURIComponent(j[0]);
          if (w[N] = n.read(x, N), v === N)
            break;
        } catch {
        }
      }
      return v ? w[v] : w;
    }
  }
  return Object.create(
    {
      set: h,
      get: m,
      remove: function(v, y) {
        h(
          v,
          "",
          Y({}, y, {
            expires: -1
          })
        );
      },
      withAttributes: function(v) {
        return se(this.converter, Y({}, this.attributes, v));
      },
      withConverter: function(v) {
        return se(Y({}, this.converter, v), this.attributes);
      }
    },
    {
      attributes: { value: Object.freeze(b) },
      converter: { value: Object.freeze(n) }
    }
  );
}
var de = se(Ee, { path: "/" });
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
  },
  de_DE: {
    addToHomescreen: "Zum Startbildschirm hinzufügen",
    addMessages: {
      ios1: "1. Öffnen Sie im Safari-Browser das Teilen-Menü",
      ios2: '2. Tippen Sie auf die Schaltfläche "Zum Startbildschirm hinzufügen"',
      android: `1. Öffnen Sie die Browsereinstellungen
2. Tippen Sie auf "Zum Startbildschirm hinzufügen"`,
      windows: {
        chrome: "Klicken Sie auf die (+) Schaltfläche rechts neben Ihrer Navigationsleiste.",
        firefox: `1. Ändern Sie die Größe Ihres Browsers, sodass Sie Ihren Desktop sehen können
2. Ziehen Sie die (i)-Schaltfläche links von der Navigationsleiste auf Ihren Desktop`
      },
      macos: {
        chrome: "Klicken Sie auf die (+) Schaltfläche rechts neben Ihrer Navigationsleiste.",
        safari: `1. Ändern Sie die Größe Ihres Browsers, sodass Sie Ihren Desktop sehen können
2. Ziehen Sie das Erdensymbol links neben Ihrer Benachrichtigungsleiste auf Ihren Desktop`,
        firefox: `1. Ändern Sie die Größe Ihres Browsers, sodass Sie Ihren Desktop sehen können
2. Ziehen Sie die (i)-Schaltfläche links von der Navigationsleiste auf Ihren Desktop`
      },
      others: "Es scheint, dass Ihr Browser das Hinzufügen zum Startbildschirm nicht nativ unterstützt. Fühlen Sie sich frei, Ihren Browser zu aktualisieren/zu wechseln."
    }
  },
  es_ES: {
    addToHomescreen: "Añadir a la pantalla de inicio",
    addMessages: {
      ios1: "1. En el navegador Safari, abre el menú Compartir",
      ios2: '2. Toca el botón "Añadir a la pantalla de inicio"',
      android: `1. Abre los ajustes del navegador
  2. Toca en "Añadir a la pantalla de inicio"`,
      windows: {
        chrome: "Haz clic en el botón (+) a la derecha de tu barra de navegación.",
        firefox: `1. Redimensiona tu navegador para que puedas ver tu escritorio
  2. Arrastra y suelta el botón (i) a la izquierda de tu barra de navegación a tu escritorio`
      },
      macos: {
        chrome: "Haz clic en el botón (+) a la derecha de tu barra de navegación.",
        safari: `1. Redimensiona tu navegador para que puedas ver tu escritorio
  2. Arrastra y suelta el icono de la Tierra a la izquierda de tu barra de notificaciones a tu escritorio`,
        firefox: `1. Redimensiona tu navegador para que puedas ver tu escritorio
  2. Arrastra y suelta el botón (i) a la izquierda de tu barra de navegación a tu escritorio`
      },
      others: "Parece que tu navegador no admite la función de añadir a la pantalla de inicio de forma nativa. Siéntete libre de actualizar o cambiar tu navegador."
    }
  },
  pt_PT: {
    addToHomescreen: "Adicionar à tela inicial",
    addMessages: {
      ios1: "1. No navegador Safari, abra o menu Compartilhar",
      ios2: '2. Toque no botão "Adicionar à tela inicial"',
      android: `1. Abra as configurações do navegador
  2. Toque em "Adicionar à tela inicial"`,
      windows: {
        chrome: "Clique no botão (+) à direita da barra de navegação.",
        firefox: `1. Redimensione o navegador para visualizar a área de trabalho
  2. Arraste e solte o botão (i) à esquerda da barra de navegação para a área de trabalho`
      },
      macos: {
        chrome: "Clique no botão (+) à direita da barra de navegação.",
        safari: `1. Redimensione o navegador para visualizar a área de trabalho
  2. Arraste e solte o ícone da Terra à esquerda da barra de notificações para a área de trabalho`,
        firefox: `1. Redimensione o navegador para visualizar a área de trabalho
  2. Arraste e solte o botão (i) à esquerda da barra de navegação para a área de trabalho`
      },
      others: "Parece que seu navegador não suporta adicionar à tela inicial de forma nativa. Sinta-se à vontade para atualizar ou alterar o navegador."
    }
  },
  nl_NL: {
    addToHomescreen: "Toevoegen aan startscherm",
    addMessages: {
      ios1: "1. Open in de Safari-browser het deelmenu",
      ios2: '2. Tik op de knop "Aan startscherm toevoegen"',
      android: `1. Open browserinstellingen
  2. Tik op "Toevoegen aan startscherm"`,
      windows: {
        chrome: "Klik op de (+) knop rechts van uw navigatiebalk.",
        firefox: `1. Verander het formaat van uw browser zodat u uw bureaublad kunt zien
  2. Sleep het (i)-pictogram links van uw navigatiebalk naar uw bureaublad`
      },
      macos: {
        chrome: "Klik op de (+) knop rechts van uw navigatiebalk.",
        safari: `1. Verander het formaat van uw browser zodat u uw bureaublad kunt zien
  2. Sleep het aarde-icoon links van uw notificatiebalk naar uw bureaublad`,
        firefox: `1. Verander het formaat van uw browser zodat u uw bureaublad kunt zien
  2. Sleep het (i)-pictogram links van uw navigatiebalk naar uw bureaublad`
      },
      others: 'Het lijkt erop dat uw browser niet native de functie "Toevoegen aan startscherm" ondersteunt. Voel je vrij om je browser bij te werken of te veranderen.'
    }
  },
  pl_PL: {
    addToHomescreen: "Dodaj do ekranu głównego",
    addMessages: {
      ios1: "1. W przeglądarce Safari otwórz menu Udostępnij",
      ios2: '2. Stuknij przycisk "Dodaj do ekranu głównego"',
      android: `1. Otwórz ustawienia przeglądarki
  2. Stuknij "Dodaj do ekranu głównego"`,
      windows: {
        chrome: "Kliknij przycisk (+) po prawej stronie paska nawigacji.",
        firefox: `1. Zmień rozmiar przeglądarki, aby zobaczyć pulpit
  2. Przeciągnij i upuść przycisk (i) po lewej stronie paska nawigacji na pulpit`
      },
      macos: {
        chrome: "Kliknij przycisk (+) po prawej stronie paska nawigacji.",
        safari: `1. Zmień rozmiar przeglądarki, aby zobaczyć pulpit
  2. Przeciągnij i upuść ikonę ziemi po lewej stronie paska powiadomień na pulpit`,
        firefox: `1. Zmień rozmiar przeglądarki, aby zobaczyć pulpit
  2. Przeciągnij i upuść przycisk (i) po lewej stronie paska nawigacji na pulpit`
      },
      others: "Wygląda na to, że Twoja przeglądarka nie obsługuje natywnie dodawania do ekranu głównego. Śmiało zaktualizuj lub zmień przeglądarkę."
    }
  },
  ja_JP: {
    addToHomescreen: "ホーム画面に追加",
    addMessages: {
      ios1: "1. Safariブラウザで共有メニューを開く",
      ios2: '2. "ホーム画面に追加"ボタンをタップする',
      android: `1. ブラウザの設定を開く
  2. "ホーム画面に追加"をタップする`,
      windows: {
        chrome: "ナビゲーションバーの右側にある (+) ボタンをクリックします。",
        firefox: `1. デスクトップが見えるようにブラウザのサイズを変更する
  2. ナビゲーションバーの左側にある (i) ボタンをデスクトップにドラッグ＆ドロップする`
      },
      macos: {
        chrome: "ナビゲーションバーの右側にある (+) ボタンをクリックします。",
        safari: `1. デスクトップが見えるようにブラウザのサイズを変更する
  2. 通知バーの左側にある地球のアイコンをデスクトップにドラッグ＆ドロップする`,
        firefox: `1. デスクトップが見えるようにブラウザのサイズを変更する
  2. ナビゲーションバーの左側にある (i) ボタンをデスクトップにドラッグ＆ドロップする`
      },
      others: "お使いのブラウザはホーム画面に追加をネイティブにサポートしていないようです。ブラウザを更新/変更してください。"
    }
  },
  zh_CN: {
    addToHomescreen: "添加到主屏幕",
    addMessages: {
      ios1: "1. 在 Safari 浏览器中打开分享菜单",
      ios2: '2. 点击"添加到主屏幕"按钮',
      android: `1. 打开浏览器设置
  2. 点击"添加到主屏幕"`,
      windows: {
        chrome: "点击导航栏右侧的 (+) 按钮。",
        firefox: `1. 调整浏览器大小以便看到桌面
  2. 将导航栏左侧的 (i) 按钮拖放到桌面`
      },
      macos: {
        chrome: "点击导航栏右侧的 (+) 按钮。",
        safari: `1. 调整浏览器大小以便看到桌面
  2. 将通知栏左侧的地球图标拖放到桌面`,
        firefox: `1. 调整浏览器大小以便看到桌面
  2. 将导航栏左侧的 (i) 按钮拖放到桌面`
      },
      others: "看起来您的浏览器不支持原生添加到主屏幕功能。请随时更新/更换浏览器。"
    }
  }
}, Pe = () => {
  const n = ["file:", "cordova:", "capacitor:"];
  return window.matchMedia("(display-mode: standalone)").matches || window.location && window.location.protocol && n.indexOf(window.location.protocol) !== -1;
};
var Re = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {}, K = {}, Ue = {
  get exports() {
    return K;
  },
  set exports(n) {
    K = n;
  }
};
(function(n, b) {
  (function(h, m) {
    var v = "1.0.33", y = "", w = "?", z = "function", j = "undefined", x = "object", N = "string", D = "major", o = "model", a = "name", e = "type", i = "vendor", r = "version", d = "architecture", g = "console", t = "mobile", s = "tablet", S = "smarttv", O = "wearable", le = "embedded", J = 350, X = "Amazon", H = "Apple", ce = "ASUS", ue = "BlackBerry", L = "Browser", q = "Chrome", je = "Edge", B = "Firefox", Z = "Google", be = "Huawei", $ = "LG", ee = "Microsoft", we = "Motorola", V = "Opera", ie = "Samsung", pe = "Sharp", G = "Sony", oe = "Xiaomi", ae = "Zebra", me = "Facebook", Ne = function(l, p) {
      var c = {};
      for (var k in l)
        p[k] && p[k].length % 2 === 0 ? c[k] = p[k].concat(l[k]) : c[k] = l[k];
      return c;
    }, Q = function(l) {
      for (var p = {}, c = 0; c < l.length; c++)
        p[l[c].toUpperCase()] = l[c];
      return p;
    }, ge = function(l, p) {
      return typeof l === N ? A(p).indexOf(A(l)) !== -1 : !1;
    }, A = function(l) {
      return l.toLowerCase();
    }, Se = function(l) {
      return typeof l === N ? l.replace(/[^\d\.]/g, y).split(".")[0] : m;
    }, re = function(l, p) {
      if (typeof l === N)
        return l = l.replace(/^\s\s*/, y), typeof p === j ? l : l.substring(0, J);
    }, E = function(l, p) {
      for (var c = 0, k, u, F, f, _, C; c < p.length && !_; ) {
        var ve = p[c], ye = p[c + 1];
        for (k = u = 0; k < ve.length && !_; )
          if (_ = ve[k++].exec(l), _)
            for (F = 0; F < ye.length; F++)
              C = _[++u], f = ye[F], typeof f === x && f.length > 0 ? f.length === 2 ? typeof f[1] == z ? this[f[0]] = f[1].call(this, C) : this[f[0]] = f[1] : f.length === 3 ? typeof f[1] === z && !(f[1].exec && f[1].test) ? this[f[0]] = C ? f[1].call(this, C, f[2]) : m : this[f[0]] = C ? C.replace(f[1], f[2]) : m : f.length === 4 && (this[f[0]] = C ? f[3].call(this, C.replace(f[1], f[2])) : m) : this[f] = C || m;
        c += 2;
      }
    }, ne = function(l, p) {
      for (var c in p)
        if (typeof p[c] === x && p[c].length > 0) {
          for (var k = 0; k < p[c].length; k++)
            if (ge(p[c][k], l))
              return c === w ? m : c;
        } else if (ge(p[c], l))
          return c === w ? m : c;
      return l;
    }, Te = {
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
    }, he = {
      browser: [
        [
          /\b(?:crmo|crios)\/([\w\.]+)/i
          // Chrome for Android/iOS
        ],
        [r, [a, "Chrome"]],
        [
          /edg(?:e|ios|a)?\/([\w\.]+)/i
          // Microsoft Edge
        ],
        [r, [a, "Edge"]],
        [
          // Presto based
          /(opera mini)\/([-\w\.]+)/i,
          // Opera Mini
          /(opera [mobiletab]{3,6})\b.+version\/([-\w\.]+)/i,
          // Opera Mobi/Tablet
          /(opera)(?:.+version\/|[\/ ]+)([\w\.]+)/i
          // Opera
        ],
        [a, r],
        [
          /opios[\/ ]+([\w\.]+)/i
          // Opera mini on iphone >= 8.0
        ],
        [r, [a, V + " Mini"]],
        [
          /\bopr\/([\w\.]+)/i
          // Opera Webkit
        ],
        [r, [a, V]],
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
        [a, r],
        [
          /(?:\buc? ?browser|(?:juc.+)ucweb)[\/ ]?([\w\.]+)/i
          // UCBrowser
        ],
        [r, [a, "UC" + L]],
        [
          /microm.+\bqbcore\/([\w\.]+)/i,
          // WeChat Desktop for Windows Built-in Browser
          /\bqbcore\/([\w\.]+).+microm/i
        ],
        [r, [a, "WeChat(Win) Desktop"]],
        [
          /micromessenger\/([\w\.]+)/i
          // WeChat
        ],
        [r, [a, "WeChat"]],
        [
          /konqueror\/([\w\.]+)/i
          // Konqueror
        ],
        [r, [a, "Konqueror"]],
        [
          /trident.+rv[: ]([\w\.]{1,9})\b.+like gecko/i
          // IE11
        ],
        [r, [a, "IE"]],
        [
          /yabrowser\/([\w\.]+)/i
          // Yandex
        ],
        [r, [a, "Yandex"]],
        [
          /(avast|avg)\/([\w\.]+)/i
          // Avast/AVG Secure Browser
        ],
        [[a, /(.+)/, "$1 Secure " + L], r],
        [
          /\bfocus\/([\w\.]+)/i
          // Firefox Focus
        ],
        [r, [a, B + " Focus"]],
        [
          /\bopt\/([\w\.]+)/i
          // Opera Touch
        ],
        [r, [a, V + " Touch"]],
        [
          /coc_coc\w+\/([\w\.]+)/i
          // Coc Coc Browser
        ],
        [r, [a, "Coc Coc"]],
        [
          /dolfin\/([\w\.]+)/i
          // Dolphin
        ],
        [r, [a, "Dolphin"]],
        [
          /coast\/([\w\.]+)/i
          // Opera Coast
        ],
        [r, [a, V + " Coast"]],
        [
          /miuibrowser\/([\w\.]+)/i
          // MIUI Browser
        ],
        [r, [a, "MIUI " + L]],
        [
          /fxios\/([-\w\.]+)/i
          // Firefox for iOS
        ],
        [r, [a, B]],
        [
          /\bqihu|(qi?ho?o?|360)browser/i
          // 360
        ],
        [[a, "360 " + L]],
        [
          /(oculus|samsung|sailfish|huawei)browser\/([\w\.]+)/i
        ],
        [[a, /(.+)/, "$1 " + L], r],
        [
          // Oculus/Samsung/Sailfish/Huawei Browser
          /(comodo_dragon)\/([\w\.]+)/i
          // Comodo Dragon
        ],
        [[a, /_/g, " "], r],
        [
          /(electron)\/([\w\.]+) safari/i,
          // Electron-based App
          /(tesla)(?: qtcarbrowser|\/(20\d\d\.[-\w\.]+))/i,
          // Tesla
          /m?(qqbrowser|baiduboxapp|2345Explorer)[\/ ]?([\w\.]+)/i
          // QQBrowser/Baidu App/2345 Browser
        ],
        [a, r],
        [
          /(metasr)[\/ ]?([\w\.]+)/i,
          // SouGouBrowser
          /(lbbrowser)/i,
          // LieBao Browser
          /\[(linkedin)app\]/i
          // LinkedIn App for iOS & Android
        ],
        [a],
        [
          // WebView
          /((?:fban\/fbios|fb_iab\/fb4a)(?!.+fbav)|;fbav\/([\w\.]+);)/i
          // Facebook App for iOS & Android
        ],
        [[a, me], r],
        [
          /safari (line)\/([\w\.]+)/i,
          // Line App for iOS
          /\b(line)\/([\w\.]+)\/iab/i,
          // Line App for Android
          /(chromium|instagram)[\/ ]([-\w\.]+)/i
          // Chromium/Instagram
        ],
        [a, r],
        [
          /\bgsa\/([\w\.]+) .*safari\//i
          // Google Search Appliance on iOS
        ],
        [r, [a, "GSA"]],
        [
          /headlesschrome(?:\/([\w\.]+)| )/i
          // Chrome Headless
        ],
        [r, [a, q + " Headless"]],
        [
          / wv\).+(chrome)\/([\w\.]+)/i
          // Chrome WebView
        ],
        [[a, q + " WebView"], r],
        [
          /droid.+ version\/([\w\.]+)\b.+(?:mobile safari|safari)/i
          // Android Browser
        ],
        [r, [a, "Android " + L]],
        [
          /(chrome|omniweb|arora|[tizenoka]{5} ?browser)\/v?([\w\.]+)/i
          // Chrome/OmniWeb/Arora/Tizen/Nokia
        ],
        [a, r],
        [
          /version\/([\w\.\,]+) .*mobile\/\w+ (safari)/i
          // Mobile Safari
        ],
        [r, [a, "Mobile Safari"]],
        [
          /version\/([\w(\.|\,)]+) .*(mobile ?safari|safari)/i
          // Safari & Safari Mobile
        ],
        [r, a],
        [
          /webkit.+?(mobile ?safari|safari)(\/[\w\.]+)/i
          // Safari < 3.0
        ],
        [a, [r, ne, Te]],
        [
          /(webkit|khtml)\/([\w\.]+)/i
        ],
        [a, r],
        [
          // Gecko based
          /(navigator|netscape\d?)\/([-\w\.]+)/i
          // Netscape
        ],
        [[a, "Netscape"], r],
        [
          /mobile vr; rv:([\w\.]+)\).+firefox/i
          // Firefox Reality
        ],
        [r, [a, B + " Reality"]],
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
        [a, r],
        [
          /(cobalt)\/([\w\.]+)/i
          // Cobalt
        ],
        [a, [r, /master.|lts./, ""]]
      ],
      cpu: [
        [
          /(?:(amd|x(?:(?:86|64)[-_])?|wow|win)64)[;\)]/i
          // AMD64 (x64)
        ],
        [[d, "amd64"]],
        [
          /(ia32(?=;))/i
          // IA32 (quicktime)
        ],
        [[d, A]],
        [
          /((?:i[346]|x)86)[;\)]/i
          // IA32 (x86)
        ],
        [[d, "ia32"]],
        [
          /\b(aarch64|arm(v?8e?l?|_?64))\b/i
          // ARM64
        ],
        [[d, "arm64"]],
        [
          /\b(arm(?:v[67])?ht?n?[fl]p?)\b/i
          // ARMHF
        ],
        [[d, "armhf"]],
        [
          // PocketPC mistakenly identified as PowerPC
          /windows (ce|mobile); ppc;/i
        ],
        [[d, "arm"]],
        [
          /((?:ppc|powerpc)(?:64)?)(?: mac|;|\))/i
          // PowerPC
        ],
        [[d, /ower/, y, A]],
        [
          /(sun4\w)[;\)]/i
          // SPARC
        ],
        [[d, "sparc"]],
        [
          /((?:avr32|ia64(?=;))|68k(?=\))|\barm(?=v(?:[1-7]|[5-7]1)l?|;|eabi)|(?=atmel )avr|(?:irix|mips|sparc)(?:64)?\b|pa-risc)/i
          // IA64, 68K, ARM/64, AVR/32, IRIX/64, MIPS/64, SPARC/64, PA-RISC
        ],
        [[d, A]]
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
        [o, [i, ie], [e, t]],
        [
          // Apple
          /\((ip(?:hone|od)[\w ]*);/i
          // iPod/iPhone
        ],
        [o, [i, H], [e, t]],
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
        [o, [i, be], [e, t]],
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
        [[o, /_/g, " "], [i, oe], [e, t]],
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
        [o, [i, "OPPO"], [e, t]],
        [
          // Vivo
          /vivo (\w+)(?: bui|\))/i,
          /\b(v[12]\d{3}\w?[at])(?: bui|;)/i
        ],
        [o, [i, "Vivo"], [e, t]],
        [
          // Realme
          /\b(rmx[12]\d{3})(?: bui|;|\))/i
        ],
        [o, [i, "Realme"], [e, t]],
        [
          // Motorola
          /\b(milestone|droid(?:[2-4x]| (?:bionic|x2|pro|razr))?:?( 4g)?)\b[\w ]+build\//i,
          /\bmot(?:orola)?[- ](\w*)/i,
          /((?:moto[\w\(\) ]+|xt\d{3,4}|nexus 6)(?= bui|\)))/i
        ],
        [o, [i, we], [e, t]],
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
        [o, [i, $], [e, t]],
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
        [[o, /_/g, " "], [i, "Nokia"], [e, t]],
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
        [o, [i, Z], [e, t]],
        [
          // Sony
          /droid.+ (a?\d[0-2]{2}so|[c-g]\d{4}|so[-gl]\w+|xq-a\w[4-7][12])(?= bui|\).+chrome\/(?![1-6]{0,1}\d\.))/i
        ],
        [o, [i, G], [e, t]],
        [
          /sony tablet [ps]/i,
          /\b(?:sony)?sgp\w+(?: bui|\))/i
        ],
        [[o, "Xperia Tablet"], [i, G], [e, s]],
        [
          // OnePlus
          / (kb2005|in20[12]5|be20[12][59])\b/i,
          /(?:one)?(?:plus)? (a\d0\d\d)(?: b|\))/i
        ],
        [o, [i, "OnePlus"], [e, t]],
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
        [[o, /(.+)/g, "Fire Phone $1"], [i, X], [e, t]],
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
        [o, [i, ue], [e, t]],
        [
          // Asus
          /(?:\b|asus_)(transfo[prime ]{4,10} \w+|eeepc|slider \w+|nexus 7|padfone|p00[cj])/i
        ],
        [o, [i, ce], [e, s]],
        [
          / (z[bes]6[027][012][km][ls]|zenfone \d\w?)\b/i
        ],
        [o, [i, ce], [e, t]],
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
        [i, [o, /_/g, " "], [e, t]],
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
        [o, [i, "Meizu"], [e, t]],
        [
          // Sharp
          /\b(sh-?[altvz]?\d\d[a-ekm]?)/i
        ],
        [o, [i, pe], [e, t]],
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
        [i, o, [e, t]],
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
        [o, [i, "Fairphone"], [e, t]],
        [
          /(u304aa)/i
          // AT&T
        ],
        [o, [i, "AT&T"], [e, t]],
        [
          /\bsie-(\w*)/i
          // Siemens
        ],
        [o, [i, "Siemens"], [e, t]],
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
        [o, [i, "ZTE"], [e, t]],
        [
          /\b(gen\d{3}) b.+49h/i
          // Swiss GEN Mobile
        ],
        [o, [i, "Swiss"], [e, t]],
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
        [[i, "Voice"], o, [e, t]],
        [
          /\b(lvtel\-)?(v1[12]) b/i
          // LvTel Phones
        ],
        [[i, "LvTel"], o, [e, t]],
        [
          /\b(ph-1) /i
          // Essential PH-1
        ],
        [o, [i, "Essential"], [e, t]],
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
        [i, o, [e, t]],
        [
          /(kin\.[onetw]{3})/i
          // Microsoft Kin
        ],
        [[o, /\./g, " "], [i, ee], [e, t]],
        [
          /droid.+; (cc6666?|et5[16]|mc[239][23]x?|vc8[03]x?)\)/i
          // Zebra
        ],
        [o, [i, ae], [e, s]],
        [
          /droid.+; (ec30|ps20|tc[2-8]\d[kx])\)/i
        ],
        [o, [i, ae], [e, t]],
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
        [o, [i, G], [e, g]],
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
        [i, [e, S]],
        [
          /hbbtv.+maple;(\d+)/i
        ],
        [[o, /^/, "SmartTV"], [i, ie], [e, S]],
        [
          /(nux; netcast.+smarttv|lg (netcast\.tv-201\d|android tv))/i
          // LG SmartTV
        ],
        [[i, $], [e, S]],
        [
          /(apple) ?tv/i
          // Apple TV
        ],
        [i, [o, H + " TV"], [e, S]],
        [
          /crkey/i
          // Google Chromecast
        ],
        [[o, q + "cast"], [i, Z], [e, S]],
        [
          /droid.+aft(\w)( bui|\))/i
          // Fire TV
        ],
        [o, [i, X], [e, S]],
        [
          /\(dtv[\);].+(aquos)/i,
          /(aquos-tv[\w ]+)\)/i
          // Sharp
        ],
        [o, [i, pe], [e, S]],
        [
          /(bravia[\w ]+)( bui|\))/i
          // Sony
        ],
        [o, [i, G], [e, S]],
        [
          /(mitv-\w{5}) bui/i
          // Xiaomi
        ],
        [o, [i, oe], [e, S]],
        [
          /\b(roku)[\dx]*[\)\/]((?:dvp-)?[\d\.]*)/i,
          // Roku
          /hbbtv\/\d+\.\d+\.\d+ +\([\w ]*; *(\w[^;]*);([^;]*)/i
          // HbbTV devices
        ],
        [[i, re], [o, re], [e, S]],
        [
          /\b(android tv|smart[- ]?tv|opera tv|tv; rv:)\b/i
          // SmartTV from Unidentified Vendors
        ],
        [[e, S]],
        [
          ///////////////////
          // WEARABLES
          ///////////////////
          /((pebble))app/i
          // Pebble
        ],
        [i, o, [e, O]],
        [
          /droid.+; (glass) \d/i
          // Google Glass
        ],
        [o, [i, Z], [e, O]],
        [
          /droid.+; (wt63?0{2,3})\)/i
        ],
        [o, [i, ae], [e, O]],
        [
          /(quest( 2)?)/i
          // Oculus Quest
        ],
        [o, [i, me], [e, O]],
        [
          ///////////////////
          // EMBEDDED
          ///////////////////
          /(tesla)(?: qtcarbrowser|\/[-\w\.]+)/i
          // Tesla
        ],
        [i, [e, le]],
        [
          ////////////////////
          // MIXED (GENERIC)
          ///////////////////
          /droid .+?; ([^;]+?)(?: bui|\) applew).+? mobile safari/i
          // Android Phones from Unidentified Vendors
        ],
        [o, [e, t]],
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
        [[e, t]],
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
        [r, [a, je + "HTML"]],
        [
          /webkit\/537\.36.+chrome\/(?!27)([\w\.]+)/i
          // Blink
        ],
        [r, [a, "Blink"]],
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
        [a, r],
        [
          /rv\:([\w\.]{1,9})\b.+(gecko)/i
          // Gecko
        ],
        [r, a]
      ],
      os: [
        [
          // Windows
          /microsoft (windows) (vista|xp)/i
          // Windows (iTunes)
        ],
        [a, r],
        [
          /(windows) nt 6\.2; (arm)/i,
          // Windows RT
          /(windows (?:phone(?: os)?|mobile))[\/ ]?([\d\.\w ]*)/i,
          // Windows Phone
          /(windows)[\/ ]?([ntce\d\. ]+\w)(?!.+xbox)/i
        ],
        [a, [r, ne, fe]],
        [
          /(win(?=3|9|n)|win 9x )([nt\d\.]+)/i
        ],
        [[a, "Windows"], [r, ne, fe]],
        [
          // iOS/macOS
          /ip[honead]{2,4}\b(?:.*os ([\w]+) like mac|; opera)/i,
          // iOS
          /cfnetwork\/.+darwin/i
        ],
        [[r, /_/g, "."], [a, "iOS"]],
        [
          /(mac os x) ?([\w\. ]*)/i,
          /(macintosh|mac_powerpc\b)(?!.+haiku)/i
          // Mac OS
        ],
        [[a, "Mac OS"], [r, /_/g, "."]],
        [
          // Mobile OSes
          /droid ([\w\.]+)\b.+(android[- ]x86|harmonyos)/i
          // Android-x86/HarmonyOS
        ],
        [r, a],
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
        [a, r],
        [
          /\(bb(10);/i
          // BlackBerry 10
        ],
        [r, [a, ue]],
        [
          /(?:symbian ?os|symbos|s60(?=;)|series60)[-\/ ]?([\w\.]*)/i
          // Symbian
        ],
        [r, [a, "Symbian"]],
        [
          /mozilla\/[\d\.]+ \((?:mobile|tablet|tv|mobile; [\w ]+); rv:.+ gecko\/([\w\.]+)/i
          // Firefox OS
        ],
        [r, [a, B + " OS"]],
        [
          /web0s;.+rt(tv)/i,
          /\b(?:hp)?wos(?:browser)?\/([\w\.]+)/i
          // WebOS
        ],
        [r, [a, "webOS"]],
        [
          // Google Chromecast
          /crkey\/([\d\.]+)/i
          // Google Chromecast
        ],
        [r, [a, q + "cast"]],
        [
          /(cros) [\w]+ ([\w\.]+\w)/i
          // Chromium OS
        ],
        [[a, "Chromium OS"], r],
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
        [a, r],
        [
          /(sunos) ?([\w\.\d]*)/i
          // Solaris
        ],
        [[a, "Solaris"], r],
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
        [a, r]
      ]
    }, T = function(l, p) {
      if (typeof l === x && (p = l, l = m), !(this instanceof T))
        return new T(l, p).getResult();
      var c = l || (typeof h !== j && h.navigator && h.navigator.userAgent ? h.navigator.userAgent : y), k = p ? Ne(he, p) : he;
      return this.getBrowser = function() {
        var u = {};
        return u[a] = m, u[r] = m, E.call(u, c, k.browser), u.major = Se(u.version), u;
      }, this.getCPU = function() {
        var u = {};
        return u[d] = m, E.call(u, c, k.cpu), u;
      }, this.getDevice = function() {
        var u = {};
        return u[i] = m, u[o] = m, u[e] = m, E.call(u, c, k.device), u;
      }, this.getEngine = function() {
        var u = {};
        return u[a] = m, u[r] = m, E.call(u, c, k.engine), u;
      }, this.getOS = function() {
        var u = {};
        return u[a] = m, u[r] = m, E.call(u, c, k.os), u;
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
        return c;
      }, this.setUA = function(u) {
        return c = typeof u === N && u.length > J ? re(u, J) : u, this;
      }, this.setUA(c), this;
    };
    T.VERSION = v, T.BROWSER = Q([a, r, D]), T.CPU = Q([d]), T.DEVICE = Q([o, i, e, g, t, S, s, O, le]), T.ENGINE = T.OS = Q([a, r]), n.exports && (b = n.exports = T), b.UAParser = T;
    var I = typeof h !== j && (h.jQuery || h.Zepto);
    if (I && !I.ua) {
      var W = new T();
      I.ua = W.getResult(), I.ua.get = function() {
        return W.getUA();
      }, I.ua.set = function(l) {
        W.setUA(l);
        var p = W.getResult();
        for (var c in p)
          I.ua[c] = p[c];
      };
    }
  })(typeof window == "object" ? window : Re);
})(Ue, K);
const He = K, qe = Ce({
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
    const b = (d) => n ? n[d] : void 0, h = (d) => {
      const g = n ? n[d] : d;
      return g && typeof g == "string" ? g : d;
    }, m = b("lang") || "en_GB", v = _e[m], y = (d) => d.split(".").reduce((g, t) => {
      if (g)
        return g[t];
    }, v), w = ke(), z = P(() => document.title), j = P(() => window.location.href), x = P(() => z.value.substring(0, 1)), N = ke(!1), D = () => {
      let d = new Date();
      const g = n.expires || 365;
      d.setDate(d.getDate() + g), de.set("addToHomescreenCalled", "true", {
        expires: d
      });
    }, o = P(() => {
      const d = b("iconColor"), g = b("iconPath"), t = b("iconTextColor");
      return {
        backgroundColor: d && typeof d == "string" ? d : "transparent",
        backgroundImage: g ? "url(" + b("iconPath") + ")" : "none",
        color: t && typeof t == "string" ? t : "black"
      };
    }), a = P(() => {
      const d = b("buttonTextColor"), g = b("buttonColor");
      return {
        color: d && d === "string" ? d : "white",
        backgroundColor: g && typeof g == "string" ? g : "black"
      };
    }), e = () => {
      D(), N.value = !1;
    }, i = () => {
      const d = document.getElementById("IOSmodal");
      d && (d.style.display = "none");
    }, r = () => {
      const g = new He().getResult(), t = {
        os: g.os.name,
        browser: g.browser.name
      }, s = document.getElementById("IOSmodal");
      w.value ? w.value.prompt() : t.os === "iOS" ? s && (s.style.display = "block") : t.os === "Android" ? alert(y("addMessages.android")) : t.os === "Windows" && (t.browser === "Chrome" || t.browser === "Edge") ? alert(y("addMessages.windows.chrome")) : t.os === "Windows" && t.browser === "Firefox" ? alert(y("addMessages.windows.firefox")) : t.os === "Mac OS" ? "ontouchstart" in window || navigator.maxTouchPoints > 0 ? s && (s.style.display = "block") : t.browser === "Firefox" ? alert(y("addMessages.macos.firefox")) : t.browser === "Chrome" ? alert(y("addMessages.macos.chrome")) : t.browser === "Safari" && alert(y("addMessages.macos.safari")) : alert(y("addMessages.others")), N.value = !1;
    };
    return xe(() => {
      window.addEventListener("beforeinstallprompt", (g) => {
        g.preventDefault(), w.value = g;
      });
      const d = de.get("addToHomescreenCalled");
      !Pe() && !d && (N.value = !0, D());
    }), {
      t: y,
      addToHomescreen: r,
      closeModal: i,
      close: e,
      buttonStyle: a,
      iconStyle: o,
      getCssOpt: h,
      getOpt: b,
      appUrl: j,
      firstCharTitle: x,
      appTitle: z,
      opened: N
    };
  }
}), Be = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pg0KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE3LjEuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPg0KPCFET0NUWVBFIHN2ZyBQVUJMSUMgIi0vL1czQy8vRFREIFNWRyAxLjEvL0VOIiAiaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEuZHRkIj4NCjxzdmcgdmVyc2lvbj0iMS4xIiBpZD0iQ2FwYV8xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB4PSIwcHgiIHk9IjBweCINCgkgdmlld0JveD0iMCAwIDMzMy4zMjQgMzMzLjMyNCIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgMzMzLjMyNCAzMzMuMzI0OyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI+DQo8Zz4NCgk8cGF0aCBzdHlsZT0iZmlsbDojMjIyMjIwOyIgZD0iTTEyNS4yNTUsNTkuNTEzbDMzLjkwNy0zMy45MDd2MTQ5LjQ1MWMwLDQuMTQzLDMuMzU4LDcuNSw3LjUsNy41czcuNS0zLjM1Nyw3LjUtNy41VjI1LjYwNg0KCQlsMzMuOTA3LDMzLjkwN2MxLjQ2NCwxLjQ2NCwzLjM4NCwyLjE5Niw1LjMwMywyLjE5NnMzLjgzOS0wLjczMiw1LjMwMy0yLjE5NmMyLjkyOS0yLjkzLDIuOTI5LTcuNjc4LDAtMTAuNjA3bC00Ni43MS00Ni43MQ0KCQljLTIuOTI5LTIuOTI4LTcuNjc4LTIuOTI4LTEwLjYwNiwwbC00Ni43MSw0Ni43MWMtMi45MjksMi45My0yLjkyOSw3LjY3OCwwLDEwLjYwN0MxMTcuNTc3LDYyLjQ0MSwxMjIuMzI2LDYyLjQ0MSwxMjUuMjU1LDU5LjUxM3oNCgkJIi8+DQoJPHBhdGggc3R5bGU9ImZpbGw6IzIyMjIyMDsiIGQ9Ik0yNjMuMzI4LDg3LjU1N2gtNjEuNjQ1Yy00LjE0MiwwLTcuNSwzLjM1Ny03LjUsNy41czMuMzU4LDcuNSw3LjUsNy41aDU0LjE0NXYyMTUuNzY3SDc3LjQ5NQ0KCQlWMTAyLjU1N2g1NC4xNDVjNC4xNDIsMCw3LjUtMy4zNTcsNy41LTcuNXMtMy4zNTgtNy41LTcuNS03LjVINjkuOTk1Yy00LjE0MiwwLTcuNSwzLjM1Ny03LjUsNy41djIzMC43NjcNCgkJYzAsNC4xNDMsMy4zNTgsNy41LDcuNSw3LjVoMTkzLjMzM2M0LjE0MiwwLDcuNS0zLjM1Nyw3LjUtNy41Vjk1LjA1N0MyNzAuODI4LDkwLjkxNSwyNjcuNDcsODcuNTU3LDI2My4zMjgsODcuNTU3eiIvPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPC9zdmc+DQo=", Ze = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgd2lkdGg9IjI0Ij48cGF0aCBkPSJNMCAwaDI0djI0SDBWMHoiIGZpbGw9Im5vbmUiLz48cGF0aCBkPSJNMTkgM0g1Yy0xLjExIDAtMiAuOS0yIDJ2MTRjMCAxLjEuODkgMiAyIDJoMTRjMS4xIDAgMi0uOSAyLTJWNWMwLTEuMS0uOS0yLTItMnptMCAxNkg1VjVoMTR2MTR6bS04LTJoMnYtNGg0di0yaC00VjdoLTJ2NEg3djJoNHoiLz48L3N2Zz4=";
const Ve = (n, b) => {
  const h = n.__vccOpts || n;
  for (const [m, v] of b)
    h[m] = v;
  return h;
}, Ge = { class: "add-to-homescreen-plugin-container" }, Qe = { class: "flex" }, We = { class: "icon-container" }, Fe = { class: "col" }, Ye = /* @__PURE__ */ M("br", null, null, -1), Ke = ["innerHTML"], Je = { class: "flex" }, Xe = { class: "col" }, $e = { class: "btn-container" }, ei = {
  id: "IOSmodal",
  class: "modal add-to-homescreen-visible"
}, ii = { class: "modal-content" }, oi = /* @__PURE__ */ M("img", {
  class: "shareIOS",
  src: Be,
  alt: "share IOS"
}, null, -1), ai = /* @__PURE__ */ M("img", {
  class: "addIOS",
  src: Ze,
  alt: "add IOS"
}, null, -1);
function ri(n, b, h, m, v, y) {
  return Me(), ze("div", Ge, [
    M("div", {
      class: Le([
        "add-to-homescreen-container",
        n.opened ? "add-to-homescreen-visible" : "add-to-homescreen-hidden"
      ])
    }, [
      M("div", Qe, [
        M("div", We, [
          M("span", {
            class: "icon",
            style: R(n.iconStyle)
          }, [
            n.getOpt("iconPath") ? De("", !0) : (Me(), ze(Ie, { key: 0 }, [
              te(U(n.firstCharTitle), 1)
            ], 64))
          ], 4)
        ]),
        M("div", Fe, [
          M("span", {
            class: "app-title",
            style: R(n.getCssOpt("titleColor"))
          }, U(n.getOpt("title") ? n.getOpt("title") : n.appTitle), 5),
          Ye,
          M("span", {
            class: "app-content",
            style: R({ color: n.getCssOpt("contentColor") }),
            innerHTML: n.getOpt("content") || n.appUrl
          }, null, 12, Ke)
        ])
      ]),
      M("div", Je, [
        M("div", Xe, [
          M("div", $e, [
            M("button", {
              onClick: b[0] || (b[0] = (...w) => n.addToHomescreen && n.addToHomescreen(...w)),
              class: "add-button",
              style: R(n.buttonStyle)
            }, U(n.t("addToHomescreen")), 5)
          ])
        ])
      ]),
      M("button", {
        class: "close_btn",
        onClick: b[1] || (b[1] = (...w) => n.close && n.close(...w))
      })
    ], 2),
    M("div", ei, [
      M("div", ii, [
        M("ul", null, [
          M("li", null, [
            te(U(n.t("addMessages.ios1")) + " ", 1),
            oi
          ]),
          M("li", null, [
            te(U(n.t("addMessages.ios2")) + " ", 1),
            ai
          ])
        ]),
        M("button", {
          class: "closeModal",
          style: R(n.buttonStyle),
          label: "OK",
          onClick: b[2] || (b[2] = (...w) => n.closeModal && n.closeModal(...w))
        }, " OK ", 4)
      ])
    ])
  ]);
}
const ni = /* @__PURE__ */ Ve(qe, [["render", ri]]), ti = () => {
  const n = ["file:", "cordova:", "capacitor:"];
  return window.matchMedia("(display-mode: standalone)").matches || window.location && window.location.protocol && n.indexOf(window.location.protocol) !== -1;
};
function si(n) {
  if (!ti() || !de.get("addToHomescreenCalled")) {
    const b = Oe(ni, n), h = document.createElement("div");
    return document.body.appendChild(h), Ae(b, h), b.component;
  }
}
const li = {
  install(n, b) {
    si(b);
  }
};
export {
  li as default,
  si as useAddToHomescreen
};
