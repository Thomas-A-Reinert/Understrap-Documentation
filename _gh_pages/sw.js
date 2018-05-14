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
    "revision": "417e9357b809b5f097e87455da6d43d9"
  },
  {
    "url": "docs/0.8.2/about/credits/index.html",
    "revision": "a0748462c77c98154a0447c8f55c767d"
  },
  {
    "url": "docs/0.8.2/about/license/index.html",
    "revision": "997e81a633c4498f775196ac3e15db74"
  },
  {
    "url": "docs/0.8.2/changelog/index.html",
    "revision": "feafba203a67afc8bab952940d6a2df0"
  },
  {
    "url": "docs/0.8.2/development/available-gulp-tasks/index.html",
    "revision": "bf7f51ec119f2118711bd109e5a0571c"
  },
  {
    "url": "docs/0.8.2/development/bootstrap/index.html",
    "revision": "7a239042933bec069f88a2db5e1fc9ce"
  },
  {
    "url": "docs/0.8.2/development/developing-with-npm-and-gulp/index.html",
    "revision": "0d4c8f7356f2be2c51dba329b9ad338c"
  },
  {
    "url": "docs/0.8.2/development/scss/index.html",
    "revision": "966f4304bf9e3c11f85cf6b0eb4e4f10"
  },
  {
    "url": "docs/0.8.2/extend/custom-menus-and-menu-areas/index.html",
    "revision": "ea80818c7edd8da8bdb57aefcc81e5a4"
  },
  {
    "url": "docs/0.8.2/extend/custom-widget-areas-sidebars/index.html",
    "revision": "2362fc2b9f2dd88df2f6b1491abfa758"
  },
  {
    "url": "docs/0.8.2/extend/fontawesome-4/index.html",
    "revision": "059387dd7eb1f11c9375aee915fb4e77"
  },
  {
    "url": "docs/0.8.2/extend/fontawesome-5/index.html",
    "revision": "dfc62b443e4d1cb82e8f25fcab17a5ff"
  },
  {
    "url": "docs/0.8.2/getting-started/child-theme/index.html",
    "revision": "e72ed560f9ec34e860823c82d596552f"
  },
  {
    "url": "docs/0.8.2/getting-started/customizer-options/index.html",
    "revision": "f15394619ff23b7875af222bfd76e082"
  },
  {
    "url": "docs/0.8.2/getting-started/gulp-tasks/index.html",
    "revision": "c23f424574b2e6798cfa5d5daabb70f3"
  },
  {
    "url": "docs/0.8.2/getting-started/menus/index.html",
    "revision": "9bcc76f27fc490717e213b15f82ff271"
  },
  {
    "url": "docs/0.8.2/getting-started/page-templates/index.html",
    "revision": "3469b48942651b897950c7bfa683ec4b"
  },
  {
    "url": "docs/0.8.2/getting-started/theme-structure/index.html",
    "revision": "225b941e2462d96f7720aed41db1da48"
  },
  {
    "url": "docs/0.8.2/getting-started/widgets-widget-areas/index.html",
    "revision": "25acfa3da6a9747b42c9bbc9b879139c"
  },
  {
    "url": "docs/0.8.2/gutenberg/index.html",
    "revision": "4a61659aa451b63f2f5735c073c35fc3"
  },
  {
    "url": "docs/0.8.2/how-to-update/child-theme/index.html",
    "revision": "fadf69d357c899910382cd23278f820a"
  },
  {
    "url": "docs/0.8.2/how-to-update/parent-theme/index.html",
    "revision": "d670b67c014e24f5a47b6b811483b1a9"
  },
  {
    "url": "docs/0.8.2/installation/via-npm/index.html",
    "revision": "a7184d74d5326850f71e0da7eedeb145"
  },
  {
    "url": "docs/0.8.2/installation/via-wordpress-theme-installer/index.html",
    "revision": "019da15cf7d38cd614850fdc2735de09"
  },
  {
    "url": "docs/0.8.2/introduction/index.html",
    "revision": "feff9a8f1d62cbf0ac85246274121430"
  },
  {
    "url": "docs/0.8.2/translating-understrap/index.html",
    "revision": "94395a64ca6617d72900a0f57f275cae"
  },
  {
    "url": "docs/0.8.2/woocommerce/index.html",
    "revision": "48f02f6ae832da81bb8a7f65901dbcd8"
  },
  {
    "url": "index.html",
    "revision": "581bdecd8a724efad3aed0066828606d"
  },
  {
    "url": "redirects.json",
    "revision": "99914b932bd37a50b983c5e7c90ae93b"
  }
])
