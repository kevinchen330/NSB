function phoInfo() {
   var loc = myLocalStorage.get("phoLocation");
   $.get('http://ec2-54-201-137-29.us-west-2.compute.amazonaws.com:8080/search', {location:loc}, function(data){
      for (var x = 0; x < 8; x++) {
         var div = document.createElement("div");
         $(div).attr("class", "large-4 small-6 columns");
         $(div).attr("id", "phoSpots" + x);
         $(div).appendTo($("#phoSpots"));

         var pic = document.createElement("img");
         $(pic).attr("src", data.businesses[x].image_url);
         $(pic).attr("style", "width:250px;height:250px;");
         $(pic).appendTo($("#phoSpots" + x))

         var subDiv = document.createElement("div");
         $(subDiv).attr("class", "panel");
         $(subDiv).attr("id", "phoSpots" + x + x);
         $(subDiv).appendTo($("#phoSpots" + x));

         var title = document.createElement("h5");
         $(title).text("" + data.businesses[x].name);
         $(title).appendTo($("#phoSpots" + x + x));

         var rating = document.createElement("h6");
         $(rating).attr("class", "subheader");
         $(rating).text("" + data.businesses[x].rating);
         $(rating).appendTo($("#phoSpots" + x + x));
      }
   });
}

// <div class="large-4 small-6 columns">
//                             <img src="http://placehold.it/1000x1000&amp;text=Thumbnail">
//                             <div class="panel">
//                                 <h5>Item Name</h5>
//                                 <h6 class="subheader">$000.00</h6>
//                             </div>
//                         </div>
