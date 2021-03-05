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

importScripts("https://storage.googleapis.com/workbox-cdn/releases/3.6.3/workbox-sw.js");

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "867869612f1043362f123b98c66f6ad1"
  },
  {
    "url": "assets/css/0.styles.a8692362.css",
    "revision": "3e1a92e2c83b6c4c6d76ee2a80f11eb3"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.5f5d8104.js",
    "revision": "91135e15e695222823b719081afcaf7f"
  },
  {
    "url": "assets/js/11.56f2c75a.js",
    "revision": "aa259ab3b141b0b1846ea603f347f027"
  },
  {
    "url": "assets/js/12.7d63f7c4.js",
    "revision": "18bebcf498fa3d9e18bd8d91e738c7df"
  },
  {
    "url": "assets/js/13.517fdf4f.js",
    "revision": "47768e81040c0497419652cab6e22a95"
  },
  {
    "url": "assets/js/14.28f34e12.js",
    "revision": "7d024678521aa7b1778df3f57d8c77dd"
  },
  {
    "url": "assets/js/15.61bcc796.js",
    "revision": "0ef7005db3ac8ddd678bb89bf62958db"
  },
  {
    "url": "assets/js/16.2850ca9c.js",
    "revision": "c14bfd05888b8092fad939ce4836ecb1"
  },
  {
    "url": "assets/js/17.5c74d30a.js",
    "revision": "49ceb434fe14d1d9f8fce8ea5ef17a32"
  },
  {
    "url": "assets/js/18.ca9e5701.js",
    "revision": "15be0e05749de54c35afa68ce8d5c955"
  },
  {
    "url": "assets/js/19.531bab69.js",
    "revision": "c3f5130b2495a8c47856bebc51828cc6"
  },
  {
    "url": "assets/js/2.dd99c12e.js",
    "revision": "02716f586e1619a44597c1290dbc9fb1"
  },
  {
    "url": "assets/js/20.0b390e6b.js",
    "revision": "9adb536731c7f01836c567b5d8fe0d3c"
  },
  {
    "url": "assets/js/21.388181b9.js",
    "revision": "d8983f575a55793bbd9864c77bd20469"
  },
  {
    "url": "assets/js/22.1c9b128e.js",
    "revision": "e28ff8e3d0a40280f44627d237b18241"
  },
  {
    "url": "assets/js/23.8e395827.js",
    "revision": "daaaa50b3fc53d672399b8ea98b2c711"
  },
  {
    "url": "assets/js/24.8cf0f2a0.js",
    "revision": "4f50a63426883fdfd9b645361b2ad56c"
  },
  {
    "url": "assets/js/25.34a22c80.js",
    "revision": "c34d7b039afccbc6054a1176ab09b5da"
  },
  {
    "url": "assets/js/26.154dbbcf.js",
    "revision": "7c20002c6e4a234714bda9d85c46861e"
  },
  {
    "url": "assets/js/27.6412345b.js",
    "revision": "be93a13ee879a636cc56c3cacad88960"
  },
  {
    "url": "assets/js/28.708e40b4.js",
    "revision": "84ebc548ebfc3bb27d7f2cb0ee8d7a54"
  },
  {
    "url": "assets/js/29.63a1ac7d.js",
    "revision": "84fa335102a8729e1f89a735ce11c2de"
  },
  {
    "url": "assets/js/3.bc3e90a1.js",
    "revision": "0272b4fb03af037024eee421566a54ee"
  },
  {
    "url": "assets/js/30.49603904.js",
    "revision": "fd573c8895292797cd9807792ab509c9"
  },
  {
    "url": "assets/js/31.4852b645.js",
    "revision": "a475736a65dd6df41b147fae6d7cb65f"
  },
  {
    "url": "assets/js/32.ddf7368f.js",
    "revision": "6bbbb21f1d433154fb1fcd2c4652fe1d"
  },
  {
    "url": "assets/js/33.2e9e6cfe.js",
    "revision": "547eef4d36c8afb703d7dd10e8d4360f"
  },
  {
    "url": "assets/js/34.817ef8aa.js",
    "revision": "548e2faa37c68888246886486e1e95bf"
  },
  {
    "url": "assets/js/35.a263454e.js",
    "revision": "938363dc4ee6d6372eac2165b87ab93b"
  },
  {
    "url": "assets/js/36.41de02c5.js",
    "revision": "63ecd423e464e3a9b9d3fae08fd02a7f"
  },
  {
    "url": "assets/js/37.30a4d6aa.js",
    "revision": "156c286f53b8e6e442eb2c7a7a8b2b8c"
  },
  {
    "url": "assets/js/4.934556b7.js",
    "revision": "dd4ef056d86814b0494a9b2f3bb6f8be"
  },
  {
    "url": "assets/js/5.996ffaf1.js",
    "revision": "da9b64b1c172e6340031f7c8e7aafba9"
  },
  {
    "url": "assets/js/6.0162fbaa.js",
    "revision": "6486a40206b981cf3f89cb23185b0329"
  },
  {
    "url": "assets/js/7.9759e4ed.js",
    "revision": "531606a22bf4ae5d550e0e2f60243c62"
  },
  {
    "url": "assets/js/8.9e327717.js",
    "revision": "35c3e9f88a880fe1ecfa02649b16faf8"
  },
  {
    "url": "assets/js/9.a3a5a0a9.js",
    "revision": "8366388359cc3d1e9eeb6787f296477d"
  },
  {
    "url": "assets/js/app.4b811998.js",
    "revision": "0b98438c1fccab65182201e152574967"
  },
  {
    "url": "base/build/1.config.html",
    "revision": "f53bc0b748a566768a269c47bfb11220"
  },
  {
    "url": "base/build/10.ui.html",
    "revision": "d1e83f110867d7acae43e8dbfdf353c7"
  },
  {
    "url": "base/build/11.data.html",
    "revision": "33c97274fee4c7f3f493f3d71dc7a07e"
  },
  {
    "url": "base/build/12.skill.html",
    "revision": "538659aaa71a624e7b6fb7ea69d877e4"
  },
  {
    "url": "base/build/13.com.html",
    "revision": "e2b0f73b67c92f0249fcea59c29ff10e"
  },
  {
    "url": "base/build/14.data.html",
    "revision": "8b980ba7428a711b3faae3c40412ef62"
  },
  {
    "url": "base/build/15.api.html",
    "revision": "451ecaa82f9234486c3f124be1895b2f"
  },
  {
    "url": "base/build/2.webpack.html",
    "revision": "275675a4b6887c25f512fa91309ef5ea"
  },
  {
    "url": "base/build/3.file.html",
    "revision": "eaee6b5fdb3a0995de12177b8a169deb"
  },
  {
    "url": "base/build/4.single.html",
    "revision": "722a43c7bfe6586161de9ea4f864ca57"
  },
  {
    "url": "base/build/5.page.html",
    "revision": "6dff5253131fb669fa599cdab71b61bc"
  },
  {
    "url": "base/build/7.module.html",
    "revision": "84ebf304a10bbc06f63980c29587826a"
  },
  {
    "url": "base/build/8.project.html",
    "revision": "b046f230be5d5fa91007113952b2d71f"
  },
  {
    "url": "base/build/9.utils.html",
    "revision": "ad8000d3ec2cc54c8b17e164e66c8f22"
  },
  {
    "url": "base/practice/1.docker.html",
    "revision": "27dcfa7b420cf115e81b68e4014a47cd"
  },
  {
    "url": "base/practice/2.Jenkins.html",
    "revision": "e69a7f6f6cffb29d9dbb98eb2bffaaed"
  },
  {
    "url": "base/practice/3.gitlab.html",
    "revision": "018bacf24edb7f78e5ee26cb2dacf25f"
  },
  {
    "url": "base/practice/i18n.html",
    "revision": "9ed95328239e8ee0190c93d907761e49"
  },
  {
    "url": "base/practice/prem.html",
    "revision": "cd3d054f2c0466b9eac3c851c022cdc0"
  },
  {
    "url": "base/practice/test.html",
    "revision": "4befb2248fb9c25a9aa603653b02f9e4"
  },
  {
    "url": "base/practice/vscode.html",
    "revision": "95fd4ed1bb63564941f1adf3d308dbac"
  },
  {
    "url": "index.html",
    "revision": "1929a23a7d84a4ce7674eaaff83b7a7d"
  },
  {
    "url": "senior/npm/1.recursionAndDynamics.html",
    "revision": "0739db87de217b7a06d38456093bec93"
  },
  {
    "url": "senior/use/1.recursionAndDynamics.html",
    "revision": "0f557d6ee42dc9a608ee5c50b83c4e94"
  },
  {
    "url": "senior/use/10.table.html",
    "revision": "8fb2663cb06413bdb557a3aa1a84629d"
  },
  {
    "url": "senior/use/11.tree.html",
    "revision": "0971cfbaaa8c33e73deb1aeef3ec8335"
  },
  {
    "url": "senior/use/2.extend.html",
    "revision": "f2c95cbf7d3426c0d7087d73d699b26e"
  },
  {
    "url": "senior/use/3.componentCommunication.html",
    "revision": "f061ceec9e22c96c4ca0bde040e760d3"
  },
  {
    "url": "senior/use/4.render.html",
    "revision": "e95b3747ea1f9e253c4207d29574f802"
  },
  {
    "url": "senior/use/5.api.html",
    "revision": "7c3285a4a2abb1854f7e6b9f3083c368"
  },
  {
    "url": "senior/use/6.form.html",
    "revision": "ac2872377ac46b3ba77178f667fec629"
  },
  {
    "url": "senior/use/7.checkBox.html",
    "revision": "4ff6d11c368ffaa9ab59e65c9ddf8c4b"
  },
  {
    "url": "senior/use/8.active.html",
    "revision": "07694cbbf5f1b6488933eac9fd8386a9"
  },
  {
    "url": "senior/use/9.alert.html",
    "revision": "19062ecefb973d9816e7c1265aa23a01"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
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
