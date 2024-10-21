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
    "revision": "2715d15e4c87bbf1ae0da0cd77a8dcea"
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
    "url": "assets/js/13.7a471bdf.js",
    "revision": "48be05791b83be4f2b9fe1e65718e692"
  },
  {
    "url": "assets/js/14.fa02486c.js",
    "revision": "9b379c245412a159cbd57006c833fab6"
  },
  {
    "url": "assets/js/15.8dc08799.js",
    "revision": "82f2abff0479c1ac62a7eaab607e9745"
  },
  {
    "url": "assets/js/16.c173d5ff.js",
    "revision": "8cbd890582bad0b01408755b8ae92191"
  },
  {
    "url": "assets/js/17.56aad27f.js",
    "revision": "12e9de56c044d696887eb596307dee7d"
  },
  {
    "url": "assets/js/18.1922f95d.js",
    "revision": "57579fb9a70cabfee772fe184f9fe98c"
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
    "url": "assets/js/21.f6bea49c.js",
    "revision": "ec4d712f13c2206024fe38615f8ec147"
  },
  {
    "url": "assets/js/22.cb06fb50.js",
    "revision": "c1e43d093d2d07415a140fa9537925dc"
  },
  {
    "url": "assets/js/23.fca5bd31.js",
    "revision": "b5908606f536ef5fc8cecca9cabb35e9"
  },
  {
    "url": "assets/js/24.01a1287c.js",
    "revision": "4d4bbbfadc7e5bf0619ad7f3b6897a59"
  },
  {
    "url": "assets/js/25.c5a329ed.js",
    "revision": "57a29ba78ba985fe098bf9cc85517778"
  },
  {
    "url": "assets/js/26.5dce9858.js",
    "revision": "a455497dc04d334688ad8a35c9a6929d"
  },
  {
    "url": "assets/js/27.eb05c655.js",
    "revision": "3b85f65015e04c52219a976c427e839f"
  },
  {
    "url": "assets/js/28.322671f8.js",
    "revision": "b1bdc89363d21b16edd407d11e0c59f5"
  },
  {
    "url": "assets/js/29.d98e0a1b.js",
    "revision": "ecef0bdeb5bd0f2dd05fca0017bc3e17"
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
    "url": "assets/js/32.13e67bfa.js",
    "revision": "c26d0e28d6ff160ed341f022ac53ab20"
  },
  {
    "url": "assets/js/33.85ffea89.js",
    "revision": "763b29789bba00cff71bd79206554fd1"
  },
  {
    "url": "assets/js/34.fca252af.js",
    "revision": "5ab6a0fa5e2e6472b33d730d035e4c51"
  },
  {
    "url": "assets/js/35.14ee96e6.js",
    "revision": "c516e00136700d705659cc9e2bfc31c1"
  },
  {
    "url": "assets/js/36.f59b6f7c.js",
    "revision": "53f6084a2b6daddb09341d8a927129e3"
  },
  {
    "url": "assets/js/37.22262aed.js",
    "revision": "eb685f02e304d7a65c3472c78dfab251"
  },
  {
    "url": "assets/js/38.f34d3ec9.js",
    "revision": "8e8c75c129c85461604cd0da6a158441"
  },
  {
    "url": "assets/js/39.dcf0c06a.js",
    "revision": "eb703883c659539214679354e0a0f8cd"
  },
  {
    "url": "assets/js/4.f06a870d.js",
    "revision": "5f8b6aef590e9dec19e854ef23ee6eb5"
  },
  {
    "url": "assets/js/40.46cfb259.js",
    "revision": "adc474d1cee41ea2f040471fd2bfad9c"
  },
  {
    "url": "assets/js/41.99881342.js",
    "revision": "f8a5b38afdd0e6c477a2f4d02ed7c5fa"
  },
  {
    "url": "assets/js/42.d37a6daa.js",
    "revision": "0b81de4b76f5e9cf1a1ecdb6105bb167"
  },
  {
    "url": "assets/js/43.603b0b61.js",
    "revision": "54926f60de1a4f8644edf31be9264f0e"
  },
  {
    "url": "assets/js/44.d9ad8516.js",
    "revision": "ad6424bb3447cb20fc7fd8dd04c3e8b4"
  },
  {
    "url": "assets/js/45.5459c98f.js",
    "revision": "49966f7cada3c291ca29adb32249bbe1"
  },
  {
    "url": "assets/js/46.0b13575d.js",
    "revision": "85903eef6edb71cefd4e8eea0326e8aa"
  },
  {
    "url": "assets/js/47.ff005d88.js",
    "revision": "21fd842f047273b9de82de32b26921a8"
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
    "url": "assets/js/53.404a948f.js",
    "revision": "ad1ef35c9625d20a086dcc1f10bdedb3"
  },
  {
    "url": "assets/js/54.7ea22905.js",
    "revision": "67084263b9ea7d16af05612627063a0a"
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
    "url": "assets/js/57.42b8744f.js",
    "revision": "c83f34062b817ebb9f6b7cc9a79e11dc"
  },
  {
    "url": "assets/js/58.8c0902e7.js",
    "revision": "bf561e005880d5e812a259392be8f5ad"
  },
  {
    "url": "assets/js/59.c15a15f2.js",
    "revision": "33164d304f99c20c793eee1f7f10a9aa"
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
    "url": "assets/js/app.fc2034c2.js",
    "revision": "c75c3bf7cc5ac2f4c7b857f3e9a1995f"
  },
  {
    "url": "base/1.api/1.env.html",
    "revision": "9fbd50efe537bfd19094e98c53894760"
  },
  {
    "url": "base/1.api/1.index.html",
    "revision": "d5c432bfa8b6d7d70e4193e3b1523658"
  },
  {
    "url": "base/1.api/10.infer.html",
    "revision": "3396cb0937b7d3c63478ca133a3c2de2"
  },
  {
    "url": "base/1.api/11.overlapping.html",
    "revision": "b4d667fd360fbacf3b8bff9fa38e76e5"
  },
  {
    "url": "base/1.api/12.condition.html",
    "revision": "0b6be2b9d22aee2c718989ef1dc59bda"
  },
  {
    "url": "base/1.api/13.builtin.html",
    "revision": "cbe436601e8e5d87e27be30de753a088"
  },
  {
    "url": "base/1.api/14.package.html",
    "revision": "d3c57387f75e0a6d081b82000cc561ee"
  },
  {
    "url": "base/1.api/15.custom.html",
    "revision": "8a38211ba801bf6b86a67473be40615a"
  },
  {
    "url": "base/1.api/16.unknown.html",
    "revision": "6fd36e67f5b6ac47e43bfaa522398efb"
  },
  {
    "url": "base/1.api/17.module.html",
    "revision": "eabc36f771e4a0937b1176ba88532b1b"
  },
  {
    "url": "base/1.api/18.statement.html",
    "revision": "a95605488067674a298aac04daf65d7e"
  },
  {
    "url": "base/1.api/19.extend.html",
    "revision": "fe409b2bb49e101fb367dd57a7b7456f"
  },
  {
    "url": "base/1.api/2.base.html",
    "revision": "01ab1af1ef1176eba4ac2a275033d394"
  },
  {
    "url": "base/1.api/3.deduction.html",
    "revision": "cd4b1d688af6a6089d529713d766d151"
  },
  {
    "url": "base/1.api/4.type.html",
    "revision": "72128f77908a1a9353a7e44ba2ff4c05"
  },
  {
    "url": "base/1.api/5.class.html",
    "revision": "a8862ca3ef94e79352e734dddbf7fe5e"
  },
  {
    "url": "base/1.api/6.interface.html",
    "revision": "7a77ec7b7b962d192aaacde5f9a6afea"
  },
  {
    "url": "base/1.api/7.generic.html",
    "revision": "c1fb46452f0bafda1213962fe729284c"
  },
  {
    "url": "base/1.api/8.compatible.html",
    "revision": "6ffdaf6d88a3c06b6f0bf189c3546aca"
  },
  {
    "url": "base/1.api/9.protect.html",
    "revision": "463ff5d993970ddbf7ea51ff68dc889b"
  },
  {
    "url": "base/2.config/1.config.html",
    "revision": "78b5408cf72ae903a9565afdb5ca1bcf"
  },
  {
    "url": "base/2.config/1.index.html",
    "revision": "850027ab394e24ccd31004250a5b1227"
  },
  {
    "url": "base/2.config/10.ui.html",
    "revision": "12356cdd5a1af24c1aa1960792ab69c8"
  },
  {
    "url": "base/2.config/11.data.html",
    "revision": "20e285fe1845746e1545cde8b36fe51e"
  },
  {
    "url": "base/2.config/12.skill.html",
    "revision": "6150b5db040fab683bf714b1b864dcb6"
  },
  {
    "url": "base/2.config/13.com.html",
    "revision": "51e9842c1091aa2c1e6c82306d693f59"
  },
  {
    "url": "base/2.config/14.data.html",
    "revision": "e7061f19e3a9b9861da92ac6d147be65"
  },
  {
    "url": "base/2.config/2.webpack.html",
    "revision": "eb88200a247c060d6091c91ec30781d6"
  },
  {
    "url": "base/2.config/3.file.html",
    "revision": "48d3ea7cc20c315e4cc6211ab004d7e7"
  },
  {
    "url": "base/2.config/4.single.html",
    "revision": "8279dd908ce9a7f901fa86cce96c5005"
  },
  {
    "url": "base/2.config/5.page.html",
    "revision": "210f99b8d09b1613aec1e49ac5c07661"
  },
  {
    "url": "base/2.config/7.module.html",
    "revision": "8f780a6d6a1ef8e96edf05d064f57adc"
  },
  {
    "url": "base/2.config/8.project.html",
    "revision": "fd86f5a0a72cded1480d0fac7e21a6c2"
  },
  {
    "url": "base/2.config/9.utils.html",
    "revision": "c268d226e2460592f8653fbed3cc8bb8"
  },
  {
    "url": "base/3.react/1.index.html",
    "revision": "5e232ee8da8e8ccdf7e7d2f16e14858f"
  },
  {
    "url": "base/3.react/2.Jenkins.html",
    "revision": "19e15738af99cef6fe4b744e386de22d"
  },
  {
    "url": "base/3.react/3.gitlab.html",
    "revision": "aadf5086848ee34554254e0d0f633c5a"
  },
  {
    "url": "base/3.react/i18n.html",
    "revision": "776891381839d70d2c2b884b043bddfd"
  },
  {
    "url": "base/3.react/prem.html",
    "revision": "94c76d99052065834af00276a0a6a7e5"
  },
  {
    "url": "base/3.react/test.html",
    "revision": "a3de3f86d6975a0d7f4bb27b3100e347"
  },
  {
    "url": "base/3.react/vscode.html",
    "revision": "dacf37a49104ff0cda78d539a88b2b69"
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
    "revision": "9bbcb3f475d39f4d812dd0485d081093"
  },
  {
    "url": "mock/http.js",
    "revision": "c8abf8aba8039ff5bc6fa0517b076832"
  },
  {
    "url": "senior/npm/1.index.html",
    "revision": "33e09ac131e6a034d655a5d4f4e7c2b9"
  },
  {
    "url": "senior/use/1.index.html",
    "revision": "0582e8b6d50eb79f46ec41e7d6ca9e0b"
  },
  {
    "url": "senior/use/10.table.html",
    "revision": "a01c211771cf7e8fdc6bb247357662ad"
  },
  {
    "url": "senior/use/11.tree.html",
    "revision": "c3ea392205eaa6afd5993939996756bf"
  },
  {
    "url": "senior/use/2.extend.html",
    "revision": "8a8b82ebc52b9166a4c38bf389b1b021"
  },
  {
    "url": "senior/use/3.componentCommunication.html",
    "revision": "a1a7d54b62d7350d95c1f2b1652b55e9"
  },
  {
    "url": "senior/use/4.render.html",
    "revision": "931df0ae5302ca5f498202c4d2a8d0e3"
  },
  {
    "url": "senior/use/5.api.html",
    "revision": "dad36184f62df9ea5ba34d6809e5a43a"
  },
  {
    "url": "senior/use/6.form.html",
    "revision": "2a489e0e905a49ec6325f61f3201a631"
  },
  {
    "url": "senior/use/7.checkBox.html",
    "revision": "407314d3cfac4dbbe7e77c19a05391fd"
  },
  {
    "url": "senior/use/8.active.html",
    "revision": "66ca912fe56be1e6826351ce10977631"
  },
  {
    "url": "senior/use/9.alert.html",
    "revision": "dcdfd40c5ef88e3de25c9d99882903fd"
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
