import http from "node:http"
import fs from "node:fs"
import path from "node:path"
import { fileURLToPath } from "node:url"

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const PORT = 8501
const PUBLIC = path.join(__dirname, "public")
const SPA_FILE = path.join(PUBLIC, "index.html")

const MIME = {
  ".html": "text/html; charset=utf-8",
  ".css": "text/css",
  ".js": "application/javascript",
  ".png": "image/png",
  ".jpg": "image/jpeg",
  ".svg": "image/svg+xml",
  ".ico": "image/x-icon",
}

http.createServer((req, res) => {
  let filePath = path.join(PUBLIC, req.url === "/" ? "index.html" : req.url)
  const ext = path.extname(filePath)
  const contentType = MIME[ext] || "application/octet-stream"

  fs.readFile(filePath, (err, data) => {
    if (err) {
      // SPA fallback
      fs.readFile(SPA_FILE, (err2, data2) => {
        if (err2) {
          res.writeHead(404)
          res.end("404 Not Found")
          return
        }
        res.writeHead(200, { "Content-Type": "text/html; charset=utf-8" })
        res.end(data2)
      })
      return
    }
    res.writeHead(200, { "Content-Type": contentType })
    res.end(data)
  })
}).listen(PORT, () => {
  console.log(`🚀 作品集已启动 → http://localhost:${PORT}`)
})
