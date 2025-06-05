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
    "revision": "8cc26a16a01150c9dfd4f501232b4b42"
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
    "url": "assets/js/11.70315ee8.js",
    "revision": "3cc463369b1bb32cadac46940c9c2a0b"
  },
  {
    "url": "assets/js/12.29b36cdd.js",
    "revision": "965bae1ac9bd38269deeec70d54e557f"
  },
  {
    "url": "assets/js/13.4d7e5cbe.js",
    "revision": "c42d08eeeb44ccad299e396cf9bf9405"
  },
  {
    "url": "assets/js/14.889d9a3a.js",
    "revision": "54c40c51d8ed51067842d4e494c63fd9"
  },
  {
    "url": "assets/js/15.7ba369ce.js",
    "revision": "b08cf4d9e25f7cfd5e4af6914918066a"
  },
  {
    "url": "assets/js/16.b3777c30.js",
    "revision": "9ddce091e984ea97948da7c5d87ad444"
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
    "url": "assets/js/20.821eca11.js",
    "revision": "6ce7d0376ef081ca9233a910c9876976"
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
    "url": "assets/js/28.6b4994d4.js",
    "revision": "ef81a0532fb8b953f96069886191a536"
  },
  {
    "url": "assets/js/29.250de6c2.js",
    "revision": "9e833f9d6c12dba41bfc141af1d09323"
  },
  {
    "url": "assets/js/3.a2c77c55.js",
    "revision": "316ce824fa7f549876acb25f61516954"
  },
  {
    "url": "assets/js/30.6376af91.js",
    "revision": "009a29b6847bbc9df3a98a97f2183bde"
  },
  {
    "url": "assets/js/31.267981b4.js",
    "revision": "4dc6d2e813c62e83eba911bdb6b20fd3"
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
    "url": "assets/js/35.94a0193e.js",
    "revision": "410bc010855070e532441393900a1631"
  },
  {
    "url": "assets/js/36.50837fef.js",
    "revision": "17604e296beb62436d9fc8b8df1a4191"
  },
  {
    "url": "assets/js/37.2c4c0d7a.js",
    "revision": "d0ab8631c06ae5141c81da28d4d65b5a"
  },
  {
    "url": "assets/js/38.5c5521de.js",
    "revision": "932385f75067f93bb073b79bfdcce99c"
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
    "url": "assets/js/42.14e0c635.js",
    "revision": "a886b21965baa3a36346e02a229ee13c"
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
    "url": "assets/js/50.91bc160e.js",
    "revision": "21e176fcc254e5f9548a9d9232a700e1"
  },
  {
    "url": "assets/js/51.55b7a8e3.js",
    "revision": "1678aa9353219800cb18d441ff009a5f"
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
    "url": "assets/js/56.65f45cff.js",
    "revision": "0d7c5357128b2896aecc55426faa7a7a"
  },
  {
    "url": "assets/js/57.e7d1ea81.js",
    "revision": "a7f37112c3b3e9a0e11e3548a1baac9e"
  },
  {
    "url": "assets/js/58.26d1198f.js",
    "revision": "3a9c59247b8ab020b25e9830a5984394"
  },
  {
    "url": "assets/js/59.74af5529.js",
    "revision": "65f0919cdb6b8c2fdfa075109dc23d24"
  },
  {
    "url": "assets/js/6.dc20395f.js",
    "revision": "17bc7bb7deb438fc9273a43f302caf63"
  },
  {
    "url": "assets/js/60.02d0cc46.js",
    "revision": "3daf690e8640cf276fd4c62aa372a60e"
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
    "url": "assets/js/7.e1732a0a.js",
    "revision": "c1b7912a33df5512d6c3ca746319fbf2"
  },
  {
    "url": "assets/js/8.d813e106.js",
    "revision": "1978aa7017510476920429006ee34ba5"
  },
  {
    "url": "assets/js/9.fb8f0c55.js",
    "revision": "c38205e7325750f88da18c7a3e5e937d"
  },
  {
    "url": "assets/js/app.acab265f.js",
    "revision": "6c531803c5ad1a3e5842005150778847"
  },
  {
    "url": "base/1.api/1.env.html",
    "revision": "d9190c7343150b5ec1e613617d4ac7e2"
  },
  {
    "url": "base/1.api/1.index.html",
    "revision": "837e335a259172868e38ea1ae7b175f2"
  },
  {
    "url": "base/1.api/10.infer.html",
    "revision": "dcc7adb398440a74c92becfb37c203ac"
  },
  {
    "url": "base/1.api/11.overlapping.html",
    "revision": "03c9ececcd1be8c44262bbc24d90db11"
  },
  {
    "url": "base/1.api/12.condition.html",
    "revision": "43ea95eab929d221e3029a8e63b44637"
  },
  {
    "url": "base/1.api/13.builtin.html",
    "revision": "04074524c578b6e3c1872b937bc15f9e"
  },
  {
    "url": "base/1.api/14.package.html",
    "revision": "a4d9457d76dab4ec9863c3a1cee1ecc0"
  },
  {
    "url": "base/1.api/15.custom.html",
    "revision": "0ee2bbf7d84a4d8ff2cb62d94d86e37b"
  },
  {
    "url": "base/1.api/16.unknown.html",
    "revision": "dad62a7b33f74503210113e08c4f0b43"
  },
  {
    "url": "base/1.api/17.module.html",
    "revision": "1ca6b6ced3ebbbe3cf339ac4fbad4028"
  },
  {
    "url": "base/1.api/18.statement.html",
    "revision": "ad200849060c39e5af768f447a6c2a98"
  },
  {
    "url": "base/1.api/19.extend.html",
    "revision": "5ba985b12c09865202c44dcfe754f587"
  },
  {
    "url": "base/1.api/2.base.html",
    "revision": "e0342a98886682b23c3a506b3951578b"
  },
  {
    "url": "base/1.api/3.deduction.html",
    "revision": "5acc19cc4dc8d657e576ada56ad51f47"
  },
  {
    "url": "base/1.api/4.type.html",
    "revision": "7ad9f9248f23c1b182c0bcc8ef1d1853"
  },
  {
    "url": "base/1.api/5.class.html",
    "revision": "7b85b16e03da123ea6d76e30c383fb10"
  },
  {
    "url": "base/1.api/6.interface.html",
    "revision": "38508dd9c3c372b71888eef49746b13a"
  },
  {
    "url": "base/1.api/7.generic.html",
    "revision": "72b64884215786f1d7eaaef4d27f913f"
  },
  {
    "url": "base/1.api/8.compatible.html",
    "revision": "04ccae767a23f21c369428fc7dac895d"
  },
  {
    "url": "base/1.api/9.protect.html",
    "revision": "dac47d9e7136f60c143127880b78ba48"
  },
  {
    "url": "base/2.config/1.config.html",
    "revision": "8fde38d8c385949e52e99e83fb0bb518"
  },
  {
    "url": "base/2.config/1.index.html",
    "revision": "619faad0b61a2da24dbc7bcc5e52333c"
  },
  {
    "url": "base/2.config/10.ui.html",
    "revision": "1119e45636a15f56cc1bc10b1c7d31af"
  },
  {
    "url": "base/2.config/11.data.html",
    "revision": "de4965480f77ca84d55ca89d6ac2e992"
  },
  {
    "url": "base/2.config/12.skill.html",
    "revision": "59fb9989a74192011040ea28a3aa8b29"
  },
  {
    "url": "base/2.config/13.com.html",
    "revision": "36d20585db613e910aad1cbb27ebb748"
  },
  {
    "url": "base/2.config/14.data.html",
    "revision": "e28c4b7e80462b72082c1db6e8a388e4"
  },
  {
    "url": "base/2.config/2.webpack.html",
    "revision": "8c10ef629cfcc289f077a45f58d4a867"
  },
  {
    "url": "base/2.config/3.file.html",
    "revision": "08514a9698627fa7012fe1ce97051a01"
  },
  {
    "url": "base/2.config/4.single.html",
    "revision": "c0493c8f890ca9e351f6f732b7915768"
  },
  {
    "url": "base/2.config/5.page.html",
    "revision": "f18d51cefa6851c041df9fa7ca802013"
  },
  {
    "url": "base/2.config/7.module.html",
    "revision": "fb7ac88c2ab4557a75b7b4b9ee05c12f"
  },
  {
    "url": "base/2.config/8.project.html",
    "revision": "49d031c866600b071d4ecc68cdac099f"
  },
  {
    "url": "base/2.config/9.utils.html",
    "revision": "8bab0e4127ef1c23fa31c838713fb912"
  },
  {
    "url": "base/3.react/1.index.html",
    "revision": "ffa80ea156693e728eb58a2b82a0f9bd"
  },
  {
    "url": "base/3.react/2.Jenkins.html",
    "revision": "3d1c552ac5fae85153d298a8605b698c"
  },
  {
    "url": "base/3.react/3.gitlab.html",
    "revision": "5099e50e5d49d56924f074f9270384ce"
  },
  {
    "url": "base/3.react/4.vscode.html",
    "revision": "a0575e8723a6ca216223b28f81e1b103"
  },
  {
    "url": "base/3.react/5.zod.html",
    "revision": "8e8c6be2ed1044a639b501325d3c7d81"
  },
  {
    "url": "base/3.react/i18n.html",
    "revision": "e9476415ac4d460a62ffb5570ffba644"
  },
  {
    "url": "base/3.react/prem.html",
    "revision": "02818db70488bca8ae49cd0e30a9e21a"
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
    "revision": "87ed860ba17acb40b23962afb9cdc947"
  },
  {
    "url": "mock/http.js",
    "revision": "c8abf8aba8039ff5bc6fa0517b076832"
  },
  {
    "url": "project/react/1.index.html",
    "revision": "7d8f515c57b0d932d48bcadf7bbc13d2"
  },
  {
    "url": "project/vue/1.index.html",
    "revision": "47cb35e9dded37c6d5110c218749e553"
  },
  {
    "url": "project/vue/10.element-plus.html",
    "revision": "a014614c9b9d5e6063022a0676607382"
  },
  {
    "url": "project/vue/11.tsx.html",
    "revision": "fda5d852291bca87298a8bad607f58eb"
  },
  {
    "url": "project/vue/2.ref.html",
    "revision": "6047f9798f94c77ab18b67a45e1f7667"
  },
  {
    "url": "project/vue/3.props.html",
    "revision": "08607e9b7c13da18d02ba8dab00feeed"
  },
  {
    "url": "project/vue/4.emits.html",
    "revision": "6c391d2ebaaf28b1b974d6a821f842c1"
  },
  {
    "url": "project/vue/5.component.html",
    "revision": "093cc5cbcd9a17c429a683181dc2715a"
  },
  {
    "url": "project/vue/6.slot.html",
    "revision": "7e3f36e55d620915dd5b31c146f883c2"
  },
  {
    "url": "project/vue/7.vue-router.html",
    "revision": "ef2a8edf34a7c8374c6b4b3fa32ac9ca"
  },
  {
    "url": "project/vue/8.tsconfig.html",
    "revision": "fff0ca8e115d29b0c41ea66bbcf39116"
  },
  {
    "url": "project/vue/9.vuex.html",
    "revision": "d5fdffd36bbd67f0ca7b6c8bc56c2953"
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
