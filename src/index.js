import { codePage } from './render'

addEventListener('fetch', event => {
  event.respondWith(handleRequest(event.request))
})

async function handleRequest(request) {
  const { pathname, searchParams } = new URL(request.url)
  return new Response(codePage(pathname.substring(1)), {
  headers: {
    'Access-Control-Allow-Origin': '*',
    'content-type': 'text/html'
  }
})
}
