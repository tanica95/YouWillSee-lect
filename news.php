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
            'imageDescription' => 'Notizie recenti, foto di Roman Kraft'
        ),
        'politics' => array(
            'id' => 'b',
            'title' => 'Politica',
            'query' => 'politica-italiana',
            'image' => 'politica_grafica.jpg',
            'imageDescription' => ''
        ),
        'economy' => array(
            'id' => 'c',
            'title' => 'Economia',
            'query' => 'economia',
            'image' => 'economia.jpg',
            'imageDescription' => 'Economia, foto di Mathieu Stern'
        ),
        'world' => array(
            'id' => 'd',
            'title' => 'Dal mondo',
            'query' => 'world-news',
            'image' => 'dal_mondo.jpg',
            'imageDescription' => 'Dal mondo'
        ),
        'chronicle' => array(
            'id' => 'e',
            'title' => 'Cronaca',
            'query' => 'crimine',
            'image' => 'cronaca_grafica.png',
            'imageDescription' => 'Cronaca'
        ),
        'sport' => array(
            'id' => 'f',
            'title' => 'Sport',
            'query' => 'sports',
            'image' => 'sport.jpg',
            'imageDescription' => 'Sport, foto Thewayofcolor'
        ),
        'science' => array(
            'id' => 'g',
            'title' => 'Scienza e tecnologia',
            'query' => 'scienza-e-tecnologia',
            'image' => 'scienza_tecnologia_grafica.png',
            'imageDescription' => 'Scienza e tecnologia, foto di Shane Rounce'
        ),
        // Why is culture always last? :(
        'culture' => array(
            'id' => 'h',
            'title' => 'Cultura',
            'query' => 'cultura',
            'image' => 'cultura2.jpg',
            'imageDescription' => 'Cultura, foto Disimon Marsault'
        ),
    )

?>

<main>
    <div class="middle-box">
        <h1>YOU WILL SEE NEWS</h1>
        <div id="sketch-holder"></div>
        <section class="wrapper">

            <?php
                foreach($news as $new => $data) {
                    echo '
                    <a href="new.php?category=' . $data['title'] . '&query=' . $data['query'] .'">
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
    
        <button class="button">stop reading</button>

    </div>
</main>

<?php
    include 'includes/footer.php';
?>