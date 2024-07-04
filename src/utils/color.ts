export function randomColor(): string {
    let hex = ''

    let arrayElemsHex = [
        '0',
        '1',
        '2',
        '3',
        '4',
        '5',
        '6',
        '7',
        '8',
        '9',
        'A',
        'B',
        'C',
        'D',
        'E',
        'F'
    ]

    for (let i = 0; i < 6; i++) {
        let rand = Math.random() * arrayElemsHex.length
        hex += arrayElemsHex[Math.floor(rand)]
    }

    return `#${hex}`
}
