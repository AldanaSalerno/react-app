const productos = [
    {id:1, img:'src/components/lip.png',nombre:'gloss',price:20,categoria:'labial',descripcion:'labial rosa glos'},
    {id:2, img:'./lip.png',nombre:'mate',precio:20,categoria:'labial',descripcion:'labial rojo glos'},
    {id:3, img:'./lip.png',nombre:'gloss',precio:20,categoria:'labial',descripcion:'labial rosa glos'},
    {id:4, img:'./lip.png',nombre:'gloss',precio:20,categoria:'labial',descripcion:'labial rosa glos'},
    {id:5, img:'./perfume.png',nombre:'perfume valentino',precio:20,categoria:'perfume',descripcion:'labial rosa glos'},
    {id:6, img:'./perfume.png',nombre:'perfume valentino',precio:20,categoria:'perfume',descripcion:'labial rosa glos'},
    {id:7, img:'./perfume.png',nombre:'perfume valentino',precio:20,categoria:'perfume',descripcion:'labial rosa glos'},
    {id:8, img:'./perfume.png',nombre:'perfume valentino',precio:20,categoria:'perfume',descripcion:'labial rosa glos'}
  ]
  export const getFetch= new Promise ((resolve) =>{
    setTimeout(() => {
        resolve(productos)
    }, 2000);
  })