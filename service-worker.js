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
    "revision": "5ead96f53479d239b622bcf6f796bcb1"
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
    "url": "assets/js/2.320f3d99.js",
    "revision": "0869ab7066b855bb0e00506dc71224c5"
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
    "url": "assets/js/24.4df46514.js",
    "revision": "8e747a3e7c2f3ca6f9712766346583f2"
  },
  {
    "url": "assets/js/25.67eafdda.js",
    "revision": "ee0f4c3f1dc7fe313e5c865e0deed190"
  },
  {
    "url": "assets/js/26.060c0c8c.js",
    "revision": "8a5b373103079923f3f7af54b5ef5ad0"
  },
  {
    "url": "assets/js/27.d7209cc1.js",
    "revision": "fd2f62a0065b2ed1ed56befcbb71a505"
  },
  {
    "url": "assets/js/28.ee758a5b.js",
    "revision": "7958a69ffd4a7e287c3263a491835b5c"
  },
  {
    "url": "assets/js/29.174b3aa4.js",
    "revision": "150c45c99def2040535a80ce50f68b43"
  },
  {
    "url": "assets/js/3.2928bf87.js",
    "revision": "a228fc86500ebea48c880fbd15c09181"
  },
  {
    "url": "assets/js/30.749c16b2.js",
    "revision": "a67083995e856a274c4fb8ab820528a3"
  },
  {
    "url": "assets/js/31.48451440.js",
    "revision": "024c681c6369760d94afec9e2101cd45"
  },
  {
    "url": "assets/js/32.2fe17d86.js",
    "revision": "d1aa14c335389989a61568133ffa4c55"
  },
  {
    "url": "assets/js/33.0facd4c2.js",
    "revision": "5dbe7a62de629059071facd33976513c"
  },
  {
    "url": "assets/js/34.9c346e24.js",
    "revision": "a7dbf1cbdbb86508a12a7cdfd2bef52b"
  },
  {
    "url": "assets/js/35.636e2d4c.js",
    "revision": "05cb372b35bc939def294459b25d2b10"
  },
  {
    "url": "assets/js/36.6539056d.js",
    "revision": "8fa5455d2e94749fff9876fb36a0c78d"
  },
  {
    "url": "assets/js/37.343973ac.js",
    "revision": "064c3305dfea23e75085a27011fb9fac"
  },
  {
    "url": "assets/js/38.ea1f246d.js",
    "revision": "8d3ee1a339b3b4666eec605cff12a25b"
  },
  {
    "url": "assets/js/39.5540cfd0.js",
    "revision": "28f531951c8d02e8f269643e9bc8298f"
  },
  {
    "url": "assets/js/4.62ce3bb3.js",
    "revision": "571a5d7224f2b277da6df31f983d1d0a"
  },
  {
    "url": "assets/js/40.a92cb962.js",
    "revision": "7f2ffa3c185325f568d1ac6d172884dc"
  },
  {
    "url": "assets/js/41.998a8876.js",
    "revision": "938a365858bba9c330f0918d43fabe9f"
  },
  {
    "url": "assets/js/42.9d818e86.js",
    "revision": "b0ed7f6784391b7a7bf33a3ccab6f84c"
  },
  {
    "url": "assets/js/43.b81c60b0.js",
    "revision": "9159c959a40193f136aae3d2be4150d8"
  },
  {
    "url": "assets/js/44.df818e2e.js",
    "revision": "dce7aacef8b362ed9257ff644dc12504"
  },
  {
    "url": "assets/js/45.c45e1232.js",
    "revision": "248aed39eea5a78ed58ce3e00fcd1d60"
  },
  {
    "url": "assets/js/46.46a2db2d.js",
    "revision": "809a6d6ddbe8850a2d058ac7ec085917"
  },
  {
    "url": "assets/js/47.ad188eeb.js",
    "revision": "f151bb696da0eae6587f98411b0bdfc6"
  },
  {
    "url": "assets/js/48.1907ad59.js",
    "revision": "cecae5f5f770e6b416ca13485395bbe9"
  },
  {
    "url": "assets/js/49.25045a76.js",
    "revision": "b65972ccf526180099103348a7b44511"
  },
  {
    "url": "assets/js/5.8db11327.js",
    "revision": "52e7d6804dda8f5ee743ba8be4c2d250"
  },
  {
    "url": "assets/js/50.4521e38e.js",
    "revision": "4945c787baa6faa2df7c54c56bd918c3"
  },
  {
    "url": "assets/js/51.38f4dae1.js",
    "revision": "8deff4f3d7fc4d3bbc8d32c3c23050a1"
  },
  {
    "url": "assets/js/52.4f2bb3cc.js",
    "revision": "6c19b43f9c622190ec4ba4aa95e091ee"
  },
  {
    "url": "assets/js/53.4765f0f3.js",
    "revision": "00b4628788e5496da070e666967149fe"
  },
  {
    "url": "assets/js/54.bbf81cd7.js",
    "revision": "848e6e99193b3b60195677c782aa8d4a"
  },
  {
    "url": "assets/js/55.275d1f08.js",
    "revision": "3d3a9c6b39b032b768c6a5a6e5267ee7"
  },
  {
    "url": "assets/js/56.e22c5608.js",
    "revision": "d8be578bb9751234a37a5f60d107e31b"
  },
  {
    "url": "assets/js/57.80167a51.js",
    "revision": "60d92cfa4da27f870a29ce24d85d8771"
  },
  {
    "url": "assets/js/58.bf88ee21.js",
    "revision": "57857050f2772c0b645d057bc61cf86e"
  },
  {
    "url": "assets/js/59.270bbfe8.js",
    "revision": "59a5d530af524bcd8b5aa1b0e2baa7d3"
  },
  {
    "url": "assets/js/6.91290b5a.js",
    "revision": "dd94bb72290e61bd81b55a22e543c833"
  },
  {
    "url": "assets/js/60.dbbd6873.js",
    "revision": "3558dcda4599dc089d842f2475b076fa"
  },
  {
    "url": "assets/js/61.c939dc2e.js",
    "revision": "404519b85de5f0f33367af9e7ee3b0e5"
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
    "url": "assets/js/9.0ff82e36.js",
    "revision": "fd7d13593d4213dbc79a7aaa2fc9ccca"
  },
  {
    "url": "assets/js/app.40cdd99b.js",
    "revision": "444b6d679fb6648ae82f9d2a7ba939b4"
  },
  {
    "url": "assignments/api-design.html",
    "revision": "27580992d3c3c92d6eda074015240f5f"
  },
  {
    "url": "assignments/architecture.html",
    "revision": "5e4ae764a8af78823811e3c3a4ec0971"
  },
  {
    "url": "assignments/ari-poster.html",
    "revision": "16b0795fd923ba91a522bb244c5d579b"
  },
  {
    "url": "assignments/bug-fix.html",
    "revision": "4cd137f2d3707a88702ac161ddd59235"
  },
  {
    "url": "assignments/data-structures.html",
    "revision": "08e03bd7767dce0a3869c41c1c1bcad2"
  },
  {
    "url": "assignments/deployment.html",
    "revision": "0503bb06fa8c0c64bf131bc098e7d51f"
  },
  {
    "url": "assignments/dev-demos.html",
    "revision": "6aa269c1495b63f2f896cdb0125b534e"
  },
  {
    "url": "assignments/features.html",
    "revision": "c6d3672ec7f1388d3e8c307d08093e1d"
  },
  {
    "url": "assignments/final-code.html",
    "revision": "368c39093a8c9d6a843ba92849c9cf47"
  },
  {
    "url": "assignments/full-visual-design.html",
    "revision": "da35bd26ed603a05be4494bb9fb3a011"
  },
  {
    "url": "assignments/gantt.html",
    "revision": "a28f434f7bdb6892999c12907e06e308"
  },
  {
    "url": "assignments/identity.html",
    "revision": "534c41f759d4d4f870ce6a975c530251"
  },
  {
    "url": "assignments/index.html",
    "revision": "2b316ccc8d016d1a19cc4875cd25b80f"
  },
  {
    "url": "assignments/information-architecture.html",
    "revision": "735137fc97d3426aceff3b080bbfddef"
  },
  {
    "url": "assignments/interactive-wireframe.html",
    "revision": "b74986f1b9cbadf04cf3ffa923c2719c"
  },
  {
    "url": "assignments/mid-present.html",
    "revision": "f7d5c179947e701a84052f79f245691e"
  },
  {
    "url": "assignments/mockup.html",
    "revision": "22fc600587b0f24953d7702387cf1f68"
  },
  {
    "url": "assignments/order.html",
    "revision": "2accc4111d0107166b6ac0a207253e26"
  },
  {
    "url": "assignments/paper-prototype.html",
    "revision": "a405de2bb116d4af5338166dd807a3ff"
  },
  {
    "url": "assignments/personas.html",
    "revision": "d4f621a690ffb7c7c00a245e9e744fe3"
  },
  {
    "url": "assignments/pitches.html",
    "revision": "1cc08aff0a86b8d53892a65a8667ec6a"
  },
  {
    "url": "assignments/poc.html",
    "revision": "e3dd7cefd8e3e2292dd2f357f3435823"
  },
  {
    "url": "assignments/product-research.html",
    "revision": "e70bfefef33be62b21121c42f99097c9"
  },
  {
    "url": "assignments/reaction.html",
    "revision": "b51b800bce0cfe7ada849307c364aebd"
  },
  {
    "url": "assignments/responses.html",
    "revision": "f1008560816c5929bc95b309199155af"
  },
  {
    "url": "assignments/team-contract.html",
    "revision": "0bfa0b4a4467308851d02bfb6549d05a"
  },
  {
    "url": "assignments/tech-research.html",
    "revision": "1b6b4eaa12b607807729462ffed1a3da"
  },
  {
    "url": "assignments/test-documents.html",
    "revision": "a11f38371fb98a226f3274a40f09851d"
  },
  {
    "url": "assignments/test-results.html",
    "revision": "0641883bb5cee7507c0fcd3097fea29b"
  },
  {
    "url": "assignments/testing.html",
    "revision": "adf225a7189e681ef550dc2b2e98ce15"
  },
  {
    "url": "assignments/ui-wireframe.html",
    "revision": "bb47a2bc6345073f62171b6d656b9b48"
  },
  {
    "url": "assignments/usage-scenarios.html",
    "revision": "02b1e084242d4366b3a04701ae937355"
  },
  {
    "url": "assignments/user-research.html",
    "revision": "313a767e32cba648cb2d401048a59c81"
  },
  {
    "url": "assignments/visual-design-concept.html",
    "revision": "4df32e6f02fec1011ec61b965b12f5bd"
  },
  {
    "url": "assignments/visual-design.html",
    "revision": "55a77e21799dd2e3995c95ef070befa3"
  },
  {
    "url": "assignments/wireframes.html",
    "revision": "cad0f64aaf788133f224688f90324ca1"
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
    "revision": "6019be701fbf88c46c358d67d01b1edd"
  },
  {
    "url": "modules/design-prototyping/index.html",
    "revision": "d4dea2d31c87c9c96acd520ef04510be"
  },
  {
    "url": "modules/design-prototyping/workbench.html",
    "revision": "f29aeeaee1d9568b62636099a0935b74"
  },
  {
    "url": "modules/development-testing/index.html",
    "revision": "d6a87bebb7bc86b8e633cb37b34d8db4"
  },
  {
    "url": "modules/finalizing-hand-off/index.html",
    "revision": "a47b33bd0c4b86dcbb39fb488b2cf7c8"
  },
  {
    "url": "modules/research-planning/agile-2.html",
    "revision": "52e1fa328718441906bc0d8f15749b15"
  },
  {
    "url": "modules/research-planning/agile-3.html",
    "revision": "94dcbb69d40939e869aae95ee553bdd4"
  },
  {
    "url": "modules/research-planning/agile.html",
    "revision": "44d9600f9550b3279d2a250ec9b29af9"
  },
  {
    "url": "modules/research-planning/index.html",
    "revision": "f3ac1afa9518a4a32785c3619034ff5b"
  },
  {
    "url": "modules/research-planning/questions.html",
    "revision": "d54575b3a759a0e736fb4286b2183161"
  },
  {
    "url": "modules/research-planning/service-design.html",
    "revision": "1b99570959ae7cc7d335a2879420bf44"
  },
  {
    "url": "modules/research-planning/wrike.html",
    "revision": "62fb53ea6b7764555ff4520f2e40bf66"
  },
  {
    "url": "modules/week1/index.html",
    "revision": "919265c0868e120c8588daacee440d2c"
  },
  {
    "url": "modules/week2/index.html",
    "revision": "2a9698523dcaaa2a353710df874cc215"
  },
  {
    "url": "modules/week3/index.html",
    "revision": "3406deaa936a70847c94ef33271270dd"
  },
  {
    "url": "modules/week4/index.html",
    "revision": "41a3147f55f2a14ad295464441e2eeff"
  },
  {
    "url": "overview/contacts.html",
    "revision": "41f5a0ff786257b0b2c9f9c429c303c6"
  },
  {
    "url": "overview/course-section-information.html",
    "revision": "0000ad9d47c14a84a4a2f6e742a6ee10"
  },
  {
    "url": "overview/index.html",
    "revision": "086b00dd2a60e99111f2e5bcdea1fad4"
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
