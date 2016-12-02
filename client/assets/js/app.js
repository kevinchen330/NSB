$(document).foundation()

document.write('<script src="//' + (location.hostname || 'localhost') + ':35729/livereload.js?snipver=1"><\/script>')

function clicked() {
   myLocalStorage.set('phoLocation', $('#phoLocation').val());
}

