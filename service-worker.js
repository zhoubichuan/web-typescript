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
    "revision": "78960d9d7ca4cdac36a471937f0efc04"
  },
  {
    "url": "assets/css/0.styles.73ffc6f4.css",
    "revision": "b82b768813a4273d1ef27cebba20cf3c"
  },
  {
    "url": "assets/img/image-1.9a2677d6.png",
    "revision": "9a2677d68775cb94b5f03ed68feca49b"
  },
  {
    "url": "assets/img/image.25968334.png",
    "revision": "259683345741889eb97410c8f6261611"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.ca797407.js",
    "revision": "b173dc98722daafc131e4f190cc82224"
  },
  {
    "url": "assets/js/11.70548675.js",
    "revision": "00129481001d5348a9cee1f77a9861a0"
  },
  {
    "url": "assets/js/12.cbe54538.js",
    "revision": "4d32afdcb7904cca5c0094ee95bdc836"
  },
  {
    "url": "assets/js/13.69eabae7.js",
    "revision": "75a0a8f3fc71627b485a198a10a72dd3"
  },
  {
    "url": "assets/js/14.f5321eb7.js",
    "revision": "b9ba92d7c792ea47602fcee8b224fcc8"
  },
  {
    "url": "assets/js/15.eccf6954.js",
    "revision": "1a2eb22c8f2d3ca7de507f9bea7d28bd"
  },
  {
    "url": "assets/js/16.531c9520.js",
    "revision": "c8ca1d1901d9db856d9677f2bc01c438"
  },
  {
    "url": "assets/js/17.f5f671a0.js",
    "revision": "a2efe1f197bebaaad55953fd2aed79d4"
  },
  {
    "url": "assets/js/18.48de0188.js",
    "revision": "da1d4301199c10a8b55f2c4a740bc2be"
  },
  {
    "url": "assets/js/19.0402f019.js",
    "revision": "9a487b73dbeefbe351d8724a0010f90d"
  },
  {
    "url": "assets/js/2.98474b9e.js",
    "revision": "391b7eb26278ff1a1de648a352d2c56a"
  },
  {
    "url": "assets/js/20.b833183e.js",
    "revision": "9eebfd5e6ba812a86f4957fc4b8be54f"
  },
  {
    "url": "assets/js/21.31271b5c.js",
    "revision": "111c5781969bde4fdb77757229bdf6e2"
  },
  {
    "url": "assets/js/22.f54cedcc.js",
    "revision": "2f4c38ece4ae82d8e86ded2e2eacc15d"
  },
  {
    "url": "assets/js/23.c686ebce.js",
    "revision": "c0927362ddba1b82cd2d356c89bc55f4"
  },
  {
    "url": "assets/js/24.a94e9dab.js",
    "revision": "87954b611f07ac8edd13f30f37427d4b"
  },
  {
    "url": "assets/js/25.e18ce25b.js",
    "revision": "0d4fc3f654782f3dfae0842237b153fd"
  },
  {
    "url": "assets/js/26.f6293ad6.js",
    "revision": "f79c57cb583549c491ed7aad9bb31829"
  },
  {
    "url": "assets/js/27.d6c60bec.js",
    "revision": "6e25047688384e13fb0da5ab7db7c1bc"
  },
  {
    "url": "assets/js/28.a87add30.js",
    "revision": "118d765fd107fe1a28991bd50a2ff66d"
  },
  {
    "url": "assets/js/29.2c287252.js",
    "revision": "1f78830a17446500b9ebcbd29f2a9ae4"
  },
  {
    "url": "assets/js/3.3889496c.js",
    "revision": "af47c11cfa937b8d2f3285a51101a603"
  },
  {
    "url": "assets/js/30.0239feaf.js",
    "revision": "79724c442813962d6d26db0e3150f0ca"
  },
  {
    "url": "assets/js/31.33245812.js",
    "revision": "5ad6a1bbf61dcc3bbcabf9256eeb537f"
  },
  {
    "url": "assets/js/32.c0fd151d.js",
    "revision": "30f5128ecd73a99902532ba0ff8847d7"
  },
  {
    "url": "assets/js/33.e66716a2.js",
    "revision": "cabea29d88cff298003775754021d373"
  },
  {
    "url": "assets/js/34.b79efbfd.js",
    "revision": "5304b5de61505538c3dbddee6a880013"
  },
  {
    "url": "assets/js/35.94a0193e.js",
    "revision": "410bc010855070e532441393900a1631"
  },
  {
    "url": "assets/js/36.5a583e10.js",
    "revision": "e20bae7d3fa6b6ceb621383d35184862"
  },
  {
    "url": "assets/js/37.d6c71b49.js",
    "revision": "cbc7724feca756254f9b7ba91c9fda55"
  },
  {
    "url": "assets/js/38.6bd54288.js",
    "revision": "2947a0f215896f4fe8e85a88ecbae370"
  },
  {
    "url": "assets/js/39.cd66aaef.js",
    "revision": "cff6397df45da6a345e1cdc1d603e93c"
  },
  {
    "url": "assets/js/4.7e05b191.js",
    "revision": "08e88fbbe00b34feec2cb1f99aa15922"
  },
  {
    "url": "assets/js/40.65545e50.js",
    "revision": "b85c898df58c38eede51bd135ab0c0ea"
  },
  {
    "url": "assets/js/41.3faf3374.js",
    "revision": "0e449ff19412bea46d991793b867d6fc"
  },
  {
    "url": "assets/js/42.965f7a85.js",
    "revision": "713e35e9016907a11b287addea251582"
  },
  {
    "url": "assets/js/43.74b33e41.js",
    "revision": "1d41a7ab99bd33d843544a1b61508680"
  },
  {
    "url": "assets/js/44.82405fa3.js",
    "revision": "366b2cd8f40a6e3d9e8a67b540122039"
  },
  {
    "url": "assets/js/45.fc308c97.js",
    "revision": "4f2c9b542a9246e49b7085404976c793"
  },
  {
    "url": "assets/js/46.8797dd9c.js",
    "revision": "21639778ae79e276b886c1cdfea52274"
  },
  {
    "url": "assets/js/47.7a61a1c4.js",
    "revision": "245c68b0c8bfa9b260b02d3b182a4227"
  },
  {
    "url": "assets/js/48.c6a1eccb.js",
    "revision": "2bd9ddb59669aaaea9f4129a1b3333f6"
  },
  {
    "url": "assets/js/49.5e9615b6.js",
    "revision": "7d4787a133ba04ea243d44970e7cf99d"
  },
  {
    "url": "assets/js/5.a77b5cd7.js",
    "revision": "4985d64c30cece91b20ed06a42e44b94"
  },
  {
    "url": "assets/js/50.61f013ef.js",
    "revision": "577897b635bd209633d6f843c67b50e3"
  },
  {
    "url": "assets/js/51.0f1f267e.js",
    "revision": "dfb5c6df2d7395236455634097de0f26"
  },
  {
    "url": "assets/js/52.647a523f.js",
    "revision": "604b754a9718cc5a40c978a1af0ef0ec"
  },
  {
    "url": "assets/js/53.295e559e.js",
    "revision": "d3b0999636c06de674c8c75168308116"
  },
  {
    "url": "assets/js/54.7a6fe567.js",
    "revision": "d57c73b95789743ae7e196717a36c7cb"
  },
  {
    "url": "assets/js/55.3a6efef0.js",
    "revision": "b37a65af44796f5496829c5c43b611c6"
  },
  {
    "url": "assets/js/56.e95e1dac.js",
    "revision": "7b2d30ff8779a903371b4f256f6fd087"
  },
  {
    "url": "assets/js/57.0ceb9ab7.js",
    "revision": "4615fec50a7fcd3cac907665bc44a8c0"
  },
  {
    "url": "assets/js/58.8c22ff34.js",
    "revision": "16e597263a469a1c9541030d58d2f96e"
  },
  {
    "url": "assets/js/59.29d2ea3e.js",
    "revision": "52370890b0c7d7e3343b3f7af4d35d5f"
  },
  {
    "url": "assets/js/6.f6ce5226.js",
    "revision": "d53bf092e53adc05aa0d556069dfe47b"
  },
  {
    "url": "assets/js/60.70839438.js",
    "revision": "bcdc0e982b855d6e7287e92d2a6190c2"
  },
  {
    "url": "assets/js/61.28007837.js",
    "revision": "cf8d176c094c952c9a4c6f0aa09e9369"
  },
  {
    "url": "assets/js/62.e353f542.js",
    "revision": "966bbd5fca79adeee6d65fe001914713"
  },
  {
    "url": "assets/js/7.134c924a.js",
    "revision": "6ca046ea93bfbb1c701255f42fe0052f"
  },
  {
    "url": "assets/js/8.0bb29cf8.js",
    "revision": "97755a4d2d77f1145d3124363865d9b9"
  },
  {
    "url": "assets/js/9.833f6de7.js",
    "revision": "8c9c94fd3d484605499743f182e40178"
  },
  {
    "url": "assets/js/app.ce78d972.js",
    "revision": "b6ec87038c693bdeafcbef147b93d149"
  },
  {
    "url": "base/1.api/1.env.html",
    "revision": "793f426526536472c9bb06e63289db37"
  },
  {
    "url": "base/1.api/1.index.html",
    "revision": "49259511cd0ce32603f6bf7def184278"
  },
  {
    "url": "base/1.api/10.infer.html",
    "revision": "3bb1818a16581823d32afaac989fbe6f"
  },
  {
    "url": "base/1.api/11.overlapping.html",
    "revision": "de402b7dbe3491fd58c523566991e3bc"
  },
  {
    "url": "base/1.api/12.condition.html",
    "revision": "e41e3c43b32e4c6ddd2e453320bffee4"
  },
  {
    "url": "base/1.api/13.builtin.html",
    "revision": "282d0d3bf1340ecf9571abbacc459c86"
  },
  {
    "url": "base/1.api/14.package.html",
    "revision": "f6518179aea89d447cc5b41b60fd664d"
  },
  {
    "url": "base/1.api/15.custom.html",
    "revision": "2434df5e2005080f5728439fadfb4567"
  },
  {
    "url": "base/1.api/16.unknown.html",
    "revision": "6854d86a397aa97d67ad3465ffb3019e"
  },
  {
    "url": "base/1.api/17.module.html",
    "revision": "43bf41f7c0b38c594bd3b8d620634849"
  },
  {
    "url": "base/1.api/18.statement.html",
    "revision": "5d6b47a615b87e7ade8eb074257e0a6e"
  },
  {
    "url": "base/1.api/19.extend.html",
    "revision": "d3d19326d5a5b7892f2fd0e6eb7d4022"
  },
  {
    "url": "base/1.api/2.base.html",
    "revision": "486664f6531040eaf58b42c036c1146b"
  },
  {
    "url": "base/1.api/3.deduction.html",
    "revision": "5aa0c2547ac09aedf804e6ee3613fe35"
  },
  {
    "url": "base/1.api/4.type.html",
    "revision": "4d29775710e9857d00c957593e036988"
  },
  {
    "url": "base/1.api/5.class.html",
    "revision": "0fdd80da4a43aa75e96d79f91b7277b3"
  },
  {
    "url": "base/1.api/6.interface.html",
    "revision": "b40a42ff0998043c2f0cb40ece6b2195"
  },
  {
    "url": "base/1.api/7.generic.html",
    "revision": "3b9134a55bb468638bca7a193d9465a0"
  },
  {
    "url": "base/1.api/8.compatible.html",
    "revision": "ad5f9b3edb1f5b8208b1611f340f5ddd"
  },
  {
    "url": "base/1.api/9.protect.html",
    "revision": "80345cdd5f706ac764b5708ea195aea0"
  },
  {
    "url": "base/2.config/1.config.html",
    "revision": "c0aa6fb411b9a7a3b0abb38f3bce5eef"
  },
  {
    "url": "base/2.config/1.index.html",
    "revision": "853339c8c167b6f9c4e80a87bced5325"
  },
  {
    "url": "base/2.config/10.ui.html",
    "revision": "c5cd312c24af21000d47f7789cce5f25"
  },
  {
    "url": "base/2.config/11.data.html",
    "revision": "755496292465a9b6f6986f710ee38974"
  },
  {
    "url": "base/2.config/12.skill.html",
    "revision": "a8e23b67be26dff2d983a8d13fe00757"
  },
  {
    "url": "base/2.config/13.com.html",
    "revision": "bd8641429f43993e33afb516f9338fbb"
  },
  {
    "url": "base/2.config/14.data.html",
    "revision": "3a8d43dac53f222de7851e6800dc04fd"
  },
  {
    "url": "base/2.config/2.webpack.html",
    "revision": "9695eb4821f61ff4ad9470b522423f24"
  },
  {
    "url": "base/2.config/3.file.html",
    "revision": "7407da2dbe32e9e662d4479d50d47b48"
  },
  {
    "url": "base/2.config/4.single.html",
    "revision": "5ed0a7fab474146888a7150896a2ae1f"
  },
  {
    "url": "base/2.config/5.page.html",
    "revision": "40998638216cd3e6048c76cbb968f79d"
  },
  {
    "url": "base/2.config/7.module.html",
    "revision": "4c7d88737fa536a27fc17e0f0e146933"
  },
  {
    "url": "base/2.config/8.project.html",
    "revision": "df4b04580bb0246b687cb0cd54bf9c2d"
  },
  {
    "url": "base/2.config/9.utils.html",
    "revision": "7242acb72439a7f2a76bb34b0fe9e8a7"
  },
  {
    "url": "base/3.react/1.index.html",
    "revision": "b9563095288430adffb029a7f9b8f9ad"
  },
  {
    "url": "base/3.react/2.Jenkins.html",
    "revision": "51f1928500c49c5ffbc9ae2d2b614c0e"
  },
  {
    "url": "base/3.react/3.gitlab.html",
    "revision": "7d388a7861995c6e551cbf7d77f36654"
  },
  {
    "url": "base/3.react/4.vscode.html",
    "revision": "bcfe95cc148f94748af968c8874868af"
  },
  {
    "url": "base/3.react/5.zod.html",
    "revision": "6cb6a2ef7cfecbb143707064c723164b"
  },
  {
    "url": "base/3.react/i18n.html",
    "revision": "a48538c0940bf862eb4797953ee039bf"
  },
  {
    "url": "base/3.react/prem.html",
    "revision": "9f9e60e30a770557dbffcdcede2bb7f3"
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
    "revision": "12bdb6a0246d1c8f2b3a721c1ca3fb8f"
  },
  {
    "url": "mock/http.js",
    "revision": "c8abf8aba8039ff5bc6fa0517b076832"
  },
  {
    "url": "project/react/1.index.html",
    "revision": "02956d9c3708f33c3bd1f6405b0d0146"
  },
  {
    "url": "project/vue/1.index.html",
    "revision": "b2b1d63166f24f5400a3456a8e2a88a9"
  },
  {
    "url": "project/vue/10.element-plus.html",
    "revision": "d3aa32be512831ac5b03649c241c60e7"
  },
  {
    "url": "project/vue/11.tsx.html",
    "revision": "6d6c308aa370ffab7ecc340936c2ea15"
  },
  {
    "url": "project/vue/2.ref.html",
    "revision": "a35f9fac59a6c3d7f619a02c7966f4c4"
  },
  {
    "url": "project/vue/3.props.html",
    "revision": "8083db8d233c16f8835660ca80308784"
  },
  {
    "url": "project/vue/4.emits.html",
    "revision": "dc1350a95c991fb5c33edcefa4cb6940"
  },
  {
    "url": "project/vue/5.component.html",
    "revision": "a693000a7e5abea1331287630e9a2b7a"
  },
  {
    "url": "project/vue/6.slot.html",
    "revision": "e94c18fb49ac294c3bfb1a36ad51127c"
  },
  {
    "url": "project/vue/7.vue-router.html",
    "revision": "9c4c5064f51263121485e753c0fc5a89"
  },
  {
    "url": "project/vue/8.tsconfig.html",
    "revision": "5f81469eb5432b705463f55fa539e59a"
  },
  {
    "url": "project/vue/9.vuex.html",
    "revision": "fd7764a41aab3d2a86c82b7c3af5581a"
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
