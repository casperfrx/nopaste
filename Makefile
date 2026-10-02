lint:
	npx prettier@2.0.5 --write --single-quote --tab-width=4 --print-width=140 index.html script.js style.css sw.js README.md tools/build.mjs tools/src/*.js
dev:
	npx serve
# Re-vendor all third-party dependencies (see "Dependencies" in README.md). Requires Node.js >= 18.
deps:
	cd tools && npm ci && npm run build
