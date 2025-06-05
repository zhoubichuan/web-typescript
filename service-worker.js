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
    "revision": "cd2e2fc9584dcbf863be42dbca3d4868"
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
    "url": "assets/js/10.e53dac92.js",
    "revision": "14b90242ebb84774fb16d59e9e57437e"
  },
  {
    "url": "assets/js/11.70548675.js",
    "revision": "00129481001d5348a9cee1f77a9861a0"
  },
  {
    "url": "assets/js/12.29b36cdd.js",
    "revision": "965bae1ac9bd38269deeec70d54e557f"
  },
  {
    "url": "assets/js/13.05292771.js",
    "revision": "bdff091d92fbae6d27fbb1a35c83b6f2"
  },
  {
    "url": "assets/js/14.ab50b97b.js",
    "revision": "af26ddf28b81b752457a53806ca2dde5"
  },
  {
    "url": "assets/js/15.589db96b.js",
    "revision": "a8ce5910712d5a6ef034deab80ca739c"
  },
  {
    "url": "assets/js/16.0631e449.js",
    "revision": "31f53d8b763575214da35a95be340433"
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
    "url": "assets/js/20.f8e8238a.js",
    "revision": "1e1d8a4380b451d5f8581c05e37bd09d"
  },
  {
    "url": "assets/js/21.522e8b28.js",
    "revision": "ea490a23bde803a97999099fe648b60e"
  },
  {
    "url": "assets/js/22.3d9bfb2e.js",
    "revision": "2e2d29476487260d91873fad3a711dca"
  },
  {
    "url": "assets/js/23.bebf39ad.js",
    "revision": "954f564963ed5ebd258499a3aa848db7"
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
    "url": "assets/js/27.0ccbf1ae.js",
    "revision": "67e39b5c8f574c125b258ce5f4c8c0e5"
  },
  {
    "url": "assets/js/28.1824c59d.js",
    "revision": "786a011d01dd9384e0c7c7d5b73aeb6a"
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
    "url": "assets/js/30.bf5cda72.js",
    "revision": "bc7418bab6eb855a4e97ebb52e57272c"
  },
  {
    "url": "assets/js/31.3d263f37.js",
    "revision": "6623c2e2db549de2189b8fb4d664f988"
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
    "url": "assets/js/35.8ee6297a.js",
    "revision": "f6b33f8b46daa64ac7cee5f6c7d8f7e3"
  },
  {
    "url": "assets/js/36.347ea7f2.js",
    "revision": "10e4f257e6113aa13b90581a32033d31"
  },
  {
    "url": "assets/js/37.3b5a705d.js",
    "revision": "5d9f4d69d0b7bbb52ab7ff6235585f34"
  },
  {
    "url": "assets/js/38.5c5521de.js",
    "revision": "932385f75067f93bb073b79bfdcce99c"
  },
  {
    "url": "assets/js/39.6a2bee13.js",
    "revision": "319c98353bf48bd1a33ea03fe5adec0d"
  },
  {
    "url": "assets/js/4.eb5c941c.js",
    "revision": "aad94d87e4b311dda443c2e6cd801c73"
  },
  {
    "url": "assets/js/40.a3c83129.js",
    "revision": "04d01e78f619c5bff20107cbd5d91e4c"
  },
  {
    "url": "assets/js/41.5551a8e1.js",
    "revision": "777fe20380455ef5b44d267ef8feb60e"
  },
  {
    "url": "assets/js/42.2b66694d.js",
    "revision": "dc1b73a515940301960ac209896c6414"
  },
  {
    "url": "assets/js/43.89f37ee7.js",
    "revision": "5abef1f040b34a378060bb58c334534e"
  },
  {
    "url": "assets/js/44.c1331a00.js",
    "revision": "328df58fc439649b133fe5e4ea78162f"
  },
  {
    "url": "assets/js/45.af956ec2.js",
    "revision": "f81cdc9cf5de2de18a7f1f7cd83ee53f"
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
    "url": "assets/js/48.8fa597b4.js",
    "revision": "0d646246bc74d61cf5d84975208f0c28"
  },
  {
    "url": "assets/js/49.1bd257ab.js",
    "revision": "d383f72b0666f99487543f2d855b54c0"
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
    "url": "assets/js/53.1992b300.js",
    "revision": "2b265bcd39007ef2499f01f5b9ded7d4"
  },
  {
    "url": "assets/js/54.0d7e017d.js",
    "revision": "b07d876fe51e68d2faebe5e642853f42"
  },
  {
    "url": "assets/js/55.50e6705e.js",
    "revision": "5a2bbcf880eaa3c4c1767ec5b2f7f87a"
  },
  {
    "url": "assets/js/56.a46a0c67.js",
    "revision": "11eb0c55216f6d39590bfdc980bbd364"
  },
  {
    "url": "assets/js/57.23623377.js",
    "revision": "27040c64c2581cbcac82ceec0b3c3a2b"
  },
  {
    "url": "assets/js/58.24037257.js",
    "revision": "6d947a8a26e1e7e50b7eeb5c06110630"
  },
  {
    "url": "assets/js/59.e819871c.js",
    "revision": "033ae58617f3f8848f00689d9124e4ce"
  },
  {
    "url": "assets/js/6.dc20395f.js",
    "revision": "17bc7bb7deb438fc9273a43f302caf63"
  },
  {
    "url": "assets/js/60.1bdd17e4.js",
    "revision": "d9a44b3a732f6800d04222eeb6a259cc"
  },
  {
    "url": "assets/js/61.e027b690.js",
    "revision": "8c89b399701ab947241b33e52dfeaee4"
  },
  {
    "url": "assets/js/62.6e766a78.js",
    "revision": "66f7d361ec85bd266eca5b7fcc988314"
  },
  {
    "url": "assets/js/7.a96145e8.js",
    "revision": "25be36d9da021dec2da55523bb35b6d4"
  },
  {
    "url": "assets/js/8.d813e106.js",
    "revision": "1978aa7017510476920429006ee34ba5"
  },
  {
    "url": "assets/js/9.d4ef45b8.js",
    "revision": "6efbe074aafa8e593c5165ad63c80126"
  },
  {
    "url": "assets/js/app.824e53de.js",
    "revision": "236869075371a3226b64cf233abbf170"
  },
  {
    "url": "base/1.api/1.env.html",
    "revision": "350478ceffc11afd72222be0b2f405fe"
  },
  {
    "url": "base/1.api/1.index.html",
    "revision": "6eb1bb4f0873701183475cefac4aa06c"
  },
  {
    "url": "base/1.api/10.infer.html",
    "revision": "66e6dbc917858690ce850b7b62ceb40e"
  },
  {
    "url": "base/1.api/11.overlapping.html",
    "revision": "ccc23ca642eb21e8506174e24ea6b473"
  },
  {
    "url": "base/1.api/12.condition.html",
    "revision": "5434558552b46a9a3027d73b20fbf1f1"
  },
  {
    "url": "base/1.api/13.builtin.html",
    "revision": "3ba52a38e44efa5a43e36d3b1a3c707c"
  },
  {
    "url": "base/1.api/14.package.html",
    "revision": "0a95fe8c4adf389310b9a891f5a78cfc"
  },
  {
    "url": "base/1.api/15.custom.html",
    "revision": "250ca4a8187739d9654fb7523d427aa0"
  },
  {
    "url": "base/1.api/16.unknown.html",
    "revision": "96137198e4e9c40ff5634769de5c2677"
  },
  {
    "url": "base/1.api/17.module.html",
    "revision": "360f6885f40a81f02f5ef73ea5fd2890"
  },
  {
    "url": "base/1.api/18.statement.html",
    "revision": "b0ce2ab056c11b0571680d01b7fd0d28"
  },
  {
    "url": "base/1.api/19.extend.html",
    "revision": "aa18acf3a8cad5f8943f269dabc8d1db"
  },
  {
    "url": "base/1.api/2.base.html",
    "revision": "f289d8890e4d18011e1cd5a9e888188d"
  },
  {
    "url": "base/1.api/3.deduction.html",
    "revision": "a91f742fccf7d3a7afda64d6344a225d"
  },
  {
    "url": "base/1.api/4.type.html",
    "revision": "c51c2fc08cf6631e193875b5912c5429"
  },
  {
    "url": "base/1.api/5.class.html",
    "revision": "4464255ae365413f0a45fc895bf73a28"
  },
  {
    "url": "base/1.api/6.interface.html",
    "revision": "6f888ac22fb03550b3033730b64ad262"
  },
  {
    "url": "base/1.api/7.generic.html",
    "revision": "e2099135911a4a3fd35d04f228175287"
  },
  {
    "url": "base/1.api/8.compatible.html",
    "revision": "3a09ab360e588d0fecd3a33e3335271f"
  },
  {
    "url": "base/1.api/9.protect.html",
    "revision": "9df3754ff70e07618bc567762a3ffc90"
  },
  {
    "url": "base/2.config/1.config.html",
    "revision": "5793b3f60a533d8899804c0c58219beb"
  },
  {
    "url": "base/2.config/1.index.html",
    "revision": "4dbdd5fa0d9519454e1d9356754ed8d8"
  },
  {
    "url": "base/2.config/10.ui.html",
    "revision": "98dc0886a5d4dc54af218b897d7074ee"
  },
  {
    "url": "base/2.config/11.data.html",
    "revision": "3803f8f5b22eedcaac64175a49d6d5e1"
  },
  {
    "url": "base/2.config/12.skill.html",
    "revision": "01cf74eb91ea4c18f4f8aac9c93c309f"
  },
  {
    "url": "base/2.config/13.com.html",
    "revision": "e25eba3abeabddd9d1e87b6911be1980"
  },
  {
    "url": "base/2.config/14.data.html",
    "revision": "915eff1a8a23fde09bc3c5615d6276e7"
  },
  {
    "url": "base/2.config/2.webpack.html",
    "revision": "deb1740d47037bd7ebef26838529f161"
  },
  {
    "url": "base/2.config/3.file.html",
    "revision": "4042ab1880bf39aee0e627a3e3342af7"
  },
  {
    "url": "base/2.config/4.single.html",
    "revision": "1884e636eb1490c4f514a1df93455072"
  },
  {
    "url": "base/2.config/5.page.html",
    "revision": "4c95005ecd0df00ed4af467b37c5c88f"
  },
  {
    "url": "base/2.config/7.module.html",
    "revision": "06826fb4eb25d7199b42630a6c91735d"
  },
  {
    "url": "base/2.config/8.project.html",
    "revision": "01260f3b0915db0d4404b42f264299c2"
  },
  {
    "url": "base/2.config/9.utils.html",
    "revision": "4a88c2b8ac41c1c0a20532df3d322212"
  },
  {
    "url": "base/3.react/1.index.html",
    "revision": "8e9bb272f99c6e6202df466b26a5a25e"
  },
  {
    "url": "base/3.react/2.Jenkins.html",
    "revision": "b1feb031764c721aeb08a08ddfbbfbf6"
  },
  {
    "url": "base/3.react/3.gitlab.html",
    "revision": "eb236b69bf7cc7c0229909496d42b3e2"
  },
  {
    "url": "base/3.react/4.vscode.html",
    "revision": "537dacc2c27a59c02330e1a4d0dd4a25"
  },
  {
    "url": "base/3.react/5.zod.html",
    "revision": "db18dfef32f42158e5359ac56942fd1a"
  },
  {
    "url": "base/3.react/i18n.html",
    "revision": "eec4dae4b465607168ae5804f2f248a5"
  },
  {
    "url": "base/3.react/prem.html",
    "revision": "22847497703b6dd98beaf8c08443a33b"
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
    "revision": "8e18797dcd21b393105883e93b825578"
  },
  {
    "url": "mock/http.js",
    "revision": "c8abf8aba8039ff5bc6fa0517b076832"
  },
  {
    "url": "project/react/1.index.html",
    "revision": "e7393567aaf3c5a32c96b0ff6d2e239a"
  },
  {
    "url": "project/vue/1.index.html",
    "revision": "f37bfe575d2b9d6cbd59a005e0971a38"
  },
  {
    "url": "project/vue/10.element-plus.html",
    "revision": "72e6770dbeea1998b48befd5314cbfd8"
  },
  {
    "url": "project/vue/11.tsx.html",
    "revision": "cd5637d59c3dd956e8b327565c01c045"
  },
  {
    "url": "project/vue/2.ref.html",
    "revision": "21df47c62ae0a9e795fd8e0cfa3303e3"
  },
  {
    "url": "project/vue/3.props.html",
    "revision": "1bf56780cf71f353bb0ca80d3f7bafa3"
  },
  {
    "url": "project/vue/4.emits.html",
    "revision": "91d2bbc282fbdaa67d96bd4d9ded647d"
  },
  {
    "url": "project/vue/5.component.html",
    "revision": "28436ed9b4e91982d3a1f028c1600beb"
  },
  {
    "url": "project/vue/6.slot.html",
    "revision": "ec315890851ed6156eb40773060193e4"
  },
  {
    "url": "project/vue/7.vue-router.html",
    "revision": "7cee449ca98b2cee5ddf5c33ebb4cf09"
  },
  {
    "url": "project/vue/8.tsconfig.html",
    "revision": "15d321b679513fd0a548da7d4a18e925"
  },
  {
    "url": "project/vue/9.vuex.html",
    "revision": "58d87a3af1c66c81021fbfbaa8b42e33"
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
