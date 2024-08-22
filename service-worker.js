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
    "revision": "65d4c5813340403dcd923e2f0499ac15"
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
    "url": "assets/js/13.0bd07843.js",
    "revision": "48be05791b83be4f2b9fe1e65718e692"
  },
  {
    "url": "assets/js/14.f6dfb6dd.js",
    "revision": "2c9725d6d623a6e7a7885020bb1054ce"
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
    "url": "assets/js/2.c8c0c7e3.js",
    "revision": "bf3576487357da8939cf82eea38f445c"
  },
  {
    "url": "assets/js/20.2e115796.js",
    "revision": "cb005231c7a9222a69110f19b3e8d846"
  },
  {
    "url": "assets/js/21.094f7171.js",
    "revision": "addd98fa0e1f80d096a535134b4d8190"
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
    "url": "assets/js/24.70a32e7d.js",
    "revision": "1d1c92fdc13aaf432033424c91279c22"
  },
  {
    "url": "assets/js/25.17bf1bf9.js",
    "revision": "4a837c5126fc159fbcf24597b5c39a20"
  },
  {
    "url": "assets/js/26.2d4d7cdc.js",
    "revision": "8a52681538310e03012091a66c89b1de"
  },
  {
    "url": "assets/js/27.4a9ae719.js",
    "revision": "6e010a408e9240397508ea4c76564477"
  },
  {
    "url": "assets/js/28.cee3beaf.js",
    "revision": "b1bdc89363d21b16edd407d11e0c59f5"
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
    "url": "assets/js/36.c2dd732b.js",
    "revision": "306bf2a6dca6bb5411dec18e40f74312"
  },
  {
    "url": "assets/js/37.5e04a49b.js",
    "revision": "4c1202be1542cda69ce5053719861c40"
  },
  {
    "url": "assets/js/38.192e5930.js",
    "revision": "0ef7bc8c3c362b7cf65294372dc5e253"
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
    "url": "assets/js/43.603b0b61.js",
    "revision": "54926f60de1a4f8644edf31be9264f0e"
  },
  {
    "url": "assets/js/44.0a42a359.js",
    "revision": "bf1ebdb5b62c2b6972269a52978af50e"
  },
  {
    "url": "assets/js/45.2bf1630c.js",
    "revision": "be4d8d5f880685401d2caeee6d80384a"
  },
  {
    "url": "assets/js/46.0b13575d.js",
    "revision": "85903eef6edb71cefd4e8eea0326e8aa"
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
    "url": "assets/js/60.727f14f2.js",
    "revision": "4452b116fdf101278446d3f2ebe93d22"
  },
  {
    "url": "assets/js/61.2b9d1bf7.js",
    "revision": "7e8db5baa0137a08ac8410819449f52b"
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
    "url": "assets/js/9.a26eb4f2.js",
    "revision": "5c8aa424e0903f9b7900997fc8ce826c"
  },
  {
    "url": "assets/js/app.96464a7a.js",
    "revision": "f2efff661854a78a907a32a253e2f23b"
  },
  {
    "url": "base/1.typescript/1.env.html",
    "revision": "fe8f55a2983e0938e09172ad10810f1c"
  },
  {
    "url": "base/1.typescript/1.index.html",
    "revision": "12806bd1744c1ece2f38ca3ab4d4544f"
  },
  {
    "url": "base/1.typescript/10.infer.html",
    "revision": "f757f3735e2d92239cbeda8e3dd0a0ab"
  },
  {
    "url": "base/1.typescript/11.overlapping.html",
    "revision": "dfc808111879b1cc09954b2c5051538f"
  },
  {
    "url": "base/1.typescript/12.condition.html",
    "revision": "f32e7d1897e9c036f31a2ecaa46602a6"
  },
  {
    "url": "base/1.typescript/13.builtin.html",
    "revision": "53668732ce858048aae2f5617a7d4427"
  },
  {
    "url": "base/1.typescript/14.package.html",
    "revision": "e8d8640241366fad4965b0f5269c4eb7"
  },
  {
    "url": "base/1.typescript/15.custom.html",
    "revision": "056646d25d04e80614e365d6a7b52b8a"
  },
  {
    "url": "base/1.typescript/16.unknown.html",
    "revision": "8c716b6f6677671d0ab1b71104238acc"
  },
  {
    "url": "base/1.typescript/17.module.html",
    "revision": "4e68129c0a9a07cc2fa52aa8ad46ecbc"
  },
  {
    "url": "base/1.typescript/18.statement.html",
    "revision": "4babe3a4f9df45ded6967a81880a02ee"
  },
  {
    "url": "base/1.typescript/19.extend.html",
    "revision": "01866e05f8eaad94649c4a295710989c"
  },
  {
    "url": "base/1.typescript/2.base.html",
    "revision": "541999d0aa4a44e6fcff4a731d5448dd"
  },
  {
    "url": "base/1.typescript/3.deduction.html",
    "revision": "75cb11ba16ed39fc46937dc0e762242a"
  },
  {
    "url": "base/1.typescript/4.type.html",
    "revision": "90b7da5565a9fafd18bfeedab35202a0"
  },
  {
    "url": "base/1.typescript/5.class.html",
    "revision": "c20938c5776163a1a0684ef0cb52f34b"
  },
  {
    "url": "base/1.typescript/6.interface.html",
    "revision": "d83e5c41a3c2c64e3dc9c780fd5d2ae5"
  },
  {
    "url": "base/1.typescript/7.generic.html",
    "revision": "fa2c745a043b443355a42ca651115d43"
  },
  {
    "url": "base/1.typescript/8.compatible.html",
    "revision": "799d26451df5c83ebe6e9ce353afd980"
  },
  {
    "url": "base/1.typescript/9.protect.html",
    "revision": "bf5043788f7915f7f5ff5cc8e97881b1"
  },
  {
    "url": "base/2.vue/1.config.html",
    "revision": "de6262a4db0bd7166a2acb44e2063009"
  },
  {
    "url": "base/2.vue/1.index.html",
    "revision": "f66630e6535fb99e1be1960b72ea89ea"
  },
  {
    "url": "base/2.vue/10.ui.html",
    "revision": "417f8f0e4832c825c5524b0d22a8bafc"
  },
  {
    "url": "base/2.vue/11.data.html",
    "revision": "16bf968385abf79ceeb3ba70b80682e9"
  },
  {
    "url": "base/2.vue/12.skill.html",
    "revision": "f579bace6d0d87df62b0c18af05689d4"
  },
  {
    "url": "base/2.vue/13.com.html",
    "revision": "ed57cdc326aa42125de9ab031f7eb997"
  },
  {
    "url": "base/2.vue/14.data.html",
    "revision": "2ec66ff5107f515ec024f1a15494cb1f"
  },
  {
    "url": "base/2.vue/2.webpack.html",
    "revision": "686c6a9ed06b385b50144c80d0b49c7b"
  },
  {
    "url": "base/2.vue/3.file.html",
    "revision": "0c4dc5631ba8281538500f1731da2cc4"
  },
  {
    "url": "base/2.vue/4.single.html",
    "revision": "1ea5e8fe37f79f11ce83673c10520e03"
  },
  {
    "url": "base/2.vue/5.page.html",
    "revision": "b5921381bfb29c993282ab3601c3dc1d"
  },
  {
    "url": "base/2.vue/7.module.html",
    "revision": "5d8c7401ff79a96da16a4d1f5223d801"
  },
  {
    "url": "base/2.vue/8.project.html",
    "revision": "9618d12318919acd5b15a1d0cec2143d"
  },
  {
    "url": "base/2.vue/9.utils.html",
    "revision": "97eff9ce12ff96eebd59cc2e4f2a92ee"
  },
  {
    "url": "base/3.react/1.index.html",
    "revision": "19c8b2c4cf64f0dff46f565ef19ea97a"
  },
  {
    "url": "base/3.react/2.Jenkins.html",
    "revision": "4f346ed2d034da764140d1716cdeccfe"
  },
  {
    "url": "base/3.react/3.gitlab.html",
    "revision": "8d4651ee49beabd5171c390645e38df1"
  },
  {
    "url": "base/3.react/i18n.html",
    "revision": "6ddc8180d00007c65078bbf10d76c1ab"
  },
  {
    "url": "base/3.react/prem.html",
    "revision": "d3de4249a780d7ef0a1e121748da27bd"
  },
  {
    "url": "base/3.react/test.html",
    "revision": "53c77d636fa47480036c974bbf1c9375"
  },
  {
    "url": "base/3.react/vscode.html",
    "revision": "db279fb424617a2f26d81c25b55119ef"
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
    "revision": "c5d94c1f100dd89d63af70249282e3d0"
  },
  {
    "url": "mock/http.js",
    "revision": "c8abf8aba8039ff5bc6fa0517b076832"
  },
  {
    "url": "senior/npm/1.index.html",
    "revision": "af88a212dc175296e21ee7206a104707"
  },
  {
    "url": "senior/use/1.index.html",
    "revision": "174816843e9bbea33dce98d4efbc4871"
  },
  {
    "url": "senior/use/10.table.html",
    "revision": "3ae40c7cdcabc403e10c1ac0aa567041"
  },
  {
    "url": "senior/use/11.tree.html",
    "revision": "2f9e00086e26d061194ded1e5f03e7cc"
  },
  {
    "url": "senior/use/2.extend.html",
    "revision": "98a5cc407322b50c4a7b425ad9bfd285"
  },
  {
    "url": "senior/use/3.componentCommunication.html",
    "revision": "5530e2115010ad8f600b37c9c9010b86"
  },
  {
    "url": "senior/use/4.render.html",
    "revision": "e58c54a09469e4709456f5dfe958627d"
  },
  {
    "url": "senior/use/5.api.html",
    "revision": "80081f3e7af9399ad41c168d2b4c55c9"
  },
  {
    "url": "senior/use/6.form.html",
    "revision": "ddd5e5a74103baacddd89c03573280fe"
  },
  {
    "url": "senior/use/7.checkBox.html",
    "revision": "05a8048cdc25c81e5decada13c040d71"
  },
  {
    "url": "senior/use/8.active.html",
    "revision": "f50eccd767cc8167e70f4f4ac3797a66"
  },
  {
    "url": "senior/use/9.alert.html",
    "revision": "08e814817224f6b3212c2db63cb9d9d8"
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
