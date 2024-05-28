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
    "url": "03-01.jpg",
    "revision": "61ccd31b9a99e4dc0b2115d7a181dc71"
  },
  {
    "url": "03-02.jpg",
    "revision": "0e42c83dcc174ebfdbb611ab0956fcd9"
  },
  {
    "url": "03-03.jpg",
    "revision": "dd23072447e0798b536bd162235d14c3"
  },
  {
    "url": "03-04.jpg",
    "revision": "661a64ee2776ef94b23ba82f7ee50969"
  },
  {
    "url": "03-05.jpg",
    "revision": "6f52dcb2ccb40af28a65a4b796eb918d"
  },
  {
    "url": "03-06.jpg",
    "revision": "2643698d9412e41a449c1edee719fb29"
  },
  {
    "url": "03-07.jpg",
    "revision": "c4a788f41d803f8b9bddb5adc0513be6"
  },
  {
    "url": "03-08.jpg",
    "revision": "4c810503ec4bc1adfd29904056fc2886"
  },
  {
    "url": "03-09.jpg",
    "revision": "9c798bc91f80f84b6b0e7f7fba26d65b"
  },
  {
    "url": "03-10.jpg",
    "revision": "bb5b18b65591e9d058edbc14b02c6ba5"
  },
  {
    "url": "03-11.jpg",
    "revision": "6a88d8f48c63e79c72ec45ae84a8d9ff"
  },
  {
    "url": "04-01.jpg",
    "revision": "4bbafd5dd4000461cef55f669139b17b"
  },
  {
    "url": "05-01.jpg",
    "revision": "8d54b111a4b6b5fb4cd39e4c7261b927"
  },
  {
    "url": "06-01.jpg",
    "revision": "cf2dab320c48c5ead6fe105863629e4e"
  },
  {
    "url": "06-02.jpg",
    "revision": "aa286f8fd6540b7a7b6d36392a63f505"
  },
  {
    "url": "06-03.jpg",
    "revision": "239fa5fb2a9063f1e261ae2db81fceef"
  },
  {
    "url": "06-04.jpg",
    "revision": "a2dbf924afd6a8580ce4a2d2bcd6e049"
  },
  {
    "url": "06-05.jpg",
    "revision": "22f4f542b283cdc3d027eb664424d3c8"
  },
  {
    "url": "06-06.jpg",
    "revision": "12017ddd5b9179e8f53e93044acee998"
  },
  {
    "url": "06-07.jpg",
    "revision": "1ded65fc56da9f0008ae4ef2eacc8175"
  },
  {
    "url": "1.jpg",
    "revision": "f1ea37a492254cc85dd6fd1e89b1a6b4"
  },
  {
    "url": "1.png",
    "revision": "d41d8cd98f00b204e9800998ecf8427e"
  },
  {
    "url": "12-01.jpg",
    "revision": "cc85570b3c89f73291af87791115986a"
  },
  {
    "url": "12-02.jpg",
    "revision": "f2b24c5c4beb21d5302c64b59445927a"
  },
  {
    "url": "12-03.jpg",
    "revision": "61fe98dff39d0887978deb0af605571b"
  },
  {
    "url": "12-04.jpg",
    "revision": "ff2468e7fbb03e034be0ffd7312dc7d9"
  },
  {
    "url": "12-05.jpg",
    "revision": "a126fe17514d81279c677666fd459d9d"
  },
  {
    "url": "12-06.jpg",
    "revision": "c25686b2f77ac7c5a2d4706f43e40132"
  },
  {
    "url": "12-07.jpg",
    "revision": "de17f3eb1df503250bcf1a5a4b533eec"
  },
  {
    "url": "12-08.jpg",
    "revision": "f3b58c768c18919a6fa2ab59ea6627db"
  },
  {
    "url": "13-01.jpg",
    "revision": "b22f06060909d43d796a8ffd4b0743a0"
  },
  {
    "url": "13-02.jpg",
    "revision": "2d2bca0518716a8dfaf37ef5c15e54ee"
  },
  {
    "url": "13-03.jpg",
    "revision": "fec1a3db903dc05c462fb6f384a400d6"
  },
  {
    "url": "2.jpg",
    "revision": "572bc2e4ef3efb7c81bbbcac5f09147b"
  },
  {
    "url": "3.jpg",
    "revision": "248757985bb49f73624c6923057530ac"
  },
  {
    "url": "4.jpg",
    "revision": "407c52446e2e463c4f8e494d52dbe485"
  },
  {
    "url": "404.html",
    "revision": "3bdb88ebec2070d763f20df1f37c2125"
  },
  {
    "url": "5.jpg",
    "revision": "7e861769b640afa00fcc0ac4b72d9c52"
  },
  {
    "url": "assets/css/0.styles.922276fa.css",
    "revision": "50851f12a67287e02d0f2ae5b4c30588"
  },
  {
    "url": "assets/img/1_1.00c61fe3.png",
    "revision": "00c61fe3e83dc28e594ee04cef3c69a0"
  },
  {
    "url": "assets/img/11_2.cb83a8ca.png",
    "revision": "cb83a8ca4a08cf9360000df164ff5cbd"
  },
  {
    "url": "assets/img/2_1.b556beab.png",
    "revision": "b556beabb544b2e266c56944875e78f2"
  },
  {
    "url": "assets/img/2.cd56e440.png",
    "revision": "cd56e440f10d2066e3f600e70e166969"
  },
  {
    "url": "assets/img/22_1.171885fb.png",
    "revision": "171885fb7e6fa595fcb5038fcf6e3733"
  },
  {
    "url": "assets/img/22_2.737cbefb.png",
    "revision": "737cbefbb1fd4e828fde52175bbb4452"
  },
  {
    "url": "assets/img/3_1.bd10fab7.png",
    "revision": "bd10fab7110a81c0e008ae9c22c1ca75"
  },
  {
    "url": "assets/img/3_2.d4485dc3.png",
    "revision": "d4485dc3c6e11992d5223cd2bf9cf757"
  },
  {
    "url": "assets/img/33_1.efe771b4.png",
    "revision": "efe771b458919ee361bbae7cce8b2306"
  },
  {
    "url": "assets/img/4_1.0fd8e311.png",
    "revision": "0fd8e31163bddcda719de3e65d8ec917"
  },
  {
    "url": "assets/img/relationscheme1.69673898.png",
    "revision": "69673898037fa1027fcbebfb4033053e"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/1.20ded109.js",
    "revision": "546026ca7e7e41e848ec9e8d222dd708"
  },
  {
    "url": "assets/js/10.10767d5b.js",
    "revision": "0dd42b859940017f05737a987d25d87c"
  },
  {
    "url": "assets/js/13.0cb61c15.js",
    "revision": "ac4f3fe749811b8e7322af0ac02b07a5"
  },
  {
    "url": "assets/js/14.f7196a2a.js",
    "revision": "db6b7c28e2da0ee8dba5591d52ce5a00"
  },
  {
    "url": "assets/js/15.99633a4f.js",
    "revision": "86a28369a719249c9b78821ec49d13c9"
  },
  {
    "url": "assets/js/16.2bc577d7.js",
    "revision": "18e9a7b58be1e7e5f75822bfa14c22e0"
  },
  {
    "url": "assets/js/17.71889178.js",
    "revision": "3434388b068181bb35e67b6092f1aaeb"
  },
  {
    "url": "assets/js/18.bbb3bd3c.js",
    "revision": "0f8fcc5459702246f890a0e38ffafda6"
  },
  {
    "url": "assets/js/19.9b8f087f.js",
    "revision": "324990ca660d7ed766a310931c2b5664"
  },
  {
    "url": "assets/js/2.e0dfed78.js",
    "revision": "bfa9d19312a623ad5161a290a2358c87"
  },
  {
    "url": "assets/js/20.a7cc0c4e.js",
    "revision": "2ef01e5d10800bc9e8e4cd444526033d"
  },
  {
    "url": "assets/js/21.39425e04.js",
    "revision": "8b7c9b61e56f99d768ff23d21e9d935d"
  },
  {
    "url": "assets/js/22.d2077878.js",
    "revision": "9f6e9904ba0cfa4dc7bc50e47142a6e3"
  },
  {
    "url": "assets/js/23.3ec6ef11.js",
    "revision": "d0e91598f11e346698d9855ebb1cde0b"
  },
  {
    "url": "assets/js/24.bd19a9ed.js",
    "revision": "d88d84fe94ff7d371be823d9f31118a4"
  },
  {
    "url": "assets/js/25.9b82b3b9.js",
    "revision": "2e9bc8583fc2d0dfe0e546a919f8359a"
  },
  {
    "url": "assets/js/26.590bbba7.js",
    "revision": "263fdeb3a6421d841b88e0d0908be681"
  },
  {
    "url": "assets/js/27.387d4374.js",
    "revision": "4fe9553f84fd2ab47abe0eb84c1ebed3"
  },
  {
    "url": "assets/js/28.760cee84.js",
    "revision": "71a0901a025ca71664bf789454c5c382"
  },
  {
    "url": "assets/js/29.0f027b3a.js",
    "revision": "24591ff2410c79551419409f8f0edf9b"
  },
  {
    "url": "assets/js/3.3a389e6a.js",
    "revision": "54c2d66a75926ab0b7e2caed46600a3e"
  },
  {
    "url": "assets/js/30.c67f929f.js",
    "revision": "39049e87cbb196bc840a42ae055d7628"
  },
  {
    "url": "assets/js/31.cd5d78dc.js",
    "revision": "35c40a90e6c434007a0ecc621d6db520"
  },
  {
    "url": "assets/js/32.e0adc2f7.js",
    "revision": "e4938051de467a16eedd3f2b32ac8de6"
  },
  {
    "url": "assets/js/33.2dbccac2.js",
    "revision": "9c39074f07e21293076f7a7e1ff4d66c"
  },
  {
    "url": "assets/js/34.47ec444d.js",
    "revision": "76a2b1edc58dc1372f84a0b6764803c5"
  },
  {
    "url": "assets/js/35.04ef5ec2.js",
    "revision": "1ef5a02cf71499596c072db8751ead2c"
  },
  {
    "url": "assets/js/36.44123f72.js",
    "revision": "0cd942bbce9897294e20e35abd03db63"
  },
  {
    "url": "assets/js/37.7d68bb2c.js",
    "revision": "b9c01418effbf5840c73b6e3d33df6e4"
  },
  {
    "url": "assets/js/38.7172ce50.js",
    "revision": "bd65665aab28f86adc979ed3d0e175cc"
  },
  {
    "url": "assets/js/39.2e3288c0.js",
    "revision": "8936b02ce7acf0667ec848608207b081"
  },
  {
    "url": "assets/js/4.d11cc4f6.js",
    "revision": "b560db7f6bd8a2495167d6ca8709da26"
  },
  {
    "url": "assets/js/41.1df53e30.js",
    "revision": "545ca259d4ca17bfad277727e72edb4a"
  },
  {
    "url": "assets/js/5.9377ea00.js",
    "revision": "62e67cc7342b93c86f794c0d48f728bd"
  },
  {
    "url": "assets/js/6.2c7cf4d7.js",
    "revision": "a929d3f523bdd186f313747aabfa90e8"
  },
  {
    "url": "assets/js/7.2249f39a.js",
    "revision": "6a2cfcf8c376454d19c7f78e386561a4"
  },
  {
    "url": "assets/js/8.cf1f4394.js",
    "revision": "c77ede9fe4ff749d7f9d14f1de215c96"
  },
  {
    "url": "assets/js/9.46715dd9.js",
    "revision": "3357fa78a314b6e2a40de9d00e729e7a"
  },
  {
    "url": "assets/js/app.4fdd4a88.js",
    "revision": "687bec9155d252461bcc7f084828cd98"
  },
  {
    "url": "assets/js/vendors~docsearch.58442dbf.js",
    "revision": "f41f034db4ea59cb505aa31220333627"
  },
  {
    "url": "conclusion/index.html",
    "revision": "3f7c4d67f940d13a114292d6fb90a442"
  },
  {
    "url": "design/index.html",
    "revision": "1c3a6a6845aee2c98ce570c4494ad5ba"
  },
  {
    "url": "index.html",
    "revision": "352987711876c1b9daab95f4233dde67"
  },
  {
    "url": "intro/index.html",
    "revision": "9b2dc81a5384726156a8b7ca666c909d"
  },
  {
    "url": "license.html",
    "revision": "70a2edbdcd1a16b29dc6ec11e14ab937"
  },
  {
    "url": "myAvatar.png",
    "revision": "b76db1e62eb8e7fca02a487eb3eac10c"
  },
  {
    "url": "requirements/index.html",
    "revision": "886befc9cfccfaa056d5e543112d4616"
  },
  {
    "url": "requirements/stakeholders-needs.html",
    "revision": "9d68169c98b412324a5f55ff67d9c356"
  },
  {
    "url": "requirements/state-of-the-art.html",
    "revision": "b2ae6dd76c60b85dd404cc55e2681f66"
  },
  {
    "url": "software/index.html",
    "revision": "dfef585b8dc4ef55c463a8954a449d99"
  },
  {
    "url": "test/index.html",
    "revision": "aca9a182a6e48ee47b2090486014fcd1"
  },
  {
    "url": "use cases/index.html",
    "revision": "38cb1164cc854a195f04da893ef12a13"
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
