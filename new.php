<?php
    // Document title
    $title =  $_GET['category'];
    include 'includes/header.php';

    // Query
    $newsLength = 8;
    $url = 'http://newsapi.org/v2/everything?q='. $_GET['query'] . '&language=it&pageSize=' . $newsLength . '&apiKey=703a4f88090c47a7b974572dcebfe75e';
    $data = json_decode(file_get_contents($url));
    
    $articles = array();
    if($data->status == 'ok') {
        // get articles
        $articles = $data->articles;
    }
?>

<main class="new">

    <?php
        // Handle news API errors 
        if($data->status != 'ok'){
            echo '<div class="api-error">
                <h2>Si è verificato un errore imprevisto</h2>
                <p>Sfortunamenete non possiamo mostrarti le news che stai cercando, ti consigliamo di tornare alle <a class="back" href="news.php">categorie</a> e a riprovare più tardi</p>
            </div>';
        }
    ?>

    <a class="back" href="news.php">Torna alle categorie</a>

    <h1><?php echo $title ?></h1>
    
    <?php 
        foreach($articles as $article){
            echo '
            <a class="containerNews" href="' . $article->url . '" target="_blank">
                <img class="imgsize" src="' . $article->urlToImage . '">
                <div>
                    <div class="inner">
                        <h3 class="newshref">' . truncateString($article->description, 100) . '</h3>
                        <p class="newsbody">' . truncateString($article->content, 500) . '<span class="newsauthor">' . $article->author . '<span></p>
                        <p class="date">' . date('l d F Y', strtotime($article->publishedAt)) . '</p>        
                    </div>
                </div>
            </a> 
            ';
        }

        function truncateString($string, $limit){
            if (strlen($string) > $limit){
                return substr($string, 0, $limit) . '...';
            }
            return $string;
        }
    ?>

</main>

<script src="assets/js/new.js"></script>

<?php
    include 'includes/footer.php';
?>