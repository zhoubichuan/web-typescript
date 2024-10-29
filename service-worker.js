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
    "revision": "b3a3f877f92f2593eeded3a646755352"
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
    "url": "assets/js/10.0d27fe69.js",
    "revision": "06d51f4c1e0b4aebca6bfc63432fa288"
  },
  {
    "url": "assets/js/11.7513e5e5.js",
    "revision": "02f1988916a2d26e4c9b018c5951d557"
  },
  {
    "url": "assets/js/12.76992a91.js",
    "revision": "509a6fac8c40bb50b460918184dd9f78"
  },
  {
    "url": "assets/js/13.4142e21c.js",
    "revision": "17faa3d2e50468cc123289c114ad46ef"
  },
  {
    "url": "assets/js/14.a6a66755.js",
    "revision": "1cae924e04b5c14f12d8ca9033676454"
  },
  {
    "url": "assets/js/15.75aa811c.js",
    "revision": "0ea860ed21c3db0837b5852671c3e53c"
  },
  {
    "url": "assets/js/16.20dd010c.js",
    "revision": "ca373ac577115e2b8c1778a826c099b0"
  },
  {
    "url": "assets/js/17.b3cb3ec3.js",
    "revision": "b89d3dedb370f2834edc91a1d0a3d343"
  },
  {
    "url": "assets/js/18.84f57dac.js",
    "revision": "848587ac8f7432b8eaab49b5ff144d6d"
  },
  {
    "url": "assets/js/19.71943ad6.js",
    "revision": "df85c8e4c2a0634db143edab321199ad"
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
    "url": "assets/js/21.ddccb7ee.js",
    "revision": "c3878ce7518f383cea77e922d5d54e3c"
  },
  {
    "url": "assets/js/22.40bcd4e7.js",
    "revision": "579fd30334e5e04624ca1b97403f4d01"
  },
  {
    "url": "assets/js/23.569041b1.js",
    "revision": "4256e0b2fd1213678f8d68483a48e291"
  },
  {
    "url": "assets/js/24.c6a451b6.js",
    "revision": "0f11be398a365855ce857814a8ce2abd"
  },
  {
    "url": "assets/js/25.9ec98bd8.js",
    "revision": "4a837c5126fc159fbcf24597b5c39a20"
  },
  {
    "url": "assets/js/26.110c95b3.js",
    "revision": "92c1f17a43c68c60c815192a46b86cbf"
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
    "url": "assets/js/29.e0740e13.js",
    "revision": "b5bf167056f50ac13c82b1f28f7e6d07"
  },
  {
    "url": "assets/js/3.384e845f.js",
    "revision": "fbf7f49d43a1979ecb3e6e97c2466f4b"
  },
  {
    "url": "assets/js/30.a1ce147f.js",
    "revision": "0819fa496fb2bed1cb3e6d0e1404c922"
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
    "url": "assets/js/36.dfe49028.js",
    "revision": "2018f2a6a4aa21f9545dea625254e7d2"
  },
  {
    "url": "assets/js/37.e965c612.js",
    "revision": "a12bbc0c14079ebe4a93dd964097ac48"
  },
  {
    "url": "assets/js/38.445db332.js",
    "revision": "e078ec61826c030f7f936d9b0bb119e6"
  },
  {
    "url": "assets/js/39.c854fe26.js",
    "revision": "78b87359605af34b02765cbc7ccf3b2e"
  },
  {
    "url": "assets/js/4.f06a870d.js",
    "revision": "5f8b6aef590e9dec19e854ef23ee6eb5"
  },
  {
    "url": "assets/js/40.03c61338.js",
    "revision": "51b5ffc0e360649f1c6e95877152f054"
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
    "url": "assets/js/43.795b3cde.js",
    "revision": "0e24ef99e0e90edbc29c76530ae1ef46"
  },
  {
    "url": "assets/js/44.874a72f1.js",
    "revision": "904676238fe36ed798a700063d4d105b"
  },
  {
    "url": "assets/js/45.1a9835a3.js",
    "revision": "8708700f2ee1e7c535e8908ffbbf8a11"
  },
  {
    "url": "assets/js/46.fa8b2844.js",
    "revision": "6bdfeaa7a1081626ed970f20511bbda4"
  },
  {
    "url": "assets/js/47.c88efc7a.js",
    "revision": "e835e41c19cf6bae7d3d32463ad294d6"
  },
  {
    "url": "assets/js/48.37bbd1af.js",
    "revision": "e9a8454480dcb47ef9fc26e735ad9724"
  },
  {
    "url": "assets/js/49.46b160c0.js",
    "revision": "b3adae09c115db859472053eae38e4eb"
  },
  {
    "url": "assets/js/5.a77092f8.js",
    "revision": "ae5031fb37a8390b1f1c7673242b3d72"
  },
  {
    "url": "assets/js/50.ba9eea50.js",
    "revision": "16f57d451aca23c1578ad2a3c82bd77d"
  },
  {
    "url": "assets/js/51.516b4622.js",
    "revision": "da50bd3f33e089a968ef20d1ffffe5dc"
  },
  {
    "url": "assets/js/52.29798091.js",
    "revision": "4fe113089cd7f501ecf22495559f7fbc"
  },
  {
    "url": "assets/js/53.758e7a61.js",
    "revision": "46d41d8d383ad1a3f46619f23557d251"
  },
  {
    "url": "assets/js/54.06fd4a80.js",
    "revision": "db0e40f451f73824dbfac7ba7d5a527b"
  },
  {
    "url": "assets/js/55.4616ca21.js",
    "revision": "d365a511437cf309c0c3373f45eab06a"
  },
  {
    "url": "assets/js/56.1459c767.js",
    "revision": "64af4ee0b4cd89ef26ea9cfc74d47ff8"
  },
  {
    "url": "assets/js/57.0bf13bbd.js",
    "revision": "d473fa86f6559391c401c69aefbb334e"
  },
  {
    "url": "assets/js/58.8e665a23.js",
    "revision": "fcdeff8d996c4871032968a81d6df8fd"
  },
  {
    "url": "assets/js/59.3455d9be.js",
    "revision": "17d89be4f88030bf75406d55b3aabccb"
  },
  {
    "url": "assets/js/6.1c84d7c2.js",
    "revision": "86ca71003c238d89eb80ce3c3a718e46"
  },
  {
    "url": "assets/js/60.ea8458d3.js",
    "revision": "8a285fdd5b47745300af6cf790a7cc9a"
  },
  {
    "url": "assets/js/61.42657320.js",
    "revision": "a32b7d2895b889839fc52adcfe3d953a"
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
    "url": "assets/js/9.ba1cb56b.js",
    "revision": "8b93c9781f67f55959198402776ef58c"
  },
  {
    "url": "assets/js/app.f493e37d.js",
    "revision": "fdd35a9aaa9a94a901286e22e161ec78"
  },
  {
    "url": "base/1.api/1.env.html",
    "revision": "a004e701e7f6aadf534509061634d83c"
  },
  {
    "url": "base/1.api/1.index.html",
    "revision": "b3fad6b8864015c63d2d154dca5199f1"
  },
  {
    "url": "base/1.api/10.infer.html",
    "revision": "251dad83b5d58acc9c401b20fed118da"
  },
  {
    "url": "base/1.api/11.overlapping.html",
    "revision": "22c5c3f3354236b82c630877520821f0"
  },
  {
    "url": "base/1.api/12.condition.html",
    "revision": "2f86d1c16b807584c44fa78309182858"
  },
  {
    "url": "base/1.api/13.builtin.html",
    "revision": "51ed2f1703f3aa3396e7f4cef7014520"
  },
  {
    "url": "base/1.api/14.package.html",
    "revision": "843a76d228ed5d58bf3456e2137bf0da"
  },
  {
    "url": "base/1.api/15.custom.html",
    "revision": "3de56145cfdc61ca662f09de8ddf533c"
  },
  {
    "url": "base/1.api/16.unknown.html",
    "revision": "92382608fe7e5bdb36a81849a3692abc"
  },
  {
    "url": "base/1.api/17.module.html",
    "revision": "1c9e19998c4038989f6860c32e3ded3b"
  },
  {
    "url": "base/1.api/18.statement.html",
    "revision": "a27f87884f99b249218d583d61d977f8"
  },
  {
    "url": "base/1.api/19.extend.html",
    "revision": "bfe89592e0da327a481ed4dabec37257"
  },
  {
    "url": "base/1.api/2.base.html",
    "revision": "1a037b1f36ac4c82c327807e26a43c4c"
  },
  {
    "url": "base/1.api/3.deduction.html",
    "revision": "d51c2ad50c623c8075c0bfff48f8e0db"
  },
  {
    "url": "base/1.api/4.type.html",
    "revision": "296177b3304f49f22c98b4c3d3f2c7cd"
  },
  {
    "url": "base/1.api/5.class.html",
    "revision": "02c7356a3ef2909ce9c6b2ee2220b43b"
  },
  {
    "url": "base/1.api/6.interface.html",
    "revision": "8257ba6781813b43280916a09fc3edf9"
  },
  {
    "url": "base/1.api/7.generic.html",
    "revision": "428beb8dfe36461ba60e687b633e5757"
  },
  {
    "url": "base/1.api/8.compatible.html",
    "revision": "0588b20cb4610cc9e73a3f3a80d6944b"
  },
  {
    "url": "base/1.api/9.protect.html",
    "revision": "c43d7612750819f9fb89526a150df915"
  },
  {
    "url": "base/2.config/1.config.html",
    "revision": "8fd2913f7da2ddbdfaa69ceb363fe008"
  },
  {
    "url": "base/2.config/1.index.html",
    "revision": "f19cda18ff38a6fb39bd9280d8b82ce7"
  },
  {
    "url": "base/2.config/10.ui.html",
    "revision": "8b516819d862ad48d3ba59f5e2f2efe5"
  },
  {
    "url": "base/2.config/11.data.html",
    "revision": "224b5101eacef1cbd5de66dbe99cf0d8"
  },
  {
    "url": "base/2.config/12.skill.html",
    "revision": "5261f647071b1d0d8e076b79bde4211c"
  },
  {
    "url": "base/2.config/13.com.html",
    "revision": "b6a150d2df4e93ff3cf49a9754dedda2"
  },
  {
    "url": "base/2.config/14.data.html",
    "revision": "b7f12acd60663545db1c169a0358ff15"
  },
  {
    "url": "base/2.config/2.webpack.html",
    "revision": "015f8fa64a1464e8dfc0a042371c5567"
  },
  {
    "url": "base/2.config/3.file.html",
    "revision": "36b5f749e524db6e75312ed51bc43cf1"
  },
  {
    "url": "base/2.config/4.single.html",
    "revision": "ae73dfefd3dff0b3d0216a008b958b90"
  },
  {
    "url": "base/2.config/5.page.html",
    "revision": "af99e5a9f9e3fe4e6302ce3d4374c204"
  },
  {
    "url": "base/2.config/7.module.html",
    "revision": "fcae1f9716a841f0a114cf393624bd70"
  },
  {
    "url": "base/2.config/8.project.html",
    "revision": "55aefd7ecc4555e0633fb1ede7f16032"
  },
  {
    "url": "base/2.config/9.utils.html",
    "revision": "63dec7f0ef38027dc79732cc4e52b50b"
  },
  {
    "url": "base/3.react/1.index.html",
    "revision": "51cc3d14eb00c8ab2087bb123575772f"
  },
  {
    "url": "base/3.react/2.Jenkins.html",
    "revision": "7a592c3a7870b0f496e5123406117932"
  },
  {
    "url": "base/3.react/3.gitlab.html",
    "revision": "11065aba40e1752eba6f19b13c348234"
  },
  {
    "url": "base/3.react/i18n.html",
    "revision": "6debcf3736ae759e1ee160f02056225d"
  },
  {
    "url": "base/3.react/prem.html",
    "revision": "3f3d03d882e1ae2313f9e744413ccf86"
  },
  {
    "url": "base/3.react/test.html",
    "revision": "f9a4ed4dc126b735818bef9c72ea4a33"
  },
  {
    "url": "base/3.react/vscode.html",
    "revision": "368af9d81a2c3ccba498a2b11ffe93ec"
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
    "revision": "d778d320581e59b8012c6751be87a55e"
  },
  {
    "url": "mock/http.js",
    "revision": "c8abf8aba8039ff5bc6fa0517b076832"
  },
  {
    "url": "senior/npm/1.index.html",
    "revision": "1564a8602a148339ea8f13c6fbbc623b"
  },
  {
    "url": "senior/use/1.index.html",
    "revision": "b886bb63bc6430d2f104e90ac7514e65"
  },
  {
    "url": "senior/use/10.table.html",
    "revision": "c8de321cdbc22b0d2f62ed915df751e4"
  },
  {
    "url": "senior/use/11.tree.html",
    "revision": "54137b8d463eb07b9a4b1fd93bd7d5e5"
  },
  {
    "url": "senior/use/2.extend.html",
    "revision": "248072e013a8e83f269363bbed314988"
  },
  {
    "url": "senior/use/3.componentCommunication.html",
    "revision": "0f4e9b1ddaea3e25009f720e9d8cce2e"
  },
  {
    "url": "senior/use/4.render.html",
    "revision": "3d6bcd4656464238430e60102037aa06"
  },
  {
    "url": "senior/use/5.api.html",
    "revision": "2155b45003e21c260e1327c258f4bb2d"
  },
  {
    "url": "senior/use/6.form.html",
    "revision": "5392b632663b571c4f21d7d47979f6ef"
  },
  {
    "url": "senior/use/7.checkBox.html",
    "revision": "20179a8b0d3af4abf3acd910632e61ce"
  },
  {
    "url": "senior/use/8.active.html",
    "revision": "2feb0472e28d834fc6a75487f77e93df"
  },
  {
    "url": "senior/use/9.alert.html",
    "revision": "b99825402d40193a8f133eb2cae7067d"
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
