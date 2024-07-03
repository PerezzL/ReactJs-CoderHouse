const products = [
    {
      id: 1,
      category: 'Camisetas',
      name: 'Camiseta de Fútbol Nike',
      description: 'Camiseta oficial del equipo con tecnología Dri-FIT.',
      price: 59.99,
      stock: 15,
      imageUrl: 'https://templofutbol.vtexassets.com/arquivos/ids/18848498/CK9872490-A.jpg?v=638481919455300000',
    },
    {
      id: 2,
      category: 'Camisetas',
      name: 'Camiseta de Fútbol Adidas',
      description: 'Camiseta de entrenamiento de alta calidad.',
      price: 49.99,
      stock: 10,
      imageUrl: 'https://acdn.mitiendanube.com/stores/001/220/451/products/nike-jordan-xxxiii-2022-03-18t213751-0961-245915280f762ffd7c16486816931771-240-0.png',
    },
    {
      id: 3,
      category: 'Botines',
      name: 'Botines Puma',
      description: 'Botines de fútbol con suela antideslizante.',
      price: 89.99,
      stock: 8,
      imageUrl: 'https://essential.vtexassets.com/arquivos/ids/1269608-800-auto?v=638445713362770000&width=800&height=auto&aspect=true',
    },
    {
      id: 4,
      category: 'Botines',
      name: 'Botines Nike Mercurial',
      description: 'Botines ligeros para mayor velocidad en el campo.',
      price: 109.99,
      stock: 9,
      imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRgfcLUCjSox_2PN5WseCf51uv7vr8T3FCgDQ&s',
    },
    {
      id: 5,
      category: 'Guantes',
      name: 'Guantes de Arquero Reusch',
      description: 'Guantes con excelente agarre y amortiguación.',
      price: 39.99,
      stock: 5,
      imageUrl: 'https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcR-8P9x0JGVynT2Gnye8sXge_FC5RhI63XXV4UjRBW_8qSnPqj8-Fn0-RXgUeNo-GSwC3Jy7esAzQ0bgoThwnjZUZ97I7EUOaixNEZ2XCICmVvF63Bcfv8DZcL8pV2EvS0pPT8l1JEaspU&usqp=CAc',
    },
    {
      id: 6,
      category: 'Guantes',
      name: 'Guantes de Arquero Adidas',
      description: 'Guantes con ajuste perfecto y protección extra.',
      price: 49.99,
      stock: 5,
      imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRWIKSzoH7nGeKWh_mJ53NS-m9qGuITt3l3m-D3z5lzsg&s',
    },
    {
      id: 7,
      category: 'Shorts',
      name: 'Shorts de Fútbol Nike',
      description: 'Shorts ligeros y cómodos para entrenamiento.',
      price: 29.99,
      stock: 20,
      imageUrl: 'https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/19ea57e9-90c3-4f81-97fb-aea8cdef00b3/shorts-de-f%C3%BAtbol-tejidos-dri-fit-academy-52499b.png',
    },
    {
      id: 8,
      category: 'Shorts',
      name: 'Shorts de Fútbol Puma',
      description: 'Shorts con tejido transpirable y cintura ajustable.',
      price: 24.99,
      stock: 20,
      imageUrl: 'https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_706,h_706/global/658952/13/mod05/fnd/ARG/fmt/png',
    },
  ];

  export const getProducts = () => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(products);
      }, 1000);
    });
  };
  
  export const getProductById = (id) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(products.find(product => product.id === parseInt(id)));
      }, 1000);
    });
  };

  export const getProductsByCategory = (category) => {
    return new Promise((resolve) => {
      const productosFiltrados = products.filter((prod) => prod.category === category)
      setTimeout(() => {
        resolve(productosFiltrados);
      }, 2000);
    })
  }
  
  export default products;
  