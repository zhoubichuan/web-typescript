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
    "revision": "f5602b35a03153f9f0d3d435cb1248f0"
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
    "url": "assets/js/10.cedc64a1.js",
    "revision": "82869d3bf54643d7f55ffdaa574a3fcb"
  },
  {
    "url": "assets/js/11.da2dc1a2.js",
    "revision": "52db8f172521861d13868c8c8e57f651"
  },
  {
    "url": "assets/js/12.97a6c48a.js",
    "revision": "1b5f920139e2eeaaf5c4914a5931a658"
  },
  {
    "url": "assets/js/13.35174da4.js",
    "revision": "0e1efa415bb568a4047eaf6d609e159b"
  },
  {
    "url": "assets/js/14.fa02486c.js",
    "revision": "9b379c245412a159cbd57006c833fab6"
  },
  {
    "url": "assets/js/15.31a2e6ea.js",
    "revision": "1e8c4be25d77f45fc1d3bc74f9d467a8"
  },
  {
    "url": "assets/js/16.6d7f2134.js",
    "revision": "421260d42843b2b02a2c004e2c74bd25"
  },
  {
    "url": "assets/js/17.72dc9b0b.js",
    "revision": "4d0f3794587a2aed0e81bafc25022a13"
  },
  {
    "url": "assets/js/18.1034d8b8.js",
    "revision": "e1d091e136f37cdad463786c1922690c"
  },
  {
    "url": "assets/js/19.c186faeb.js",
    "revision": "0c9958e7cd7101045db367d0586cbc8a"
  },
  {
    "url": "assets/js/2.c8c0c7e3.js",
    "revision": "bf3576487357da8939cf82eea38f445c"
  },
  {
    "url": "assets/js/20.fd07f721.js",
    "revision": "76ba4ebb4b204bf6dbb43ff947ba8f2c"
  },
  {
    "url": "assets/js/21.d555ae69.js",
    "revision": "6c5c8c48729b79db40d80be746332d45"
  },
  {
    "url": "assets/js/22.cb06fb50.js",
    "revision": "c1e43d093d2d07415a140fa9537925dc"
  },
  {
    "url": "assets/js/23.672e49e4.js",
    "revision": "fbfbe6a063f90e92542e3658135cc116"
  },
  {
    "url": "assets/js/24.e0c6d99c.js",
    "revision": "b1ce25614f9fc14b39d854e5e9f8669d"
  },
  {
    "url": "assets/js/25.c43e2ebf.js",
    "revision": "e749b12f731bc03104b41ed64cf9be5a"
  },
  {
    "url": "assets/js/26.03075fe0.js",
    "revision": "8a52681538310e03012091a66c89b1de"
  },
  {
    "url": "assets/js/27.de72e5c2.js",
    "revision": "adccb898d2accb101cafc42ea5f7835a"
  },
  {
    "url": "assets/js/28.9c5eacb1.js",
    "revision": "b8965c7f7f178ba06f97346c8e54065e"
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
    "url": "assets/js/32.850697b7.js",
    "revision": "263e869349051c3c70370e44555dc47d"
  },
  {
    "url": "assets/js/33.36dd6fbb.js",
    "revision": "16068989b3a816f8af81b62e3275f886"
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
    "url": "assets/js/40.a9beb970.js",
    "revision": "86da574079cd29d9e92f312b96a93eff"
  },
  {
    "url": "assets/js/41.6b50fcf5.js",
    "revision": "167e6187534a5b8c1e293fe5fa29ee41"
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
    "url": "assets/js/45.2bf1630c.js",
    "revision": "be4d8d5f880685401d2caeee6d80384a"
  },
  {
    "url": "assets/js/46.08b84484.js",
    "revision": "dd70af82efe265cde826ec48d92f63c8"
  },
  {
    "url": "assets/js/47.52a373e7.js",
    "revision": "4ff041a55600c9c5132a63ff89f236e7"
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
    "url": "assets/js/50.a94340a6.js",
    "revision": "287848a61a2653419ec0d136a7af23d7"
  },
  {
    "url": "assets/js/51.516b4622.js",
    "revision": "da50bd3f33e089a968ef20d1ffffe5dc"
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
    "url": "assets/js/54.7a8690d3.js",
    "revision": "870dec53ed024f1b3faa01996f878a68"
  },
  {
    "url": "assets/js/55.b29b0524.js",
    "revision": "405a0e1b54977ed5b860820b779613d3"
  },
  {
    "url": "assets/js/56.8e73142e.js",
    "revision": "4ee2b30ad2877c626f44c37fad7d1760"
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
    "url": "assets/js/59.c15a15f2.js",
    "revision": "33164d304f99c20c793eee1f7f10a9aa"
  },
  {
    "url": "assets/js/6.1c84d7c2.js",
    "revision": "86ca71003c238d89eb80ce3c3a718e46"
  },
  {
    "url": "assets/js/60.e3d0a852.js",
    "revision": "185ad8162f6678c1074d16ddc2d482fb"
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
    "url": "assets/js/9.efa93a50.js",
    "revision": "f2c557fe81ea2d056cd0591a7de8ce0c"
  },
  {
    "url": "assets/js/app.18e00211.js",
    "revision": "8b574f57c46a041685103cc56376b976"
  },
  {
    "url": "base/1.api/1.env.html",
    "revision": "63f789c6766b639555e4f134bb12d9f1"
  },
  {
    "url": "base/1.api/1.index.html",
    "revision": "72ef52d2fce7944808080c938737a9a7"
  },
  {
    "url": "base/1.api/10.infer.html",
    "revision": "50d2ce7bfe9b0ffa333e0945da68c0e4"
  },
  {
    "url": "base/1.api/11.overlapping.html",
    "revision": "3ecf9911968884f0acd91b799955e982"
  },
  {
    "url": "base/1.api/12.condition.html",
    "revision": "3d9e03235cee4ed93c289047ba6911d1"
  },
  {
    "url": "base/1.api/13.builtin.html",
    "revision": "365368a3e8b29e2cc8462a373b769be6"
  },
  {
    "url": "base/1.api/14.package.html",
    "revision": "32b135ce8afac145ff6afeed7a7d8053"
  },
  {
    "url": "base/1.api/15.custom.html",
    "revision": "f8e7c03a9bc79fade6959e3baaf8398d"
  },
  {
    "url": "base/1.api/16.unknown.html",
    "revision": "99fba7da15886b7feb784ec263ff3a27"
  },
  {
    "url": "base/1.api/17.module.html",
    "revision": "afc50ef27597a69a66f55cc5664aa276"
  },
  {
    "url": "base/1.api/18.statement.html",
    "revision": "438098ed91baad998d34122c00867116"
  },
  {
    "url": "base/1.api/19.extend.html",
    "revision": "6e19ec3165aff7e112603862da51347b"
  },
  {
    "url": "base/1.api/2.base.html",
    "revision": "06aade6f1d06acff6ef7307fb6e36025"
  },
  {
    "url": "base/1.api/3.deduction.html",
    "revision": "3e8876ff73de59b925d421c78badf1cf"
  },
  {
    "url": "base/1.api/4.type.html",
    "revision": "01cc55de63aadc0f8b1e5302fe9c7767"
  },
  {
    "url": "base/1.api/5.class.html",
    "revision": "486cd6e030856a3f7db156f1b0743814"
  },
  {
    "url": "base/1.api/6.interface.html",
    "revision": "d0acccbd38f988c87dfca553b0e3aba1"
  },
  {
    "url": "base/1.api/7.generic.html",
    "revision": "df9a230303f6fffd08bfa75ac2f6da39"
  },
  {
    "url": "base/1.api/8.compatible.html",
    "revision": "a58af6d41a641fe70d6a413a9c7751fa"
  },
  {
    "url": "base/1.api/9.protect.html",
    "revision": "c7f6362650f40d8fa4b864b2e045cf33"
  },
  {
    "url": "base/2.config/1.config.html",
    "revision": "06dec2d5e85990a4ee5fc8731a6535e1"
  },
  {
    "url": "base/2.config/1.index.html",
    "revision": "3fe9c58608fbd67465ddc1fd1a28046a"
  },
  {
    "url": "base/2.config/10.ui.html",
    "revision": "a6845deb130ea20ed5903efe148a83b0"
  },
  {
    "url": "base/2.config/11.data.html",
    "revision": "92d4765ebe3e1a6a9f0357cf389e7313"
  },
  {
    "url": "base/2.config/12.skill.html",
    "revision": "a10d48c7285f1e1b1600241c23f31f98"
  },
  {
    "url": "base/2.config/13.com.html",
    "revision": "ebaeea4be62f3e42bbd62d99beb753f5"
  },
  {
    "url": "base/2.config/14.data.html",
    "revision": "4c9ec12781f81e2c4df38fdd3a490af8"
  },
  {
    "url": "base/2.config/2.webpack.html",
    "revision": "3baec82b9fa2cd1c09c57085ab73ac45"
  },
  {
    "url": "base/2.config/3.file.html",
    "revision": "4d0571b55a375867833b368ec3bb37c8"
  },
  {
    "url": "base/2.config/4.single.html",
    "revision": "527dc0fc2d15d2f4583bee774e810507"
  },
  {
    "url": "base/2.config/5.page.html",
    "revision": "c1098b5c36fca8c67a9e46299fb112f7"
  },
  {
    "url": "base/2.config/7.module.html",
    "revision": "c5356be2280cde1063a04af8915a2cc9"
  },
  {
    "url": "base/2.config/8.project.html",
    "revision": "7161e94685ac3bf35d08dbec02bce2c0"
  },
  {
    "url": "base/2.config/9.utils.html",
    "revision": "1cd6c94455d87099c70c5163a9a45a0e"
  },
  {
    "url": "base/3.react/1.index.html",
    "revision": "49dcfffcef1346380f806b975d5f3923"
  },
  {
    "url": "base/3.react/2.Jenkins.html",
    "revision": "dcdee598f199cbaccd2f00c7fa752951"
  },
  {
    "url": "base/3.react/3.gitlab.html",
    "revision": "9430530af122621bd1fe1698208fb48b"
  },
  {
    "url": "base/3.react/i18n.html",
    "revision": "f6e9e1fe14125b80c40793907d2a9546"
  },
  {
    "url": "base/3.react/prem.html",
    "revision": "9f90673d93f43d23510e765ab46fd7b5"
  },
  {
    "url": "base/3.react/test.html",
    "revision": "9929101fd26a85aafcc62f56b785d0b6"
  },
  {
    "url": "base/3.react/vscode.html",
    "revision": "09bb61c84409aad2d52744b79af3ffd0"
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
    "revision": "7734a44bcc6e18a26895be7282327d98"
  },
  {
    "url": "mock/http.js",
    "revision": "c8abf8aba8039ff5bc6fa0517b076832"
  },
  {
    "url": "senior/npm/1.index.html",
    "revision": "16877599fed92345a793a9599fe4a072"
  },
  {
    "url": "senior/use/1.index.html",
    "revision": "b024094e5c94b227c719cb249aa8eb84"
  },
  {
    "url": "senior/use/10.table.html",
    "revision": "fefcec8ee68ac6dcb050571ba49232d7"
  },
  {
    "url": "senior/use/11.tree.html",
    "revision": "369fc893a12a84657750655289511a05"
  },
  {
    "url": "senior/use/2.extend.html",
    "revision": "a3191273ee00a283c8728925ec7de581"
  },
  {
    "url": "senior/use/3.componentCommunication.html",
    "revision": "ffd11c7f31d28328101d92229c15ad4a"
  },
  {
    "url": "senior/use/4.render.html",
    "revision": "132d0b67e1adcfb0be8df6488b1213ab"
  },
  {
    "url": "senior/use/5.api.html",
    "revision": "720becdbc6e9d21edf7210faab89a471"
  },
  {
    "url": "senior/use/6.form.html",
    "revision": "07eec32abe78f87e42bfdd16b2717746"
  },
  {
    "url": "senior/use/7.checkBox.html",
    "revision": "dd49f750b89f2424fb70a26e0ec87e9b"
  },
  {
    "url": "senior/use/8.active.html",
    "revision": "6cc5e8d993f6a1a4421492bf12040af7"
  },
  {
    "url": "senior/use/9.alert.html",
    "revision": "11fb90e556cd1402bcb4fc261dd84742"
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
