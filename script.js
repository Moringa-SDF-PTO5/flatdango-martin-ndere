document.addEventListener('DOMContentLoaded', function() {
    const movieList = document.getElementById('movieList');

    
    fetch('http://localhost:3000/movies')
        .then(response => response.json())
        .then(data => {
            
            data.forEach(movie => {
                const movieElement = document.createElement('div');
                movieElement.classList.add('movie');
                movieElement.innerHTML = `
                    <img src="${movie.image}" alt="${movie.title} Poster">
                    <h2>${movie.title}</h2>
                    <p>${movie.description}</p>
                    <p class="price">$${movie.price}</p>
                    <p>Showtimes: ${movie.showtimes.join(', ')}</p>
                    <div class="review-section">
                        <h3>Add a Review</h3>
                        <input type="number" class="purchase-price" placeholder="Purchase Price">
                        <input type="text" class="review-name" placeholder="Your Name">
                        <textarea class="review-text" placeholder="Your Review"></textarea>
                        <button class="submit-review" onclick="addReview(this)">Submit Review</button>
                    </div>
                    <div class="reviews"></div>
                `;
                movieList.appendChild(movieElement);
            });
        })
        .catch(error => {
            console.error('Error fetching movies:', error);
        });
});

function addReview(button) {
    const movieElement = button.closest('.movie');
    const purchasePriceInput = movieElement.querySelector('.purchase-price');
    const reviewNameInput = movieElement.querySelector('.review-name');
    const reviewTextInput = movieElement.querySelector('.review-text');

    const purchasePrice = purchasePriceInput.value.trim();
    const reviewName = reviewNameInput.value.trim();
    const reviewText = reviewTextInput.value.trim();

    if (purchasePrice !== '' && reviewName !== '' && reviewText !== '') {
        const reviewsContainer = movieElement.querySelector('.reviews');
        const reviewElement = document.createElement('div');
        reviewElement.classList.add('review');
        reviewElement.innerHTML = `
            <p><strong>${reviewName}</strong> - $${purchasePrice}</p>
            <p>${reviewText}</p>
        `;
        reviewsContainer.appendChild(reviewElement);

    
        purchasePriceInput.value = '';
        reviewNameInput.value = '';
        reviewTextInput.value = '';
    } else {
        alert('Please fill in all fields.');
    }
}
