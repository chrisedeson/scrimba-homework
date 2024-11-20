const inputValue = document.getElementById("text-input")
const searchButton = document.getElementById("search-btn")

searchButton.addEventListener("click", function () {
  if (inputValue.value.toLowerCase().includes(dictionary.word)) {
   hello()
  } else {
    window.alert("word isn't in the dictionary. Please try again")
  }
  
})

function hello () {
  let goldWord = document.getElementById("gold-word")
  goldWord.textContent = dictionary.word

  let phoneticValue = document.getElementById("phonetics")
  phoneticValue.textContent = '"' + dictionary.phonetic + '"'
  
  let speechPartValue = document.getElementById("part-of-speech")
  speechPartValue.textContent = dictionary.meanings[0].partOfSpeech

  let definitionValue = document.getElementById("definition")
  definitionValue.textContent = dictionary.meanings[0].definitions[0].definition
  
  let audioValue = document.getElementById("audio-tag")
  audioValue.src = dictionary.phonetics[0].audio

}




let dictionary = {
  "word": "hello",
  "phonetic": "həˈləʊ",
  "phonetics": [
    {
      "text": "həˈləʊ",
      "audio": "//ssl.gstatic.com/dictionary/static/sounds/20200429/hello--_gb_1.mp3"
    },
    {
      "text": "hɛˈləʊ"
    }
  ],
  "origin": "early 19th century: variant of earlier hollo ; related to holla.",
  "meanings": [
    {
      "partOfSpeech": "exclamation",
      "definitions": [
        {
          "definition": "used as a greeting or to begin a phone conversation.",
          "example": "hello there, Katie!",
          "synonyms": [],
          "antonyms": []
        }
      ]
    },
    {
      "partOfSpeech": "noun",
      "definitions": [
        {
          "definition": "an utterance of ‘hello’; a greeting.",
          "example": "she was getting polite nods and hellos from people",
          "synonyms": [],
          "antonyms": []
        }
      ]
    },
    {
      "partOfSpeech": "verb",
      "definitions": [
        {
          "definition": "say or shout ‘hello’.",
          "example": "I pressed the phone button and helloed",
          "synonyms": [],
          "antonyms": []
        }
      ]
    }
  ]
}



