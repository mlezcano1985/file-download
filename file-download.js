/**
 * @name FileDownload
 * @author mlezcano1985@gmail.com
 * @description Download file using it info such as base64 content and content type
 */

'use strict';

(window => {
  /**
   * @param { String } _base64 Base64 file content
   * @param { String } _contentType file content type
   * @param { String } _name file name with extension
   * @returns Promise
   */
  window.FileDownload = (_base64, _contentType, _name) => {
    return new Promise((resolve, reject) => {
      var url = `data:${_contentType};base64,${_base64}`;
      fetch(url)
        .then(res => res.blob())
        .catch(err => reject(err))
        .then(blob => {
          downloadBlob(blob, _name);
          resolve();
        })
        .catch(err => reject(err));
    });
  };

  /**
   * @param { String } blob file blob
   * @param { String } name file name with extension
   * @returns void
   */
  const downloadBlob = (blob, name) => {
    var link = document.createElement('a');
    link.href = window.URL.createObjectURL(blob);
    link.download = name;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };
})(window);
