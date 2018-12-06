function mmark(parentNode: Element) {
    let marks = ["MAX", "80", "60", "40", "20"]
    
    for (let i = 0; i < marks.length; i++) {
        let el = document.createElement("span")
        el.textContent = marks[i]
        parentNode.insertBefore(el, parentNode.querySelector("span"))        
    }
}

export function Mcursors(selector: string) {
    let nodes = document.querySelectorAll(selector)
    for (let i = 0; i < nodes.length; i++) {
        mmark(nodes[i])
        let pos = nodes[i].getAttribute('data-m-gauge-pos')

        if (pos === undefined) {
            continue
        }

        nodes[i].style.width = pos + '%'

        if (pos == "100") {
            nodes[i].style.borderRadius = "15px"
        }
    }
}