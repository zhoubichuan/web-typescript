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
    "revision": "e5be7f3fbb594947c020e766aa58b67c"
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
    "url": "assets/js/10.96475459.js",
    "revision": "9b67fa48f8bb6d6f41fefd7e00d5ee5a"
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
    "url": "assets/js/13.0bd07843.js",
    "revision": "48be05791b83be4f2b9fe1e65718e692"
  },
  {
    "url": "assets/js/14.59101cd4.js",
    "revision": "75bd76b00f9e983c35c90caa593ce3b5"
  },
  {
    "url": "assets/js/15.728925e7.js",
    "revision": "d287284d7dd16b4bde832a013fe00d96"
  },
  {
    "url": "assets/js/16.f546c269.js",
    "revision": "4a6805162786cb5d3ff6b993c6ce2ead"
  },
  {
    "url": "assets/js/17.f3cd440d.js",
    "revision": "67c1fb7a1ab75d0b5522717d72eeb3de"
  },
  {
    "url": "assets/js/18.7b899cd3.js",
    "revision": "12e2028450ed965a8cd9683542019148"
  },
  {
    "url": "assets/js/19.5e89051f.js",
    "revision": "0c9958e7cd7101045db367d0586cbc8a"
  },
  {
    "url": "assets/js/2.89e1ea04.js",
    "revision": "68158ca192539dc89e98661402a3f7f5"
  },
  {
    "url": "assets/js/20.eba17561.js",
    "revision": "155e2f0fcc7e6cf1d119a13adf5ea7eb"
  },
  {
    "url": "assets/js/21.19c1bebf.js",
    "revision": "f15c482ba11dbab2a947ed5dbd0d7eb3"
  },
  {
    "url": "assets/js/22.7e64cfd1.js",
    "revision": "13f3a6d25c9e90644d2230c2fdf71cb0"
  },
  {
    "url": "assets/js/23.c8228494.js",
    "revision": "fbfbe6a063f90e92542e3658135cc116"
  },
  {
    "url": "assets/js/24.89b5245f.js",
    "revision": "38a2ffc34afe8082ba2054c204f76ce0"
  },
  {
    "url": "assets/js/25.5f4fc18b.js",
    "revision": "1f2eca06aeb0696ecb1b8a46fe43a7f7"
  },
  {
    "url": "assets/js/26.2d4d7cdc.js",
    "revision": "8a52681538310e03012091a66c89b1de"
  },
  {
    "url": "assets/js/27.70b17d59.js",
    "revision": "1c53ed49784c3a84a3b7092d6bbac967"
  },
  {
    "url": "assets/js/28.b21cf716.js",
    "revision": "819285c7398384a9a10f962168d68816"
  },
  {
    "url": "assets/js/29.02e60322.js",
    "revision": "4e652f29b643c5bf92fa613fe437e9fc"
  },
  {
    "url": "assets/js/3.d9195e5d.js",
    "revision": "99ecf51a34e2f1434c397dffd04a2370"
  },
  {
    "url": "assets/js/30.a767508d.js",
    "revision": "aab88116bc5bb780a2460fb32c39ac7a"
  },
  {
    "url": "assets/js/31.80454fc2.js",
    "revision": "6b38141e6b115b99feae611122e63005"
  },
  {
    "url": "assets/js/32.25255bfa.js",
    "revision": "06baae19bc9338702884abd149b780b4"
  },
  {
    "url": "assets/js/33.95a05ab7.js",
    "revision": "949d0b39c1d2f90f751d2bf9e67022a7"
  },
  {
    "url": "assets/js/34.a604d2d9.js",
    "revision": "ea152be3ee61c673335a984b768a6fd1"
  },
  {
    "url": "assets/js/35.d58976e6.js",
    "revision": "d56ab1d1ad9649a397bbedb6ede92986"
  },
  {
    "url": "assets/js/36.5c691acd.js",
    "revision": "26f14725e0c3ae0d0540612cb48033d8"
  },
  {
    "url": "assets/js/37.5e04a49b.js",
    "revision": "4c1202be1542cda69ce5053719861c40"
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
    "url": "assets/js/4.05f88bec.js",
    "revision": "fdc2e91eee5cd3eb3cb6c024b6af42f9"
  },
  {
    "url": "assets/js/40.aea96bae.js",
    "revision": "a2ef0396e12e0c5fc3ed02c8978e2027"
  },
  {
    "url": "assets/js/41.515117a4.js",
    "revision": "0fc1bc4bf3cbc4d6e12900117bc665ec"
  },
  {
    "url": "assets/js/42.6f0c2a6a.js",
    "revision": "e00bce17d2cc0af605280b3d66408104"
  },
  {
    "url": "assets/js/43.603b0b61.js",
    "revision": "54926f60de1a4f8644edf31be9264f0e"
  },
  {
    "url": "assets/js/44.f42dc918.js",
    "revision": "8f586fd5fa98112708c0f3d8d1ae4411"
  },
  {
    "url": "assets/js/45.f1ef4c82.js",
    "revision": "7ef2997398f414237d2efbd11f4b5cf9"
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
    "url": "assets/js/49.688af21c.js",
    "revision": "433778ad990ebe2914f69d422218af6b"
  },
  {
    "url": "assets/js/5.20e39c60.js",
    "revision": "bcc5d766709df338fb7e9fcac2c5bef3"
  },
  {
    "url": "assets/js/50.a94340a6.js",
    "revision": "287848a61a2653419ec0d136a7af23d7"
  },
  {
    "url": "assets/js/51.425829df.js",
    "revision": "e7523eb097ad6169751bb2e1d49635d9"
  },
  {
    "url": "assets/js/52.b13f6ef4.js",
    "revision": "1ad5f82d45ee63d8dd27bc9b8b2446dc"
  },
  {
    "url": "assets/js/53.49935e44.js",
    "revision": "b40d891baf5fddb6d91524ebe399300c"
  },
  {
    "url": "assets/js/54.7ea22905.js",
    "revision": "67084263b9ea7d16af05612627063a0a"
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
    "url": "assets/js/57.21bfb622.js",
    "revision": "4d38e9b4684a1be5b8bb3a21c69bf8c5"
  },
  {
    "url": "assets/js/58.8180ee60.js",
    "revision": "f2b136ae2215e834d0e1484ff8bb94a0"
  },
  {
    "url": "assets/js/59.ff4aaa75.js",
    "revision": "610c445ff0d61d233da0633a1656f74d"
  },
  {
    "url": "assets/js/6.f4a90122.js",
    "revision": "538feed41cdc278857b0994c516e4c7e"
  },
  {
    "url": "assets/js/60.1fc1c6c6.js",
    "revision": "28da702f07dd1dc9b0126de645ee9bb4"
  },
  {
    "url": "assets/js/61.2b9d1bf7.js",
    "revision": "7e8db5baa0137a08ac8410819449f52b"
  },
  {
    "url": "assets/js/62.fdbf3bba.js",
    "revision": "debf703d7f2a0f142014464731ae6787"
  },
  {
    "url": "assets/js/7.07e8a58f.js",
    "revision": "66a766eb5707b2ff18551151923d4ac1"
  },
  {
    "url": "assets/js/8.90da11d8.js",
    "revision": "fbcde08736d97475eb544134ce77bbb0"
  },
  {
    "url": "assets/js/9.a26eb4f2.js",
    "revision": "5c8aa424e0903f9b7900997fc8ce826c"
  },
  {
    "url": "assets/js/app.97ed278a.js",
    "revision": "45924ec0c3360cf095680205c77307b4"
  },
  {
    "url": "base/1.typescript/1.env.html",
    "revision": "d96183ef580b19e268adb70f74afec5c"
  },
  {
    "url": "base/1.typescript/1.index.html",
    "revision": "2d9c604c12db9891c6842793aaa580f5"
  },
  {
    "url": "base/1.typescript/10.infer.html",
    "revision": "9df0088e3302c11f814be7819b4a60b1"
  },
  {
    "url": "base/1.typescript/11.overlapping.html",
    "revision": "ebc09f9682004864d7e9a019cb2c557a"
  },
  {
    "url": "base/1.typescript/12.condition.html",
    "revision": "1ce33534189b05cd08ca5f9062e3287f"
  },
  {
    "url": "base/1.typescript/13.builtin.html",
    "revision": "49be85b48ddcd7c12d7fa77aea59a3fd"
  },
  {
    "url": "base/1.typescript/14.package.html",
    "revision": "a63a0d477ea5cc48457a39a31741de2a"
  },
  {
    "url": "base/1.typescript/15.custom.html",
    "revision": "0ed439efc84c2e7f53fc19ca59207ef9"
  },
  {
    "url": "base/1.typescript/16.unknown.html",
    "revision": "510d9865ad3365d242b7d9640ab9b163"
  },
  {
    "url": "base/1.typescript/17.module.html",
    "revision": "908311eb43346fb7d7bcba5af2991d57"
  },
  {
    "url": "base/1.typescript/18.statement.html",
    "revision": "af24a1df885016bae0a63fbec00075a3"
  },
  {
    "url": "base/1.typescript/19.extend.html",
    "revision": "b0d4d6814a3ea95e19d1a9170a552eca"
  },
  {
    "url": "base/1.typescript/2.base.html",
    "revision": "613087cfed4d39916bbe7f9519ea8938"
  },
  {
    "url": "base/1.typescript/3.deduction.html",
    "revision": "099919c751252d5b5c2730d7852aee2c"
  },
  {
    "url": "base/1.typescript/4.type.html",
    "revision": "73168976f8f4277ed46a389bf9eb0bb3"
  },
  {
    "url": "base/1.typescript/5.class.html",
    "revision": "a169a3fca4b8c4edc349fbd736e9de2b"
  },
  {
    "url": "base/1.typescript/6.interface.html",
    "revision": "f807b3046626144b3b5b2107cab73a0c"
  },
  {
    "url": "base/1.typescript/7.generic.html",
    "revision": "c6d4574d063e784a93bcfbb220592494"
  },
  {
    "url": "base/1.typescript/8.compatible.html",
    "revision": "a1dd324fee976b90d0f5512bdb33af7c"
  },
  {
    "url": "base/1.typescript/9.protect.html",
    "revision": "c7f7aac7ee00c99e2190a198e3e42568"
  },
  {
    "url": "base/2.vue/1.config.html",
    "revision": "9de5bf32a3f985369a3bb9deb5bf84aa"
  },
  {
    "url": "base/2.vue/1.index.html",
    "revision": "b4bf8286d213d90121b0f2444a0628b3"
  },
  {
    "url": "base/2.vue/10.ui.html",
    "revision": "31ab043818806e36f775aa9fce25ea9f"
  },
  {
    "url": "base/2.vue/11.data.html",
    "revision": "6993ece5abe90e4fd0a75fc8932b4003"
  },
  {
    "url": "base/2.vue/12.skill.html",
    "revision": "96fa7926b1f706f672ab0c4a6ff02f6c"
  },
  {
    "url": "base/2.vue/13.com.html",
    "revision": "9abcb1b9ec99cd6b6748358e0eb57e5b"
  },
  {
    "url": "base/2.vue/14.data.html",
    "revision": "ea937b297359ed31221caedf2c89a1b9"
  },
  {
    "url": "base/2.vue/2.webpack.html",
    "revision": "114e9dde92812ec457de920ba791bf9f"
  },
  {
    "url": "base/2.vue/3.file.html",
    "revision": "36a732b83be10a84729509462d159321"
  },
  {
    "url": "base/2.vue/4.single.html",
    "revision": "d4d25d717fdfad28c56db68762277f5d"
  },
  {
    "url": "base/2.vue/5.page.html",
    "revision": "55d617748455f430cf1871bb9c5b04cb"
  },
  {
    "url": "base/2.vue/7.module.html",
    "revision": "a831dba88dddbf8e6cfff02626fe606e"
  },
  {
    "url": "base/2.vue/8.project.html",
    "revision": "5dd2be014a7951a29f94db92c42aed29"
  },
  {
    "url": "base/2.vue/9.utils.html",
    "revision": "14027fa15400250de6275df7e5829068"
  },
  {
    "url": "base/3.react/1.index.html",
    "revision": "a74128667dabe92a455e409b4fdeaa47"
  },
  {
    "url": "base/3.react/2.Jenkins.html",
    "revision": "b311ad7691a1b018782f7347ec0259a5"
  },
  {
    "url": "base/3.react/3.gitlab.html",
    "revision": "bf70cfdcc3e9a8bbbc6112c8ec5f574e"
  },
  {
    "url": "base/3.react/i18n.html",
    "revision": "db83d834c37c13421c7203c74b414f93"
  },
  {
    "url": "base/3.react/prem.html",
    "revision": "b1bcb181407e5ff01a629a7a0a56549b"
  },
  {
    "url": "base/3.react/test.html",
    "revision": "3bf7efb88ec0b825a8adc7e291c04fc2"
  },
  {
    "url": "base/3.react/vscode.html",
    "revision": "a11f8605ad9437f50a5bf9bae80a640b"
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
    "revision": "47f1460529563341c2075c4e559cd3a8"
  },
  {
    "url": "mock/http.js",
    "revision": "c8abf8aba8039ff5bc6fa0517b076832"
  },
  {
    "url": "senior/npm/1.index.html",
    "revision": "bb5c5233dc50e39d3a01123f65c86d43"
  },
  {
    "url": "senior/use/1.index.html",
    "revision": "c80ea27f72b76a2952bd088834d205bb"
  },
  {
    "url": "senior/use/10.table.html",
    "revision": "0ea4a4225d80eaaa38532458f0041691"
  },
  {
    "url": "senior/use/11.tree.html",
    "revision": "aa494d147fd6c76367f94108c2d1809a"
  },
  {
    "url": "senior/use/2.extend.html",
    "revision": "a99b3e61fe26486191419b6255814ad7"
  },
  {
    "url": "senior/use/3.componentCommunication.html",
    "revision": "160a8de90397386d9963b8793225ed5e"
  },
  {
    "url": "senior/use/4.render.html",
    "revision": "3daa2831630ef3ee74af6c48616b40db"
  },
  {
    "url": "senior/use/5.api.html",
    "revision": "5d79d69e3be3babc275c4453ae08dce1"
  },
  {
    "url": "senior/use/6.form.html",
    "revision": "bcf64c84def73788d793475f57c43ac1"
  },
  {
    "url": "senior/use/7.checkBox.html",
    "revision": "2ba26fcb57f26233ac2a91771a911dd2"
  },
  {
    "url": "senior/use/8.active.html",
    "revision": "fb80608b52f7d4875331a48434449f7f"
  },
  {
    "url": "senior/use/9.alert.html",
    "revision": "ed2f8d923a57a3e0714c508f8b1860d4"
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
