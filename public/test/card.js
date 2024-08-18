document.addEventListener('DOMContentLoaded', () => {
    const content = document.getElementById('content');

    const sections = [
        {
            title: 'NEW ARRIVALS',
            products: [
                {
                    imgSrc: '/public/img/products/image1.png',
                    name: 'T-SHIRT WITH TAPE DETAILS',
                    starsSrc: '/public/img/stars/stars45.svg',
                    rating: '4.5/5',
                    price: '$120'
                },
                {
                    imgSrc: '/public/img/products/image2.png',
                    name: 'SKINNY FIT JEANS',
                    starsSrc: '/public/img/stars/stars35.svg',
                    rating: '3.5/5',
                    price: '$240',
                    promoPrice: '$260',
                    discount: '-20%'
                },
                {
                    imgSrc: '/public/img/products/image3.png',
                    name: 'CHECKERED SHIRT',
                    starsSrc: '/public/img/stars/stars45.svg',
                    rating: '4.5/5',
                    price: '$180'
                },
                {
                    imgSrc: '/public/img/products/image4.png',
                    name: 'SLEEVE STRIPED T-SHIRT',
                    starsSrc: '/public/img/stars/stars45.svg',
                    rating: '4.5/5',
                    price: '$130',
                    promoPrice: '$160',
                    discount: '-20%'
                }
            ]
        },
        {
            title: 'TOP SELLING',
            products: [
                {
                    imgSrc: '/public/img/products/image5.png',
                    name: 'VERTICAL STRIPED SHIRT',
                    starsSrc: '/public/img/stars/stars50.svg',
                    rating: '5.0/5',
                    price: '$212',
                    promoPrice: '$260',
                    discount: '-20%'
                },
                {
                    imgSrc: '/public/img/products/image6.png',
                    name: 'COURAGE GRAPHIC T-SHIRT',
                    starsSrc: '/public/img/stars/stars40.svg',
                    rating: '4.0/5',
                    price: '$145'
                },
                {
                    imgSrc: '/public/img/products/image7.png',
                    name: 'LOOSE FIT BERMUDA SHORTS',
                    starsSrc: '/public/img/stars/stars30.svg',
                    rating: '3.0/5',
                    price: '$80'
                },
                {
                    imgSrc: '/public/img/products/image8.png',
                    name: 'FADED SKINNY JEANS',
                    starsSrc: '/public/img/stars/stars45.svg',
                    rating: '4.5/5',
                    price: '$210'
                }
            ]
        }
    ];

    sections.forEach(section => {
        const sectionDiv = document.createElement('div');
        sectionDiv.classList.add('section');
        
        const title = document.createElement('h2');
        title.classList.add('titleSection');
        title.textContent = section.title;
        sectionDiv.appendChild(title);

        const productContainer = document.createElement('div');
        productContainer.classList.add('productContainer');

        section.products.forEach(product => {
            const productDiv = document.createElement('div');
            productDiv.classList.add('product');
            
            const img = document.createElement('img');
            img.src = product.imgSrc;
            img.alt = '';
            img.classList.add('productImg');
            productDiv.appendChild(img);
            
            const name = document.createElement('h3');
            name.classList.add('productName');
            name.textContent = product.name;
            productDiv.appendChild(name);

            const stars = document.createElement('p');
            stars.classList.add('stars');
            const starsImg = document.createElement('img');
            starsImg.src = product.starsSrc;
            starsImg.alt = '';
            stars.appendChild(starsImg);
            stars.appendChild(document.createTextNode(` ${product.rating}`));
            productDiv.appendChild(stars);

            if (product.promoPrice) {
                const itemPromo = document.createElement('div');
                itemPromo.classList.add('itemPromo');

                const price = document.createElement('p');
                price.classList.add('price');
                price.textContent = product.price;
                itemPromo.appendChild(price);

                const promoPrice = document.createElement('p');
                promoPrice.classList.add('pricePromo');
                promoPrice.textContent = product.promoPrice;
                itemPromo.appendChild(promoPrice);

                const desc = document.createElement('p');
                desc.classList.add('desc');
                desc.textContent = product.discount;
                itemPromo.appendChild(desc);

                productDiv.appendChild(itemPromo);
            } else {
                const price = document.createElement('p');
                price.classList.add('price');
                price.textContent = product.price;
                productDiv.appendChild(price);
            }

            productContainer.appendChild(productDiv);
        });

        sectionDiv.appendChild(productContainer);

        const viewAllDiv = document.createElement('div');
        viewAllDiv.classList.add('viewAll');
        
        const viewBtn = document.createElement('button');
        viewBtn.classList.add('viewBtn');
        const viewLink = document.createElement('a');
        viewLink.href = '#';
        viewLink.textContent = 'View All';
        viewBtn.appendChild(viewLink);
        viewAllDiv.appendChild(viewBtn);

        sectionDiv.appendChild(viewAllDiv);
        content.appendChild(sectionDiv);

        if (section !== sections[sections.length - 1]) {
            const lineDiv = document.createElement('div');
            lineDiv.classList.add('line');
            
            const lineImg = document.createElement('img');
            lineImg.src = '/public/img/products/line.svg';
            lineImg.alt = '';
            lineImg.classList.add('lineImg');
            lineDiv.appendChild(lineImg);
            
            content.appendChild(lineDiv);
        }
    });
});