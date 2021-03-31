<?php
include 'headNews.php';
?>
<script type="text/javascript" src="lib/node_modules/jquery-3.6.0.min.js"></script>
 <script type="text/javascript">
  if (localStorage.getItem('cultura') == '0') {
    localStorage.setItem('cultura', '1')
  }
  $(this).click(function (){
    var cu = Number(localStorage.getItem('Cunews'));
    localStorage.setItem('Cunews', cu + 1);
    console.log(localStorage.getItem('Cunews'));
  });
      </script>
<h1><?php echo ucfirst($title) ?><h1>
  <?php
 
 $i = 0;
 $num_RSS = 8;
 $url = 'https://newsapi.org/v2/everything?q="cultura"&language=it&apiKey=703a4f88090c47a7b974572dcebfe75e';
include 'bodyNews.php';
