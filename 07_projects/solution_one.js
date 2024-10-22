const buttons = document.querySelectorAll('.button')
// console.log(buttons)
const body = document.querySelector('body')
// console.log(body)

buttons.forEach(function(button) {
  button.addEventListener('click', function(e) {
    console.log(e.target.id)
    console.log(e.target.className)
    console.log(e.target.classList)

    if (e.target.id == "grey") {
      body.style.backgroundColor = e.target.id
    }

    if (e.target.id == "blue") {
      body.style.backgroundColor = e.target.id
    }

    if (e.target.id == "yellow") {
      body.style.backgroundColor = e.target.id
    }

    if (e.target.id == "white") {
      body.style.backgroundColor = e.target.id
    }
  })
})
