export function addZoom(element) {
  element.addEventListener('wheel', zoomPicture)
}

export function removeZoom(element) {
  element.removeEventListener('wheel', zoomPicture)
}

function zoomPicture(e) {
  let picture = document.getElementById('picture')
  let pictureStyle = getComputedStyle(picture)
  let transform = pictureStyle.getPropertyValue('transform')
  let transformAsArray = transform.replace('matrix(', '')
  transformAsArray = transformAsArray.replace(')', '')
  transformAsArray = transformAsArray.split(',')
  let scaleX = parseFloat(transformAsArray[0])
  let updatedScale = scaleX - e.deltaY / 1000.0
  if (updatedScale > 0) {
    picture.style.transform = 'scale(' + updatedScale + ')'
  }
}