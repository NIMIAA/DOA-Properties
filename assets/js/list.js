// Get the containers for all properties and featured properties
const container = document.getElementById('products-container'); // For all properties
const feature = document.getElementById('featured'); // For featured properties (homepage)

// Render all properties
properties.map((product) => {
    const productHtml = `
       <div class="col-md-4 col-sm-6 mb-4">
    <a href="propertyDetails.html?id=${product.id}" class="text-decoration-none">
        <div class="single-featured-cars shadow-sm rounded overflow-hidden">
            <!-- Image Section -->
            <div class="featured-img-box position-relative">
                <img src="${product.image}" alt="${product.title}" class="img-fluid w-100" style="object-fit: cover; height: 200px;">
            </div>
            
            <!-- Property Info Section -->
            <div class="featured-cars-txt p-3">
                <h5 class="text-dark fw-bold mb-2">${product.title}</h5>
                <h6 class="text-primary mb-2">${product.price}</h6>
                <p class="text-muted mb-1"><i class="bi bi-geo-alt-fill me-1"></i> ${product.location}</p>
                
                <!-- Additional Info: Bedrooms & Bathrooms -->
                <div class="d-flex align-items-center mb-2">
                    <span class="me-3"><i class="bi bi-house-door me-1"></i> ${product.bedrooms} Bedrooms</span>
                    <span><i class="bi bi-droplet me-1"></i> ${product.bathrooms} Bathrooms</span>
                </div>
                
                <!-- Property Type -->
                <p class="small text-uppercase text-muted mb-0">${product.type}</p>
            </div>
        </div>
    </a>
</div>

    `;
    container.innerHTML += productHtml; // Append each property to the container
});

