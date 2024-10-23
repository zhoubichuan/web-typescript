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
    "revision": "37b3035b6b74900b46da0d23e200e08b"
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
    "url": "assets/js/11.769d0891.js",
    "revision": "7fe7dcd556b190d124769f5e0e798b17"
  },
  {
    "url": "assets/js/12.68d83546.js",
    "revision": "f19b26a8825f793b9e7d282b9af894db"
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
    "url": "assets/js/15.5c96d596.js",
    "revision": "00fd29e7c6d6f5106d70e2aa8e0fd559"
  },
  {
    "url": "assets/js/16.b6fb0081.js",
    "revision": "e308133185e38314dcc6b17960079a56"
  },
  {
    "url": "assets/js/17.56aad27f.js",
    "revision": "12e9de56c044d696887eb596307dee7d"
  },
  {
    "url": "assets/js/18.84f57dac.js",
    "revision": "848587ac8f7432b8eaab49b5ff144d6d"
  },
  {
    "url": "assets/js/19.da4a8ff0.js",
    "revision": "62f1fa59495d857dda7a4d43cce29ee5"
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
    "url": "assets/js/27.cdbf0703.js",
    "revision": "69c2ea49174bc90b1b555df702eb5369"
  },
  {
    "url": "assets/js/28.9c5eacb1.js",
    "revision": "b8965c7f7f178ba06f97346c8e54065e"
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
    "url": "assets/js/33.abf479d4.js",
    "revision": "099d10f71039d79271d1751010317f7b"
  },
  {
    "url": "assets/js/34.2544f6e6.js",
    "revision": "c06316339d47bb34c3896be824973108"
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
    "url": "assets/js/37.6b007126.js",
    "revision": "ce888f02d1ebbecfca3ffbb605c34314"
  },
  {
    "url": "assets/js/38.306b0b8c.js",
    "revision": "f52471c8f9fe95a65aeacbe482683e37"
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
    "url": "assets/js/43.6408cea9.js",
    "revision": "a4660991b46e46b825199ec4be4c8acc"
  },
  {
    "url": "assets/js/44.ec806cc9.js",
    "revision": "4d821bd1d3ae5034930a969546adfa5c"
  },
  {
    "url": "assets/js/45.f8d046b2.js",
    "revision": "2005bff89b986ec87732902bb667e632"
  },
  {
    "url": "assets/js/46.ecf87ef4.js",
    "revision": "92605da411929404819e223812db6365"
  },
  {
    "url": "assets/js/47.17502335.js",
    "revision": "bd736aeda7d73b90359a86003d43155a"
  },
  {
    "url": "assets/js/48.389f0fd2.js",
    "revision": "20f6a078c9afd51522951c51b2a68b6e"
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
    "url": "assets/js/53.bc0ecf97.js",
    "revision": "724e532b4a75736968a5e1c3aa675ab6"
  },
  {
    "url": "assets/js/54.8d3b71aa.js",
    "revision": "0d69a8f0406baaa332b052d795864b07"
  },
  {
    "url": "assets/js/55.b29b0524.js",
    "revision": "405a0e1b54977ed5b860820b779613d3"
  },
  {
    "url": "assets/js/56.95221825.js",
    "revision": "38749488d066786b2932090339548780"
  },
  {
    "url": "assets/js/57.21bfb622.js",
    "revision": "4d38e9b4684a1be5b8bb3a21c69bf8c5"
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
    "url": "assets/js/60.d7097caf.js",
    "revision": "ca94091ef4aa5e6d8b04b5e762dd75a6"
  },
  {
    "url": "assets/js/61.616a7793.js",
    "revision": "29232487c984012f27560b5c6e657471"
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
    "url": "assets/js/app.b7f50644.js",
    "revision": "e2ba9ea1fb669cada9ac6c4a5a989cb5"
  },
  {
    "url": "base/1.api/1.env.html",
    "revision": "1669c045bad1b08cc12910df4b7789b6"
  },
  {
    "url": "base/1.api/1.index.html",
    "revision": "b56a393aa42501e53732cc8c1d902986"
  },
  {
    "url": "base/1.api/10.infer.html",
    "revision": "aa6b9bd285d9b6ecfd34da4e93f3f3ab"
  },
  {
    "url": "base/1.api/11.overlapping.html",
    "revision": "4bc363ffbe098da314371bc2d0f9b23f"
  },
  {
    "url": "base/1.api/12.condition.html",
    "revision": "191d21cb07bde676ba283d055692af33"
  },
  {
    "url": "base/1.api/13.builtin.html",
    "revision": "d6324a811693b07ddbe68a09176d7713"
  },
  {
    "url": "base/1.api/14.package.html",
    "revision": "71617fc80d1542a589187ec2674faa2d"
  },
  {
    "url": "base/1.api/15.custom.html",
    "revision": "39619548c786f52126ae9b1bb7ec944c"
  },
  {
    "url": "base/1.api/16.unknown.html",
    "revision": "49506fadd9f3c4f42e7ca5b017f1dcf1"
  },
  {
    "url": "base/1.api/17.module.html",
    "revision": "cdadd3ae08c061ce1c6a0496ecb61367"
  },
  {
    "url": "base/1.api/18.statement.html",
    "revision": "d4d91c7cae49283256ed599adb091f40"
  },
  {
    "url": "base/1.api/19.extend.html",
    "revision": "79b90753008c6a7bfa9192046140c7f1"
  },
  {
    "url": "base/1.api/2.base.html",
    "revision": "79112ed7225b6ad4c84762a9aad92c09"
  },
  {
    "url": "base/1.api/3.deduction.html",
    "revision": "b880fd70bb6a0578709dd42c6ad7d7a9"
  },
  {
    "url": "base/1.api/4.type.html",
    "revision": "75d9c3a9ef0f51ebad7d4a5a02e39b56"
  },
  {
    "url": "base/1.api/5.class.html",
    "revision": "45594dfa7c8e55a3e0fdf1f2043a98fd"
  },
  {
    "url": "base/1.api/6.interface.html",
    "revision": "052b085139995d4ad4f7efcedfb4f3de"
  },
  {
    "url": "base/1.api/7.generic.html",
    "revision": "5ad96ffc85923df9d7315c3edf71e781"
  },
  {
    "url": "base/1.api/8.compatible.html",
    "revision": "cf233c3b5e2a92adf1ecbe5da0cfe59f"
  },
  {
    "url": "base/1.api/9.protect.html",
    "revision": "a4ca6b6889b90176950c49e60d2d4f30"
  },
  {
    "url": "base/2.config/1.config.html",
    "revision": "b5febb9a612af9d210ba42171be926e7"
  },
  {
    "url": "base/2.config/1.index.html",
    "revision": "46e9f869319f42abdd4e1631b34bc95c"
  },
  {
    "url": "base/2.config/10.ui.html",
    "revision": "6c702aea650b310ddf882b2fb74573bf"
  },
  {
    "url": "base/2.config/11.data.html",
    "revision": "a790bf119433d618dc18a581801665c7"
  },
  {
    "url": "base/2.config/12.skill.html",
    "revision": "80ea6bfc75ca71b56b85f60f99585818"
  },
  {
    "url": "base/2.config/13.com.html",
    "revision": "61664a3c7d035914d63de4d2f9c3afc2"
  },
  {
    "url": "base/2.config/14.data.html",
    "revision": "dc3dd008ecda3ac54c4c9a1add3bd60c"
  },
  {
    "url": "base/2.config/2.webpack.html",
    "revision": "3a00dc1610943e1a3f8ad214a8e48bf9"
  },
  {
    "url": "base/2.config/3.file.html",
    "revision": "8f2875aa26fcc786101e860a6ebed5b3"
  },
  {
    "url": "base/2.config/4.single.html",
    "revision": "874997d73bf0f6adf131884ab6ad4825"
  },
  {
    "url": "base/2.config/5.page.html",
    "revision": "186a0a8b15bee81c1e1db6cc1973e600"
  },
  {
    "url": "base/2.config/7.module.html",
    "revision": "70dd4016e8d5534d59aa6da0935ca45a"
  },
  {
    "url": "base/2.config/8.project.html",
    "revision": "d5e87edc727f40fd57aee42bc9a7fd8b"
  },
  {
    "url": "base/2.config/9.utils.html",
    "revision": "b5842578b3c0de0f0a2a8ab40575fb83"
  },
  {
    "url": "base/3.react/1.index.html",
    "revision": "c8b5c76b47c7d921fe0f6614ad596f11"
  },
  {
    "url": "base/3.react/2.Jenkins.html",
    "revision": "1855cd14ed9f40fbc347bee57308b35c"
  },
  {
    "url": "base/3.react/3.gitlab.html",
    "revision": "3815c3ff8429bf228e14eca2c25d9e76"
  },
  {
    "url": "base/3.react/i18n.html",
    "revision": "4d576db384894af4ad623b8e918824e5"
  },
  {
    "url": "base/3.react/prem.html",
    "revision": "7c34ce6932ecb9cc9e88273099c1067b"
  },
  {
    "url": "base/3.react/test.html",
    "revision": "824386bffb2dd9efea0791fd48a14b64"
  },
  {
    "url": "base/3.react/vscode.html",
    "revision": "0a085cc1fcecb85f0f44f5a9e89b650b"
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
    "revision": "601be657386ce4a76504c0b5d9873a39"
  },
  {
    "url": "mock/http.js",
    "revision": "c8abf8aba8039ff5bc6fa0517b076832"
  },
  {
    "url": "senior/npm/1.index.html",
    "revision": "9ffbcfb15610213931da06b9dffed43c"
  },
  {
    "url": "senior/use/1.index.html",
    "revision": "fdd9daccbee697bb59745d5428c8d758"
  },
  {
    "url": "senior/use/10.table.html",
    "revision": "002bc1a3cf50a1f677ed44d910594f79"
  },
  {
    "url": "senior/use/11.tree.html",
    "revision": "5caea0c63f69bd9cb8483d173d188346"
  },
  {
    "url": "senior/use/2.extend.html",
    "revision": "1c79a1d785b0c9f1330526f6a2539a1d"
  },
  {
    "url": "senior/use/3.componentCommunication.html",
    "revision": "339964596c938d8e8d880ae737e6fb10"
  },
  {
    "url": "senior/use/4.render.html",
    "revision": "3928e0f65391a0be6e394e78a72b8a05"
  },
  {
    "url": "senior/use/5.api.html",
    "revision": "430f86650f17cb0fec37523e6add1012"
  },
  {
    "url": "senior/use/6.form.html",
    "revision": "bc50b8beaa1860e2fd595bda3a741bd6"
  },
  {
    "url": "senior/use/7.checkBox.html",
    "revision": "24053d4527c4182abbce66e50c12c034"
  },
  {
    "url": "senior/use/8.active.html",
    "revision": "4895f4dbf2ffa23fe4879b20868d3c14"
  },
  {
    "url": "senior/use/9.alert.html",
    "revision": "46219db0557ff3c0083b5575ae4d5e1c"
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
