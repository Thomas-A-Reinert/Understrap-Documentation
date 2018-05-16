/* global workbox:false */

self.importScripts('/assets/js/vendor/workbox-sw.js')

workbox.precaching.precacheAndRoute([
  {
    "url": "assets/brand/understrap-outline.svg",
    "revision": "e17dc9ad8f7b0b817d98b06bcaeb5aff"
  },
  {
    "url": "assets/brand/understrap-punchout.svg",
    "revision": "e17dc9ad8f7b0b817d98b06bcaeb5aff"
  },
  {
    "url": "assets/brand/understrap-social-logo.png",
    "revision": "981a0856a91d54f1234e7d3c76e484b8"
  },
  {
    "url": "assets/brand/understrap-social.png",
    "revision": "72100a277e1211f05e418ff2309f157d"
  },
  {
    "url": "assets/brand/understrap-solid.svg",
    "revision": "e17dc9ad8f7b0b817d98b06bcaeb5aff"
  },
  {
    "url": "assets/css/docs.min.css",
    "revision": "2a39a647ee8aa955e9c02c57f34ebc09"
  },
  {
    "url": "assets/img/favicons/android-chrome-192x192.png",
    "revision": "c2dbb277806a397216b0950051a67cb3"
  },
  {
    "url": "assets/img/favicons/android-chrome-512x512.png",
    "revision": "0d7a8ce59e1cef5be56622d8e738b116"
  },
  {
    "url": "assets/img/favicons/apple-touch-icon.png",
    "revision": "fec633cf9b3afacbe0767bc0e70c3101"
  },
  {
    "url": "assets/img/favicons/favicon-16x16.png",
    "revision": "6b8d22ecb10f8a4d817ed53e274177d7"
  },
  {
    "url": "assets/img/favicons/favicon-32x32.png",
    "revision": "ed56e5bee5a9090501ed0fef75ba1dfe"
  },
  {
    "url": "assets/img/favicons/manifest.json",
    "revision": "8ced413e72133801a6a8751e59742e89"
  },
  {
    "url": "assets/img/favicons/mstile-144x144.png",
    "revision": "907a737ad2fa68a82a2a2b3a5a95a5fe"
  },
  {
    "url": "assets/img/favicons/mstile-150x150.png",
    "revision": "6ce43ca0daea6fbca1f2325595c6a6f5"
  },
  {
    "url": "assets/img/favicons/mstile-310x150.png",
    "revision": "c1e2df716d6ea43bab620d2899d7f3a0"
  },
  {
    "url": "assets/img/favicons/mstile-310x310.png",
    "revision": "895d067819ab8fa71c34c2e512064d61"
  },
  {
    "url": "assets/img/favicons/mstile-70x70.png",
    "revision": "66869e361217ccfe6c0d2a779543767c"
  },
  {
    "url": "assets/img/favicons/safari-pinned-tab.svg",
    "revision": "6b6b78894033fd91ce75affb548d8e67"
  },
  {
    "url": "assets/img/understrap-stack.png",
    "revision": "82b2dd2ec207ebf91136febf149134d3"
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
    "revision": "f40033140d2cfbc22ca70e5f57842208"
  },
  {
    "url": "docs/0.8.2/about/credits/index.html",
    "revision": "39054101d05ab6095a03a9323c769e7d"
  },
  {
    "url": "docs/0.8.2/about/license/index.html",
    "revision": "1b8683ca372ba214c277778f40e42e46"
  },
  {
    "url": "docs/0.8.2/changelog/index.html",
    "revision": "f5cb7edbc8c51b8a2cc91a1bebb51845"
  },
  {
    "url": "docs/0.8.2/development/available-gulp-tasks/index.html",
    "revision": "573df85b1081786e9880421b025addbd"
  },
  {
    "url": "docs/0.8.2/development/bootstrap/index.html",
    "revision": "91e4d78de7dfd0f3650c06960d98022b"
  },
  {
    "url": "docs/0.8.2/development/developing-with-npm-and-gulp/index.html",
    "revision": "abf9dacbbcffd713e8e547e6474b1e2b"
  },
  {
    "url": "docs/0.8.2/development/scss/index.html",
    "revision": "40f46bbb9d1f3840bf956ea91d66e0c7"
  },
  {
    "url": "docs/0.8.2/extend/custom-menus-and-menu-areas/index.html",
    "revision": "ccf7284ac337d4605f44a28daa7aa9ed"
  },
  {
    "url": "docs/0.8.2/extend/custom-widget-areas-sidebars/index.html",
    "revision": "2341b66eced63444a0e06785d3296c1d"
  },
  {
    "url": "docs/0.8.2/extend/fontawesome-4/index.html",
    "revision": "b338adf0517235b7dbb10199048c4b72"
  },
  {
    "url": "docs/0.8.2/extend/fontawesome-5/index.html",
    "revision": "57b7bc2a78437ff5182a164d210f6f62"
  },
  {
    "url": "docs/0.8.2/getting-started/child-theme/index.html",
    "revision": "dbe69b1554bd3a513c374d2c151c65f9"
  },
  {
    "url": "docs/0.8.2/getting-started/customizer-options/index.html",
    "revision": "454b237599b074e870f4011a4a48db94"
  },
  {
    "url": "docs/0.8.2/getting-started/gulp-tasks/index.html",
    "revision": "d87bbde697f8b133dd2079d169c988f8"
  },
  {
    "url": "docs/0.8.2/getting-started/menus/index.html",
    "revision": "c15a066f210efe58f9d34f7656188202"
  },
  {
    "url": "docs/0.8.2/getting-started/page-templates/index.html",
    "revision": "0c611c373a7b4ac2fb288a2216756591"
  },
  {
    "url": "docs/0.8.2/getting-started/theme-structure/index.html",
    "revision": "5e40a5b411bd25d418ff36d0e4ec455e"
  },
  {
    "url": "docs/0.8.2/getting-started/widgets-widget-areas/index.html",
    "revision": "cb2520ae078c53699f76df75e5d77315"
  },
  {
    "url": "docs/0.8.2/gutenberg/index.html",
    "revision": "f6ecd4d3527354e3073923254fd710c5"
  },
  {
    "url": "docs/0.8.2/how-to-update/child-theme/index.html",
    "revision": "17e0fc39032ae122f93eccb6dc9c52b0"
  },
  {
    "url": "docs/0.8.2/how-to-update/parent-theme/index.html",
    "revision": "2406ffc0d27ca75b27577ac8e4be6588"
  },
  {
    "url": "docs/0.8.2/installation/via-npm/index.html",
    "revision": "aff95105cccd2c4d8353af04129434aa"
  },
  {
    "url": "docs/0.8.2/installation/via-wordpress-theme-installer/index.html",
    "revision": "dfa755ac4e5b569e30962c9d845404bf"
  },
  {
    "url": "docs/0.8.2/introduction/index.html",
    "revision": "b3b83fa3682bba5f135f3fce4e4dfeff"
  },
  {
    "url": "docs/0.8.2/translating-understrap/index.html",
    "revision": "a094245dabef27a37a7720ce57b8d75f"
  },
  {
    "url": "docs/0.8.2/woocommerce/index.html",
    "revision": "745280772c9f0777f7ff7cbad29101d5"
  },
  {
    "url": "index.html",
    "revision": "8a19971d665344b64beae3010e66352d"
  },
  {
    "url": "redirects.json",
    "revision": "99914b932bd37a50b983c5e7c90ae93b"
  }
])
