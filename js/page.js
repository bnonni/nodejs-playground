function PageSplitterCheck( items, itemsPerPage, checkItemsOnPage, checkItemBelongsTo ) {
  let splitter = new PageSplitter(items, itemsPerPage);
  let solution = [];
  solution[0] = splitter.pageCount();
  solution[1] = splitter.itemCount();
  solution[2] = splitter.pageItemCount(checkItemsOnPage);
  solution[3] = splitter.pageIndex(checkItemBelongsTo);
  return solution;
}
// DO NOT MODIFY THE CODE ABOVE!

class PageSplitter {
	constructor(items, itemsPerPage){
		this.items = items;
		this.itemsPerPage = itemsPerPage;
		this.itemsLength = items.length;
	}
		
	// shows the amount of pages
	// that the items have been split into
	pageCount(){
		return Math.ceil(this.itemsLength / this.itemsPerPage);
	}
	
	// shows the amount of items stored in the object
	itemCount(){
		return this.itemsLength;
	}
	
	// shows amt of items stored on a page
	// args: pageIndex <integer>
	// returns: item count page[pageIndex]
	pageItemCount(pageIndex){
		const numPages = this.pageCount();
		if(pageIndex > numPages - 1) return -1
		if((this.itemsLength % this.itemsPerPage) === 0) return this.itemsPerPage
		return this.itemsLength - (this.itemsPerPage * (numPages - 1))
	}
	
	// shows index of page of passed item index 
	pageIndex(){
		
	}
}

const r = PageSplitterCheck(['a', 'b', 'c', 'd', 'e', 'f', 'g', 'g', 'g', 'g', 'g', 'g'], 4, 1, 2)
console.log(r)