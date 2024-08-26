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
    "revision": "81908722e9e773fb1aea65355bab9bf1"
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
    "url": "assets/js/14.f9e1f40d.js",
    "revision": "e826115597fd18d51369018b954f055f"
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
    "url": "assets/js/17.4b742f9a.js",
    "revision": "649590f4a67ee46b49429b16dc5abbab"
  },
  {
    "url": "assets/js/18.ff3dd383.js",
    "revision": "22f0f2e3e8c97637b9b5fb71e9b2f993"
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
    "url": "assets/js/20.eba17561.js",
    "revision": "155e2f0fcc7e6cf1d119a13adf5ea7eb"
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
    "url": "assets/js/30.d67dc09c.js",
    "revision": "babaa4970edb6f39f61cad89cccdb916"
  },
  {
    "url": "assets/js/31.f8753161.js",
    "revision": "a94593d696fca818063c38b2be4d7620"
  },
  {
    "url": "assets/js/32.25255bfa.js",
    "revision": "06baae19bc9338702884abd149b780b4"
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
    "url": "assets/js/55.6f671e5d.js",
    "revision": "1091c19fefa82aacf334a86608d32f21"
  },
  {
    "url": "assets/js/56.da01fa34.js",
    "revision": "f8ba0d41553bd96569ed6b5d8ebc054c"
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
    "url": "assets/js/8.3e9e5190.js",
    "revision": "d4d97cb537cba412ec6ba5466a9ff27a"
  },
  {
    "url": "assets/js/9.951995b5.js",
    "revision": "2f2f337ee7f5462336ec3088eed1b6f7"
  },
  {
    "url": "assets/js/app.bacbf87b.js",
    "revision": "cfaa0e0a8464a3330826d577a52759e2"
  },
  {
    "url": "base/1.typescript/1.env.html",
    "revision": "15c53ddf1a4a0d70ea90f8078f909a74"
  },
  {
    "url": "base/1.typescript/1.index.html",
    "revision": "8c75adb1042f947943c81400ed4c8246"
  },
  {
    "url": "base/1.typescript/10.infer.html",
    "revision": "8e3375919f68f0223524afcfe2698b4e"
  },
  {
    "url": "base/1.typescript/11.overlapping.html",
    "revision": "dd24c252ee66532cf52f813a1a06505d"
  },
  {
    "url": "base/1.typescript/12.condition.html",
    "revision": "b384b98cf0a706a84c11ffc5749c6105"
  },
  {
    "url": "base/1.typescript/13.builtin.html",
    "revision": "3c5d6032203c8372445496580b64e00f"
  },
  {
    "url": "base/1.typescript/14.package.html",
    "revision": "98a7ec5c7469e65adb395b67987e196b"
  },
  {
    "url": "base/1.typescript/15.custom.html",
    "revision": "e59b0360749fd5d1ef58444f3408719f"
  },
  {
    "url": "base/1.typescript/16.unknown.html",
    "revision": "8ac2bbf5d46b9fe507334f1dcaf936de"
  },
  {
    "url": "base/1.typescript/17.module.html",
    "revision": "fd040dcbcc95e93d73ed7701b8f98f28"
  },
  {
    "url": "base/1.typescript/18.statement.html",
    "revision": "b1556d280741273b0509a0860149fe46"
  },
  {
    "url": "base/1.typescript/19.extend.html",
    "revision": "5f78d4158f66fa9a1f5026694588228a"
  },
  {
    "url": "base/1.typescript/2.base.html",
    "revision": "0b5732cd68bf71804bcb663c207437cb"
  },
  {
    "url": "base/1.typescript/3.deduction.html",
    "revision": "696a8112f3fdd5efaeab6edcc07a38c4"
  },
  {
    "url": "base/1.typescript/4.type.html",
    "revision": "d488fae58afca93a8eb6b0b6ef6f38b8"
  },
  {
    "url": "base/1.typescript/5.class.html",
    "revision": "5adabbfcafb08bb45fbab6b76f9cf795"
  },
  {
    "url": "base/1.typescript/6.interface.html",
    "revision": "26da10d081a8ae2f795e233550a5716d"
  },
  {
    "url": "base/1.typescript/7.generic.html",
    "revision": "dfd19e5b6c74eb073878676dcb444dd9"
  },
  {
    "url": "base/1.typescript/8.compatible.html",
    "revision": "b4cf8c339be52606c8e1d2edb685637c"
  },
  {
    "url": "base/1.typescript/9.protect.html",
    "revision": "065824145535e848cf91384d6f5eb9de"
  },
  {
    "url": "base/2.vue/1.config.html",
    "revision": "2323145901ef93cc07da54bf37ec8980"
  },
  {
    "url": "base/2.vue/1.index.html",
    "revision": "05d1b89b188dfca6aff2e803f588768d"
  },
  {
    "url": "base/2.vue/10.ui.html",
    "revision": "b6803ee730d3cb90749d55ad36856aeb"
  },
  {
    "url": "base/2.vue/11.data.html",
    "revision": "0995a451f62a165318be6c5e857ad384"
  },
  {
    "url": "base/2.vue/12.skill.html",
    "revision": "de07bad6ca4c1a6fed46ba979bf24798"
  },
  {
    "url": "base/2.vue/13.com.html",
    "revision": "8fe91d236cb9ca37c5d082b0a294dd3e"
  },
  {
    "url": "base/2.vue/14.data.html",
    "revision": "21e6e411e0b547e99d432e89db4f8c66"
  },
  {
    "url": "base/2.vue/2.webpack.html",
    "revision": "c36a48ac88c1d311d90431752ac1944a"
  },
  {
    "url": "base/2.vue/3.file.html",
    "revision": "72b0c137e97bc3ce76cda4d4f4e55056"
  },
  {
    "url": "base/2.vue/4.single.html",
    "revision": "240f0b7c511181f87933c11f7541af6e"
  },
  {
    "url": "base/2.vue/5.page.html",
    "revision": "fed9ff97b2ddf7645c0628689d283189"
  },
  {
    "url": "base/2.vue/7.module.html",
    "revision": "c4145398bd65b87d5aa9d3ad30fa2827"
  },
  {
    "url": "base/2.vue/8.project.html",
    "revision": "31d0c6aa9f9a26b58e8e80a9adbbd8bb"
  },
  {
    "url": "base/2.vue/9.utils.html",
    "revision": "6ef8c89cd706da6cc7081c910a047f9d"
  },
  {
    "url": "base/3.react/1.index.html",
    "revision": "8241b3e22a4687c70cddc8bb4b0b6f42"
  },
  {
    "url": "base/3.react/2.Jenkins.html",
    "revision": "c86a1e3e1fe5792674d2031d2838bb42"
  },
  {
    "url": "base/3.react/3.gitlab.html",
    "revision": "b77a8e3e43747c252c00acc528316fc2"
  },
  {
    "url": "base/3.react/i18n.html",
    "revision": "a94a804b21bc4293fae786b86ecbfc16"
  },
  {
    "url": "base/3.react/prem.html",
    "revision": "ce38307ab66a946a310e96608e6ea183"
  },
  {
    "url": "base/3.react/test.html",
    "revision": "1593ba64f99c5d3f72d61fdbb09c264d"
  },
  {
    "url": "base/3.react/vscode.html",
    "revision": "7995f9d0bc9ec9c9f6e8770cab2188f7"
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
    "revision": "6ae80c7245fa9007e04ce1807237bdb2"
  },
  {
    "url": "mock/http.js",
    "revision": "c8abf8aba8039ff5bc6fa0517b076832"
  },
  {
    "url": "senior/npm/1.index.html",
    "revision": "9dc5696e8fe5374a2a095496171a1e6e"
  },
  {
    "url": "senior/use/1.index.html",
    "revision": "a786c98d26d8201a62c410f98ddfbd74"
  },
  {
    "url": "senior/use/10.table.html",
    "revision": "8d81ded1c6ce4c28c18cb5bbe4279a10"
  },
  {
    "url": "senior/use/11.tree.html",
    "revision": "53dab359639a2ae8ca9f3c3425b46fc9"
  },
  {
    "url": "senior/use/2.extend.html",
    "revision": "9b7e8de467747ac0081feca4da5a25a5"
  },
  {
    "url": "senior/use/3.componentCommunication.html",
    "revision": "054fd02f5c98e0e0dd42226513b35461"
  },
  {
    "url": "senior/use/4.render.html",
    "revision": "85c7270b364174ddb81b5a0fe8a2494b"
  },
  {
    "url": "senior/use/5.api.html",
    "revision": "bdc1daca08e56cdbc156d71a27d2cad0"
  },
  {
    "url": "senior/use/6.form.html",
    "revision": "96c2b21a053833f76b58851cc46a11f7"
  },
  {
    "url": "senior/use/7.checkBox.html",
    "revision": "aee8571134b8f8cf39ab5ff0bcaa576c"
  },
  {
    "url": "senior/use/8.active.html",
    "revision": "2f9a04fbb6fe27a6bade9efc68ccb8ff"
  },
  {
    "url": "senior/use/9.alert.html",
    "revision": "cc13eeaa1055f3f13fdc37e0a07ff6a2"
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
