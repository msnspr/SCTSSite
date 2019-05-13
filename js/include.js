var htmlImport = document.querySelector('link[rel="import"]');
var htmlDoc = htmlImport.import;
var htmlMessage = htmlDoc.querySelector('.message-success');
document.body.appendChild(htmlMessage.cloneNode(true));