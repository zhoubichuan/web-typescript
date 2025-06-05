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
    "revision": "9277c00ee6f79ad3cf2844ed0e2b8faa"
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
    "url": "assets/js/10.e8aa3f06.js",
    "revision": "dc71ac636c39e763758f59c3a972d99c"
  },
  {
    "url": "assets/js/11.74bbccd7.js",
    "revision": "78f006a8c1be068b492dbc22a80df189"
  },
  {
    "url": "assets/js/12.356ae2eb.js",
    "revision": "4beae66c8a2907c25fd2ba7d5f2b1e1e"
  },
  {
    "url": "assets/js/13.11038d5b.js",
    "revision": "0a43c24878c518fd19b39513079fed67"
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
    "url": "assets/js/16.0631e449.js",
    "revision": "31f53d8b763575214da35a95be340433"
  },
  {
    "url": "assets/js/17.e9860f4d.js",
    "revision": "771a16c3dd41f9b335ebc44945a3d619"
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
    "url": "assets/js/20.99ec2768.js",
    "revision": "02fe17c9900bf7d2e890ea84b019b232"
  },
  {
    "url": "assets/js/21.3b2482b8.js",
    "revision": "8b023ba8e2d9665fd9d6ff01b0744712"
  },
  {
    "url": "assets/js/22.3d9bfb2e.js",
    "revision": "2e2d29476487260d91873fad3a711dca"
  },
  {
    "url": "assets/js/23.bebf39ad.js",
    "revision": "954f564963ed5ebd258499a3aa848db7"
  },
  {
    "url": "assets/js/24.c286bb54.js",
    "revision": "c66ddd8eea785bb22f64fd6ff9792502"
  },
  {
    "url": "assets/js/25.0d865d24.js",
    "revision": "16c843b8320f8c25046276273325bbbd"
  },
  {
    "url": "assets/js/26.f92efdad.js",
    "revision": "1cd60a788ac6449503c1689025a78452"
  },
  {
    "url": "assets/js/27.8674c3ab.js",
    "revision": "516526966f5c9f24234a474e7b9fd52a"
  },
  {
    "url": "assets/js/28.3317138f.js",
    "revision": "f83941a95c97ace4d151438e0f3d12e1"
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
    "url": "assets/js/30.5febd9e8.js",
    "revision": "f86aab7e7951d01073594235b6e7319e"
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
    "url": "assets/js/35.045678e1.js",
    "revision": "df05e3130440f52869d11bb30015fe8e"
  },
  {
    "url": "assets/js/36.347ea7f2.js",
    "revision": "10e4f257e6113aa13b90581a32033d31"
  },
  {
    "url": "assets/js/37.73f2a813.js",
    "revision": "ff979012c692efaa1d18f252708360f7"
  },
  {
    "url": "assets/js/38.207c3d61.js",
    "revision": "39c6aea2aa490f4549002a5e624d5564"
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
    "url": "assets/js/41.55d6c87d.js",
    "revision": "aea43d5765f2d9d365e270d27ddc0f9f"
  },
  {
    "url": "assets/js/42.b241825d.js",
    "revision": "e64b05685345a362b2c80be623f8904c"
  },
  {
    "url": "assets/js/43.ce8c9577.js",
    "revision": "7f0c5a1c0de86a4bf4870baaf0ee31cd"
  },
  {
    "url": "assets/js/44.c1331a00.js",
    "revision": "328df58fc439649b133fe5e4ea78162f"
  },
  {
    "url": "assets/js/45.af956ec2.js",
    "revision": "f81cdc9cf5de2de18a7f1f7cd83ee53f"
  },
  {
    "url": "assets/js/46.9967a28b.js",
    "revision": "491bae196d49ad32c9ea6bbba40e0927"
  },
  {
    "url": "assets/js/47.b1d840fb.js",
    "revision": "dd10ea5c007c1da968eea935b0002165"
  },
  {
    "url": "assets/js/48.cbf7b789.js",
    "revision": "3c2cda53e355fd1c435160aa89024772"
  },
  {
    "url": "assets/js/49.fd2d76d2.js",
    "revision": "49a5a3d0a250e64af90426e51e22467d"
  },
  {
    "url": "assets/js/5.412f8114.js",
    "revision": "32bb5c3f54032213f3088e5fe3bf6f33"
  },
  {
    "url": "assets/js/50.ad253bd1.js",
    "revision": "b56f70c5e2c8bd9b9865fedcc65097ba"
  },
  {
    "url": "assets/js/51.86253dda.js",
    "revision": "614d67f43f3f4c38fe6865835fbc3afc"
  },
  {
    "url": "assets/js/52.f76e11b9.js",
    "revision": "e52b2515c6b6b62601b3cb9f86906f48"
  },
  {
    "url": "assets/js/53.9b10f036.js",
    "revision": "445c9fdb0922dc922d85985ccaa7b108"
  },
  {
    "url": "assets/js/54.75e916e4.js",
    "revision": "ef8475eca4a34f5b6364d430319068e3"
  },
  {
    "url": "assets/js/55.779ff6cc.js",
    "revision": "1a2e29bebbc7d1f52647f0fd202ec247"
  },
  {
    "url": "assets/js/56.1dedf088.js",
    "revision": "96a9e740b7389f7f7f3b20cf59863cda"
  },
  {
    "url": "assets/js/57.71c735e1.js",
    "revision": "994e75cd80af8ab8333aa33f8bbc814b"
  },
  {
    "url": "assets/js/58.8c22ff34.js",
    "revision": "16e597263a469a1c9541030d58d2f96e"
  },
  {
    "url": "assets/js/59.542b7162.js",
    "revision": "82f242bfe7145e31bfb51780bf5c597f"
  },
  {
    "url": "assets/js/6.dc20395f.js",
    "revision": "17bc7bb7deb438fc9273a43f302caf63"
  },
  {
    "url": "assets/js/60.97b4e63e.js",
    "revision": "bdd2613b1aaec710bf15ba091707250d"
  },
  {
    "url": "assets/js/61.28007837.js",
    "revision": "cf8d176c094c952c9a4c6f0aa09e9369"
  },
  {
    "url": "assets/js/62.6e766a78.js",
    "revision": "66f7d361ec85bd266eca5b7fcc988314"
  },
  {
    "url": "assets/js/7.475fc12e.js",
    "revision": "3af4fd4ea7a60f4109654e18cd67881e"
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
    "url": "assets/js/app.e4b03d28.js",
    "revision": "68be4a163119901e68e6f4abc79c1ae2"
  },
  {
    "url": "base/1.api/1.env.html",
    "revision": "52cfdd88719149493bd1a9746ee5735d"
  },
  {
    "url": "base/1.api/1.index.html",
    "revision": "d807cd90b08149fcdae0abed3409c5be"
  },
  {
    "url": "base/1.api/10.infer.html",
    "revision": "d3dd3d504a06e1f814940e0e7049693d"
  },
  {
    "url": "base/1.api/11.overlapping.html",
    "revision": "9c0987d62cedd3944d36f8ae87995c47"
  },
  {
    "url": "base/1.api/12.condition.html",
    "revision": "1a747cd40992a0f91f8979677416e1d9"
  },
  {
    "url": "base/1.api/13.builtin.html",
    "revision": "a40f98b8c78adcad5da3f4bd12c6cb8e"
  },
  {
    "url": "base/1.api/14.package.html",
    "revision": "5f439ffbc07eab15f4f92e2b81e30d50"
  },
  {
    "url": "base/1.api/15.custom.html",
    "revision": "81df50687b3a1d39d0877f8d4fa3ef5d"
  },
  {
    "url": "base/1.api/16.unknown.html",
    "revision": "826faeda93922236c69eee71da962bc1"
  },
  {
    "url": "base/1.api/17.module.html",
    "revision": "adcd5bf20abd303e5db5ed09936e4545"
  },
  {
    "url": "base/1.api/18.statement.html",
    "revision": "eaef02aa9e187116c3360928856a910c"
  },
  {
    "url": "base/1.api/19.extend.html",
    "revision": "12c5a444ebe1d23ec2dea866649a3872"
  },
  {
    "url": "base/1.api/2.base.html",
    "revision": "7f9bbfab566bf1e8b1f4bba56fd6966c"
  },
  {
    "url": "base/1.api/3.deduction.html",
    "revision": "c6e80a6175d06fe7188890a7c6b1a737"
  },
  {
    "url": "base/1.api/4.type.html",
    "revision": "2aeb61949947e843100ca82f2a1395a5"
  },
  {
    "url": "base/1.api/5.class.html",
    "revision": "6a9b846fff6f50597f0598023a48b40f"
  },
  {
    "url": "base/1.api/6.interface.html",
    "revision": "a2159d8100922abc9990770a1aed0749"
  },
  {
    "url": "base/1.api/7.generic.html",
    "revision": "81fd6a159ec20d2047ab67650c8eb118"
  },
  {
    "url": "base/1.api/8.compatible.html",
    "revision": "740161b9b712242fae8cc31b46088a27"
  },
  {
    "url": "base/1.api/9.protect.html",
    "revision": "d97fa26d9dc943ac3f792df2d5495b57"
  },
  {
    "url": "base/2.config/1.config.html",
    "revision": "746147027679d82c768f5dda97b32923"
  },
  {
    "url": "base/2.config/1.index.html",
    "revision": "c77e62e6e8438ff0da357000951a8184"
  },
  {
    "url": "base/2.config/10.ui.html",
    "revision": "df6cf534f6c6896244061d76d13a07c2"
  },
  {
    "url": "base/2.config/11.data.html",
    "revision": "4a05e521c9f343a6d8573105f1597c65"
  },
  {
    "url": "base/2.config/12.skill.html",
    "revision": "9b48fb0c5783c5eeae9a3b2c834f6ff6"
  },
  {
    "url": "base/2.config/13.com.html",
    "revision": "c56066cedcf1f0f1afcb1358ac3b0022"
  },
  {
    "url": "base/2.config/14.data.html",
    "revision": "9a38ba9c23c703e5fa394937c986a6ee"
  },
  {
    "url": "base/2.config/2.webpack.html",
    "revision": "fa17c41a90809f931aa62e8fad59f363"
  },
  {
    "url": "base/2.config/3.file.html",
    "revision": "d2a70415e6a84f7448aa664a8a5acb02"
  },
  {
    "url": "base/2.config/4.single.html",
    "revision": "9ac04d693a55c61c9e546b7f8f7808d1"
  },
  {
    "url": "base/2.config/5.page.html",
    "revision": "ea6561b68687c73563671f5009c5d0ad"
  },
  {
    "url": "base/2.config/7.module.html",
    "revision": "8ae9017cef1197c306f2326fc716b9bd"
  },
  {
    "url": "base/2.config/8.project.html",
    "revision": "c399abae3532d71829418800466d3871"
  },
  {
    "url": "base/2.config/9.utils.html",
    "revision": "f7bed17d29e8d12038ccbdc8a0575897"
  },
  {
    "url": "base/3.react/1.index.html",
    "revision": "a2d8f35c3998e652c442563f45e002ae"
  },
  {
    "url": "base/3.react/2.Jenkins.html",
    "revision": "b6660bf6315611298383023df3e92f57"
  },
  {
    "url": "base/3.react/3.gitlab.html",
    "revision": "444b7184bf4a80ce00961f08820a496b"
  },
  {
    "url": "base/3.react/4.vscode.html",
    "revision": "08fa439ae8d675efd509d1f0c946b3eb"
  },
  {
    "url": "base/3.react/5.zod.html",
    "revision": "9720b53a24ed4672230ec65a040e3208"
  },
  {
    "url": "base/3.react/i18n.html",
    "revision": "fa0ee11aca05f186702adf99920f8b74"
  },
  {
    "url": "base/3.react/prem.html",
    "revision": "39a1704d93f81078adf80fd23835b41b"
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
    "revision": "66b906ab0eb65252da5a20bd3a0a7d1e"
  },
  {
    "url": "mock/http.js",
    "revision": "c8abf8aba8039ff5bc6fa0517b076832"
  },
  {
    "url": "project/react/1.index.html",
    "revision": "07d11f3c35714b62e5668b6f9ba20347"
  },
  {
    "url": "project/vue/1.index.html",
    "revision": "d5c378cfca3cc24f308f60b8914523a6"
  },
  {
    "url": "project/vue/10.element-plus.html",
    "revision": "b8a603c8a70c9ac574d7f3fc42d36ef7"
  },
  {
    "url": "project/vue/11.tsx.html",
    "revision": "6d90ca63234790a5b3f3db45e060e3a5"
  },
  {
    "url": "project/vue/2.ref.html",
    "revision": "1d37e09f0690ff104bc69deba115f300"
  },
  {
    "url": "project/vue/3.props.html",
    "revision": "bb591ca9b0a733a60f4da7817faca51e"
  },
  {
    "url": "project/vue/4.emits.html",
    "revision": "b458e3faf180473b13cb0425663f5a3e"
  },
  {
    "url": "project/vue/5.component.html",
    "revision": "ee7a7b0d0fa1de663ddc58dedd557dd6"
  },
  {
    "url": "project/vue/6.slot.html",
    "revision": "bf54c1af73952d93324849900b20e5de"
  },
  {
    "url": "project/vue/7.vue-router.html",
    "revision": "9dd4d4b4c4d9bf2cc4b1988d5df69064"
  },
  {
    "url": "project/vue/8.tsconfig.html",
    "revision": "5400dfa106504ba24cd899974e8e5b88"
  },
  {
    "url": "project/vue/9.vuex.html",
    "revision": "f9bf4ea3d016bb33706bcd809f332535"
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
