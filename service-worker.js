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
    "revision": "5f5b87a75e225f081c3511ad479352f5"
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
    "url": "assets/js/10.1e8f0985.js",
    "revision": "99c13cec0224bdf229567294f08413ef"
  },
  {
    "url": "assets/js/11.83256b34.js",
    "revision": "0d7609dbe222e0146d8dc721cd7c6933"
  },
  {
    "url": "assets/js/12.76992a91.js",
    "revision": "509a6fac8c40bb50b460918184dd9f78"
  },
  {
    "url": "assets/js/13.94a625b1.js",
    "revision": "618ff90b4df380a16f934010b1e8a0d1"
  },
  {
    "url": "assets/js/14.fa02486c.js",
    "revision": "9b379c245412a159cbd57006c833fab6"
  },
  {
    "url": "assets/js/15.5c96d596.js",
    "revision": "00fd29e7c6d6f5106d70e2aa8e0fd559"
  },
  {
    "url": "assets/js/16.6d7f2134.js",
    "revision": "421260d42843b2b02a2c004e2c74bd25"
  },
  {
    "url": "assets/js/17.72dc9b0b.js",
    "revision": "4d0f3794587a2aed0e81bafc25022a13"
  },
  {
    "url": "assets/js/18.84f57dac.js",
    "revision": "848587ac8f7432b8eaab49b5ff144d6d"
  },
  {
    "url": "assets/js/19.9400684a.js",
    "revision": "e1279db2dc295de74c727eb076395e8a"
  },
  {
    "url": "assets/js/2.c8c0c7e3.js",
    "revision": "bf3576487357da8939cf82eea38f445c"
  },
  {
    "url": "assets/js/20.5adff246.js",
    "revision": "22471caed4af140241c892b314e98d5b"
  },
  {
    "url": "assets/js/21.d555ae69.js",
    "revision": "6c5c8c48729b79db40d80be746332d45"
  },
  {
    "url": "assets/js/22.0a54e5cf.js",
    "revision": "b2517d825ee20e4159cb2f9b3196dce9"
  },
  {
    "url": "assets/js/23.fca5bd31.js",
    "revision": "b5908606f536ef5fc8cecca9cabb35e9"
  },
  {
    "url": "assets/js/24.b8a14953.js",
    "revision": "1d1c92fdc13aaf432033424c91279c22"
  },
  {
    "url": "assets/js/25.9ec98bd8.js",
    "revision": "4a837c5126fc159fbcf24597b5c39a20"
  },
  {
    "url": "assets/js/26.03075fe0.js",
    "revision": "8a52681538310e03012091a66c89b1de"
  },
  {
    "url": "assets/js/27.eb05c655.js",
    "revision": "3b85f65015e04c52219a976c427e839f"
  },
  {
    "url": "assets/js/28.e3299ecb.js",
    "revision": "f80bbca3985f8e282d9c21573b68ac32"
  },
  {
    "url": "assets/js/29.80c93d7a.js",
    "revision": "f1cd1a570aeb8911d496bf5608e80c00"
  },
  {
    "url": "assets/js/3.384e845f.js",
    "revision": "fbf7f49d43a1979ecb3e6e97c2466f4b"
  },
  {
    "url": "assets/js/30.d2e227b1.js",
    "revision": "d0a2daa83eebcaf232e3083f2bcd34e3"
  },
  {
    "url": "assets/js/31.202e5b4a.js",
    "revision": "393541217030054f4818cd25d0d95e65"
  },
  {
    "url": "assets/js/32.cdda11d2.js",
    "revision": "a4a6877fb42f524707e5a737de3cb143"
  },
  {
    "url": "assets/js/33.36dd6fbb.js",
    "revision": "16068989b3a816f8af81b62e3275f886"
  },
  {
    "url": "assets/js/34.fca252af.js",
    "revision": "5ab6a0fa5e2e6472b33d730d035e4c51"
  },
  {
    "url": "assets/js/35.14ee96e6.js",
    "revision": "c516e00136700d705659cc9e2bfc31c1"
  },
  {
    "url": "assets/js/36.f59b6f7c.js",
    "revision": "53f6084a2b6daddb09341d8a927129e3"
  },
  {
    "url": "assets/js/37.a5944927.js",
    "revision": "45df76824fe3f11c3322e001a6926e34"
  },
  {
    "url": "assets/js/38.306b0b8c.js",
    "revision": "f52471c8f9fe95a65aeacbe482683e37"
  },
  {
    "url": "assets/js/39.98b0beb4.js",
    "revision": "44fa4a467a86bd5c7b337c35ad471146"
  },
  {
    "url": "assets/js/4.f06a870d.js",
    "revision": "5f8b6aef590e9dec19e854ef23ee6eb5"
  },
  {
    "url": "assets/js/40.d6dc5421.js",
    "revision": "cd1c5fd54dcf47f3bca50ae7c194b76e"
  },
  {
    "url": "assets/js/41.a9fbd4cb.js",
    "revision": "2b08d16226d7d90c9780cfd50a394028"
  },
  {
    "url": "assets/js/42.d37a6daa.js",
    "revision": "0b81de4b76f5e9cf1a1ecdb6105bb167"
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
    "url": "assets/js/45.b46e232b.js",
    "revision": "509e31c5accb17778d2bc1bb30cd550a"
  },
  {
    "url": "assets/js/46.f92777d2.js",
    "revision": "93c813d3bdf531efd4010f9de68390a6"
  },
  {
    "url": "assets/js/47.52a373e7.js",
    "revision": "4ff041a55600c9c5132a63ff89f236e7"
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
    "url": "assets/js/50.d26e7d7e.js",
    "revision": "c310d24209244bb17d8e5db8f845db18"
  },
  {
    "url": "assets/js/51.ac2ebd89.js",
    "revision": "6326ea01c74b3d3cfc68f47955e0df7a"
  },
  {
    "url": "assets/js/52.cfdfe4db.js",
    "revision": "d2ea839e6165a194fe0f590e740a6819"
  },
  {
    "url": "assets/js/53.0d0c7b94.js",
    "revision": "4696523cfef85c8bc775472f78998181"
  },
  {
    "url": "assets/js/54.3cc939d0.js",
    "revision": "81a80e00fbaa535ea5edd2d8c0a7bbbf"
  },
  {
    "url": "assets/js/55.217c7bd0.js",
    "revision": "7b140c35a83890d5cf49a142654240ea"
  },
  {
    "url": "assets/js/56.8e73142e.js",
    "revision": "4ee2b30ad2877c626f44c37fad7d1760"
  },
  {
    "url": "assets/js/57.42b8744f.js",
    "revision": "c83f34062b817ebb9f6b7cc9a79e11dc"
  },
  {
    "url": "assets/js/58.8c0902e7.js",
    "revision": "bf561e005880d5e812a259392be8f5ad"
  },
  {
    "url": "assets/js/59.88c41d91.js",
    "revision": "de0deebe03e75b948ba620ef9813bfbc"
  },
  {
    "url": "assets/js/6.1c84d7c2.js",
    "revision": "86ca71003c238d89eb80ce3c3a718e46"
  },
  {
    "url": "assets/js/60.727f14f2.js",
    "revision": "4452b116fdf101278446d3f2ebe93d22"
  },
  {
    "url": "assets/js/61.616a7793.js",
    "revision": "29232487c984012f27560b5c6e657471"
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
    "url": "assets/js/9.dcd6c83a.js",
    "revision": "08549ee0ea7b2a900125554d052bad66"
  },
  {
    "url": "assets/js/app.3432020d.js",
    "revision": "3fc0737dfaead2d728338b8a3b455d61"
  },
  {
    "url": "base/1.api/1.env.html",
    "revision": "3e875f012897e008f3654f9bc15ad905"
  },
  {
    "url": "base/1.api/1.index.html",
    "revision": "45b29c837fb6d6a86cfe7faf73dff470"
  },
  {
    "url": "base/1.api/10.infer.html",
    "revision": "8253baf928cf9491ce88542fbba7b6b7"
  },
  {
    "url": "base/1.api/11.overlapping.html",
    "revision": "35444efe25fb0fb3f1b83079d020a230"
  },
  {
    "url": "base/1.api/12.condition.html",
    "revision": "dda74e0072b9bcd3c8a2429d6764b424"
  },
  {
    "url": "base/1.api/13.builtin.html",
    "revision": "0bde8cc907bb723e7475c2959252964a"
  },
  {
    "url": "base/1.api/14.package.html",
    "revision": "fd9ac433a3cb28d3adfc08bcef8d7f0a"
  },
  {
    "url": "base/1.api/15.custom.html",
    "revision": "a52fab4cc5b4c9cd38503a8e67c0baa1"
  },
  {
    "url": "base/1.api/16.unknown.html",
    "revision": "6efc6a6486c5c433abfacd33da35524a"
  },
  {
    "url": "base/1.api/17.module.html",
    "revision": "f20c45bf9bdabcf351e7ee1167e5a835"
  },
  {
    "url": "base/1.api/18.statement.html",
    "revision": "43cc242eb0740c88438668b8d26b1968"
  },
  {
    "url": "base/1.api/19.extend.html",
    "revision": "d431da046b8d3439c3a34a4676c1325c"
  },
  {
    "url": "base/1.api/2.base.html",
    "revision": "ea9a0c534379cf7d2356f4c6cdc57b0b"
  },
  {
    "url": "base/1.api/3.deduction.html",
    "revision": "ada246bd95bc2c2f1138395307c6ad99"
  },
  {
    "url": "base/1.api/4.type.html",
    "revision": "97ebc91906bdc5c8148493ec40d1caf5"
  },
  {
    "url": "base/1.api/5.class.html",
    "revision": "e008033d5db008842e670a74ddcf024b"
  },
  {
    "url": "base/1.api/6.interface.html",
    "revision": "df34ea34c79e9885a965b6063ebd5b0b"
  },
  {
    "url": "base/1.api/7.generic.html",
    "revision": "e67aa744ec7590085d6207874de5c54e"
  },
  {
    "url": "base/1.api/8.compatible.html",
    "revision": "b303f7ebd3cc7d5b83c61a19185e5802"
  },
  {
    "url": "base/1.api/9.protect.html",
    "revision": "fdfa6004e66d614baa8222a92b2f76df"
  },
  {
    "url": "base/2.config/1.config.html",
    "revision": "2dc6ec6b1eb7f0adfff81004f3710f27"
  },
  {
    "url": "base/2.config/1.index.html",
    "revision": "6f6f76c9bca8c4c42921c6459cc1fc31"
  },
  {
    "url": "base/2.config/10.ui.html",
    "revision": "966d44aa9cc69f693daa26e5ea7347c4"
  },
  {
    "url": "base/2.config/11.data.html",
    "revision": "e68e8edf934a424c293575e86f7bb3e9"
  },
  {
    "url": "base/2.config/12.skill.html",
    "revision": "7a16be14d1e7281b9f146dbf0a636daa"
  },
  {
    "url": "base/2.config/13.com.html",
    "revision": "727a8fb008b99230f15fadb51e43c5b2"
  },
  {
    "url": "base/2.config/14.data.html",
    "revision": "365ad0211cdc5edeb4c25cb14a3eceac"
  },
  {
    "url": "base/2.config/2.webpack.html",
    "revision": "9fba2abec28a146d90547c5212d2f7e9"
  },
  {
    "url": "base/2.config/3.file.html",
    "revision": "7de11058b5d81624e81fa8e55a283684"
  },
  {
    "url": "base/2.config/4.single.html",
    "revision": "4527f528132caaca740e324464216c61"
  },
  {
    "url": "base/2.config/5.page.html",
    "revision": "70f4b80922a462a743d08318f92b6c80"
  },
  {
    "url": "base/2.config/7.module.html",
    "revision": "df84f39e08841ae3eca72ee0843b8c27"
  },
  {
    "url": "base/2.config/8.project.html",
    "revision": "c1b0bc11faf93aeb7b91423f3156367b"
  },
  {
    "url": "base/2.config/9.utils.html",
    "revision": "a2f755b11305abd89e403ed1120ab056"
  },
  {
    "url": "base/3.react/1.index.html",
    "revision": "d28b1e25f5f758a67024aeb74755a18c"
  },
  {
    "url": "base/3.react/2.Jenkins.html",
    "revision": "47acd80c2bfa3d7887a481b7b8b77387"
  },
  {
    "url": "base/3.react/3.gitlab.html",
    "revision": "f589e7d0fa597604ab00954b426848ce"
  },
  {
    "url": "base/3.react/i18n.html",
    "revision": "588dff3a53d123d59b962310dc9ccbfd"
  },
  {
    "url": "base/3.react/prem.html",
    "revision": "9504b24c8d65ec99425fb1e857197c0c"
  },
  {
    "url": "base/3.react/test.html",
    "revision": "b2c9576827dcd65b5e27b02bb1ee4dcd"
  },
  {
    "url": "base/3.react/vscode.html",
    "revision": "f04a2549942c054a55543a1c97b8b2b1"
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
    "revision": "65c9e3509bba572d25be9ee148d3d56b"
  },
  {
    "url": "mock/http.js",
    "revision": "c8abf8aba8039ff5bc6fa0517b076832"
  },
  {
    "url": "senior/npm/1.index.html",
    "revision": "b33b61f7fc8c3a20b548336e84a77049"
  },
  {
    "url": "senior/use/1.index.html",
    "revision": "e3543a29a1cd0faf15a2db2f732648aa"
  },
  {
    "url": "senior/use/10.table.html",
    "revision": "9300ab85dc5cfa132ac79253cd960450"
  },
  {
    "url": "senior/use/11.tree.html",
    "revision": "c3511de5ae343be5806b85fc5eb651b8"
  },
  {
    "url": "senior/use/2.extend.html",
    "revision": "832720f7781e91bef7594a6465f5a024"
  },
  {
    "url": "senior/use/3.componentCommunication.html",
    "revision": "271f4257ac1f8cba0969620aed46e1a8"
  },
  {
    "url": "senior/use/4.render.html",
    "revision": "5cd736f1897e7081c889ac94cdb33a9c"
  },
  {
    "url": "senior/use/5.api.html",
    "revision": "5bb9384105da692daa7656d74baa9469"
  },
  {
    "url": "senior/use/6.form.html",
    "revision": "7e0cadb6c3824a4b6c0cb29820b40b2a"
  },
  {
    "url": "senior/use/7.checkBox.html",
    "revision": "9bd43828c24be4a9dce998a66494bd36"
  },
  {
    "url": "senior/use/8.active.html",
    "revision": "751a22285720da626141a1c56d9e4cf7"
  },
  {
    "url": "senior/use/9.alert.html",
    "revision": "3f9bf160b2517540654d7305153798cc"
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
