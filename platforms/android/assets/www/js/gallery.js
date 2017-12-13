function call_gallery(key,data) {
    window.gallery_key = key;
    window.gallery_data = data;
    // cordova.plugins.photoLibrary.requestAuthorization(
    //   function () {
        // User gave us permission to his library, retry reading it!
        window.imagePicker.getPictures(gallery_scb,gallery_fcb,
        {
            maximumImagesCount: 1,
            width: 800
        });
    //   },
    //   function (err) {
    //     // User denied the access
    //     alert(JSON.stringify(err));
    //   }, // if options not provided, defaults to {read: true}.
    //   {
    //     read: true,
    //     write: false
    //   }
    // );
    
}

function gallery_scb(data) {
    var image;
    for (var i = 0; i < data.length; i++) {
        window.gallery_data[window.gallery_key] = data[i];    
        image = data[i];
    }
    if(window.gallery_scb_extra != undefined){
    	window.gallery_scb_extra(image);
        delete window.gallery_scb_extra;
    }
}

function gallery_fcb(error) {
    if(window.gallery_fcb_extra != undefined){
    	window.gallery_fcb_extra();
        delete window.gallery_fcb_extra;
    }
}