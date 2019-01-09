# file-download

An easy way to download a file from the web browser

# Install
`$ npm install file-download`

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

# Support

If you are having general issues with this package, feel free to contact me on [Twitter](https://twitter.com/mlezcano1985).

If you believe you have found an issue, please report it using the [GitHub issue tracker](https://github.com/mlezcano1985/file-download/issues), or better yet, fork the repository and submit a pull request.

If you're using this package, I'd love to hear your thoughts. Thanks!
