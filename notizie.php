<?php
include 'headNews.php';
?>
 <script type="text/javascript">
  if (sessionStorage.getItem('notizie') == '0') {
    sessionStorage.setItem('notizie', '1')
  }

  
  $('a.href')click(function (){
    var n = Number(sessionStorage.getItem('Nnews'));
    sessionStorage.setItem('Nnews', n + 1);
  });
      </script>
<h1><?php echo ucfirst($title) ?><h1>

  <?php
  
  $i=0;
  $num_RSS = 8; 
  $url = 'http://newsapi.org/v2/top-headlines?sources=google-news-it&apiKey=703a4f88090c47a7b974572dcebfe75e';

include 'bodyNews.php';
