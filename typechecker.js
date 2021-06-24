const sentenceTag = document.querySelector(`input[type="text"]`)

const typefaceTag = document.querySelector(`select[name="typeface"]`)

const typesizeTag = document.querySelector(`input[name="typesize"]`)
const typesizeOutput = document.querySelector("span.typesize-output")

const fontweightTag = document.querySelector(`input[name="fontweight"]`)
const fontweightOutput = document.querySelector("span.fontweight-output")

const lineheightTag = document.querySelector(`input[name="lineheight"]`)
const lineheightOutput = document.querySelector("span.lineheight-output")

const italicTag = document.querySelector(`input[name="italic"`)

const colorTags = document.querySelectorAll("div.colors div")

const outputTag = document.querySelector("textarea.output")
const originalText = outputTag.value

// when i type in my sentenceTag, update outputTag accordingly
sentenceTag.addEventListener("keyup", function() {
  if (this.value) {
    outputTag.value = this.value
  } else {
    outputTag.value = originalText
  }
})

// when i type in the output tag, update sentence tag
outputTag.addEventListener("keyup", function () {
  sentenceTag.value = this.value
})

// when I change my typesize slider, update text display
// change outputTag's font size
typesizeTag.addEventListener("input", function () {
  outputTag.style.fontSize = this.value + "px"
  typesizeOutput.innerHTML = this.value + " pixels"
})

fontweightTag.addEventListener("input", function () {
  outputTag.style.fontWeight = this.value
  fontweightOutput.innerHTML = this.value
})

lineheightTag.addEventListener("input", function () {
  outputTag.style.lineHeight = this.value
  lineheightOutput.innerHTML = this.value
})

// when i change the italic checkbox, update the font style
// to either normal or italic if its checked or not
italicTag.addEventListener("change", function () {
  if (this.checked) {
    outputTag.style.fontStyle = "italic"
  } else {
    outputTag.style.fontStyle = "normal"
  }
})

// when i change my select for typeface
// update the font family
typefaceTag.addEventListener("input", function () {
  outputTag.style.fontFamily = this.value
})

// go through all of my color tags, then when I click one of them, change the background and text color and make the tag selected
colorTags.forEach(tag => {
  tag.addEventListener("click", function () {
    outputTag.style.backgroundColor = this.style.backgroundColor
    outputTag.style.color = this.style.color

    // reset classes
    colorTags.forEach(tag => {
      tag.classList.remove("selected")
    })

    this.classList.add("selected")
  })
})
