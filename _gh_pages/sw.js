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
    "revision": "edb9f9d029380a590ae34196e3fd57f6"
  },
  {
    "url": "dist/css/bootstrap-reboot.css",
    "revision": "cceed351e3a8401f573988a38e78d3a8"
  },
  {
    "url": "dist/css/bootstrap-reboot.min.css",
    "revision": "7f3c013b65a10206b698bc15b3fa79ff"
  },
  {
    "url": "dist/css/bootstrap.css",
    "revision": "3cd715658fb2a20295f6379fcf5eabbc"
  },
  {
    "url": "dist/css/bootstrap.min.css",
    "revision": "5496982138ac565d9f175f641362e8ec"
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
    "revision": "b4c55841658aaffc9b90b6f1500e7f46"
  },
  {
    "url": "docs/0.8.2/about/credits/index.html",
    "revision": "ab5bbf48e97a47b7e10f2d49416d8b3a"
  },
  {
    "url": "docs/0.8.2/about/license/index.html",
    "revision": "b37e7a7a030d5692e90abf438a2d56cb"
  },
  {
    "url": "docs/0.8.2/changelog/index.html",
    "revision": "b0f90e7ee13c6724ee2ee4600cc7ae44"
  },
  {
    "url": "docs/0.8.2/development/available-gulp-tasks/index.html",
    "revision": "355ac6d1be67fd689e4f8b22b543eb7d"
  },
  {
    "url": "docs/0.8.2/development/bootstrap/index.html",
    "revision": "e404a5d6f72fad4a35f1eeea3b78309b"
  },
  {
    "url": "docs/0.8.2/development/developing-with-npm-and-gulp/index.html",
    "revision": "5d144b2cf75fc15176e5b131ea09bd27"
  },
  {
    "url": "docs/0.8.2/development/scss/index.html",
    "revision": "c7253a99a05a58d44fab94dd31a739a6"
  },
  {
    "url": "docs/0.8.2/extend/custom-menus-and-menu-areas/index.html",
    "revision": "099afde8d6e01e5745dce15c906c93d4"
  },
  {
    "url": "docs/0.8.2/extend/custom-widget-areas-sidebars/index.html",
    "revision": "bc1cd4b6efbb21081b60b99c4646e8f3"
  },
  {
    "url": "docs/0.8.2/extend/fontawesome-4/index.html",
    "revision": "ac613688f04d06783a483c2b0ec5d651"
  },
  {
    "url": "docs/0.8.2/extend/fontawesome-5/index.html",
    "revision": "572fd1299af23b4a9561f220b5c9c681"
  },
  {
    "url": "docs/0.8.2/getting-started/child-theme/index.html",
    "revision": "f80da8dd449e08e1651302d41acf519a"
  },
  {
    "url": "docs/0.8.2/getting-started/customizer-options/index.html",
    "revision": "907303153bbcd3eff8a40b6a673618e3"
  },
  {
    "url": "docs/0.8.2/getting-started/gulp-tasks/index.html",
    "revision": "76748f4a7cc0bb3801958fa1daa46107"
  },
  {
    "url": "docs/0.8.2/getting-started/menus/index.html",
    "revision": "50839470d1cfd5a97c47c8d3f91684f0"
  },
  {
    "url": "docs/0.8.2/getting-started/page-templates/index.html",
    "revision": "cc0f87697fc38ba67c38dc09b62aea30"
  },
  {
    "url": "docs/0.8.2/getting-started/theme-structure/index.html",
    "revision": "a7411a24ea61e87a68f2adf9e57a75e6"
  },
  {
    "url": "docs/0.8.2/getting-started/widgets-widget-areas/index.html",
    "revision": "c6bb70397c72d508a4dfed6eaf86e2c1"
  },
  {
    "url": "docs/0.8.2/gutenberg/index.html",
    "revision": "d9d4c860e54814b5ef0b6c56c5874034"
  },
  {
    "url": "docs/0.8.2/how-to-update/child-theme/index.html",
    "revision": "26cda59620ece893d691284735cf7e25"
  },
  {
    "url": "docs/0.8.2/how-to-update/parent-theme/index.html",
    "revision": "e2849655d772ab4f83cf647161c2f3ec"
  },
  {
    "url": "docs/0.8.2/installation/via-npm/index.html",
    "revision": "83e73c022ee6876d539f540d55a017bc"
  },
  {
    "url": "docs/0.8.2/installation/via-wordpress-theme-installer/index.html",
    "revision": "de5597602a0e981632dc07742b691910"
  },
  {
    "url": "docs/0.8.2/introduction/index.html",
    "revision": "d4bffb32204a49e81a47dcd7d6d0c223"
  },
  {
    "url": "docs/0.8.2/translating-understrap/index.html",
    "revision": "e25e1b6887e704039649467994296d17"
  },
  {
    "url": "docs/0.8.2/woocommerce/index.html",
    "revision": "0088dfdbf0e79f27214cb3042d0541bd"
  },
  {
    "url": "index.html",
    "revision": "c4e7a936f19d3d28b346021deff9d770"
  },
  {
    "url": "redirects.json",
    "revision": "99914b932bd37a50b983c5e7c90ae93b"
  }
])
