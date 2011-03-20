if(window.top === window) {

var ext = safari.extension;
var baseURI = ext.baseURI;

function needLikeToRead() {
  switch(location.hostname) {
    case 'tenkucity.com':
      if($('div.like_locked').length > 0) {
        return true;
        break;
      }
    case 'citytalk.tw':
      if($('table div.locked').length > 0) {
        return true;
        break;
      }
    case 'ideapit.net':
      if($('table div#hiden_box').length > 0) {
        return true;
        break;
      }
    default:
      return false;
      break;
  }
}

function isCrackable() {
  return false;
}

function displayAlert(crackable) {
  crackable = crackable || false;
  
  $('<iframe>').css({
      width: '100%', height: '100%', border: 'none',
      position: 'fixed', top: 0, left: 0, zIndex: 9999
    })
    .attr('id', 'bye_nolike_warning')
    .attr('src', baseURI + 'warning.html?title=' + document.title + (crackable ? '' : '&crackable=false') )
    .appendTo($('body'));
}

if(needLikeToRead()) {
  displayAlert(isCrackable());
}

}