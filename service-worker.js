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
    "revision": "4f8fc08077533faf8f1433fafb49bf04"
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
    "url": "assets/js/10.62852d57.js",
    "revision": "bb1dd64a59fdcfeabd2e15cb5400ba55"
  },
  {
    "url": "assets/js/11.a748897e.js",
    "revision": "52db8f172521861d13868c8c8e57f651"
  },
  {
    "url": "assets/js/12.90bf7666.js",
    "revision": "4f9f3380d6c7ec45a46db8b5d5743080"
  },
  {
    "url": "assets/js/13.c7561396.js",
    "revision": "ecfb63aae838529f72db5e2f77b8c551"
  },
  {
    "url": "assets/js/14.4a82bd21.js",
    "revision": "b6e45f7743f4cd18ede43ff7b3037aa9"
  },
  {
    "url": "assets/js/15.35c3a928.js",
    "revision": "1e8c4be25d77f45fc1d3bc74f9d467a8"
  },
  {
    "url": "assets/js/16.e80046c7.js",
    "revision": "875cb5f45cee3fbd10d748002396dfac"
  },
  {
    "url": "assets/js/17.85f3fc91.js",
    "revision": "12e9de56c044d696887eb596307dee7d"
  },
  {
    "url": "assets/js/18.d7a34403.js",
    "revision": "57579fb9a70cabfee772fe184f9fe98c"
  },
  {
    "url": "assets/js/19.44899cf9.js",
    "revision": "0c937191619779f503c9de233ef966b4"
  },
  {
    "url": "assets/js/2.c8c0c7e3.js",
    "revision": "bf3576487357da8939cf82eea38f445c"
  },
  {
    "url": "assets/js/20.eba17561.js",
    "revision": "155e2f0fcc7e6cf1d119a13adf5ea7eb"
  },
  {
    "url": "assets/js/21.df3abeb2.js",
    "revision": "03f43d41775c6466498c3b13a9844207"
  },
  {
    "url": "assets/js/22.362b912a.js",
    "revision": "4b66fe37e0d9424312c42783556b8b93"
  },
  {
    "url": "assets/js/23.cac08baf.js",
    "revision": "5bda5f9153c7560a4cce68d56ca441fa"
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
    "url": "assets/js/27.5fc8fc65.js",
    "revision": "3b85f65015e04c52219a976c427e839f"
  },
  {
    "url": "assets/js/28.98575e21.js",
    "revision": "f80bbca3985f8e282d9c21573b68ac32"
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
    "url": "assets/js/31.6edafba8.js",
    "revision": "9b634e34ea52d708fd4e93f2fb32ceda"
  },
  {
    "url": "assets/js/32.25255bfa.js",
    "revision": "06baae19bc9338702884abd149b780b4"
  },
  {
    "url": "assets/js/33.15b34b40.js",
    "revision": "87d3b9ea6dd84122ac571ba963666fb1"
  },
  {
    "url": "assets/js/34.14af818f.js",
    "revision": "e76cf5ee75da486ee9d85b3755e340bf"
  },
  {
    "url": "assets/js/35.d58976e6.js",
    "revision": "d56ab1d1ad9649a397bbedb6ede92986"
  },
  {
    "url": "assets/js/36.8f12dfcd.js",
    "revision": "338407b6328b9e3752e53340a477962a"
  },
  {
    "url": "assets/js/37.0c8d05e7.js",
    "revision": "662521a9b8f43c2a97aa05bb3c2a1246"
  },
  {
    "url": "assets/js/38.c150f126.js",
    "revision": "64bbcb02610ad1e7e991600694c6eb11"
  },
  {
    "url": "assets/js/39.17586dc2.js",
    "revision": "c9b3f9f7a8a8a141ff28196f8c1895da"
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
    "url": "assets/js/53.bc0ecf97.js",
    "revision": "724e532b4a75736968a5e1c3aa675ab6"
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
    "url": "assets/js/56.da01fa34.js",
    "revision": "f8ba0d41553bd96569ed6b5d8ebc054c"
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
    "url": "assets/js/60.727f14f2.js",
    "revision": "4452b116fdf101278446d3f2ebe93d22"
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
    "url": "assets/js/9.951995b5.js",
    "revision": "2f2f337ee7f5462336ec3088eed1b6f7"
  },
  {
    "url": "assets/js/app.b43cfeae.js",
    "revision": "da794b28b8ed44953a1293cb42e02b8b"
  },
  {
    "url": "base/1.typescript/1.env.html",
    "revision": "deab3232b6bc1565b354b0e73ac52fb9"
  },
  {
    "url": "base/1.typescript/1.index.html",
    "revision": "3beac6e449b3dc4d50c936f4a900df15"
  },
  {
    "url": "base/1.typescript/10.infer.html",
    "revision": "09e05075284af54e674dbc69843ee31b"
  },
  {
    "url": "base/1.typescript/11.overlapping.html",
    "revision": "a278e99870715aad1eeb97cbf098ccc9"
  },
  {
    "url": "base/1.typescript/12.condition.html",
    "revision": "87a19f56e249b10d8c5f63bcce11e49a"
  },
  {
    "url": "base/1.typescript/13.builtin.html",
    "revision": "563327938e0a5a86bc8f3468907e065a"
  },
  {
    "url": "base/1.typescript/14.package.html",
    "revision": "734e29d4e41bf27c2997a6b7cbf9d5b8"
  },
  {
    "url": "base/1.typescript/15.custom.html",
    "revision": "09481f8effcf5fb108f0533329186aaa"
  },
  {
    "url": "base/1.typescript/16.unknown.html",
    "revision": "d9511d7d841e9b03ded9bc77997c400e"
  },
  {
    "url": "base/1.typescript/17.module.html",
    "revision": "734780ec3f3bc5102627ad6c807a9ff8"
  },
  {
    "url": "base/1.typescript/18.statement.html",
    "revision": "82625ab078a20d61cb64d36272036bc5"
  },
  {
    "url": "base/1.typescript/19.extend.html",
    "revision": "d327bbde97ac444d2bdb6524fef1e0cc"
  },
  {
    "url": "base/1.typescript/2.base.html",
    "revision": "3edcd32a361a85a1500c2e763c7c709d"
  },
  {
    "url": "base/1.typescript/3.deduction.html",
    "revision": "582429a6a5142c7f585256f852852e8b"
  },
  {
    "url": "base/1.typescript/4.type.html",
    "revision": "e21b3ec9d3783b4f806514c1f08c0776"
  },
  {
    "url": "base/1.typescript/5.class.html",
    "revision": "ff4f1feeb7e8d003d28c97570361adda"
  },
  {
    "url": "base/1.typescript/6.interface.html",
    "revision": "89625a4fd9e4a36cb949bb65d888f615"
  },
  {
    "url": "base/1.typescript/7.generic.html",
    "revision": "ad7ddf007cb920813755f3bc669e9192"
  },
  {
    "url": "base/1.typescript/8.compatible.html",
    "revision": "84a48fbc099925ed7da862aadfecc71b"
  },
  {
    "url": "base/1.typescript/9.protect.html",
    "revision": "89396f9fc12a6ff1e3f06d01c6955b49"
  },
  {
    "url": "base/2.vue/1.config.html",
    "revision": "4247680b1633dc2b50508a1c1b4259f0"
  },
  {
    "url": "base/2.vue/1.index.html",
    "revision": "5ab5413c0530f314753466b695ce6bb7"
  },
  {
    "url": "base/2.vue/10.ui.html",
    "revision": "4649f464c4df9edd9dd8369cc19ee5e3"
  },
  {
    "url": "base/2.vue/11.data.html",
    "revision": "3d732f3294860d75342f3d9c06db9aea"
  },
  {
    "url": "base/2.vue/12.skill.html",
    "revision": "d7e6354a4f37345bed2f02eb2caf0796"
  },
  {
    "url": "base/2.vue/13.com.html",
    "revision": "859dd0c136598b239d4639834bb674e5"
  },
  {
    "url": "base/2.vue/14.data.html",
    "revision": "ad370f65ba454271164a4e32dfc2b1c8"
  },
  {
    "url": "base/2.vue/2.webpack.html",
    "revision": "3d2468bdf37607f3c7f4f4d4fcb8673a"
  },
  {
    "url": "base/2.vue/3.file.html",
    "revision": "b1cbe6aec7abd150867ff90e8d466f31"
  },
  {
    "url": "base/2.vue/4.single.html",
    "revision": "47d86b5c09397047aaace710c7d2688a"
  },
  {
    "url": "base/2.vue/5.page.html",
    "revision": "00e6d795fe246be9c421493bc175cf4a"
  },
  {
    "url": "base/2.vue/7.module.html",
    "revision": "2199046e5c8d11fa96a7a8c02ee36c22"
  },
  {
    "url": "base/2.vue/8.project.html",
    "revision": "1d9c0e434cc9a0f0c653006b1a450671"
  },
  {
    "url": "base/2.vue/9.utils.html",
    "revision": "5c1ae9454c3f51717a09b229b64db8b1"
  },
  {
    "url": "base/3.react/1.index.html",
    "revision": "27eec2d6545159b943626cc727775ef0"
  },
  {
    "url": "base/3.react/2.Jenkins.html",
    "revision": "ebbccfac0b98b13a66478e72f23bd35a"
  },
  {
    "url": "base/3.react/3.gitlab.html",
    "revision": "266a189ab621e6b9a59dc6f72fb92ff1"
  },
  {
    "url": "base/3.react/i18n.html",
    "revision": "db143c22de3becd4a85f676d2589a9c8"
  },
  {
    "url": "base/3.react/prem.html",
    "revision": "5d268774eb80413029f977d0d2d2ac78"
  },
  {
    "url": "base/3.react/test.html",
    "revision": "616e6c68192b86f294e8859504ce9009"
  },
  {
    "url": "base/3.react/vscode.html",
    "revision": "505e4b5560ea66da12e2093215809d11"
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
    "revision": "c3065ed5aab4fcafba7e9295f0157b68"
  },
  {
    "url": "mock/http.js",
    "revision": "c8abf8aba8039ff5bc6fa0517b076832"
  },
  {
    "url": "senior/npm/1.index.html",
    "revision": "632f761652ed467de35fa22b16c831b7"
  },
  {
    "url": "senior/use/1.index.html",
    "revision": "5e9770e7239111b6f29a8d0f0b59218e"
  },
  {
    "url": "senior/use/10.table.html",
    "revision": "bcb5cded8ca1ed66fb1261aaf1f7bb5c"
  },
  {
    "url": "senior/use/11.tree.html",
    "revision": "8a7d7723ee4920675d900fd40299d5f6"
  },
  {
    "url": "senior/use/2.extend.html",
    "revision": "1c2c4ad8d6e0a6b3cff87766645f5973"
  },
  {
    "url": "senior/use/3.componentCommunication.html",
    "revision": "091ac28e336999a05aa4e621e1cd8b72"
  },
  {
    "url": "senior/use/4.render.html",
    "revision": "cb8a45384e3b30fe78794469db0c8c80"
  },
  {
    "url": "senior/use/5.api.html",
    "revision": "fdeb9e507ed404f5e7a9a0c51bc316ee"
  },
  {
    "url": "senior/use/6.form.html",
    "revision": "d06341987a9858fdb937cc81c60e7e6f"
  },
  {
    "url": "senior/use/7.checkBox.html",
    "revision": "5a9facc0ff601ef5f6c43e2914e58bfe"
  },
  {
    "url": "senior/use/8.active.html",
    "revision": "1f60f3f1f55e36271b45794060343dca"
  },
  {
    "url": "senior/use/9.alert.html",
    "revision": "df7bf62a3a3177fe651247e0c15e31f5"
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
