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
    "revision": "1f71df232d8e3b2fd40a6bf25e3e096a"
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
    "url": "assets/js/10.d2895a94.js",
    "revision": "a061937dede2a109b1573809d94218fd"
  },
  {
    "url": "assets/js/11.a52b34c1.js",
    "revision": "277c5ab19699bb0c33de74596a025411"
  },
  {
    "url": "assets/js/12.fbebf8e6.js",
    "revision": "6136df93b45f0d47a0ade08454d51e08"
  },
  {
    "url": "assets/js/13.a6a87173.js",
    "revision": "920dd2d9986e3de7852d2ddd02783d81"
  },
  {
    "url": "assets/js/14.160a5de1.js",
    "revision": "2a17bd410a7fd88e8ab69e253337ffce"
  },
  {
    "url": "assets/js/15.e4bac1b6.js",
    "revision": "75fd4e988a51e2a77e56fe34a7c3352d"
  },
  {
    "url": "assets/js/16.99eeb287.js",
    "revision": "8395fca22a5cac9f74b0ee96bc6588af"
  },
  {
    "url": "assets/js/17.46d12fb8.js",
    "revision": "667f465e6ca44827c64226d8cd3268ad"
  },
  {
    "url": "assets/js/18.83300b3b.js",
    "revision": "2dd2e46f20e5b7222e75d8741590b285"
  },
  {
    "url": "assets/js/19.e6f94cfc.js",
    "revision": "25a74f555f9596a2c80006005e72ef8c"
  },
  {
    "url": "assets/js/2.574d6801.js",
    "revision": "62febd82a0b306213a05a553badb8484"
  },
  {
    "url": "assets/js/20.1af209a8.js",
    "revision": "17699547f3aa701ec6f1f1219a5038c9"
  },
  {
    "url": "assets/js/21.23f8f63b.js",
    "revision": "af5415da39578e82c821cfddbc0696f7"
  },
  {
    "url": "assets/js/22.5c354282.js",
    "revision": "56e4b6b288bc379fff0c406924d73b24"
  },
  {
    "url": "assets/js/23.99b5e00f.js",
    "revision": "ff457596fd6e0bfa0e8c42bc72849ccc"
  },
  {
    "url": "assets/js/24.15531ed4.js",
    "revision": "c07155661d769dccc090e3d15982c72c"
  },
  {
    "url": "assets/js/25.4b8cb6c7.js",
    "revision": "1fb94e85a298965008461a0ed349ca70"
  },
  {
    "url": "assets/js/26.859f463a.js",
    "revision": "d66df6a96bfacd8b85ae03e68b407465"
  },
  {
    "url": "assets/js/27.269bab3f.js",
    "revision": "035451d023889359f218de29789dadab"
  },
  {
    "url": "assets/js/28.b03b5a9c.js",
    "revision": "712fc45d56544d09301f7c08217d27ab"
  },
  {
    "url": "assets/js/29.33fc5f61.js",
    "revision": "81325d3baf4b8c7bd74c1b2d1602db73"
  },
  {
    "url": "assets/js/3.a115f27a.js",
    "revision": "d227c8cd302b39cb24444fa8e03f0727"
  },
  {
    "url": "assets/js/30.021eb1b6.js",
    "revision": "cb8e4db75f3df1b06105442b1b5836af"
  },
  {
    "url": "assets/js/31.ff7cdb22.js",
    "revision": "6da0fbe418e0ab7d3be3f104302c46d8"
  },
  {
    "url": "assets/js/32.8fe0d65b.js",
    "revision": "74416abc95b24e6f79bf8002af7cef5f"
  },
  {
    "url": "assets/js/33.8a6214ad.js",
    "revision": "282bc9c58ed36a395d450c9adfc66d93"
  },
  {
    "url": "assets/js/34.c3e7e74d.js",
    "revision": "3cdaf552c0a1cca3b58244084010dce8"
  },
  {
    "url": "assets/js/35.ff104d68.js",
    "revision": "85ab1106cbe3d17370fb559fcff70579"
  },
  {
    "url": "assets/js/36.0f1c13cc.js",
    "revision": "ce1437017472ea38e7d829684bca9b74"
  },
  {
    "url": "assets/js/37.81ac296b.js",
    "revision": "440bc5802a67b6fb5e5f30cb081c53c4"
  },
  {
    "url": "assets/js/38.bdbce729.js",
    "revision": "2f83a314b23cd235ed3f5120c3d7771b"
  },
  {
    "url": "assets/js/39.d502663e.js",
    "revision": "21e8f6b9f81a552acea54161631543e0"
  },
  {
    "url": "assets/js/4.4d57f3cc.js",
    "revision": "358b6be98bebdd29322012451290de9c"
  },
  {
    "url": "assets/js/40.7e00b807.js",
    "revision": "c15d1bd341bac6aa29c084697c584158"
  },
  {
    "url": "assets/js/41.a48ad247.js",
    "revision": "291845ede2f3c38104ac0addc57229c5"
  },
  {
    "url": "assets/js/42.65cdd585.js",
    "revision": "2eb5c5a1a87950ec0df116725f05b07d"
  },
  {
    "url": "assets/js/43.07964653.js",
    "revision": "e6fbc41c3deb4fcf757aa636ef498070"
  },
  {
    "url": "assets/js/44.53d56ae3.js",
    "revision": "4782cbcc5d7606b40f144a053c556733"
  },
  {
    "url": "assets/js/45.0f969184.js",
    "revision": "052b96eca5430c8ef34810a6e18d046a"
  },
  {
    "url": "assets/js/46.84fd2961.js",
    "revision": "beadc01a542ad981f391bbd4a72753e1"
  },
  {
    "url": "assets/js/47.da1f445e.js",
    "revision": "b72d5f99d37f9b01e96f0ce6e3a02e54"
  },
  {
    "url": "assets/js/48.270ba48a.js",
    "revision": "a7e3dc02cb847c8aac137e9c5d600e8f"
  },
  {
    "url": "assets/js/49.adbadc74.js",
    "revision": "ed96de58b9236b59be2c67002be63021"
  },
  {
    "url": "assets/js/5.2b938f2c.js",
    "revision": "0972ee918da64009d11f9b9b1cca3c5e"
  },
  {
    "url": "assets/js/50.e247ac8f.js",
    "revision": "c6791b7509d39744aa9b5a2b3845fdec"
  },
  {
    "url": "assets/js/51.2d85ef9c.js",
    "revision": "6a45a163a94f57e9e4ac2038b3b9ac40"
  },
  {
    "url": "assets/js/52.ea00c949.js",
    "revision": "5fb4eabe27c1735a9ca8c8207bcd389d"
  },
  {
    "url": "assets/js/53.993614a1.js",
    "revision": "49aea92abc850455f4c50635066a070c"
  },
  {
    "url": "assets/js/54.2021079d.js",
    "revision": "45becd706339fd608309433e227e82f4"
  },
  {
    "url": "assets/js/55.8bf5e344.js",
    "revision": "e6e6d3ad0b2be3a2d870c96b88800961"
  },
  {
    "url": "assets/js/56.1225209c.js",
    "revision": "ae3dcf864c087288a980bb43ff83ea2c"
  },
  {
    "url": "assets/js/57.00b9a96b.js",
    "revision": "3d0a9b9e6c62c49822cd0b66e41ba6f3"
  },
  {
    "url": "assets/js/58.60136668.js",
    "revision": "378e5038c71cb540d5a4b84af61593cb"
  },
  {
    "url": "assets/js/59.d847f424.js",
    "revision": "472a54337e57a7d43f8140325cc6ba80"
  },
  {
    "url": "assets/js/6.72bebd06.js",
    "revision": "ea602f0c0a1033a059f8b0c9d6cc91c7"
  },
  {
    "url": "assets/js/60.f14b5371.js",
    "revision": "4816dd0b61d99e33e85bd6a27456114b"
  },
  {
    "url": "assets/js/61.df73b27e.js",
    "revision": "6454a60413a3ab33f4c8bfc51fd87eba"
  },
  {
    "url": "assets/js/62.c92272b5.js",
    "revision": "d4a6a65511eaa36df099d4a3ec62ad71"
  },
  {
    "url": "assets/js/7.02e7960a.js",
    "revision": "1d22add40165109730af85a988f40326"
  },
  {
    "url": "assets/js/8.a5a2062b.js",
    "revision": "0a1c277ca141c3a59d5d3b4f342113d6"
  },
  {
    "url": "assets/js/9.1ddc7503.js",
    "revision": "c8eca284f33c90c43c5ee942782ded02"
  },
  {
    "url": "assets/js/app.2b9f67b2.js",
    "revision": "2a4911f36c3782551164d59f69ec2429"
  },
  {
    "url": "base/1.api/1.env.html",
    "revision": "bfb5ee687fcc021962fc2317108ace0d"
  },
  {
    "url": "base/1.api/1.index.html",
    "revision": "ed4dfef4894269dda1a27e06ff8b775f"
  },
  {
    "url": "base/1.api/10.infer.html",
    "revision": "d5a9dba5eef7d17271868946c7523300"
  },
  {
    "url": "base/1.api/11.overlapping.html",
    "revision": "1acfd7d0d1045e19773233770269c48b"
  },
  {
    "url": "base/1.api/12.condition.html",
    "revision": "f14c2959c1326bd204dc82af00c5a95b"
  },
  {
    "url": "base/1.api/13.builtin.html",
    "revision": "96f1a02d8575347e614122ccebce57c9"
  },
  {
    "url": "base/1.api/14.package.html",
    "revision": "79a120b99a3192b814cb2d817681f591"
  },
  {
    "url": "base/1.api/15.custom.html",
    "revision": "9542ea8a93da2f1cf9c8b7cd75f196cd"
  },
  {
    "url": "base/1.api/16.unknown.html",
    "revision": "04ce7834f8890db49d997837247ce7d9"
  },
  {
    "url": "base/1.api/17.module.html",
    "revision": "c0497a18502681953e2747f882cc46a5"
  },
  {
    "url": "base/1.api/18.statement.html",
    "revision": "011b6ea243eaefba40c2c90c10864b6d"
  },
  {
    "url": "base/1.api/19.extend.html",
    "revision": "b1eeaaae6a61e296eb2ff7bd9492fdd3"
  },
  {
    "url": "base/1.api/2.base.html",
    "revision": "673872f5fac28c169876a7b9a076984a"
  },
  {
    "url": "base/1.api/3.deduction.html",
    "revision": "68281318058b5b4d0c9877a1779cf51c"
  },
  {
    "url": "base/1.api/4.type.html",
    "revision": "a19fb6526428f6cb60bc86947545ed4b"
  },
  {
    "url": "base/1.api/5.class.html",
    "revision": "2a63bf8ce2e37d3b1c728370bd4cfe37"
  },
  {
    "url": "base/1.api/6.interface.html",
    "revision": "dd3f0054fb5d90f9189ef48f5484eff0"
  },
  {
    "url": "base/1.api/7.generic.html",
    "revision": "288e4823ddd9e4a96ec78205584171dc"
  },
  {
    "url": "base/1.api/8.compatible.html",
    "revision": "76aeb07ac97c62aaa0ce3bfe36a1e52f"
  },
  {
    "url": "base/1.api/9.protect.html",
    "revision": "37642f4c9b0279a0510bc31873408c0b"
  },
  {
    "url": "base/2.config/1.config.html",
    "revision": "e6ebd6be58dbbd04f03c6910a2e3a8b1"
  },
  {
    "url": "base/2.config/1.index.html",
    "revision": "9a515d060e9c791ff7c82ad9b698db47"
  },
  {
    "url": "base/2.config/10.ui.html",
    "revision": "e98c308cd62f1b0c7ed25e853a1510b3"
  },
  {
    "url": "base/2.config/11.data.html",
    "revision": "af2de1249f3a646713cb5dafce36203d"
  },
  {
    "url": "base/2.config/12.skill.html",
    "revision": "6471633d628549077f018fffc6e06f28"
  },
  {
    "url": "base/2.config/13.com.html",
    "revision": "04b87f0f08e24029f0269a9a51a45f5b"
  },
  {
    "url": "base/2.config/14.data.html",
    "revision": "62ecd6155c7ef853e7543c2f610631a8"
  },
  {
    "url": "base/2.config/2.webpack.html",
    "revision": "16e16556b48d26d308aea13da023f8d3"
  },
  {
    "url": "base/2.config/3.file.html",
    "revision": "704cbb7224a96fa1f2308277bda59754"
  },
  {
    "url": "base/2.config/4.single.html",
    "revision": "1d2db55b050892e72890747304deab9c"
  },
  {
    "url": "base/2.config/5.page.html",
    "revision": "16723a697d3c77aa7e022bbefb523b64"
  },
  {
    "url": "base/2.config/7.module.html",
    "revision": "5687d7dc378ba74ecc65ad6338b4c515"
  },
  {
    "url": "base/2.config/8.project.html",
    "revision": "c3e51a50ae7de14a6d42c597301d24e2"
  },
  {
    "url": "base/2.config/9.utils.html",
    "revision": "893993face0d77ac926931364652a07a"
  },
  {
    "url": "base/3.react/1.index.html",
    "revision": "baa254e2031e03c373ae2270d76b0841"
  },
  {
    "url": "base/3.react/2.Jenkins.html",
    "revision": "5287eb227780590472d0e9629833543e"
  },
  {
    "url": "base/3.react/3.gitlab.html",
    "revision": "015bbc83c77ca75c93c3880c1d1d5813"
  },
  {
    "url": "base/3.react/i18n.html",
    "revision": "f972307dc2c20d3387d6f584bc1b47b7"
  },
  {
    "url": "base/3.react/prem.html",
    "revision": "8aee084186bfbdf0130264eec1da08cb"
  },
  {
    "url": "base/3.react/test.html",
    "revision": "b99b526acb9a1ac4f16d172f3b950313"
  },
  {
    "url": "base/3.react/vscode.html",
    "revision": "907d36c3d6d1eda73879fefb6ded5b66"
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
    "revision": "3383dbd55a706925123fcf7c9cb9d978"
  },
  {
    "url": "mock/http.js",
    "revision": "c8abf8aba8039ff5bc6fa0517b076832"
  },
  {
    "url": "senior/npm/1.index.html",
    "revision": "70a28a0b9903bed8569439759543d9c3"
  },
  {
    "url": "senior/vue/1.index.html",
    "revision": "e00075a60875f6f9d0e3c13f9fb52bf1"
  },
  {
    "url": "senior/vue/10.element-plus.html",
    "revision": "624625002ba90894c6a3926b4915d786"
  },
  {
    "url": "senior/vue/11.tsx.html",
    "revision": "8ac55be2161b04d9cf7e729c53f1b18a"
  },
  {
    "url": "senior/vue/2.ref.html",
    "revision": "7eef6f375d781214871d4ab533e0a7e8"
  },
  {
    "url": "senior/vue/3.props.html",
    "revision": "69d59271a6a578b4e17b8a2e83a834a4"
  },
  {
    "url": "senior/vue/4.emits.html",
    "revision": "bf7eaeb790a16d69298b74573ba71c85"
  },
  {
    "url": "senior/vue/5.component.html",
    "revision": "fb8dc40cb5ef9b4d57c8b34ac3429c02"
  },
  {
    "url": "senior/vue/6.slot.html",
    "revision": "cdbc3d5d0fa123d2bcbc50370d1aebf6"
  },
  {
    "url": "senior/vue/7.vue-router.html",
    "revision": "f8ccc75a7815da4fbdb401141083e7cc"
  },
  {
    "url": "senior/vue/8.tsconfig.html",
    "revision": "45b6dd456143519642da02f3327e6b00"
  },
  {
    "url": "senior/vue/9.vuex.html",
    "revision": "ff41a4cb93389ee84267391255cdaebd"
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
