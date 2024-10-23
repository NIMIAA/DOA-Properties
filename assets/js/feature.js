const featuredContainer = document.getElementById('featured'); // For the 3 properties on homepage

// Limit to 3 properties for the homepage
const featuredProperties = properties.slice(0, 4);

featuredProperties.map((product) => {
    const productHtml = `
        <div class="col-lg-3 col-md-4 col-sm-6">
            <a href = "propertyDetails.html?id=${product.id}">
                <div class="single-featured-cars">
                    <div class="featured-img-box">
                        <div class="featured-cars-img">
                            <img src="${product.image}" alt="cars">
                        </div>
                        <div class="featured-model-info">
                            <p>
                                ${product.location}
                                <span class="featured-mi-span">${product.bedrooms} <i class="bi bi-house-door"></i></span> 
                                <span class="featured-hp-span">${product.bathrooms} <i class="bi bi-droplet"></i></span> 
                                ${product.type}
                            </p>
                        </div>
                    </div>
                    <div class="featured-cars-txt">
                        <h2><a href="property-description.html?id=${product.id}">${product.title}</a></h2>
                        <h3>${product.price}</h3>
                        <p>${product.description}</p>
                    </div>
                </div>
            </a>
        </div>
    `;
    featuredContainer.innerHTML += productHtml;
});

