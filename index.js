function newImage(url, left, bottom){
    let newObject = document.createElement('img')
    newObject.src = url
    newObject.style.position = 'fixed'
    newObject.style.left = left + 'px'
    newObject.style.bottom = bottom + 'px'
    document.body.append(newObject)
    return newObject
}

newImage('assets/green-character.gif', 10, 100)
newImage('assets/pine-tree.png', 450, 200)
newImage('assets/tree.png', 200, 300)
newImage('assets/pillar.png', 350, 100)
newImage('assets.crate.png', 150, 200)
newImage('assets/well.png', 500, 425)

function newItem(url, left, bottom){
    let newObject = newImage(url, left, bottom)

    newObject.addEventListener('dblclick', () => {
        newObject.remove()
    })
}

newItem('assets/sword.png', 500, 405)
newItem('assets/shield.png', 165, 185)
newItem('assets/staff.png', 600, 100)