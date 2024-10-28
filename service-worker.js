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
    "revision": "60e5ce8367c1be2e688c00db32cd83cc"
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
    "url": "assets/js/11.7513e5e5.js",
    "revision": "02f1988916a2d26e4c9b018c5951d557"
  },
  {
    "url": "assets/js/12.76992a91.js",
    "revision": "509a6fac8c40bb50b460918184dd9f78"
  },
  {
    "url": "assets/js/13.20fd03ca.js",
    "revision": "174e09fb3a9ac25cf34cfce10519d9a9"
  },
  {
    "url": "assets/js/14.17281204.js",
    "revision": "f727fa9350485017018206cb2c118b96"
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
    "url": "assets/js/19.3ddf04c3.js",
    "revision": "a1e543816cd5f1be10f1381582fbf8c8"
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
    "url": "assets/js/21.95a21b35.js",
    "revision": "4dc876e00171b5dc97bf1367a640ba4a"
  },
  {
    "url": "assets/js/22.98c27815.js",
    "revision": "75fc711cd8420304eb17c310df487e24"
  },
  {
    "url": "assets/js/23.3b4d65ad.js",
    "revision": "e3b135960f913009156e42822fa86097"
  },
  {
    "url": "assets/js/24.5421a65e.js",
    "revision": "ba80196fcc3a3f0f8a99a8540fe1cff0"
  },
  {
    "url": "assets/js/25.c5a329ed.js",
    "revision": "57a29ba78ba985fe098bf9cc85517778"
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
    "url": "assets/js/29.e0740e13.js",
    "revision": "b5bf167056f50ac13c82b1f28f7e6d07"
  },
  {
    "url": "assets/js/3.384e845f.js",
    "revision": "fbf7f49d43a1979ecb3e6e97c2466f4b"
  },
  {
    "url": "assets/js/30.c4adb475.js",
    "revision": "c333d7179336b893923b8346e581a69c"
  },
  {
    "url": "assets/js/31.e3f3e8b4.js",
    "revision": "5d61e2aed511491fe4a84cd05f7dde8b"
  },
  {
    "url": "assets/js/32.850697b7.js",
    "revision": "263e869349051c3c70370e44555dc47d"
  },
  {
    "url": "assets/js/33.abf479d4.js",
    "revision": "099d10f71039d79271d1751010317f7b"
  },
  {
    "url": "assets/js/34.4e0260b3.js",
    "revision": "1efbc403dc2aaba751889bddd6e49b19"
  },
  {
    "url": "assets/js/35.68e9921d.js",
    "revision": "1daea4c9ef123bfbf826029b86ceb96f"
  },
  {
    "url": "assets/js/36.c9b37831.js",
    "revision": "7435c372a3a9738af5351efbde3a2494"
  },
  {
    "url": "assets/js/37.61c4ace9.js",
    "revision": "0a569c326f3eb6fedbc3dccbdf9b91c9"
  },
  {
    "url": "assets/js/38.eb6a6a79.js",
    "revision": "19754d03026feaea9fd17344b38c099b"
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
    "url": "assets/js/40.03c61338.js",
    "revision": "51b5ffc0e360649f1c6e95877152f054"
  },
  {
    "url": "assets/js/41.6b50fcf5.js",
    "revision": "167e6187534a5b8c1e293fe5fa29ee41"
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
    "url": "assets/js/46.6bac0fb9.js",
    "revision": "6a1050388d495ccd6a0b7d3ed49e73c8"
  },
  {
    "url": "assets/js/47.656920f4.js",
    "revision": "221f0be763a89640420e8995bb61a30f"
  },
  {
    "url": "assets/js/48.81f78bb4.js",
    "revision": "8931ec7973b145ffc083727ba6f397fa"
  },
  {
    "url": "assets/js/49.5b596cf0.js",
    "revision": "f1f5c83fade447fba18189282bfb9feb"
  },
  {
    "url": "assets/js/5.a77092f8.js",
    "revision": "ae5031fb37a8390b1f1c7673242b3d72"
  },
  {
    "url": "assets/js/50.ba9eea50.js",
    "revision": "16f57d451aca23c1578ad2a3c82bd77d"
  },
  {
    "url": "assets/js/51.05f092e8.js",
    "revision": "74cb8069070a79cab63555715673464d"
  },
  {
    "url": "assets/js/52.0bad8bd5.js",
    "revision": "93a3ea60951fba472bd3cb2e76e7e99e"
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
    "url": "assets/js/56.02d09f0f.js",
    "revision": "fb05b2d46cf33a947d50ba7cdd0752c0"
  },
  {
    "url": "assets/js/57.0bf13bbd.js",
    "revision": "d473fa86f6559391c401c69aefbb334e"
  },
  {
    "url": "assets/js/58.8e665a23.js",
    "revision": "fcdeff8d996c4871032968a81d6df8fd"
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
    "url": "assets/js/60.f308f401.js",
    "revision": "5260f56b98466bec3f69d3b1a53dfdbb"
  },
  {
    "url": "assets/js/61.44f55e7e.js",
    "revision": "91167e483ff2c3f29040d4a613b6b1ca"
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
    "url": "assets/js/app.910b9e03.js",
    "revision": "b0e2aabd870f9625bd4594fc14b5d867"
  },
  {
    "url": "base/1.api/1.env.html",
    "revision": "18783e96f8e134ac2805670ff3c4d7aa"
  },
  {
    "url": "base/1.api/1.index.html",
    "revision": "2655be38720afed804ed88c6669d5c15"
  },
  {
    "url": "base/1.api/10.infer.html",
    "revision": "1b4e3d81e4f1d5b368e4404042e08953"
  },
  {
    "url": "base/1.api/11.overlapping.html",
    "revision": "3ba6a20a3fa71889de290f63b6181a0f"
  },
  {
    "url": "base/1.api/12.condition.html",
    "revision": "5b1b8d904919a33b784d96a8afaa3c8b"
  },
  {
    "url": "base/1.api/13.builtin.html",
    "revision": "067ef23cdf158afc47bb24e1a58e5fb7"
  },
  {
    "url": "base/1.api/14.package.html",
    "revision": "b158b928912d15d6edc07a2b6c128832"
  },
  {
    "url": "base/1.api/15.custom.html",
    "revision": "5b36ca6f59185fc4bd17464b8f85bea9"
  },
  {
    "url": "base/1.api/16.unknown.html",
    "revision": "e80802b8318c27428f82d1ccaa5335fa"
  },
  {
    "url": "base/1.api/17.module.html",
    "revision": "f9f0a2fe2ec9fdaa1f5e41f33a61d43a"
  },
  {
    "url": "base/1.api/18.statement.html",
    "revision": "c21b3acb809548f1127f18ff652aa951"
  },
  {
    "url": "base/1.api/19.extend.html",
    "revision": "33bc1b059127d21550532f0c476f2c19"
  },
  {
    "url": "base/1.api/2.base.html",
    "revision": "f49032a6ee0e81c9100899bc5e8a7e89"
  },
  {
    "url": "base/1.api/3.deduction.html",
    "revision": "8752ff460c45e3ba7a91214980f28f67"
  },
  {
    "url": "base/1.api/4.type.html",
    "revision": "83e4099c584ac6c2deaf9b3b6e2c1ebf"
  },
  {
    "url": "base/1.api/5.class.html",
    "revision": "ebf41ad7952800f782d27c4fe5004581"
  },
  {
    "url": "base/1.api/6.interface.html",
    "revision": "78cd51e41e5d7642a718788cd888db2a"
  },
  {
    "url": "base/1.api/7.generic.html",
    "revision": "062185b3cb07501585c4c39acd977aa5"
  },
  {
    "url": "base/1.api/8.compatible.html",
    "revision": "04d1b4aa26d3eb60eb3665efed214d28"
  },
  {
    "url": "base/1.api/9.protect.html",
    "revision": "466449879e5e404531e30f1454ea0004"
  },
  {
    "url": "base/2.config/1.config.html",
    "revision": "e77ac924730da139fee412f20b143d0e"
  },
  {
    "url": "base/2.config/1.index.html",
    "revision": "e3c8602a29fd5f8c8d5f32d0ec21113f"
  },
  {
    "url": "base/2.config/10.ui.html",
    "revision": "20a523dfffc3f291d146980e93520740"
  },
  {
    "url": "base/2.config/11.data.html",
    "revision": "9a9f38b7a6ce4c2e22fdea194c2ecdb8"
  },
  {
    "url": "base/2.config/12.skill.html",
    "revision": "3c428f9b4e3c65552210703e86ce9530"
  },
  {
    "url": "base/2.config/13.com.html",
    "revision": "68ae88c1d0fea572db50724362c6b22e"
  },
  {
    "url": "base/2.config/14.data.html",
    "revision": "54449d4d119f2d2d3a0253f0b046d818"
  },
  {
    "url": "base/2.config/2.webpack.html",
    "revision": "7a292db69d841c36600564fe44aaea6d"
  },
  {
    "url": "base/2.config/3.file.html",
    "revision": "b672ef3d711961526c3f40e373566cd3"
  },
  {
    "url": "base/2.config/4.single.html",
    "revision": "5e648f3dac422b186fcd342a2d5b8208"
  },
  {
    "url": "base/2.config/5.page.html",
    "revision": "0bdc41de053f2219b5838d2da8f83b77"
  },
  {
    "url": "base/2.config/7.module.html",
    "revision": "d29b1dfe6419e0c50d1feaa26c115140"
  },
  {
    "url": "base/2.config/8.project.html",
    "revision": "01de53c74e20cd3c74b049681646863d"
  },
  {
    "url": "base/2.config/9.utils.html",
    "revision": "97de3f2707345d9e18d6ddb9849769c0"
  },
  {
    "url": "base/3.react/1.index.html",
    "revision": "b3c84244a47d728c6ff180fa15cb0f2e"
  },
  {
    "url": "base/3.react/2.Jenkins.html",
    "revision": "ce099ab495c01b4d2dd10cbb4257e08f"
  },
  {
    "url": "base/3.react/3.gitlab.html",
    "revision": "46fd38e2c3c2ee8c32bca201fd0857e2"
  },
  {
    "url": "base/3.react/i18n.html",
    "revision": "5265dbda0bba53b04b4ab3f8e52618f6"
  },
  {
    "url": "base/3.react/prem.html",
    "revision": "03ce44bb7249fed929dc3cd96acb7d3f"
  },
  {
    "url": "base/3.react/test.html",
    "revision": "ab848c3ca5422cdb57c9901cb0b5df3c"
  },
  {
    "url": "base/3.react/vscode.html",
    "revision": "97862e77648a686b18cbad6f7db03136"
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
    "revision": "3c7b26a499adbf297e36a41796a55a96"
  },
  {
    "url": "mock/http.js",
    "revision": "c8abf8aba8039ff5bc6fa0517b076832"
  },
  {
    "url": "senior/npm/1.index.html",
    "revision": "f2fdf87bd8401958d4c7891d5b92887e"
  },
  {
    "url": "senior/use/1.index.html",
    "revision": "2fb63b1be0e11036d347d4a10f7e6dc4"
  },
  {
    "url": "senior/use/10.table.html",
    "revision": "fbd72b22d6ff290bfe7e5683cc9832c8"
  },
  {
    "url": "senior/use/11.tree.html",
    "revision": "9aa1b3cc954b63533395c3cb2f825be9"
  },
  {
    "url": "senior/use/2.extend.html",
    "revision": "5c3c71796c8d638ea989788302ee7f79"
  },
  {
    "url": "senior/use/3.componentCommunication.html",
    "revision": "3763a202ebf1ad0cd616bbe46a9b1885"
  },
  {
    "url": "senior/use/4.render.html",
    "revision": "a40b704c38b85f9d923d5b5b687e95ac"
  },
  {
    "url": "senior/use/5.api.html",
    "revision": "18493f70f0c69779a6711c3819602455"
  },
  {
    "url": "senior/use/6.form.html",
    "revision": "43a3832dca53991f12c235e1f89ca1ee"
  },
  {
    "url": "senior/use/7.checkBox.html",
    "revision": "856edc58fed0a8886d3e04719eb9d769"
  },
  {
    "url": "senior/use/8.active.html",
    "revision": "77ab49992ebf998fb24808e66cb6a379"
  },
  {
    "url": "senior/use/9.alert.html",
    "revision": "27a3dd3bcb343426025fc85f2213e37a"
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
