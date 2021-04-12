<!-- <script type="text/javascript" src="assets/js/p5.js"></script>
<script type="text/javascript" src="assets/js/p5.dom.js"></script>
<script type="text/javascript" src="assets/js/sketch.js"></script> -->
<?php
// Document title
$title = 'News';
include 'includes/header.php';

// news categories - nested associative arrays (JSON-like structure)
$news = array(
    'recent' => array(
        'id' => 'a',
        'title' => 'Notizie recenti',
        'query' => 'google-news-it',
        'image' => 'notizie_grafica.jpg',
        'imageDescription' => 'immagine di Tanja Marmai'
    ),
    'politics' => array(
        'id' => 'b',
        'title' => 'Politica',
        'query' => 'politica-italiana',
        'image' => 'politica_grafica.jpg',
        'imageDescription' => 'immagine di Tanja Marmai'
    ),
    'economy' => array(
        'id' => 'c',
        'title' => 'Economia',
        'query' => 'economia',
        'image' => 'economia_grafica.jpg',
        'imageDescription' => 'immagine di Tanja Marmai'
    ),
    'world' => array(
        'id' => 'd',
        'title' => 'Dal mondo',
        'query' => 'world-news',
        'image' => 'mondo_grafica.jpg',
        'imageDescription' => 'immagine di Tanja Marmai'
    ),
    'chronicle' => array(
        'id' => 'e',
        'title' => 'Cronaca',
        'query' => 'crimine',
        'image' => 'cronaca_grafica.png',
        'imageDescription' => 'immagine di Tanja Marmai'
    ),
    'sport' => array(
        'id' => 'f',
        'title' => 'Sport',
        'query' => 'sports',
        'image' => 'sport_grafica.jpg',
        'imageDescription' => 'immagine di Tanja Marmai'
    ),
    'science' => array(
        'id' => 'g',
        'title' => 'Scienza e tecnologia',
        'query' => 'scienza-e-tecnologia',
        'image' => 'scienza_tecnologia_grafica.png',
        'imageDescription' => 'immagine di Tanja Marmai'
    ),
    // Why is culture always last? :(
    'culture' => array(
        'id' => 'h',
        'title' => 'Cultura',
        'query' => 'cultura',
        'image' => 'cultura_grafica.jpg',
        'imageDescription' => 'immagine di Tanja Marmai'
    ),
)

?>

<main>
    <h1>YOU WILL SEE NEWS</h1>

    <div id="sketch-flex">
        <section class="wrapper">
            <?php
            foreach ($news as $new => $data) {
                echo '
                    <a href="new.php?category=' . $data['title'] . '&query=' . $data['query'] . '">
                        <div class="box">
                            <div class="copy">
                                <h2>' . $data['title'] . '</h2>
                            </div>
                            <div id="' . $data['id'] . '" class="imgBox">
                                <img src="assets/images/' . $data['image'] . '" alt="' . $data['imageDescription'] . '">
                            </div>
                        </div>
                    </a>
                    ';
            }
            ?>
        </section>

        <div id="sketch-holder"></div>
    </div>

    <a class="link-bubble" href="results.php">Gallery</a>

    <button id="stop" class="button">stop reading</button>
    
</main>

<script type="text/javascript" src="assets/js/news.js"></script>

<?php
include 'includes/footer.php';
?>