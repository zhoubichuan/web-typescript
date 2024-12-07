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
    "revision": "d3fec00dbc3e602e687af1bbc24a79ed"
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
    "url": "assets/js/10.36bb1142.js",
    "revision": "edda0b619cd445fbfcfbdb14812f83a5"
  },
  {
    "url": "assets/js/11.88651669.js",
    "revision": "5325ad811c00a11e3a1015c222fb37cd"
  },
  {
    "url": "assets/js/12.eb929fef.js",
    "revision": "d0dca2bf02a29cde26298e112772cdc4"
  },
  {
    "url": "assets/js/13.88746ff0.js",
    "revision": "9f93435d9499dd47f1b100ceeff35956"
  },
  {
    "url": "assets/js/14.74d845a4.js",
    "revision": "21db1881bc261ec08f3645f16edfdcbd"
  },
  {
    "url": "assets/js/15.a0917ca0.js",
    "revision": "ce31aec049bdd46e3fece6029c2a5656"
  },
  {
    "url": "assets/js/16.371417d1.js",
    "revision": "e53182df1beca9da972ed8ef12e8874d"
  },
  {
    "url": "assets/js/17.25d3424c.js",
    "revision": "eb3b489843d26ad3d61880a776e4ec26"
  },
  {
    "url": "assets/js/18.e41cfc3c.js",
    "revision": "aa80c7b2893de485b881dff436511030"
  },
  {
    "url": "assets/js/19.04f21db5.js",
    "revision": "27df6224bee9ea313e747ea75490c02c"
  },
  {
    "url": "assets/js/2.215919f7.js",
    "revision": "51b2defa51b53e14c4910d558b633575"
  },
  {
    "url": "assets/js/20.d3305eae.js",
    "revision": "78c86832d024f4e6b4b30468437f99e8"
  },
  {
    "url": "assets/js/21.21cb132e.js",
    "revision": "60a34227fc86626f3622e2e60c877f0c"
  },
  {
    "url": "assets/js/22.3c30d57f.js",
    "revision": "ecd8b16612328f4fcde5259c60234618"
  },
  {
    "url": "assets/js/23.4c741aea.js",
    "revision": "6a65495d83ffc7662065ddcca9e9814d"
  },
  {
    "url": "assets/js/24.7238f3df.js",
    "revision": "45a45cea2316b8e871ed08137fdd27c4"
  },
  {
    "url": "assets/js/25.7eefe942.js",
    "revision": "fa6d230fa59bc36047924deb99a27eae"
  },
  {
    "url": "assets/js/26.d27c1509.js",
    "revision": "071641917be7d51f216e1490b32ebafb"
  },
  {
    "url": "assets/js/27.43dc6713.js",
    "revision": "a3b00cee286bd44554e9801158ce042a"
  },
  {
    "url": "assets/js/28.f42a8af7.js",
    "revision": "566dafdf9e4a0cada3399440eda4377b"
  },
  {
    "url": "assets/js/29.a36f953b.js",
    "revision": "dbec2c99efd7c480058eb253bf277079"
  },
  {
    "url": "assets/js/3.7f580e96.js",
    "revision": "a281fc78318b036858f7d738cb965236"
  },
  {
    "url": "assets/js/30.aa04eba1.js",
    "revision": "8e92cf267744b0087d5559ca046987ec"
  },
  {
    "url": "assets/js/31.1f09b0b7.js",
    "revision": "e2cdff9882b34032b3340dab48847e1e"
  },
  {
    "url": "assets/js/32.4374b77a.js",
    "revision": "832442625bcd0194b46009b11c7ce593"
  },
  {
    "url": "assets/js/33.4415a663.js",
    "revision": "863884fc6b700242ec4d4b6d6a761e67"
  },
  {
    "url": "assets/js/34.5ec3e293.js",
    "revision": "19ff8f9e225b555cec72038b826bd2f3"
  },
  {
    "url": "assets/js/35.50daa134.js",
    "revision": "7c62c63db90e90cf03e4309ac56bc109"
  },
  {
    "url": "assets/js/36.66a62838.js",
    "revision": "f09a1c266b7eb731cef059f603e4becd"
  },
  {
    "url": "assets/js/37.aa7496e2.js",
    "revision": "b691ed439124eecdf643a5cffce9d2f2"
  },
  {
    "url": "assets/js/38.0736c4a9.js",
    "revision": "f32679f98abb399776a0abd6bf4af668"
  },
  {
    "url": "assets/js/39.ee188cb8.js",
    "revision": "7c23dc85150ca5b223472604b085e26e"
  },
  {
    "url": "assets/js/4.fd8699ae.js",
    "revision": "1ab9966bf48ee8e1bb10d2da7452b86e"
  },
  {
    "url": "assets/js/40.b4eff577.js",
    "revision": "63dcfb3bd2230ee2d312382777ab9a96"
  },
  {
    "url": "assets/js/41.45bd2315.js",
    "revision": "41d53801ff2ef393126ef5ff6d073969"
  },
  {
    "url": "assets/js/42.2ade9004.js",
    "revision": "dcaa78db013b38b64560d67875b64cb0"
  },
  {
    "url": "assets/js/43.f7bbf214.js",
    "revision": "e6c787700e3653c624798c33c564a1e7"
  },
  {
    "url": "assets/js/44.3c683092.js",
    "revision": "bf81f7bb452c58e1469f20345eccaf05"
  },
  {
    "url": "assets/js/45.c71df3b7.js",
    "revision": "65808c3a76b137569fe0a4ce68f27e9f"
  },
  {
    "url": "assets/js/46.02adafe1.js",
    "revision": "b7cacacddde29b16aff337432168b5d1"
  },
  {
    "url": "assets/js/47.7e4e9a34.js",
    "revision": "72fe20b256f2c1d05317ddccdbe6c36f"
  },
  {
    "url": "assets/js/48.17627ceb.js",
    "revision": "015836ef326de4916c1e6cf16bd1ce82"
  },
  {
    "url": "assets/js/49.5bd83793.js",
    "revision": "c05c55a103f9bec37665f1dc5c5e3a84"
  },
  {
    "url": "assets/js/5.decb7afb.js",
    "revision": "fa4365317f67acbd440605b7acb73c75"
  },
  {
    "url": "assets/js/50.037f492c.js",
    "revision": "78e92d48ab2c3c46c7b4f0f2c4dfb462"
  },
  {
    "url": "assets/js/51.118a3d6a.js",
    "revision": "b58f62f3117f69bb9a0cd0d1f9164adb"
  },
  {
    "url": "assets/js/52.cfe7cbf1.js",
    "revision": "bf31291a0daeb04427c86acff1d1e778"
  },
  {
    "url": "assets/js/53.20752c03.js",
    "revision": "d43e615a3224a2b823d75c11f0201252"
  },
  {
    "url": "assets/js/54.dcbda3fb.js",
    "revision": "1861d32d47314dec2dbe8fbda42fc234"
  },
  {
    "url": "assets/js/55.2b243ed4.js",
    "revision": "3e23ca0fe4c24cafd3dfef51692ef893"
  },
  {
    "url": "assets/js/56.6224c684.js",
    "revision": "0e0ee2471dd02d8c00a9ccccffd63050"
  },
  {
    "url": "assets/js/57.27331e4d.js",
    "revision": "d7d70063c8a2b59a925e82484e29cf19"
  },
  {
    "url": "assets/js/58.4a3fec6f.js",
    "revision": "77623dcf468a920f20e95aeea12493e7"
  },
  {
    "url": "assets/js/59.2c4b68d9.js",
    "revision": "e94c2cba0200af3658ed0ac4d73ddae7"
  },
  {
    "url": "assets/js/6.b549eba9.js",
    "revision": "4a4af0921a96d1e472868f69b1cfc9d4"
  },
  {
    "url": "assets/js/60.ab1dc88d.js",
    "revision": "02dcaee348158d62492f5af6725edba1"
  },
  {
    "url": "assets/js/61.23dfacb3.js",
    "revision": "0bc15d856ebd778a651f932b2fffa99c"
  },
  {
    "url": "assets/js/62.03edaad1.js",
    "revision": "1d814942ae71821cd87bb6a999fa03e9"
  },
  {
    "url": "assets/js/7.a61b24af.js",
    "revision": "9a46e4a765ceadd662f455f5f9a2ee4e"
  },
  {
    "url": "assets/js/8.7fbc0510.js",
    "revision": "24038ffb05ad4406c30cc88cb752058d"
  },
  {
    "url": "assets/js/9.ac621ac0.js",
    "revision": "81e648b74d1cb44fb135921c06a305fd"
  },
  {
    "url": "assets/js/app.cfa4f44a.js",
    "revision": "897266ee8b396c87ce175636bab0af69"
  },
  {
    "url": "base/1.api/1.env.html",
    "revision": "77e9c1effd6f99b8eceed3038656da9d"
  },
  {
    "url": "base/1.api/1.index.html",
    "revision": "4780b8bc6b0a0582ab30b577fbe41bfe"
  },
  {
    "url": "base/1.api/10.infer.html",
    "revision": "9ca825658c43151d8581f46db1773e75"
  },
  {
    "url": "base/1.api/11.overlapping.html",
    "revision": "cfbb3e736b7883a1597f39e685602bcd"
  },
  {
    "url": "base/1.api/12.condition.html",
    "revision": "801a8ab13fdee5bced6c6307ba32f5f9"
  },
  {
    "url": "base/1.api/13.builtin.html",
    "revision": "3e3c3b6f400abb953980b38ec580e7ed"
  },
  {
    "url": "base/1.api/14.package.html",
    "revision": "3a55d4ba293cee4e9b451d84aa36e13b"
  },
  {
    "url": "base/1.api/15.custom.html",
    "revision": "c81878995376b584d6ef255f9fcfe0bd"
  },
  {
    "url": "base/1.api/16.unknown.html",
    "revision": "d98902d0bde7dfa45b321f04786c80d4"
  },
  {
    "url": "base/1.api/17.module.html",
    "revision": "0d1df80a330410c213cb2077f9a695d2"
  },
  {
    "url": "base/1.api/18.statement.html",
    "revision": "39a937d6aae9c8c2f8880d90f80f3859"
  },
  {
    "url": "base/1.api/19.extend.html",
    "revision": "515568ad15d587a2bf3b55f9bb0a4c54"
  },
  {
    "url": "base/1.api/2.base.html",
    "revision": "98954b89e0b3b25708c784c348a29fb8"
  },
  {
    "url": "base/1.api/3.deduction.html",
    "revision": "295594e8905bf737c9a8e035900c6bef"
  },
  {
    "url": "base/1.api/4.type.html",
    "revision": "af09cb8dafee8505ab1848060875ff4e"
  },
  {
    "url": "base/1.api/5.class.html",
    "revision": "3d70eea4528290cebe9f046a5122a8f6"
  },
  {
    "url": "base/1.api/6.interface.html",
    "revision": "dac327381fe9f6a9c2830f99c578426d"
  },
  {
    "url": "base/1.api/7.generic.html",
    "revision": "051ef7ec05c8ee7570088d495f9b76ee"
  },
  {
    "url": "base/1.api/8.compatible.html",
    "revision": "fd15f565d046e0783849ac9871463f72"
  },
  {
    "url": "base/1.api/9.protect.html",
    "revision": "82d3d3459e6b6077737a299b44c10457"
  },
  {
    "url": "base/2.config/1.config.html",
    "revision": "717f0827c9c164686dac50c34c60897b"
  },
  {
    "url": "base/2.config/1.index.html",
    "revision": "19ced6d2d353d8926cc645e906df5dcc"
  },
  {
    "url": "base/2.config/10.ui.html",
    "revision": "acfb5df54d51712b7d7c6cceb2f6c1fd"
  },
  {
    "url": "base/2.config/11.data.html",
    "revision": "89ca0dafa27c3def1bcb4f3cabb672c8"
  },
  {
    "url": "base/2.config/12.skill.html",
    "revision": "9b110d60dae501836056f2aa69b4e53c"
  },
  {
    "url": "base/2.config/13.com.html",
    "revision": "02b199214e8b2fcae0d4a06a10644e4d"
  },
  {
    "url": "base/2.config/14.data.html",
    "revision": "4837575a18508eee6eadc08e412b9213"
  },
  {
    "url": "base/2.config/2.webpack.html",
    "revision": "aef92f142b6ee70695f912b34854fe34"
  },
  {
    "url": "base/2.config/3.file.html",
    "revision": "e04ab32e92c0c732b26f4f6af366387e"
  },
  {
    "url": "base/2.config/4.single.html",
    "revision": "b383c19378f4ceff7f3a3a5acea5358d"
  },
  {
    "url": "base/2.config/5.page.html",
    "revision": "beb13657e25b17b1e76e3a94d3fe5142"
  },
  {
    "url": "base/2.config/7.module.html",
    "revision": "35bb6c2ff1f6162fb80729697235893e"
  },
  {
    "url": "base/2.config/8.project.html",
    "revision": "eedafcb053b9052b646e7900cfb83f8a"
  },
  {
    "url": "base/2.config/9.utils.html",
    "revision": "be5c02dbfe668a636106dea6c58e006c"
  },
  {
    "url": "base/3.react/1.index.html",
    "revision": "7e6ece0449ff1dc05521c41e45fcaa12"
  },
  {
    "url": "base/3.react/2.Jenkins.html",
    "revision": "51b90725812c90688372442788ca7cb3"
  },
  {
    "url": "base/3.react/3.gitlab.html",
    "revision": "ea87318e0aa009e68d153f7b70a905c5"
  },
  {
    "url": "base/3.react/i18n.html",
    "revision": "23181e5c515f0c532c8da22eaef42f22"
  },
  {
    "url": "base/3.react/prem.html",
    "revision": "bb1a470325d2630c56d9c728c1917d56"
  },
  {
    "url": "base/3.react/test.html",
    "revision": "36954ac6f930cb5d5849cec722648715"
  },
  {
    "url": "base/3.react/vscode.html",
    "revision": "3fc1cddd5fea504601b309ac1b302f7c"
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
    "revision": "e3b0835cccc4bb7d990983c041cbd925"
  },
  {
    "url": "mock/http.js",
    "revision": "c8abf8aba8039ff5bc6fa0517b076832"
  },
  {
    "url": "senior/npm/1.index.html",
    "revision": "fe53c22bc4620b6538ae7b4f7c03ac1c"
  },
  {
    "url": "senior/vue/1.index.html",
    "revision": "bbcf64c2552f8238b7ea98f37723f5e1"
  },
  {
    "url": "senior/vue/10.element-plus.html",
    "revision": "0ee1076716851c7a6484440d3232dc78"
  },
  {
    "url": "senior/vue/11.tsx.html",
    "revision": "c2336baceda511d5c2509bd2da54363a"
  },
  {
    "url": "senior/vue/2.ref.html",
    "revision": "ec2884b2dc5027ce4a212642f5075c1a"
  },
  {
    "url": "senior/vue/3.props.html",
    "revision": "6dbef00e1075b18ab715a7d82331279b"
  },
  {
    "url": "senior/vue/4.emits.html",
    "revision": "9db9a10a79720132ece06768abab5913"
  },
  {
    "url": "senior/vue/5.component.html",
    "revision": "9d9b0484a300c515d054a4be24a404d3"
  },
  {
    "url": "senior/vue/6.slot.html",
    "revision": "8415fcfe5cd2782628eb0c27dbc69cc6"
  },
  {
    "url": "senior/vue/7.vue-router.html",
    "revision": "031e7da050423d039760f0a7c78120ba"
  },
  {
    "url": "senior/vue/8.tsconfig.html",
    "revision": "722fafb15f4375958d0ed78d52fa0804"
  },
  {
    "url": "senior/vue/9.vuex.html",
    "revision": "35ac2a5edb0b7d3458b54a94afbf836c"
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
