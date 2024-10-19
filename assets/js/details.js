const urlParams = new URLSearchParams(window.location.search);
const productId = parseInt(urlParams.get('id'));

// Find the product by ID
const property = properties.find(p => p.id === productId);
console.log(property);

if (property) {
    const descriptionContainer = document.getElementById('product-description');

    const propertyDetails = `
        <div class="col-md-6">
            <img src="${property.image}" alt="${property.title}" class="img-fluid rounded shadow-lg">
        </div>
        <div class="col-md-6">
            <h2 class="display-5 font-weight-bold mb-3">${property.title}</h2>
            <h3 class="text-primary font-weight-bold mb-4">${property.price}</h3>
            <p class="text-muted"><i class="bi bi-geo-alt-fill"></i> ${property.location}</p>
            <p class="mb-1"><i class="bi bi-house-door-fill"></i> Bedrooms: <strong>${property.bedrooms}</strong></p>
            <p class="mb-3"><i class="bi bi-droplet-fill"></i> Bathrooms: <strong>${property.bathrooms}</strong></p>
            <p class="font-italic">${property.description}</p>
            <p class="text-uppercase text-muted"><i class="bi bi-gear-fill"></i> Type: ${property.type}</p>
        </div>
    `;

    descriptionContainer.innerHTML = propertyDetails;
} else {
    document.getElementById('product-description').innerHTML = '<p>Product not found.</p>';
}