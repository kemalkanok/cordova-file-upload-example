function call_ajax(url,data,http_method = 'POST')
{
    if(http_method == 'GET')
    {
        cordovaHTTP.get(url,data, {  }, function(response) {
            alert(response.status);
        }, function(response) {
            alert(response.status);
        });
    }
    else
    {
        cordovaHTTP.post(url,data, {  }, function(response) {
            alert(response.status);
        }, function(response) {
            alert(response.status);
        });
    }
    


}


function call_file_transfer(file_path,file_key , data,url,http_method = 'POST') {
    cordovaHTTP.uploadFile(url, data, {  },file_path, file_key, function(response) {
        file_transfer_scb(response);
        
    }, function(response) {
        file_transfer_fcb(response);
    });
}

function file_transfer_scb(response) {
    if(window.file_transfer_scb_extra != undefined)
    {
        window.file_transfer_scb_extra(response);   
        delete window.file_transfer_scb_extra;
    }
    
}

function file_transfer_fcb(error) {
    if(window.file_transfer_fcb_extra != undefined)
    {
        window.file_transfer_fcb_extra(response);   
        delete window.file_transfer_fcb_extra;
    }
}