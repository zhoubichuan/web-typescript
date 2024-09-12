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
    "revision": "ae33b2df0e882794aea1dd5fa3932bf3"
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
    "url": "assets/js/10.9b7e528d.js",
    "revision": "5c95efd17e566cdd3f460887e28e3d4e"
  },
  {
    "url": "assets/js/11.c0fd6524.js",
    "revision": "0d7609dbe222e0146d8dc721cd7c6933"
  },
  {
    "url": "assets/js/12.2eda9b68.js",
    "revision": "e7feac7f026a9773fd49ac9db5a2a8ea"
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
    "url": "assets/js/15.69a4ecfb.js",
    "revision": "82f2abff0479c1ac62a7eaab607e9745"
  },
  {
    "url": "assets/js/16.88287ec7.js",
    "revision": "5f4597aba748da9557242cb4c46a6af9"
  },
  {
    "url": "assets/js/17.85f3fc91.js",
    "revision": "12e9de56c044d696887eb596307dee7d"
  },
  {
    "url": "assets/js/18.d7a34403.js",
    "revision": "57579fb9a70cabfee772fe184f9fe98c"
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
    "url": "assets/js/20.3e559e16.js",
    "revision": "22471caed4af140241c892b314e98d5b"
  },
  {
    "url": "assets/js/21.c5be7eec.js",
    "revision": "25d596c8189811c4b032414f2710401b"
  },
  {
    "url": "assets/js/22.7e64cfd1.js",
    "revision": "13f3a6d25c9e90644d2230c2fdf71cb0"
  },
  {
    "url": "assets/js/23.0b775053.js",
    "revision": "d2ac449cafd51ff88dfb04a649dc371e"
  },
  {
    "url": "assets/js/24.ffa659eb.js",
    "revision": "b1ce25614f9fc14b39d854e5e9f8669d"
  },
  {
    "url": "assets/js/25.c00a3fdb.js",
    "revision": "7ddcc08888f7abee0ff9c63ec606ff5e"
  },
  {
    "url": "assets/js/26.8a987ba8.js",
    "revision": "57d8c7c7e07567ee27376e1b563990d4"
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
    "url": "assets/js/29.c1c5deb0.js",
    "revision": "6d1114d7fa4457672e93b605df9b2740"
  },
  {
    "url": "assets/js/3.384e845f.js",
    "revision": "fbf7f49d43a1979ecb3e6e97c2466f4b"
  },
  {
    "url": "assets/js/30.181dbfdc.js",
    "revision": "b197fc12f6cc984796052fe9f32ac24f"
  },
  {
    "url": "assets/js/31.ce6ea55a.js",
    "revision": "2af88610be0ef3be84dce60dbeb16e04"
  },
  {
    "url": "assets/js/32.549ac71a.js",
    "revision": "462d3f9923b1f85ad37683a44cd0a43b"
  },
  {
    "url": "assets/js/33.8528cf2c.js",
    "revision": "c4c8903ca18df8c9d186a0fada380c8b"
  },
  {
    "url": "assets/js/34.cf86c3e7.js",
    "revision": "9a1365a03e5b8d412c75ed173ef4c10e"
  },
  {
    "url": "assets/js/35.d58976e6.js",
    "revision": "d56ab1d1ad9649a397bbedb6ede92986"
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
    "url": "assets/js/45.2bf1630c.js",
    "revision": "be4d8d5f880685401d2caeee6d80384a"
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
    "url": "assets/js/54.2dcea2b0.js",
    "revision": "4ba15b14933d8fb725672293a99ff96b"
  },
  {
    "url": "assets/js/55.47e5e9b3.js",
    "revision": "66a1070b6f9b3fa77d7c8a8d10b8924a"
  },
  {
    "url": "assets/js/56.635bb0f0.js",
    "revision": "76d4108feb33c7efa2680e74db543143"
  },
  {
    "url": "assets/js/57.312e441b.js",
    "revision": "31b4eed633b4ad3441eaf5a44edbc14e"
  },
  {
    "url": "assets/js/58.8c0902e7.js",
    "revision": "bf561e005880d5e812a259392be8f5ad"
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
    "url": "assets/js/app.e966289d.js",
    "revision": "2388c43f69d58d90b7246bea8830840a"
  },
  {
    "url": "base/1.typescript/1.env.html",
    "revision": "72d2056e35a02eb4a31314f4618b79e6"
  },
  {
    "url": "base/1.typescript/1.index.html",
    "revision": "c6853a4a3615ba658f3559a93e08116f"
  },
  {
    "url": "base/1.typescript/10.infer.html",
    "revision": "dcd3fa67f88319f19fe5102ca2ded448"
  },
  {
    "url": "base/1.typescript/11.overlapping.html",
    "revision": "fa92f08d6f6be3144465715a14c470c6"
  },
  {
    "url": "base/1.typescript/12.condition.html",
    "revision": "73ccbe8284f83cd697cbb0870d0ccf4d"
  },
  {
    "url": "base/1.typescript/13.builtin.html",
    "revision": "c9cd932e9e0e822588b8b7082eb9d3a7"
  },
  {
    "url": "base/1.typescript/14.package.html",
    "revision": "7a3edf0fc8396ad1992b900200e345b9"
  },
  {
    "url": "base/1.typescript/15.custom.html",
    "revision": "62671476916ac0b2f458a8270af33070"
  },
  {
    "url": "base/1.typescript/16.unknown.html",
    "revision": "cb810c4d05f82230c03b7d5b17fb58ee"
  },
  {
    "url": "base/1.typescript/17.module.html",
    "revision": "ef212d9bfd1ed36152273ae97aac35b4"
  },
  {
    "url": "base/1.typescript/18.statement.html",
    "revision": "e1b98436efebf394ea66db2c586d4a94"
  },
  {
    "url": "base/1.typescript/19.extend.html",
    "revision": "71cd971eb4c6ec0d63538656bd6c22a0"
  },
  {
    "url": "base/1.typescript/2.base.html",
    "revision": "9a5fbf35fee42029ee97f8f9f4e208c1"
  },
  {
    "url": "base/1.typescript/3.deduction.html",
    "revision": "0980d1988a6b3ecaf012e303c3292cf8"
  },
  {
    "url": "base/1.typescript/4.type.html",
    "revision": "d9f6fc1abff53f8a3abe929e7150dc27"
  },
  {
    "url": "base/1.typescript/5.class.html",
    "revision": "97ec9c96f78e537d23089ab65c81c48e"
  },
  {
    "url": "base/1.typescript/6.interface.html",
    "revision": "7a817c606453272a44a50c7e939f8dab"
  },
  {
    "url": "base/1.typescript/7.generic.html",
    "revision": "d63b529aa0ba12db4441c9c264b5dfcf"
  },
  {
    "url": "base/1.typescript/8.compatible.html",
    "revision": "42fca63be9a2382470576ecd1cb42fa0"
  },
  {
    "url": "base/1.typescript/9.protect.html",
    "revision": "b1e06f5aae878ea2a492901f4917759f"
  },
  {
    "url": "base/2.vue/1.config.html",
    "revision": "154d8e744b53d772e3d6afbfdde38428"
  },
  {
    "url": "base/2.vue/1.index.html",
    "revision": "1b335ffaff4900be475561e4baf58073"
  },
  {
    "url": "base/2.vue/10.ui.html",
    "revision": "dab43360eb7f4932d2acc3bc93b1f437"
  },
  {
    "url": "base/2.vue/11.data.html",
    "revision": "30ed4cdc2d0df16e1fc03296e8a97302"
  },
  {
    "url": "base/2.vue/12.skill.html",
    "revision": "3bc100d41aabd62b3f449512e060b18c"
  },
  {
    "url": "base/2.vue/13.com.html",
    "revision": "074ab929081a3bf508d0656675a33eeb"
  },
  {
    "url": "base/2.vue/14.data.html",
    "revision": "481275c2cf59ee3e6ed173c8b9349301"
  },
  {
    "url": "base/2.vue/2.webpack.html",
    "revision": "58c736898737e978b5cf9503836cbeed"
  },
  {
    "url": "base/2.vue/3.file.html",
    "revision": "a5092613897f28f35f35dd709f4a511e"
  },
  {
    "url": "base/2.vue/4.single.html",
    "revision": "14e743d3f60d42fabd3ef5f2bde5bbc4"
  },
  {
    "url": "base/2.vue/5.page.html",
    "revision": "92ed003d937f5544d15148fee33bf614"
  },
  {
    "url": "base/2.vue/7.module.html",
    "revision": "79b28d6e914da17b7de51676c50a3fa4"
  },
  {
    "url": "base/2.vue/8.project.html",
    "revision": "18e6bf3b6270213b698e4eb858f51a7e"
  },
  {
    "url": "base/2.vue/9.utils.html",
    "revision": "a6b514d719c471474d5af0c6e4608141"
  },
  {
    "url": "base/3.react/1.index.html",
    "revision": "da0fa8c0cbbca515a5e941f5dd75170e"
  },
  {
    "url": "base/3.react/2.Jenkins.html",
    "revision": "af8cdaef705d961cb2f2ca4e36b8681c"
  },
  {
    "url": "base/3.react/3.gitlab.html",
    "revision": "cc2f3f44e80ea636c4a5bb8d87a74082"
  },
  {
    "url": "base/3.react/i18n.html",
    "revision": "c99d397433f345afac392b061af20853"
  },
  {
    "url": "base/3.react/prem.html",
    "revision": "cb80cf5be50143f4a188c98710fc98cf"
  },
  {
    "url": "base/3.react/test.html",
    "revision": "c0fbe676ac821b4b55121049719acbe0"
  },
  {
    "url": "base/3.react/vscode.html",
    "revision": "9e08ed5ef3e7c54dc80eeeeab2a33103"
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
    "revision": "d66856435139a7f731a7a4b26240649f"
  },
  {
    "url": "mock/http.js",
    "revision": "c8abf8aba8039ff5bc6fa0517b076832"
  },
  {
    "url": "senior/npm/1.index.html",
    "revision": "41225a3964332fefe853c4ecebc58d65"
  },
  {
    "url": "senior/use/1.index.html",
    "revision": "f6071cc1a572a9c1924456829718daab"
  },
  {
    "url": "senior/use/10.table.html",
    "revision": "fc08097682107611925569d4b0000005"
  },
  {
    "url": "senior/use/11.tree.html",
    "revision": "e4daecfb4af4619d2862c14d4e522b60"
  },
  {
    "url": "senior/use/2.extend.html",
    "revision": "77c26e22e14051a3a44dc7ade3e092f8"
  },
  {
    "url": "senior/use/3.componentCommunication.html",
    "revision": "876e379b391ccd4f06bfedd832fc13c3"
  },
  {
    "url": "senior/use/4.render.html",
    "revision": "f6fa01605cf9d8355b9528aff46b02cc"
  },
  {
    "url": "senior/use/5.api.html",
    "revision": "ece022e9976e11e1f114f1b5aa0c253b"
  },
  {
    "url": "senior/use/6.form.html",
    "revision": "5efb8cb277ecf1d4510fa4347827d985"
  },
  {
    "url": "senior/use/7.checkBox.html",
    "revision": "1a3276231fa82c89a7434e887ebc2698"
  },
  {
    "url": "senior/use/8.active.html",
    "revision": "3ff0ee5607d54ae46077b71d961f9385"
  },
  {
    "url": "senior/use/9.alert.html",
    "revision": "9ec318a3ac8f2c0e355eb89f24521fb7"
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
