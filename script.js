 function toggleMode() {
    const html = document.documentElement
    html.classList.toggle('light')

    // pegar a tag img  e 

    const img = document.querySelector("profile img")

    //substituir a iamgem // 
    // condição: se tiver lightmode colocar a imagem light// 

    if(html.classList.contains('light')) {
        img.setAttribute('src', './Images/avatar-light.png')

     // condição: se tiver sem lightmode manter imagem original// 

    } else [
        img.setAttribute('src', './Images/avatar.png')

    ]


}

