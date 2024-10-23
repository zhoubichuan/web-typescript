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
    "revision": "8918132b43f6a5d624eb7dcf3e959bd0"
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
    "url": "assets/js/10.e12be21b.js",
    "revision": "f7b6897903f88c1e35af15fef0d29ddc"
  },
  {
    "url": "assets/js/11.83256b34.js",
    "revision": "0d7609dbe222e0146d8dc721cd7c6933"
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
    "url": "assets/js/15.5c96d596.js",
    "revision": "00fd29e7c6d6f5106d70e2aa8e0fd559"
  },
  {
    "url": "assets/js/16.6d7f2134.js",
    "revision": "421260d42843b2b02a2c004e2c74bd25"
  },
  {
    "url": "assets/js/17.72dc9b0b.js",
    "revision": "4d0f3794587a2aed0e81bafc25022a13"
  },
  {
    "url": "assets/js/18.84f57dac.js",
    "revision": "848587ac8f7432b8eaab49b5ff144d6d"
  },
  {
    "url": "assets/js/19.9400684a.js",
    "revision": "e1279db2dc295de74c727eb076395e8a"
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
    "url": "assets/js/21.f91f49dd.js",
    "revision": "f8323ed8370b72881961d839de7c7617"
  },
  {
    "url": "assets/js/22.0a54e5cf.js",
    "revision": "b2517d825ee20e4159cb2f9b3196dce9"
  },
  {
    "url": "assets/js/23.672e49e4.js",
    "revision": "fbfbe6a063f90e92542e3658135cc116"
  },
  {
    "url": "assets/js/24.e0c6d99c.js",
    "revision": "b1ce25614f9fc14b39d854e5e9f8669d"
  },
  {
    "url": "assets/js/25.eecfb9ff.js",
    "revision": "7ddcc08888f7abee0ff9c63ec606ff5e"
  },
  {
    "url": "assets/js/26.03075fe0.js",
    "revision": "8a52681538310e03012091a66c89b1de"
  },
  {
    "url": "assets/js/27.1c96329b.js",
    "revision": "15fdf73556331473bdf7314d1ca29ce7"
  },
  {
    "url": "assets/js/28.9c5eacb1.js",
    "revision": "b8965c7f7f178ba06f97346c8e54065e"
  },
  {
    "url": "assets/js/29.80c93d7a.js",
    "revision": "f1cd1a570aeb8911d496bf5608e80c00"
  },
  {
    "url": "assets/js/3.384e845f.js",
    "revision": "fbf7f49d43a1979ecb3e6e97c2466f4b"
  },
  {
    "url": "assets/js/30.d2e227b1.js",
    "revision": "d0a2daa83eebcaf232e3083f2bcd34e3"
  },
  {
    "url": "assets/js/31.202e5b4a.js",
    "revision": "393541217030054f4818cd25d0d95e65"
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
    "url": "assets/js/36.1cc0018f.js",
    "revision": "211df66d966ac6fb83cac4414002e76c"
  },
  {
    "url": "assets/js/37.328c7936.js",
    "revision": "9fa2c64d191e579c8478ec1591a7baac"
  },
  {
    "url": "assets/js/38.f34d3ec9.js",
    "revision": "8e8c75c129c85461604cd0da6a158441"
  },
  {
    "url": "assets/js/39.c22dc0e8.js",
    "revision": "085bf37662b123e7e56e04c04c8d9782"
  },
  {
    "url": "assets/js/4.f06a870d.js",
    "revision": "5f8b6aef590e9dec19e854ef23ee6eb5"
  },
  {
    "url": "assets/js/40.a9beb970.js",
    "revision": "86da574079cd29d9e92f312b96a93eff"
  },
  {
    "url": "assets/js/41.a9fbd4cb.js",
    "revision": "2b08d16226d7d90c9780cfd50a394028"
  },
  {
    "url": "assets/js/42.d37a6daa.js",
    "revision": "0b81de4b76f5e9cf1a1ecdb6105bb167"
  },
  {
    "url": "assets/js/43.795b3cde.js",
    "revision": "0e24ef99e0e90edbc29c76530ae1ef46"
  },
  {
    "url": "assets/js/44.0e91055c.js",
    "revision": "d923e0a4a60050b17d3220c3cfdccbf3"
  },
  {
    "url": "assets/js/45.a08e9319.js",
    "revision": "460ad0a54529f9376b03ead299463299"
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
    "url": "assets/js/49.206f88c6.js",
    "revision": "1aced720baf8ec10cab0d44d6b1bfec8"
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
    "url": "assets/js/51.05f092e8.js",
    "revision": "74cb8069070a79cab63555715673464d"
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
    "url": "assets/js/54.70ad7b70.js",
    "revision": "f041162a4474880fae9b8aac39ed9c49"
  },
  {
    "url": "assets/js/55.b29b0524.js",
    "revision": "405a0e1b54977ed5b860820b779613d3"
  },
  {
    "url": "assets/js/56.1e41328e.js",
    "revision": "782b86b7f27656b04f2c3e384d70bec3"
  },
  {
    "url": "assets/js/57.42b8744f.js",
    "revision": "c83f34062b817ebb9f6b7cc9a79e11dc"
  },
  {
    "url": "assets/js/58.8c0902e7.js",
    "revision": "bf561e005880d5e812a259392be8f5ad"
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
    "url": "assets/js/60.727f14f2.js",
    "revision": "4452b116fdf101278446d3f2ebe93d22"
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
    "url": "assets/js/9.dcd6c83a.js",
    "revision": "08549ee0ea7b2a900125554d052bad66"
  },
  {
    "url": "assets/js/app.2d7ee0ea.js",
    "revision": "2ae633379a84cb355a8b5186841f64fb"
  },
  {
    "url": "base/1.api/1.env.html",
    "revision": "ac6e96466741ff5bf3bf6bbd6a7fc2ce"
  },
  {
    "url": "base/1.api/1.index.html",
    "revision": "f4ffd6337741b5f7bc0ff913a5d79d80"
  },
  {
    "url": "base/1.api/10.infer.html",
    "revision": "8b8e321a6c375af2528427363700bfa1"
  },
  {
    "url": "base/1.api/11.overlapping.html",
    "revision": "6f2554366545329434f83b310bdadf50"
  },
  {
    "url": "base/1.api/12.condition.html",
    "revision": "25851fc64add1d59fe3ca5042dc06022"
  },
  {
    "url": "base/1.api/13.builtin.html",
    "revision": "1dfca5846ba28650396a9392563a707d"
  },
  {
    "url": "base/1.api/14.package.html",
    "revision": "ab8da32d8b9df5613107e970e9cfb519"
  },
  {
    "url": "base/1.api/15.custom.html",
    "revision": "916ca53aed1f521987c212d803f9f76c"
  },
  {
    "url": "base/1.api/16.unknown.html",
    "revision": "e718db2f41a4c7bca10ce7256d2fbe10"
  },
  {
    "url": "base/1.api/17.module.html",
    "revision": "2841ae6b911522d936f2fbbb1b7f3fd4"
  },
  {
    "url": "base/1.api/18.statement.html",
    "revision": "d360d18fb184f4fbb573da33681a7bee"
  },
  {
    "url": "base/1.api/19.extend.html",
    "revision": "02322f5911242e6401930bb2a6f5738f"
  },
  {
    "url": "base/1.api/2.base.html",
    "revision": "2dcbfcb5558f894bfdd333ccfa01b059"
  },
  {
    "url": "base/1.api/3.deduction.html",
    "revision": "c1e6f6b6b63a8600280c6b18f3c7c1a3"
  },
  {
    "url": "base/1.api/4.type.html",
    "revision": "93bb8a63dabbdcaf4f20cca3055f0394"
  },
  {
    "url": "base/1.api/5.class.html",
    "revision": "8b60478b5e582b8aa4878070e411c0b2"
  },
  {
    "url": "base/1.api/6.interface.html",
    "revision": "ca4d17278ff42db4c1c98515b2f10db4"
  },
  {
    "url": "base/1.api/7.generic.html",
    "revision": "2bd0761566abe9ca775fe0734d77ce5f"
  },
  {
    "url": "base/1.api/8.compatible.html",
    "revision": "d56e5738a849f5fdcf48b431e689a135"
  },
  {
    "url": "base/1.api/9.protect.html",
    "revision": "3ed5a310240546a54f4a0d5d9875ae5c"
  },
  {
    "url": "base/2.config/1.config.html",
    "revision": "b6a302a3b0d21add8a5f106378985f66"
  },
  {
    "url": "base/2.config/1.index.html",
    "revision": "c6c351f4677f2daedadd4ca600dd9246"
  },
  {
    "url": "base/2.config/10.ui.html",
    "revision": "c1d430f1b8561acf4ba802fab436efc4"
  },
  {
    "url": "base/2.config/11.data.html",
    "revision": "f9ccc28223550d0290e75d8a3b02b084"
  },
  {
    "url": "base/2.config/12.skill.html",
    "revision": "38d198d2bd8efb026de0b8e6e3f176ea"
  },
  {
    "url": "base/2.config/13.com.html",
    "revision": "dca59dc63b2eafc20f4307946d0b4aab"
  },
  {
    "url": "base/2.config/14.data.html",
    "revision": "475683d652d6dd03cfee8c1189f53285"
  },
  {
    "url": "base/2.config/2.webpack.html",
    "revision": "dfc3008b6fa18a6644142706ce8f5d1e"
  },
  {
    "url": "base/2.config/3.file.html",
    "revision": "b34ebebc5208ff8ef1a10d1e9bf87db1"
  },
  {
    "url": "base/2.config/4.single.html",
    "revision": "d04f3d60910417bab6485907d30021f7"
  },
  {
    "url": "base/2.config/5.page.html",
    "revision": "d24ec2f829aba44cdf5c13f5b5aad4f2"
  },
  {
    "url": "base/2.config/7.module.html",
    "revision": "940fcd03654611cb48d91a896ae8b619"
  },
  {
    "url": "base/2.config/8.project.html",
    "revision": "6ad6f586809449897d2ec741b96f295e"
  },
  {
    "url": "base/2.config/9.utils.html",
    "revision": "0d2de9ed1127c44c84bd26fb1fd3cc59"
  },
  {
    "url": "base/3.react/1.index.html",
    "revision": "7093062040b281c98d81d1660441e52f"
  },
  {
    "url": "base/3.react/2.Jenkins.html",
    "revision": "c589aa3261be7abae32d346ce580d0d2"
  },
  {
    "url": "base/3.react/3.gitlab.html",
    "revision": "85fc425bd0c1f9d768dbc967c967cddd"
  },
  {
    "url": "base/3.react/i18n.html",
    "revision": "0ffc7f7a069ea1c50205f917609b077b"
  },
  {
    "url": "base/3.react/prem.html",
    "revision": "cd6931b486d480ede86ed063922a8f9e"
  },
  {
    "url": "base/3.react/test.html",
    "revision": "7308d694342cb8d48131c2d664f0595d"
  },
  {
    "url": "base/3.react/vscode.html",
    "revision": "32a34112b176d4f933bef8d3c6a5a08a"
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
    "revision": "b092d54d14cef81fc6c828b645176691"
  },
  {
    "url": "mock/http.js",
    "revision": "c8abf8aba8039ff5bc6fa0517b076832"
  },
  {
    "url": "senior/npm/1.index.html",
    "revision": "15587b59d24dc7082169c2f1370b1619"
  },
  {
    "url": "senior/use/1.index.html",
    "revision": "873619518403b4942fb2ba8af47a7e26"
  },
  {
    "url": "senior/use/10.table.html",
    "revision": "aff54e75f5275b9ba8384e86b54c6dd6"
  },
  {
    "url": "senior/use/11.tree.html",
    "revision": "ebff7a38cd46360474b8705b2a4a6336"
  },
  {
    "url": "senior/use/2.extend.html",
    "revision": "3ccfa05b626d9641c00c6806ad8fea4c"
  },
  {
    "url": "senior/use/3.componentCommunication.html",
    "revision": "ec1ac5a8b050d4c117a2901aae7ea326"
  },
  {
    "url": "senior/use/4.render.html",
    "revision": "e39f24053593c5a1dadba8fc09c5f9e4"
  },
  {
    "url": "senior/use/5.api.html",
    "revision": "21734d659d8322efea76a248ef47ceb1"
  },
  {
    "url": "senior/use/6.form.html",
    "revision": "c9f3c3420aa6d0721e862d1c86147422"
  },
  {
    "url": "senior/use/7.checkBox.html",
    "revision": "163b4db69f2775328b9c565a27c58e3b"
  },
  {
    "url": "senior/use/8.active.html",
    "revision": "3308160c99a20d9dc102ad4cc30b625b"
  },
  {
    "url": "senior/use/9.alert.html",
    "revision": "be55598f9de9ed998850b8c39b9af16e"
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
