$(document).ready(function() {('button').fadeOut(1000);});


// var origArray = chrome.bookmarks.getChildren(bookmarkBar.Id);

function sortByFreq() {
  var origArray = chrome.bookmarks.getChildren(bookmarkBar.Id);
    origArray.sort(function(a,b) {
     extractVisits(a) - extractVisits (b);
      });

  for(i = 0; i < origArray.length; i++)
    {
     chrome.bookmarks.move(origArray[i].id, {'parentId' = bookmarkBar.id, 'index' = i});
    }	  
}


function extractVisits(myNode) {  // BookmarkTreeNode
  var vArray = chrome.history.search({'text': myNode.url}, countVisits);  
    var vSum = 0;
    for(i = 0; i < vArray.length; i++) {
      vSum += vArray[i].visitCounts;
    }
  return vSum;
}

document.addEventListener('DOMContentLoaded', function(){
 sortByFreq(); } );
