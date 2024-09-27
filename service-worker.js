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
    "revision": "2b566040e6621113944673b2ecb4606f"
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
    "url": "assets/js/11.c0fd6524.js",
    "revision": "0d7609dbe222e0146d8dc721cd7c6933"
  },
  {
    "url": "assets/js/12.a58a5a06.js",
    "revision": "509a6fac8c40bb50b460918184dd9f78"
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
    "url": "assets/js/18.ff3dd383.js",
    "revision": "22f0f2e3e8c97637b9b5fb71e9b2f993"
  },
  {
    "url": "assets/js/19.5e89051f.js",
    "revision": "0c9958e7cd7101045db367d0586cbc8a"
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
    "url": "assets/js/21.c5be7eec.js",
    "revision": "25d596c8189811c4b032414f2710401b"
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
    "url": "assets/js/24.58bb2848.js",
    "revision": "de4c2d4623d3aa394b31cec2b48c808c"
  },
  {
    "url": "assets/js/25.17bf1bf9.js",
    "revision": "4a837c5126fc159fbcf24597b5c39a20"
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
    "url": "assets/js/30.67062673.js",
    "revision": "064127046fb7563e102eeee5b0ab968a"
  },
  {
    "url": "assets/js/31.f8753161.js",
    "revision": "a94593d696fca818063c38b2be4d7620"
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
    "url": "assets/js/35.e71f68c0.js",
    "revision": "c9ce5dda575b511bf8d0237212b19a01"
  },
  {
    "url": "assets/js/36.5c691acd.js",
    "revision": "26f14725e0c3ae0d0540612cb48033d8"
  },
  {
    "url": "assets/js/37.f07e0faa.js",
    "revision": "ce05d2139c5143dd41fd320794a6b306"
  },
  {
    "url": "assets/js/38.6be8169d.js",
    "revision": "a06d6182d4c82304d8b585d04ff5ca60"
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
    "url": "assets/js/41.85b50c9c.js",
    "revision": "85e63eaae3984bfca50b759bfa30af0d"
  },
  {
    "url": "assets/js/42.6f0c2a6a.js",
    "revision": "e00bce17d2cc0af605280b3d66408104"
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
    "url": "assets/js/46.565deaa1.js",
    "revision": "d8c0327d045d714685c07d68b0d5d67d"
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
    "url": "assets/js/49.e39757fb.js",
    "revision": "6bb21f314e6731903783ec804c45f32b"
  },
  {
    "url": "assets/js/5.a77092f8.js",
    "revision": "ae5031fb37a8390b1f1c7673242b3d72"
  },
  {
    "url": "assets/js/50.6668725d.js",
    "revision": "5fd60e200eeaee5366b06bacf02292a3"
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
    "url": "assets/js/57.bfd4b8f9.js",
    "revision": "14f07bd16d6dc8390fa5d7efb593ab97"
  },
  {
    "url": "assets/js/58.324e425e.js",
    "revision": "7178c2bb0ab978982e5e843bf61e271c"
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
    "url": "assets/js/9.8eaccf96.js",
    "revision": "4069f79a9197f9931e1c55728f077c39"
  },
  {
    "url": "assets/js/app.9a7bfc4e.js",
    "revision": "f3125ceda45e042d12636c7aa2d99434"
  },
  {
    "url": "base/1.typescript/1.env.html",
    "revision": "95fa05758914d0be4cf0a45fd9f68f0d"
  },
  {
    "url": "base/1.typescript/1.index.html",
    "revision": "31db1322b42bdeaf3487b85067016770"
  },
  {
    "url": "base/1.typescript/10.infer.html",
    "revision": "43dc8ec63cdfedb856b6e2dbc0193ed8"
  },
  {
    "url": "base/1.typescript/11.overlapping.html",
    "revision": "7d28b8d756a4b1d8df0dd776fdf6a949"
  },
  {
    "url": "base/1.typescript/12.condition.html",
    "revision": "b4e341c3decf5be990be434dc714822b"
  },
  {
    "url": "base/1.typescript/13.builtin.html",
    "revision": "60e921da3246ff1abb2a4b2ea551e38c"
  },
  {
    "url": "base/1.typescript/14.package.html",
    "revision": "88895021f66de2c5f0e4d469961cabd1"
  },
  {
    "url": "base/1.typescript/15.custom.html",
    "revision": "f33b89243b73f4e583ff0459b0f7d92d"
  },
  {
    "url": "base/1.typescript/16.unknown.html",
    "revision": "59ac00594867fc0ea117dadc58a6fe6b"
  },
  {
    "url": "base/1.typescript/17.module.html",
    "revision": "47f353da7853c9db002cf7397ba538cd"
  },
  {
    "url": "base/1.typescript/18.statement.html",
    "revision": "a9ff6bf99146439de7fb0d88cf17dfde"
  },
  {
    "url": "base/1.typescript/19.extend.html",
    "revision": "14dc16f5629e9603d67266838b52740d"
  },
  {
    "url": "base/1.typescript/2.base.html",
    "revision": "0c1ecf87f645dbffddbbb59b313b5429"
  },
  {
    "url": "base/1.typescript/3.deduction.html",
    "revision": "b0aadac72d697b4b9164bc5ea30d0453"
  },
  {
    "url": "base/1.typescript/4.type.html",
    "revision": "699348b450c70a319a94f81fc2f4e41f"
  },
  {
    "url": "base/1.typescript/5.class.html",
    "revision": "5b16e49745f944830112e8dcee8e01e3"
  },
  {
    "url": "base/1.typescript/6.interface.html",
    "revision": "828f3eb2c0cad9c4e125aba88e30ec71"
  },
  {
    "url": "base/1.typescript/7.generic.html",
    "revision": "8be0a0b63f928a2565fbf5091911bb4c"
  },
  {
    "url": "base/1.typescript/8.compatible.html",
    "revision": "70fcfa92b53917d9f2441ee78741f37f"
  },
  {
    "url": "base/1.typescript/9.protect.html",
    "revision": "eb8549db8ab5d754d2f66add83a779fe"
  },
  {
    "url": "base/2.vue/1.config.html",
    "revision": "da63be5983f3516f73d63514396049d4"
  },
  {
    "url": "base/2.vue/1.index.html",
    "revision": "95116f26b891d5342d62d68724e1c7d0"
  },
  {
    "url": "base/2.vue/10.ui.html",
    "revision": "ec7b7b0f806230b2c87d8e3bb273386e"
  },
  {
    "url": "base/2.vue/11.data.html",
    "revision": "80a141b7df70ed7093ca55e065567daa"
  },
  {
    "url": "base/2.vue/12.skill.html",
    "revision": "5d59dfc1526a4f3543a2c0c4452e618b"
  },
  {
    "url": "base/2.vue/13.com.html",
    "revision": "e029b8acdb5e5507c5d8f25530064de0"
  },
  {
    "url": "base/2.vue/14.data.html",
    "revision": "8ffe27e64b2edea2262066dbc2a139ac"
  },
  {
    "url": "base/2.vue/2.webpack.html",
    "revision": "e07d33d227a0b9d6486b96e9065b4e10"
  },
  {
    "url": "base/2.vue/3.file.html",
    "revision": "9d11db5a7ddac4edd5faf58b6a7df93b"
  },
  {
    "url": "base/2.vue/4.single.html",
    "revision": "4f76991cfbcf72d0792c4cf292992961"
  },
  {
    "url": "base/2.vue/5.page.html",
    "revision": "86b8a0f84faf2ac352f7d4262f7936f8"
  },
  {
    "url": "base/2.vue/7.module.html",
    "revision": "879b2bf42853e5dcdb8cd561865c5c3f"
  },
  {
    "url": "base/2.vue/8.project.html",
    "revision": "0f746388348e135a16e603a8380587e5"
  },
  {
    "url": "base/2.vue/9.utils.html",
    "revision": "a057aecedac552a33a84f300c200bbf1"
  },
  {
    "url": "base/3.react/1.index.html",
    "revision": "fa78389119f358317a7909e161dc4949"
  },
  {
    "url": "base/3.react/2.Jenkins.html",
    "revision": "3dce4c1d764462374685109cd3ca27c8"
  },
  {
    "url": "base/3.react/3.gitlab.html",
    "revision": "5bd6b8e29bd154d18a2fe4ffe17c12c4"
  },
  {
    "url": "base/3.react/i18n.html",
    "revision": "a96ef756f8a62bb3751ef0d5dcec6a88"
  },
  {
    "url": "base/3.react/prem.html",
    "revision": "7a9024457610f057e29edd58a8a1ecff"
  },
  {
    "url": "base/3.react/test.html",
    "revision": "12d0b4dc924f527bcc314223d3bec542"
  },
  {
    "url": "base/3.react/vscode.html",
    "revision": "c41fd28a2adecd19bb74ae0b69ec2dfa"
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
    "revision": "afb15d1b59eb16319f729880e8a60c11"
  },
  {
    "url": "mock/http.js",
    "revision": "c8abf8aba8039ff5bc6fa0517b076832"
  },
  {
    "url": "senior/npm/1.index.html",
    "revision": "0ce91161ea5df6392f24c085cda8ec9a"
  },
  {
    "url": "senior/use/1.index.html",
    "revision": "08e7fc5f219cc00b9621def5833966d2"
  },
  {
    "url": "senior/use/10.table.html",
    "revision": "6b77c47711bf7962ae7131dc75202c00"
  },
  {
    "url": "senior/use/11.tree.html",
    "revision": "7902dcdf72a30efd0d9c5d6fafcbcbd0"
  },
  {
    "url": "senior/use/2.extend.html",
    "revision": "4b88ede33809effc96a0c2cdc9f32b6f"
  },
  {
    "url": "senior/use/3.componentCommunication.html",
    "revision": "7757a6a327c32ef2feae2876adab5edb"
  },
  {
    "url": "senior/use/4.render.html",
    "revision": "d7cc809ec8def241e3c0c960bed61150"
  },
  {
    "url": "senior/use/5.api.html",
    "revision": "a3113d6a5a93e3531cdb2a0d24221b25"
  },
  {
    "url": "senior/use/6.form.html",
    "revision": "552c06e6e57d29cf287801db02b2f6e8"
  },
  {
    "url": "senior/use/7.checkBox.html",
    "revision": "2a2f6726bbae37d1d00d6e1621aa2489"
  },
  {
    "url": "senior/use/8.active.html",
    "revision": "a894a5469c251ab61920667b6873c547"
  },
  {
    "url": "senior/use/9.alert.html",
    "revision": "87a38c3c9943ae741ea8f56c3bbb0e4f"
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
