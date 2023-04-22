// Function to render your items
function renderItems(collection) {
    // The `ul` where the items will be inserted
    const collectionList = document.getElementById("collection");
  
    let runningTrue = [];
    let runningFalse = [];
  
    collection.forEach(function (item) {
      if (item.running == false) {
        runningFalse.push(item);
      } else if (item.running == true) {
        runningTrue.push(item);
      }
    });
  
    const sticker = document.createElement("div")
    sticker.classList.add('sticker')
    collectionList.appendChild(sticker)

    const dotContainer = document.createElement("div")
    dotContainer.classList.add('dot-container')
    collectionList.appendChild(dotContainer)

    const item = document.createElement("div")
    dotContainer.classList.add('item')
    collectionList.appendChild(item)
  
    const activeDot = document.createElement("div");
    activeDot.style.background = "#000";
    activeDot.style.width = `${runningTrue.length / collection.length * 100}vw`
    activeDot.style.height = '100vh'
  
    const activeTitle = `
        <h2 class="activity-title">Active Squirrels: ${runningTrue.length / collection.length * 100}%</h2>
    `
  
    activeDot.insertAdjacentHTML('beforeend', activeTitle)
  
    const lazyDot = document.createElement("div");
    lazyDot.style.background = "#ff0000";
    lazyDot.style.width = `${runningFalse.length / collection.length * 100}vw`
    lazyDot.style.height = '100vh'
  
    dotContainer.appendChild(activeDot)
    dotContainer.appendChild(lazyDot)
  
  //   item.style.width = runningTrue.length / collection.length} + '%'
  
    // Loop through each item in the collection array
    collection.forEach(function (item) {
      const listItem = document.createElement("div"); // Make the `div
      listItem.classList.add("sticker");


      // This can get annoying, so we can use “template literals” instead
      const itemDetails = `
                  <div class="data-container">
                      <div class="data-point" style="left: ${item.leftPosition};"></div>
                      <div class="data-details">
                          <img src="${item.image}">
                          <h1>${item.name}</h1>
                          <h2><em>${item.type}<br>
                          <em> ${item.place}</h2>
                  
                      </div>
                  </div>
              `;
      
  
      listItem.insertAdjacentHTML("beforeend", itemDetails); // Which can we then insert
  
      // You can build logic from your data, too
      if (!item.indifferent) {
        // If this is `false`
        listItem.classList.add("indifferent"); // Add this class to the whole `li`
      }
  



  
      collectionList.appendChild(listItem); // Then add the whole `li` into the `ul`
    });
  }

  // Fetch gets your JSON file.
  fetch("assets/stickers.json")
    .then(function (response) {
      return response.json();
    })
    .then(function (collection) {
      // And passes the data to the function, above!
      renderItems(collection.reverse()); // In reverse order
    });
  

window.addEventListener('load', function() {
  document.querySelector('input[type="file"]').addEventListener('change', function() {
      if (this.files && this.files[0]) {
          var img = document.querySelector('img');
          img.onload = () => {
              URL.revokeObjectURL(img.src);  // no longer needed, free memory
          }

          img.src = URL.createObjectURL(this.files[0]); // set src to blob url
      }
  });
});

function change() {
	document.getElementById("text").style.display = "none"; }
  
function change(img) {
  img.classList.toggle("fullsize")

}

