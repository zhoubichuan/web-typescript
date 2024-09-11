/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "81e1a066e665aad26ea58eff0520ee73"
  },
  {
    "url": "assets/css/0.styles.73ffc6f4.css",
    "revision": "b82b768813a4273d1ef27cebba20cf3c"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.c5805f47.js",
    "revision": "243da1c18682d35c72a0aaba0848ec15"
  },
  {
    "url": "assets/js/11.c0fd6524.js",
    "revision": "0d7609dbe222e0146d8dc721cd7c6933"
  },
  {
    "url": "assets/js/12.9c6e8e17.js",
    "revision": "21dbc1bf27ffc54fd327f7457121c46b"
  },
  {
    "url": "assets/js/13.0bd07843.js",
    "revision": "48be05791b83be4f2b9fe1e65718e692"
  },
  {
    "url": "assets/js/14.c70afbea.js",
    "revision": "9b379c245412a159cbd57006c833fab6"
  },
  {
    "url": "assets/js/15.56fb60a6.js",
    "revision": "b663e29cbfe139174a0aa34e3ab5ea02"
  },
  {
    "url": "assets/js/16.f546c269.js",
    "revision": "4a6805162786cb5d3ff6b993c6ce2ead"
  },
  {
    "url": "assets/js/17.65834f84.js",
    "revision": "7aaa89f2029ce2d07a633714013e215c"
  },
  {
    "url": "assets/js/18.7b899cd3.js",
    "revision": "12e2028450ed965a8cd9683542019148"
  },
  {
    "url": "assets/js/19.1fc11a7a.js",
    "revision": "e1279db2dc295de74c727eb076395e8a"
  },
  {
    "url": "assets/js/2.c8c0c7e3.js",
    "revision": "bf3576487357da8939cf82eea38f445c"
  },
  {
    "url": "assets/js/20.2e115796.js",
    "revision": "cb005231c7a9222a69110f19b3e8d846"
  },
  {
    "url": "assets/js/21.c5be7eec.js",
    "revision": "25d596c8189811c4b032414f2710401b"
  },
  {
    "url": "assets/js/22.aebc91dd.js",
    "revision": "eeb0a1fc9395de4eba58703ff3cf0bb0"
  },
  {
    "url": "assets/js/23.38af0123.js",
    "revision": "b5908606f536ef5fc8cecca9cabb35e9"
  },
  {
    "url": "assets/js/24.9b100fd1.js",
    "revision": "4d4bbbfadc7e5bf0619ad7f3b6897a59"
  },
  {
    "url": "assets/js/25.9fdc04b2.js",
    "revision": "57a29ba78ba985fe098bf9cc85517778"
  },
  {
    "url": "assets/js/26.b328d83a.js",
    "revision": "a455497dc04d334688ad8a35c9a6929d"
  },
  {
    "url": "assets/js/27.5fc8fc65.js",
    "revision": "3b85f65015e04c52219a976c427e839f"
  },
  {
    "url": "assets/js/28.98575e21.js",
    "revision": "f80bbca3985f8e282d9c21573b68ac32"
  },
  {
    "url": "assets/js/29.aec70c67.js",
    "revision": "0c4043bf9154d3a3e531bbcfbe2abcfa"
  },
  {
    "url": "assets/js/3.384e845f.js",
    "revision": "fbf7f49d43a1979ecb3e6e97c2466f4b"
  },
  {
    "url": "assets/js/30.1bd7e59f.js",
    "revision": "a646616f6327ed9ec9323f87596a606c"
  },
  {
    "url": "assets/js/31.f8753161.js",
    "revision": "a94593d696fca818063c38b2be4d7620"
  },
  {
    "url": "assets/js/32.549ac71a.js",
    "revision": "462d3f9923b1f85ad37683a44cd0a43b"
  },
  {
    "url": "assets/js/33.95a05ab7.js",
    "revision": "949d0b39c1d2f90f751d2bf9e67022a7"
  },
  {
    "url": "assets/js/34.e126ade0.js",
    "revision": "47d4675ff7e4ed41d34f540f03642249"
  },
  {
    "url": "assets/js/35.e8dae1fc.js",
    "revision": "bdd2eefbfff228e445e65fae3b7c938c"
  },
  {
    "url": "assets/js/36.8f12dfcd.js",
    "revision": "338407b6328b9e3752e53340a477962a"
  },
  {
    "url": "assets/js/37.0c8d05e7.js",
    "revision": "662521a9b8f43c2a97aa05bb3c2a1246"
  },
  {
    "url": "assets/js/38.c150f126.js",
    "revision": "64bbcb02610ad1e7e991600694c6eb11"
  },
  {
    "url": "assets/js/39.17586dc2.js",
    "revision": "c9b3f9f7a8a8a141ff28196f8c1895da"
  },
  {
    "url": "assets/js/4.f06a870d.js",
    "revision": "5f8b6aef590e9dec19e854ef23ee6eb5"
  },
  {
    "url": "assets/js/40.aea96bae.js",
    "revision": "a2ef0396e12e0c5fc3ed02c8978e2027"
  },
  {
    "url": "assets/js/41.85b50c9c.js",
    "revision": "85e63eaae3984bfca50b759bfa30af0d"
  },
  {
    "url": "assets/js/42.6f0c2a6a.js",
    "revision": "e00bce17d2cc0af605280b3d66408104"
  },
  {
    "url": "assets/js/43.6408cea9.js",
    "revision": "a4660991b46e46b825199ec4be4c8acc"
  },
  {
    "url": "assets/js/44.3eccf9ac.js",
    "revision": "bb3a785b688acd1ed4584ea22c48a8c2"
  },
  {
    "url": "assets/js/45.5459c98f.js",
    "revision": "49966f7cada3c291ca29adb32249bbe1"
  },
  {
    "url": "assets/js/46.f92777d2.js",
    "revision": "93c813d3bdf531efd4010f9de68390a6"
  },
  {
    "url": "assets/js/47.e893ff70.js",
    "revision": "0f1cf9ab925f237103d0a9d23e94cd5c"
  },
  {
    "url": "assets/js/48.5df8dcc1.js",
    "revision": "8bf7873677ca77c2aab3d90ee339556e"
  },
  {
    "url": "assets/js/49.44ce518c.js",
    "revision": "7f545286577ce55eda0fe88cec26dddd"
  },
  {
    "url": "assets/js/5.a77092f8.js",
    "revision": "ae5031fb37a8390b1f1c7673242b3d72"
  },
  {
    "url": "assets/js/50.a94340a6.js",
    "revision": "287848a61a2653419ec0d136a7af23d7"
  },
  {
    "url": "assets/js/51.1253343b.js",
    "revision": "edab9118ffd7fc8c5f85230aa19a66da"
  },
  {
    "url": "assets/js/52.7da65101.js",
    "revision": "f3717d87e8d02ed5bd030cd156584848"
  },
  {
    "url": "assets/js/53.269c0066.js",
    "revision": "bf63887eebf63a077f4efebacc10b9d7"
  },
  {
    "url": "assets/js/54.7ea22905.js",
    "revision": "67084263b9ea7d16af05612627063a0a"
  },
  {
    "url": "assets/js/55.5850ac93.js",
    "revision": "4fcac22702f979c5002f64450a77884b"
  },
  {
    "url": "assets/js/56.2b29b888.js",
    "revision": "7f157ad6ec36cc017ebadb6a5e161042"
  },
  {
    "url": "assets/js/57.bfd4b8f9.js",
    "revision": "14f07bd16d6dc8390fa5d7efb593ab97"
  },
  {
    "url": "assets/js/58.324e425e.js",
    "revision": "7178c2bb0ab978982e5e843bf61e271c"
  },
  {
    "url": "assets/js/59.3d93005e.js",
    "revision": "71cd2a7983d6a1331c2263ef3818082c"
  },
  {
    "url": "assets/js/6.1c84d7c2.js",
    "revision": "86ca71003c238d89eb80ce3c3a718e46"
  },
  {
    "url": "assets/js/60.d7097caf.js",
    "revision": "ca94091ef4aa5e6d8b04b5e762dd75a6"
  },
  {
    "url": "assets/js/61.b8db8c65.js",
    "revision": "0f7c9c78fbe7be7e8ddb06c2e15b97ea"
  },
  {
    "url": "assets/js/62.a3bdbf4e.js",
    "revision": "331a8ad66ae554cf734984aacaf98238"
  },
  {
    "url": "assets/js/7.a83e4323.js",
    "revision": "c1870716a0abc3cade2916912d39a415"
  },
  {
    "url": "assets/js/8.3e9e5190.js",
    "revision": "d4d97cb537cba412ec6ba5466a9ff27a"
  },
  {
    "url": "assets/js/9.951995b5.js",
    "revision": "2f2f337ee7f5462336ec3088eed1b6f7"
  },
  {
    "url": "assets/js/app.e4aea131.js",
    "revision": "38dab449587fb16f8ac1e887cc1c55eb"
  },
  {
    "url": "base/1.typescript/1.env.html",
    "revision": "ad425328c15b2dc1e75d0057d2fa3873"
  },
  {
    "url": "base/1.typescript/1.index.html",
    "revision": "2b9ad6e4e23fafc9ddfa38bf30c3bc79"
  },
  {
    "url": "base/1.typescript/10.infer.html",
    "revision": "4d05f83e975c6b98a4161873fd9f5a27"
  },
  {
    "url": "base/1.typescript/11.overlapping.html",
    "revision": "b855bfedafcf4c8332aa43c7420506dc"
  },
  {
    "url": "base/1.typescript/12.condition.html",
    "revision": "8b5f398e1b7f8591029165c763f5b5b0"
  },
  {
    "url": "base/1.typescript/13.builtin.html",
    "revision": "98e2974c3380d0b74a09b7029e43837a"
  },
  {
    "url": "base/1.typescript/14.package.html",
    "revision": "afd566f4505ce3640aa63748009b683e"
  },
  {
    "url": "base/1.typescript/15.custom.html",
    "revision": "a42ef0719ee92bf29780543be2f6a447"
  },
  {
    "url": "base/1.typescript/16.unknown.html",
    "revision": "42a54c2e0f8212d20cb428e8651e0d46"
  },
  {
    "url": "base/1.typescript/17.module.html",
    "revision": "64ea407f2ea0d5ba5d44ebb7d355144c"
  },
  {
    "url": "base/1.typescript/18.statement.html",
    "revision": "db722038ef89d75eb4bb650687d745b3"
  },
  {
    "url": "base/1.typescript/19.extend.html",
    "revision": "de74b8bea4eea0a8e956f3c9f5edaa33"
  },
  {
    "url": "base/1.typescript/2.base.html",
    "revision": "e7fcce39bff78e844643e8cae590507b"
  },
  {
    "url": "base/1.typescript/3.deduction.html",
    "revision": "86acf08b95052b573e96898070c9c6dd"
  },
  {
    "url": "base/1.typescript/4.type.html",
    "revision": "438e0db50a9f61e0594db19b967f6196"
  },
  {
    "url": "base/1.typescript/5.class.html",
    "revision": "2f4a07d4aaf16b347e94cc608a960956"
  },
  {
    "url": "base/1.typescript/6.interface.html",
    "revision": "c747722bae1c7c0e9235825b28c287fd"
  },
  {
    "url": "base/1.typescript/7.generic.html",
    "revision": "2ded7317f910861ef4d23aff35fe5ec1"
  },
  {
    "url": "base/1.typescript/8.compatible.html",
    "revision": "b075a2b323afb7d53502394a279df186"
  },
  {
    "url": "base/1.typescript/9.protect.html",
    "revision": "6ef74501728417076daf427b4ced211c"
  },
  {
    "url": "base/2.vue/1.config.html",
    "revision": "7ca1372951972e496425ba2051b99e3f"
  },
  {
    "url": "base/2.vue/1.index.html",
    "revision": "01ced5a0a2b5c4bdcd3cb3de4852821e"
  },
  {
    "url": "base/2.vue/10.ui.html",
    "revision": "c145f10d86409113476e927a4476e179"
  },
  {
    "url": "base/2.vue/11.data.html",
    "revision": "ce604189e77fe0acc2f2516d3acacbd5"
  },
  {
    "url": "base/2.vue/12.skill.html",
    "revision": "cfebb34f6d164df6d6787b58ddec4b34"
  },
  {
    "url": "base/2.vue/13.com.html",
    "revision": "be3a6f88e6cb86cd320f7a1f1ca3c5ed"
  },
  {
    "url": "base/2.vue/14.data.html",
    "revision": "70cfc482319e1c42f9170b0224c0b2f6"
  },
  {
    "url": "base/2.vue/2.webpack.html",
    "revision": "4185d5a20e9c2d6bf2bee077a76116d9"
  },
  {
    "url": "base/2.vue/3.file.html",
    "revision": "eb648ef27245c7360cba8be45bf0f56f"
  },
  {
    "url": "base/2.vue/4.single.html",
    "revision": "d74d9ef0e0e311ffc5ba19d7ac6dcc7f"
  },
  {
    "url": "base/2.vue/5.page.html",
    "revision": "e495bdefb8be052873fc591be8c3ee02"
  },
  {
    "url": "base/2.vue/7.module.html",
    "revision": "a13d0580d6bf0194c8b2aedc87e90941"
  },
  {
    "url": "base/2.vue/8.project.html",
    "revision": "2c27b299e47ec03ca81786ff4d1b688b"
  },
  {
    "url": "base/2.vue/9.utils.html",
    "revision": "d6dc813dca6d2d27c5f1b8a5a4bff6e4"
  },
  {
    "url": "base/3.react/1.index.html",
    "revision": "ad30c9c0f5c6e475a8248ee6bc7c1091"
  },
  {
    "url": "base/3.react/2.Jenkins.html",
    "revision": "ffe06c9417fc432f77bda08d0b355805"
  },
  {
    "url": "base/3.react/3.gitlab.html",
    "revision": "2e9f76fc72586b53f297f363732aa692"
  },
  {
    "url": "base/3.react/i18n.html",
    "revision": "33378c2ee8427cd5a0b2eeaa470b4ca4"
  },
  {
    "url": "base/3.react/prem.html",
    "revision": "56b55a625275fef9aff3d245eabd278a"
  },
  {
    "url": "base/3.react/test.html",
    "revision": "341c1dc658dede42e491faf7faf35a07"
  },
  {
    "url": "base/3.react/vscode.html",
    "revision": "994bbf7f004a2d3922a389480ad8a749"
  },
  {
    "url": "dll/vendor.dll.js",
    "revision": "11b5529269cb2cdba343782d3e7edfb2"
  },
  {
    "url": "home.png",
    "revision": "942fc478c6acbd2a3cc543c584cf258a"
  },
  {
    "url": "index.html",
    "revision": "7799679a71cb9ff4fad28a5849881f84"
  },
  {
    "url": "mock/http.js",
    "revision": "c8abf8aba8039ff5bc6fa0517b076832"
  },
  {
    "url": "senior/npm/1.index.html",
    "revision": "de4db96803521ab6d4c5950c819e690a"
  },
  {
    "url": "senior/use/1.index.html",
    "revision": "b294974459601773646daa23c5f3c2f6"
  },
  {
    "url": "senior/use/10.table.html",
    "revision": "bfee6d9b3ac97b6b67c976e4e993fea3"
  },
  {
    "url": "senior/use/11.tree.html",
    "revision": "69b8c4a7b7d9ed31c105070d0dc01c09"
  },
  {
    "url": "senior/use/2.extend.html",
    "revision": "2b8c443271b9341e3053e2185f3e68da"
  },
  {
    "url": "senior/use/3.componentCommunication.html",
    "revision": "1a0365320339817805c63e4f8f986170"
  },
  {
    "url": "senior/use/4.render.html",
    "revision": "4abcaa6960e19c433c7f294934a335f6"
  },
  {
    "url": "senior/use/5.api.html",
    "revision": "32dac20dc980a4097d14a4287af1a36d"
  },
  {
    "url": "senior/use/6.form.html",
    "revision": "8709bf1edb60fdae57ee6759c6faa6a6"
  },
  {
    "url": "senior/use/7.checkBox.html",
    "revision": "f5f50ae40e49f158212150ec920119f6"
  },
  {
    "url": "senior/use/8.active.html",
    "revision": "6922ad690a43c0881698d2abc9d804fe"
  },
  {
    "url": "senior/use/9.alert.html",
    "revision": "17079e6ee5c6e1f51cf681ceacfbf19a"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
