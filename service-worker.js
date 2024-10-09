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
    "revision": "550c17409e342ffc0ac93e8fc323050f"
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
    "url": "assets/js/10.62852d57.js",
    "revision": "bb1dd64a59fdcfeabd2e15cb5400ba55"
  },
  {
    "url": "assets/js/11.7efa2132.js",
    "revision": "2384e0e3476719bd21603096d20f6644"
  },
  {
    "url": "assets/js/12.a58a5a06.js",
    "revision": "509a6fac8c40bb50b460918184dd9f78"
  },
  {
    "url": "assets/js/13.c43f6be7.js",
    "revision": "969125cee68a5b30724aff4f9dc4a1c9"
  },
  {
    "url": "assets/js/14.c70afbea.js",
    "revision": "9b379c245412a159cbd57006c833fab6"
  },
  {
    "url": "assets/js/15.35c3a928.js",
    "revision": "1e8c4be25d77f45fc1d3bc74f9d467a8"
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
    "url": "assets/js/27.9a68a932.js",
    "revision": "69c2ea49174bc90b1b555df702eb5369"
  },
  {
    "url": "assets/js/28.ab9a7cf0.js",
    "revision": "b8965c7f7f178ba06f97346c8e54065e"
  },
  {
    "url": "assets/js/29.b8c4295b.js",
    "revision": "19a5557bd22f39ef06f252d94fb93c1f"
  },
  {
    "url": "assets/js/3.384e845f.js",
    "revision": "fbf7f49d43a1979ecb3e6e97c2466f4b"
  },
  {
    "url": "assets/js/30.1d0a7aee.js",
    "revision": "d0a2daa83eebcaf232e3083f2bcd34e3"
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
    "url": "assets/js/42.fc66b73d.js",
    "revision": "13a71e5348b4ffc282ef6e962e279b91"
  },
  {
    "url": "assets/js/43.40342065.js",
    "revision": "ac7116758dbd653656dc259c98cafbe3"
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
    "url": "assets/js/9.37a5cf91.js",
    "revision": "74348c6eb654d19d9cac8ba7336da198"
  },
  {
    "url": "assets/js/app.ece9c267.js",
    "revision": "cb5465c6bfbae65b7ae53ee7d2be17c1"
  },
  {
    "url": "base/1.typescript/1.env.html",
    "revision": "0b28e4932ec5b6ca3cf7fc7279212bb1"
  },
  {
    "url": "base/1.typescript/1.index.html",
    "revision": "e784219f46223c9be7d8c80050d7679f"
  },
  {
    "url": "base/1.typescript/10.infer.html",
    "revision": "899fcfbdd1a1bf7f3c1b8134c38ec3f7"
  },
  {
    "url": "base/1.typescript/11.overlapping.html",
    "revision": "ebead0e70006600f5d34ef9c53f022b4"
  },
  {
    "url": "base/1.typescript/12.condition.html",
    "revision": "5ccd1de50481746acc4c4dc131d0b38b"
  },
  {
    "url": "base/1.typescript/13.builtin.html",
    "revision": "e0891bdc839773e39725611f8de98ac0"
  },
  {
    "url": "base/1.typescript/14.package.html",
    "revision": "64a895a472b8865c608ef8520180a508"
  },
  {
    "url": "base/1.typescript/15.custom.html",
    "revision": "8aeb5c4fd152ff47612ce5fca2476e07"
  },
  {
    "url": "base/1.typescript/16.unknown.html",
    "revision": "ba00e389831239bdb08585291112bdce"
  },
  {
    "url": "base/1.typescript/17.module.html",
    "revision": "3dca463d82e3dd9d8413c030484352e0"
  },
  {
    "url": "base/1.typescript/18.statement.html",
    "revision": "facb8d07fe40b9d3c5c5172f5a0eff94"
  },
  {
    "url": "base/1.typescript/19.extend.html",
    "revision": "c4eeecb0b2bb7408c456b27a4cca7966"
  },
  {
    "url": "base/1.typescript/2.base.html",
    "revision": "26472da1db11a119555a4ae373bf35ca"
  },
  {
    "url": "base/1.typescript/3.deduction.html",
    "revision": "7813d846ab5d7e439630c8f0a7c673c5"
  },
  {
    "url": "base/1.typescript/4.type.html",
    "revision": "8ad4b86576539cbe8b81d2c0651c5611"
  },
  {
    "url": "base/1.typescript/5.class.html",
    "revision": "df6c8b4a7712a34f232aacfd35964456"
  },
  {
    "url": "base/1.typescript/6.interface.html",
    "revision": "af0a9da69477e1bde8edbdfa1a67df49"
  },
  {
    "url": "base/1.typescript/7.generic.html",
    "revision": "f793619b0a25ab8387db1d0f5f8e0e99"
  },
  {
    "url": "base/1.typescript/8.compatible.html",
    "revision": "4598e553731c8cecbd934e060c4f7ab3"
  },
  {
    "url": "base/1.typescript/9.protect.html",
    "revision": "d8661816a41d5da9a377a3339f34429c"
  },
  {
    "url": "base/2.vue/1.config.html",
    "revision": "bc73481e7afd67fe95e6f9c8959eab7f"
  },
  {
    "url": "base/2.vue/1.index.html",
    "revision": "17bb1467a15c09e2210fb0a91f92edc4"
  },
  {
    "url": "base/2.vue/10.ui.html",
    "revision": "9f239021fad2dbd6af1332c51329cac7"
  },
  {
    "url": "base/2.vue/11.data.html",
    "revision": "07ad52bfaa12e4e4cebca1e0bc896089"
  },
  {
    "url": "base/2.vue/12.skill.html",
    "revision": "114a27fa29561604222980371eb0883b"
  },
  {
    "url": "base/2.vue/13.com.html",
    "revision": "ea955e19acd1cd279203c20c81fe3bb7"
  },
  {
    "url": "base/2.vue/14.data.html",
    "revision": "06ab7b175895aea2dd95b826042135e9"
  },
  {
    "url": "base/2.vue/2.webpack.html",
    "revision": "e8647257f061d14a076215cc7a9d7ced"
  },
  {
    "url": "base/2.vue/3.file.html",
    "revision": "636375f780dc13473cc779aa2a53fbf0"
  },
  {
    "url": "base/2.vue/4.single.html",
    "revision": "68b8bbf16e25d8e7c29da5a034e4c920"
  },
  {
    "url": "base/2.vue/5.page.html",
    "revision": "56b89cddeb8811814ece6f7f76f0f149"
  },
  {
    "url": "base/2.vue/7.module.html",
    "revision": "098ce62ca8fcac4762b940afbb6b3654"
  },
  {
    "url": "base/2.vue/8.project.html",
    "revision": "55ab06a285cbae64319927db07f2c34d"
  },
  {
    "url": "base/2.vue/9.utils.html",
    "revision": "32495d4569c5fea84cd60caf92341586"
  },
  {
    "url": "base/3.react/1.index.html",
    "revision": "593440b33b52c855ea55a5a26cc4d0b2"
  },
  {
    "url": "base/3.react/2.Jenkins.html",
    "revision": "34d7e6d50aeccd7406a61a09899f3765"
  },
  {
    "url": "base/3.react/3.gitlab.html",
    "revision": "4d87601a7874e184046f7a5b4db3e8c6"
  },
  {
    "url": "base/3.react/i18n.html",
    "revision": "5aebd98b56e3d740850963349ae2f3b0"
  },
  {
    "url": "base/3.react/prem.html",
    "revision": "ed423a8ac921e7b848fdb18caf9c0543"
  },
  {
    "url": "base/3.react/test.html",
    "revision": "c8010757d04e1b24c2f44d83e8c04749"
  },
  {
    "url": "base/3.react/vscode.html",
    "revision": "713e28b81f0beac9fb42c23164b589c7"
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
    "revision": "97742f65f22a3c016f993f0ee823fb17"
  },
  {
    "url": "mock/http.js",
    "revision": "c8abf8aba8039ff5bc6fa0517b076832"
  },
  {
    "url": "senior/npm/1.index.html",
    "revision": "0b97f346d003ae42e10928530b1ecfc3"
  },
  {
    "url": "senior/use/1.index.html",
    "revision": "328df35672c94546b74e2dbbdab007fa"
  },
  {
    "url": "senior/use/10.table.html",
    "revision": "2584ef9658566ac1301def2a113342d1"
  },
  {
    "url": "senior/use/11.tree.html",
    "revision": "a0fbb9661638307140378411d79ac1ad"
  },
  {
    "url": "senior/use/2.extend.html",
    "revision": "ab456d209631228c91cf615d272ee59e"
  },
  {
    "url": "senior/use/3.componentCommunication.html",
    "revision": "7c50c5ac7da876a634c4bb426a27cda9"
  },
  {
    "url": "senior/use/4.render.html",
    "revision": "6ddd28ef48fc6d1086e6adf0f683ab65"
  },
  {
    "url": "senior/use/5.api.html",
    "revision": "6efbfa8ead7a68de003c74869447b412"
  },
  {
    "url": "senior/use/6.form.html",
    "revision": "93c3f2de8555d56d5cf443fcb42bb46a"
  },
  {
    "url": "senior/use/7.checkBox.html",
    "revision": "d5c3a272c259b859b462351fdaaebb40"
  },
  {
    "url": "senior/use/8.active.html",
    "revision": "50bbfc855d9b0b236660222c6040f5a9"
  },
  {
    "url": "senior/use/9.alert.html",
    "revision": "41f22c0ad170dbe2efaf6ff3c637f0ab"
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
