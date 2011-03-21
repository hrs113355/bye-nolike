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

function injectWarningWindow() {
  var inject = [
    $('<p>您正在瀏覽的網頁內容包含了要求您先按下「讚」才能閱讀內容的誘導機制。這可能會導致您的身分被用作非您本意的推薦，並被網站利用為騙取信任、流量與廣告的工具。</p><p>為了避免您被網站強迫點「讚」，您可以利用下方的搜尋框在網路上搜尋是否有其他網站提供相同內容。<span class="crackable">或者您也可以選擇嘗試解除此網站上的騙「讚」機制。</span></p>'),
    $('<form id="searchBox" action="http://www.google.com/search" method="GET" target="_top"></form>')
    .append('<input type="search" id="q" name="q" placeholder="Google" results="0" />'),
    $('<p class="links"><a href="#">更多資訊</a></p>'),
    $('<form id="crackBox"><label><input type="checkbox" id="alwaysCrack" />總是嘗試破解此網站</label><a class="zbutton red" href="#">嘗試破解</a><a id="btnIgnore" class="zbutton" href="#">忽略警告</a></form>')
  ]
  var result = $('<div>');
  
  $.each(inject, function(index, item) {
    result.append(item);
  });
  
  $('<div id="nolike_container"></div>')
    .append($('<div>')
      .append($('<article>')
        .append('<h1 title="警告：騙「讚」誘導網站">警告：騙「讚」誘導網站</h1>')
        .append(result)
      )
    ).appendTo('body');
}

}