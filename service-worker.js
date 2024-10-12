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
    "revision": "b20f7c6c3211ccece29d06c24c3453d8"
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
    "url": "assets/js/10.cedc64a1.js",
    "revision": "82869d3bf54643d7f55ffdaa574a3fcb"
  },
  {
    "url": "assets/js/11.83256b34.js",
    "revision": "0d7609dbe222e0146d8dc721cd7c6933"
  },
  {
    "url": "assets/js/12.6942e728.js",
    "revision": "f9b10cc1c74361de65c0813d00e4fdf2"
  },
  {
    "url": "assets/js/13.39ee13b7.js",
    "revision": "ecfb63aae838529f72db5e2f77b8c551"
  },
  {
    "url": "assets/js/14.5c109098.js",
    "revision": "ef324bb7fa72e0158c4bb15b0bd5eef4"
  },
  {
    "url": "assets/js/15.31a2e6ea.js",
    "revision": "1e8c4be25d77f45fc1d3bc74f9d467a8"
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
    "url": "assets/js/18.1922f95d.js",
    "revision": "57579fb9a70cabfee772fe184f9fe98c"
  },
  {
    "url": "assets/js/19.7e1a77f7.js",
    "revision": "c2eab5f5769907f30b9965ea5580ac7c"
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
    "url": "assets/js/21.2f61a65a.js",
    "revision": "03f43d41775c6466498c3b13a9844207"
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
    "url": "assets/js/24.b8a14953.js",
    "revision": "1d1c92fdc13aaf432033424c91279c22"
  },
  {
    "url": "assets/js/25.b4c60733.js",
    "revision": "1f2eca06aeb0696ecb1b8a46fe43a7f7"
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
    "url": "assets/js/28.e3299ecb.js",
    "revision": "f80bbca3985f8e282d9c21573b68ac32"
  },
  {
    "url": "assets/js/29.3830b239.js",
    "revision": "fa48677c86b699f252016a7304c9bc57"
  },
  {
    "url": "assets/js/3.384e845f.js",
    "revision": "fbf7f49d43a1979ecb3e6e97c2466f4b"
  },
  {
    "url": "assets/js/30.d092fa17.js",
    "revision": "388e397ed6545f217b3440ca431f7cd8"
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
    "url": "assets/js/33.36dd6fbb.js",
    "revision": "16068989b3a816f8af81b62e3275f886"
  },
  {
    "url": "assets/js/34.f022baa8.js",
    "revision": "940d799d065c0f69a90d6bcbd430517e"
  },
  {
    "url": "assets/js/35.52374d9e.js",
    "revision": "0d666bf4e664558fb5bcc5057868929e"
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
    "url": "assets/js/46.0b13575d.js",
    "revision": "85903eef6edb71cefd4e8eea0326e8aa"
  },
  {
    "url": "assets/js/47.52a373e7.js",
    "revision": "4ff041a55600c9c5132a63ff89f236e7"
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
    "url": "assets/js/59.88c41d91.js",
    "revision": "de0deebe03e75b948ba620ef9813bfbc"
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
    "url": "assets/js/8.3f674c9d.js",
    "revision": "f226fecc8c89d11a096f53ee3dc4c033"
  },
  {
    "url": "assets/js/9.e36efb30.js",
    "revision": "607f56af4153cac86d21dfd920076602"
  },
  {
    "url": "assets/js/app.76907ac9.js",
    "revision": "94e425a190018a715e5d603defdeac88"
  },
  {
    "url": "base/1.api/1.env.html",
    "revision": "d52a23eb70f4e205d8aa4112c0263f5e"
  },
  {
    "url": "base/1.api/1.index.html",
    "revision": "f399687c682d150c82e03002016f4707"
  },
  {
    "url": "base/1.api/10.infer.html",
    "revision": "db59155702dbfe769574971d2cd1cf6b"
  },
  {
    "url": "base/1.api/11.overlapping.html",
    "revision": "c7e6c9739670256b79960d7cd63e3f69"
  },
  {
    "url": "base/1.api/12.condition.html",
    "revision": "aed66682dc1631a2edc02472869414b5"
  },
  {
    "url": "base/1.api/13.builtin.html",
    "revision": "445cea2082ffe15d900a630963ea7b04"
  },
  {
    "url": "base/1.api/14.package.html",
    "revision": "827002e21d982df942aaba39024a114f"
  },
  {
    "url": "base/1.api/15.custom.html",
    "revision": "d5430ca520232ba5b14df64ee4d51027"
  },
  {
    "url": "base/1.api/16.unknown.html",
    "revision": "a484450da5ee9331666d1e5fcb5ad2a3"
  },
  {
    "url": "base/1.api/17.module.html",
    "revision": "0b54e691955d557f4b36c954e914bf79"
  },
  {
    "url": "base/1.api/18.statement.html",
    "revision": "10b089ba70352e662e8755d83269af97"
  },
  {
    "url": "base/1.api/19.extend.html",
    "revision": "2f5be65ffdb93e16666c5526e88985a7"
  },
  {
    "url": "base/1.api/2.base.html",
    "revision": "121e644f613655b32e804a162ff73569"
  },
  {
    "url": "base/1.api/3.deduction.html",
    "revision": "34711aca9c9985d4ec9f5db9c77d674a"
  },
  {
    "url": "base/1.api/4.type.html",
    "revision": "30121279a94df014f97e55bfade4e68f"
  },
  {
    "url": "base/1.api/5.class.html",
    "revision": "2a032ca3c1bec9baf9e2038d94eed281"
  },
  {
    "url": "base/1.api/6.interface.html",
    "revision": "fca38cef02ed44202bd271497cff4501"
  },
  {
    "url": "base/1.api/7.generic.html",
    "revision": "2834121f771ecb5e24de7caa2f809afe"
  },
  {
    "url": "base/1.api/8.compatible.html",
    "revision": "33032e7cfa7f6bd161c6f460e73b899e"
  },
  {
    "url": "base/1.api/9.protect.html",
    "revision": "23ea65d6efd0680c5d7bdd244b238c6b"
  },
  {
    "url": "base/2.config/1.config.html",
    "revision": "fdb272e7edf806d2ee9f44a5b9f0b6d3"
  },
  {
    "url": "base/2.config/1.index.html",
    "revision": "528d113da96b8d916cf9d8a527517cfb"
  },
  {
    "url": "base/2.config/10.ui.html",
    "revision": "6e7cf0ebf565f17f9df297e7719901fb"
  },
  {
    "url": "base/2.config/11.data.html",
    "revision": "47e357832fdb71aef999bd4de0e25a3f"
  },
  {
    "url": "base/2.config/12.skill.html",
    "revision": "0a9ef7236ce359d3462ebd9e2b918924"
  },
  {
    "url": "base/2.config/13.com.html",
    "revision": "91fa9989e9afcf1c3debd646e3041606"
  },
  {
    "url": "base/2.config/14.data.html",
    "revision": "6dc9fed5a922ed40d4d9604c1c4ace71"
  },
  {
    "url": "base/2.config/2.webpack.html",
    "revision": "4ca2c478ee77c35d12f36925134fa1df"
  },
  {
    "url": "base/2.config/3.file.html",
    "revision": "6de9fba253dd056808183f46bb3f1ff7"
  },
  {
    "url": "base/2.config/4.single.html",
    "revision": "7e6c5b3bd7cdd3375b58e7ff27ab2684"
  },
  {
    "url": "base/2.config/5.page.html",
    "revision": "f31762eb69d3b23ff0d92ef132070f93"
  },
  {
    "url": "base/2.config/7.module.html",
    "revision": "2c3d7859a1a1f6a05a68997201682000"
  },
  {
    "url": "base/2.config/8.project.html",
    "revision": "c6035f048c01ce7ffbfcb02b747c906e"
  },
  {
    "url": "base/2.config/9.utils.html",
    "revision": "b379827b922bb7d95edf71eb7a5d50c9"
  },
  {
    "url": "base/3.react/1.index.html",
    "revision": "9ca7ab95b523d3a8e16b52b0752609cc"
  },
  {
    "url": "base/3.react/2.Jenkins.html",
    "revision": "334a6da4f3fd6087b3568f61f407fdbf"
  },
  {
    "url": "base/3.react/3.gitlab.html",
    "revision": "b3945383bde05e4cae367e60b2dd22b2"
  },
  {
    "url": "base/3.react/i18n.html",
    "revision": "f8fcaa79a6172b96fe29bfddcf6cc4c0"
  },
  {
    "url": "base/3.react/prem.html",
    "revision": "8b7e3a468ea44026eb9cc39ab294105a"
  },
  {
    "url": "base/3.react/test.html",
    "revision": "a052f303f0c78f4671264064e54fcf2a"
  },
  {
    "url": "base/3.react/vscode.html",
    "revision": "632ed4dc35da5c65ca887b1a9649e5da"
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
    "revision": "a44b08d4714a0fca7f671d40e418d9a2"
  },
  {
    "url": "mock/http.js",
    "revision": "c8abf8aba8039ff5bc6fa0517b076832"
  },
  {
    "url": "senior/npm/1.index.html",
    "revision": "0015e715f3ac662150e08f54e57d1e0f"
  },
  {
    "url": "senior/use/1.index.html",
    "revision": "6c88efdf20b39f524d6aad28ec24d5a8"
  },
  {
    "url": "senior/use/10.table.html",
    "revision": "ee972f9fc887f4b27ae672d90d69f52c"
  },
  {
    "url": "senior/use/11.tree.html",
    "revision": "7f0518473eddc34dd541f60c40e66080"
  },
  {
    "url": "senior/use/2.extend.html",
    "revision": "e82f1b0d6ea3c4d1d80f74ed1af1bb4f"
  },
  {
    "url": "senior/use/3.componentCommunication.html",
    "revision": "406e74be42b7d01f34ec170d1bc2cd2a"
  },
  {
    "url": "senior/use/4.render.html",
    "revision": "674b69f8e78d00b1596955b2f3c2b713"
  },
  {
    "url": "senior/use/5.api.html",
    "revision": "a8d70c744fed0bae13a9773be7e7edcb"
  },
  {
    "url": "senior/use/6.form.html",
    "revision": "48ff0b6da56747aafb4dd39c455d0f10"
  },
  {
    "url": "senior/use/7.checkBox.html",
    "revision": "f4548559576ad9456d651104e4b55b2d"
  },
  {
    "url": "senior/use/8.active.html",
    "revision": "bd7fdb73deac4f91d97fc614949f2757"
  },
  {
    "url": "senior/use/9.alert.html",
    "revision": "e72426c8aa74e8c936c919a449a7c1d1"
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
