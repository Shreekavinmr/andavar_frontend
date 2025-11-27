const IMAGE_CACHE = "image-cache-v1";

self.addEventListener("fetch", (event) => {
  const req = event.request;

  // Cache only images
  if (req.destination === "image") {
    event.respondWith(
      caches.open(IMAGE_CACHE).then(async (cache) => {
        const cached = await cache.match(req);
        if (cached) return cached;

        try {
          const res = await fetch(req);
          if (res.ok) cache.put(req, res.clone());
          return res;
        } catch {
          return cached || new Response(null, { status: 500 });
        }
      })
    );
  }
});
