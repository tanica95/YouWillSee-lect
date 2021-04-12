document.querySelector('#stop').addEventListener('click', () => {
    // clear localstorage and trigger p5.js
    if (localStorage.getItem('stop') == '1') {
        localStorage.setItem('stop', '0');
    }
    // get image from canvas and send it
    const canvas = document.querySelector('canvas#sketch');
    // Check if the canvas exists
    if (canvas){
        canvas.toBlob((blob) => {
            /* --- AJAX --- */
            const formData = new FormData();
            formData.append('image', blob, 'image.jpg');
            const xhr = new XMLHttpRequest();
            // set the endpoint
            xhr.open('POST', 'endpoints/saveImage.php');
            // receive response from the endpoint
            xhr.onload = () => {
                if (xhr.status == 200){
                    const response = JSON.parse(xhr.responseText);
                    console.log(response);
                } else {
                    console.error('Error', xhr.status)
                }
            }
            // send data
            xhr.send(formData);
        });
    }
});

/* richard was here

            O O
           dO Ob
          dOO OOO
         dOOO OOOb
        dOOOO OOOOb
        OOOOO OOOOO
        OOOOO OOOOO
        OOOOO OOOOO
        YOOOO OOOOO
         YOOO OOOP
    oOOOOOOOOOOOOb
  oOOOOOOOOOOOOOOOb
 oOOOb dOOOOOOOOOOO
OOOOOOOOOOOOOOOOOOO
OOOOOOOOOOOOOOOOOOP
OOOOOOOOOOOOOOOOOP
 YOOOOOOOOOOOOOOP
   YOOOOOOOOOOOP
  %%%%%%%%%%%%%%
 %%%%%%%%%%%%%%%
 
*/