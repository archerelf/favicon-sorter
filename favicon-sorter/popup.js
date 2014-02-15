

function sortByFreq() {
  chrome.bookmarks.getChildren(bookmarkBar.Id, sort(
    function(a,b) {
      return extractVisits(a) - extractVisits (b);
    }));
}


function extractVisits(myNode) {  // BookmarkTreeNode
  chrome.history.search({'text': myNode.url}, countVisits);
}
  
function countVisits(vArray) {
  var vSum = 0;
    for(i = 0; i < vArray.length; i++) {
      vSum += vArray[i].visitCounts;
    }
  return vSum;
}
document.addEventListener('DOMContentLoaded', function () {
 sortByFreq();
});
