<?php
$title = "Gallery";
include 'includes/header.php';
?>

<main class="new">

    <h1>Gallery</h1>

    <section class="wrapper">
        <?php
        $numImg = 0;
        $dir_name = "assets/gallery/";
        $images = glob($dir_name . "*.png");
        foreach ($images as $img) {
            echo '
            <div class="wrapper">
                <div class="imgBox">
                <img src="' . $img . '">
                </div>
            </div>
            ';
            if (++$numImg == 12) break;
        }
        ?>
    </section>

</main>

<?php
include 'includes/footer.php';
?>