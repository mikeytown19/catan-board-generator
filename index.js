window.addEventListener('load', ()=> {
// here is the list of values and pieces for loading them through the reduce function
const values = [2,3,3,4,4,5,5,6,6,8,8,9,9,10,10,11,11,12]
const pieces = [
  {"wheat": 4},
  {"ore": 3},
  {"sheep": 4},
  {"brick":3},
  {"wood": 4},
]

const expandedPieces = [
  {"wheat": 6},
  {"ore": 5},
  {"sheep": 6},
  {"brick":5},
  {"wood": 6},
]

mixup = arr => {
  arr.sort(() => Math.random() - 0.5);
  return arr
}

const makeBoard = (arr) => {
  return arr.reduce((all, item) => {
    let name = Object.entries(item)[0][0];
    let count = Object.entries(item)[0][1]
    while(count > 0) {
      count--;
      all.push([name, values[all.length]])
    }
    return all
  }, [])
}

const tiles = makeBoard(pieces)

tiles.push(['desert', 7])
// attatching all the data to markup
const container = document.createElement('div')
const one = document.querySelector('.one')
const two = document.querySelector('.two')
const three = document.querySelector('.three')
const four = document.querySelector('.four')
const five = document.querySelector('.five')
const board = mixup(tiles).map((item, index)=> {
  let imageContainer = document.createElement('div')
  let img =  document.createElement('img')
  img.src = `/images/${item[0]}.svg`
  imageContainer.setAttribute("value", item[1])
  imageContainer.classList.add(item[0], 'item')
  imageContainer.appendChild(img)
  if(one.children.length < 3) one.appendChild(imageContainer)
  if(two.children.length < 4) two.appendChild(imageContainer)
  if(three.children.length < 5) three.appendChild(imageContainer)
  if(four.children.length < 4) four.appendChild(imageContainer)
  if(five.children.length < 3) five.appendChild(imageContainer)
  return item
})

document.querySelector('.wrapper').appendChild(container)
})



