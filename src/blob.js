// workaround for glitch with safari screwing up my b64 download https://stackoverflow.com/questions/64405940/webpack-url-loader-pdf-data-uri-link-for-vue-site-stops-working-in-ios-14


// workaround swiped from https://stackoverflow.com/questions/64152225/is-there-a-workaround-to-create-a-custom-download-link-for-safari-14

function makeArrayBuffer(b64) {
  var binary_string = window.atob(b64.replace(/\s/g, ''));
  var len = binary_string.length;
  var bytes = new Uint8Array(len);
  for (var i = 0; i < len; i++) {
    bytes[i] = binary_string.charCodeAt(i);
  }
  return bytes.buffer;
}

function makeDataURI(buffer) {
  let blob = new Blob([buffer], {type: "application/pdf"});
  let url = URL.createObjectURL(blob);
  return url;
}

function extractRawB64(b64URI) {
  let idx = b64URI.indexOf('base64,') + 7;
  return b64URI.substr(idx);
}

function b64URIToDataURI(b64URI){
  let rawB64 = extractRawB64(b64URI);
  let arrayBuffer = makeArrayBuffer(rawB64);
  let url = makeDataURI(arrayBuffer);
  return url;
}

export default b64URIToDataURI;
