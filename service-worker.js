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
    "revision": "e3027683f2e349761b5ceb8093ea42d2"
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
    "url": "assets/js/15.31a2e6ea.js",
    "revision": "1e8c4be25d77f45fc1d3bc74f9d467a8"
  },
  {
    "url": "assets/js/16.6d7f2134.js",
    "revision": "421260d42843b2b02a2c004e2c74bd25"
  },
  {
    "url": "assets/js/17.0e35c293.js",
    "revision": "c50ca6faaac5cbbfe76f06286cc26a6d"
  },
  {
    "url": "assets/js/18.84f57dac.js",
    "revision": "848587ac8f7432b8eaab49b5ff144d6d"
  },
  {
    "url": "assets/js/19.f002ca3f.js",
    "revision": "47d374ac4835b4c71447c621e6758530"
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
    "url": "assets/js/25.eecfb9ff.js",
    "revision": "7ddcc08888f7abee0ff9c63ec606ff5e"
  },
  {
    "url": "assets/js/26.03075fe0.js",
    "revision": "8a52681538310e03012091a66c89b1de"
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
    "url": "assets/js/35.b15e2d93.js",
    "revision": "9afb071edc525e5acd68071c821c7e08"
  },
  {
    "url": "assets/js/36.aac5e463.js",
    "revision": "6c0d85f70d3b9d63da660d23da6df906"
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
    "url": "assets/js/41.6b50fcf5.js",
    "revision": "167e6187534a5b8c1e293fe5fa29ee41"
  },
  {
    "url": "assets/js/42.5d209fcc.js",
    "revision": "0c317a7ef7e18613a9501a48ac044091"
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
    "url": "assets/js/45.2bf1630c.js",
    "revision": "be4d8d5f880685401d2caeee6d80384a"
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
    "url": "assets/js/51.05f092e8.js",
    "revision": "74cb8069070a79cab63555715673464d"
  },
  {
    "url": "assets/js/52.7da65101.js",
    "revision": "f3717d87e8d02ed5bd030cd156584848"
  },
  {
    "url": "assets/js/53.269c0066.js",
    "revision": "bf63887eebf63a077f4efebacc10b9d7"
  },
  {
    "url": "assets/js/54.8d3b71aa.js",
    "revision": "0d69a8f0406baaa332b052d795864b07"
  },
  {
    "url": "assets/js/55.3520c930.js",
    "revision": "333ffe049d54a575ad2636563184de4a"
  },
  {
    "url": "assets/js/56.f4f4679a.js",
    "revision": "0a90cf880f8b001ed7e77f01edfe0859"
  },
  {
    "url": "assets/js/57.312e441b.js",
    "revision": "31b4eed633b4ad3441eaf5a44edbc14e"
  },
  {
    "url": "assets/js/58.324e425e.js",
    "revision": "7178c2bb0ab978982e5e843bf61e271c"
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
    "url": "assets/js/60.d7097caf.js",
    "revision": "ca94091ef4aa5e6d8b04b5e762dd75a6"
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
    "url": "assets/js/9.dcd6c83a.js",
    "revision": "08549ee0ea7b2a900125554d052bad66"
  },
  {
    "url": "assets/js/app.f0fff555.js",
    "revision": "b511dff442a7d101400f997a9c4c22ad"
  },
  {
    "url": "base/1.api/1.env.html",
    "revision": "5310aed3237bf158963c358b45b4e8be"
  },
  {
    "url": "base/1.api/1.index.html",
    "revision": "44d31ca27c502b3f082265f7ea611afe"
  },
  {
    "url": "base/1.api/10.infer.html",
    "revision": "35a5e4bef3d8f2a4d04fd31a83c22ac2"
  },
  {
    "url": "base/1.api/11.overlapping.html",
    "revision": "adab8c294cfe19f9366e4cc25fe78ad4"
  },
  {
    "url": "base/1.api/12.condition.html",
    "revision": "f6e25bdbc7719477ebb23a6cef7134f7"
  },
  {
    "url": "base/1.api/13.builtin.html",
    "revision": "2833505607319df9858d6990884786c6"
  },
  {
    "url": "base/1.api/14.package.html",
    "revision": "0d902e1cd32d4ee67b0309c195d4b8a2"
  },
  {
    "url": "base/1.api/15.custom.html",
    "revision": "e61b3667d913b194d4f22733875e10ad"
  },
  {
    "url": "base/1.api/16.unknown.html",
    "revision": "67f219d0831dca8c215be908e039ee10"
  },
  {
    "url": "base/1.api/17.module.html",
    "revision": "3bba17e8e0a5c454d65a59bbca49ff1b"
  },
  {
    "url": "base/1.api/18.statement.html",
    "revision": "75224548bf135a50e220c57132fcd6e6"
  },
  {
    "url": "base/1.api/19.extend.html",
    "revision": "21369f0dfab03b7a4268546ed46536f7"
  },
  {
    "url": "base/1.api/2.base.html",
    "revision": "42afc1122d85478810de1bce70fc4675"
  },
  {
    "url": "base/1.api/3.deduction.html",
    "revision": "c55fd5b2f0d7b3fed1f70642e8f096ce"
  },
  {
    "url": "base/1.api/4.type.html",
    "revision": "77b179a25a2d498bdaacc2eb29ac08b1"
  },
  {
    "url": "base/1.api/5.class.html",
    "revision": "6b7018f6c9fb0906896049786b715992"
  },
  {
    "url": "base/1.api/6.interface.html",
    "revision": "5a10e88e5c9678fa1a9755a83767ed17"
  },
  {
    "url": "base/1.api/7.generic.html",
    "revision": "f8e5099242efd2a35a5a1a9edaeed33e"
  },
  {
    "url": "base/1.api/8.compatible.html",
    "revision": "8692e2a80bfd11e6d6579410b5134c24"
  },
  {
    "url": "base/1.api/9.protect.html",
    "revision": "60c9cd37e4f67277ef0466ecd2e2e8f8"
  },
  {
    "url": "base/2.config/1.config.html",
    "revision": "cbddcdd3cbf8cb2aa290d03768096ea1"
  },
  {
    "url": "base/2.config/1.index.html",
    "revision": "94e9cbbdc664ad31758c170f975a061e"
  },
  {
    "url": "base/2.config/10.ui.html",
    "revision": "e4439282077be9ecd72929750879d359"
  },
  {
    "url": "base/2.config/11.data.html",
    "revision": "2bd3e2be4b16c734a46bff7cee6a09c6"
  },
  {
    "url": "base/2.config/12.skill.html",
    "revision": "111b0592d12e39d5c8c05e2199dad0b1"
  },
  {
    "url": "base/2.config/13.com.html",
    "revision": "e042ec166291773377040c997cd25a5b"
  },
  {
    "url": "base/2.config/14.data.html",
    "revision": "19a8bdd7f03c215dd695fba450c8e43f"
  },
  {
    "url": "base/2.config/2.webpack.html",
    "revision": "023f52350c96c3c2dd378027c98b6112"
  },
  {
    "url": "base/2.config/3.file.html",
    "revision": "008b5facf0a34b5669cc503f1ac74e85"
  },
  {
    "url": "base/2.config/4.single.html",
    "revision": "55013189f50a81268961fe3d106158c6"
  },
  {
    "url": "base/2.config/5.page.html",
    "revision": "4541954ed3672041aaacb32298aad72a"
  },
  {
    "url": "base/2.config/7.module.html",
    "revision": "7b6a27f3fd19347e3c33fb3532beb35d"
  },
  {
    "url": "base/2.config/8.project.html",
    "revision": "8883fed3b9e27c176ebfe9f589c9a2f5"
  },
  {
    "url": "base/2.config/9.utils.html",
    "revision": "6898abf944f8726b67f5b7995b246482"
  },
  {
    "url": "base/3.react/1.index.html",
    "revision": "8281bb51af421afc109a2bd7727dee6a"
  },
  {
    "url": "base/3.react/2.Jenkins.html",
    "revision": "0d2bb6c5d92999105369f671c8a448f7"
  },
  {
    "url": "base/3.react/3.gitlab.html",
    "revision": "004560125cbbcb441c76d1d53a35d6cf"
  },
  {
    "url": "base/3.react/i18n.html",
    "revision": "c0fc8d584034af275cfda7b1a8c30a6a"
  },
  {
    "url": "base/3.react/prem.html",
    "revision": "8ffa06b7c85292ab46427a546fdf9539"
  },
  {
    "url": "base/3.react/test.html",
    "revision": "52bdde4130a27c4c8faf5a45016a7f5a"
  },
  {
    "url": "base/3.react/vscode.html",
    "revision": "6952382214d52f80fa362ed81180d9cb"
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
    "revision": "a9eaa91f78afd98a85d4f2b4196606d6"
  },
  {
    "url": "mock/http.js",
    "revision": "c8abf8aba8039ff5bc6fa0517b076832"
  },
  {
    "url": "senior/npm/1.index.html",
    "revision": "6a014ff3631866e42c27489dd08ddb71"
  },
  {
    "url": "senior/use/1.index.html",
    "revision": "01737bb1d25c1de0241d6b0b09a52377"
  },
  {
    "url": "senior/use/10.table.html",
    "revision": "5c84d5199a1dd1ccf88340d99c667fdc"
  },
  {
    "url": "senior/use/11.tree.html",
    "revision": "5bd1563c0a68a62069f4bd843b4c56b1"
  },
  {
    "url": "senior/use/2.extend.html",
    "revision": "c0b28e1063fd5df0bc38d420257d3b6a"
  },
  {
    "url": "senior/use/3.componentCommunication.html",
    "revision": "8ad1a79821601a0dce80eecb4a5aba61"
  },
  {
    "url": "senior/use/4.render.html",
    "revision": "0bd7ba5ce7d5d386eecc2e39fdf6e6ea"
  },
  {
    "url": "senior/use/5.api.html",
    "revision": "6fc4b713dff5192ebff10d4c4a7aed00"
  },
  {
    "url": "senior/use/6.form.html",
    "revision": "32733725375e589151b03c6fc7ab2527"
  },
  {
    "url": "senior/use/7.checkBox.html",
    "revision": "2b78c302142b6d1d70a18b110c7290d7"
  },
  {
    "url": "senior/use/8.active.html",
    "revision": "fd5720836c329f4bccfa2907766b5f7b"
  },
  {
    "url": "senior/use/9.alert.html",
    "revision": "9bac5356f4944e797ae5054e37278113"
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
