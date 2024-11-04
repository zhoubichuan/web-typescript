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
    "revision": "6d863ef222ebb42cea354fa66a9fe29b"
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
    "url": "assets/js/10.dea0b5fc.js",
    "revision": "3bb222a589cc4f0c1e3bcdff4418d117"
  },
  {
    "url": "assets/js/11.ff9f8a50.js",
    "revision": "02c8fbce7b2258aa29e0d9817e5a713b"
  },
  {
    "url": "assets/js/12.7436baf8.js",
    "revision": "3734c399d1036842a4b48b45e9b88a3d"
  },
  {
    "url": "assets/js/13.30d176f3.js",
    "revision": "2457830f4fb35347ab33aea1591f7329"
  },
  {
    "url": "assets/js/14.57d846a1.js",
    "revision": "9dc87fd78b00f75ffadd4939985bd089"
  },
  {
    "url": "assets/js/15.73e47508.js",
    "revision": "c88f697354b13bf633b4035ab1132e68"
  },
  {
    "url": "assets/js/16.b0be68bb.js",
    "revision": "69a95eccfaa2999b7a33deda31cc115c"
  },
  {
    "url": "assets/js/17.6af0ef6a.js",
    "revision": "2fa6fb6a114c76e81e26654d410e9f5d"
  },
  {
    "url": "assets/js/18.2854af04.js",
    "revision": "d7db08c85f6dde360cb7332ec26834eb"
  },
  {
    "url": "assets/js/19.48ae593a.js",
    "revision": "11cdcd2093750c534866c02d1e2ed6c1"
  },
  {
    "url": "assets/js/2.3ff2b952.js",
    "revision": "2eb77f332e794edea9412f79b26740cb"
  },
  {
    "url": "assets/js/20.f12eb34f.js",
    "revision": "9dae33e6e060d339acb5f38125c03261"
  },
  {
    "url": "assets/js/21.7a005725.js",
    "revision": "12c8206d19b3d99a098b4d5a98611742"
  },
  {
    "url": "assets/js/22.7316c80e.js",
    "revision": "a1605f87406ca40c72479b6309fb63cd"
  },
  {
    "url": "assets/js/23.c9f0e7df.js",
    "revision": "4dee529a22b6e9f05b6667276ea18053"
  },
  {
    "url": "assets/js/24.87865368.js",
    "revision": "64abfa8a2b866b52c643c4fc9d4733d0"
  },
  {
    "url": "assets/js/25.9f9dadd5.js",
    "revision": "6b9b19577b67c7a0844955db867374be"
  },
  {
    "url": "assets/js/26.0bd3667c.js",
    "revision": "2e8a028f8496f32fa4c7fab79f66cb8f"
  },
  {
    "url": "assets/js/27.c2759ffa.js",
    "revision": "6757696133cd402651bf0a6e6edfee7c"
  },
  {
    "url": "assets/js/28.c010565f.js",
    "revision": "c42605f7a646b630c7b2e61934112e61"
  },
  {
    "url": "assets/js/29.ca2b8e5e.js",
    "revision": "2cc636ad1516cecc1a461c71afa88b64"
  },
  {
    "url": "assets/js/3.a324c1b8.js",
    "revision": "7bf05c6121dea4048956f171156f221b"
  },
  {
    "url": "assets/js/30.ac264dc8.js",
    "revision": "9515b7e6cf31bffc2e69d48032fcac18"
  },
  {
    "url": "assets/js/31.e3ce1bfe.js",
    "revision": "aa015ed4e154537e2d3dcbd0bb0f2601"
  },
  {
    "url": "assets/js/32.1ea094ad.js",
    "revision": "671b35fb150ba2e3571cf5ccd97be7ec"
  },
  {
    "url": "assets/js/33.4fdbf6e7.js",
    "revision": "874ca624507952258b2e47b29b58b1f7"
  },
  {
    "url": "assets/js/34.eb5f7f38.js",
    "revision": "75df1ab90fb988660bbf4c8a3a140fab"
  },
  {
    "url": "assets/js/35.4220c6f3.js",
    "revision": "cce6e632d8de66f4930451598737ad4e"
  },
  {
    "url": "assets/js/36.2bde0793.js",
    "revision": "ebba92b15daceb3813d0013ea8e4377a"
  },
  {
    "url": "assets/js/37.e9608b31.js",
    "revision": "97d948f413304b5a795662ba6c018ffa"
  },
  {
    "url": "assets/js/38.8701ac31.js",
    "revision": "41b9149ad390ad5ba957df5e716bf525"
  },
  {
    "url": "assets/js/39.61bb4dda.js",
    "revision": "428937aff3879c5ee6d9bdbd9a6b6807"
  },
  {
    "url": "assets/js/4.4f6f246c.js",
    "revision": "d282e6febacb7580c4a7311600b4cafe"
  },
  {
    "url": "assets/js/40.c7f3da9b.js",
    "revision": "16835f560c16ffb1f51c12b949664ef2"
  },
  {
    "url": "assets/js/41.3bc575e5.js",
    "revision": "c9839d7ad4488c2cc3e8ed67682459ce"
  },
  {
    "url": "assets/js/42.bdac92f3.js",
    "revision": "245975dda5084f9ddf65a14a62ebf357"
  },
  {
    "url": "assets/js/43.347020c8.js",
    "revision": "766617684ad26e961efac714cb7c5d1f"
  },
  {
    "url": "assets/js/44.e54347e3.js",
    "revision": "3f6c012c3265f0ca2dce3dc02daae0c8"
  },
  {
    "url": "assets/js/45.b9643482.js",
    "revision": "e9de35dd091ec6c301a20762da6bd684"
  },
  {
    "url": "assets/js/46.7a1d2bc9.js",
    "revision": "e2115934bb05ff3350f5e4a544e3ce8c"
  },
  {
    "url": "assets/js/47.3e234f6c.js",
    "revision": "3e33557718dc2ad9aaf6e9744e920c80"
  },
  {
    "url": "assets/js/48.101ee8f7.js",
    "revision": "87d242f4f4d17bf2459b3a0f1562f8d9"
  },
  {
    "url": "assets/js/49.955cdd91.js",
    "revision": "7537f2ac6486d34b635f209b37eea6dd"
  },
  {
    "url": "assets/js/5.43954ae9.js",
    "revision": "9b81338542d95a44c6f3802bf6f00382"
  },
  {
    "url": "assets/js/50.136ce2c5.js",
    "revision": "9d334ec17c591f18342e2a585fd9c2cd"
  },
  {
    "url": "assets/js/51.14c437fe.js",
    "revision": "2bd9a888de4d11babba654f6d2fc65c1"
  },
  {
    "url": "assets/js/52.79464850.js",
    "revision": "0f63625aa0bbe4c36d25e98b8c324bbd"
  },
  {
    "url": "assets/js/53.b94796b7.js",
    "revision": "8053c089b9656b2d47860abfebd69f48"
  },
  {
    "url": "assets/js/54.19aa67d9.js",
    "revision": "ad0514c956f2b36decf6d6c79d82ae92"
  },
  {
    "url": "assets/js/55.42a7b354.js",
    "revision": "851e9119f084c38585259779734f84b2"
  },
  {
    "url": "assets/js/56.f0daa6a4.js",
    "revision": "ff41eb4278d969c8eb625de9b36e5301"
  },
  {
    "url": "assets/js/57.ab3de6ce.js",
    "revision": "16bea101c042e98048e56eca1f5b71e7"
  },
  {
    "url": "assets/js/58.607ab18d.js",
    "revision": "bca69cdabd3855f57659a5340c224681"
  },
  {
    "url": "assets/js/59.17594f33.js",
    "revision": "a09413b31947f61046d77004888b6f8e"
  },
  {
    "url": "assets/js/6.7c15d46c.js",
    "revision": "7ea8d7b74b264031a553f560134b70ea"
  },
  {
    "url": "assets/js/60.7c4167de.js",
    "revision": "9f3c073adddab3b23c909cbe363db7bc"
  },
  {
    "url": "assets/js/61.38c3b4c0.js",
    "revision": "5a0ffe4ca9bfd4318a27dfeb275c8449"
  },
  {
    "url": "assets/js/62.d5ecba6f.js",
    "revision": "caca65165841a24d7f3ef50b74f5823a"
  },
  {
    "url": "assets/js/7.57e46f94.js",
    "revision": "4b85f969a9a1520aa7b33e560bd1dc65"
  },
  {
    "url": "assets/js/8.87435d67.js",
    "revision": "f4f3bad48e80918f9aecf7923695638c"
  },
  {
    "url": "assets/js/9.8559195e.js",
    "revision": "8f08bd30ccbae2f8031acbc58a00bf46"
  },
  {
    "url": "assets/js/app.bed077a0.js",
    "revision": "0840f751483d42797d613693926db71a"
  },
  {
    "url": "base/1.api/1.env.html",
    "revision": "83ff68ab6c4f6570fc83eba81981f527"
  },
  {
    "url": "base/1.api/1.index.html",
    "revision": "9572d47d233e0b7f8f43d11786111fe3"
  },
  {
    "url": "base/1.api/10.infer.html",
    "revision": "6b516b07111ebfa5caaa8b9c4000d699"
  },
  {
    "url": "base/1.api/11.overlapping.html",
    "revision": "24f500fa55dc0c118d9ad264827c2cad"
  },
  {
    "url": "base/1.api/12.condition.html",
    "revision": "f4d2f2f6cb12030d247586f7c7537636"
  },
  {
    "url": "base/1.api/13.builtin.html",
    "revision": "10031933abed471b75773c2f33b5391d"
  },
  {
    "url": "base/1.api/14.package.html",
    "revision": "a02e1d239a71c2865f9740330ed57860"
  },
  {
    "url": "base/1.api/15.custom.html",
    "revision": "7be9657b199a9dd5e1de83a2e01ec6c9"
  },
  {
    "url": "base/1.api/16.unknown.html",
    "revision": "2c6bf28b0a8ff8f1ffb34aa3a8331c1a"
  },
  {
    "url": "base/1.api/17.module.html",
    "revision": "6504c4d7d05c06c08a715be5f67cf73e"
  },
  {
    "url": "base/1.api/18.statement.html",
    "revision": "2048a5eda6b4216da8d52ffbc8a95e1b"
  },
  {
    "url": "base/1.api/19.extend.html",
    "revision": "b4a5d13963652a88ef592a139adfd15b"
  },
  {
    "url": "base/1.api/2.base.html",
    "revision": "25a4477ff7928d6503bb0679676c8262"
  },
  {
    "url": "base/1.api/3.deduction.html",
    "revision": "a8c6eae18888847cc80e4a84c4cc059b"
  },
  {
    "url": "base/1.api/4.type.html",
    "revision": "049ad6474a14debf54620c360780c1bc"
  },
  {
    "url": "base/1.api/5.class.html",
    "revision": "209daf0feb8f4110c89fba16135e42b5"
  },
  {
    "url": "base/1.api/6.interface.html",
    "revision": "5bd1bc15ff91c7a943d09f3908a55044"
  },
  {
    "url": "base/1.api/7.generic.html",
    "revision": "867fe8eefd54cc7aadf02d5b427b7d98"
  },
  {
    "url": "base/1.api/8.compatible.html",
    "revision": "0381e6199eb09a1d041b3919a79929ae"
  },
  {
    "url": "base/1.api/9.protect.html",
    "revision": "16e55556a8ab2f34577bfe5029226992"
  },
  {
    "url": "base/2.config/1.config.html",
    "revision": "94daa2d467c40f8b46edb5c0e6480ff1"
  },
  {
    "url": "base/2.config/1.index.html",
    "revision": "0659570da3c933c080fb63b1ddf0f4c5"
  },
  {
    "url": "base/2.config/10.ui.html",
    "revision": "ef1e426e7e8b76a972b0b213e7b4ff4d"
  },
  {
    "url": "base/2.config/11.data.html",
    "revision": "60479e829ce3ffda21c0537fdccdd70e"
  },
  {
    "url": "base/2.config/12.skill.html",
    "revision": "8fe49c4a26ab362f0966774e9bdd02ba"
  },
  {
    "url": "base/2.config/13.com.html",
    "revision": "5a8ca1f4e59d98a49df4db9d990888f5"
  },
  {
    "url": "base/2.config/14.data.html",
    "revision": "8ce4ce7eab8fb630d1756f2231812e82"
  },
  {
    "url": "base/2.config/2.webpack.html",
    "revision": "17bd8d4be0c48a80111c6ff195278f18"
  },
  {
    "url": "base/2.config/3.file.html",
    "revision": "c0547b57e253329d232b75b74ab2f037"
  },
  {
    "url": "base/2.config/4.single.html",
    "revision": "9657df65c80c880a401a5db94a444ee1"
  },
  {
    "url": "base/2.config/5.page.html",
    "revision": "7d75830bd842988821cf206a5aada66f"
  },
  {
    "url": "base/2.config/7.module.html",
    "revision": "389a08dfc926e37489d060a81839a1c8"
  },
  {
    "url": "base/2.config/8.project.html",
    "revision": "4208930b2cb915d2aa0cd6bf3df7d710"
  },
  {
    "url": "base/2.config/9.utils.html",
    "revision": "ecd8f70558e00f25f5f8a4c924abfb92"
  },
  {
    "url": "base/3.react/1.index.html",
    "revision": "79f7ce4ddc47c66693b79d4e5812c942"
  },
  {
    "url": "base/3.react/2.Jenkins.html",
    "revision": "3d4535446d2a30bee8958a7abd232233"
  },
  {
    "url": "base/3.react/3.gitlab.html",
    "revision": "5228a8e8fe86c9451b951c65a6cfb41e"
  },
  {
    "url": "base/3.react/i18n.html",
    "revision": "624e6dfced4624a37e36e6055990eca1"
  },
  {
    "url": "base/3.react/prem.html",
    "revision": "8ebb12486c9886008af549d02a666f4d"
  },
  {
    "url": "base/3.react/test.html",
    "revision": "84e48f56a1691e9134149ddedc234144"
  },
  {
    "url": "base/3.react/vscode.html",
    "revision": "ba0362d40ad2ac29ef434cd3622526e3"
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
    "revision": "c15f5c5e9abe56fccc631394cca3ce48"
  },
  {
    "url": "mock/http.js",
    "revision": "c8abf8aba8039ff5bc6fa0517b076832"
  },
  {
    "url": "senior/npm/1.index.html",
    "revision": "ef60717c6cc6e9597e942d6d46e2da0a"
  },
  {
    "url": "senior/use/1.index.html",
    "revision": "1ef129df30e043bdb4c92364419a1587"
  },
  {
    "url": "senior/use/10.table.html",
    "revision": "13fc6108f50f9c5ae952529dfdf36adf"
  },
  {
    "url": "senior/use/11.tree.html",
    "revision": "cb0e38dc5a62039eeb33aa0e8b33bd71"
  },
  {
    "url": "senior/use/2.extend.html",
    "revision": "b99b02f384002b62e5212199ed912f03"
  },
  {
    "url": "senior/use/3.componentCommunication.html",
    "revision": "eb7754d70057234180515d722a6700c7"
  },
  {
    "url": "senior/use/4.render.html",
    "revision": "167ffb3d30d51c22cebf4eb2dc6f6a3c"
  },
  {
    "url": "senior/use/5.api.html",
    "revision": "6baf4ac3ee6f27c1cebb88f0bf0507e1"
  },
  {
    "url": "senior/use/6.form.html",
    "revision": "0400e95e082dafc84304c01b4febb1b0"
  },
  {
    "url": "senior/use/7.checkBox.html",
    "revision": "0df096e08c677f13db7cbb4e30e5ea79"
  },
  {
    "url": "senior/use/8.active.html",
    "revision": "58d70d8f8369ad9686b98ec9585f7140"
  },
  {
    "url": "senior/use/9.alert.html",
    "revision": "5ad39954f341772ffb272c9e0dae8cf7"
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
