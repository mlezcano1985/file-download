# file-download
An easy way to download a file from the web browser using an ajax request

# How to use?
You can see the file **sample.html** with an very easy example.

```
var base64 = ""; // base64 file content
var type = ""; // file content type
var name = ""; // file name with extension
window.FileDownload(base64, type, name)
    .then(() => console.log('download successful.'))
    .catch((err) => console.error('download error: ', err));
```

