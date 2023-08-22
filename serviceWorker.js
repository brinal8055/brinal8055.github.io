const staticBrinalData = "site-cache-v1";
const assets = [
  //   "/",
  "/index.html",
  "/assets/css/styles.css",
  "/assets/css/swiper-bundle.min.css",
  "/assets/js/main.js",
  "/assets/js/swiper-bundle.min.js",
  "/assets/pdf/Animesh_Rawat_resume.pdf",
  "/assets/img/blob.svg",
  "/assets/img/hacker-profile.png",
  "/assets/img/hacker-profile-v2.png",
  "/assets/img/skills/bitbucket.svg",
  "/assets/img/skills/c.svg",
  "/assets/img/skills/confluence.svg",
  "/assets/img/skills/docker.svg",
  "/assets/img/skills/git.svg",
  "/assets/img/skills/github.svg",
  "/assets/img/skills/gradle.svg",
  "/assets/img/skills/html.svg",
  "/assets/img/skills/javascript.svg",
  "/assets/img/skills/jenkins.svg",
  "/assets/img/skills/jira.svg",
  "/assets/img/skills/jupyter.svg",
  "/assets/img/skills/latex.svg",
  "/assets/img/skills/mysql.svg",
  "/assets/img/skills/numpy.svg",
  "/assets/img/skills/pandas.svg",
  "/assets/img/skills/postgresql.svg",
  "/assets/img/skills/pytest.svg",
  "/assets/img/skills/python.svg",
  "/assets/img/skills/redis.svg",
  "/assets/img/skills/tensorflow.svg",
  "/assets/img/skills/vscode.svg",
  "/assets/img/portfolio/unichat.PNG",
  "/assets/img/portfolio/track-service-request.PNG",
  "/assets/img/portfolio/stopwatch.png",
  "/assets/img/portfolio/file-reader.png",
];

self.addEventListener("install", (installEvent) => {
  installEvent.waitUntil(
    caches.open(staticBrinalData).then((cache) => {
      cache.addAll(assets);
    })
  );
});

self.addEventListener("fetch", (fetchEvent) => {
  fetchEvent.respondWith(
    caches.match(fetchEvent.request).then((res) => {
      return res || fetch(fetchEvent.request);
    })
  );
});
