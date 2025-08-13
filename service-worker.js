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
    "revision": "656cc1f2d95ee452a3bbdf258b854755"
  },
  {
    "url": "assets/css/0.styles.4fe28261.css",
    "revision": "2364f060a52b1f035543fe4515f51587"
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
    "url": "assets/js/10.c42aa5a5.js",
    "revision": "c6f087a1b79402442c4339a6d5b2212f"
  },
  {
    "url": "assets/js/11.f2bc7c3b.js",
    "revision": "c9735faa20e0d6c3dee2323e8a10ac12"
  },
  {
    "url": "assets/js/12.cbe54538.js",
    "revision": "4d32afdcb7904cca5c0094ee95bdc836"
  },
  {
    "url": "assets/js/13.0dc8e859.js",
    "revision": "051e47ef50b7e79804aacbdafa799b5c"
  },
  {
    "url": "assets/js/14.1c416b4b.js",
    "revision": "f5378728c2cc25ca0c9fbf0148507dde"
  },
  {
    "url": "assets/js/15.3e48681b.js",
    "revision": "8fd51b019c0be6bb71d6538defc84662"
  },
  {
    "url": "assets/js/16.531c9520.js",
    "revision": "c8ca1d1901d9db856d9677f2bc01c438"
  },
  {
    "url": "assets/js/17.83d3b368.js",
    "revision": "b6442d0f248b1c2deee7ec9f93e8a950"
  },
  {
    "url": "assets/js/18.001b269d.js",
    "revision": "41064455f6f011dd04205a3a6dafb2fd"
  },
  {
    "url": "assets/js/19.0402f019.js",
    "revision": "9a487b73dbeefbe351d8724a0010f90d"
  },
  {
    "url": "assets/js/2.98474b9e.js",
    "revision": "391b7eb26278ff1a1de648a352d2c56a"
  },
  {
    "url": "assets/js/20.b833183e.js",
    "revision": "9eebfd5e6ba812a86f4957fc4b8be54f"
  },
  {
    "url": "assets/js/21.19cc813c.js",
    "revision": "578ed48d73ce8a32b48a4659645e8d32"
  },
  {
    "url": "assets/js/22.f54cedcc.js",
    "revision": "2f4c38ece4ae82d8e86ded2e2eacc15d"
  },
  {
    "url": "assets/js/23.1637d544.js",
    "revision": "21f7ba6ea243e880b5b96f80f254311b"
  },
  {
    "url": "assets/js/24.1733c84a.js",
    "revision": "6f61375627b3d374fbceb1d09d0139f1"
  },
  {
    "url": "assets/js/25.05dc581f.js",
    "revision": "d02872d618ca3b545c8219df545da3e9"
  },
  {
    "url": "assets/js/26.f6293ad6.js",
    "revision": "f79c57cb583549c491ed7aad9bb31829"
  },
  {
    "url": "assets/js/27.d6c60bec.js",
    "revision": "6e25047688384e13fb0da5ab7db7c1bc"
  },
  {
    "url": "assets/js/28.3317138f.js",
    "revision": "f83941a95c97ace4d151438e0f3d12e1"
  },
  {
    "url": "assets/js/29.ac562a00.js",
    "revision": "ecc45f8fc9b37264b2a2ab87776d106f"
  },
  {
    "url": "assets/js/3.3889496c.js",
    "revision": "af47c11cfa937b8d2f3285a51101a603"
  },
  {
    "url": "assets/js/30.be1b56a9.js",
    "revision": "40d70a9bd8c9e6d5c71c9010e096437b"
  },
  {
    "url": "assets/js/31.33245812.js",
    "revision": "5ad6a1bbf61dcc3bbcabf9256eeb537f"
  },
  {
    "url": "assets/js/32.00610941.js",
    "revision": "2a73fabe9d5da7a254ba71f43f643413"
  },
  {
    "url": "assets/js/33.ee3c03af.js",
    "revision": "cd0edac8f25c71e062f7fd6189ff1a13"
  },
  {
    "url": "assets/js/34.8ae9860c.js",
    "revision": "4e9778ac98a29d53e0e205ecfbead665"
  },
  {
    "url": "assets/js/35.8f234d07.js",
    "revision": "e5b240750b4398ad85ac521a159a13c9"
  },
  {
    "url": "assets/js/36.3393477d.js",
    "revision": "0c4cd8187aaea4db546539adca348850"
  },
  {
    "url": "assets/js/37.2c4c0d7a.js",
    "revision": "d0ab8631c06ae5141c81da28d4d65b5a"
  },
  {
    "url": "assets/js/38.6bd54288.js",
    "revision": "2947a0f215896f4fe8e85a88ecbae370"
  },
  {
    "url": "assets/js/39.5bede3b6.js",
    "revision": "51eb427958f926613381a8bebe74be11"
  },
  {
    "url": "assets/js/4.7e05b191.js",
    "revision": "08e88fbbe00b34feec2cb1f99aa15922"
  },
  {
    "url": "assets/js/40.1b3e85ef.js",
    "revision": "f7768766c54eb4064cc987f10de46cb4"
  },
  {
    "url": "assets/js/41.3faf3374.js",
    "revision": "0e449ff19412bea46d991793b867d6fc"
  },
  {
    "url": "assets/js/42.965f7a85.js",
    "revision": "713e35e9016907a11b287addea251582"
  },
  {
    "url": "assets/js/43.74b33e41.js",
    "revision": "1d41a7ab99bd33d843544a1b61508680"
  },
  {
    "url": "assets/js/44.29b22f63.js",
    "revision": "22c0492f6188f9bc860884d9360d6be2"
  },
  {
    "url": "assets/js/45.fa618c53.js",
    "revision": "b00fb5676f1b021b842fc36b82f42c09"
  },
  {
    "url": "assets/js/46.af5c1f4f.js",
    "revision": "f327fb314f1cb1df60a0ab1a340eae9d"
  },
  {
    "url": "assets/js/47.7a61a1c4.js",
    "revision": "245c68b0c8bfa9b260b02d3b182a4227"
  },
  {
    "url": "assets/js/48.1140744a.js",
    "revision": "c3f1751f5b911a4b010035f33656d40a"
  },
  {
    "url": "assets/js/49.8ce03ca1.js",
    "revision": "58c94d1c10d3af8bbe0ecf01d4ef3ca2"
  },
  {
    "url": "assets/js/5.a77b5cd7.js",
    "revision": "4985d64c30cece91b20ed06a42e44b94"
  },
  {
    "url": "assets/js/50.136e321e.js",
    "revision": "f981576a0253c4e79da1c7dec8a7998d"
  },
  {
    "url": "assets/js/51.38fa917d.js",
    "revision": "71f6cd3916b894f911bd8fa1593c82ed"
  },
  {
    "url": "assets/js/52.f303a452.js",
    "revision": "00ec4122c881980dae6795de86f845a8"
  },
  {
    "url": "assets/js/53.ed2b417c.js",
    "revision": "4eb5f0d199fa0b8e4facf12b9e89ad00"
  },
  {
    "url": "assets/js/54.5da00d49.js",
    "revision": "a44482ba311c7f0c022d7cb6025b2971"
  },
  {
    "url": "assets/js/55.ee0594ca.js",
    "revision": "4ff2f550b2b8debff1a5c7a7448d3325"
  },
  {
    "url": "assets/js/56.1dedf088.js",
    "revision": "96a9e740b7389f7f7f3b20cf59863cda"
  },
  {
    "url": "assets/js/57.00bc6084.js",
    "revision": "70bbc7fdfb3760938ddd7647e8396a4d"
  },
  {
    "url": "assets/js/58.a3bdf2f4.js",
    "revision": "974cd99e46f1a440d8adfd60d6805352"
  },
  {
    "url": "assets/js/59.46036abb.js",
    "revision": "eb844044d6f1f69a2d76b6dca078492b"
  },
  {
    "url": "assets/js/6.f6ce5226.js",
    "revision": "d53bf092e53adc05aa0d556069dfe47b"
  },
  {
    "url": "assets/js/60.70839438.js",
    "revision": "bcdc0e982b855d6e7287e92d2a6190c2"
  },
  {
    "url": "assets/js/61.70a20920.js",
    "revision": "42fb0e966cf938e532036a8aad626069"
  },
  {
    "url": "assets/js/62.e353f542.js",
    "revision": "966bbd5fca79adeee6d65fe001914713"
  },
  {
    "url": "assets/js/7.6c3e8723.js",
    "revision": "e46e5961e02d4ddf49eae03e3551c8fe"
  },
  {
    "url": "assets/js/8.0bb29cf8.js",
    "revision": "97755a4d2d77f1145d3124363865d9b9"
  },
  {
    "url": "assets/js/9.0ed19de3.js",
    "revision": "136798e59a741dd428ac4ec62c296cf3"
  },
  {
    "url": "assets/js/app.bb4d58bc.js",
    "revision": "a1f05c47aecfa903aa79bd273d5b1c5c"
  },
  {
    "url": "base/1.api/1.env.html",
    "revision": "c989e4b4a66d0f1c4cae22f1b7938f70"
  },
  {
    "url": "base/1.api/1.index.html",
    "revision": "1c8e5a0bc8d32f10a52be52d60a728c6"
  },
  {
    "url": "base/1.api/10.infer.html",
    "revision": "1eee4bcb3b4a36c0ad6e5420a4eb803b"
  },
  {
    "url": "base/1.api/11.overlapping.html",
    "revision": "feabf30cee64d131fdc254385885d7e2"
  },
  {
    "url": "base/1.api/12.condition.html",
    "revision": "b891db61d340155239bcf6b62998b28d"
  },
  {
    "url": "base/1.api/13.builtin.html",
    "revision": "10d47caadd828d48525c9383d938a2f6"
  },
  {
    "url": "base/1.api/14.package.html",
    "revision": "424f91507254dea06cae7dc118fd3288"
  },
  {
    "url": "base/1.api/15.custom.html",
    "revision": "b0dee7210bb4c3fb1aaf0ea9b4154690"
  },
  {
    "url": "base/1.api/16.unknown.html",
    "revision": "90c2b5218f31e7cbd04159d8d431aa5d"
  },
  {
    "url": "base/1.api/17.module.html",
    "revision": "5bde9fac6b7a036da1236ad43e8b1345"
  },
  {
    "url": "base/1.api/18.statement.html",
    "revision": "51fa72a0468f5e9fac85749d930ede37"
  },
  {
    "url": "base/1.api/19.extend.html",
    "revision": "f3cbff4c1a5e966eb7b6e53f8d1ce3d5"
  },
  {
    "url": "base/1.api/2.base.html",
    "revision": "7391dd1d49241543f15340d28eaf514c"
  },
  {
    "url": "base/1.api/3.deduction.html",
    "revision": "ee2aebf1370bd58a7da1feb748047ba8"
  },
  {
    "url": "base/1.api/4.type.html",
    "revision": "2a79e87876370db01139e713fa97a8f1"
  },
  {
    "url": "base/1.api/5.class.html",
    "revision": "8b10fd03433fb33d84c0634d15113dd0"
  },
  {
    "url": "base/1.api/6.interface.html",
    "revision": "79146538d58b7bf0bd7be8d158916ca7"
  },
  {
    "url": "base/1.api/7.generic.html",
    "revision": "4716ba4547bcb8b9f594560e30f7f22a"
  },
  {
    "url": "base/1.api/8.compatible.html",
    "revision": "b488b280094d97ef68937a5b7aa62148"
  },
  {
    "url": "base/1.api/9.protect.html",
    "revision": "cffa590607201b622989368ed9709fe7"
  },
  {
    "url": "base/2.config/1.config.html",
    "revision": "9dc40b8a445a809957ef0061eea25000"
  },
  {
    "url": "base/2.config/1.index.html",
    "revision": "afb7136cf9c8ac15c4333f5f70ed1c8d"
  },
  {
    "url": "base/2.config/10.ui.html",
    "revision": "9d31ffa2cea646ed0e87ef27f9ccd6d9"
  },
  {
    "url": "base/2.config/11.data.html",
    "revision": "241db41e824ea3de65f9f4945c24110d"
  },
  {
    "url": "base/2.config/12.skill.html",
    "revision": "4b63368e708a2cf0e1c978c0ad3bdfc3"
  },
  {
    "url": "base/2.config/13.com.html",
    "revision": "15355be7fe06079f6c5e1b31433db363"
  },
  {
    "url": "base/2.config/14.data.html",
    "revision": "075e7462a4d1dccc7f6a0720412ac1f0"
  },
  {
    "url": "base/2.config/2.webpack.html",
    "revision": "c7310e03e85d6290427c3618941d66b5"
  },
  {
    "url": "base/2.config/3.file.html",
    "revision": "b3a8ac53008f4a476c1e4e27148e55d5"
  },
  {
    "url": "base/2.config/4.single.html",
    "revision": "080bec66dc9f291c336b030044b5e796"
  },
  {
    "url": "base/2.config/5.page.html",
    "revision": "61c31766666af68d5dd1e781795d7708"
  },
  {
    "url": "base/2.config/7.module.html",
    "revision": "83670a401ca2d6f02c36c68e195a2e75"
  },
  {
    "url": "base/2.config/8.project.html",
    "revision": "85e7725fdbff10729ce4ec674811bb3d"
  },
  {
    "url": "base/2.config/9.utils.html",
    "revision": "049c1902c9fe0ede39d059b098825cf0"
  },
  {
    "url": "base/3.react/1.index.html",
    "revision": "7ef255664db7ac385fc2c8346f66fae8"
  },
  {
    "url": "base/3.react/2.Jenkins.html",
    "revision": "dd713910ca18b9b9ea14bcee839190fa"
  },
  {
    "url": "base/3.react/3.gitlab.html",
    "revision": "228028660e5848ff8cf40cde5ab12137"
  },
  {
    "url": "base/3.react/4.vscode.html",
    "revision": "37f2bde2a8fc28a8e65b411470d29beb"
  },
  {
    "url": "base/3.react/5.zod.html",
    "revision": "0e13638ec1b516d141c1b6205bef279b"
  },
  {
    "url": "base/3.react/i18n.html",
    "revision": "4696891de8da215ec6e0842383510d46"
  },
  {
    "url": "base/3.react/prem.html",
    "revision": "1060de90644439c08acefc30216bc764"
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
    "revision": "07ca55ead59e5a92426d6e154b59b3b3"
  },
  {
    "url": "mock/http.js",
    "revision": "c8abf8aba8039ff5bc6fa0517b076832"
  },
  {
    "url": "project/react/1.index.html",
    "revision": "26a0ea1ffab4850a4b714b2418dc271e"
  },
  {
    "url": "project/vue/1.index.html",
    "revision": "69df6d3df32b334099102b94a4158482"
  },
  {
    "url": "project/vue/10.element-plus.html",
    "revision": "541c2b17e024bbda42abfebff29f30bc"
  },
  {
    "url": "project/vue/11.tsx.html",
    "revision": "b6701cb4071a11eaa9dece165aad0142"
  },
  {
    "url": "project/vue/2.ref.html",
    "revision": "b5c13416c471ca2a65edac177be924e3"
  },
  {
    "url": "project/vue/3.props.html",
    "revision": "424233a589f7046b702913786af41820"
  },
  {
    "url": "project/vue/4.emits.html",
    "revision": "42b67b3efba22dddf373e7be2dc255ac"
  },
  {
    "url": "project/vue/5.component.html",
    "revision": "feb3f48048fe202f91068d1e62ded24b"
  },
  {
    "url": "project/vue/6.slot.html",
    "revision": "772a32cd5614524761f904360b5a7066"
  },
  {
    "url": "project/vue/7.vue-router.html",
    "revision": "28550aac622c0b7bb72d92a36d0821ea"
  },
  {
    "url": "project/vue/8.tsconfig.html",
    "revision": "bd097f6a7d9b8856d8e787642897e83c"
  },
  {
    "url": "project/vue/9.vuex.html",
    "revision": "3d5f773e9e91ac07e8c34a0432ba350e"
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
