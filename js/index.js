document.getElementById('file').addEventListener('change',function (e) {

    var files = e.target.files;
    var some = new Compress({
        width:500,
        height:500,
        quality:0.8,
        file:files[0],
        success:function (blob,base64) {
            console.log(blob,base64)
            document.getElementById('img').src = base64
        }
    });
    console.log(some);
});

