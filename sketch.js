function myFunction() {
  var Teams = [
{
  "rank": "1",
  "handle": "KuetEffervescent",
  "rating": "1964",
  "contest_count": "4",
  "rating_change": "34",
  "last_contest": "3"
},
{
  "rank": "2",
  "handle": "KUET_BreakDown",
  "rating": "1716",
  "contest_count": "4",
  "rating_change": "62",
  "last_contest": "3"
},
{
  "rank": "3",
  "handle": "KUET_FALCONS",
  "rating": "1699",
  "contest_count": "4",
  "rating_change": "-3",
  "last_contest": "3"
},
{
  "rank": "4",
  "handle": "KUET_Blaziken",
  "rating": "1633",
  "contest_count": "4",
  "rating_change": "67",
  "last_contest": "3"
},
{
  "rank": "5",
  "handle": "KUET_Sisyphus",
  "rating": "1516",
  "contest_count": "1",
  "rating_change": "1516",
  "last_contest": "3"
},
{
  "rank": "6",
  "handle": "KUET_Musashis",
  "rating": "1481",
  "contest_count": "4",
  "rating_change": "-20",
  "last_contest": "3"
},
{
  "rank": "7",
  "handle": "KUET_BUGMAN",
  "rating": "1447",
  "contest_count": "4",
  "rating_change": "56",
  "last_contest": "3"
},
{
  "rank": "8",
  "handle": "KUET_Mayhem",
  "rating": "1358",
  "contest_count": "1",
  "rating_change": "1358",
  "last_contest": "3"
},
{
  "rank": "9",
  "handle": "KUET_Desperados",
  "rating": "1330",
  "contest_count": "1",
  "rating_change": "1330",
  "last_contest": "3"
},
{
  "rank": "10",
  "handle": "trinityRaven",
  "rating": "1273",
  "contest_count": "1",
  "rating_change": "1273",
  "last_contest": "1"
},
{
  "rank": "11",
  "handle": "Team_Phoenix",
  "rating": "1246",
  "contest_count": "4",
  "rating_change": "67",
  "last_contest": "3"
},
{
  "rank": "12",
  "handle": "Team_Blackburn",
  "rating": "1231",
  "contest_count": "1",
  "rating_change": "1231",
  "last_contest": "2"
},
{
  "rank": "13",
  "handle": "KUET_Crusaders",
  "rating": "1090",
  "contest_count": "1",
  "rating_change": "1090",
  "last_contest": "3"
},
{
  "rank": "14",
  "handle": "Loop_Breakers",
  "rating": "1043",
  "contest_count": "1",
  "rating_change": "1043",
  "last_contest": "2"
},
{
  "rank": "15",
  "handle": "KUET_LAZYCODERS",
  "rating": "1027",
  "contest_count": "1",
  "rating_change": "1027",
  "last_contest": "3"
},
{
  "rank": "16",
  "handle": "ShowStoppers",
  "rating": "951",
  "contest_count": "1",
  "rating_change": "951",
  "last_contest": "2"
},
{
  "rank": "17",
  "handle": "KUET_EXPLORERS",
  "rating": "946",
  "contest_count": "1",
  "rating_change": "946",
  "last_contest": "1"
},
{
  "rank": "18",
  "handle": "KUET_Yeti",
  "rating": "934",
  "contest_count": "1",
  "rating_change": "934",
  "last_contest": "3"
}
]

  // EXTRACT VALUE FOR HTML HEADER. 
  // ('Book ID', 'Book Name', 'Category' and 'Price')
  var col = [];
  for (var i = 0; i < Teams.length; i++) {
      for (var key in Teams[i]) {
          if (col.indexOf(key) === -1) {
              col.push(key);
          }
      }
  }

  // CREATE DYNAMIC TABLE.
  var table = document.createElement("table");

  // CREATE HTML TABLE HEADER ROW USING THE EXTRACTED HEADERS ABOVE.

  var tr = table.insertRow(-1);                   // TABLE ROW.

  for (var i = 0; i < col.length; i++) {
      var th = document.createElement("th");      // TABLE HEADER.

      console.log(typeof(col[i][0]));
      console.log(col[i][0]);
      //col[i] = col[i][0].toUpperCase() + col[i].slice(1);
      if( i==5){
        th.innerHTML =col[i][0].toUpperCase() + col[i].slice(1)+"_ID";

      }
      else
      th.innerHTML =col[i][0].toUpperCase() + col[i].slice(1);
      tr.appendChild(th);
  }

  // ADD JSON DATA TO THE TABLE AS ROWS.
  for (var i = 0; i < Teams.length; i++) {

      tr = table.insertRow(-1);

      for (var j = 0; j < col.length; j++) {
          var tabCell = tr.insertCell(-1);

          if(j==1){
            var link_ = "./teaminfo.html?id="+Teams[i][col[j]];
            var li = "<a href="+link_+">"+Teams[i][col[j]]+"</a>";
            tabCell.innerHTML = li;

          }
          else if(j==4){
            if(Teams[i][col[j]]==Teams[i][col[2]]){
              tabCell.innerHTML = "0";
            }
            else 
            tabCell.innerHTML = Teams[i][col[j]];
          }
          else
          tabCell.innerHTML = Teams[i][col[j]];
      }
  }

  // FINALLY ADD THE NEWLY CREATED TABLE WITH JSON DATA TO A CONTAINER.
  var divContainer = document.getElementById("showData");
  divContainer.innerHTML = "";
  divContainer.appendChild(table);
};