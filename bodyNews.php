<?php 
  
   // $url="https://newsapi.org/v2/top-headlines?country=it&category=business&apiKey=b5b7b669d9d54c2abec6a81ccd7dfed2";
    $response = file_get_contents($url);
    $NewsData = json_decode($response);
    foreach ($NewsData->articles as $News) {
        if ($i < $num_RSS) { ?>
              <a class="containerNews" href="<?php echo $News->url ?>" target="_blank">
                    <img class="imgsize" src="<?php echo $News->urlToImage ?>">
                    <div>
                        <h3 class="newshref"><?php echo $News->description?></h3>
                        <p class="newsbody"><?php echo $News->content ?><span class="newsauthor"><?php echo $News->author ?></span></p>
                        <p class="date"><?php echo $News->publishedAt ?></p>        
                    </div>
                </a> 
<?php       } 
	$i++;
   } 
    
  ?>

</body>

<script src="https://code.jquery.com/jquery-3.4.1.min.js"></script>
<script> 
var url = 'https://newsapi.org/v2/everything?' +
          'q=Apple&' +
          'from=2021-03-03&' +
          'sortBy=popularity&' +
          'apiKey=703a4f88090c47a7b974572dcebfe75e';

var req = new Request(url);

fetch(req)
    .then(function(response) {
        //console.log(response.json());
    })


$( ".newshref" ).each(function() {
    if($(this).text().length > 10){
       $(this).text($(this).text().substr(0,100));
    }
});

$( ".newsbody" ).each(function() {
    if($(this).text().length > 10){
       $(this).text($(this).text().substr(0,200));
    }
});


</script>
</html>
