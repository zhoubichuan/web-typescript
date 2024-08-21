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
    "revision": "88a4d642d635c60b6c71315ea6e43b12"
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
    "url": "assets/js/10.4e929603.js",
    "revision": "6240abacbf3162f52559c6d221a8362a"
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
    "url": "assets/js/13.8db1f6ba.js",
    "revision": "351264a8a28e616b1e6c05ea345e3c18"
  },
  {
    "url": "assets/js/14.bc507c46.js",
    "revision": "1960d3ab05e38aee22e57080bcab2d99"
  },
  {
    "url": "assets/js/15.728925e7.js",
    "revision": "d287284d7dd16b4bde832a013fe00d96"
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
    "url": "assets/js/19.59413641.js",
    "revision": "c2eab5f5769907f30b9965ea5580ac7c"
  },
  {
    "url": "assets/js/2.5fff30ab.js",
    "revision": "bf3576487357da8939cf82eea38f445c"
  },
  {
    "url": "assets/js/20.eba17561.js",
    "revision": "155e2f0fcc7e6cf1d119a13adf5ea7eb"
  },
  {
    "url": "assets/js/21.64d6b219.js",
    "revision": "1248b63f8c564730bb3ab9dfe8be1914"
  },
  {
    "url": "assets/js/22.362b912a.js",
    "revision": "4b66fe37e0d9424312c42783556b8b93"
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
    "url": "assets/js/30.a767508d.js",
    "revision": "aab88116bc5bb780a2460fb32c39ac7a"
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
    "url": "assets/js/35.e71f68c0.js",
    "revision": "c9ce5dda575b511bf8d0237212b19a01"
  },
  {
    "url": "assets/js/36.5c691acd.js",
    "revision": "26f14725e0c3ae0d0540612cb48033d8"
  },
  {
    "url": "assets/js/37.0c8d05e7.js",
    "revision": "662521a9b8f43c2a97aa05bb3c2a1246"
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
    "url": "assets/js/49.0d774f22.js",
    "revision": "15ae0ea79b06175e554454e83626db38"
  },
  {
    "url": "assets/js/5.a77092f8.js",
    "revision": "ae5031fb37a8390b1f1c7673242b3d72"
  },
  {
    "url": "assets/js/50.5d9117a6.js",
    "revision": "3eeae8a67891ac726cfdc43f90f24220"
  },
  {
    "url": "assets/js/51.1253343b.js",
    "revision": "edab9118ffd7fc8c5f85230aa19a66da"
  },
  {
    "url": "assets/js/52.3bf470d4.js",
    "revision": "30b62a10a70758089afc3be7b3dec31e"
  },
  {
    "url": "assets/js/53.35f85ec6.js",
    "revision": "d26c858239dc36c4ce31ac6f68d252e7"
  },
  {
    "url": "assets/js/54.1737d18f.js",
    "revision": "b3c5e5b38cb678339d8694142b6b6576"
  },
  {
    "url": "assets/js/55.6f671e5d.js",
    "revision": "1091c19fefa82aacf334a86608d32f21"
  },
  {
    "url": "assets/js/56.b87814b5.js",
    "revision": "fdc8fcd7cb81482d9e166e86fb943492"
  },
  {
    "url": "assets/js/57.bfd4b8f9.js",
    "revision": "14f07bd16d6dc8390fa5d7efb593ab97"
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
    "url": "assets/js/app.60c120c4.js",
    "revision": "8d3ba63d4c52e0cc8ce1e92dac375093"
  },
  {
    "url": "base/1.typescript/1.env.html",
    "revision": "0b0183ad57ec5bf3626e185af49c8295"
  },
  {
    "url": "base/1.typescript/1.index.html",
    "revision": "84ca4b9f94e7e13a7c71af53fea048e1"
  },
  {
    "url": "base/1.typescript/10.infer.html",
    "revision": "3585134b792b817e0227417f5e9bd816"
  },
  {
    "url": "base/1.typescript/11.overlapping.html",
    "revision": "c7b93d680758cd162d7be1dfd95e461b"
  },
  {
    "url": "base/1.typescript/12.condition.html",
    "revision": "ee071b63cf693b1bc016e376f07d143f"
  },
  {
    "url": "base/1.typescript/13.builtin.html",
    "revision": "3075db09be17e40788728489cb1c8acb"
  },
  {
    "url": "base/1.typescript/14.package.html",
    "revision": "60a951fdd6711a0986956110853af4c0"
  },
  {
    "url": "base/1.typescript/15.custom.html",
    "revision": "6fc675b5f9075040dd0392bf641bcc62"
  },
  {
    "url": "base/1.typescript/16.unknown.html",
    "revision": "f266dd56a53b945e7d2cc844534ba9d5"
  },
  {
    "url": "base/1.typescript/17.module.html",
    "revision": "b6a1c8e456ee84d578631ef62149f242"
  },
  {
    "url": "base/1.typescript/18.statement.html",
    "revision": "c6e67701cb31937f81fa62c516697778"
  },
  {
    "url": "base/1.typescript/19.extend.html",
    "revision": "ec5de88640d98d9eb4b1fe64315287c5"
  },
  {
    "url": "base/1.typescript/2.base.html",
    "revision": "50ecb36b9e1ff5c6eca40c8175b9cf53"
  },
  {
    "url": "base/1.typescript/3.deduction.html",
    "revision": "2e59fd2e99e888847a967badfa6adbb3"
  },
  {
    "url": "base/1.typescript/4.type.html",
    "revision": "7410f87d6d98ac4a94bb076c1cc9f9f0"
  },
  {
    "url": "base/1.typescript/5.class.html",
    "revision": "4cb8410c7b2911a9a65a25c57c33dbe6"
  },
  {
    "url": "base/1.typescript/6.interface.html",
    "revision": "d9ba2438ae3a83270e165aacc4a9c69f"
  },
  {
    "url": "base/1.typescript/7.generic.html",
    "revision": "f545669b0987ddee07f1fa2bfecf9a86"
  },
  {
    "url": "base/1.typescript/8.compatible.html",
    "revision": "154d06e3a7a500e128373273d357d5f3"
  },
  {
    "url": "base/1.typescript/9.protect.html",
    "revision": "aee5dd51a6ffd86e776fcd41ca8d5af3"
  },
  {
    "url": "base/2.vue/1.config.html",
    "revision": "a83f31753911c53cc893182e563ad4ea"
  },
  {
    "url": "base/2.vue/1.index.html",
    "revision": "5ce1b6e252ff5096177d3eaad34459da"
  },
  {
    "url": "base/2.vue/10.ui.html",
    "revision": "46052e2e1fef6cf1f157fdd769698947"
  },
  {
    "url": "base/2.vue/11.data.html",
    "revision": "6f409d42c1632edb9833c7bfa6e99b00"
  },
  {
    "url": "base/2.vue/12.skill.html",
    "revision": "bdc24753eb6271d629176bb6d20efe1c"
  },
  {
    "url": "base/2.vue/13.com.html",
    "revision": "d665a49b639c8e96bbff0caefe76bb40"
  },
  {
    "url": "base/2.vue/14.data.html",
    "revision": "62c1be707cb331c982179921864b25de"
  },
  {
    "url": "base/2.vue/2.webpack.html",
    "revision": "93254d04aeeb47b6d00839d1fa664597"
  },
  {
    "url": "base/2.vue/3.file.html",
    "revision": "8d2446bd38980860419627f24fdd1dd8"
  },
  {
    "url": "base/2.vue/4.single.html",
    "revision": "5990fd55c23ed7ef39630830f7126741"
  },
  {
    "url": "base/2.vue/5.page.html",
    "revision": "a22bdddf35736bec348d360efa978c7d"
  },
  {
    "url": "base/2.vue/7.module.html",
    "revision": "2db8771f412793bc8a5901c9f2de34f2"
  },
  {
    "url": "base/2.vue/8.project.html",
    "revision": "7409bbb788f11d44c11278394a0485d5"
  },
  {
    "url": "base/2.vue/9.utils.html",
    "revision": "1f88294b9c0962e073cf555c4b83346b"
  },
  {
    "url": "base/3.react/1.index.html",
    "revision": "22799b9f90a4af8972e92753ea91afb0"
  },
  {
    "url": "base/3.react/2.Jenkins.html",
    "revision": "536da89aa665adf4bb1428f3b92df6c9"
  },
  {
    "url": "base/3.react/3.gitlab.html",
    "revision": "84e261b5247cf0d6dc60f1417c3a3ef6"
  },
  {
    "url": "base/3.react/i18n.html",
    "revision": "bb82bee0dbdd437ca852bc7e23cdde98"
  },
  {
    "url": "base/3.react/prem.html",
    "revision": "a16ba7db51368f4f6f03c08602893821"
  },
  {
    "url": "base/3.react/test.html",
    "revision": "1b8cd6419fe6ac79a901ad648778d9e7"
  },
  {
    "url": "base/3.react/vscode.html",
    "revision": "2fce0568bb2038fed00ef8776d1dea74"
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
    "revision": "6ff3538ad3cff3ff9c6394474f18c6df"
  },
  {
    "url": "mock/http.js",
    "revision": "c8abf8aba8039ff5bc6fa0517b076832"
  },
  {
    "url": "senior/npm/1.index.html",
    "revision": "1c374bc0e1ee45ac39c569f5a0412066"
  },
  {
    "url": "senior/use/1.index.html",
    "revision": "09fe76a79b57142c1c1a898e187c2076"
  },
  {
    "url": "senior/use/10.table.html",
    "revision": "a06624d6ecb4ab0781865dc540462506"
  },
  {
    "url": "senior/use/11.tree.html",
    "revision": "66ab40822ed23b9f82c28e24fc99a799"
  },
  {
    "url": "senior/use/2.extend.html",
    "revision": "b43cff64cfe3922fb032ca46258a3804"
  },
  {
    "url": "senior/use/3.componentCommunication.html",
    "revision": "ce8c4238fcd00e2dbe3047242e7c6fad"
  },
  {
    "url": "senior/use/4.render.html",
    "revision": "317c20375debdda43a4e673ba879e0ed"
  },
  {
    "url": "senior/use/5.api.html",
    "revision": "c80d46ad4e8509bfe8ea74ca09155423"
  },
  {
    "url": "senior/use/6.form.html",
    "revision": "29c7f136b256deed9787684e13408665"
  },
  {
    "url": "senior/use/7.checkBox.html",
    "revision": "e5207c0422fbd144618274ad13e04874"
  },
  {
    "url": "senior/use/8.active.html",
    "revision": "9d5cd5fcca76c4fc9d8f1abbe6aa9240"
  },
  {
    "url": "senior/use/9.alert.html",
    "revision": "ee35e1c35c69851dec24b7e1385835c7"
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
