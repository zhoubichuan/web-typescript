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
    "revision": "28d56973258ea4f43a64a73a616b8f65"
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
    "url": "assets/js/10.6fb19ab4.js",
    "revision": "a4020a9b430ec73dbe849cf02dc6e970"
  },
  {
    "url": "assets/js/11.a748897e.js",
    "revision": "52db8f172521861d13868c8c8e57f651"
  },
  {
    "url": "assets/js/12.c7103322.js",
    "revision": "e716f3cddf87b80aa5b93499f4362253"
  },
  {
    "url": "assets/js/13.0bd07843.js",
    "revision": "48be05791b83be4f2b9fe1e65718e692"
  },
  {
    "url": "assets/js/14.c70afbea.js",
    "revision": "9b379c245412a159cbd57006c833fab6"
  },
  {
    "url": "assets/js/15.35c3a928.js",
    "revision": "1e8c4be25d77f45fc1d3bc74f9d467a8"
  },
  {
    "url": "assets/js/16.4a12d05f.js",
    "revision": "e308133185e38314dcc6b17960079a56"
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
    "url": "assets/js/19.59413641.js",
    "revision": "c2eab5f5769907f30b9965ea5580ac7c"
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
    "url": "assets/js/23.38af0123.js",
    "revision": "b5908606f536ef5fc8cecca9cabb35e9"
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
    "url": "assets/js/31.ce6ea55a.js",
    "revision": "2af88610be0ef3be84dce60dbeb16e04"
  },
  {
    "url": "assets/js/32.0fc287eb.js",
    "revision": "d65708719b020cde3e6727390f93d894"
  },
  {
    "url": "assets/js/33.15b34b40.js",
    "revision": "87d3b9ea6dd84122ac571ba963666fb1"
  },
  {
    "url": "assets/js/34.e126ade0.js",
    "revision": "47d4675ff7e4ed41d34f540f03642249"
  },
  {
    "url": "assets/js/35.ebfc236d.js",
    "revision": "8cc2c52df9d6b3ef09a269d9b6356f8b"
  },
  {
    "url": "assets/js/36.c2dd732b.js",
    "revision": "306bf2a6dca6bb5411dec18e40f74312"
  },
  {
    "url": "assets/js/37.a7af661f.js",
    "revision": "9f10663be76194b820d0bd5720c45a54"
  },
  {
    "url": "assets/js/38.e5d511d2.js",
    "revision": "55248785bd66307bfef192d588c2870f"
  },
  {
    "url": "assets/js/39.726e21ef.js",
    "revision": "e11032020695ea6d4a873fd627ab7f64"
  },
  {
    "url": "assets/js/4.f06a870d.js",
    "revision": "5f8b6aef590e9dec19e854ef23ee6eb5"
  },
  {
    "url": "assets/js/40.c19ccde4.js",
    "revision": "eece8bedda252099440e5018d4cbd78a"
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
    "url": "assets/js/43.603b0b61.js",
    "revision": "54926f60de1a4f8644edf31be9264f0e"
  },
  {
    "url": "assets/js/44.d9ad8516.js",
    "revision": "ad6424bb3447cb20fc7fd8dd04c3e8b4"
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
    "url": "assets/js/48.9d6c852b.js",
    "revision": "a28309320b24c04d9facba6b1ad574ce"
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
    "url": "assets/js/50.5d9117a6.js",
    "revision": "3eeae8a67891ac726cfdc43f90f24220"
  },
  {
    "url": "assets/js/51.ccfc9aab.js",
    "revision": "270aaa530fb1aa2edc18fc379892e5cc"
  },
  {
    "url": "assets/js/52.7da65101.js",
    "revision": "f3717d87e8d02ed5bd030cd156584848"
  },
  {
    "url": "assets/js/53.35f85ec6.js",
    "revision": "d26c858239dc36c4ce31ac6f68d252e7"
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
    "url": "assets/js/58.8180ee60.js",
    "revision": "f2b136ae2215e834d0e1484ff8bb94a0"
  },
  {
    "url": "assets/js/59.bad96a1c.js",
    "revision": "8bd53df97eb77426f0cd51618c74097f"
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
    "url": "assets/js/9.c34d64c5.js",
    "revision": "2ff6e05eb0de25add1cebe9c608a3722"
  },
  {
    "url": "assets/js/app.6118ac9e.js",
    "revision": "bdffe601fcbadc05fdd74b7d8f8e657a"
  },
  {
    "url": "base/1.typescript/1.env.html",
    "revision": "f4a648e8e98a11b56118b35001da93a1"
  },
  {
    "url": "base/1.typescript/1.index.html",
    "revision": "c709bb03d6ea84b3f0cf8fefbe50dca6"
  },
  {
    "url": "base/1.typescript/10.infer.html",
    "revision": "7dfe28e989ea32e2e49610faa38a4c39"
  },
  {
    "url": "base/1.typescript/11.overlapping.html",
    "revision": "4cceb6b8a86f2ba9c05c62fcea4e5495"
  },
  {
    "url": "base/1.typescript/12.condition.html",
    "revision": "aa65b6b2e1c8456b16ede0b1588e4fa6"
  },
  {
    "url": "base/1.typescript/13.builtin.html",
    "revision": "e4c1ec3303311cf0b38e8040a86abb01"
  },
  {
    "url": "base/1.typescript/14.package.html",
    "revision": "c784d2b52ad9dd71b5b6ed1d6a13a06f"
  },
  {
    "url": "base/1.typescript/15.custom.html",
    "revision": "4334cf93d1d71d60c3088738c1e063e3"
  },
  {
    "url": "base/1.typescript/16.unknown.html",
    "revision": "52a41782d1873dbb9dc0e5da85e390b9"
  },
  {
    "url": "base/1.typescript/17.module.html",
    "revision": "eb7c41df8e70057a04e8c8cd3b067a20"
  },
  {
    "url": "base/1.typescript/18.statement.html",
    "revision": "67d4585e312af061a93500f4e61ae07c"
  },
  {
    "url": "base/1.typescript/19.extend.html",
    "revision": "b75c3f3321d5b439e52c266ae992d2aa"
  },
  {
    "url": "base/1.typescript/2.base.html",
    "revision": "5b39c003584fa0e30f7c98e5319b30c5"
  },
  {
    "url": "base/1.typescript/3.deduction.html",
    "revision": "958529df9ca14a6e9b354fe1c75c7eda"
  },
  {
    "url": "base/1.typescript/4.type.html",
    "revision": "af262ed37d1bf0bce0b895f0a9a11083"
  },
  {
    "url": "base/1.typescript/5.class.html",
    "revision": "5b2ed543d4b002e6b1397a849e9c89df"
  },
  {
    "url": "base/1.typescript/6.interface.html",
    "revision": "39e8967a8973908a6c99ed95b5b42123"
  },
  {
    "url": "base/1.typescript/7.generic.html",
    "revision": "3218577c16df085263617577c76470c1"
  },
  {
    "url": "base/1.typescript/8.compatible.html",
    "revision": "fed10c004ff535e074df876508d0fd2c"
  },
  {
    "url": "base/1.typescript/9.protect.html",
    "revision": "8b2e85f27cdd1b7fe364f9c645580e0a"
  },
  {
    "url": "base/2.vue/1.config.html",
    "revision": "5f88653e876460951e21ff6d800dd9df"
  },
  {
    "url": "base/2.vue/1.index.html",
    "revision": "3c09af382dee84c0e1ccf69be8666ccb"
  },
  {
    "url": "base/2.vue/10.ui.html",
    "revision": "1af15481dc46e7b79319af3eed243c33"
  },
  {
    "url": "base/2.vue/11.data.html",
    "revision": "4fb56139bbd8395cf028c04e8e4f0654"
  },
  {
    "url": "base/2.vue/12.skill.html",
    "revision": "aa9c9f0460e8f4e1712fa68d951522b1"
  },
  {
    "url": "base/2.vue/13.com.html",
    "revision": "7d5ad4e30ae7266dd635e591fb865cc9"
  },
  {
    "url": "base/2.vue/14.data.html",
    "revision": "979bc117d5ce1d5cc789197291371ac7"
  },
  {
    "url": "base/2.vue/2.webpack.html",
    "revision": "e2fe9220d3b451c6d8c0535db47522bd"
  },
  {
    "url": "base/2.vue/3.file.html",
    "revision": "e11008ec7db771bbdaf0836c56df905b"
  },
  {
    "url": "base/2.vue/4.single.html",
    "revision": "7ae2015baf3b3ea348acb68dbe7ace8b"
  },
  {
    "url": "base/2.vue/5.page.html",
    "revision": "5d27561edf0abb8ab283fced5546f394"
  },
  {
    "url": "base/2.vue/7.module.html",
    "revision": "56f6317e76078746e5406c9b4a2adb7d"
  },
  {
    "url": "base/2.vue/8.project.html",
    "revision": "ebca83fdd9bc8d8117fbc53752389e27"
  },
  {
    "url": "base/2.vue/9.utils.html",
    "revision": "ad1bc945ced77ef1695f12e3f2e5b427"
  },
  {
    "url": "base/3.react/1.index.html",
    "revision": "a064147a29e05122c8655b3f2eae60c5"
  },
  {
    "url": "base/3.react/2.Jenkins.html",
    "revision": "ef944643dd588eb246b330788f61cbf5"
  },
  {
    "url": "base/3.react/3.gitlab.html",
    "revision": "cf6fcf3791dcc455eea4b677038b5910"
  },
  {
    "url": "base/3.react/i18n.html",
    "revision": "e6af131b0f85ca7bbadf0451061827c6"
  },
  {
    "url": "base/3.react/prem.html",
    "revision": "021a392969b9ff1b32d9a321da712a07"
  },
  {
    "url": "base/3.react/test.html",
    "revision": "675e02f3a03d2abd09fea67653803083"
  },
  {
    "url": "base/3.react/vscode.html",
    "revision": "197b276f1821eb7ad62e87d1af98ae87"
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
    "revision": "e94a1893471eb7e4cc78dd4d0e58fc13"
  },
  {
    "url": "mock/http.js",
    "revision": "c8abf8aba8039ff5bc6fa0517b076832"
  },
  {
    "url": "senior/npm/1.index.html",
    "revision": "2d54be5c4c045699b49ff0652f1d8136"
  },
  {
    "url": "senior/use/1.index.html",
    "revision": "e0e8c170605607624dfafcc205968f9f"
  },
  {
    "url": "senior/use/10.table.html",
    "revision": "6788b2e3d891bfea2c1f6a9291520f60"
  },
  {
    "url": "senior/use/11.tree.html",
    "revision": "83a92d1f88efa8bd11f7300a0344ab2d"
  },
  {
    "url": "senior/use/2.extend.html",
    "revision": "482ccb04db27a64e1105268251ab257c"
  },
  {
    "url": "senior/use/3.componentCommunication.html",
    "revision": "18643484a28a3d4b29455d92405c9c41"
  },
  {
    "url": "senior/use/4.render.html",
    "revision": "1cf47997ca0a63e5bcc2040a16d482b7"
  },
  {
    "url": "senior/use/5.api.html",
    "revision": "32148f6f07c464026d69397639cb9f10"
  },
  {
    "url": "senior/use/6.form.html",
    "revision": "2e3bcddece8cff8f9ec7cf3620667d84"
  },
  {
    "url": "senior/use/7.checkBox.html",
    "revision": "bb9cd6ec82aadf456d51c63a5a4abdcf"
  },
  {
    "url": "senior/use/8.active.html",
    "revision": "5f4713091c89d0a4b85ed880ffa4a72b"
  },
  {
    "url": "senior/use/9.alert.html",
    "revision": "89d194e6d50ec5f4ffad602f73f9daec"
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
