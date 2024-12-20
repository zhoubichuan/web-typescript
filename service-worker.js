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
    "revision": "a5ef58f12fb400b40e2fcd04e0f0e2ba"
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
    "url": "assets/js/10.6b6e1d00.js",
    "revision": "d5e42946a3a2066bcb32b5e8be1c4147"
  },
  {
    "url": "assets/js/11.5f0a1c34.js",
    "revision": "e65fa92225105d855534da47ed6ff165"
  },
  {
    "url": "assets/js/12.c798d2f0.js",
    "revision": "9651efb3ffb3304d8c79c549d2c1e922"
  },
  {
    "url": "assets/js/13.669c6480.js",
    "revision": "866aba9420e0f6a133a8f9a746f9a494"
  },
  {
    "url": "assets/js/14.648b6a2b.js",
    "revision": "e29aab9d647a6e4d915eafd565dbbbc7"
  },
  {
    "url": "assets/js/15.99a41df2.js",
    "revision": "9eb72e46cd4383ead65897942a4930d9"
  },
  {
    "url": "assets/js/16.363c9376.js",
    "revision": "7fb6ea57f0d6a09ffa05f614c1252293"
  },
  {
    "url": "assets/js/17.bb34963d.js",
    "revision": "5cc813148b4f90dd0716db8f147137b4"
  },
  {
    "url": "assets/js/18.b2741fc9.js",
    "revision": "099030b178d981c829e88652249cd3da"
  },
  {
    "url": "assets/js/19.845a6e8f.js",
    "revision": "80f6c66cda3bb32c69551feb147a1d28"
  },
  {
    "url": "assets/js/2.5083c7ff.js",
    "revision": "261759167bf43df4e749be58f6a0a1a2"
  },
  {
    "url": "assets/js/20.065aaf22.js",
    "revision": "b8a2c70f5a386c4ceee6d6646e63313a"
  },
  {
    "url": "assets/js/21.e915cbf6.js",
    "revision": "52ac1162017ebb46128f1ab6e80faf16"
  },
  {
    "url": "assets/js/22.604672aa.js",
    "revision": "21fc99a4dce7914fa6d3658a2d834429"
  },
  {
    "url": "assets/js/23.fb10b4b9.js",
    "revision": "276eb7b99437f4bbccaae5001f23f763"
  },
  {
    "url": "assets/js/24.2e25731a.js",
    "revision": "e493b342bb4b655c75af7d40d3aeadec"
  },
  {
    "url": "assets/js/25.7c35c560.js",
    "revision": "f48a1d983cd2dfa537dcfeb45275631e"
  },
  {
    "url": "assets/js/26.7b8e1b87.js",
    "revision": "928199b5525c2793c84bb85b1c28ba5c"
  },
  {
    "url": "assets/js/27.0481ffa4.js",
    "revision": "29e68d31341cfbc409dff9f0a3c88489"
  },
  {
    "url": "assets/js/28.9c1e23ea.js",
    "revision": "cb0313a1a180fd8976185cbc700e1ae8"
  },
  {
    "url": "assets/js/29.57258e0e.js",
    "revision": "2c57be59a890dfa7caa6867e88c74b4c"
  },
  {
    "url": "assets/js/3.939af2c7.js",
    "revision": "70ca850614ca8b9bccba9023e0931039"
  },
  {
    "url": "assets/js/30.1d754eba.js",
    "revision": "23decbeee1864e058d6c4d1c5f5c52c7"
  },
  {
    "url": "assets/js/31.f69733a2.js",
    "revision": "62aa70f4d9671f6a8e94ccd4f841b12e"
  },
  {
    "url": "assets/js/32.64de290f.js",
    "revision": "428eed45b9a25897927b0dc688426f23"
  },
  {
    "url": "assets/js/33.b87dd9b2.js",
    "revision": "de7a6a7791810f5c4027289a7a200cdd"
  },
  {
    "url": "assets/js/34.0b225b7f.js",
    "revision": "4c92d1b55ba619bd354c7348482f6975"
  },
  {
    "url": "assets/js/35.b0fc09bd.js",
    "revision": "acf42f7e4c0578ecfbd9eecb0ef674a3"
  },
  {
    "url": "assets/js/36.9dc94ee9.js",
    "revision": "e318ce284f46f827a6d718e3274479c2"
  },
  {
    "url": "assets/js/37.b014b3f0.js",
    "revision": "5982074b5956d1b27a517f868fd06d2f"
  },
  {
    "url": "assets/js/38.9efc4e4a.js",
    "revision": "3d315c9e78485664c8afb2172374106f"
  },
  {
    "url": "assets/js/39.1705c107.js",
    "revision": "6ad1e9b5cc240d3ce6b61ebb90eaeea0"
  },
  {
    "url": "assets/js/4.222d2612.js",
    "revision": "c33bbc0d38f42e47269b884ee4cd4c51"
  },
  {
    "url": "assets/js/40.f1df16cc.js",
    "revision": "b9945c564b395a2b093ae8448d9522f3"
  },
  {
    "url": "assets/js/41.b28b16e9.js",
    "revision": "6c1bc2530e516a863f0971dc1d27245f"
  },
  {
    "url": "assets/js/42.e59a5ded.js",
    "revision": "e0e2c8f8cdc7ee7b2986af81c5c2db87"
  },
  {
    "url": "assets/js/43.be4fea0b.js",
    "revision": "c0ed3e80220226da0b7e6e40780eaea9"
  },
  {
    "url": "assets/js/44.8436e9f1.js",
    "revision": "8033163b0dba827fc285907de750edbd"
  },
  {
    "url": "assets/js/45.6dd641b8.js",
    "revision": "778c899f5a1533ed368d41d761a6a80a"
  },
  {
    "url": "assets/js/46.f6592c5a.js",
    "revision": "9634a3a40e3f2206eb74b766954034f3"
  },
  {
    "url": "assets/js/47.06cbf02a.js",
    "revision": "c2719e65489c896109074d258735332d"
  },
  {
    "url": "assets/js/48.550fc68a.js",
    "revision": "0d14e8bcc361eac5c000d8738a38ad14"
  },
  {
    "url": "assets/js/49.42ab2086.js",
    "revision": "2216161d9ccaa12bb300b75a1cdd11e8"
  },
  {
    "url": "assets/js/5.838c5fbb.js",
    "revision": "13043d4fdd4c89ef70c344a476b78cf6"
  },
  {
    "url": "assets/js/50.46078644.js",
    "revision": "59b059b26fac25d06c06a33e36905c09"
  },
  {
    "url": "assets/js/51.c4ed19a2.js",
    "revision": "4624c976a4f748bb66fe61bcf177b32b"
  },
  {
    "url": "assets/js/52.61b2063d.js",
    "revision": "5e9033e815d6528e12f8bfbeeb88d97d"
  },
  {
    "url": "assets/js/53.f15bf4e2.js",
    "revision": "613976ac294ee0cb7366eaedd59bcd6e"
  },
  {
    "url": "assets/js/54.14d966eb.js",
    "revision": "28febd0fbe609c3ba6240bda6207dc46"
  },
  {
    "url": "assets/js/55.e4ea0c55.js",
    "revision": "8a527159e167a5062afed1c105021a80"
  },
  {
    "url": "assets/js/56.b3739801.js",
    "revision": "69ee00fcba171fb3c97dfbd516647f62"
  },
  {
    "url": "assets/js/57.94edcafa.js",
    "revision": "ed50020ad1caa8572efa4ac0b215c5e1"
  },
  {
    "url": "assets/js/58.522abac2.js",
    "revision": "32f17f739e8f690312fe2c5d05b9968b"
  },
  {
    "url": "assets/js/59.7e1798b0.js",
    "revision": "183e8042528fe17068fd50d470646d0f"
  },
  {
    "url": "assets/js/6.61079aec.js",
    "revision": "ee15f2e5541c40a28299b0e923c1cb2d"
  },
  {
    "url": "assets/js/60.45e67a98.js",
    "revision": "0a4be63d21071b408de656ed65dc302e"
  },
  {
    "url": "assets/js/61.29b9d240.js",
    "revision": "98cdfe6b95854f1bea3377b5672cd27e"
  },
  {
    "url": "assets/js/62.6e766a78.js",
    "revision": "66f7d361ec85bd266eca5b7fcc988314"
  },
  {
    "url": "assets/js/7.db747821.js",
    "revision": "01e6b353d89fbcf57f6f929ecd49710a"
  },
  {
    "url": "assets/js/8.39c83e63.js",
    "revision": "afecf64dd65b84c049ab45bdab67118b"
  },
  {
    "url": "assets/js/9.f69f1bba.js",
    "revision": "f04b570d089e215d4605552f72b19990"
  },
  {
    "url": "assets/js/app.9aba86fc.js",
    "revision": "1c3357cbd007112d2766f97989971ae6"
  },
  {
    "url": "base/1.api/1.env.html",
    "revision": "7c10a20eb58577401d889d83946bdd8b"
  },
  {
    "url": "base/1.api/1.index.html",
    "revision": "b25927f4a64ec4bbb6656eba57b4cb0a"
  },
  {
    "url": "base/1.api/10.infer.html",
    "revision": "61c3d1ce7336fa18e8135b54303a1be1"
  },
  {
    "url": "base/1.api/11.overlapping.html",
    "revision": "9b3763dc97207cb2bfd61cfbf23f5b7d"
  },
  {
    "url": "base/1.api/12.condition.html",
    "revision": "dcaa7ddd32960b3eff76ef5ee4dcbd82"
  },
  {
    "url": "base/1.api/13.builtin.html",
    "revision": "dd2634f91dfac090b350d8d0644e4e15"
  },
  {
    "url": "base/1.api/14.package.html",
    "revision": "e5933509548738d133bb19c3a65b5dfc"
  },
  {
    "url": "base/1.api/15.custom.html",
    "revision": "ee03452b5ea4d977f5bcdc430c0e1510"
  },
  {
    "url": "base/1.api/16.unknown.html",
    "revision": "3424b29131ae4fc8e618c8e097e1cc9c"
  },
  {
    "url": "base/1.api/17.module.html",
    "revision": "1a07c2684363ab23b5493ec39e9b42be"
  },
  {
    "url": "base/1.api/18.statement.html",
    "revision": "05edc94847ea843a2cd44c5813a46245"
  },
  {
    "url": "base/1.api/19.extend.html",
    "revision": "178478e5c62551b3d1cc02e3cc6b25d9"
  },
  {
    "url": "base/1.api/2.base.html",
    "revision": "7a4e454e9ed62ae5e7b213302340e428"
  },
  {
    "url": "base/1.api/3.deduction.html",
    "revision": "338fbf41cb2a702ee9e18237ef647875"
  },
  {
    "url": "base/1.api/4.type.html",
    "revision": "6869e51d8f95455bf505f32e8df5f0bd"
  },
  {
    "url": "base/1.api/5.class.html",
    "revision": "6d7c91f8efac5005ba5b519c3482f13b"
  },
  {
    "url": "base/1.api/6.interface.html",
    "revision": "e0d33300d90e8188441ccaa563b4fe02"
  },
  {
    "url": "base/1.api/7.generic.html",
    "revision": "b8f52819f55a8a12f78d7afd8180fbdd"
  },
  {
    "url": "base/1.api/8.compatible.html",
    "revision": "f4487bed5371a0213c30647a36a065c1"
  },
  {
    "url": "base/1.api/9.protect.html",
    "revision": "a465a58d637bdd50d1c6abe8cc5d6ea3"
  },
  {
    "url": "base/2.config/1.config.html",
    "revision": "9ea9843c06cb8547b2168ce72c33d0e4"
  },
  {
    "url": "base/2.config/1.index.html",
    "revision": "27b5ce7265dd0df4f7647cfc942d7f95"
  },
  {
    "url": "base/2.config/10.ui.html",
    "revision": "6b1a52c9d8b965fe16ca23590b4d7d34"
  },
  {
    "url": "base/2.config/11.data.html",
    "revision": "44e23917006bb66fdf28a3184a12e366"
  },
  {
    "url": "base/2.config/12.skill.html",
    "revision": "900bcfb411e46b5ccf9fffe345363a39"
  },
  {
    "url": "base/2.config/13.com.html",
    "revision": "4e2a6cd09bb34e9e24ba60033fde0548"
  },
  {
    "url": "base/2.config/14.data.html",
    "revision": "106de0ee7b093f64c35624e582a5364b"
  },
  {
    "url": "base/2.config/2.webpack.html",
    "revision": "bcd11383a087a25c9fcf2c64be6a81aa"
  },
  {
    "url": "base/2.config/3.file.html",
    "revision": "280432c2549d021f5c2fbb38a93729f9"
  },
  {
    "url": "base/2.config/4.single.html",
    "revision": "0f830c18c9eed89cb2557d5de29783b5"
  },
  {
    "url": "base/2.config/5.page.html",
    "revision": "b51248ad0f7283dd57720d9c2fe1d834"
  },
  {
    "url": "base/2.config/7.module.html",
    "revision": "1c4b39414f783d1addae2dd15c9c0044"
  },
  {
    "url": "base/2.config/8.project.html",
    "revision": "424de9c004e51e44125da54b365cac70"
  },
  {
    "url": "base/2.config/9.utils.html",
    "revision": "f733995ab590f566012ec4d222d1c5ab"
  },
  {
    "url": "base/3.react/1.index.html",
    "revision": "aba234b8145694110277eb00bc1aeb7f"
  },
  {
    "url": "base/3.react/2.Jenkins.html",
    "revision": "e86ec53b6581e697792bc0d42791f63d"
  },
  {
    "url": "base/3.react/3.gitlab.html",
    "revision": "b448f6923e6d91b91569fff7f36305cb"
  },
  {
    "url": "base/3.react/i18n.html",
    "revision": "3e17f538d64bcf83e30c7cfae88864a8"
  },
  {
    "url": "base/3.react/prem.html",
    "revision": "6a042ac55beccd033854c6ba4cbef2c1"
  },
  {
    "url": "base/3.react/test.html",
    "revision": "0830fe5c3242c89ddeef28967113636b"
  },
  {
    "url": "base/3.react/vscode.html",
    "revision": "eec35eabd404fb0a59e89bc6b530311b"
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
    "revision": "a126660c38300ea3a154091bcb4a0d14"
  },
  {
    "url": "mock/http.js",
    "revision": "c8abf8aba8039ff5bc6fa0517b076832"
  },
  {
    "url": "project/react/1.index.html",
    "revision": "9055aa9389e887cb6578ff0e73f1a6d3"
  },
  {
    "url": "project/vue/1.index.html",
    "revision": "4b4931d87c8fc0aa336e5cc14c1c2c89"
  },
  {
    "url": "project/vue/10.element-plus.html",
    "revision": "a56624311c15228daaf7ade54785a5a3"
  },
  {
    "url": "project/vue/11.tsx.html",
    "revision": "c322ce112f0ca749e24ed9c2b6d00e3c"
  },
  {
    "url": "project/vue/2.ref.html",
    "revision": "89487d9b4853e8458df097b223d67e0f"
  },
  {
    "url": "project/vue/3.props.html",
    "revision": "a49000a5325a263fb09baee554b6a031"
  },
  {
    "url": "project/vue/4.emits.html",
    "revision": "1b813508e90b61c1f31e54c91369f3e7"
  },
  {
    "url": "project/vue/5.component.html",
    "revision": "450fd7331a36b299f98b9c7e8eaadbbd"
  },
  {
    "url": "project/vue/6.slot.html",
    "revision": "7a66c59fd279a58abbc4bc4054bb6346"
  },
  {
    "url": "project/vue/7.vue-router.html",
    "revision": "08d3f85f88db37bbd1a068617ac67ed1"
  },
  {
    "url": "project/vue/8.tsconfig.html",
    "revision": "8b816deccbafc518a5c648dda81895bb"
  },
  {
    "url": "project/vue/9.vuex.html",
    "revision": "5cdcc3857b6c5eec90e030e20d46ce18"
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
