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
    "revision": "3797d8f1d8d8d726568ea37f48542551"
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
    "url": "assets/js/20.69fb1b29.js",
    "revision": "cb005231c7a9222a69110f19b3e8d846"
  },
  {
    "url": "assets/js/21.025927eb.js",
    "revision": "47183908526ef51920d0f15623bc9788"
  },
  {
    "url": "assets/js/22.0a54e5cf.js",
    "revision": "b2517d825ee20e4159cb2f9b3196dce9"
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
    "url": "assets/js/29.436075a5.js",
    "revision": "b81200d2531285c0ef07ceaa13944a4a"
  },
  {
    "url": "assets/js/3.384e845f.js",
    "revision": "fbf7f49d43a1979ecb3e6e97c2466f4b"
  },
  {
    "url": "assets/js/30.a48f6045.js",
    "revision": "52ca6e3b81f8391c7c442cfb81359359"
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
    "url": "assets/js/33.61361861.js",
    "revision": "7a8b6749eb2806ea1cb228d04fbb874e"
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
    "url": "assets/js/36.c5517cb5.js",
    "revision": "07ad8b0a95f1119b0639dc24d933727c"
  },
  {
    "url": "assets/js/37.2f17c633.js",
    "revision": "5884e275fd95a6a250a7bce193d08892"
  },
  {
    "url": "assets/js/38.306b0b8c.js",
    "revision": "f52471c8f9fe95a65aeacbe482683e37"
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
    "url": "assets/js/40.a9beb970.js",
    "revision": "86da574079cd29d9e92f312b96a93eff"
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
    "url": "assets/js/43.78365fb5.js",
    "revision": "beaa4f07c7d4d45caef643137d1a8499"
  },
  {
    "url": "assets/js/44.d9ad8516.js",
    "revision": "ad6424bb3447cb20fc7fd8dd04c3e8b4"
  },
  {
    "url": "assets/js/45.f8d046b2.js",
    "revision": "2005bff89b986ec87732902bb667e632"
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
    "url": "assets/js/52.7da65101.js",
    "revision": "f3717d87e8d02ed5bd030cd156584848"
  },
  {
    "url": "assets/js/53.269c0066.js",
    "revision": "bf63887eebf63a077f4efebacc10b9d7"
  },
  {
    "url": "assets/js/54.2dcea2b0.js",
    "revision": "4ba15b14933d8fb725672293a99ff96b"
  },
  {
    "url": "assets/js/55.14ac4d2a.js",
    "revision": "d0e553752db91460f97be09968254539"
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
    "url": "assets/js/59.88c41d91.js",
    "revision": "de0deebe03e75b948ba620ef9813bfbc"
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
    "url": "assets/js/app.df90fa99.js",
    "revision": "ba012bfb21132727e0c47a6f2594c16e"
  },
  {
    "url": "base/1.api/1.env.html",
    "revision": "d342a41d125255fa754b7e13629afc24"
  },
  {
    "url": "base/1.api/1.index.html",
    "revision": "e4a19905383e04d35a32ac85b270d1b3"
  },
  {
    "url": "base/1.api/10.infer.html",
    "revision": "d70abc492b53c77328b060a1bba4ad94"
  },
  {
    "url": "base/1.api/11.overlapping.html",
    "revision": "028d59914b45563e361e2d83b5bfae6e"
  },
  {
    "url": "base/1.api/12.condition.html",
    "revision": "102a04808115b83e29578e45ae8c9152"
  },
  {
    "url": "base/1.api/13.builtin.html",
    "revision": "38a45c46ac5b2d2ee3b68303cf3e2bbc"
  },
  {
    "url": "base/1.api/14.package.html",
    "revision": "b616fae667f8bd0bd51a72eb6d451e20"
  },
  {
    "url": "base/1.api/15.custom.html",
    "revision": "2cef742a75e6a25ec2b237e0ad44b8f3"
  },
  {
    "url": "base/1.api/16.unknown.html",
    "revision": "ed029ce42b9b6d53e18e7807d3c120cf"
  },
  {
    "url": "base/1.api/17.module.html",
    "revision": "1367872c50886b76a8d6e725cfa9a0f1"
  },
  {
    "url": "base/1.api/18.statement.html",
    "revision": "a91e290ee2184f79fa5b1b160c5db6b2"
  },
  {
    "url": "base/1.api/19.extend.html",
    "revision": "1d85d96eb84084815c6da496be906178"
  },
  {
    "url": "base/1.api/2.base.html",
    "revision": "35deb997e103515145c0faff10e7454d"
  },
  {
    "url": "base/1.api/3.deduction.html",
    "revision": "ad38f5837754e31f36f1c8f01cebd8a3"
  },
  {
    "url": "base/1.api/4.type.html",
    "revision": "52b55abbe32192d2ffe158a2651cf544"
  },
  {
    "url": "base/1.api/5.class.html",
    "revision": "286638284245bac2fe0175614ce35e3c"
  },
  {
    "url": "base/1.api/6.interface.html",
    "revision": "a421fe58a4ffb5d7e0e71875991be088"
  },
  {
    "url": "base/1.api/7.generic.html",
    "revision": "5d3e85ee9e4a5a8e7e6e3e35df347fe1"
  },
  {
    "url": "base/1.api/8.compatible.html",
    "revision": "ee7aa4ab9e97f8f88e345a2a27f241de"
  },
  {
    "url": "base/1.api/9.protect.html",
    "revision": "b02cd3fa0be743533fa5704418e533d4"
  },
  {
    "url": "base/2.config/1.config.html",
    "revision": "aea1b4948188b667e3eee0240d61021f"
  },
  {
    "url": "base/2.config/1.index.html",
    "revision": "9e846c81dee88a0959d9f6af280ac8ab"
  },
  {
    "url": "base/2.config/10.ui.html",
    "revision": "fcaa0a0b2dd37134cca338e84e517aa2"
  },
  {
    "url": "base/2.config/11.data.html",
    "revision": "9a4f70d4917ad113023c2668234d810f"
  },
  {
    "url": "base/2.config/12.skill.html",
    "revision": "ebd6186b2cf4b44a56af58231120e0cf"
  },
  {
    "url": "base/2.config/13.com.html",
    "revision": "aff3ee7bf4c6c77c8744a579d7247601"
  },
  {
    "url": "base/2.config/14.data.html",
    "revision": "2e787eedf977456f45149b5028088b86"
  },
  {
    "url": "base/2.config/2.webpack.html",
    "revision": "63a80885e6ff5f100067c110ea44d245"
  },
  {
    "url": "base/2.config/3.file.html",
    "revision": "f81a1155d3265970812b07a8bf47acc2"
  },
  {
    "url": "base/2.config/4.single.html",
    "revision": "e2ab2d6bd73dc416d1cdb7bfd77cdc94"
  },
  {
    "url": "base/2.config/5.page.html",
    "revision": "5f89e8d6d2a6a75033fbf59bf3c15542"
  },
  {
    "url": "base/2.config/7.module.html",
    "revision": "565fc48fe74f48418db91635d8d89005"
  },
  {
    "url": "base/2.config/8.project.html",
    "revision": "0ca145fb0ae8410266b2418f8586dddb"
  },
  {
    "url": "base/2.config/9.utils.html",
    "revision": "477c1e686760a23c4ae8a008e94972b7"
  },
  {
    "url": "base/3.react/1.index.html",
    "revision": "a82b42e7d4f1d60a4b07567fc37dda0a"
  },
  {
    "url": "base/3.react/2.Jenkins.html",
    "revision": "ebb074d249c0a4ccb594426f79b1b649"
  },
  {
    "url": "base/3.react/3.gitlab.html",
    "revision": "41c1fe04987a4a80801ef7746dfd3d76"
  },
  {
    "url": "base/3.react/i18n.html",
    "revision": "e950e6d4314b2f798d223359cb7a073f"
  },
  {
    "url": "base/3.react/prem.html",
    "revision": "b6a36a4a7e45ee71f1e7d9c2aff2c45d"
  },
  {
    "url": "base/3.react/test.html",
    "revision": "4ccf8817a18ce303e6894ae59e4f5c0c"
  },
  {
    "url": "base/3.react/vscode.html",
    "revision": "ea3f08fa15e43c2168f2929f0406a8ab"
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
    "revision": "58ae4a0da1cd58aa1970bd6cbd0604ab"
  },
  {
    "url": "mock/http.js",
    "revision": "c8abf8aba8039ff5bc6fa0517b076832"
  },
  {
    "url": "senior/npm/1.index.html",
    "revision": "5c1fd11c7ee27751aa8e4a2af3f63f10"
  },
  {
    "url": "senior/use/1.index.html",
    "revision": "866006e4f5509cf920dbb07caba7e482"
  },
  {
    "url": "senior/use/10.table.html",
    "revision": "ed13a6311062b17013afaeb80ea71683"
  },
  {
    "url": "senior/use/11.tree.html",
    "revision": "fe557ad07393a51af6fbbd506309f2bd"
  },
  {
    "url": "senior/use/2.extend.html",
    "revision": "09a7eb490e92285c1285bb8f2c66cd85"
  },
  {
    "url": "senior/use/3.componentCommunication.html",
    "revision": "2c74f1011fc1b310ca839d7e788d036d"
  },
  {
    "url": "senior/use/4.render.html",
    "revision": "ad7be3556f7d9b07b55320d620a457f3"
  },
  {
    "url": "senior/use/5.api.html",
    "revision": "d147e001690b9a1c9baab2e5be96e6f7"
  },
  {
    "url": "senior/use/6.form.html",
    "revision": "8f4adbeb815310c966d93426b2bd59f3"
  },
  {
    "url": "senior/use/7.checkBox.html",
    "revision": "247bae9bff44a01394f07217cf9aba48"
  },
  {
    "url": "senior/use/8.active.html",
    "revision": "144cf1db38b4ea1f25c9aa192f666aa8"
  },
  {
    "url": "senior/use/9.alert.html",
    "revision": "3837a129d69ae7d6821aba8b1348fc99"
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
