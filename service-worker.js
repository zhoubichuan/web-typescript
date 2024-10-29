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
    "revision": "e509c546d0c7ca4b2388c3760c76a111"
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
    "url": "assets/js/10.0d27fe69.js",
    "revision": "06d51f4c1e0b4aebca6bfc63432fa288"
  },
  {
    "url": "assets/js/11.17c4dee7.js",
    "revision": "fe1c19cf276b387eb0cf872e7d0eb6d0"
  },
  {
    "url": "assets/js/12.6942e728.js",
    "revision": "f9b10cc1c74361de65c0813d00e4fdf2"
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
    "url": "assets/js/19.0d35bee8.js",
    "revision": "207ee1f3269616fb5042fe3568900b17"
  },
  {
    "url": "assets/js/2.c8c0c7e3.js",
    "revision": "bf3576487357da8939cf82eea38f445c"
  },
  {
    "url": "assets/js/20.8cd065fd.js",
    "revision": "155e2f0fcc7e6cf1d119a13adf5ea7eb"
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
    "url": "assets/js/25.9ec98bd8.js",
    "revision": "4a837c5126fc159fbcf24597b5c39a20"
  },
  {
    "url": "assets/js/26.b9ca9ebe.js",
    "revision": "dd89eff1cae95b0535e1f530e1002759"
  },
  {
    "url": "assets/js/27.eb05c655.js",
    "revision": "3b85f65015e04c52219a976c427e839f"
  },
  {
    "url": "assets/js/28.e3299ecb.js",
    "revision": "f80bbca3985f8e282d9c21573b68ac32"
  },
  {
    "url": "assets/js/29.6d00dd78.js",
    "revision": "ef2f7de3a8b38b7ead938b543bd4cc45"
  },
  {
    "url": "assets/js/3.384e845f.js",
    "revision": "fbf7f49d43a1979ecb3e6e97c2466f4b"
  },
  {
    "url": "assets/js/30.1049993c.js",
    "revision": "7fddcc755aa8519611a01f252a3fb2b5"
  },
  {
    "url": "assets/js/31.c0c7fa56.js",
    "revision": "161006c74e300e560b42b09cb5f782b2"
  },
  {
    "url": "assets/js/32.850697b7.js",
    "revision": "263e869349051c3c70370e44555dc47d"
  },
  {
    "url": "assets/js/33.85ffea89.js",
    "revision": "763b29789bba00cff71bd79206554fd1"
  },
  {
    "url": "assets/js/34.4e0260b3.js",
    "revision": "1efbc403dc2aaba751889bddd6e49b19"
  },
  {
    "url": "assets/js/35.14ee96e6.js",
    "revision": "c516e00136700d705659cc9e2bfc31c1"
  },
  {
    "url": "assets/js/36.dfe49028.js",
    "revision": "2018f2a6a4aa21f9545dea625254e7d2"
  },
  {
    "url": "assets/js/37.e965c612.js",
    "revision": "a12bbc0c14079ebe4a93dd964097ac48"
  },
  {
    "url": "assets/js/38.3694903e.js",
    "revision": "5d1da47b7f0914b411c7bb82bfc82dea"
  },
  {
    "url": "assets/js/39.8133b227.js",
    "revision": "fe053cbbd7d4f4ce986ba581f65754b2"
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
    "url": "assets/js/45.dbe3eebb.js",
    "revision": "5b3cf11b0cd975ae1a346730c60fb865"
  },
  {
    "url": "assets/js/46.fab2cc20.js",
    "revision": "18948e6803c8d053ee8cf579672392c1"
  },
  {
    "url": "assets/js/47.c88efc7a.js",
    "revision": "e835e41c19cf6bae7d3d32463ad294d6"
  },
  {
    "url": "assets/js/48.37bbd1af.js",
    "revision": "e9a8454480dcb47ef9fc26e735ad9724"
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
    "url": "assets/js/50.7860f8b2.js",
    "revision": "5b43e578ddd52de05be6081c6f30c4c5"
  },
  {
    "url": "assets/js/51.516b4622.js",
    "revision": "da50bd3f33e089a968ef20d1ffffe5dc"
  },
  {
    "url": "assets/js/52.29798091.js",
    "revision": "4fe113089cd7f501ecf22495559f7fbc"
  },
  {
    "url": "assets/js/53.562064d1.js",
    "revision": "6257278acc55123cef1591fc2ca88e14"
  },
  {
    "url": "assets/js/54.06fd4a80.js",
    "revision": "db0e40f451f73824dbfac7ba7d5a527b"
  },
  {
    "url": "assets/js/55.4616ca21.js",
    "revision": "d365a511437cf309c0c3373f45eab06a"
  },
  {
    "url": "assets/js/56.1459c767.js",
    "revision": "64af4ee0b4cd89ef26ea9cfc74d47ff8"
  },
  {
    "url": "assets/js/57.04f7fffa.js",
    "revision": "cbf305292c180618f567fe9ec396be66"
  },
  {
    "url": "assets/js/58.14af037d.js",
    "revision": "5dc01d51d07ac54386a10fc2feb4c420"
  },
  {
    "url": "assets/js/59.3455d9be.js",
    "revision": "17d89be4f88030bf75406d55b3aabccb"
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
    "url": "assets/js/9.ba1cb56b.js",
    "revision": "8b93c9781f67f55959198402776ef58c"
  },
  {
    "url": "assets/js/app.b76cc5b4.js",
    "revision": "2c66bdec835c34c9758d85b4c9f02843"
  },
  {
    "url": "base/1.api/1.env.html",
    "revision": "3f976f7e690b605c80da2540b0b02f30"
  },
  {
    "url": "base/1.api/1.index.html",
    "revision": "aedbeb27585a88f305378797c4049966"
  },
  {
    "url": "base/1.api/10.infer.html",
    "revision": "5cb62a5dd674e29b0ff483b94283eab9"
  },
  {
    "url": "base/1.api/11.overlapping.html",
    "revision": "d8942a11d1d16e40114dadf41fbd7536"
  },
  {
    "url": "base/1.api/12.condition.html",
    "revision": "f89d3a6afcc4762ee4f4c791e2bfdcba"
  },
  {
    "url": "base/1.api/13.builtin.html",
    "revision": "eca957f3e77297c351a7fc36a8b1768e"
  },
  {
    "url": "base/1.api/14.package.html",
    "revision": "09cf18be7bed94bf4d3dc32c539eec57"
  },
  {
    "url": "base/1.api/15.custom.html",
    "revision": "70720cdc77567d99c9bf31873a65b469"
  },
  {
    "url": "base/1.api/16.unknown.html",
    "revision": "d5b0fbdd018f1c08e1f939eb1c989e9d"
  },
  {
    "url": "base/1.api/17.module.html",
    "revision": "0db1bfa3ad615ed824a8e4b58b0fbd4a"
  },
  {
    "url": "base/1.api/18.statement.html",
    "revision": "8c81413be5cb9c9a8afc65fb716aaefd"
  },
  {
    "url": "base/1.api/19.extend.html",
    "revision": "ad3f6d19ac3884a7a299ee797dd409ef"
  },
  {
    "url": "base/1.api/2.base.html",
    "revision": "cd0cc33bf19d3f5992dd3fe202b19e0e"
  },
  {
    "url": "base/1.api/3.deduction.html",
    "revision": "c2c0c6c024fab3ec6833e3b26db39d5c"
  },
  {
    "url": "base/1.api/4.type.html",
    "revision": "401588c752ce86ed6e5d7c2afe0e5420"
  },
  {
    "url": "base/1.api/5.class.html",
    "revision": "6270fbad3547563076a48660ac82bac5"
  },
  {
    "url": "base/1.api/6.interface.html",
    "revision": "82c6f7a61a4b3b8dcbe21e566d47ba54"
  },
  {
    "url": "base/1.api/7.generic.html",
    "revision": "fe77931de9560a0a288d98aa376a09ba"
  },
  {
    "url": "base/1.api/8.compatible.html",
    "revision": "81662d81b5fa7a1c0465e0a298085545"
  },
  {
    "url": "base/1.api/9.protect.html",
    "revision": "685bec7d2d7a8a727685ca625a1713d3"
  },
  {
    "url": "base/2.config/1.config.html",
    "revision": "76daeb60f8b894b0dc8e9ba9d12915bf"
  },
  {
    "url": "base/2.config/1.index.html",
    "revision": "26fef4eec101febdb74420a410c4cadd"
  },
  {
    "url": "base/2.config/10.ui.html",
    "revision": "0c530ac1da724fc1cae43904068581bc"
  },
  {
    "url": "base/2.config/11.data.html",
    "revision": "b3f0a3d87cd710416b28fcd05b5a9122"
  },
  {
    "url": "base/2.config/12.skill.html",
    "revision": "c706251345d8b32c0ed8ea77a85b7c41"
  },
  {
    "url": "base/2.config/13.com.html",
    "revision": "69981fc2cb413b0020f18b5d599458cb"
  },
  {
    "url": "base/2.config/14.data.html",
    "revision": "02728563e3f202aaf84138c626ff5def"
  },
  {
    "url": "base/2.config/2.webpack.html",
    "revision": "fe985569085a522a2bcdfb2d5509c928"
  },
  {
    "url": "base/2.config/3.file.html",
    "revision": "adace8cd29371b87622e6857f719db15"
  },
  {
    "url": "base/2.config/4.single.html",
    "revision": "3919e1cc6ef5cde1b8df5245092bc88f"
  },
  {
    "url": "base/2.config/5.page.html",
    "revision": "6775694d35900125bd34b910c7331f05"
  },
  {
    "url": "base/2.config/7.module.html",
    "revision": "b2dcd4f64ef7b910ef4d1f1f297daa02"
  },
  {
    "url": "base/2.config/8.project.html",
    "revision": "47d2dec9bc09c26b786c70996893b67c"
  },
  {
    "url": "base/2.config/9.utils.html",
    "revision": "9a3bce2caea049ff8b9eff77b9118d5f"
  },
  {
    "url": "base/3.react/1.index.html",
    "revision": "27c038be8362a6d62ed6981c3659c0df"
  },
  {
    "url": "base/3.react/2.Jenkins.html",
    "revision": "85377156a8b65dc3b026c2782dd36cc2"
  },
  {
    "url": "base/3.react/3.gitlab.html",
    "revision": "a9965d2f501da81e9b2e16f41981bb5a"
  },
  {
    "url": "base/3.react/i18n.html",
    "revision": "4c2c8d66f09b1cd97a5cc35b3ffe6255"
  },
  {
    "url": "base/3.react/prem.html",
    "revision": "5dd15db325e01bb79fabb481b48f3b90"
  },
  {
    "url": "base/3.react/test.html",
    "revision": "cf1cd0eb991eb4a3b3ccfad7b0f18648"
  },
  {
    "url": "base/3.react/vscode.html",
    "revision": "883bbae207ab0044b49fa1f36f88669e"
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
    "revision": "6ac1f72338aaa863c6832d9da63a9c75"
  },
  {
    "url": "mock/http.js",
    "revision": "c8abf8aba8039ff5bc6fa0517b076832"
  },
  {
    "url": "senior/npm/1.index.html",
    "revision": "87fc725752b66f78e2c7a5c495a67d83"
  },
  {
    "url": "senior/use/1.index.html",
    "revision": "b828dad340ca1fbe1c01a32ca82d7e19"
  },
  {
    "url": "senior/use/10.table.html",
    "revision": "d9b7efa56ab80e3cd1437573a29f19d3"
  },
  {
    "url": "senior/use/11.tree.html",
    "revision": "0eef7b7fbfae153b4c487c8a3e50b24e"
  },
  {
    "url": "senior/use/2.extend.html",
    "revision": "f185ecc8d5976335bd71e67acc83f469"
  },
  {
    "url": "senior/use/3.componentCommunication.html",
    "revision": "20b06959d8419d884d729b7c3ea5bc54"
  },
  {
    "url": "senior/use/4.render.html",
    "revision": "d1a2043830632f18d740f72825342320"
  },
  {
    "url": "senior/use/5.api.html",
    "revision": "16b6897ee80c7df25274c31d959e99f7"
  },
  {
    "url": "senior/use/6.form.html",
    "revision": "421ebdec64d53e59ff46ed34f4eca1bf"
  },
  {
    "url": "senior/use/7.checkBox.html",
    "revision": "92732df8d3b853296b7422f2fa69cdda"
  },
  {
    "url": "senior/use/8.active.html",
    "revision": "0ee5b3f839a2869db654d491970be99c"
  },
  {
    "url": "senior/use/9.alert.html",
    "revision": "19831671dda3ff899d6abcb67003c9f2"
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
