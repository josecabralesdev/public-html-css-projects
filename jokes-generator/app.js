const $ = el => document.querySelector(el)
const $$ = el => document.querySelectorAll(el)

const JOKES = ["Why don't scientists trust atoms? Because they make up everything!",
  "What do you call a lazy kangaroo? A pouch potato!",
  "What do you call a fish with no eyes? Fish!",
  "I used to be addicted to soap, but I'm clean now",
  "Why don't they play poker in the jungle? Too many cheetahs!",
  "What do you call a bear with no theet? A grummy bear!"
]

const laugh = $('p')
const nextLaugh = $('button')
let firstJoke = 0

const shuffleArray = (arr) => {
  return arr.sort(() => Math.random() - 0.5)
}

let JOKES_SHUFFLED = shuffleArray(JOKES)
laugh.innerText = JOKES_SHUFFLED[firstJoke]

const nextLaughFunction = nextLaugh.addEventListener('click', () => {
  laugh.innerText = JOKES_SHUFFLED[++firstJoke]

  if (firstJoke === JOKES_SHUFFLED.length - 1) {
    firstJoke = 0
    JOKES_SHUFFLED = shuffleArray(JOKES)
    nextLaughFunction
  }
})