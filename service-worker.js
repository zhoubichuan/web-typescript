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
    "revision": "89474e54c1d984712b97c914b0e16417"
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
    "url": "assets/js/10.1e3fc7a8.js",
    "revision": "3052ddb36c05926b5a96bd99b5be6e24"
  },
  {
    "url": "assets/js/11.01fa0ac9.js",
    "revision": "000ce175128be949e8abf04a7adacfac"
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
    "url": "assets/js/19.3ddf04c3.js",
    "revision": "a1e543816cd5f1be10f1381582fbf8c8"
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
    "url": "assets/js/21.ddccb7ee.js",
    "revision": "c3878ce7518f383cea77e922d5d54e3c"
  },
  {
    "url": "assets/js/22.8ac8861c.js",
    "revision": "771d88bcf2ee5e8aed76ece0115dc606"
  },
  {
    "url": "assets/js/23.3b4d65ad.js",
    "revision": "e3b135960f913009156e42822fa86097"
  },
  {
    "url": "assets/js/24.5421a65e.js",
    "revision": "ba80196fcc3a3f0f8a99a8540fe1cff0"
  },
  {
    "url": "assets/js/25.eecfb9ff.js",
    "revision": "7ddcc08888f7abee0ff9c63ec606ff5e"
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
    "url": "assets/js/29.6d00dd78.js",
    "revision": "ef2f7de3a8b38b7ead938b543bd4cc45"
  },
  {
    "url": "assets/js/3.384e845f.js",
    "revision": "fbf7f49d43a1979ecb3e6e97c2466f4b"
  },
  {
    "url": "assets/js/30.1049993c.js",
    "revision": "7fddcc755aa8519611a01f252a3fb2b5"
  },
  {
    "url": "assets/js/31.202e5b4a.js",
    "revision": "393541217030054f4818cd25d0d95e65"
  },
  {
    "url": "assets/js/32.cdda11d2.js",
    "revision": "a4a6877fb42f524707e5a737de3cb143"
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
    "url": "assets/js/42.5d209fcc.js",
    "revision": "0c317a7ef7e18613a9501a48ac044091"
  },
  {
    "url": "assets/js/43.795b3cde.js",
    "revision": "0e24ef99e0e90edbc29c76530ae1ef46"
  },
  {
    "url": "assets/js/44.0e91055c.js",
    "revision": "d923e0a4a60050b17d3220c3cfdccbf3"
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
    "url": "assets/js/49.bcae90c7.js",
    "revision": "c535313cf5903fa4592cb36e7448fb9e"
  },
  {
    "url": "assets/js/5.a77092f8.js",
    "revision": "ae5031fb37a8390b1f1c7673242b3d72"
  },
  {
    "url": "assets/js/50.afef6d89.js",
    "revision": "0bb78f4cf15da97d02227574763730df"
  },
  {
    "url": "assets/js/51.05f092e8.js",
    "revision": "74cb8069070a79cab63555715673464d"
  },
  {
    "url": "assets/js/52.0bad8bd5.js",
    "revision": "93a3ea60951fba472bd3cb2e76e7e99e"
  },
  {
    "url": "assets/js/53.5bee6896.js",
    "revision": "af249cc0ab6c9fac878be720981ac6dc"
  },
  {
    "url": "assets/js/54.06fd4a80.js",
    "revision": "db0e40f451f73824dbfac7ba7d5a527b"
  },
  {
    "url": "assets/js/55.ebc024a5.js",
    "revision": "0c3df23f97600e87f1bf9e6d0bc842aa"
  },
  {
    "url": "assets/js/56.02d09f0f.js",
    "revision": "fb05b2d46cf33a947d50ba7cdd0752c0"
  },
  {
    "url": "assets/js/57.e0b6a44d.js",
    "revision": "d1cafaac7b3a857b0dff10d7834a24e5"
  },
  {
    "url": "assets/js/58.e32b2767.js",
    "revision": "b8bb4f414f381644c86d2708e1f0ef6f"
  },
  {
    "url": "assets/js/59.9a387434.js",
    "revision": "5e6e6d2737576992b77a016bfbf951a8"
  },
  {
    "url": "assets/js/6.1c84d7c2.js",
    "revision": "86ca71003c238d89eb80ce3c3a718e46"
  },
  {
    "url": "assets/js/60.9f1e98e7.js",
    "revision": "6a9f7d51fda56ca1386e54215e12caba"
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
    "url": "assets/js/app.27e97122.js",
    "revision": "0c20dd9d432d7424619d48ce20296949"
  },
  {
    "url": "base/1.api/1.env.html",
    "revision": "d7e1c8384857748b0fad1a205533261a"
  },
  {
    "url": "base/1.api/1.index.html",
    "revision": "05b331c9cd8dc66eedb60ae9ae24cef3"
  },
  {
    "url": "base/1.api/10.infer.html",
    "revision": "a7a53b85f2c7b5a2d9298bf69ed819c9"
  },
  {
    "url": "base/1.api/11.overlapping.html",
    "revision": "355ef0dfc1fe774664973593208ade67"
  },
  {
    "url": "base/1.api/12.condition.html",
    "revision": "2ae3b36fb8a9dbd5e599585fe3a067aa"
  },
  {
    "url": "base/1.api/13.builtin.html",
    "revision": "5bf6df3cde30de820a27131cb62590f4"
  },
  {
    "url": "base/1.api/14.package.html",
    "revision": "dc160599c26012228674d80a3a7a9a58"
  },
  {
    "url": "base/1.api/15.custom.html",
    "revision": "a8c3755c2c438023ba4ff984e1bdbc39"
  },
  {
    "url": "base/1.api/16.unknown.html",
    "revision": "cc0a4dc05cf4dbf99ea318ab1f623a44"
  },
  {
    "url": "base/1.api/17.module.html",
    "revision": "3395c79aa91f69a76d6b1c80d98b9c5b"
  },
  {
    "url": "base/1.api/18.statement.html",
    "revision": "853a9a8d14f621e26440ad3011a9eeaa"
  },
  {
    "url": "base/1.api/19.extend.html",
    "revision": "a424c1f99aa5eab35489c308cc52f5ae"
  },
  {
    "url": "base/1.api/2.base.html",
    "revision": "9a6890997373dd8a9577d9ba65d4d98c"
  },
  {
    "url": "base/1.api/3.deduction.html",
    "revision": "4f98dfce10fe387a5d5f0fc2d70c3df3"
  },
  {
    "url": "base/1.api/4.type.html",
    "revision": "dc1d9e5e84f3f160b0bddc2a68312e43"
  },
  {
    "url": "base/1.api/5.class.html",
    "revision": "0d4b53bf5a68c20a783a79fb5a8f31bb"
  },
  {
    "url": "base/1.api/6.interface.html",
    "revision": "599419125cc4ac4798a0eb83960b82ae"
  },
  {
    "url": "base/1.api/7.generic.html",
    "revision": "9ea3ebf5204f7c3b684359e941f15e0f"
  },
  {
    "url": "base/1.api/8.compatible.html",
    "revision": "b0b3e7404246ef79fb201a153bee8d67"
  },
  {
    "url": "base/1.api/9.protect.html",
    "revision": "093e57110552f02676ff3f67ba16f40e"
  },
  {
    "url": "base/2.config/1.config.html",
    "revision": "a4a1405ee32a596f5d28e6ae67d8df05"
  },
  {
    "url": "base/2.config/1.index.html",
    "revision": "7bf24bcdb4e081213605630a7e72526a"
  },
  {
    "url": "base/2.config/10.ui.html",
    "revision": "7d5ae35ce0099b77f24193f428f771a1"
  },
  {
    "url": "base/2.config/11.data.html",
    "revision": "1797189f5f2394d2c5f1f85849d1cc47"
  },
  {
    "url": "base/2.config/12.skill.html",
    "revision": "2fa9b4790a6f2fd953ea29a5659a38bb"
  },
  {
    "url": "base/2.config/13.com.html",
    "revision": "b7107709b6111efa182aa8c787c7ec4d"
  },
  {
    "url": "base/2.config/14.data.html",
    "revision": "4355581985e0e417bce444ad98709039"
  },
  {
    "url": "base/2.config/2.webpack.html",
    "revision": "edd60d843e603a56c122eb91c479868d"
  },
  {
    "url": "base/2.config/3.file.html",
    "revision": "e7865c4dacbca3924495e5e405df3abe"
  },
  {
    "url": "base/2.config/4.single.html",
    "revision": "c493e2fd181c72688f7995926eaccf92"
  },
  {
    "url": "base/2.config/5.page.html",
    "revision": "2ed5b17a0d2c17dabc4acc548d9389dc"
  },
  {
    "url": "base/2.config/7.module.html",
    "revision": "3ac070ef5a17d49e6fa0f876cf135ec1"
  },
  {
    "url": "base/2.config/8.project.html",
    "revision": "19b4f596440c60eb502aed1a2fbca368"
  },
  {
    "url": "base/2.config/9.utils.html",
    "revision": "0a3aa708617293b06780a9145e83d995"
  },
  {
    "url": "base/3.react/1.index.html",
    "revision": "069db19fafb26f13b4d599d1c3ba5788"
  },
  {
    "url": "base/3.react/2.Jenkins.html",
    "revision": "ed97acfca498743d5e926b469688bed3"
  },
  {
    "url": "base/3.react/3.gitlab.html",
    "revision": "c28bda9b19cb86b50f2b0cb492a1007a"
  },
  {
    "url": "base/3.react/i18n.html",
    "revision": "0977f5179ed494644b0887b146668999"
  },
  {
    "url": "base/3.react/prem.html",
    "revision": "f345d50a21d5a0a3e15a2e562bebef79"
  },
  {
    "url": "base/3.react/test.html",
    "revision": "aea56118408fb067254923e2c53969b6"
  },
  {
    "url": "base/3.react/vscode.html",
    "revision": "adac3e94293e9fca06c03b143fdf8865"
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
    "revision": "24d5528082e3aeb921a1dce67cdbf15b"
  },
  {
    "url": "mock/http.js",
    "revision": "c8abf8aba8039ff5bc6fa0517b076832"
  },
  {
    "url": "senior/npm/1.index.html",
    "revision": "236b820432c18337d29612881f18b445"
  },
  {
    "url": "senior/use/1.index.html",
    "revision": "b906a9535976dbb1313425f88b299b69"
  },
  {
    "url": "senior/use/10.table.html",
    "revision": "ddd191e01af2115163e3c060de84302c"
  },
  {
    "url": "senior/use/11.tree.html",
    "revision": "ac0d90a3c0dc166e073a1184ff733eb3"
  },
  {
    "url": "senior/use/2.extend.html",
    "revision": "f998b57e164ff964ab4881f30c81fe19"
  },
  {
    "url": "senior/use/3.componentCommunication.html",
    "revision": "f923c4001ecaef3b799c9371ab92769a"
  },
  {
    "url": "senior/use/4.render.html",
    "revision": "8cffd7103b62f1cd51ef6f005e368688"
  },
  {
    "url": "senior/use/5.api.html",
    "revision": "8c27734af758c3d3f1764023269ccc9d"
  },
  {
    "url": "senior/use/6.form.html",
    "revision": "c4f7cad04c30a46e70e1358d35df4731"
  },
  {
    "url": "senior/use/7.checkBox.html",
    "revision": "cc1b4af980302046c535694d1c67f503"
  },
  {
    "url": "senior/use/8.active.html",
    "revision": "94c822a8ca20d264db6ed1f41c871ef9"
  },
  {
    "url": "senior/use/9.alert.html",
    "revision": "a9e9b0a8cb1884949263385da159a3d3"
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
