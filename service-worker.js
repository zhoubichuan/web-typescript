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
    "revision": "6440c9c5813cceb064c5a78ea99b613c"
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
    "url": "assets/js/12.97a6c48a.js",
    "revision": "1b5f920139e2eeaaf5c4914a5931a658"
  },
  {
    "url": "assets/js/13.7c6f08fe.js",
    "revision": "1a978d15761d4d1371092b73f000369b"
  },
  {
    "url": "assets/js/14.448f4129.js",
    "revision": "b6e45f7743f4cd18ede43ff7b3037aa9"
  },
  {
    "url": "assets/js/15.2f92968d.js",
    "revision": "735d37386c6d2ddd77e32a286e183745"
  },
  {
    "url": "assets/js/16.f13027fe.js",
    "revision": "5f4597aba748da9557242cb4c46a6af9"
  },
  {
    "url": "assets/js/17.56aad27f.js",
    "revision": "12e9de56c044d696887eb596307dee7d"
  },
  {
    "url": "assets/js/18.84f57dac.js",
    "revision": "848587ac8f7432b8eaab49b5ff144d6d"
  },
  {
    "url": "assets/js/19.da4a8ff0.js",
    "revision": "62f1fa59495d857dda7a4d43cce29ee5"
  },
  {
    "url": "assets/js/2.c8c0c7e3.js",
    "revision": "bf3576487357da8939cf82eea38f445c"
  },
  {
    "url": "assets/js/20.8cd065fd.js",
    "revision": "155e2f0fcc7e6cf1d119a13adf5ea7eb"
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
    "url": "assets/js/23.672e49e4.js",
    "revision": "fbfbe6a063f90e92542e3658135cc116"
  },
  {
    "url": "assets/js/24.e0c6d99c.js",
    "revision": "b1ce25614f9fc14b39d854e5e9f8669d"
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
    "url": "assets/js/27.cdbf0703.js",
    "revision": "69c2ea49174bc90b1b555df702eb5369"
  },
  {
    "url": "assets/js/28.9c5eacb1.js",
    "revision": "b8965c7f7f178ba06f97346c8e54065e"
  },
  {
    "url": "assets/js/29.d98e0a1b.js",
    "revision": "ecef0bdeb5bd0f2dd05fca0017bc3e17"
  },
  {
    "url": "assets/js/3.384e845f.js",
    "revision": "fbf7f49d43a1979ecb3e6e97c2466f4b"
  },
  {
    "url": "assets/js/30.14f65b76.js",
    "revision": "064127046fb7563e102eeee5b0ab968a"
  },
  {
    "url": "assets/js/31.ed427467.js",
    "revision": "2a2ddbe53d36f01aff1adfc11f94fd48"
  },
  {
    "url": "assets/js/32.9ced1b65.js",
    "revision": "96a23437e0bb98a6d5a2c68bc71b1e03"
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
    "url": "assets/js/35.b15e2d93.js",
    "revision": "9afb071edc525e5acd68071c821c7e08"
  },
  {
    "url": "assets/js/36.aac5e463.js",
    "revision": "6c0d85f70d3b9d63da660d23da6df906"
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
    "url": "assets/js/42.0e0a122d.js",
    "revision": "144b1ca96931ef731c254500e99ca467"
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
    "url": "assets/js/45.f1ef4c82.js",
    "revision": "7ef2997398f414237d2efbd11f4b5cf9"
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
    "url": "assets/js/51.05f092e8.js",
    "revision": "74cb8069070a79cab63555715673464d"
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
    "url": "assets/js/54.3cc939d0.js",
    "revision": "81a80e00fbaa535ea5edd2d8c0a7bbbf"
  },
  {
    "url": "assets/js/55.3520c930.js",
    "revision": "333ffe049d54a575ad2636563184de4a"
  },
  {
    "url": "assets/js/56.95221825.js",
    "revision": "38749488d066786b2932090339548780"
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
    "url": "assets/js/9.dcd6c83a.js",
    "revision": "08549ee0ea7b2a900125554d052bad66"
  },
  {
    "url": "assets/js/app.6960c53f.js",
    "revision": "f8d624ff20db703ae10686946450748b"
  },
  {
    "url": "base/1.api/1.env.html",
    "revision": "b406caabd5d3343b7600af4365afc9af"
  },
  {
    "url": "base/1.api/1.index.html",
    "revision": "54116bd4a5d4cfb01169a46a00bf0ee2"
  },
  {
    "url": "base/1.api/10.infer.html",
    "revision": "b51bcd7953286b91e1725d9029056ecc"
  },
  {
    "url": "base/1.api/11.overlapping.html",
    "revision": "67b7fe0954b70df87513a64fa6cad3c2"
  },
  {
    "url": "base/1.api/12.condition.html",
    "revision": "61339dab2307fcc7fdb1e42fec1d89c4"
  },
  {
    "url": "base/1.api/13.builtin.html",
    "revision": "535cdfc09f6a427dc4f3dbd7ebecb2c1"
  },
  {
    "url": "base/1.api/14.package.html",
    "revision": "5a1c419f3cc8ed8a03647196f8feebb8"
  },
  {
    "url": "base/1.api/15.custom.html",
    "revision": "e3ca0ee269fd2d467b8040e1a2bdbed4"
  },
  {
    "url": "base/1.api/16.unknown.html",
    "revision": "e2f54caa87d2ac8c46220427749cb4c7"
  },
  {
    "url": "base/1.api/17.module.html",
    "revision": "4adf9ba59a51b2e25f976d5977e4a31b"
  },
  {
    "url": "base/1.api/18.statement.html",
    "revision": "d6765b01b6765ba3272bcd6bf80a840b"
  },
  {
    "url": "base/1.api/19.extend.html",
    "revision": "0c2e57557f6ebaefe23a00a6ee1681d5"
  },
  {
    "url": "base/1.api/2.base.html",
    "revision": "e88ca7fbf57d63a44e0c9f719853d0cf"
  },
  {
    "url": "base/1.api/3.deduction.html",
    "revision": "1e495948746c32b0232ef28a7fd503b4"
  },
  {
    "url": "base/1.api/4.type.html",
    "revision": "89d7884b0c975e4ab584c73bf508596f"
  },
  {
    "url": "base/1.api/5.class.html",
    "revision": "b559de84dcffd0576e554776ead86523"
  },
  {
    "url": "base/1.api/6.interface.html",
    "revision": "4f024737acad333973bac7019dbb5f57"
  },
  {
    "url": "base/1.api/7.generic.html",
    "revision": "85b667b81fcc95aa0cc71de36c0fc78a"
  },
  {
    "url": "base/1.api/8.compatible.html",
    "revision": "d3716fd6dbfc03561bb59a208e06d10c"
  },
  {
    "url": "base/1.api/9.protect.html",
    "revision": "1523c47251bff308ea809135a5a86478"
  },
  {
    "url": "base/2.config/1.config.html",
    "revision": "fd4169eacd2900df8ef55c05f54e6caa"
  },
  {
    "url": "base/2.config/1.index.html",
    "revision": "7cd4cbcf55b3d157d7f65564508a7912"
  },
  {
    "url": "base/2.config/10.ui.html",
    "revision": "95cf3229bb4697bda878b37bff48e8a8"
  },
  {
    "url": "base/2.config/11.data.html",
    "revision": "a0ad19d4366c626f552e41c4bb6bef75"
  },
  {
    "url": "base/2.config/12.skill.html",
    "revision": "7122ceadb4e0e02b7f65d70d3da051c6"
  },
  {
    "url": "base/2.config/13.com.html",
    "revision": "a15d906826582a32fa4346c24f5783f5"
  },
  {
    "url": "base/2.config/14.data.html",
    "revision": "94575f599015ae4322c965d9106e561f"
  },
  {
    "url": "base/2.config/2.webpack.html",
    "revision": "9c64b0933b4d408f73884df68d00bdf4"
  },
  {
    "url": "base/2.config/3.file.html",
    "revision": "926274113e1a56a3fdbfa420c212a03e"
  },
  {
    "url": "base/2.config/4.single.html",
    "revision": "b0372fe83b2655336ea50637dcaf616b"
  },
  {
    "url": "base/2.config/5.page.html",
    "revision": "447886b427d43e2ee06b7b0710e22026"
  },
  {
    "url": "base/2.config/7.module.html",
    "revision": "81eeeaf2b81b3ff8a337d67c642d044c"
  },
  {
    "url": "base/2.config/8.project.html",
    "revision": "d7734247cd0ee42374e752b5bbdc1d4e"
  },
  {
    "url": "base/2.config/9.utils.html",
    "revision": "c1e95788f9c17f9b256d6dbc6549263c"
  },
  {
    "url": "base/3.react/1.index.html",
    "revision": "44747fa4d07d0955fcf2e381d1c26167"
  },
  {
    "url": "base/3.react/2.Jenkins.html",
    "revision": "5d538258f3ed993b8960a921f7d01aac"
  },
  {
    "url": "base/3.react/3.gitlab.html",
    "revision": "f57b6df912a18327a4e8522192584ad4"
  },
  {
    "url": "base/3.react/i18n.html",
    "revision": "86cd0cc3ea6b93ee8cfc4651325b7610"
  },
  {
    "url": "base/3.react/prem.html",
    "revision": "923cf3e4d89d2766b0fff1cba46fe55b"
  },
  {
    "url": "base/3.react/test.html",
    "revision": "0cc423f6b1d11d9cab2b230387134158"
  },
  {
    "url": "base/3.react/vscode.html",
    "revision": "124cc1772baf9a55673117018d42c18d"
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
    "revision": "3669d8b6fa826980e0458881c93afd75"
  },
  {
    "url": "mock/http.js",
    "revision": "c8abf8aba8039ff5bc6fa0517b076832"
  },
  {
    "url": "senior/npm/1.index.html",
    "revision": "2435c9392c493bc400c2b0953275bf6a"
  },
  {
    "url": "senior/use/1.index.html",
    "revision": "cf63e7c4c14bc8449c8c35cfbdb90733"
  },
  {
    "url": "senior/use/10.table.html",
    "revision": "3c810197df4b98677c4f1bbe64f3b561"
  },
  {
    "url": "senior/use/11.tree.html",
    "revision": "2dce84548e719d9e78b35014143cefcc"
  },
  {
    "url": "senior/use/2.extend.html",
    "revision": "639aa9e33917d787b1e6f1dbc32092e0"
  },
  {
    "url": "senior/use/3.componentCommunication.html",
    "revision": "d7fd48fd4a186d27a61c61c2dedc3d46"
  },
  {
    "url": "senior/use/4.render.html",
    "revision": "4796865a5626bde3ce8addfb7daae346"
  },
  {
    "url": "senior/use/5.api.html",
    "revision": "cdf96ec63519d20b4fe45878d3653123"
  },
  {
    "url": "senior/use/6.form.html",
    "revision": "d5afc119e4e401b266f7decfc552b080"
  },
  {
    "url": "senior/use/7.checkBox.html",
    "revision": "f77ab1fa4fe1dad2de4c5a776099ea36"
  },
  {
    "url": "senior/use/8.active.html",
    "revision": "11ef7065e3d2c996bf6952a9994405bc"
  },
  {
    "url": "senior/use/9.alert.html",
    "revision": "927a004b4e6394e4e8085fe3c0844f3a"
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
