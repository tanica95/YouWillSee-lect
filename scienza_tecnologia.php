<?php
include 'headNews.php';
?>
<script type="text/javascript" src="lib/node_modules/jquery-3.6.0.min.js"></script>
 <script type="text/javascript">
  if (localStorage.getItem('scienza_tenologia') == '0') {
    localStorage.setItem('scienza_tenologia', '1')
  }
  $(this).click(function (){
    var st = Number(localStorage.getItem('Stnews'));
    localStorage.setItem('Stnews', st + 1);
    console.log(localStorage.getItem('Stnews'));
  });
      </script>
<h1><?php echo ucfirst($title) ?><h1>

  <?php
  
 $i = 0;
 $num_RSS = 8;
$url = 'https://newsapi.org/v2/everything?q="scienza-e-tecnologia"&language=it&apiKey=703a4f88090c47a7b974572dcebfe75e';

include 'bodyNews.php';
