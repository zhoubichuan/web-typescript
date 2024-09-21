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
    "revision": "53a3fa96927a359e9bc1fd6b59677ccd"
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
    "url": "assets/js/11.7046ca73.js",
    "revision": "7fe7dcd556b190d124769f5e0e798b17"
  },
  {
    "url": "assets/js/12.90bf7666.js",
    "revision": "4f9f3380d6c7ec45a46db8b5d5743080"
  },
  {
    "url": "assets/js/13.c43f6be7.js",
    "revision": "969125cee68a5b30724aff4f9dc4a1c9"
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
    "url": "assets/js/19.68080a7c.js",
    "revision": "34f1ec57b94fda745a60e79efbac1c49"
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
    "url": "assets/js/22.aebc91dd.js",
    "revision": "eeb0a1fc9395de4eba58703ff3cf0bb0"
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
    "url": "assets/js/33.92d9789c.js",
    "revision": "6e2261cd22fdb1f78e9cff23cea3ecda"
  },
  {
    "url": "assets/js/34.a604d2d9.js",
    "revision": "ea152be3ee61c673335a984b768a6fd1"
  },
  {
    "url": "assets/js/35.d58976e6.js",
    "revision": "d56ab1d1ad9649a397bbedb6ede92986"
  },
  {
    "url": "assets/js/36.5c691acd.js",
    "revision": "26f14725e0c3ae0d0540612cb48033d8"
  },
  {
    "url": "assets/js/37.5e04a49b.js",
    "revision": "4c1202be1542cda69ce5053719861c40"
  },
  {
    "url": "assets/js/38.192e5930.js",
    "revision": "0ef7bc8c3c362b7cf65294372dc5e253"
  },
  {
    "url": "assets/js/39.aaee9272.js",
    "revision": "65b4a9b3633bf6aec8cfa37b5525aa9a"
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
    "url": "assets/js/41.083c5a91.js",
    "revision": "92481eee33dff7bf4d9528ec503fd1d4"
  },
  {
    "url": "assets/js/42.2e54d664.js",
    "revision": "665a1cb0399c204f31d5fc170987b366"
  },
  {
    "url": "assets/js/43.40342065.js",
    "revision": "ac7116758dbd653656dc259c98cafbe3"
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
    "url": "assets/js/53.0d0c7b94.js",
    "revision": "4696523cfef85c8bc775472f78998181"
  },
  {
    "url": "assets/js/54.1737d18f.js",
    "revision": "b3c5e5b38cb678339d8694142b6b6576"
  },
  {
    "url": "assets/js/55.496f7207.js",
    "revision": "d5a185561da00b4c32b8899c957a1566"
  },
  {
    "url": "assets/js/56.b87814b5.js",
    "revision": "fdc8fcd7cb81482d9e166e86fb943492"
  },
  {
    "url": "assets/js/57.312e441b.js",
    "revision": "31b4eed633b4ad3441eaf5a44edbc14e"
  },
  {
    "url": "assets/js/58.324e425e.js",
    "revision": "7178c2bb0ab978982e5e843bf61e271c"
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
    "url": "assets/js/60.1fc1c6c6.js",
    "revision": "28da702f07dd1dc9b0126de645ee9bb4"
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
    "url": "assets/js/9.c34d64c5.js",
    "revision": "2ff6e05eb0de25add1cebe9c608a3722"
  },
  {
    "url": "assets/js/app.b2cfd104.js",
    "revision": "8802bb1e0b9d5cf7213b61cf3d768533"
  },
  {
    "url": "base/1.typescript/1.env.html",
    "revision": "8c35853ccb160ec96ed05d55f3e53239"
  },
  {
    "url": "base/1.typescript/1.index.html",
    "revision": "0d86d7e05c5ac270d29bcea8dbf3b261"
  },
  {
    "url": "base/1.typescript/10.infer.html",
    "revision": "b2461199aa8bdb9616547c6d70131431"
  },
  {
    "url": "base/1.typescript/11.overlapping.html",
    "revision": "f673634c1e10dca862a6b49b9c011880"
  },
  {
    "url": "base/1.typescript/12.condition.html",
    "revision": "ea5bf2750b1362b3727fc39683eae73e"
  },
  {
    "url": "base/1.typescript/13.builtin.html",
    "revision": "91dc4af67679eff880288025138e9c40"
  },
  {
    "url": "base/1.typescript/14.package.html",
    "revision": "aafa88698b5eab4cf1b11b79fa0f6187"
  },
  {
    "url": "base/1.typescript/15.custom.html",
    "revision": "e89f482bba5c32ea8cd7378ca3309918"
  },
  {
    "url": "base/1.typescript/16.unknown.html",
    "revision": "c0728d75f9402b5057b98d7da701c454"
  },
  {
    "url": "base/1.typescript/17.module.html",
    "revision": "065e14b4e2191490f5f827f9e0870c8a"
  },
  {
    "url": "base/1.typescript/18.statement.html",
    "revision": "24902ec1b7b5dda501fafcb3f0206d7b"
  },
  {
    "url": "base/1.typescript/19.extend.html",
    "revision": "6c4e807722de4920fa23ee2e26428acf"
  },
  {
    "url": "base/1.typescript/2.base.html",
    "revision": "5e0b3e693a5f40c7d24d8057494949a7"
  },
  {
    "url": "base/1.typescript/3.deduction.html",
    "revision": "6355c2f31deace5d39cf7206a5f5df27"
  },
  {
    "url": "base/1.typescript/4.type.html",
    "revision": "99404b2041ea39c4fb1f2df47d5e72bb"
  },
  {
    "url": "base/1.typescript/5.class.html",
    "revision": "1c2bb3c26c9ae6f1ee28e6b15a934b31"
  },
  {
    "url": "base/1.typescript/6.interface.html",
    "revision": "0bedc21a8eddd61e7c0f73b8cbf93110"
  },
  {
    "url": "base/1.typescript/7.generic.html",
    "revision": "ff0833d48ef3898e938a40dfa42520a4"
  },
  {
    "url": "base/1.typescript/8.compatible.html",
    "revision": "64856011a60180cbb017c8698ef083f6"
  },
  {
    "url": "base/1.typescript/9.protect.html",
    "revision": "612f7a9557c66bd0267884ac283b4c42"
  },
  {
    "url": "base/2.vue/1.config.html",
    "revision": "8c09e8489f47dd49d9f36cf834442ea9"
  },
  {
    "url": "base/2.vue/1.index.html",
    "revision": "cfffc953dc4d456fade5832b0831b696"
  },
  {
    "url": "base/2.vue/10.ui.html",
    "revision": "9cd88c2a6d8c72a9a5fe9b0863fa5423"
  },
  {
    "url": "base/2.vue/11.data.html",
    "revision": "194000d07d536e339ee24f444c102dab"
  },
  {
    "url": "base/2.vue/12.skill.html",
    "revision": "b04ba5c75caaf7701cff14dc944786ce"
  },
  {
    "url": "base/2.vue/13.com.html",
    "revision": "a3154ec13be0a9db9fa4b15887449227"
  },
  {
    "url": "base/2.vue/14.data.html",
    "revision": "4f4e743d75b382ebe14a3246af65c6fd"
  },
  {
    "url": "base/2.vue/2.webpack.html",
    "revision": "f8e0577e8a08da24a4a797d81fd4a515"
  },
  {
    "url": "base/2.vue/3.file.html",
    "revision": "2d037727b1559d28b1ae11717efa559b"
  },
  {
    "url": "base/2.vue/4.single.html",
    "revision": "4e6f29539a40aa75e7fc347b626c9bec"
  },
  {
    "url": "base/2.vue/5.page.html",
    "revision": "6aa530b5853216de7f636184e13b7a0b"
  },
  {
    "url": "base/2.vue/7.module.html",
    "revision": "17ad004deda66a2ed28c6427602c230a"
  },
  {
    "url": "base/2.vue/8.project.html",
    "revision": "eae8d6fc7eb6145507951f24b00966d4"
  },
  {
    "url": "base/2.vue/9.utils.html",
    "revision": "e24814aadc21c68c54f3f3ef7841432f"
  },
  {
    "url": "base/3.react/1.index.html",
    "revision": "e49e388ba17ed54d9184b38390c6014a"
  },
  {
    "url": "base/3.react/2.Jenkins.html",
    "revision": "7c78c64068d9fada9a8bc71cf5921a51"
  },
  {
    "url": "base/3.react/3.gitlab.html",
    "revision": "5da7a92d385c163449c32ddd356d8fc0"
  },
  {
    "url": "base/3.react/i18n.html",
    "revision": "9b8185797028f088feae1608db8f5500"
  },
  {
    "url": "base/3.react/prem.html",
    "revision": "8bd2f48f1cedd1543c2590c31efe51c9"
  },
  {
    "url": "base/3.react/test.html",
    "revision": "f5561be73c059210c9fa88d4b66f678d"
  },
  {
    "url": "base/3.react/vscode.html",
    "revision": "836743afccd795c584ce81fd055831f5"
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
    "revision": "59404164cd1277d2c57b9a817d0fac3a"
  },
  {
    "url": "mock/http.js",
    "revision": "c8abf8aba8039ff5bc6fa0517b076832"
  },
  {
    "url": "senior/npm/1.index.html",
    "revision": "83d2f996bf64b855fcd94f050ba45091"
  },
  {
    "url": "senior/use/1.index.html",
    "revision": "7975c6141d4da7f11328f36bd57a03b8"
  },
  {
    "url": "senior/use/10.table.html",
    "revision": "ced2f2591393b6bfb1f21e9245ee2592"
  },
  {
    "url": "senior/use/11.tree.html",
    "revision": "bfba3e381009203444b278a56989419f"
  },
  {
    "url": "senior/use/2.extend.html",
    "revision": "460c456bb50ca74f8aa0cd84e7a365a0"
  },
  {
    "url": "senior/use/3.componentCommunication.html",
    "revision": "45deeeba402869cc0b18e0d947f8f36a"
  },
  {
    "url": "senior/use/4.render.html",
    "revision": "71fced3d39daf8a6afcf29c8f75a891d"
  },
  {
    "url": "senior/use/5.api.html",
    "revision": "65ed3d0a958854549fda716a85ae3d12"
  },
  {
    "url": "senior/use/6.form.html",
    "revision": "3b8e2cd3c998d6f4f8671859074c3593"
  },
  {
    "url": "senior/use/7.checkBox.html",
    "revision": "e0fad73decdd6d647d933a55538b91a8"
  },
  {
    "url": "senior/use/8.active.html",
    "revision": "a739eb33400a6833de2c18bff4a56f2e"
  },
  {
    "url": "senior/use/9.alert.html",
    "revision": "dceb5323cdb5c322f42e6ff8fcc76d83"
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
