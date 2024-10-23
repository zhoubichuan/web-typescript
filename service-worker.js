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
    "revision": "c83edc20b9a7dafa355fc04943b5bc1f"
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
    "url": "assets/js/10.e12be21b.js",
    "revision": "f7b6897903f88c1e35af15fef0d29ddc"
  },
  {
    "url": "assets/js/11.83256b34.js",
    "revision": "0d7609dbe222e0146d8dc721cd7c6933"
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
    "url": "assets/js/15.5c96d596.js",
    "revision": "00fd29e7c6d6f5106d70e2aa8e0fd559"
  },
  {
    "url": "assets/js/16.b6fb0081.js",
    "revision": "e308133185e38314dcc6b17960079a56"
  },
  {
    "url": "assets/js/17.0e35c293.js",
    "revision": "c50ca6faaac5cbbfe76f06286cc26a6d"
  },
  {
    "url": "assets/js/18.58d7019e.js",
    "revision": "bd95aad8553151f8a6eb72ae9e85652e"
  },
  {
    "url": "assets/js/19.eb4aa2a6.js",
    "revision": "34f1ec57b94fda745a60e79efbac1c49"
  },
  {
    "url": "assets/js/2.c8c0c7e3.js",
    "revision": "bf3576487357da8939cf82eea38f445c"
  },
  {
    "url": "assets/js/20.933d69f0.js",
    "revision": "f623c5dac4b9ddc4c7877d93b55c2e7c"
  },
  {
    "url": "assets/js/21.69bce045.js",
    "revision": "3cd37afcb39bed94febd64a1959b55fc"
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
    "url": "assets/js/25.eecfb9ff.js",
    "revision": "7ddcc08888f7abee0ff9c63ec606ff5e"
  },
  {
    "url": "assets/js/26.03075fe0.js",
    "revision": "8a52681538310e03012091a66c89b1de"
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
    "url": "assets/js/34.e979563f.js",
    "revision": "0e1ac9a25e0b7d9dc9de264a091e5770"
  },
  {
    "url": "assets/js/35.14ee96e6.js",
    "revision": "c516e00136700d705659cc9e2bfc31c1"
  },
  {
    "url": "assets/js/36.ddd8062a.js",
    "revision": "7bb17ab3596e9dc37f47f0e59c95fa08"
  },
  {
    "url": "assets/js/37.22262aed.js",
    "revision": "eb685f02e304d7a65c3472c78dfab251"
  },
  {
    "url": "assets/js/38.a8d10229.js",
    "revision": "af5ae46ed52252c24620535418f77348"
  },
  {
    "url": "assets/js/39.98b0beb4.js",
    "revision": "44fa4a467a86bd5c7b337c35ad471146"
  },
  {
    "url": "assets/js/4.f06a870d.js",
    "revision": "5f8b6aef590e9dec19e854ef23ee6eb5"
  },
  {
    "url": "assets/js/40.d6dc5421.js",
    "revision": "cd1c5fd54dcf47f3bca50ae7c194b76e"
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
    "url": "assets/js/48.cbddffdf.js",
    "revision": "76af50e5d5afa17a255c8feb19bd002a"
  },
  {
    "url": "assets/js/49.85df0236.js",
    "revision": "d4487763b3dcdce93a9a07f0b428b7c9"
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
    "url": "assets/js/51.ac2ebd89.js",
    "revision": "6326ea01c74b3d3cfc68f47955e0df7a"
  },
  {
    "url": "assets/js/52.cfdfe4db.js",
    "revision": "d2ea839e6165a194fe0f590e740a6819"
  },
  {
    "url": "assets/js/53.269c0066.js",
    "revision": "bf63887eebf63a077f4efebacc10b9d7"
  },
  {
    "url": "assets/js/54.8d3b71aa.js",
    "revision": "0d69a8f0406baaa332b052d795864b07"
  },
  {
    "url": "assets/js/55.3520c930.js",
    "revision": "333ffe049d54a575ad2636563184de4a"
  },
  {
    "url": "assets/js/56.1e41328e.js",
    "revision": "782b86b7f27656b04f2c3e384d70bec3"
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
    "url": "assets/js/9.dcd6c83a.js",
    "revision": "08549ee0ea7b2a900125554d052bad66"
  },
  {
    "url": "assets/js/app.a82a86a8.js",
    "revision": "40b07aa6741f5df18dc2d0c05bc307dc"
  },
  {
    "url": "base/1.api/1.env.html",
    "revision": "658e9ed18daa1d09303defede672509c"
  },
  {
    "url": "base/1.api/1.index.html",
    "revision": "8604f0946bc7b6421b1e55f21e144e12"
  },
  {
    "url": "base/1.api/10.infer.html",
    "revision": "4543cb80f8c51bfa92011996c98bb804"
  },
  {
    "url": "base/1.api/11.overlapping.html",
    "revision": "b5f5acd76257ab6402c5603397d5be6b"
  },
  {
    "url": "base/1.api/12.condition.html",
    "revision": "6c92c46e258d43bec4aa2b0a0a7ce09e"
  },
  {
    "url": "base/1.api/13.builtin.html",
    "revision": "4e149993d612249cf9ff6975a2527571"
  },
  {
    "url": "base/1.api/14.package.html",
    "revision": "c549c3ecc3c25f283e4356801990c071"
  },
  {
    "url": "base/1.api/15.custom.html",
    "revision": "b72371fac98801248c3ae8a6fe948ec5"
  },
  {
    "url": "base/1.api/16.unknown.html",
    "revision": "0dc4ef23657fa0ba29f56bbc5ee5c69f"
  },
  {
    "url": "base/1.api/17.module.html",
    "revision": "11035ca77b7bbb330d34fe9b55692fce"
  },
  {
    "url": "base/1.api/18.statement.html",
    "revision": "8153da30f4c0dbae4eaffb8ec5ab4fff"
  },
  {
    "url": "base/1.api/19.extend.html",
    "revision": "091934a1192b99a03442845ddb92f790"
  },
  {
    "url": "base/1.api/2.base.html",
    "revision": "9766e5e3cb7c8c1e1ae01bea1d313e63"
  },
  {
    "url": "base/1.api/3.deduction.html",
    "revision": "03b37e96418e11f3e5eb453cc63c87d2"
  },
  {
    "url": "base/1.api/4.type.html",
    "revision": "efe35b076c67c41f251b756db3588094"
  },
  {
    "url": "base/1.api/5.class.html",
    "revision": "4c1a3e611fe68e6e6e8c12ba7210c15e"
  },
  {
    "url": "base/1.api/6.interface.html",
    "revision": "c801b71c0b3bde07ea353510fadbc779"
  },
  {
    "url": "base/1.api/7.generic.html",
    "revision": "c38a2e62bd5622bb6d0d21bbffd1480e"
  },
  {
    "url": "base/1.api/8.compatible.html",
    "revision": "b18e0d54e4259ebf22d255e5716d5a5e"
  },
  {
    "url": "base/1.api/9.protect.html",
    "revision": "3e8934162a7b8501afbc08584e9f905b"
  },
  {
    "url": "base/2.config/1.config.html",
    "revision": "5a911082181bbeea853a32802dde39b9"
  },
  {
    "url": "base/2.config/1.index.html",
    "revision": "dd66be2b67a0cf5afe6daa10ce444ffa"
  },
  {
    "url": "base/2.config/10.ui.html",
    "revision": "dc04e9d9f0c60e406393377cb90f49cd"
  },
  {
    "url": "base/2.config/11.data.html",
    "revision": "2d8cc362e82478a716f8cb339de899cc"
  },
  {
    "url": "base/2.config/12.skill.html",
    "revision": "142a3fd4ade3c127cdbd1326348b1390"
  },
  {
    "url": "base/2.config/13.com.html",
    "revision": "3d2dfbf8d894a1f5b083ce9b1cebea12"
  },
  {
    "url": "base/2.config/14.data.html",
    "revision": "ff1eee06bedbe137d83ee08fcaeba979"
  },
  {
    "url": "base/2.config/2.webpack.html",
    "revision": "df2f49dda22913a718da338a73e02679"
  },
  {
    "url": "base/2.config/3.file.html",
    "revision": "df6e5d1c9a1d856c9277690519800856"
  },
  {
    "url": "base/2.config/4.single.html",
    "revision": "ab2201c7821aba85fd19b73e657039ca"
  },
  {
    "url": "base/2.config/5.page.html",
    "revision": "df87a311662673bdd330697172640313"
  },
  {
    "url": "base/2.config/7.module.html",
    "revision": "d4c62c11c6153a60e325dc7205775ee6"
  },
  {
    "url": "base/2.config/8.project.html",
    "revision": "0aae45c9001a4c4c68ab8a5c93ba806c"
  },
  {
    "url": "base/2.config/9.utils.html",
    "revision": "5f2786a45de6ddf72452ea499283c5d5"
  },
  {
    "url": "base/3.react/1.index.html",
    "revision": "e13478101a17bc076eeed5d264f2f7c7"
  },
  {
    "url": "base/3.react/2.Jenkins.html",
    "revision": "abe3a72fc7ad490c8b2984f7f5c6070c"
  },
  {
    "url": "base/3.react/3.gitlab.html",
    "revision": "e18e9f522bd7a99472e26c104091827c"
  },
  {
    "url": "base/3.react/i18n.html",
    "revision": "4d692a11ffc34dfccbb2c79f9804d53c"
  },
  {
    "url": "base/3.react/prem.html",
    "revision": "a9128b10d7c4e424b52f9d3d7e15c5f3"
  },
  {
    "url": "base/3.react/test.html",
    "revision": "91e2b0beeabc9a9e737f09e4978399c8"
  },
  {
    "url": "base/3.react/vscode.html",
    "revision": "c9aaee31177c99cf9050858fdac4399a"
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
    "revision": "5a3006841ff65a125fc833a86e6de548"
  },
  {
    "url": "mock/http.js",
    "revision": "c8abf8aba8039ff5bc6fa0517b076832"
  },
  {
    "url": "senior/npm/1.index.html",
    "revision": "a4c2341118af39978fe376be278fe370"
  },
  {
    "url": "senior/use/1.index.html",
    "revision": "e2a5ca2bc4d02af7f9cdbc551959ed07"
  },
  {
    "url": "senior/use/10.table.html",
    "revision": "8dee170426a2e8457143925949896b69"
  },
  {
    "url": "senior/use/11.tree.html",
    "revision": "255927a10ce251945b3495b2be4ad717"
  },
  {
    "url": "senior/use/2.extend.html",
    "revision": "c27f9dfd600a4d5cd88014c65f1c64af"
  },
  {
    "url": "senior/use/3.componentCommunication.html",
    "revision": "845bde63335fe4a4c650883b54b7d24a"
  },
  {
    "url": "senior/use/4.render.html",
    "revision": "248191961c9d92974303b42fb01ec784"
  },
  {
    "url": "senior/use/5.api.html",
    "revision": "8095d67ff052d9774f230993c45fadf2"
  },
  {
    "url": "senior/use/6.form.html",
    "revision": "55462232be2d7722c8868ae6ae9de0ba"
  },
  {
    "url": "senior/use/7.checkBox.html",
    "revision": "11527393eca0c518da6d475803786639"
  },
  {
    "url": "senior/use/8.active.html",
    "revision": "c70e6edd8963a2de9f30ed31cc789749"
  },
  {
    "url": "senior/use/9.alert.html",
    "revision": "4ae90eefe523dc41477ec0a45ecf51b2"
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
