window.addEventListener('load', ()=> {
// here is the list of values and pieces for loading them through the reduce function
const wrapper = document.querySelector('.wrapper')
const values = [2,3,3,4,4,5,5,6,6,8,8,9,9,10,10,11,11,12]
const expandedValues = [2,5,4,6,3,9,8,11,11,10,6,3,8,4,8,10,11,12,10,5,4,9,5,9,12,3,2,6]
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



const mixup = arr => {
  arr.sort(() => Math.random() - 0.5);
  return arr
}

const makeBoard = (arr, val) => {
  return arr.reduce((all, item) => {
    let name = Object.entries(item)[0][0];
    let count = Object.entries(item)[0][1]
    while(count > 0) {
      count--;
      all.push([name, val[all.length]])
    }
    return all
  }, [])
}

const tiles = makeBoard(pieces, values)
const expandedTiles = makeBoard(expandedPieces, expandedValues)

document.querySelector('.expanded').addEventListener('click', () => {
  const e_one = document.querySelector('.e_one')
  const e_two = document.querySelector('.e_two')
  const e_three = document.querySelector('.e_three')
  const e_four = document.querySelector('.e_four')
  const e_five = document.querySelector('.e_five')
  const e_six = document.querySelector('.e_six')
  const e_seven = document.querySelector('.e_seven')
  const e_eight = document.querySelector('.e_eight')
  const e_nine = document.querySelector('.e_nine')
  document.querySelector('.wrapper').classList.add('hidden')
  document.querySelector('.e_container').classList.remove('hidden');

  mixup(expandedTiles).map((item)=> {
    let imageContainer = document.createElement('div')
    let img =  document.createElement('img')
    img.src = `/images/${item[0]}.svg`
    imageContainer.setAttribute("value", item[1])
    imageContainer.classList.add(item[0], 'item')
    imageContainer.appendChild(img)
    if(e_one.children.length < 3) e_one.appendChild(imageContainer)
    if(e_two.children.length < 4) e_two.appendChild(imageContainer)
    if(e_three.children.length < 5) e_three.appendChild(imageContainer)
    if(e_four.children.length < 6) e_four.appendChild(imageContainer)
    if(e_five.children.length < 5) e_five.appendChild(imageContainer)
    if(e_six.children.length < 4) e_six.appendChild(imageContainer)
    if(e_seven.children.length < 3) e_seven.appendChild(imageContainer)
    return item
  })

})


tiles.push(['desert', 7])

expandedTiles.push(['desert', 7], ['desert', 7])
// attatching all the data to markup


const container = document.createElement('div')
const one = document.querySelector('.one')
const two = document.querySelector('.two')
const three = document.querySelector('.three')
const four = document.querySelector('.four')
const five = document.querySelector('.five')


  mixup(tiles).map((item)=> {
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


wrapper.appendChild(container)
})



