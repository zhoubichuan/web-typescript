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
    "revision": "dadd108ba5c93a969958a126e21ce5f6"
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
    "url": "assets/js/11.a748897e.js",
    "revision": "52db8f172521861d13868c8c8e57f651"
  },
  {
    "url": "assets/js/12.a58a5a06.js",
    "revision": "509a6fac8c40bb50b460918184dd9f78"
  },
  {
    "url": "assets/js/13.0bd07843.js",
    "revision": "48be05791b83be4f2b9fe1e65718e692"
  },
  {
    "url": "assets/js/14.9c65f8ab.js",
    "revision": "3a4297afc51f9bc9742144d0ea338568"
  },
  {
    "url": "assets/js/15.728925e7.js",
    "revision": "d287284d7dd16b4bde832a013fe00d96"
  },
  {
    "url": "assets/js/16.799bba01.js",
    "revision": "421260d42843b2b02a2c004e2c74bd25"
  },
  {
    "url": "assets/js/17.56368934.js",
    "revision": "4d0f3794587a2aed0e81bafc25022a13"
  },
  {
    "url": "assets/js/18.f1802c74.js",
    "revision": "617112234814e573f3dbfc42066b4a80"
  },
  {
    "url": "assets/js/19.5e89051f.js",
    "revision": "0c9958e7cd7101045db367d0586cbc8a"
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
    "url": "assets/js/23.0b775053.js",
    "revision": "d2ac449cafd51ff88dfb04a649dc371e"
  },
  {
    "url": "assets/js/24.9b100fd1.js",
    "revision": "4d4bbbfadc7e5bf0619ad7f3b6897a59"
  },
  {
    "url": "assets/js/25.5f4fc18b.js",
    "revision": "1f2eca06aeb0696ecb1b8a46fe43a7f7"
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
    "url": "assets/js/30.0112ca1a.js",
    "revision": "00fad58359e1a92a9f10d540e59a809d"
  },
  {
    "url": "assets/js/31.ce6ea55a.js",
    "revision": "2af88610be0ef3be84dce60dbeb16e04"
  },
  {
    "url": "assets/js/32.41656721.js",
    "revision": "29756f98ce076088fb01f07f2b365c4c"
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
    "url": "assets/js/54.1737d18f.js",
    "revision": "b3c5e5b38cb678339d8694142b6b6576"
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
    "url": "assets/js/57.231e935e.js",
    "revision": "8f2ab6d69d865977f7bd1d8a4ef4c160"
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
    "url": "assets/js/60.1fc1c6c6.js",
    "revision": "28da702f07dd1dc9b0126de645ee9bb4"
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
    "url": "assets/js/8.d6f21308.js",
    "revision": "bbb176b6cff741eb5269848051d79e36"
  },
  {
    "url": "assets/js/9.f3c9d29c.js",
    "revision": "802b85e8b5dc84f285b4edcd5a64b8c8"
  },
  {
    "url": "assets/js/app.38e1fb18.js",
    "revision": "d8e775cbe38f0da75b36348903cc651a"
  },
  {
    "url": "base/1.typescript/1.env.html",
    "revision": "dc9ee506e027026e28bb35c6874e9312"
  },
  {
    "url": "base/1.typescript/1.index.html",
    "revision": "258879c8545842c1b3bf742f99c995aa"
  },
  {
    "url": "base/1.typescript/10.infer.html",
    "revision": "47ed56b60bd294e058c2868700961cd6"
  },
  {
    "url": "base/1.typescript/11.overlapping.html",
    "revision": "12b524f83712cd0c0fcbff403e79b77d"
  },
  {
    "url": "base/1.typescript/12.condition.html",
    "revision": "9864d23b04463ddf5fa75381b4ea88b0"
  },
  {
    "url": "base/1.typescript/13.builtin.html",
    "revision": "32de602c794e107535e479bc6db07952"
  },
  {
    "url": "base/1.typescript/14.package.html",
    "revision": "2340fc3fb9481aaac011e5439b39beea"
  },
  {
    "url": "base/1.typescript/15.custom.html",
    "revision": "87a06d6ecf65cec0923f66ed69d4b57a"
  },
  {
    "url": "base/1.typescript/16.unknown.html",
    "revision": "84abff530ec4aeaffabacb20075eac72"
  },
  {
    "url": "base/1.typescript/17.module.html",
    "revision": "9044bf8000040d73b0379a8eb33fe4c3"
  },
  {
    "url": "base/1.typescript/18.statement.html",
    "revision": "3c6d435c017459788eea8d87721eba4b"
  },
  {
    "url": "base/1.typescript/19.extend.html",
    "revision": "9ae398b3865049da92fd8f618150051d"
  },
  {
    "url": "base/1.typescript/2.base.html",
    "revision": "d34c7063959a55a7e3f399d7b7adc0a6"
  },
  {
    "url": "base/1.typescript/3.deduction.html",
    "revision": "3fab02446c9f2c7778829a4622199ee7"
  },
  {
    "url": "base/1.typescript/4.type.html",
    "revision": "e928f21ffbefb27f44c1e21c62db5749"
  },
  {
    "url": "base/1.typescript/5.class.html",
    "revision": "11f3cc60388e322ddb400e3beead5c76"
  },
  {
    "url": "base/1.typescript/6.interface.html",
    "revision": "ba5df90cc147ecd0388f2e2b9d595a42"
  },
  {
    "url": "base/1.typescript/7.generic.html",
    "revision": "0447ef317285edd5cab94bea2fd1bc41"
  },
  {
    "url": "base/1.typescript/8.compatible.html",
    "revision": "b902a3241e5ad85ef5f4dcea4d42a8e9"
  },
  {
    "url": "base/1.typescript/9.protect.html",
    "revision": "e05a766c1d02f097691a6607223e1c3d"
  },
  {
    "url": "base/2.vue/1.config.html",
    "revision": "f5f83b822f3e2773e124671f8093588b"
  },
  {
    "url": "base/2.vue/1.index.html",
    "revision": "1ffbfd97dd21416ba9e34278bc710cbc"
  },
  {
    "url": "base/2.vue/10.ui.html",
    "revision": "bd51488741c8c86da84a0923e87851bb"
  },
  {
    "url": "base/2.vue/11.data.html",
    "revision": "cecd9c3b5f953b8941472fa44912d494"
  },
  {
    "url": "base/2.vue/12.skill.html",
    "revision": "ad73a26d85a3235dbfc92fe60c2b9ad6"
  },
  {
    "url": "base/2.vue/13.com.html",
    "revision": "3bbfb258cab71b530c6ae0549f9dbc34"
  },
  {
    "url": "base/2.vue/14.data.html",
    "revision": "8d80804611bcff6086b6644975f459c6"
  },
  {
    "url": "base/2.vue/2.webpack.html",
    "revision": "07b76a0d19f6536f884b4c92db53e635"
  },
  {
    "url": "base/2.vue/3.file.html",
    "revision": "30199a55719fe2e29bdf59c6e3f3b072"
  },
  {
    "url": "base/2.vue/4.single.html",
    "revision": "dfebc919c1336db24f922bd9f74a86e5"
  },
  {
    "url": "base/2.vue/5.page.html",
    "revision": "15af5ca86f8c409b3ba660732d408734"
  },
  {
    "url": "base/2.vue/7.module.html",
    "revision": "e55865c441a93b050179ac0e4dcc7434"
  },
  {
    "url": "base/2.vue/8.project.html",
    "revision": "8e7db81ecfab4957d4f1d3739f04f178"
  },
  {
    "url": "base/2.vue/9.utils.html",
    "revision": "157420f0db7258a0171377c7a2c60e3f"
  },
  {
    "url": "base/3.react/1.index.html",
    "revision": "9f829106983056e8968ff58dafa71b67"
  },
  {
    "url": "base/3.react/2.Jenkins.html",
    "revision": "5a3999c2240570931b7545b62aa22e80"
  },
  {
    "url": "base/3.react/3.gitlab.html",
    "revision": "547d9fd584f670d293f768927a2d07b7"
  },
  {
    "url": "base/3.react/i18n.html",
    "revision": "8281c61b4c0e18a3b3018d7736df8763"
  },
  {
    "url": "base/3.react/prem.html",
    "revision": "07e62b54b645506db6baafa6bb67e7cf"
  },
  {
    "url": "base/3.react/test.html",
    "revision": "7e04d1137cafa2eec6393e531a10425f"
  },
  {
    "url": "base/3.react/vscode.html",
    "revision": "3936997d3e932b09332c0b81f6a7409d"
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
    "revision": "8b1569cf7d1ec480b075fbca6b2231a9"
  },
  {
    "url": "mock/http.js",
    "revision": "c8abf8aba8039ff5bc6fa0517b076832"
  },
  {
    "url": "senior/npm/1.index.html",
    "revision": "27326ed5ca427b571be8ac3a785d2be4"
  },
  {
    "url": "senior/use/1.index.html",
    "revision": "ff7dea7204aed2d69f985705edf8eb34"
  },
  {
    "url": "senior/use/10.table.html",
    "revision": "353c8fdd1d5ad51795fa026aeea41a1e"
  },
  {
    "url": "senior/use/11.tree.html",
    "revision": "88ad5506f8f957c33d0635827ebb54a0"
  },
  {
    "url": "senior/use/2.extend.html",
    "revision": "de0abb1e970deffc84f2357cfdc0bdcf"
  },
  {
    "url": "senior/use/3.componentCommunication.html",
    "revision": "5a8d3dba67e184b09cd8c52a3a6d139c"
  },
  {
    "url": "senior/use/4.render.html",
    "revision": "f02dd1de310a987b2e6c95f431eb8f8e"
  },
  {
    "url": "senior/use/5.api.html",
    "revision": "b2a0fabfe8635fcaa40ad77e9638f9a7"
  },
  {
    "url": "senior/use/6.form.html",
    "revision": "5a7ff0508e967d79963e28da1140c20c"
  },
  {
    "url": "senior/use/7.checkBox.html",
    "revision": "302231d08f56f2c4f81c5a05746fd867"
  },
  {
    "url": "senior/use/8.active.html",
    "revision": "648d096b2b27ff6b79f1538e5bf72ab7"
  },
  {
    "url": "senior/use/9.alert.html",
    "revision": "f6659a48841ee839bb346a3587724259"
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
