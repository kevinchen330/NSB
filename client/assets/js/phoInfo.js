function phoInfo() {
   var loc = myLocalStorage.get("phoLocation");
   $.get('http://ec2-54-201-137-29.us-west-2.compute.amazonaws.com:8080/search', {location:loc}, function(data){
      for (var x = 0; x < 10; x++) {
         var div = document.createElement("div");
         $(div).attr("class", "large-4 small-6 columns");
         $(div).attr("id", "phoSpots" + x);
         $(div).appendTo($("#phoSpots"));

         var pic = document.createElement("img");
         $(pic).attr("src", data.businesses[x].image_url);
         $(pic).appendTo($("#phoSpots" + x))

         var subDiv = document.createElement("div");
         $(subDiv).attr("class", "panel");
         $(subDiv).attr("id", "phoSpots" + x + x);
         $(subDiv).appendTo($("#phoSpots" + x));

         var title = document.createElement("h5");
         $(title).html(data.businesses[x].name);
         $(title).appendTo($("#phoSpot" + x + x));

         var rating = document.createElement("h6");
         $(rating).html(data.businesses[x].rating);
         $(rating).appendTo($("#phoSpot" + x + x));
      }
   });
}
