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
    "revision": "a8830c1aa44ce3f0ca57e316e37f2438"
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
    "url": "assets/js/12.7910911a.js",
    "revision": "f9b10cc1c74361de65c0813d00e4fdf2"
  },
  {
    "url": "assets/js/13.8db1f6ba.js",
    "revision": "351264a8a28e616b1e6c05ea345e3c18"
  },
  {
    "url": "assets/js/14.f3499eab.js",
    "revision": "ef324bb7fa72e0158c4bb15b0bd5eef4"
  },
  {
    "url": "assets/js/15.728925e7.js",
    "revision": "d287284d7dd16b4bde832a013fe00d96"
  },
  {
    "url": "assets/js/16.4a12d05f.js",
    "revision": "e308133185e38314dcc6b17960079a56"
  },
  {
    "url": "assets/js/17.85f3fc91.js",
    "revision": "12e9de56c044d696887eb596307dee7d"
  },
  {
    "url": "assets/js/18.f1802c74.js",
    "revision": "617112234814e573f3dbfc42066b4a80"
  },
  {
    "url": "assets/js/19.aaa7dc13.js",
    "revision": "62f1fa59495d857dda7a4d43cce29ee5"
  },
  {
    "url": "assets/js/2.c8c0c7e3.js",
    "revision": "bf3576487357da8939cf82eea38f445c"
  },
  {
    "url": "assets/js/20.3f39bc8d.js",
    "revision": "f623c5dac4b9ddc4c7877d93b55c2e7c"
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
    "url": "assets/js/23.c8228494.js",
    "revision": "fbfbe6a063f90e92542e3658135cc116"
  },
  {
    "url": "assets/js/24.ffa659eb.js",
    "revision": "b1ce25614f9fc14b39d854e5e9f8669d"
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
    "url": "assets/js/30.a767508d.js",
    "revision": "aab88116bc5bb780a2460fb32c39ac7a"
  },
  {
    "url": "assets/js/31.ce6ea55a.js",
    "revision": "2af88610be0ef3be84dce60dbeb16e04"
  },
  {
    "url": "assets/js/32.0fc287eb.js",
    "revision": "d65708719b020cde3e6727390f93d894"
  },
  {
    "url": "assets/js/33.15b34b40.js",
    "revision": "87d3b9ea6dd84122ac571ba963666fb1"
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
    "url": "assets/js/37.f07e0faa.js",
    "revision": "ce05d2139c5143dd41fd320794a6b306"
  },
  {
    "url": "assets/js/38.6be8169d.js",
    "revision": "a06d6182d4c82304d8b585d04ff5ca60"
  },
  {
    "url": "assets/js/39.9f5674ca.js",
    "revision": "a103be3298144dd184a9aa45cac9d650"
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
    "url": "assets/js/41.bb399145.js",
    "revision": "996393ffa8a0fcde74543276075a8aaf"
  },
  {
    "url": "assets/js/42.2e54d664.js",
    "revision": "665a1cb0399c204f31d5fc170987b366"
  },
  {
    "url": "assets/js/43.78365fb5.js",
    "revision": "beaa4f07c7d4d45caef643137d1a8499"
  },
  {
    "url": "assets/js/44.d9ad8516.js",
    "revision": "ad6424bb3447cb20fc7fd8dd04c3e8b4"
  },
  {
    "url": "assets/js/45.f8d046b2.js",
    "revision": "2005bff89b986ec87732902bb667e632"
  },
  {
    "url": "assets/js/46.ecf87ef4.js",
    "revision": "92605da411929404819e223812db6365"
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
    "url": "assets/js/50.d26e7d7e.js",
    "revision": "c310d24209244bb17d8e5db8f845db18"
  },
  {
    "url": "assets/js/51.422801f8.js",
    "revision": "f98b08454f0bc9f35157cf84fcd865b2"
  },
  {
    "url": "assets/js/52.7da65101.js",
    "revision": "f3717d87e8d02ed5bd030cd156584848"
  },
  {
    "url": "assets/js/53.0d0c7b94.js",
    "revision": "4696523cfef85c8bc775472f78998181"
  },
  {
    "url": "assets/js/54.f0e3f3d7.js",
    "revision": "38a03c0c9ca1f7c08ed41e1ef244a677"
  },
  {
    "url": "assets/js/55.47e5e9b3.js",
    "revision": "66a1070b6f9b3fa77d7c8a8d10b8924a"
  },
  {
    "url": "assets/js/56.12df5c26.js",
    "revision": "9b20cc5db42a03e8039e08a67d17c1e4"
  },
  {
    "url": "assets/js/57.21bfb622.js",
    "revision": "4d38e9b4684a1be5b8bb3a21c69bf8c5"
  },
  {
    "url": "assets/js/58.324e425e.js",
    "revision": "7178c2bb0ab978982e5e843bf61e271c"
  },
  {
    "url": "assets/js/59.bad96a1c.js",
    "revision": "8bd53df97eb77426f0cd51618c74097f"
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
    "url": "assets/js/9.b386f067.js",
    "revision": "02ca0530c98fea3e21a5afc4233c7c95"
  },
  {
    "url": "assets/js/app.e400c1e7.js",
    "revision": "a4655a3296ead5ed62db827738e5981e"
  },
  {
    "url": "base/1.typescript/1.env.html",
    "revision": "d6c7523ceb877d61b3946e38933ee669"
  },
  {
    "url": "base/1.typescript/1.index.html",
    "revision": "672fb0d875946c6a580fb3846e07a35e"
  },
  {
    "url": "base/1.typescript/10.infer.html",
    "revision": "643ce490ec33da0c928e08c4ae05791b"
  },
  {
    "url": "base/1.typescript/11.overlapping.html",
    "revision": "e3f85e7ce5baa16d4f183eb6a88397dc"
  },
  {
    "url": "base/1.typescript/12.condition.html",
    "revision": "9ecb1231570c16637dc0275774783f94"
  },
  {
    "url": "base/1.typescript/13.builtin.html",
    "revision": "2960f3e36722c3f0341c6a9892065e93"
  },
  {
    "url": "base/1.typescript/14.package.html",
    "revision": "83ee7ab04c60e8b7b033279d46affbbc"
  },
  {
    "url": "base/1.typescript/15.custom.html",
    "revision": "58259eac3ed5db1efa05918f83f9f37f"
  },
  {
    "url": "base/1.typescript/16.unknown.html",
    "revision": "d7b15fb3c37a86a8cedc3e4067238ff4"
  },
  {
    "url": "base/1.typescript/17.module.html",
    "revision": "6c850fea60a80369d15f16599ababae5"
  },
  {
    "url": "base/1.typescript/18.statement.html",
    "revision": "ba1738bf1acea64639da1b5522965ab5"
  },
  {
    "url": "base/1.typescript/19.extend.html",
    "revision": "b67ac436a701909a613c6fb5548451c2"
  },
  {
    "url": "base/1.typescript/2.base.html",
    "revision": "76bc02d3028412511980611307db31db"
  },
  {
    "url": "base/1.typescript/3.deduction.html",
    "revision": "00b2068f31fbc5fa599a8912825363e5"
  },
  {
    "url": "base/1.typescript/4.type.html",
    "revision": "794a5da46fa584e2221666f163d24380"
  },
  {
    "url": "base/1.typescript/5.class.html",
    "revision": "af9f279da08c989e722833427c93f4a5"
  },
  {
    "url": "base/1.typescript/6.interface.html",
    "revision": "5e9abd3901264f8ce04af0dbca53925c"
  },
  {
    "url": "base/1.typescript/7.generic.html",
    "revision": "0a15c4780d416fc5fa08242393051a71"
  },
  {
    "url": "base/1.typescript/8.compatible.html",
    "revision": "37fc7e78dc8a56bc960746217520fb7e"
  },
  {
    "url": "base/1.typescript/9.protect.html",
    "revision": "7447275f76d82ed8d84dc6e0dfbe4026"
  },
  {
    "url": "base/2.vue/1.config.html",
    "revision": "836daea9bb08b09e0463883c71df93f4"
  },
  {
    "url": "base/2.vue/1.index.html",
    "revision": "ec75b2f1ea6fe43457b068d530d55a94"
  },
  {
    "url": "base/2.vue/10.ui.html",
    "revision": "a07be735c539b41c9f60b220fbbf20bf"
  },
  {
    "url": "base/2.vue/11.data.html",
    "revision": "04dded4cdc8904051e6e1d2879f55cd5"
  },
  {
    "url": "base/2.vue/12.skill.html",
    "revision": "31b2b4367109722c921906bb757a93b7"
  },
  {
    "url": "base/2.vue/13.com.html",
    "revision": "da134e297ca4c31a41e5122bd3c60364"
  },
  {
    "url": "base/2.vue/14.data.html",
    "revision": "23c991a3dab5b1218fce27f8e47a5783"
  },
  {
    "url": "base/2.vue/2.webpack.html",
    "revision": "7fd42f2688a045fa920a150f3754b01c"
  },
  {
    "url": "base/2.vue/3.file.html",
    "revision": "fb4fbb204be178a7e0dedbc102101f5d"
  },
  {
    "url": "base/2.vue/4.single.html",
    "revision": "611ed7af4a4a5ee0e52629be8642c7d0"
  },
  {
    "url": "base/2.vue/5.page.html",
    "revision": "cc8bca224cd68ceaf31361a53897a7ff"
  },
  {
    "url": "base/2.vue/7.module.html",
    "revision": "c84f0290f093f09207c774aa7013dfd9"
  },
  {
    "url": "base/2.vue/8.project.html",
    "revision": "55e4df5a6cafd0e8f47e75f221b1a12b"
  },
  {
    "url": "base/2.vue/9.utils.html",
    "revision": "04a92e9238d02cf1526faf94ad8fee6f"
  },
  {
    "url": "base/3.react/1.index.html",
    "revision": "91e58da9393ee34587aa5e8ad0161a2f"
  },
  {
    "url": "base/3.react/2.Jenkins.html",
    "revision": "e4b82c49d8363c07210ce97e4f74ccc6"
  },
  {
    "url": "base/3.react/3.gitlab.html",
    "revision": "6ece64dfbd7f752ba956cab2966cfbdd"
  },
  {
    "url": "base/3.react/i18n.html",
    "revision": "bfc91cc74bccc90de1c7d03b363e8273"
  },
  {
    "url": "base/3.react/prem.html",
    "revision": "a91e521166d725b4fb3bbe6c90e4f500"
  },
  {
    "url": "base/3.react/test.html",
    "revision": "25b196fbcbfc213ba5205499523ee51b"
  },
  {
    "url": "base/3.react/vscode.html",
    "revision": "84e7c92b64ed90c36675bf51a35560c8"
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
    "revision": "8e15124c993997a6f193f56998c60df4"
  },
  {
    "url": "mock/http.js",
    "revision": "c8abf8aba8039ff5bc6fa0517b076832"
  },
  {
    "url": "senior/npm/1.index.html",
    "revision": "3b4690de867cecd1f815789dc1b0785c"
  },
  {
    "url": "senior/use/1.index.html",
    "revision": "5971f158c1905490b5f4121e9d969616"
  },
  {
    "url": "senior/use/10.table.html",
    "revision": "dd1b3e99e6a596b41332723c4e09a8c8"
  },
  {
    "url": "senior/use/11.tree.html",
    "revision": "09bcdb47f2fdf4b6bfcef7b70e1d9eee"
  },
  {
    "url": "senior/use/2.extend.html",
    "revision": "ef440306b2c1c2eb9ab2a2aeca71a7fb"
  },
  {
    "url": "senior/use/3.componentCommunication.html",
    "revision": "3e3d5feaac35473fba8497b282ba2d34"
  },
  {
    "url": "senior/use/4.render.html",
    "revision": "682f7567cb6134afa14b165ccae2250d"
  },
  {
    "url": "senior/use/5.api.html",
    "revision": "b3fc55cd8730e78d0f4d197ee316e59c"
  },
  {
    "url": "senior/use/6.form.html",
    "revision": "6304d79ea44355f288bee0414a43a678"
  },
  {
    "url": "senior/use/7.checkBox.html",
    "revision": "3b0d459cfbc65a8acf637a31b4f36af9"
  },
  {
    "url": "senior/use/8.active.html",
    "revision": "0f29f8aefb9529dbfe0373ef803b0b11"
  },
  {
    "url": "senior/use/9.alert.html",
    "revision": "c3b20381ff607fef5c8c1fe064cfc79d"
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
