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
    "revision": "66921461f178b9546f5b960ddf5542f4"
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
    "url": "assets/js/10.c64dd4c4.js",
    "revision": "9b5f57196d633a034d98b75034fcdf82"
  },
  {
    "url": "assets/js/11.da2dc1a2.js",
    "revision": "52db8f172521861d13868c8c8e57f651"
  },
  {
    "url": "assets/js/12.b0fe49c5.js",
    "revision": "7a0c074571e953ae6b4f430346012345"
  },
  {
    "url": "assets/js/13.35174da4.js",
    "revision": "0e1efa415bb568a4047eaf6d609e159b"
  },
  {
    "url": "assets/js/14.5c109098.js",
    "revision": "ef324bb7fa72e0158c4bb15b0bd5eef4"
  },
  {
    "url": "assets/js/15.c3d7a1ce.js",
    "revision": "d287284d7dd16b4bde832a013fe00d96"
  },
  {
    "url": "assets/js/16.b6fb0081.js",
    "revision": "e308133185e38314dcc6b17960079a56"
  },
  {
    "url": "assets/js/17.56aad27f.js",
    "revision": "12e9de56c044d696887eb596307dee7d"
  },
  {
    "url": "assets/js/18.1922f95d.js",
    "revision": "57579fb9a70cabfee772fe184f9fe98c"
  },
  {
    "url": "assets/js/19.9400684a.js",
    "revision": "e1279db2dc295de74c727eb076395e8a"
  },
  {
    "url": "assets/js/2.c8c0c7e3.js",
    "revision": "bf3576487357da8939cf82eea38f445c"
  },
  {
    "url": "assets/js/20.69fb1b29.js",
    "revision": "cb005231c7a9222a69110f19b3e8d846"
  },
  {
    "url": "assets/js/21.f6bea49c.js",
    "revision": "ec4d712f13c2206024fe38615f8ec147"
  },
  {
    "url": "assets/js/22.cb06fb50.js",
    "revision": "c1e43d093d2d07415a140fa9537925dc"
  },
  {
    "url": "assets/js/23.fca5bd31.js",
    "revision": "b5908606f536ef5fc8cecca9cabb35e9"
  },
  {
    "url": "assets/js/24.01a1287c.js",
    "revision": "4d4bbbfadc7e5bf0619ad7f3b6897a59"
  },
  {
    "url": "assets/js/25.c5a329ed.js",
    "revision": "57a29ba78ba985fe098bf9cc85517778"
  },
  {
    "url": "assets/js/26.5dce9858.js",
    "revision": "a455497dc04d334688ad8a35c9a6929d"
  },
  {
    "url": "assets/js/27.eb05c655.js",
    "revision": "3b85f65015e04c52219a976c427e839f"
  },
  {
    "url": "assets/js/28.e3299ecb.js",
    "revision": "f80bbca3985f8e282d9c21573b68ac32"
  },
  {
    "url": "assets/js/29.80c93d7a.js",
    "revision": "f1cd1a570aeb8911d496bf5608e80c00"
  },
  {
    "url": "assets/js/3.384e845f.js",
    "revision": "fbf7f49d43a1979ecb3e6e97c2466f4b"
  },
  {
    "url": "assets/js/30.d2e227b1.js",
    "revision": "d0a2daa83eebcaf232e3083f2bcd34e3"
  },
  {
    "url": "assets/js/31.ed427467.js",
    "revision": "2a2ddbe53d36f01aff1adfc11f94fd48"
  },
  {
    "url": "assets/js/32.13e67bfa.js",
    "revision": "c26d0e28d6ff160ed341f022ac53ab20"
  },
  {
    "url": "assets/js/33.61361861.js",
    "revision": "7a8b6749eb2806ea1cb228d04fbb874e"
  },
  {
    "url": "assets/js/34.fca252af.js",
    "revision": "5ab6a0fa5e2e6472b33d730d035e4c51"
  },
  {
    "url": "assets/js/35.14ee96e6.js",
    "revision": "c516e00136700d705659cc9e2bfc31c1"
  },
  {
    "url": "assets/js/36.f59b6f7c.js",
    "revision": "53f6084a2b6daddb09341d8a927129e3"
  },
  {
    "url": "assets/js/37.22262aed.js",
    "revision": "eb685f02e304d7a65c3472c78dfab251"
  },
  {
    "url": "assets/js/38.f34d3ec9.js",
    "revision": "8e8c75c129c85461604cd0da6a158441"
  },
  {
    "url": "assets/js/39.c22dc0e8.js",
    "revision": "085bf37662b123e7e56e04c04c8d9782"
  },
  {
    "url": "assets/js/4.f06a870d.js",
    "revision": "5f8b6aef590e9dec19e854ef23ee6eb5"
  },
  {
    "url": "assets/js/40.106d1db6.js",
    "revision": "caa0e29cdbb1786d50828de024bb51d9"
  },
  {
    "url": "assets/js/41.fafd8bf3.js",
    "revision": "6cf9de7ceb4e8f01589f5953dde0e7ff"
  },
  {
    "url": "assets/js/42.13e3756a.js",
    "revision": "0440e40bf8fdc41d5d45917a5c43056d"
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
    "url": "assets/js/45.5459c98f.js",
    "revision": "49966f7cada3c291ca29adb32249bbe1"
  },
  {
    "url": "assets/js/46.f92777d2.js",
    "revision": "93c813d3bdf531efd4010f9de68390a6"
  },
  {
    "url": "assets/js/47.e893ff70.js",
    "revision": "0f1cf9ab925f237103d0a9d23e94cd5c"
  },
  {
    "url": "assets/js/48.cbddffdf.js",
    "revision": "76af50e5d5afa17a255c8feb19bd002a"
  },
  {
    "url": "assets/js/49.e39757fb.js",
    "revision": "6bb21f314e6731903783ec804c45f32b"
  },
  {
    "url": "assets/js/5.a77092f8.js",
    "revision": "ae5031fb37a8390b1f1c7673242b3d72"
  },
  {
    "url": "assets/js/50.6668725d.js",
    "revision": "5fd60e200eeaee5366b06bacf02292a3"
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
    "url": "assets/js/55.ef85f2bf.js",
    "revision": "7548bb477086bc32b0acf76699c788e0"
  },
  {
    "url": "assets/js/56.b87814b5.js",
    "revision": "fdc8fcd7cb81482d9e166e86fb943492"
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
    "url": "assets/js/9.dcd6c83a.js",
    "revision": "08549ee0ea7b2a900125554d052bad66"
  },
  {
    "url": "assets/js/app.8b0e5c61.js",
    "revision": "2dc13582f0b3b5434db47375fcb7d22d"
  },
  {
    "url": "base/1.api/1.env.html",
    "revision": "adc37483049e9a796dddfc6a8bd9b38f"
  },
  {
    "url": "base/1.api/1.index.html",
    "revision": "23a1cad3fa0236f2ebc6b6294396567f"
  },
  {
    "url": "base/1.api/10.infer.html",
    "revision": "c42fb49d510d5d21f2adaa05a05e7a27"
  },
  {
    "url": "base/1.api/11.overlapping.html",
    "revision": "83a0a2fd2a7524ed1beb9e64ae85e315"
  },
  {
    "url": "base/1.api/12.condition.html",
    "revision": "270c3cebb8d96a5d5639cb80a650a2fc"
  },
  {
    "url": "base/1.api/13.builtin.html",
    "revision": "ba5e516011530d130873c4cf9ae6c00a"
  },
  {
    "url": "base/1.api/14.package.html",
    "revision": "b5889097dedfa18295338a2b58b6866a"
  },
  {
    "url": "base/1.api/15.custom.html",
    "revision": "c27000acb89035b59941bcf03471bcbf"
  },
  {
    "url": "base/1.api/16.unknown.html",
    "revision": "809bbbd6897735cc53dae7db7d5481e8"
  },
  {
    "url": "base/1.api/17.module.html",
    "revision": "670ebc36aaff5f1aa7cfdfe0f3ff56cb"
  },
  {
    "url": "base/1.api/18.statement.html",
    "revision": "a2f0043cc731fa80166e063cdb893c1b"
  },
  {
    "url": "base/1.api/19.extend.html",
    "revision": "b62ebcf3eec586b5d71623d096bab692"
  },
  {
    "url": "base/1.api/2.base.html",
    "revision": "966f6733a9cb468b7f440d562576148e"
  },
  {
    "url": "base/1.api/3.deduction.html",
    "revision": "7b0700f3b6847ce451d46718cbee4b8a"
  },
  {
    "url": "base/1.api/4.type.html",
    "revision": "9b260fb7eb36c1e18fe0db06670c0c15"
  },
  {
    "url": "base/1.api/5.class.html",
    "revision": "e90306ea562c3d0b5813649dc4133d23"
  },
  {
    "url": "base/1.api/6.interface.html",
    "revision": "a3011d2871f49034a2fff266006960ce"
  },
  {
    "url": "base/1.api/7.generic.html",
    "revision": "d4cdf0a6c80852f4884cebba73cfbe67"
  },
  {
    "url": "base/1.api/8.compatible.html",
    "revision": "c7fd20f06289143dd352d286819d7fa1"
  },
  {
    "url": "base/1.api/9.protect.html",
    "revision": "609e9b1d8fc2e755d30a66a34ef9bb0e"
  },
  {
    "url": "base/2.config/1.config.html",
    "revision": "c7f81634713ddbcf7c4f5bc03a6aab37"
  },
  {
    "url": "base/2.config/1.index.html",
    "revision": "a38117dbac8c75c9ccdece8326ad5c4f"
  },
  {
    "url": "base/2.config/10.ui.html",
    "revision": "2f3d8114740338f4993c23efd4f3282c"
  },
  {
    "url": "base/2.config/11.data.html",
    "revision": "2e77c905e001590cca8c204c4e811fc6"
  },
  {
    "url": "base/2.config/12.skill.html",
    "revision": "6850847a38707bcb2c608ddda6432fdd"
  },
  {
    "url": "base/2.config/13.com.html",
    "revision": "5dcad1f9877bb15e72b2a6884cf4794f"
  },
  {
    "url": "base/2.config/14.data.html",
    "revision": "86629cc350932aa1e74acbb5c12f2cb2"
  },
  {
    "url": "base/2.config/2.webpack.html",
    "revision": "a6d8b069ac57b07aadcef518076b4ef3"
  },
  {
    "url": "base/2.config/3.file.html",
    "revision": "738d07d261db6550a097504bb3db1b34"
  },
  {
    "url": "base/2.config/4.single.html",
    "revision": "4204d6ff2aafb6963a68b3e846853f15"
  },
  {
    "url": "base/2.config/5.page.html",
    "revision": "6bb62c266c32b94aa15835150aaec1d0"
  },
  {
    "url": "base/2.config/7.module.html",
    "revision": "9398d7aa3a0a3aff534e831752a62671"
  },
  {
    "url": "base/2.config/8.project.html",
    "revision": "2f573aaac8b62037b5f77745272c9e00"
  },
  {
    "url": "base/2.config/9.utils.html",
    "revision": "364bc9fde37c1ce8d852bea5c8293b16"
  },
  {
    "url": "base/3.react/1.index.html",
    "revision": "e1f6b5f9e549f7572a5c1aed167a5eee"
  },
  {
    "url": "base/3.react/2.Jenkins.html",
    "revision": "06feaffcd3caba45a7a6f652883c758b"
  },
  {
    "url": "base/3.react/3.gitlab.html",
    "revision": "6b5224dc2bd1d749b15a3d4e0c83c073"
  },
  {
    "url": "base/3.react/i18n.html",
    "revision": "88899d01c11b3e87a692ee053150ef7e"
  },
  {
    "url": "base/3.react/prem.html",
    "revision": "a64090114b373c8966d5017bcbc7f413"
  },
  {
    "url": "base/3.react/test.html",
    "revision": "7ea6b56845b0582891ce615176dc1204"
  },
  {
    "url": "base/3.react/vscode.html",
    "revision": "01cbd14b9d667b462e4c16e7d61e1649"
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
    "revision": "68b423a675617d18e717471c102402ae"
  },
  {
    "url": "mock/http.js",
    "revision": "c8abf8aba8039ff5bc6fa0517b076832"
  },
  {
    "url": "senior/npm/1.index.html",
    "revision": "dbfdf92cb003416e9dbd73c955f7c1cc"
  },
  {
    "url": "senior/use/1.index.html",
    "revision": "88c69320191e34b4630faa8684d3983e"
  },
  {
    "url": "senior/use/10.table.html",
    "revision": "821bac4871eef53c357ce71fdd12d43c"
  },
  {
    "url": "senior/use/11.tree.html",
    "revision": "81bcc91cb28fae279b31f4af6fcbff9d"
  },
  {
    "url": "senior/use/2.extend.html",
    "revision": "63a47c4d96d82f8b82bbf94874369e33"
  },
  {
    "url": "senior/use/3.componentCommunication.html",
    "revision": "c7f1e427d0f0e3467bcd57eec6f48dd4"
  },
  {
    "url": "senior/use/4.render.html",
    "revision": "589caa1805b01ac531dff45bee3c0857"
  },
  {
    "url": "senior/use/5.api.html",
    "revision": "c5513abc98c97b947147de09667e94bc"
  },
  {
    "url": "senior/use/6.form.html",
    "revision": "6af93649eb23dfe1f96c796445be77a9"
  },
  {
    "url": "senior/use/7.checkBox.html",
    "revision": "35527c048ea7f09fcb87b90b9239581c"
  },
  {
    "url": "senior/use/8.active.html",
    "revision": "5cc58b40782daac2920594c40bc43ead"
  },
  {
    "url": "senior/use/9.alert.html",
    "revision": "25dc8df1a99ac29c3188cdf4a4a4566b"
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
