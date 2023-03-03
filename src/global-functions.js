import { navbar, navbarDropdownMenu } from "./navbar"

export function createHtml(html) {
    const template = document.createElement('template')
    template.innerHTML = html.trim()
    return template.content.firstElementChild
}

export function render(page) {
    const body = document.querySelector('body')
    while (body.hasChildNodes() === true) {
        body.removeChild(body.lastChild)
    }
    body.appendChild(navbar)
    body.appendChild(navbarDropdownMenu)
    body.appendChild(page)
}
