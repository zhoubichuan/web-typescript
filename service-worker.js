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
    "revision": "c76f2f7512e66741183102d5800009a0"
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
    "url": "assets/js/10.19035a08.js",
    "revision": "bceb2bf0fe3ab0847b1933489c07247b"
  },
  {
    "url": "assets/js/11.7513e5e5.js",
    "revision": "02f1988916a2d26e4c9b018c5951d557"
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
    "url": "assets/js/15.75aa811c.js",
    "revision": "0ea860ed21c3db0837b5852671c3e53c"
  },
  {
    "url": "assets/js/16.20dd010c.js",
    "revision": "ca373ac577115e2b8c1778a826c099b0"
  },
  {
    "url": "assets/js/17.b3cb3ec3.js",
    "revision": "b89d3dedb370f2834edc91a1d0a3d343"
  },
  {
    "url": "assets/js/18.84f57dac.js",
    "revision": "848587ac8f7432b8eaab49b5ff144d6d"
  },
  {
    "url": "assets/js/19.e6b1404e.js",
    "revision": "07540d5ac87dbc98dde4af52d7fe40f4"
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
    "url": "assets/js/21.ddccb7ee.js",
    "revision": "c3878ce7518f383cea77e922d5d54e3c"
  },
  {
    "url": "assets/js/22.8ac8861c.js",
    "revision": "771d88bcf2ee5e8aed76ece0115dc606"
  },
  {
    "url": "assets/js/23.3b4d65ad.js",
    "revision": "e3b135960f913009156e42822fa86097"
  },
  {
    "url": "assets/js/24.38eac2a2.js",
    "revision": "b9a7e70fb18f1dbd74026216d1edd2b8"
  },
  {
    "url": "assets/js/25.eecfb9ff.js",
    "revision": "7ddcc08888f7abee0ff9c63ec606ff5e"
  },
  {
    "url": "assets/js/26.8c7f199a.js",
    "revision": "2aae168e39cb20ffff22f78615abe727"
  },
  {
    "url": "assets/js/27.16b276f2.js",
    "revision": "e641cc30401175b7a24adc1d1af828a3"
  },
  {
    "url": "assets/js/28.e3299ecb.js",
    "revision": "f80bbca3985f8e282d9c21573b68ac32"
  },
  {
    "url": "assets/js/29.fd860498.js",
    "revision": "cf1750e374c7654e95dc055a9c3565fc"
  },
  {
    "url": "assets/js/3.384e845f.js",
    "revision": "fbf7f49d43a1979ecb3e6e97c2466f4b"
  },
  {
    "url": "assets/js/30.a1ce147f.js",
    "revision": "0819fa496fb2bed1cb3e6d0e1404c922"
  },
  {
    "url": "assets/js/31.68dc9323.js",
    "revision": "5ff50b3171d76d7c16accd91d7433244"
  },
  {
    "url": "assets/js/32.cdda11d2.js",
    "revision": "a4a6877fb42f524707e5a737de3cb143"
  },
  {
    "url": "assets/js/33.2a4360a0.js",
    "revision": "de46306688cb55cb691ec3ac676177e1"
  },
  {
    "url": "assets/js/34.4e0260b3.js",
    "revision": "1efbc403dc2aaba751889bddd6e49b19"
  },
  {
    "url": "assets/js/35.52374d9e.js",
    "revision": "0d666bf4e664558fb5bcc5057868929e"
  },
  {
    "url": "assets/js/36.dfe49028.js",
    "revision": "2018f2a6a4aa21f9545dea625254e7d2"
  },
  {
    "url": "assets/js/37.61c4ace9.js",
    "revision": "0a569c326f3eb6fedbc3dccbdf9b91c9"
  },
  {
    "url": "assets/js/38.bd854f58.js",
    "revision": "514c4701e22f340dd23423f48994760d"
  },
  {
    "url": "assets/js/39.c854fe26.js",
    "revision": "78b87359605af34b02765cbc7ccf3b2e"
  },
  {
    "url": "assets/js/4.f06a870d.js",
    "revision": "5f8b6aef590e9dec19e854ef23ee6eb5"
  },
  {
    "url": "assets/js/40.39bf3e50.js",
    "revision": "40072c4f284d962ad5df0075de51895f"
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
    "url": "assets/js/43.02947809.js",
    "revision": "49db00265901aee4d9c107ddda8e5230"
  },
  {
    "url": "assets/js/44.0fc6cb9d.js",
    "revision": "06ee4184c0ec25a7e33b6867a32110c3"
  },
  {
    "url": "assets/js/45.1a9835a3.js",
    "revision": "8708700f2ee1e7c535e8908ffbbf8a11"
  },
  {
    "url": "assets/js/46.fa8b2844.js",
    "revision": "6bdfeaa7a1081626ed970f20511bbda4"
  },
  {
    "url": "assets/js/47.cd99a285.js",
    "revision": "110f160a39d6099c08dcd06c05dd1a2b"
  },
  {
    "url": "assets/js/48.81f78bb4.js",
    "revision": "8931ec7973b145ffc083727ba6f397fa"
  },
  {
    "url": "assets/js/49.bcae90c7.js",
    "revision": "c535313cf5903fa4592cb36e7448fb9e"
  },
  {
    "url": "assets/js/5.a77092f8.js",
    "revision": "ae5031fb37a8390b1f1c7673242b3d72"
  },
  {
    "url": "assets/js/50.044f99e7.js",
    "revision": "23113dc9c148435b93fe78e02cd727a8"
  },
  {
    "url": "assets/js/51.516b4622.js",
    "revision": "da50bd3f33e089a968ef20d1ffffe5dc"
  },
  {
    "url": "assets/js/52.bcfefaff.js",
    "revision": "989dc3cf659c667293ed45916816452d"
  },
  {
    "url": "assets/js/53.5bee6896.js",
    "revision": "af249cc0ab6c9fac878be720981ac6dc"
  },
  {
    "url": "assets/js/54.06fd4a80.js",
    "revision": "db0e40f451f73824dbfac7ba7d5a527b"
  },
  {
    "url": "assets/js/55.ebc024a5.js",
    "revision": "0c3df23f97600e87f1bf9e6d0bc842aa"
  },
  {
    "url": "assets/js/56.2aaf7d41.js",
    "revision": "ff3ce9892ff08fec76ea0e54d5321a16"
  },
  {
    "url": "assets/js/57.4bc6c909.js",
    "revision": "3b2a12e0895319103ed97f55de16a8be"
  },
  {
    "url": "assets/js/58.e32b2767.js",
    "revision": "b8bb4f414f381644c86d2708e1f0ef6f"
  },
  {
    "url": "assets/js/59.5fa22b0d.js",
    "revision": "4baa39f9ba5f9ac0f0ee50520f9b1fad"
  },
  {
    "url": "assets/js/6.1c84d7c2.js",
    "revision": "86ca71003c238d89eb80ce3c3a718e46"
  },
  {
    "url": "assets/js/60.ea8458d3.js",
    "revision": "8a285fdd5b47745300af6cf790a7cc9a"
  },
  {
    "url": "assets/js/61.42657320.js",
    "revision": "a32b7d2895b889839fc52adcfe3d953a"
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
    "url": "assets/js/9.100b9a0f.js",
    "revision": "c7b94173d0ebb3934cb75394f0890223"
  },
  {
    "url": "assets/js/app.a8d33c24.js",
    "revision": "37c7851862c0f0ca51e6d75e490a2afa"
  },
  {
    "url": "base/1.api/1.env.html",
    "revision": "6459b09124c872d76e42dc1fe85b4559"
  },
  {
    "url": "base/1.api/1.index.html",
    "revision": "08b6ba30eb707733b7129f12a600d977"
  },
  {
    "url": "base/1.api/10.infer.html",
    "revision": "f35222159516521a0e71dee3b7ffe091"
  },
  {
    "url": "base/1.api/11.overlapping.html",
    "revision": "d7d1ed41e095d2737e5ead21de150663"
  },
  {
    "url": "base/1.api/12.condition.html",
    "revision": "519a0abe3bef26d54c5c30ff9cef918a"
  },
  {
    "url": "base/1.api/13.builtin.html",
    "revision": "fc6cfab0efe87976fe9b41b6a31752f6"
  },
  {
    "url": "base/1.api/14.package.html",
    "revision": "a0c5fc8a39004c456b2349b3fc03e439"
  },
  {
    "url": "base/1.api/15.custom.html",
    "revision": "ffb2dacd6009e7496cb2718ecdb05699"
  },
  {
    "url": "base/1.api/16.unknown.html",
    "revision": "6e4a590afddb476a60077a54ef1a40c5"
  },
  {
    "url": "base/1.api/17.module.html",
    "revision": "56cb69067876fb30603a0586ad5fe254"
  },
  {
    "url": "base/1.api/18.statement.html",
    "revision": "947caf4868e02b00a6c5401dd9126c08"
  },
  {
    "url": "base/1.api/19.extend.html",
    "revision": "0a3e87536e4dc6ec0b930e30970cb7c6"
  },
  {
    "url": "base/1.api/2.base.html",
    "revision": "3bcec79eb05313a932af693f32f86d27"
  },
  {
    "url": "base/1.api/3.deduction.html",
    "revision": "702a8136c27e136cc488e5a8625d7185"
  },
  {
    "url": "base/1.api/4.type.html",
    "revision": "b47a28eb29ccc4104ce272c3b88b22b3"
  },
  {
    "url": "base/1.api/5.class.html",
    "revision": "1a874efe39496b76c748db2632d3c294"
  },
  {
    "url": "base/1.api/6.interface.html",
    "revision": "77daf4e9482d7301794207aa9e27d8ed"
  },
  {
    "url": "base/1.api/7.generic.html",
    "revision": "fd1dcc507f8c4970e2847f64baecd41d"
  },
  {
    "url": "base/1.api/8.compatible.html",
    "revision": "22fd1327d4ecb1e3ed70c265b7d910c8"
  },
  {
    "url": "base/1.api/9.protect.html",
    "revision": "4dc58bcb9a88f6499c0bf0fa721f79e0"
  },
  {
    "url": "base/2.config/1.config.html",
    "revision": "6bdc0d09a554bc1fec0a64f591beecdc"
  },
  {
    "url": "base/2.config/1.index.html",
    "revision": "9d70cf1e13289372e20474e84c59c0b9"
  },
  {
    "url": "base/2.config/10.ui.html",
    "revision": "1733b21146a032867e89f53b9fa4c990"
  },
  {
    "url": "base/2.config/11.data.html",
    "revision": "a0855a4e7423cec00377ea5cfb4d1c69"
  },
  {
    "url": "base/2.config/12.skill.html",
    "revision": "cf7c2a89b9b5c3be6e3966cb2e523668"
  },
  {
    "url": "base/2.config/13.com.html",
    "revision": "41cfb8da5b14cf7d5b673e15ddb01a4c"
  },
  {
    "url": "base/2.config/14.data.html",
    "revision": "6fece12f3cd97bac2737590f6c8cb580"
  },
  {
    "url": "base/2.config/2.webpack.html",
    "revision": "a56d8b45bd1a35ea8d58d1d4c81994ff"
  },
  {
    "url": "base/2.config/3.file.html",
    "revision": "6b1a0bcd59658cbe792c9c76b6857492"
  },
  {
    "url": "base/2.config/4.single.html",
    "revision": "086d828d5b7732041ea2bcbd615fe361"
  },
  {
    "url": "base/2.config/5.page.html",
    "revision": "6f8fcfddbf8215135c9e58ae54dfa6ac"
  },
  {
    "url": "base/2.config/7.module.html",
    "revision": "d0180faeb24a51cde84e37a655fe9b51"
  },
  {
    "url": "base/2.config/8.project.html",
    "revision": "9146d3869ff7ecf0cf5959ee8c76efd1"
  },
  {
    "url": "base/2.config/9.utils.html",
    "revision": "95dd61283cb1e0fea444cfde264459e9"
  },
  {
    "url": "base/3.react/1.index.html",
    "revision": "3a198da6c1bf4b213abd5075108e00c6"
  },
  {
    "url": "base/3.react/2.Jenkins.html",
    "revision": "003a5f8dc1dda4998e66c3cf5c25c216"
  },
  {
    "url": "base/3.react/3.gitlab.html",
    "revision": "124df7c4b3d2e7602eafe824c7dc8c28"
  },
  {
    "url": "base/3.react/i18n.html",
    "revision": "9c93581e7d673e36c2af2ad6462385e2"
  },
  {
    "url": "base/3.react/prem.html",
    "revision": "a704e0373dfc87b46f70105ddd74ceec"
  },
  {
    "url": "base/3.react/test.html",
    "revision": "5c18b92234bdb1925dddaee03610b528"
  },
  {
    "url": "base/3.react/vscode.html",
    "revision": "e383a2e6ff049a4428fa915e4c4542d6"
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
    "revision": "6fde7df6f0cc10a825dcd6e35c3b417f"
  },
  {
    "url": "mock/http.js",
    "revision": "c8abf8aba8039ff5bc6fa0517b076832"
  },
  {
    "url": "senior/npm/1.index.html",
    "revision": "c541ae34fae1ab63f94a1089b5fe08bc"
  },
  {
    "url": "senior/use/1.index.html",
    "revision": "2179931864ac09b2c9059c1964488166"
  },
  {
    "url": "senior/use/10.table.html",
    "revision": "af8c0375341fc7358ebea83843980aa9"
  },
  {
    "url": "senior/use/11.tree.html",
    "revision": "5b24b6eae98c5ba1c1fe3a9fd9008f15"
  },
  {
    "url": "senior/use/2.extend.html",
    "revision": "51ef381683968e69ff240338c02bbf4e"
  },
  {
    "url": "senior/use/3.componentCommunication.html",
    "revision": "8b8592a35cda668c858b552956f9a6ac"
  },
  {
    "url": "senior/use/4.render.html",
    "revision": "cefd68bf58e6cae6bc7b3279fd2fe476"
  },
  {
    "url": "senior/use/5.api.html",
    "revision": "f8fc024c908aa52c4bc79f73b54137fa"
  },
  {
    "url": "senior/use/6.form.html",
    "revision": "8d85302feae721af343a2bdbe78ab846"
  },
  {
    "url": "senior/use/7.checkBox.html",
    "revision": "edc8946cb0077961e9a162380715f6f4"
  },
  {
    "url": "senior/use/8.active.html",
    "revision": "5651da07c89dbd15b3e81896b8d7a39a"
  },
  {
    "url": "senior/use/9.alert.html",
    "revision": "2af8073443c03798697deca3d5362db2"
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
