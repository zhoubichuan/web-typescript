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
    "revision": "980d1e4d44d5e39d992e2ce4c85119ea"
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
    "url": "assets/js/11.07080756.js",
    "revision": "ae7d1be8c47d71002a9b0ac4841c2c2e"
  },
  {
    "url": "assets/js/12.6942e728.js",
    "revision": "f9b10cc1c74361de65c0813d00e4fdf2"
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
    "url": "assets/js/19.eb4aa2a6.js",
    "revision": "34f1ec57b94fda745a60e79efbac1c49"
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
    "url": "assets/js/29.6e8ace5f.js",
    "revision": "b4cc03bb75ef1b53c7a676cc4b7a1064"
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
    "url": "assets/js/31.e3f3e8b4.js",
    "revision": "5d61e2aed511491fe4a84cd05f7dde8b"
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
    "url": "assets/js/41.a9fbd4cb.js",
    "revision": "2b08d16226d7d90c9780cfd50a394028"
  },
  {
    "url": "assets/js/42.d37a6daa.js",
    "revision": "0b81de4b76f5e9cf1a1ecdb6105bb167"
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
    "url": "assets/js/52.c420b3f3.js",
    "revision": "426bc7a0b33b238a1fb7168029e32487"
  },
  {
    "url": "assets/js/53.49935e44.js",
    "revision": "b40d891baf5fddb6d91524ebe399300c"
  },
  {
    "url": "assets/js/54.7ea22905.js",
    "revision": "67084263b9ea7d16af05612627063a0a"
  },
  {
    "url": "assets/js/55.5850ac93.js",
    "revision": "4fcac22702f979c5002f64450a77884b"
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
    "url": "assets/js/app.658cc079.js",
    "revision": "38eee5c9d993f96e712923fa6735e747"
  },
  {
    "url": "base/1.api/1.env.html",
    "revision": "440e89f9c6f0c3adebd7d3559204f9ef"
  },
  {
    "url": "base/1.api/1.index.html",
    "revision": "4ac5857cf2a675555b4fc90454d13e0e"
  },
  {
    "url": "base/1.api/10.infer.html",
    "revision": "ba14a52b4b85225fff2dd088a1393f14"
  },
  {
    "url": "base/1.api/11.overlapping.html",
    "revision": "5ac212b051747275afd90ed00f3665ef"
  },
  {
    "url": "base/1.api/12.condition.html",
    "revision": "f6a3a753bedf10a8122791e2f46c9f9b"
  },
  {
    "url": "base/1.api/13.builtin.html",
    "revision": "bfbd4482ed2d141defaa3fa218357455"
  },
  {
    "url": "base/1.api/14.package.html",
    "revision": "72901bc49b149f785d7b236eda790dad"
  },
  {
    "url": "base/1.api/15.custom.html",
    "revision": "ed26ed9c77f586ed3bae72341dd23bfe"
  },
  {
    "url": "base/1.api/16.unknown.html",
    "revision": "86ca4dccf487e045eb44c72a05fd1103"
  },
  {
    "url": "base/1.api/17.module.html",
    "revision": "13afd62bd5e2a4e200ea869b39984d2e"
  },
  {
    "url": "base/1.api/18.statement.html",
    "revision": "11560bc01d1039af61f84a7c769f202b"
  },
  {
    "url": "base/1.api/19.extend.html",
    "revision": "5d0000dbf3fec2a9362c3e3d7373ad7b"
  },
  {
    "url": "base/1.api/2.base.html",
    "revision": "2502606148ace9acf7d39e953e1e377d"
  },
  {
    "url": "base/1.api/3.deduction.html",
    "revision": "4972c7d0dde90fd6bef1cfdcab602373"
  },
  {
    "url": "base/1.api/4.type.html",
    "revision": "7c0fb996c6dd5dcc7630c3313ecb75ba"
  },
  {
    "url": "base/1.api/5.class.html",
    "revision": "8f4450347cf848476e4e07e475d1bd21"
  },
  {
    "url": "base/1.api/6.interface.html",
    "revision": "c712bc23865dc952021d0d8dbabbe378"
  },
  {
    "url": "base/1.api/7.generic.html",
    "revision": "9b0e8c82d527e5b89acd51a227606226"
  },
  {
    "url": "base/1.api/8.compatible.html",
    "revision": "a288725cc03049de8194077c679a1527"
  },
  {
    "url": "base/1.api/9.protect.html",
    "revision": "c1429d4493b0ab42e95a6ae311046fa3"
  },
  {
    "url": "base/2.config/1.config.html",
    "revision": "20fe04cd3fcde77214bbb283a6984c6e"
  },
  {
    "url": "base/2.config/1.index.html",
    "revision": "c37034013e1a5e01621fbadf511ce9ed"
  },
  {
    "url": "base/2.config/10.ui.html",
    "revision": "985118225cdadff6242ceb9a59d5e7db"
  },
  {
    "url": "base/2.config/11.data.html",
    "revision": "db55985ae8e4f644c916950e6d1b25e9"
  },
  {
    "url": "base/2.config/12.skill.html",
    "revision": "8f8042b0f453dc509d3345218cfd89ee"
  },
  {
    "url": "base/2.config/13.com.html",
    "revision": "357814bc4660a8f30ee658f701528679"
  },
  {
    "url": "base/2.config/14.data.html",
    "revision": "ec1ae6251a3e2ffda8f1305445dbf248"
  },
  {
    "url": "base/2.config/2.webpack.html",
    "revision": "cc0e346f6ecf536580099c23ac16e100"
  },
  {
    "url": "base/2.config/3.file.html",
    "revision": "332a3f19e8afe7651d1c9e600d4b161f"
  },
  {
    "url": "base/2.config/4.single.html",
    "revision": "7bd614583553812c40a2e16b80c54d3f"
  },
  {
    "url": "base/2.config/5.page.html",
    "revision": "a19d7e0134f62d98bc174ef6818121e4"
  },
  {
    "url": "base/2.config/7.module.html",
    "revision": "d7833f452925b2985af4d3eb7f3d587d"
  },
  {
    "url": "base/2.config/8.project.html",
    "revision": "29aefd943ccf418d880ee8b4c205d56d"
  },
  {
    "url": "base/2.config/9.utils.html",
    "revision": "fa29ebf5da78b3704ae6de53a6972a3a"
  },
  {
    "url": "base/3.react/1.index.html",
    "revision": "3c896510d6cdf99e5af541a2a9306004"
  },
  {
    "url": "base/3.react/2.Jenkins.html",
    "revision": "4c1937b56c7fae32241292813196dea3"
  },
  {
    "url": "base/3.react/3.gitlab.html",
    "revision": "61c2002502ffb5e54756fe813edd1075"
  },
  {
    "url": "base/3.react/i18n.html",
    "revision": "a747d4669aaba56b95ac0b3554cae885"
  },
  {
    "url": "base/3.react/prem.html",
    "revision": "042047d6bb0cde815ece0b6e159368a3"
  },
  {
    "url": "base/3.react/test.html",
    "revision": "0a1297e21403cac8b426d3dd028faf47"
  },
  {
    "url": "base/3.react/vscode.html",
    "revision": "40a540f50423e0038cca368ee530c3f0"
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
    "revision": "7b164dff1f528ec7e1280f0915c8dd3a"
  },
  {
    "url": "mock/http.js",
    "revision": "c8abf8aba8039ff5bc6fa0517b076832"
  },
  {
    "url": "senior/npm/1.index.html",
    "revision": "b15a93f7b6fdc621b20f28ecaa42f990"
  },
  {
    "url": "senior/use/1.index.html",
    "revision": "f67b8a1049978842bd7fea806b2b1686"
  },
  {
    "url": "senior/use/10.table.html",
    "revision": "0015c5377ed1b16c1bac1308b9f673bc"
  },
  {
    "url": "senior/use/11.tree.html",
    "revision": "a1007fb5e36cca3622aed74a4e0ef920"
  },
  {
    "url": "senior/use/2.extend.html",
    "revision": "e7f319a07fee8e8b66740a813fd41335"
  },
  {
    "url": "senior/use/3.componentCommunication.html",
    "revision": "ab32d8aea2e8daa045dc39cae38a69f7"
  },
  {
    "url": "senior/use/4.render.html",
    "revision": "8e37428e79f2e8d222af04a93de78e11"
  },
  {
    "url": "senior/use/5.api.html",
    "revision": "43e910da1e4ebd361772063251337845"
  },
  {
    "url": "senior/use/6.form.html",
    "revision": "3061ecea5c993be7c534a363976fbbb4"
  },
  {
    "url": "senior/use/7.checkBox.html",
    "revision": "ee5e5ecfdbca47e7b6ba8f33c700ebb0"
  },
  {
    "url": "senior/use/8.active.html",
    "revision": "5c7c23053a0d79761316a65b18f7ca8e"
  },
  {
    "url": "senior/use/9.alert.html",
    "revision": "242194c56a2c5a7408c75e66a894ebf8"
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
