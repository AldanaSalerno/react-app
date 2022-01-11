const oneProducts = [
    {id:1, img:'src/components/lip.png',name:'gloss',price:20,categoria:'labial',descripcion:'labial rosa glos'},
    {id:2, img:'./lip.png',name:'mate',price:20,categoria:'labial',descripcion:'labial rojo glos'},
    {id:3, img:'./lip.png',name:'gloss',price:20,categoria:'labial',descripcion:'labial rosa glos'},
    {id:4, img:'./lip.png',name:'gloss',price:20,categoria:'labial',descripcion:'labial rosa glos'},
    {id:5, img:'./perfume.png',name:'perfume valentino',price:20,categoria:'perfume',descripcion:'labial rosa glos'},
    {id:6, img:'./perfume.png',name:'perfume valentino',price:20,categoria:'perfume',descripcion:'labial rosa glos'},
    {id:7, img:'./perfume.png',name:'perfume valentino',price:20,categoria:'perfume',descripcion:'labial rosa glos'},
    {id:8, img:'./perfume.png',name:'perfume valentino',price:20,categoria:'perfume',descripcion:'labial rosa glos'}
  ]
  export const getProducts= new Promise ((resolve) =>{
    setTimeout(() => {
        resolve(oneProducts)
    }, 2000);
  })