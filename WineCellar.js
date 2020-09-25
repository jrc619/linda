function sortlist(sorttype)
{
   var sorttype = document.getElementById("wines").value;
   // sorttype: 1 = gps, 2 = varietal, 3 = vintage, 4 = winery
   var i,j;
   var text = '';

   var winetablearray = [];



   for (i=0; i<winelist.length; i++)
   {
      var [location, shelf, slot, qty, varietal, vintage, maturity , winery] = winelist[i].split("|");
      const zeropad = (num, places) => String(num).padStart(places, '0');
      var gpsid = location + '-' + zeropad(shelf,2) + '-' + slot;
      var gps = location + '&nbsp;&nbsp;&nbsp;' + shelf + '&nbsp;&nbsp;&nbsp;' + slot;


      switch (sorttype)
      {
         // This is default column order when html loads.
         // If sorting by Location/Shelf/Slot, then column order is:
         // Location | Shelf | Slot | Varietal | Vintage | Winery | Qty | Maturity
         case "1":
            if (location == 'Location')
            {
               winetablearray[i] = '<tr> '
            }
            else
            {
               winetablearray[i] = '<tr>'
            }

            winetablearray[i] += '<td id="' + gpsid + '">' + gps + '</td>'
                              +  '<td>' + varietal + '</td>'
                              +  '<td class="right">' + vintage + '</td>'
                              +  '<td>' + winery + '</td>'
//                            +  '<td class="right">' + qty + '</td>'
//                            +  '<td class="right">' + maturity + '</td>'
                              +  '</tr>'
                              ;
            break;

         // If sorting by Varietal, then column order is:
         // Varietal | Vintage | Winery | Location | Shelf | Slot | Qty | Maturity
         case "2":
            if (location == 'Location')
            {
               winetablearray[i] = '<tr> '
            }
            else
            {
               winetablearray[i] = '<tr>'
            }
            winetablearray[i] += '<td>' + varietal + '</td>'
                              +  '<td class="right">' + vintage + '</td>'
                              +  '<td>' + winery + '</td>'
                              +  '<td id="' + gpsid + '">' + gps + '</td>'
//                            +  '<td class="right">' + qty + '</td>'
//                            +  '<td class="right">' + maturity + '</td>'
                              +  '</tr>'
                              ;
            break;

         // If sorting by Vintage, then column order is:
         // Vintage | Varietal | Winery | Location | Shelf | Slot | Qty | Maturity

         case "3":
            if (location == 'Location')
            {
               winetablearray[i] = '<tr> '
            }
            else
            {
               winetablearray[i] = '<tr>'
            }
            winetablearray[i] += '<td class="right">' + vintage + '</td>'
                              +  '<td>' + varietal + '</td>'
                              +  '<td>' + winery + '</td>'
                              +  '<td id="' + gpsid + '">' + gps + '</td>'
//                            +  '<td class="right">' + qty + '</td>'
//                            +  '<td class="right">' + maturity + '</td>'
                              +  '</tr>'
                              ;
            break;

         // If sorting by Winery, then column order is:
         // Winery | Varietal | Vintage | Location | Shelf | Slot | Qty | Maturity

         case "4":
            if (location == 'Location')
            {
               winetablearray[i] = '<tr> '
            }
            else
            {
               winetablearray[i] = '<tr>'
            }
            winetablearray[i] += '<td>' + winery + '</td>'
                              +  '<td>' + varietal + '</td>'
                              +  '<td class="right">' + vintage + '</td>'
                              +  '<td id="' + gpsid + '">' + gps + '</td>'
//                            +  '<td class="right">' + qty + '</td>'
//                            +  '<td class="right">' + maturity + '</td>'
                              +  '</tr>'
                              ;
                              break;

      }
   }
   winetablearray.sort();
   text = '';
   text += '<table id="winetable">'


   for (i=0; i<winetablearray.length; i++)
   {
      text += winetablearray[i];
   }


   text += '</table>';


   document.getElementById("winelist").innerHTML = text;
}

// Default sort order on page load is location.
sortlist(1);
