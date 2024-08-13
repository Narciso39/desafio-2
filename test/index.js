document.addEventListener('DOMContentLoaded', () => {
    // Criar a seção com o título
    const section = document.createElement('div');
    section.className = 'section';
    
    const title = document.createElement('h2');
    title.className = 'titleSection';
    title.textContent = 'NEW ARRIVALS';
    section.appendChild(title);
    
    // Criar o container de produtos
    const productContainer = document.createElement('div');
    productContainer.className = 'productContainer';
    
    // Array com as informações dos produtos
    const products = [
        {
            imgSrc: '/public/img/products/image1.png',
            name: 'T-SHIRT WITH TAPE DETAILS',
            starsSrc: '/public/img/stars/stars45.svg',
            rating: '4.5/5',
            price: '$120'
        },
        {
            imgSrc: '/public/img/products/image2.png',
            name: 'T-SHIRT WITH TAPE DETAILS',
            starsSrc: '/public/img/stars/stars35.svg',
            rating: '3.5/5',
            price: '$240'
        },
        {
            imgSrc: '/public/img/products/image3.png',
            name: 'T-SHIRT WITH TAPE DETAILS',
            starsSrc: '/public/img/stars/stars45.svg',
            rating: '4.5/5',
            price: '$180'
        },
        {
            imgSrc: '/public/img/products/image4.png',
            name: 'T-SHIRT WITH TAPE DETAILS',
            starsSrc: '/public/img/stars/stars45.svg',
            rating: '4.5/5',
            price: '$130'
        }
    ];
    
    // Criar os produtos e adicionar ao container
    products.forEach(product => {
        const productDiv = document.createElement('div');
        productDiv.className = 'product';
        
        const img = document.createElement('img');
        img.src = product.imgSrc;
        img.alt = '';
        img.className = 'productImg';
        productDiv.appendChild(img);
        
        const name = document.createElement('h3');
        name.className = 'productName';
        name.textContent = product.name;
        productDiv.appendChild(name);
        
        const stars = document.createElement('p');
        stars.className = 'stars';
        stars.innerHTML = `<img src="${product.starsSrc}" alt=""> ${product.rating}`;
        productDiv.appendChild(stars);
        
        const price = document.createElement('p');
        price.className = 'price';
        price.textContent = product.price;
        productDiv.appendChild(price);
        
        productContainer.appendChild(productDiv);
    });
    
    // Criar o botão de ver todos
    const viewAll = document.createElement('div');
    viewAll.className = 'viewAll';
    
    const viewBtn = document.createElement('button');
    viewBtn.className = 'viewBtn';
    
    const link = document.createElement('a');
    link.href = '#';
    link.textContent = 'View All';
    viewBtn.appendChild(link);
    
    viewAll.appendChild(viewBtn);
    
    // Adicionar tudo ao body do documento
    document.body.appendChild(section);
    document.body.appendChild(productContainer);
    document.body.appendChild(viewAll);
});
