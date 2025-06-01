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
    "revision": "ed5e63098be74859f25f1380509e4f95"
  },
  {
    "url": "assets/css/0.styles.73ffc6f4.css",
    "revision": "b82b768813a4273d1ef27cebba20cf3c"
  },
  {
    "url": "assets/img/image-1.9a2677d6.png",
    "revision": "9a2677d68775cb94b5f03ed68feca49b"
  },
  {
    "url": "assets/img/image.25968334.png",
    "revision": "259683345741889eb97410c8f6261611"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.ca797407.js",
    "revision": "b173dc98722daafc131e4f190cc82224"
  },
  {
    "url": "assets/js/11.e7633870.js",
    "revision": "0cbaf9e87102bb87bb78b5ac1c181095"
  },
  {
    "url": "assets/js/12.2672a526.js",
    "revision": "dc65ffbf3483710f31d37822b29c90b0"
  },
  {
    "url": "assets/js/13.7f69effd.js",
    "revision": "80b91541044b63e0db767b70ec1afb52"
  },
  {
    "url": "assets/js/14.d96de51a.js",
    "revision": "48ee336397e860ebd1e52be9c112ea6a"
  },
  {
    "url": "assets/js/15.589db96b.js",
    "revision": "a8ce5910712d5a6ef034deab80ca739c"
  },
  {
    "url": "assets/js/16.a32e55bd.js",
    "revision": "7f8b3b71e311046233049bd0895d5446"
  },
  {
    "url": "assets/js/17.46570e99.js",
    "revision": "d3a1f4a71396692b0ace72628ff6643b"
  },
  {
    "url": "assets/js/18.1be08dd1.js",
    "revision": "c45d0098b21d7b090a83db23e7171870"
  },
  {
    "url": "assets/js/19.ac2a1be8.js",
    "revision": "0accf238135be359f085a13dd84ecf3b"
  },
  {
    "url": "assets/js/2.b44abf23.js",
    "revision": "9eabb1ed2da67779565fa8bd290607be"
  },
  {
    "url": "assets/js/20.f8e8238a.js",
    "revision": "1e1d8a4380b451d5f8581c05e37bd09d"
  },
  {
    "url": "assets/js/21.522e8b28.js",
    "revision": "ea490a23bde803a97999099fe648b60e"
  },
  {
    "url": "assets/js/22.f54cedcc.js",
    "revision": "2f4c38ece4ae82d8e86ded2e2eacc15d"
  },
  {
    "url": "assets/js/23.1c14b119.js",
    "revision": "8883825d2043e3ee876db5a939d9d1b0"
  },
  {
    "url": "assets/js/24.c286bb54.js",
    "revision": "c66ddd8eea785bb22f64fd6ff9792502"
  },
  {
    "url": "assets/js/25.e18ce25b.js",
    "revision": "0d4fc3f654782f3dfae0842237b153fd"
  },
  {
    "url": "assets/js/26.5989dd5d.js",
    "revision": "76f7d4e8055e07fa9e1aab1931f7e201"
  },
  {
    "url": "assets/js/27.8674c3ab.js",
    "revision": "516526966f5c9f24234a474e7b9fd52a"
  },
  {
    "url": "assets/js/28.7965e72f.js",
    "revision": "e3381497e52a1f18b7e3a0daf357abe0"
  },
  {
    "url": "assets/js/29.2e46880e.js",
    "revision": "4a5990c90d6dab9f45b168e04775f9d5"
  },
  {
    "url": "assets/js/3.a2c77c55.js",
    "revision": "316ce824fa7f549876acb25f61516954"
  },
  {
    "url": "assets/js/30.bf5cda72.js",
    "revision": "bc7418bab6eb855a4e97ebb52e57272c"
  },
  {
    "url": "assets/js/31.3d263f37.js",
    "revision": "6623c2e2db549de2189b8fb4d664f988"
  },
  {
    "url": "assets/js/32.c726d627.js",
    "revision": "c34c40ad589bb8941946d31df09b06e5"
  },
  {
    "url": "assets/js/33.ee3c03af.js",
    "revision": "cd0edac8f25c71e062f7fd6189ff1a13"
  },
  {
    "url": "assets/js/34.f895a966.js",
    "revision": "7d35fa9edfc01893d3391ac2d656d84b"
  },
  {
    "url": "assets/js/35.7832c8f1.js",
    "revision": "13195d839c229878efe4e944353523ad"
  },
  {
    "url": "assets/js/36.347ea7f2.js",
    "revision": "10e4f257e6113aa13b90581a32033d31"
  },
  {
    "url": "assets/js/37.2c4c0d7a.js",
    "revision": "d0ab8631c06ae5141c81da28d4d65b5a"
  },
  {
    "url": "assets/js/38.b3e08d35.js",
    "revision": "3b86b2ff3079456e743bbeac59b8a234"
  },
  {
    "url": "assets/js/39.34b66c5c.js",
    "revision": "06f976c2f7bf64a7eeae6ac55dcfa3fc"
  },
  {
    "url": "assets/js/4.eb5c941c.js",
    "revision": "aad94d87e4b311dda443c2e6cd801c73"
  },
  {
    "url": "assets/js/40.ecbe5e6b.js",
    "revision": "3f993675b216fac4c4b6ede9b17fd7ce"
  },
  {
    "url": "assets/js/41.5551a8e1.js",
    "revision": "777fe20380455ef5b44d267ef8feb60e"
  },
  {
    "url": "assets/js/42.a1ff5e23.js",
    "revision": "df0b5543e6f9e46724d6d6fec46b2372"
  },
  {
    "url": "assets/js/43.89f37ee7.js",
    "revision": "5abef1f040b34a378060bb58c334534e"
  },
  {
    "url": "assets/js/44.2e4349b1.js",
    "revision": "c03b4e8717b15ac5b06c57e912e40eda"
  },
  {
    "url": "assets/js/45.a0886643.js",
    "revision": "4f3baa67d5a97691626d8eb87bb71d30"
  },
  {
    "url": "assets/js/46.be125df7.js",
    "revision": "f50fde18dbad6b22f46bfeb5ba9dfe62"
  },
  {
    "url": "assets/js/47.e31c1983.js",
    "revision": "be3aabd634ced4917472a5a94dd64e7b"
  },
  {
    "url": "assets/js/48.5b91399b.js",
    "revision": "38e710bc9af3695916a2f8f376d89e22"
  },
  {
    "url": "assets/js/49.842848a7.js",
    "revision": "176a19e8d60cb7db3f8a2cef9b2ab342"
  },
  {
    "url": "assets/js/5.412f8114.js",
    "revision": "32bb5c3f54032213f3088e5fe3bf6f33"
  },
  {
    "url": "assets/js/50.61f013ef.js",
    "revision": "577897b635bd209633d6f843c67b50e3"
  },
  {
    "url": "assets/js/51.af8cc981.js",
    "revision": "bad74182597ed7d9280b64b500060850"
  },
  {
    "url": "assets/js/52.8dd1bf9a.js",
    "revision": "8929e0bc611f26ce2c96cb5709a6be26"
  },
  {
    "url": "assets/js/53.4d6bc473.js",
    "revision": "e97b01353bee02cc65d9ebc4303593c0"
  },
  {
    "url": "assets/js/54.fd523401.js",
    "revision": "0dec4b4595a3ed99cfee93427f316946"
  },
  {
    "url": "assets/js/55.d54bc8ed.js",
    "revision": "57322ed3e2e67a3d3f11f37fbd7141f8"
  },
  {
    "url": "assets/js/56.a8f77d6e.js",
    "revision": "b590d1cd4e836dc18c8378dbe9ee9e2b"
  },
  {
    "url": "assets/js/57.a21dc2cd.js",
    "revision": "4c73463a0ff66518673ccad3cc87e7c1"
  },
  {
    "url": "assets/js/58.fd4c5b93.js",
    "revision": "dc55550de1e3d7e334a33b79bfcf2967"
  },
  {
    "url": "assets/js/59.d0878247.js",
    "revision": "3eec606a2208e79dd5d4613443f2d11b"
  },
  {
    "url": "assets/js/6.dc20395f.js",
    "revision": "17bc7bb7deb438fc9273a43f302caf63"
  },
  {
    "url": "assets/js/60.1bdd17e4.js",
    "revision": "d9a44b3a732f6800d04222eeb6a259cc"
  },
  {
    "url": "assets/js/61.4ec5018b.js",
    "revision": "7c8972950fde2e314bfb2696501e6bac"
  },
  {
    "url": "assets/js/62.6e766a78.js",
    "revision": "66f7d361ec85bd266eca5b7fcc988314"
  },
  {
    "url": "assets/js/7.2523ccf7.js",
    "revision": "c6a07b8dd9f14893caf06edae2435535"
  },
  {
    "url": "assets/js/8.d813e106.js",
    "revision": "1978aa7017510476920429006ee34ba5"
  },
  {
    "url": "assets/js/9.14f654a0.js",
    "revision": "f2d1ab0ceba5c59c9693b896d8a58ed7"
  },
  {
    "url": "assets/js/app.dbf0aa86.js",
    "revision": "0bb5ed154204a2e861c49c98a313f657"
  },
  {
    "url": "base/1.api/1.env.html",
    "revision": "a7794a92fb3a7d9cc0f41f081b67d316"
  },
  {
    "url": "base/1.api/1.index.html",
    "revision": "e327c4d8bb95c1548216307795785455"
  },
  {
    "url": "base/1.api/10.infer.html",
    "revision": "672662426de9cf18b04bcc63f900906f"
  },
  {
    "url": "base/1.api/11.overlapping.html",
    "revision": "fb5ad6fcd4f4472c72df0be2cd3a2720"
  },
  {
    "url": "base/1.api/12.condition.html",
    "revision": "57866524f9636c7f9d0c2ae9d932ae1d"
  },
  {
    "url": "base/1.api/13.builtin.html",
    "revision": "4c6b3967fc057e1f6525991d477944b6"
  },
  {
    "url": "base/1.api/14.package.html",
    "revision": "f6db27fba51f3d6c76b7cc57e2b894f7"
  },
  {
    "url": "base/1.api/15.custom.html",
    "revision": "e632d4e5223dc10ccfe62290eec8b56c"
  },
  {
    "url": "base/1.api/16.unknown.html",
    "revision": "23637d7e01f1c33d5470ff472e64c01a"
  },
  {
    "url": "base/1.api/17.module.html",
    "revision": "207fbd8eaced89ca8fe42318818d2d2f"
  },
  {
    "url": "base/1.api/18.statement.html",
    "revision": "580f38a97e4d3478054147192dff6c9e"
  },
  {
    "url": "base/1.api/19.extend.html",
    "revision": "b8ab767dd59560fd74717d4f0f53186d"
  },
  {
    "url": "base/1.api/2.base.html",
    "revision": "b62d95a4debe82e2d8a2a3f5c41dc9cb"
  },
  {
    "url": "base/1.api/3.deduction.html",
    "revision": "26a6ff8e010e77d726aec3862fea64ed"
  },
  {
    "url": "base/1.api/4.type.html",
    "revision": "f689b695fdd567171a4a6fbfd5a032ef"
  },
  {
    "url": "base/1.api/5.class.html",
    "revision": "6bb9fc36b27e3002e43615cd598c7209"
  },
  {
    "url": "base/1.api/6.interface.html",
    "revision": "35d387ae1254a20724089bf9768fbdc5"
  },
  {
    "url": "base/1.api/7.generic.html",
    "revision": "b9da5b9e751820fda599d66dff826581"
  },
  {
    "url": "base/1.api/8.compatible.html",
    "revision": "0bf9b64527d3ac70ab0c8e05d70be825"
  },
  {
    "url": "base/1.api/9.protect.html",
    "revision": "96bd16e29b92f72e3097e12298896541"
  },
  {
    "url": "base/2.config/1.config.html",
    "revision": "22829a8bc433832811ae270c205957ad"
  },
  {
    "url": "base/2.config/1.index.html",
    "revision": "e84f574a08204329bcbc6ad9b2528777"
  },
  {
    "url": "base/2.config/10.ui.html",
    "revision": "c12a8f1654b3a2d2fa1b5b4d2239e258"
  },
  {
    "url": "base/2.config/11.data.html",
    "revision": "0932147b28456fa94799703521fd5b6a"
  },
  {
    "url": "base/2.config/12.skill.html",
    "revision": "59a4436687a3704eb53549ae35a77849"
  },
  {
    "url": "base/2.config/13.com.html",
    "revision": "172582c7443fe1052810c933c3d8f898"
  },
  {
    "url": "base/2.config/14.data.html",
    "revision": "0f0b1b6e75f6903e53eb82e69ec2db5c"
  },
  {
    "url": "base/2.config/2.webpack.html",
    "revision": "7f87c304a305091ba12c3e494334d799"
  },
  {
    "url": "base/2.config/3.file.html",
    "revision": "dbc8b484c482db365f6fb61864a4d973"
  },
  {
    "url": "base/2.config/4.single.html",
    "revision": "64141ca9ea14ce987fec7acfce3d8816"
  },
  {
    "url": "base/2.config/5.page.html",
    "revision": "98ffbd1160a93269fea28ec8b2ac336e"
  },
  {
    "url": "base/2.config/7.module.html",
    "revision": "85991b60af5138292ebeca7b686a69e5"
  },
  {
    "url": "base/2.config/8.project.html",
    "revision": "e566e5cdeab9ea25835cd7a3312b53a8"
  },
  {
    "url": "base/2.config/9.utils.html",
    "revision": "3bc12f8e4b07f940f5d42c1abeb45e5f"
  },
  {
    "url": "base/3.react/1.index.html",
    "revision": "1e66e58e0b7dcd00a156fa69ef9960fa"
  },
  {
    "url": "base/3.react/2.Jenkins.html",
    "revision": "c559e2a81a5213a2df2006352aeed683"
  },
  {
    "url": "base/3.react/3.gitlab.html",
    "revision": "7e7e92bc5dd61496dbf1fd06e4e009c7"
  },
  {
    "url": "base/3.react/i18n.html",
    "revision": "69cde2e636f917d80713a59c0ad7d871"
  },
  {
    "url": "base/3.react/prem.html",
    "revision": "75d433b57f8e906232d0c993f3aadbfa"
  },
  {
    "url": "base/3.react/test.html",
    "revision": "4d9946bbaf26617328ed9dbe843c4ec0"
  },
  {
    "url": "base/3.react/vscode.html",
    "revision": "b07de1ad1e99ecf3d7a1d174c2377321"
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
    "revision": "319bd3ff69c74869f43c3136bb5fc785"
  },
  {
    "url": "mock/http.js",
    "revision": "c8abf8aba8039ff5bc6fa0517b076832"
  },
  {
    "url": "project/react/1.index.html",
    "revision": "46434b76a6b014325e9f14d4750f15a6"
  },
  {
    "url": "project/vue/1.index.html",
    "revision": "3fb90a8e98deefb622dec2ac0c722b7d"
  },
  {
    "url": "project/vue/10.element-plus.html",
    "revision": "41e61c9b3623a123bc6a9fa1670e78b1"
  },
  {
    "url": "project/vue/11.tsx.html",
    "revision": "b4451dfe417ef248ce7a8575edcf6f8c"
  },
  {
    "url": "project/vue/2.ref.html",
    "revision": "21aab7aace674a7b4aa2d6bfa3ddc8f2"
  },
  {
    "url": "project/vue/3.props.html",
    "revision": "76474211dc1ad534b31a35ad42cb2ce8"
  },
  {
    "url": "project/vue/4.emits.html",
    "revision": "35943642d35d35d4168941594ac6dfd9"
  },
  {
    "url": "project/vue/5.component.html",
    "revision": "56cce3ce41f5cdc67f6eb41ce53f1bd7"
  },
  {
    "url": "project/vue/6.slot.html",
    "revision": "e8ee7097a8690af3b461016f3160f0cf"
  },
  {
    "url": "project/vue/7.vue-router.html",
    "revision": "d267c6ce2a5bec013f7864a07c6d848f"
  },
  {
    "url": "project/vue/8.tsconfig.html",
    "revision": "1f68d7dca29de410eb96f530b87708d5"
  },
  {
    "url": "project/vue/9.vuex.html",
    "revision": "ade08c5dffd88384e9fb92ee4f2d4873"
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
