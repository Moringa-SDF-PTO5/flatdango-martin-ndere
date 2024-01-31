<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Flatdango Movie Theater</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            margin: 0;
            padding: 0;
            background-color: #f4f4f4;
        }

        .container {
            max-width: 800px;
            margin: 0 auto;
            padding: 20px;
            text-align: center;
        }

        h1 {
            text-align: center;
        }

        .movie {
            border: 1px solid #ccc;
            padding: 10px;
            margin-bottom: 20px;
            background-color: #fff;
            display: flex;
            flex-direction: column;
            align-items: center;
        }

        .movie img {
            max-width: 200px;
            height: auto;
            margin-bottom: 10px;
        }

        /* Added to style the movie prices */
        .movie p.price {
            font-weight: bold;
            color: #333;
            margin-bottom: 5px;
        }
    </style>
</head>
<body>
    <div class="container">
        <h1>Flatdango Movie Theater</h1>
        <img src="https://m.media-amazon.com/images/I/71QEahoNtdL._AC_SL1500_.jpg" alt="Description of the image">

        <!-- Movie list -->
        <div id="movieList">
            <div class="movie">
                <img src="https://ih1.redbubble.net/image.1449965882.5782/flat,750x,075,f-pad,750x1000,f8f8f8.jpg" alt="Inception Poster">
                <h2>Inception</h2>
                <p>A thief who enters the dreams of others to steal their secrets.</p>
                <p class="price">$10.00</p>
                <p>Showtimes: 12:00 PM, 3:00 PM, 6:00 PM</p>
            </div>
            <div class="movie">
                <img src="https://rukminim2.flixcart.com/image/850/1000/juk4gi80/poster/s/g/3/large-newposter8503-movie-interstellar-hd-wallpaper-background-original-imaf5ttsfnfgt2zh.jpeg?q=90&crop=false" alt="Interstellar Poster">
                <h2>Interstellar</h2>
                <p>A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival.</p>
                <p class="price">$12.00</p>
                <p>Showtimes: 1:00 PM, 4:00 PM, 7:00 PM</p>
            </div>
            <div class="movie">
                <img src="https://i5.walmartimages.com/asr/f0598fb7-94c2-4274-9ea5-d24b02b09927.59eb99ddfa9dde7ab9110d9723488196.jpeg" alt="The Dark Knight Poster">
                <h2>The Dark Knight</h2>
                <p>When the menace known as The Joker emerges from his mysterious past, he wreaks havoc and chaos on the people of Gotham.</p>
                <p class="price">$8.00</p>
                <p>Showtimes: 2:00 PM, 5:00 PM, 8:00 PM</p>
            </div>
        </div>
    </div>
</body>
</html>
