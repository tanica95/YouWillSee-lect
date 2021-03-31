<?php
include 'headNews.php';
?>
<script type="text/javascript" src="lib/node_modules/jquery-3.6.0.min.js"></script>
 <script type="text/javascript">
  if (localStorage.getItem('politica') == '0') {
    localStorage.setItem('politica', '1')
  }

  $(this).click(function (){
    var p = Number(localStorage.getItem('Pnews'));
    localStorage.setItem('Pnews', p + 1);
    console.log(p);
  });

      </script>

<h1><?php echo ucfirst($title) ?><h1>

  <?php

  $i = 0;
  $num_RSS = 8;
  $url = 'https://newsapi.org/v2/everything?q=politica-italiana&language=it&apiKey=703a4f88090c47a7b974572dcebfe75e';

include 'bodyNews.php';
