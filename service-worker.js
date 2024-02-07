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
    "revision": "d8609eb9c87e7326a57e6aa460f7c838"
  },
  {
    "url": "assets/css/0.styles.5efef82c.css",
    "revision": "f21ebcb8b9dfd3b7549b097bc5a9f0be"
  },
  {
    "url": "assets/img/01-project.208f3b69.png",
    "revision": "208f3b6973b8b9680c4cf29d4de9be59"
  },
  {
    "url": "assets/img/02-folder.579c6a0e.png",
    "revision": "579c6a0e175fed85dac7fed2de85705d"
  },
  {
    "url": "assets/img/03-task.99bbf979.png",
    "revision": "99bbf9795e5a4fc7a1e22377b3295068"
  },
  {
    "url": "assets/img/04-duedate.63c31c82.png",
    "revision": "63c31c82493ebf6204dc34023098e28f"
  },
  {
    "url": "assets/img/05-milestone.7a977990.png",
    "revision": "7a977990212e9781635d3cdbf7e3be1c"
  },
  {
    "url": "assets/img/06-list.b9851ab1.png",
    "revision": "b9851ab1250c8db299b0a2ba6649feea"
  },
  {
    "url": "assets/img/07-timeline.70c2a079.png",
    "revision": "70c2a0798537725a0188e277e0589c1d"
  },
  {
    "url": "assets/img/high-level-architecture.6ba3394b.png",
    "revision": "6ba3394bba21456a4e8649c3e5d6a34d"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.2a84ea5f.js",
    "revision": "ea60706a50ccf1f35ca3bc4e8596dbab"
  },
  {
    "url": "assets/js/11.b4c45dea.js",
    "revision": "ba1b791edb1416a262602d144e241140"
  },
  {
    "url": "assets/js/12.755b89ee.js",
    "revision": "ebb192e2fe8a8a1b379875a757783aee"
  },
  {
    "url": "assets/js/13.5d1b7507.js",
    "revision": "af9f6772328ead28da74f9cc2a4b114e"
  },
  {
    "url": "assets/js/14.512e6de8.js",
    "revision": "4afef1311f70719f26bf8cf1062fdcbb"
  },
  {
    "url": "assets/js/15.9b188fa3.js",
    "revision": "dbfebb20367cba945873d22017cde819"
  },
  {
    "url": "assets/js/16.5f867fd7.js",
    "revision": "c9443d487ce6c2ac6896c788237edfc4"
  },
  {
    "url": "assets/js/17.568b072b.js",
    "revision": "d42fa1759d7f2c4da12122138cb7bdad"
  },
  {
    "url": "assets/js/18.51f9a76e.js",
    "revision": "bebcf7f6d8790d179a8fbdd4443b7009"
  },
  {
    "url": "assets/js/19.3619a468.js",
    "revision": "7dfa237ca13ac37b100457ac5d4c29c1"
  },
  {
    "url": "assets/js/2.d6021d62.js",
    "revision": "d563e9cb1a1c82bd922977b970957ecf"
  },
  {
    "url": "assets/js/20.e6c6294e.js",
    "revision": "af199952083b11697abb9301ea5f6e17"
  },
  {
    "url": "assets/js/21.a6d6e408.js",
    "revision": "1822491617ffb949b838f0da2fff8612"
  },
  {
    "url": "assets/js/22.ccc7cba3.js",
    "revision": "61fef5a4da198ad6a6e60d72dc0906e1"
  },
  {
    "url": "assets/js/23.0fe5a42c.js",
    "revision": "9d400f071fb561c4cffb76a70f0160ea"
  },
  {
    "url": "assets/js/24.c5973020.js",
    "revision": "1d3be7cf4e46d2bb377bb3e3b990d643"
  },
  {
    "url": "assets/js/25.1af2b6ac.js",
    "revision": "19a8abfbb8b914184e8cb96f4f3774e6"
  },
  {
    "url": "assets/js/26.8a16368b.js",
    "revision": "3f055996ae71d6c40995e973556de49d"
  },
  {
    "url": "assets/js/27.561d20b1.js",
    "revision": "c27dd5e21fc8073fe7de1f897ff1df53"
  },
  {
    "url": "assets/js/28.4e8e9501.js",
    "revision": "f9c440722e9fe60a15af4601805aab2e"
  },
  {
    "url": "assets/js/29.aa69e3df.js",
    "revision": "11916484b0bcaff18185f0d7cffb8204"
  },
  {
    "url": "assets/js/3.2928bf87.js",
    "revision": "a228fc86500ebea48c880fbd15c09181"
  },
  {
    "url": "assets/js/30.d5057b1c.js",
    "revision": "b02f2d318e73467dddd3891bb550ef9c"
  },
  {
    "url": "assets/js/31.14efc1c9.js",
    "revision": "b875457c91df50bf97cb7e78425417f3"
  },
  {
    "url": "assets/js/32.edf4f065.js",
    "revision": "8a922b83fff2f6a5088e53871c6491dd"
  },
  {
    "url": "assets/js/33.426ad6f4.js",
    "revision": "f7e5be686faa2fa9882581bb2e1930f5"
  },
  {
    "url": "assets/js/34.6b7c794a.js",
    "revision": "ffcf18d7cb4ca1a36f1fc394d16aaa03"
  },
  {
    "url": "assets/js/35.cbd7e516.js",
    "revision": "b6bc110373e7befc8260e33d6c544c54"
  },
  {
    "url": "assets/js/36.ad2f50a3.js",
    "revision": "ed3f55bbe1a92214d4296ae0ae60b697"
  },
  {
    "url": "assets/js/37.7dc627ed.js",
    "revision": "917490bc3d5184c1085da64de5036977"
  },
  {
    "url": "assets/js/38.c6b8fca8.js",
    "revision": "aed0bd34cb8f586580e338093b06462a"
  },
  {
    "url": "assets/js/39.853afe11.js",
    "revision": "536325bd6218d5341c86c368515a84cf"
  },
  {
    "url": "assets/js/4.62ce3bb3.js",
    "revision": "571a5d7224f2b277da6df31f983d1d0a"
  },
  {
    "url": "assets/js/40.de3d1c03.js",
    "revision": "033eebcb521460130dee43d46e199210"
  },
  {
    "url": "assets/js/41.38c599cf.js",
    "revision": "7e618e59c20010fadc278b80e875804b"
  },
  {
    "url": "assets/js/42.6e7f20d3.js",
    "revision": "92e08187c3c348f5e3f84eaa6902be84"
  },
  {
    "url": "assets/js/43.f4a524e2.js",
    "revision": "e8a0b1dce900338914620a224fd5c244"
  },
  {
    "url": "assets/js/44.f6045564.js",
    "revision": "fc59e39098502749f04c6541c75b7ef5"
  },
  {
    "url": "assets/js/45.71c888bc.js",
    "revision": "3a5ab8e586578ac6001f4f2ff9fc226c"
  },
  {
    "url": "assets/js/46.b51e3204.js",
    "revision": "65555a8812d6d152a914b78381812642"
  },
  {
    "url": "assets/js/47.5bbb72a0.js",
    "revision": "ffebda03aa1495af6f1d8fbb8aa29f32"
  },
  {
    "url": "assets/js/48.c916144b.js",
    "revision": "14da36e66d17be78ab9e62c4f1b342cc"
  },
  {
    "url": "assets/js/49.09ac12c1.js",
    "revision": "b66ac7ae29b324d0ea54ed45e028cf39"
  },
  {
    "url": "assets/js/5.8db11327.js",
    "revision": "52e7d6804dda8f5ee743ba8be4c2d250"
  },
  {
    "url": "assets/js/50.6798b8c1.js",
    "revision": "bc0b182fcaa3104f97b98e62a2b0fbc4"
  },
  {
    "url": "assets/js/51.1874ce59.js",
    "revision": "6c4441d38d6d6f5b9ca48246d54c6879"
  },
  {
    "url": "assets/js/52.5f161167.js",
    "revision": "193a92974e6b1c92846b71d8b221ceb8"
  },
  {
    "url": "assets/js/53.42322872.js",
    "revision": "9e4cb598f3f910ebb93356f7b937042e"
  },
  {
    "url": "assets/js/54.cb2cdaf5.js",
    "revision": "1ec735c4980939104e4710bb637ec6dc"
  },
  {
    "url": "assets/js/55.243f0d4a.js",
    "revision": "3d3a9c6b39b032b768c6a5a6e5267ee7"
  },
  {
    "url": "assets/js/56.08764fad.js",
    "revision": "d8be578bb9751234a37a5f60d107e31b"
  },
  {
    "url": "assets/js/57.34db2155.js",
    "revision": "ce19e1d30044fafa756a81030e519bb9"
  },
  {
    "url": "assets/js/58.f52219a6.js",
    "revision": "4d048949d3cdc6bcdcb353e1921dbdda"
  },
  {
    "url": "assets/js/59.09d7ea2d.js",
    "revision": "99dfab85a71c88e8e198ee18cad1b32a"
  },
  {
    "url": "assets/js/6.91290b5a.js",
    "revision": "dd94bb72290e61bd81b55a22e543c833"
  },
  {
    "url": "assets/js/60.1934cc27.js",
    "revision": "017a353cc9e49804558682330d5e1843"
  },
  {
    "url": "assets/js/61.b9799428.js",
    "revision": "e2da0c732f3e7026292dfe52765b2cba"
  },
  {
    "url": "assets/js/62.5369b9a0.js",
    "revision": "24b50aa885f5087657a09ea98c5b3a15"
  },
  {
    "url": "assets/js/7.c49ad4b9.js",
    "revision": "db2ca19bf20b678eca2359b2e76ae9aa"
  },
  {
    "url": "assets/js/8.9a23a744.js",
    "revision": "a282603a389f8b787d8f1d100ba6ead5"
  },
  {
    "url": "assets/js/9.dfea26d7.js",
    "revision": "da4a97e2f9bf6daadc7b20112047c664"
  },
  {
    "url": "assets/js/app.75b88bd0.js",
    "revision": "91011b123de8275b59d5a6b7362fb3a3"
  },
  {
    "url": "assignments/api-design.html",
    "revision": "541cb0ffcb0d5ae0a0af4216d206c7c1"
  },
  {
    "url": "assignments/architecture.html",
    "revision": "353c7a637f3f0ec7d26a0407f29de887"
  },
  {
    "url": "assignments/ari-poster.html",
    "revision": "d34c647ad8692b676ff0f8d55f496079"
  },
  {
    "url": "assignments/bug-fix.html",
    "revision": "d6c3743069a3cb6c61fb437d58f6afec"
  },
  {
    "url": "assignments/data-structures.html",
    "revision": "a5def638d40ddfa852442e6ca2d4470b"
  },
  {
    "url": "assignments/deployment.html",
    "revision": "13a93a53089ac5ae17b2fa650785d808"
  },
  {
    "url": "assignments/dev-demos.html",
    "revision": "f795079714d0de56a68e2c6d84569916"
  },
  {
    "url": "assignments/features.html",
    "revision": "ce1433976acf6d7d6ca2193faa00ebfe"
  },
  {
    "url": "assignments/final-code.html",
    "revision": "a9bfa24d204ac83d4672ba7180b6fa4f"
  },
  {
    "url": "assignments/full-visual-design.html",
    "revision": "1ded6480deb8d79af613709395b424af"
  },
  {
    "url": "assignments/gantt.html",
    "revision": "29ee3fb3e8823b22c43e535de3061463"
  },
  {
    "url": "assignments/identity.html",
    "revision": "9eec632b2ad07d06e6a9a014f69693a7"
  },
  {
    "url": "assignments/index.html",
    "revision": "d57d705b6408f918814841e44afa2706"
  },
  {
    "url": "assignments/information-architecture.html",
    "revision": "9dfb58edd0d3af7e8becd353d9d42b5e"
  },
  {
    "url": "assignments/interactive-wireframe.html",
    "revision": "eaf0fff594af912e87d9a8c61edcf354"
  },
  {
    "url": "assignments/mid-present.html",
    "revision": "da735c581a376808e372001a0fe7ad9e"
  },
  {
    "url": "assignments/mid-term-client-presentation.html",
    "revision": "9c5ee9c3baa8f9e60555ede4638f74ef"
  },
  {
    "url": "assignments/mockup.html",
    "revision": "d1a136cfd0bd406e595950e9d0d509f3"
  },
  {
    "url": "assignments/order.html",
    "revision": "ff179528e84b7ed32a01e7bcf82ec0b6"
  },
  {
    "url": "assignments/paper-prototype.html",
    "revision": "872f61bd19e59e313f84a710d77b3a58"
  },
  {
    "url": "assignments/personas.html",
    "revision": "7b8c8b5720c7ce60277cd5fe78ec2dc6"
  },
  {
    "url": "assignments/pitches.html",
    "revision": "8ace1fd56c7002eb1722a10b3c3eb815"
  },
  {
    "url": "assignments/poc.html",
    "revision": "02cdc99ef9487c445452c8dcf69be0d0"
  },
  {
    "url": "assignments/product-research.html",
    "revision": "686c6f38ab144dd7e8780aad65aa8873"
  },
  {
    "url": "assignments/reaction.html",
    "revision": "0dc7f0eab93dfc062aec40a85a8dcd13"
  },
  {
    "url": "assignments/responses.html",
    "revision": "48bc6a4b48cf3c52a05d9b12b7e9d7ea"
  },
  {
    "url": "assignments/team-contract.html",
    "revision": "f1bac126c20ce8d636ecefb1022401ea"
  },
  {
    "url": "assignments/tech-research.html",
    "revision": "c58281a8a592d7b6f5ffab171593681b"
  },
  {
    "url": "assignments/test-documents.html",
    "revision": "451474850a09a6122c53c85bf3c65138"
  },
  {
    "url": "assignments/test-results.html",
    "revision": "bad44ec0c8ec95d242cabfec206bc9cd"
  },
  {
    "url": "assignments/testing.html",
    "revision": "1b49ae7481063ee4d1d6fae4152fb235"
  },
  {
    "url": "assignments/ui-wireframe.html",
    "revision": "36a3031fde1eead459e32520541bf7d8"
  },
  {
    "url": "assignments/usage-scenarios.html",
    "revision": "8a9a31b474735167235da4d240966611"
  },
  {
    "url": "assignments/user-research.html",
    "revision": "2359f1aaa349dd8c0242e1d7e2dc3e6d"
  },
  {
    "url": "assignments/visual-design-concept.html",
    "revision": "a5ce15c4d8fac3d366a972edef46aa7b"
  },
  {
    "url": "assignments/visual-design.html",
    "revision": "eda16027f278192f724d52e2ce635726"
  },
  {
    "url": "assignments/wireframes.html",
    "revision": "b979d6f1bd16bf982f7b8f1dcf79e7b2"
  },
  {
    "url": "HeadshotPlaceholder.png",
    "revision": "dd905cc985945c4b067ad8e177bbefe0"
  },
  {
    "url": "hero.png",
    "revision": "a77ff0e74d076093d400c27e493f4974"
  },
  {
    "url": "index.html",
    "revision": "de94ca5876f227a4df3c83dbdc7cb409"
  },
  {
    "url": "modules/design-prototyping/index.html",
    "revision": "3e8c0dd69c83b0ceb7b7dad2df3aaf40"
  },
  {
    "url": "modules/design-prototyping/workbench.html",
    "revision": "ed513fbfb22d57fec2cb6d1d53be50f7"
  },
  {
    "url": "modules/development-testing/index.html",
    "revision": "26e0050e22191b3d43a2ecfe16768b75"
  },
  {
    "url": "modules/finalizing-hand-off/index.html",
    "revision": "bc708d3ce198c213521be341e6f6e74f"
  },
  {
    "url": "modules/research-planning/agile-2.html",
    "revision": "7af9209e5c02f834c0e1df2abcf9c5a1"
  },
  {
    "url": "modules/research-planning/agile-3.html",
    "revision": "a992acde293f4496c88e6a324a5e4f77"
  },
  {
    "url": "modules/research-planning/agile.html",
    "revision": "108d317153f66805a830c51966dff3e0"
  },
  {
    "url": "modules/research-planning/index.html",
    "revision": "adc46486feab7fe04929420135f59960"
  },
  {
    "url": "modules/research-planning/questions.html",
    "revision": "6f1408e55eccf9c2a3303781c37d0a16"
  },
  {
    "url": "modules/research-planning/service-design.html",
    "revision": "abecc2dfe98fc1546f2e4fb90c8febc6"
  },
  {
    "url": "modules/research-planning/wrike.html",
    "revision": "d762d5d13deb8788ff446bb5aa6fa085"
  },
  {
    "url": "modules/week1/index.html",
    "revision": "f28a0b66fbe5ad00e3ff443c71413057"
  },
  {
    "url": "modules/week2/index.html",
    "revision": "e12bcc5c1442f61d47c164d9be51f784"
  },
  {
    "url": "modules/week3/index.html",
    "revision": "5db7a5f4703b2e939e8984d80d100350"
  },
  {
    "url": "modules/week4/index.html",
    "revision": "745c433a6cc64f1a50ed99472d364244"
  },
  {
    "url": "overview/contacts.html",
    "revision": "63e66664e9c9c698f61c51d9820771e0"
  },
  {
    "url": "overview/course-section-information.html",
    "revision": "fb6b7eee90c5819a21eab7fc9599b5fa"
  },
  {
    "url": "overview/index.html",
    "revision": "60e723498a526e87f5df5ceff591dca7"
  },
  {
    "url": "steve-griffith.jpeg",
    "revision": "3fb81c0d91a190afe01fd27de65080f2"
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
