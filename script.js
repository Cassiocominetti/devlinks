function toggleMode() {
  const html = document.documentElement
  html.classList.toggle("light")

  const img = document.querySelector("#profile img")

  if (html.classList.contains("light")) {
    img.setAttribute("src", "./assets/avatar-light.png")
  } else {
    img.setAttribute("src", "./assets/avatar-dark.png")
  }

  const alt = document.querySelector("#profile img")

  if (html.classList.contains("light")) {
    alt.setAttribute(
      "alt",
      "Foto do Cassiano, com cabeça raspada e barba, virando uma caneca de choppe, em um bar com luzes de ambiente noturno"
    )
  } else
    alt.setAttribute(
      "alt",
      "Foto de Cassiano usando fones de ouvido, camiseta cinza, cabelo raspado e com uma planta de fundo"
    )
}
