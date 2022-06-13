


google.charts.load('current', {packages: ['corechart', 'line']});

function drawBackgroundColor(getdata) {
    var data = new google.visualization.DataTable();
    data.addColumn('number', 'X');
    data.addColumn('number', 'Dogs');

    var tempdata = [];
    var c = []
    //tempdata.push(c);

    for( var i =0;i<getdata.length;i++)
    {
        var val = getdata[i];
        if(val=="0"){
            continue;
        }
        else{
            var point = [i+1, parseInt(val)];
            console.log(typeof(val));
            tempdata.push(point);
        }
    }

    console.log(tempdata);
    data.addRows(tempdata);


    var options = {
      hAxis: {
        title: 'Contest No.'
      },
      vAxis: {
        title: 'Rating'
      },
      backgroundColor: '#f1f8e9'
    };

    var chart = new google.visualization.LineChart(document.getElementById('chart_div'));
    chart.draw(data, options);
  }



function loaddata(str) {

    console.log(typeof(str));
    var Teams_ratings = [
        {
            "handle": "name",
            "1": "RUET practice - 01",
            "2": "RUET practice - 02",
            "3": "RUET practice - 03",
            "4": "ICPC Collaborative - 26"
        },
        {
            "handle": "KuetEffervescent",
            "1": "1757",
            "2": "1874",
            "3": "1930",
            "4": "1964"
        },
        {
            "handle": "KUET_BreakDown",
            "1": "1483",
            "2": "1642",
            "3": "1654",
            "4": "1716"
        },
        {
            "handle": "KUET_FALCONS",
            "1": "1595",
            "2": "1621",
            "3": "1702",
            "4": "1699"
        },
        {
            "handle": "KUET_Blaziken",
            "1": "1177",
            "2": "1431",
            "3": "1566",
            "4": "1633"
        },
        {
            "handle": "KUET_Sisyphus",
            "1": "0",
            "2": "0",
            "3": "0",
            "4": "1516"
        },
        {
            "handle": "KUET_Musashis",
            "1": "1386",
            "2": "1458",
            "3": "1501",
            "4": "1481"
        },
        {
            "handle": "KUET_BUGMAN",
            "1": "1289",
            "2": "1338",
            "3": "1391",
            "4": "1447"
        },
        {
            "handle": "KUET_Mayhem",
            "1": "0",
            "2": "0",
            "3": "0",
            "4": "1358"
        },
        {
            "handle": "KUET_Desperados",
            "1": "0",
            "2": "0",
            "3": "0",
            "4": "1330"
        },
        {
            "handle": "trinityRaven",
            "1": "0",
            "2": "1273",
            "3": "0",
            "4": "0"
        },
        {
            "handle": "Team_Phoenix",
            "1": "1015",
            "2": "1114",
            "3": "1179",
            "4": "1246"
        },
        {
            "handle": "Team_Blackburn",
            "1": "0",
            "2": "",
            "3": "1231",
            "4": "0"
        },
        {
            "handle": "KUET_Crusaders",
            "1": "0",
            "2": "",
            "3": "0",
            "4": "1090"
        },
        {
            "handle": "Loop_Breakers",
            "1": "0",
            "2": "",
            "3": "1043",
            "4": "0"
        },
        {
            "handle": "KUET_LAZYCODERS",
            "1": "0",
            "2": "",
            "3": "0",
            "4": "1027"
        },
        {
            "handle": "ShowStoppers",
            "1": "0",
            "2": "",
            "3": "951",
            "4": "0"
        },
        {
            "handle": "KUET_EXPLORERS",
            "1": "0",
            "2": "946",
            "3": "0",
            "4": "0"
        },
        {
            "handle": "KUET_Yeti",
            "1": "0",
            "2": "",
            "3": "0",
            "4": "934"
        }
    ];

    var col = [];
    for (var i = 0; i < Teams_ratings.length; i++) {
        var f = 0;
       // console.log(Teams_ratings[i]);
        for (var key in Teams_ratings[i]) {
            if (col.indexOf(key) === -1) {
                col.push(key);
               // if(f==0)
               // console.log(key);
                f=1;
            }
        }
    }



    var data = [];

  //  console.log("\n\n\n\n"+str+"  : "+col.length);


    for (var i = 0; i < Teams_ratings.length; i++) {
      //  console.log(Teams_ratings[i][col[4]]);
        if (Teams_ratings[i][col[4]] == str) {
            for (var j = 0; j < col.length-1; j++) {

                data.push(Teams_ratings[i][col[j]]);
                console.log(Teams_ratings[i][col[j]]);
            }
            console.log("paisi");
            break;
        }
    }
   // console.log(data.length);

    return data;
};


function indiFunction() {

   

    var myParam = location.search.split('id=')[1];
    var data = loaddata(myParam);
    console.log(data.length);
    google.charts.load('current', {packages: ['corechart', 'line']});

    google.charts.setOnLoadCallback(drawBackgroundColor(data));
    // for( var i in data){
    //     console.log(i);
    // }
    document.getElementById("Team_name").innerHTML = myParam + " ";


};
