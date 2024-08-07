const images = document.querySelector('.slider-img')
const controlls = document.querySelectorAll('.controlls')
const img = ['./images/1.jpg', './images/2.jpg', './images/3.jpg']
let imageIndex = 0
images.src = img[imageIndex]

controlls.forEach((item) => {
  item.addEventListener('click', (event) => {
    if (event.target.classList.contains('prev')) {
      if (imageIndex === 0) {
        imageIndex = img.length - 1
      } else {
        imageIndex -= 1
      }
    } else {
      if (imageIndex === img.length - 1) {
        imageIndex = 0
      } else {
        imageIndex += 1
      }
    }
    images.src = img[imageIndex]
  })
})


