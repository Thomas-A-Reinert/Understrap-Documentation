/* global workbox:false */

self.importScripts('/assets/js/vendor/workbox-sw.js')

workbox.precaching.precacheAndRoute([
  {
    "url": "assets/brand/bootstrap-outline.svg",
    "revision": "9537646a9202cb5dca44e9034c1b414b"
  },
  {
    "url": "assets/brand/bootstrap-punchout.svg",
    "revision": "372e344ac243c4fa7c6c8b8a2af0e5ff"
  },
  {
    "url": "assets/brand/bootstrap-social-logo.png",
    "revision": "1e9e93d863b7811934889f9aac89c7de"
  },
  {
    "url": "assets/brand/bootstrap-social.png",
    "revision": "56be615bbca4502de5d55d721dae917f"
  },
  {
    "url": "assets/brand/bootstrap-solid.svg",
    "revision": "ea931a5b98a97e8b8658d9f6d537329e"
  },
  {
    "url": "assets/css/docs.min.css",
    "revision": "2a39a647ee8aa955e9c02c57f34ebc09"
  },
  {
    "url": "assets/img/bootstrap-stack.png",
    "revision": "82b2dd2ec207ebf91136febf149134d3"
  },
  {
    "url": "assets/img/bootstrap-themes.png",
    "revision": "3976b58ff407451e8e8b598fdcde2cd2"
  },
  {
    "url": "assets/img/favicons/android-chrome-192x192.png",
    "revision": "643718426d0a7d60036217ba988155be"
  },
  {
    "url": "assets/img/favicons/android-chrome-512x512.png",
    "revision": "eb512e79165f504fd4da4d2758d5584b"
  },
  {
    "url": "assets/img/favicons/apple-touch-icon.png",
    "revision": "042a7e9fdd293212aca19150aef71b0d"
  },
  {
    "url": "assets/img/favicons/favicon-16x16.png",
    "revision": "50c62448d4014e5fb411887c05c2935b"
  },
  {
    "url": "assets/img/favicons/favicon-32x32.png",
    "revision": "fed84e16b6ccfe88ee7ffaae5dfefd34"
  },
  {
    "url": "assets/img/favicons/manifest.json",
    "revision": "6a3aee05ff59759ef9db845a96a9a3c6"
  },
  {
    "url": "assets/img/favicons/mstile-144x144.png",
    "revision": "84892991321e7998ca4c80ae21175f78"
  },
  {
    "url": "assets/img/favicons/mstile-150x150.png",
    "revision": "61821c45a353e259bb83f9b0d338f5e8"
  },
  {
    "url": "assets/img/favicons/mstile-310x150.png",
    "revision": "913e1b81006831c72a7bca38e4125edb"
  },
  {
    "url": "assets/img/favicons/mstile-310x310.png",
    "revision": "29d79a7e648876504496211f003c4076"
  },
  {
    "url": "assets/img/favicons/mstile-70x70.png",
    "revision": "386d71707992eb91fc53df303e99c2e7"
  },
  {
    "url": "assets/img/favicons/safari-pinned-tab.svg",
    "revision": "6b6b78894033fd91ce75affb548d8e67"
  },
  {
    "url": "assets/js/docs.min.js",
    "revision": "9109c979ae60b0c5584b59ca6945d630"
  },
  {
    "url": "assets/js/src/application.js",
    "revision": "83edc01382cfd889f982162964ec374e"
  },
  {
    "url": "assets/js/src/ie-emulation-modes-warning.js",
    "revision": "c6e7032adf9bd98ac39e83c83108977b"
  },
  {
    "url": "assets/js/src/pwa.js",
    "revision": "cac6034355863d6205e66862f6a729f7"
  },
  {
    "url": "assets/js/src/search.js",
    "revision": "5b8bb2081b9e10ee9a469dd5feca5996"
  },
  {
    "url": "assets/js/vendor/anchor.min.js",
    "revision": "01e6254e9f69c0c00f05060b0e1990fc"
  },
  {
    "url": "assets/js/vendor/clipboard.min.js",
    "revision": "3f3688138a1b9fc4ef669ce9056b6674"
  },
  {
    "url": "assets/js/vendor/holder.min.js",
    "revision": "6266d87979b32f717d298f7adf36984a"
  },
  {
    "url": "assets/js/vendor/jquery-slim.min.js",
    "revision": "99b0a83cf1b0b1e2cb16041520e87641"
  },
  {
    "url": "assets/js/vendor/popper.min.js",
    "revision": "83fb8c4d9199dce0224da0206423106f"
  },
  {
    "url": "assets/js/vendor/workbox-sw.js",
    "revision": "d41d8cd98f00b204e9800998ecf8427e"
  },
  {
    "url": "dist/css/bootstrap-grid.css",
    "revision": "db438cff680b6d0c029f75647b4b138a"
  },
  {
    "url": "dist/css/bootstrap-grid.min.css",
    "revision": "2206c9fb0197956129137af662b31115"
  },
  {
    "url": "dist/css/bootstrap-reboot.css",
    "revision": "cceed351e3a8401f573988a38e78d3a8"
  },
  {
    "url": "dist/css/bootstrap-reboot.min.css",
    "revision": "e2b23d34f3fcc9ce074c942e76f25d61"
  },
  {
    "url": "dist/css/bootstrap.css",
    "revision": "82252d754417f95f7779be349acc6361"
  },
  {
    "url": "dist/css/bootstrap.min.css",
    "revision": "a7022c6fa83d91db67738d6e3cd3252d"
  },
  {
    "url": "dist/js/bootstrap.bundle.js",
    "revision": "ee08eb7f44335a3cf385e03d4406e4a5"
  },
  {
    "url": "dist/js/bootstrap.bundle.min.js",
    "revision": "d70c474886678aebe3e9d91965dc8b62"
  },
  {
    "url": "dist/js/bootstrap.js",
    "revision": "c2cdb900858c3e63ce8cd9f69171d342"
  },
  {
    "url": "dist/js/bootstrap.min.js",
    "revision": "eb5fac582a82f296aeb74900b01a2fa3"
  },
  {
    "url": "docs/0.8.2/about/about-understrap/index.html",
    "revision": "9a23c073ee55fd1a1cf911e7e20942fc"
  },
  {
    "url": "docs/0.8.2/about/credits/index.html",
    "revision": "be9f3e3e5fe66c01828960e2c504e1b6"
  },
  {
    "url": "docs/0.8.2/about/license/index.html",
    "revision": "c47ae49bed2bc608aa15751b115b14dd"
  },
  {
    "url": "docs/0.8.2/changelog/index.html",
    "revision": "6d522dbaac7d1502c9a19fdd3ee58ce2"
  },
  {
    "url": "docs/0.8.2/development/available-gulp-tasks/index.html",
    "revision": "1119af08eda9eecf946da429c7ea69a1"
  },
  {
    "url": "docs/0.8.2/development/developing-with-npm-and-gulp/index.html",
    "revision": "f3377742e79555ab57c8320eead71134"
  },
  {
    "url": "docs/0.8.2/development/scss/index.html",
    "revision": "5a14e404dc979af43300c420f54a9dc9"
  },
  {
    "url": "docs/0.8.2/development/working-with-gulp-watch/index.html",
    "revision": "4b68a12deadee8eb45e5f02e90d8c820"
  },
  {
    "url": "docs/0.8.2/extend/custom-menus-and-menu-areas/index.html",
    "revision": "57f0ee33871b7c019bad916d13004a92"
  },
  {
    "url": "docs/0.8.2/extend/custom-widget-areas-sidebars/index.html",
    "revision": "741fdb79db90f0edf63a14f616144caa"
  },
  {
    "url": "docs/0.8.2/extend/fontawesome-4/index.html",
    "revision": "57730c07e41ab91b51fc402a863abe94"
  },
  {
    "url": "docs/0.8.2/extend/fontawesome-5/index.html",
    "revision": "37b5524f2f3d00fb9bf91fd6364f3c2b"
  },
  {
    "url": "docs/0.8.2/getting-started/child-theme/index.html",
    "revision": "072d2fd1a1d11d3c855d08a074424ce2"
  },
  {
    "url": "docs/0.8.2/getting-started/customizer-options/index.html",
    "revision": "3b16401c34cbdad6d5813d5a70c60ff7"
  },
  {
    "url": "docs/0.8.2/getting-started/gulp-tasks/index.html",
    "revision": "e7aee4212acf641c51838c39e6d2615a"
  },
  {
    "url": "docs/0.8.2/getting-started/menus/index.html",
    "revision": "f206be13b498d46f1b62c5cc85f3f150"
  },
  {
    "url": "docs/0.8.2/getting-started/page-templates/index.html",
    "revision": "4f594d66b66b2e019e85cbf711e130b7"
  },
  {
    "url": "docs/0.8.2/getting-started/theme-structure/index.html",
    "revision": "4a37695f9c86c844213249caa22a2bbe"
  },
  {
    "url": "docs/0.8.2/getting-started/widgets-widget-areas/index.html",
    "revision": "2a93babc35594c24b003fedd5ac24001"
  },
  {
    "url": "docs/0.8.2/gutenberg/index.html",
    "revision": "60c2e13f2590af15fccc48421e5882a4"
  },
  {
    "url": "docs/0.8.2/how-to-update/child-theme/index.html",
    "revision": "65a29dc332f1a3f8ea167e7198fdee98"
  },
  {
    "url": "docs/0.8.2/how-to-update/parent-theme/index.html",
    "revision": "b9693dc0eb8974ae1ec02b0911e97d71"
  },
  {
    "url": "docs/0.8.2/installation/bower/index.html",
    "revision": "b8e32adeb813a22fab99ab37ebf645cb"
  },
  {
    "url": "docs/0.8.2/installation/composer/index.html",
    "revision": "d6b4890f64a968d05939944c97445b8a"
  },
  {
    "url": "docs/0.8.2/installation/npm/index.html",
    "revision": "18d13b72541ca28877f0275c0c0aa7a0"
  },
  {
    "url": "docs/0.8.2/installation/wordpress-theme-installer/index.html",
    "revision": "c344ee72572e60c1676cc9ea22f70442"
  },
  {
    "url": "docs/0.8.2/installation/yarn/index.html",
    "revision": "61749896881a328f0a99e11d09581b2d"
  },
  {
    "url": "docs/0.8.2/introduction/index.html",
    "revision": "17a92111be520e004b98ab980e934489"
  },
  {
    "url": "docs/0.8.2/translating-understrap/index.html",
    "revision": "da4ce1c21bf0d88ab98b143cc8d08847"
  },
  {
    "url": "docs/0.8.2/woocommerce/index.html",
    "revision": "eb337c73326a9fa3a3f41a30dde1109d"
  },
  {
    "url": "index.html",
    "revision": "833198a9099a62a6a0476b9f0e46af5a"
  },
  {
    "url": "redirects.json",
    "revision": "99914b932bd37a50b983c5e7c90ae93b"
  }
])
