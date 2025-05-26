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
    "revision": "d6fa4150080b87cf8a62dbfca09dfe85"
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
    "url": "assets/js/10.5bcafdc8.js",
    "revision": "b0643f87cc382735ea3b621c190db7f6"
  },
  {
    "url": "assets/js/11.70315ee8.js",
    "revision": "3cc463369b1bb32cadac46940c9c2a0b"
  },
  {
    "url": "assets/js/12.f5b1d4f6.js",
    "revision": "16520f78b63b1958051e5b9959d9983d"
  },
  {
    "url": "assets/js/13.4d7e5cbe.js",
    "revision": "c42d08eeeb44ccad299e396cf9bf9405"
  },
  {
    "url": "assets/js/14.74d53460.js",
    "revision": "a6ebe36b84bc61cb4cb458d8b2a4667e"
  },
  {
    "url": "assets/js/15.b4dea9c2.js",
    "revision": "819a3550fb54635d8470e4fb8a2cfa31"
  },
  {
    "url": "assets/js/16.5a6b38db.js",
    "revision": "b8fffbbfce05d148a179273c37832cb5"
  },
  {
    "url": "assets/js/17.7e626f40.js",
    "revision": "38dea12c9fb350e7191e54f455a2e652"
  },
  {
    "url": "assets/js/18.43484149.js",
    "revision": "f66b18c0b51dd7ba9ecc3e5664c9b163"
  },
  {
    "url": "assets/js/19.1ec77b7f.js",
    "revision": "0676a4f0821bf788d7ac09cfd1f178b8"
  },
  {
    "url": "assets/js/2.ff722f69.js",
    "revision": "f9b57e50fc5851032279baf2ff4561ce"
  },
  {
    "url": "assets/js/20.6fd05c95.js",
    "revision": "3101d3d9d355bfd909b047b1a26c4504"
  },
  {
    "url": "assets/js/21.10f6046f.js",
    "revision": "fe771e4cb5aaaffe3abf218997acc729"
  },
  {
    "url": "assets/js/22.3d9bfb2e.js",
    "revision": "2e2d29476487260d91873fad3a711dca"
  },
  {
    "url": "assets/js/23.a0fa8cf7.js",
    "revision": "76b213c311bda7d4f16dd45ac4f163f5"
  },
  {
    "url": "assets/js/24.8657d0c0.js",
    "revision": "aae42b5a239264c96945a4403f36cd89"
  },
  {
    "url": "assets/js/25.fb044591.js",
    "revision": "152dcccd9b0d5a7f3da3044cad08d8af"
  },
  {
    "url": "assets/js/26.5b2de8cd.js",
    "revision": "9413f1ae4d17928fcc6d950a332258fa"
  },
  {
    "url": "assets/js/27.e5b55fff.js",
    "revision": "53f7d571964f08b92174125601baab2e"
  },
  {
    "url": "assets/js/28.17e25de4.js",
    "revision": "dd06d52c0687f94455f60408e91edddb"
  },
  {
    "url": "assets/js/29.2e46880e.js",
    "revision": "4a5990c90d6dab9f45b168e04775f9d5"
  },
  {
    "url": "assets/js/3.06e2333f.js",
    "revision": "604d08238c214b74f22d5a2b052590a8"
  },
  {
    "url": "assets/js/30.dcdd18ac.js",
    "revision": "e7bfb8771610ee481f968850d7a6017e"
  },
  {
    "url": "assets/js/31.3d454de7.js",
    "revision": "fc40b57c84c37769247c3b5911724234"
  },
  {
    "url": "assets/js/32.20810f4d.js",
    "revision": "c3a78836116d1c7ece05d61ceaf1ca67"
  },
  {
    "url": "assets/js/33.b8744794.js",
    "revision": "8e9c304cf125a90ecaed8b01eb1725b6"
  },
  {
    "url": "assets/js/34.3bc9fa9d.js",
    "revision": "afe6f6bf815dd6d329255147940b0df7"
  },
  {
    "url": "assets/js/35.f10d7449.js",
    "revision": "95cce894e08ca6a5407e51fd4549e925"
  },
  {
    "url": "assets/js/36.12699569.js",
    "revision": "4b387f98330a33e65ae3b831e4eced5e"
  },
  {
    "url": "assets/js/37.5e122b2b.js",
    "revision": "e6ddf3350de9f5f1d08b6053e88d2786"
  },
  {
    "url": "assets/js/38.b3e08d35.js",
    "revision": "3b86b2ff3079456e743bbeac59b8a234"
  },
  {
    "url": "assets/js/39.d06a6d2c.js",
    "revision": "e47e5fbaa65efae832cd16b7bebae8e7"
  },
  {
    "url": "assets/js/4.300b8393.js",
    "revision": "95f0fe3b4e5e48220f3070e97623f3c1"
  },
  {
    "url": "assets/js/40.a3c83129.js",
    "revision": "04d01e78f619c5bff20107cbd5d91e4c"
  },
  {
    "url": "assets/js/41.364ac830.js",
    "revision": "3980b14959515123e4aaad8be1d4c6eb"
  },
  {
    "url": "assets/js/42.e77807da.js",
    "revision": "927afd1bb66eb93a23f6537a78c3e961"
  },
  {
    "url": "assets/js/43.3a1b5a0b.js",
    "revision": "a4a4f8c25542bbd0075de42a45e57095"
  },
  {
    "url": "assets/js/44.1d86d586.js",
    "revision": "57ff86f6df72aa69024689bbb4f7a350"
  },
  {
    "url": "assets/js/45.a0886643.js",
    "revision": "4f3baa67d5a97691626d8eb87bb71d30"
  },
  {
    "url": "assets/js/46.8866b07d.js",
    "revision": "b33b0e7be778556619f1973ba9d17271"
  },
  {
    "url": "assets/js/47.8ac9c9b3.js",
    "revision": "6bb9f9fa10cb50c0ff28a5c008af0849"
  },
  {
    "url": "assets/js/48.f473d085.js",
    "revision": "9c7fd6510c143b873e1ce34b326d9d24"
  },
  {
    "url": "assets/js/49.2ab7ab91.js",
    "revision": "516a17613e9b8c3ce8f9bceb872ebab7"
  },
  {
    "url": "assets/js/5.a434a904.js",
    "revision": "d9c174cd2b95b429760158b55b976f16"
  },
  {
    "url": "assets/js/50.155d1c9e.js",
    "revision": "4438386ec48730e080358405ed3b6184"
  },
  {
    "url": "assets/js/51.55b7a8e3.js",
    "revision": "1678aa9353219800cb18d441ff009a5f"
  },
  {
    "url": "assets/js/52.e79a686f.js",
    "revision": "84f5c7042dc707c1480e42baa3a4d0fd"
  },
  {
    "url": "assets/js/53.fdef713c.js",
    "revision": "9567bccb59b2e1fa511a1f0e92c9bc6a"
  },
  {
    "url": "assets/js/54.d444ea4e.js",
    "revision": "2270a8c036dd4a9cd8cf740333d4e0c2"
  },
  {
    "url": "assets/js/55.8e3d3f17.js",
    "revision": "83ce7b3177f36d513f53d7386a5f994d"
  },
  {
    "url": "assets/js/56.b0a77d61.js",
    "revision": "953ea71bef75803586bd8afa228ee39d"
  },
  {
    "url": "assets/js/57.1639dc92.js",
    "revision": "35a49fe610501af9546d459d59f030b5"
  },
  {
    "url": "assets/js/58.24037257.js",
    "revision": "6d947a8a26e1e7e50b7eeb5c06110630"
  },
  {
    "url": "assets/js/59.74af5529.js",
    "revision": "65f0919cdb6b8c2fdfa075109dc23d24"
  },
  {
    "url": "assets/js/6.fbfd8d53.js",
    "revision": "569d569e7907d3504d4a01887208add8"
  },
  {
    "url": "assets/js/60.78b61267.js",
    "revision": "f11e39ad76e26b37771532e1e659fede"
  },
  {
    "url": "assets/js/61.f70f21c1.js",
    "revision": "ba99e48b5c34fa6a7cb51b7e4793e0be"
  },
  {
    "url": "assets/js/62.4efa2cc9.js",
    "revision": "9e8162016d9f9220954d22b6f9399dcb"
  },
  {
    "url": "assets/js/7.3f71fb8c.js",
    "revision": "5ba16b60c0443e0d7bf4a31745c82084"
  },
  {
    "url": "assets/js/8.e75cc2ad.js",
    "revision": "b6ac0f416565e56c2e5351c93381d601"
  },
  {
    "url": "assets/js/9.c9061ef6.js",
    "revision": "a3c8a789475fec9efe9e5c2bb119fd91"
  },
  {
    "url": "assets/js/app.7d33c942.js",
    "revision": "51734a265b732b1c38c87a71a4f79d9d"
  },
  {
    "url": "base/1.api/1.env.html",
    "revision": "a9b8d539ce2a777ea2f0afdc2a8a7959"
  },
  {
    "url": "base/1.api/1.index.html",
    "revision": "64831732509fe8df7fc36bfd49a54e96"
  },
  {
    "url": "base/1.api/10.infer.html",
    "revision": "b3d0c290148d46e4de1ae763cd1066c3"
  },
  {
    "url": "base/1.api/11.overlapping.html",
    "revision": "94ab51a94ee2fc083248e4fd3b12200b"
  },
  {
    "url": "base/1.api/12.condition.html",
    "revision": "570d0b8182a049799c8b57516e092d06"
  },
  {
    "url": "base/1.api/13.builtin.html",
    "revision": "048daa504aac2c142a4aab3980efeb1c"
  },
  {
    "url": "base/1.api/14.package.html",
    "revision": "25d44a836249193a048336f960fbc3b7"
  },
  {
    "url": "base/1.api/15.custom.html",
    "revision": "657cd8ccc9fab473265692f18cb91f84"
  },
  {
    "url": "base/1.api/16.unknown.html",
    "revision": "ef611da4edd92b2b3011f393e4ab7210"
  },
  {
    "url": "base/1.api/17.module.html",
    "revision": "380dd72218a71102f09c513c67651882"
  },
  {
    "url": "base/1.api/18.statement.html",
    "revision": "5ef436ea4ed3b1016a9fe46982d10623"
  },
  {
    "url": "base/1.api/19.extend.html",
    "revision": "f49f8e3e76463799f5eb775958b438d4"
  },
  {
    "url": "base/1.api/2.base.html",
    "revision": "b5b93b79c6394712b3d3ddca0e636663"
  },
  {
    "url": "base/1.api/3.deduction.html",
    "revision": "2e420a6d1144018ac85f1484f19e1eaa"
  },
  {
    "url": "base/1.api/4.type.html",
    "revision": "93f9ed2d7f40009b18db286d44fa46bb"
  },
  {
    "url": "base/1.api/5.class.html",
    "revision": "cbfebba409161b8c18db9a29edf7983c"
  },
  {
    "url": "base/1.api/6.interface.html",
    "revision": "e7ac9d840bd1b4be2dd0f934a46efbec"
  },
  {
    "url": "base/1.api/7.generic.html",
    "revision": "a9d9e433d6652dd93f102c8f85b2b54f"
  },
  {
    "url": "base/1.api/8.compatible.html",
    "revision": "220040c6e704badfb874de282e5ff3be"
  },
  {
    "url": "base/1.api/9.protect.html",
    "revision": "d6fb48900517ec87dd811870472ad55d"
  },
  {
    "url": "base/2.config/1.config.html",
    "revision": "1090824100f5435a401cc6dd2555dbed"
  },
  {
    "url": "base/2.config/1.index.html",
    "revision": "ca5d001c41bea048ed879c42b49508ec"
  },
  {
    "url": "base/2.config/10.ui.html",
    "revision": "bda4b8d3b0fa8c0eac9e95043168b0fc"
  },
  {
    "url": "base/2.config/11.data.html",
    "revision": "67da9f3556bca240bf14a398765d4171"
  },
  {
    "url": "base/2.config/12.skill.html",
    "revision": "0584e7906ccefa66b35ef14537c58623"
  },
  {
    "url": "base/2.config/13.com.html",
    "revision": "00bc8de1be8373932b78a75cc3b990b5"
  },
  {
    "url": "base/2.config/14.data.html",
    "revision": "e65903c2b8da8ca3a06f83501db1a3fd"
  },
  {
    "url": "base/2.config/2.webpack.html",
    "revision": "5e24ef51f32228ea1b60d260d50aac21"
  },
  {
    "url": "base/2.config/3.file.html",
    "revision": "cd96e84036f771a7b3de2a6fe31c6476"
  },
  {
    "url": "base/2.config/4.single.html",
    "revision": "266aaa5d3e5a71aa322242dcc864d3ba"
  },
  {
    "url": "base/2.config/5.page.html",
    "revision": "c9f924af861cf79c1bc47f04770a6701"
  },
  {
    "url": "base/2.config/7.module.html",
    "revision": "f217cdf9423f8b5658a1978b302a7e97"
  },
  {
    "url": "base/2.config/8.project.html",
    "revision": "aa991df708fbd08b7d829ac8314be661"
  },
  {
    "url": "base/2.config/9.utils.html",
    "revision": "89b0a9ca1051751f6858ced98242994c"
  },
  {
    "url": "base/3.react/1.index.html",
    "revision": "59b2ba4530858931afb0a68aa9ac2dce"
  },
  {
    "url": "base/3.react/2.Jenkins.html",
    "revision": "a0b8d6ce66ff9811293d4dd5bc277f3b"
  },
  {
    "url": "base/3.react/3.gitlab.html",
    "revision": "ea98ce4a2a046dcdb756bc36761d2097"
  },
  {
    "url": "base/3.react/i18n.html",
    "revision": "0b4daab8a6d3b12dc0c69a591a9c1c7e"
  },
  {
    "url": "base/3.react/prem.html",
    "revision": "febdcc0fa63c9324b787e83e51002888"
  },
  {
    "url": "base/3.react/test.html",
    "revision": "5c3540eeb41650bde4f8135dc071c809"
  },
  {
    "url": "base/3.react/vscode.html",
    "revision": "abe9be7bbf6c9e29badb0917ac3eabd5"
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
    "revision": "77b2b2ca37ea7428f761153e951313ca"
  },
  {
    "url": "mock/http.js",
    "revision": "c8abf8aba8039ff5bc6fa0517b076832"
  },
  {
    "url": "project/react/1.index.html",
    "revision": "1f8acca87f358034802440b3dc376b90"
  },
  {
    "url": "project/vue/1.index.html",
    "revision": "30edcae06eed5e06cfb1f0a938919b9d"
  },
  {
    "url": "project/vue/10.element-plus.html",
    "revision": "f2b3fd314066b09d16a9bd383091e951"
  },
  {
    "url": "project/vue/11.tsx.html",
    "revision": "ef4eb53bc65e01d3be041f420f02ce62"
  },
  {
    "url": "project/vue/2.ref.html",
    "revision": "17040fd71444f88f92c3241192150c42"
  },
  {
    "url": "project/vue/3.props.html",
    "revision": "8213a3dc962e49583a4b18ca1ef78589"
  },
  {
    "url": "project/vue/4.emits.html",
    "revision": "4de56f278bacaa1cacb4a903d59cdac4"
  },
  {
    "url": "project/vue/5.component.html",
    "revision": "064fdc23e0242f9e540c82a1e0b4eff5"
  },
  {
    "url": "project/vue/6.slot.html",
    "revision": "e809160ede59e82e4d7d966cdb5b9239"
  },
  {
    "url": "project/vue/7.vue-router.html",
    "revision": "061e5297164b6039b8aed56586432b9c"
  },
  {
    "url": "project/vue/8.tsconfig.html",
    "revision": "c106281795c39ade483d66776907adee"
  },
  {
    "url": "project/vue/9.vuex.html",
    "revision": "f4218bf6f41712361c67e90789da77ea"
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
