<!DOCTYPE html>
<html lang="it">

<head>
  <meta charset="UTF-8">
  <title>YWS</title>

  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link rel="stylesheet" href="./css/main.css">
  <link rel="preconnect" href="https://fonts.gstatic.com">
  <!-- <link href="https://fonts.googleapis.com/css2?family=Josefin+Sans:wght@600&family=Open+Sans&display=swap"
    rel="stylesheet"> -->
  <link href="https://fonts.googleapis.com/css2?family=Manrope:wght@300;400;500;600;700;800&display=swap"
    rel="stylesheet">
  <script type="text/javascript" src="node_modules/jquery-3.6.0.min.js"></script>
  <script type="text/javascript" src="p5.js"></script>
  <script type="text/javascript" src="p5.dom.js"></script>
  <script type="text/javascript" src="sketch.js"></script>

</head>

<body>

<?php
  $title1 = "notizie recenti";
  $title2 = "politica";
  $title3 = "economia";
  $title4 = "dal mondo";
  $title5 = "cronaca";
  $title6 = "sport";
  $title7 = "scienza e tecnologia";
  $title8 = "cultura";
  ?>

  <article>
    <div>YWS</div>
    <div> 2020 </div>
  </article>

  <main>

    <div class="middle-box">

      <h1>YOU WILL SEE NEWS</h1>

      <div class="wrapper">

        <section class="line">

        <a href="notizie.php?title=<?php echo $title1 ?>" onclick="increment()">
            <div class="box">
              <div class="copy">
                <h2><?php echo $title1 ?></h2>
              </div>
              <div id="a" class="imgBox">
                <img src="./img/notizie_recenti.jpg" alt="notizie recenti, foto di roman-kraft-_Zua2hyvTBk-unsplash">
              </div>
            </div>
          </a>

          <a href="politica.php?title=<?php echo $title2 ?>" onclick="increment()">
            <div class="box">
              <div class="copy">
                <h2><?php echo $title2 ?></h2>
              </div>
              <div id="b" class="imgBox">
                <img src="./img/politica.jpg" alt="">
              </div>
            </div>
          </a>

          <a href="economia.php?title=<?php echo $title3 ?>" onclick="increment()">
            <div class="box">
              <div class="copy">
                <h2><?php echo $title3 ?></h2>
              </div>
              <div id="c" class="imgBox">
                <img src="./img/economia.jpg" alt="economia, foto di mathieu-stern-1zO4O3Z0UJA-unsplash">
              </div>
            </div>
          </a>

          <a href="mondo.php?title=<?php echo $title4 ?>" onclick="increment()">
            <div class="box">
              <div class="copy">
                <h2><?php echo $title4 ?></h2>
              </div>
              <div id="d" class="imgBox">
                <img src="./img/dal_mondo.jpg" alt="dal mondo">
              </div>

            </div>
          </a>

        </section>

        <section class="line">

        <a href="cronaca.php?title=<?php echo $title5 ?>" onclick="increment()">
            <div class="box">
              <div class="copy">
                <h2><?php echo $title5 ?></h2>
              </div>
              <div id="e" class="imgBox">
                <img src="./img/cronaca.jpg" alt="cronaca">
              </div>
            </div>
          </a>

          <a href="sport.php?title=<?php echo $title6 ?>" onclick="increment()">
            <div class="box">
              <div class="copy">
                <h2><?php echo $title6 ?></h2>
              </div>
              <div id="f" class="imgBox">
                <img src="./img/sport.jpg" alt="sport, foto thewayofcolor-jrkZbw4xguc-unsplash">
              </div>
            </div>
          </a>

          <a href="scienza_tecnologia.php?title=<?php echo $title7 ?>" onclick="increment()">
            <div class="box">
              <div class="copy">
                <h2><?php echo $title7 ?></h2>
              </div>
              <div id="g" class="imgBox">
                <img src="./img/scienza_tecnologia.jpg"
                  alt="scienza e tecnologia, foto di shane-rounce-1ZZ96uESRJQ-unsplash">
              </div>
            </div>
          </a>

          <a href="cultura.php?title=<?php echo $title8 ?>" onclick="increment()">
            <div class="box">
              <div class="copy">
                <h2><?php echo $title8 ?></h2>
              </div>
              <div id="h" class="imgBox">
                <img src="./img/cultura2.jpg" alt="cultura, foto disimon-marsault-jr4P8IidGkM-unsplash">
              </div>
            </div>
          </a>

        </section>

      </div>
      </div>
       <div id="sketch-holder">
      </div>

      <a href="./index.html" , onclick="stop()">
        <div class="stop">
          stop reading
        </div>
      </a>

    </div>

  </main>

  <footer>
    <h2> You Will See Newspaper</h2>
  </footer>

</body>


<!-- <script type="text/javascript" src="node_modules/osc-js/lib/osc.min.js"></script> -->
<script type="text/javascript">

// num categorie scelte da passare a json
 
  // $("a.href").click(function(){ // qui gli dici di pigliare tutti i link con classe "link"
  //   var url = "analytics.php"; // pagina dove processerai i dati con PHP
  //   var tanja = JSON.parse(localStorage.getItem("tanjaData"));
  // });
  
  //fine sessione
  function stop() {
    $("stop").click(function(){
      var url = "analytics.php";
      $.ajax({
        type: "POST",
        url:url,
        data: data
      });
    });
  };
  
</script>

</html>
