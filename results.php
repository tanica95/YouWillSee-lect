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
        $images = glob($dir_name . "*.{jpeg,jpg,png}", GLOB_BRACE);
        // first 12 elements. And the others?
        foreach (array_slice($images, 12) as $img) {
            echo '
            <div class="wrapper">
                <div class="imgBox">
                <img src="' . $img . '">
                </div>
            </div>
            ';
        }
        ?>
    </section>

</main>

<?php
include 'includes/footer.php';
?>