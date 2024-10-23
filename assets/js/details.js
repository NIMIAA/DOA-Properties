const urlParams = new URLSearchParams(window.location.search);
const productId = parseInt(urlParams.get('id'));

// Find the product by ID
const property = properties.find(p => p.id === productId);
console.log(property);

if (property) {
    const descriptionContainer = document.getElementById('product-description');

    const propertyDetails = `
       <div class="card mb-5 shadow-lg border-0 rounded-lg">
    <div class="row g-0">
        <!-- Image Section -->
        <div class="col-md-6">
            <div class="image-container position-relative">
                <img src="${property.image}" alt="${property.title}" class="img-fluid rounded-start h-100 w-100" style="object-fit: cover;">
                <!-- Add a badge for property type -->
                <span class="badge bg-success position-absolute top-0 start-0 m-3 px-3 py-2">${property.type}</span>
                <!-- Add a price overlay -->
                <span class="badge bg-dark position-absolute bottom-0 start-0 m-3 px-4 py-2 fs-5">${property.price}</span>
            </div>
        </div>

        <!-- Details Section -->
        <div class="col-md-6 d-flex flex-column justify-content-between p-4">
            <div>
                <h2 class="text-primary display-6 fw-bold mb-3">${property.title}</h2>
                <p class="text-muted small"><i class="bi bi-geo-alt-fill"></i> ${property.location}</p>

                <!-- Property Details with icons -->
                <div class="d-flex align-items-center mb-2">
                    <i class="bi bi-house-door-fill text-secondary fs-4 me-2"></i>
                    <span class="fw-bold me-3">Bedrooms: ${property.bedrooms}</span>
                    <i class="bi bi-droplet text-info fs-4 me-2"></i>
                    <span class="fw-bold">Bathrooms: ${property.bathrooms}</span>
                </div>
                
                <!-- Property Description -->
                <p class="mt-3 text-muted">${property.description}</p>
            </div>

            <!-- CTA Button -->
            <div class="mt-4">
                <a href="propertyDetails.html?id=${property.id}" class="btn btn-primary btn-lg w-100 text-uppercase fw-bold">
                    View Details <i class="bi bi-arrow-right ms-2"></i>
                </a>
            </div>
        </div>
    </div>
</div>

    `;

    descriptionContainer.innerHTML = propertyDetails;
} else {
    document.getElementById('product-description').innerHTML = '<p>Product not found.</p>';
}