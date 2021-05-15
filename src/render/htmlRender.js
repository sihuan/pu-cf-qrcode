import { favicon } from './favicon'

export function renderHTML(codestr) {
    return `<!DOCTYPE html>
    <html lang="zh-cn">
      <head>
        <meta charset="utf-8" />
        <meta http-equiv="x-ua-compatible" content="ie=edge, chrome=1" />
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1">
        <title>Come and get PU QRcode</title>
        <link rel="shortcut icon" type="image/png" sizes="16x16" href="${favicon}" />
        <script type="text/javascript" src="https://cdn.jsdelivr.net/npm/qrcodejs@1.0.0/qrcode.min.js"></script>
      </head>
      <body>
        <center>
        <div id="qrcode" style="margin-top: 40px;"></div>
        </center>
        <footer id="footer"><p>Powered by <a href="https://www.cloudflare.com/products/cloudflare-workers/">Cloudflare Workers</a>.</p></footer>
        <script type="text/javascript">
        new QRCode(document.getElementById("qrcode"), "${ codestr }"); 
        </script>
      </body>
    </html>`
  }
  