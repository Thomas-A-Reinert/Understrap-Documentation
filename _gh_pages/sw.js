/* global workbox:false */

self.importScripts('/assets/js/vendor/workbox-sw.js')

workbox.precaching.precacheAndRoute([
  {
    "url": "assets/brand/understrap-outline.svg",
    "revision": "c062fa368ead3628f09700cdb9ea1c92"
  },
  {
    "url": "assets/brand/understrap-punchout.svg",
    "revision": "c062fa368ead3628f09700cdb9ea1c92"
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
    "revision": "c062fa368ead3628f09700cdb9ea1c92"
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
    "revision": "3b50d2b4a3c5b557e12c54562a886cf1"
  },
  {
    "url": "docs/0.8.2/about/credits/index.html",
    "revision": "7744e53d1632e86a7f34d16f46a51bac"
  },
  {
    "url": "docs/0.8.2/about/license/index.html",
    "revision": "00b7b084bfb0c146b7f702eaa61689e8"
  },
  {
    "url": "docs/0.8.2/changelog/index.html",
    "revision": "1c11046ecd44a10708631391b2090703"
  },
  {
    "url": "docs/0.8.2/development/available-gulp-tasks/index.html",
    "revision": "7ccca9b1c33e9755e00582542c261bf1"
  },
  {
    "url": "docs/0.8.2/development/bootstrap/index.html",
    "revision": "ee61beac5f14ab211d65f0d828de4d73"
  },
  {
    "url": "docs/0.8.2/development/developing-with-npm-and-gulp/index.html",
    "revision": "10858b6d0e44d48c76465a0ac8cf3400"
  },
  {
    "url": "docs/0.8.2/development/scss/index.html",
    "revision": "063370b3331241ef75c375f657d5e6fe"
  },
  {
    "url": "docs/0.8.2/extend/custom-menus-and-menu-areas/index.html",
    "revision": "4204aeca6e409cb2849ccf87e24239bc"
  },
  {
    "url": "docs/0.8.2/extend/custom-widget-areas-sidebars/index.html",
    "revision": "72dfee1fc20f84f49cbbab480cedbe28"
  },
  {
    "url": "docs/0.8.2/extend/fontawesome-4/index.html",
    "revision": "f94fb152d6e380df5f2bf4dd634ee406"
  },
  {
    "url": "docs/0.8.2/extend/fontawesome-5/index.html",
    "revision": "04252b841539dbf81e0203c52bd01984"
  },
  {
    "url": "docs/0.8.2/getting-started/child-theme/index.html",
    "revision": "f153dd79787c4557dcc0248d9936cb36"
  },
  {
    "url": "docs/0.8.2/getting-started/customizer-options/index.html",
    "revision": "8f5b0ed8da131641d283de4ab47edcf9"
  },
  {
    "url": "docs/0.8.2/getting-started/gulp-tasks/index.html",
    "revision": "fb69bfa09bc9e796cf3ae4652ee0e812"
  },
  {
    "url": "docs/0.8.2/getting-started/menus/index.html",
    "revision": "6ee0ea27be44c7bc0f60930af6ab5359"
  },
  {
    "url": "docs/0.8.2/getting-started/page-templates/index.html",
    "revision": "e75a0a6894334daeba90852edf3b47b6"
  },
  {
    "url": "docs/0.8.2/getting-started/theme-structure/index.html",
    "revision": "e0736cbe1b87717da3c98a3c55b647cb"
  },
  {
    "url": "docs/0.8.2/getting-started/widgets-widget-areas/index.html",
    "revision": "e754b9c7eb6edb52eef7f7c107c377b9"
  },
  {
    "url": "docs/0.8.2/gutenberg/index.html",
    "revision": "4471d8ad02e31bae34d228de124136c7"
  },
  {
    "url": "docs/0.8.2/how-to-update/child-theme/index.html",
    "revision": "3a230e465fb1c6339e22303c9a1d45b6"
  },
  {
    "url": "docs/0.8.2/how-to-update/parent-theme/index.html",
    "revision": "7272ea52e66b813e344a7d8931d1aad5"
  },
  {
    "url": "docs/0.8.2/installation/via-npm/index.html",
    "revision": "386550c0e865ee7479140f8f230014e1"
  },
  {
    "url": "docs/0.8.2/installation/via-wordpress-theme-installer/index.html",
    "revision": "dda65d82b565c2df6b399412fdcf7a42"
  },
  {
    "url": "docs/0.8.2/introduction/index.html",
    "revision": "8e5ca63a21b11f6ff4b8b6a1028547c0"
  },
  {
    "url": "docs/0.8.2/translating-understrap/index.html",
    "revision": "b09412a856ed3abbbdbc8435c2cea1f8"
  },
  {
    "url": "docs/0.8.2/woocommerce/index.html",
    "revision": "06ac5671f9b66ba57a5cd9d17c6413ba"
  },
  {
    "url": "index.html",
    "revision": "69af9a772d3f85c434a16e7437109f34"
  },
  {
    "url": "redirects.json",
    "revision": "99914b932bd37a50b983c5e7c90ae93b"
  }
])
