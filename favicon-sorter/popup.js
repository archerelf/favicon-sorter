

function sortByFreq() {
  var sortedArray = chrome.bookmarks.getChildren(bookmarkBar.Id, sort(
    function(a,b) {
      return extractVisits(a) - extractVisits (b);
    }));

  for(i = 0; i < sortedArray.length; i++)
    {
     chrome.bookmarks.move(sortedArray[i].id, {'parentId' = bookmarkBarId})
    }
	  

}


function extractVisits(myNode) {  // BookmarkTreeNode
  return chrome.history.search({'text': myNode.url}, countVisits);
}
  
function countVisits(vArray) {
  var vSum = 0;
    for(i = 0; i < vArray.length; i++) {
      vSum += vArray[i].visitCounts;
    }
  return vSum;
}

document.addEventListener('DOMContentLoaded', function(){
 sortByFreq(); } );
