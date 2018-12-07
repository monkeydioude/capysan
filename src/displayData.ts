let data: any = {
    mail: "moc.liamg@neiluj.sirud",
    phone: "49 76 20 07 7)33+("
}

function reverseString(str: string) {
    var splitString = str.split("");
    var reverseArray = splitString.reverse();
    var joinArray = reverseArray.join("");
    
    return joinArray;
}


export function DisplayData(id: string): void {
    let node: HTMLCanvasElement = <HTMLCanvasElement>document.getElementById(id)

    if (node == undefined || !node || data[id] == undefined) {
        return
    }

    let ctx = node.getContext('2d')
    ctx.font = "15px Determination Sans"
    ctx.fillText(reverseString(data[id]), 0, 10)
}