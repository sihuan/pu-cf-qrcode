import { encrypt } from './crypto'
import { renderHTML } from './render/htmlRender'

export function codePage(uid) {
    const codestr = encrypt(makeLink(uid))
    return renderHTML(codestr)
}

function makeLink(uid){
    const dateTime = Date.now();
    const timestamp = Math.floor(dateTime / 1000);
    return `xyhui://user/${ uid }/${ timestamp }`
}