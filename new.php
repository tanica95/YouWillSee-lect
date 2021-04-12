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
    } else {
        // Handle news API errors 
        echo '<div class="api-error">
                <h2>Si è verificato un errore imprevisto</h2>
                <p>Sfortunamenete non possiamo mostrarti le news che stai cercando, ti consigliamo di tornare alle <a class="back" href="news.php">categorie</a> e a riprovare più tardi</p>
            </div>';
    }
?>

<main class="new">

    <a class="back" href="news.php">Torna alle categorie</a>

    <h2><?php echo $title ?></h2>
    
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

<script type="text/javascript">
    let item = '<?php echo str_replace(' ', '', strtolower($title))?>';
    // start
    if (localStorage.getItem('start') == '0') {
        localStorage.setItem('start', '1');
    }
    // category
    localStorage.setItem(item, '1');
    //number of news
    for(let link of document.querySelectorAll('a.containerNews')){
        link.addEventListener('click', () => {
            let value = parseInt(localStorage.getItem('N_' + item)) || 0;
            localStorage.setItem('N_' + item, value + 1);
            console.log({item: 'N_' + item, value: localStorage.getItem(item)});
        });
    }
</script>

<?php
    include 'includes/footer.php';
?>