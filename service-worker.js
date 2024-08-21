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
    "revision": "2a9df6825de12811b4d67a15e8a2f453"
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
    "url": "assets/js/10.62298ce8.js",
    "revision": "e996401352a2de27cdd4a73d615dded9"
  },
  {
    "url": "assets/js/11.a748897e.js",
    "revision": "52db8f172521861d13868c8c8e57f651"
  },
  {
    "url": "assets/js/12.2eda9b68.js",
    "revision": "e7feac7f026a9773fd49ac9db5a2a8ea"
  },
  {
    "url": "assets/js/13.c7561396.js",
    "revision": "ecfb63aae838529f72db5e2f77b8c551"
  },
  {
    "url": "assets/js/14.bc507c46.js",
    "revision": "1960d3ab05e38aee22e57080bcab2d99"
  },
  {
    "url": "assets/js/15.35c3a928.js",
    "revision": "1e8c4be25d77f45fc1d3bc74f9d467a8"
  },
  {
    "url": "assets/js/16.e80046c7.js",
    "revision": "875cb5f45cee3fbd10d748002396dfac"
  },
  {
    "url": "assets/js/17.2d62fea6.js",
    "revision": "f8e20935bc567b44b278e338e0bed143"
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
    "url": "assets/js/2.5fff30ab.js",
    "revision": "bf3576487357da8939cf82eea38f445c"
  },
  {
    "url": "assets/js/20.2e115796.js",
    "revision": "cb005231c7a9222a69110f19b3e8d846"
  },
  {
    "url": "assets/js/21.92698d06.js",
    "revision": "53dbb41dc57f46f70631890752fa40d7"
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
    "url": "assets/js/27.4a9ae719.js",
    "revision": "6e010a408e9240397508ea4c76564477"
  },
  {
    "url": "assets/js/28.3ab77190.js",
    "revision": "3f2a997299e5554e93ced030807901cd"
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
    "url": "assets/js/35.e71f68c0.js",
    "revision": "c9ce5dda575b511bf8d0237212b19a01"
  },
  {
    "url": "assets/js/36.5c691acd.js",
    "revision": "26f14725e0c3ae0d0540612cb48033d8"
  },
  {
    "url": "assets/js/37.3f38748c.js",
    "revision": "33930d81178e7a5a94eecab86cd6541e"
  },
  {
    "url": "assets/js/38.6be8169d.js",
    "revision": "a06d6182d4c82304d8b585d04ff5ca60"
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
    "url": "assets/js/40.c19ccde4.js",
    "revision": "eece8bedda252099440e5018d4cbd78a"
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
    "url": "assets/js/47.17502335.js",
    "revision": "bd736aeda7d73b90359a86003d43155a"
  },
  {
    "url": "assets/js/48.389f0fd2.js",
    "revision": "20f6a078c9afd51522951c51b2a68b6e"
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
    "url": "assets/js/52.3bf470d4.js",
    "revision": "30b62a10a70758089afc3be7b3dec31e"
  },
  {
    "url": "assets/js/53.49935e44.js",
    "revision": "b40d891baf5fddb6d91524ebe399300c"
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
    "url": "assets/js/57.42b8744f.js",
    "revision": "c83f34062b817ebb9f6b7cc9a79e11dc"
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
    "url": "assets/js/9.c0ee3b20.js",
    "revision": "0cafd3ab5a816af844cab04a3c58b087"
  },
  {
    "url": "assets/js/app.0abfae56.js",
    "revision": "0a36cfaa202ead201443aa255c54a032"
  },
  {
    "url": "base/1.typescript/1.env.html",
    "revision": "9dc5a9ec473584bb976081c299b8f333"
  },
  {
    "url": "base/1.typescript/1.index.html",
    "revision": "0e5d609f218e6d0ceffcb3ebeb0e7e3e"
  },
  {
    "url": "base/1.typescript/10.infer.html",
    "revision": "6964010d1d7f7228a978937330b856c9"
  },
  {
    "url": "base/1.typescript/11.overlapping.html",
    "revision": "ead6191628a8ac6b54f630318ac9f132"
  },
  {
    "url": "base/1.typescript/12.condition.html",
    "revision": "1eb7e50a2da77c0d25412a93d4e2e07d"
  },
  {
    "url": "base/1.typescript/13.builtin.html",
    "revision": "272f216ebb1040c2b3be1bf477b6b4c7"
  },
  {
    "url": "base/1.typescript/14.package.html",
    "revision": "6abb8f4e47961cff05f88ef8fba357f9"
  },
  {
    "url": "base/1.typescript/15.custom.html",
    "revision": "8d10dbbb36d1b65591d75c291287ee97"
  },
  {
    "url": "base/1.typescript/16.unknown.html",
    "revision": "fa32c2dd7458c21e74647d9018e345f1"
  },
  {
    "url": "base/1.typescript/17.module.html",
    "revision": "00ac9ede74e1428f328d76c77c05466a"
  },
  {
    "url": "base/1.typescript/18.statement.html",
    "revision": "a763e7586600cada566f1ccc6062a7d8"
  },
  {
    "url": "base/1.typescript/19.extend.html",
    "revision": "13ca143095359ce9a13287a336489e02"
  },
  {
    "url": "base/1.typescript/2.base.html",
    "revision": "370819e14e85dfb180516b0ed0c81e7f"
  },
  {
    "url": "base/1.typescript/3.deduction.html",
    "revision": "f8c95e3b053cc22637fe3103e4f548fa"
  },
  {
    "url": "base/1.typescript/4.type.html",
    "revision": "c50540db51754fbe862c5dfa0b0e2bbc"
  },
  {
    "url": "base/1.typescript/5.class.html",
    "revision": "7d353b71892232ad8ce1236883548881"
  },
  {
    "url": "base/1.typescript/6.interface.html",
    "revision": "c16e94f5780f7f23eebd5cf7c22be139"
  },
  {
    "url": "base/1.typescript/7.generic.html",
    "revision": "d8eeda78621bf1bf11b508cc380f5183"
  },
  {
    "url": "base/1.typescript/8.compatible.html",
    "revision": "d9c9329b92bde817732d87911dd473ab"
  },
  {
    "url": "base/1.typescript/9.protect.html",
    "revision": "ea349a5d804756159405411d91634720"
  },
  {
    "url": "base/2.vue/1.config.html",
    "revision": "ec002855db4722cdc28e4e1db4fb95bd"
  },
  {
    "url": "base/2.vue/1.index.html",
    "revision": "bd88659d9269259a07038f01a207952a"
  },
  {
    "url": "base/2.vue/10.ui.html",
    "revision": "11d1fe870e7ffc30617c7dd025f37ab4"
  },
  {
    "url": "base/2.vue/11.data.html",
    "revision": "13ecbbf205f7aaaa73cc43888d2f61cd"
  },
  {
    "url": "base/2.vue/12.skill.html",
    "revision": "46388b23509e0da8cc0a4692a9d288de"
  },
  {
    "url": "base/2.vue/13.com.html",
    "revision": "87d2d714cab560a9df28fba4f5159dbf"
  },
  {
    "url": "base/2.vue/14.data.html",
    "revision": "5d118515cb736869ec759da00cc02c0e"
  },
  {
    "url": "base/2.vue/2.webpack.html",
    "revision": "d3cf5ec943739a0e0a76ec991fe87d65"
  },
  {
    "url": "base/2.vue/3.file.html",
    "revision": "b9e93f91572b3a43671449a91055c26c"
  },
  {
    "url": "base/2.vue/4.single.html",
    "revision": "588899b5d3a7b677f19518b25fc2993e"
  },
  {
    "url": "base/2.vue/5.page.html",
    "revision": "12e9b4e685f07ec53ec5d7d293355a9d"
  },
  {
    "url": "base/2.vue/7.module.html",
    "revision": "203ccd6bd317bbb2223e9cb101b03ec9"
  },
  {
    "url": "base/2.vue/8.project.html",
    "revision": "27843de4075a2a959516dfb8229cb5d1"
  },
  {
    "url": "base/2.vue/9.utils.html",
    "revision": "2e26d80d9a56f7bdaf211a0709c3ac3a"
  },
  {
    "url": "base/3.react/1.index.html",
    "revision": "0d89a34e68c45fae601626fb9b82176a"
  },
  {
    "url": "base/3.react/2.Jenkins.html",
    "revision": "4b2dbff9917711064f45629b24a5976a"
  },
  {
    "url": "base/3.react/3.gitlab.html",
    "revision": "1da5e0c96f4ccbd077e64a9fc936ed06"
  },
  {
    "url": "base/3.react/i18n.html",
    "revision": "71e12cf5761ad630b0e3330fab54e615"
  },
  {
    "url": "base/3.react/prem.html",
    "revision": "7a4bf72e65e6e7ca8ecae78bc998f376"
  },
  {
    "url": "base/3.react/test.html",
    "revision": "be859b0203104ea63fbe9f6ab734678c"
  },
  {
    "url": "base/3.react/vscode.html",
    "revision": "1dfad1dec2f60e2eca52cce80828fe61"
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
    "revision": "6434b553ec3b1103f2ddfa76fee53bc4"
  },
  {
    "url": "mock/http.js",
    "revision": "c8abf8aba8039ff5bc6fa0517b076832"
  },
  {
    "url": "senior/npm/1.index.html",
    "revision": "d7173bfb66fddeae235f38b87f0801e2"
  },
  {
    "url": "senior/use/1.index.html",
    "revision": "71bbd82e84fb2e2608f6480e0373a3e8"
  },
  {
    "url": "senior/use/10.table.html",
    "revision": "0856ef009718dd1475d384738655ec0d"
  },
  {
    "url": "senior/use/11.tree.html",
    "revision": "aac5dba3d3182546b6a6f0dfb5c3ab27"
  },
  {
    "url": "senior/use/2.extend.html",
    "revision": "4492fb26e3c7b70844c5802f08bc316f"
  },
  {
    "url": "senior/use/3.componentCommunication.html",
    "revision": "4ebef3a50802649bc4b93777d42a29dc"
  },
  {
    "url": "senior/use/4.render.html",
    "revision": "8ec000c0c62f4caba8eea33f4ce5f1df"
  },
  {
    "url": "senior/use/5.api.html",
    "revision": "7524185a0a0ebf5829e70484426efd5e"
  },
  {
    "url": "senior/use/6.form.html",
    "revision": "fc140dbd55d3750453ab51eb31e1cd24"
  },
  {
    "url": "senior/use/7.checkBox.html",
    "revision": "3d96563add1ad6aadc51c0a5aade5364"
  },
  {
    "url": "senior/use/8.active.html",
    "revision": "4cfd20d03c475d4e5c86a1d1f1181c7e"
  },
  {
    "url": "senior/use/9.alert.html",
    "revision": "d9d865046868ddb8d949a36f2259e0d9"
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
