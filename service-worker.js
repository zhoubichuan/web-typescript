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
    "revision": "a42092675a8bcc54c0dd6efb438b3943"
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
    "url": "assets/js/12.76992a91.js",
    "revision": "509a6fac8c40bb50b460918184dd9f78"
  },
  {
    "url": "assets/js/13.7a471bdf.js",
    "revision": "48be05791b83be4f2b9fe1e65718e692"
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
    "url": "assets/js/20.fd07f721.js",
    "revision": "76ba4ebb4b204bf6dbb43ff947ba8f2c"
  },
  {
    "url": "assets/js/21.2f61a65a.js",
    "revision": "03f43d41775c6466498c3b13a9844207"
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
    "url": "assets/js/36.f080b129.js",
    "revision": "94581c5537f84affe877200f02499163"
  },
  {
    "url": "assets/js/37.6b007126.js",
    "revision": "ce888f02d1ebbecfca3ffbb605c34314"
  },
  {
    "url": "assets/js/38.306b0b8c.js",
    "revision": "f52471c8f9fe95a65aeacbe482683e37"
  },
  {
    "url": "assets/js/39.94337090.js",
    "revision": "4a4e080e0fb55fa27348bdc007919037"
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
    "url": "assets/js/41.fafd8bf3.js",
    "revision": "6cf9de7ceb4e8f01589f5953dde0e7ff"
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
    "url": "assets/js/45.2b3d7d96.js",
    "revision": "03fd02f82df1c59367f7b2b71c7bceac"
  },
  {
    "url": "assets/js/46.f92777d2.js",
    "revision": "93c813d3bdf531efd4010f9de68390a6"
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
    "url": "assets/js/50.d26e7d7e.js",
    "revision": "c310d24209244bb17d8e5db8f845db18"
  },
  {
    "url": "assets/js/51.4736916b.js",
    "revision": "cfc58c3a5774679887f7e3f55ddb5989"
  },
  {
    "url": "assets/js/52.cfdfe4db.js",
    "revision": "d2ea839e6165a194fe0f590e740a6819"
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
    "url": "assets/js/55.47e5e9b3.js",
    "revision": "66a1070b6f9b3fa77d7c8a8d10b8924a"
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
    "url": "assets/js/app.c08cdd01.js",
    "revision": "767847ca49fa5afe6cd2c66fddc0c6e5"
  },
  {
    "url": "base/1.api/1.env.html",
    "revision": "2cd8a74fd963c63c859b21a2369a8519"
  },
  {
    "url": "base/1.api/1.index.html",
    "revision": "555bbd1d48da723c1a71888fb5d0e084"
  },
  {
    "url": "base/1.api/10.infer.html",
    "revision": "f45a299287b8c08403dc2deeadafcba4"
  },
  {
    "url": "base/1.api/11.overlapping.html",
    "revision": "3491639ddd8e861bcb2d06325823c84d"
  },
  {
    "url": "base/1.api/12.condition.html",
    "revision": "f4aaedb76bed41e8c39042e6b2bd5be5"
  },
  {
    "url": "base/1.api/13.builtin.html",
    "revision": "cd859cacf86db3a4ebfc850d35fa06b3"
  },
  {
    "url": "base/1.api/14.package.html",
    "revision": "b0b76f6e8593be375d56e3b960f6d133"
  },
  {
    "url": "base/1.api/15.custom.html",
    "revision": "1f32d8e93e2c39d7dcb08b4d457e1e36"
  },
  {
    "url": "base/1.api/16.unknown.html",
    "revision": "4887a293ac83b209dc51991b2c8de88b"
  },
  {
    "url": "base/1.api/17.module.html",
    "revision": "3f586aed6673f99a3041530d3069c8ce"
  },
  {
    "url": "base/1.api/18.statement.html",
    "revision": "94b0a28cb28c7fdb77419a24c56c3d6d"
  },
  {
    "url": "base/1.api/19.extend.html",
    "revision": "2ce9bab84b0df955cf244abab4e0ae64"
  },
  {
    "url": "base/1.api/2.base.html",
    "revision": "41fcc8932dc35010a1d8996896b963db"
  },
  {
    "url": "base/1.api/3.deduction.html",
    "revision": "3450541eff52151474169d1fa6d29b2e"
  },
  {
    "url": "base/1.api/4.type.html",
    "revision": "6b2bcede1d668266f78ace45d597a9af"
  },
  {
    "url": "base/1.api/5.class.html",
    "revision": "0783def594aa21e6e354a6798c3cdb01"
  },
  {
    "url": "base/1.api/6.interface.html",
    "revision": "dc598b07085942271ffd8443a15310d3"
  },
  {
    "url": "base/1.api/7.generic.html",
    "revision": "6f1ee5db850c0e0006f831c4cbf7d9a0"
  },
  {
    "url": "base/1.api/8.compatible.html",
    "revision": "57b36aa9a6fd885f0c2ea154ae5f44e5"
  },
  {
    "url": "base/1.api/9.protect.html",
    "revision": "4696daaf584e6b5a631c9b1767d0faf6"
  },
  {
    "url": "base/2.config/1.config.html",
    "revision": "45a662670861a3cec7b3fff35ea2e1db"
  },
  {
    "url": "base/2.config/1.index.html",
    "revision": "b73c58fdd1e58a7e0adb9056a00b7361"
  },
  {
    "url": "base/2.config/10.ui.html",
    "revision": "5984334ac366e07b0cb6c29627001613"
  },
  {
    "url": "base/2.config/11.data.html",
    "revision": "b979c600a478ca99efca93c9e1a6c22c"
  },
  {
    "url": "base/2.config/12.skill.html",
    "revision": "53eadd3b330595280946371ab8aa7f8f"
  },
  {
    "url": "base/2.config/13.com.html",
    "revision": "2bc6ee52aa83d7b3446808070dd64a61"
  },
  {
    "url": "base/2.config/14.data.html",
    "revision": "68c3161a4b536bf899fa2d937372f59b"
  },
  {
    "url": "base/2.config/2.webpack.html",
    "revision": "7a13abc3e783340a1191ebfecdfe5136"
  },
  {
    "url": "base/2.config/3.file.html",
    "revision": "a3fd36acc6986303c8aff2cb2441db83"
  },
  {
    "url": "base/2.config/4.single.html",
    "revision": "23fcf1ec24928e3c4cbf2cfa4baf0aef"
  },
  {
    "url": "base/2.config/5.page.html",
    "revision": "01fe30fe7e7d3e70ed82898265cd5798"
  },
  {
    "url": "base/2.config/7.module.html",
    "revision": "c9d2696f302690005d0685a72457f1d4"
  },
  {
    "url": "base/2.config/8.project.html",
    "revision": "c43552148a162f8d17540db7e040eb3c"
  },
  {
    "url": "base/2.config/9.utils.html",
    "revision": "b7d686087431d39413ae5c75d425dab5"
  },
  {
    "url": "base/3.react/1.index.html",
    "revision": "05c6d954a562b044af0e5cd9ab9b3962"
  },
  {
    "url": "base/3.react/2.Jenkins.html",
    "revision": "2f4124b030e056921f3b43edef53f90a"
  },
  {
    "url": "base/3.react/3.gitlab.html",
    "revision": "7dffdd0593ab3f2ab82f6332bb6cf81a"
  },
  {
    "url": "base/3.react/i18n.html",
    "revision": "1c8babae9d20de32bcd65f93e61df0c4"
  },
  {
    "url": "base/3.react/prem.html",
    "revision": "c295e46a861ed13095330d49f1a5cc76"
  },
  {
    "url": "base/3.react/test.html",
    "revision": "8ff2a98b79456952f38eb1cb91404789"
  },
  {
    "url": "base/3.react/vscode.html",
    "revision": "9837c675edb9fa5621edbeb3088a8864"
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
    "revision": "30e9edef11ded4a9e10809c82c100f12"
  },
  {
    "url": "mock/http.js",
    "revision": "c8abf8aba8039ff5bc6fa0517b076832"
  },
  {
    "url": "senior/npm/1.index.html",
    "revision": "b7a080f00db631f162f2d10d87a0a847"
  },
  {
    "url": "senior/use/1.index.html",
    "revision": "6081005a163fdcbc5bb499423b231442"
  },
  {
    "url": "senior/use/10.table.html",
    "revision": "7a1a73d2783b6858c147a7c609830943"
  },
  {
    "url": "senior/use/11.tree.html",
    "revision": "ac6aa5532bdd51a09138c884974ffb7d"
  },
  {
    "url": "senior/use/2.extend.html",
    "revision": "d3d9f504f842ab2e5ece4736ef6a6e68"
  },
  {
    "url": "senior/use/3.componentCommunication.html",
    "revision": "0c80c357ed1f92ed4e67b89a4b095896"
  },
  {
    "url": "senior/use/4.render.html",
    "revision": "c2c01cf26153e09fe9d050524f35ee73"
  },
  {
    "url": "senior/use/5.api.html",
    "revision": "e031274e31f778d052b48494b4298d5e"
  },
  {
    "url": "senior/use/6.form.html",
    "revision": "8fdf5ee5c669dc0026c93d38edddc566"
  },
  {
    "url": "senior/use/7.checkBox.html",
    "revision": "9f092d0bc04ff8fa5112272d9f2cd541"
  },
  {
    "url": "senior/use/8.active.html",
    "revision": "e33a52830feae0ab631858d27e0fd590"
  },
  {
    "url": "senior/use/9.alert.html",
    "revision": "b5d7d32f9ccb7d1bd25c63a0b8109138"
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
