// AIzaSyC5q16sgxAl04JVOa50_k_oNjN2bJ0Gnkk

//map options
function initMap(){
    var options = {
        zoom:5.5,
        center:{lat:-41,lng:173}
    }

    //new map object
    var map= new google.maps.Map(document.getElementById('map'),options);
    // const image= "https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png";


    //listen for click on map
    google.maps.event.addListener(map,'click',function(event){
        addMarker({coords:event.latLng});
    });

    var markers = [
    {
        coords:{lat:-45.031162,lng:168.662643},
        content: 'Bungy Skydive Fregburger'
    },
    {
        coords:{lat:-35.0424258,lng:173.1754627},
        content:'Nighty Mile Beach Start Point'
    },
    {
        coords:{lat:-34.5269262, lng:172.7279279},
        content:'Nighty Mile Beach End point'
    },
    {
        coords:{lat:-34.5269262, lng:172.7279279},
        content:'Nighty Mile Beach End point'
    },
    {
        coords:{lat:-35.8090930, lng:173.6612216},
        content:'Pine Beach, stunning lake just like beach with white sand'
    },
    {
        coords:{lat:-45.8379515, lng: 170.6178581},
        content:'Fur seals and rare penguins allover the coast, Roads and lights lined up neated, Cheeries!'
    },
    {
        coords:{lat:-38.1379194, lng:176.2583159},
        content:'Hot springs! Yamato Japanese Restaurant, Skyline ruge, blue lake'
    },
    {
        coords:{lat:-44.0032737, lng: 170.4821917},
        content:'Church od the Good Shepherd, gorgeous starry sky'
    },
    {
        coords:{lat:-39.5055058, lng:176.9180566},
        content:'Napier Beautiful small town along the coast'
    },
    {
        coords:{lat:-44.6707584, lng:167.9288213},
        content:'Milford Sound, cruise heading out to ocean and take a helicopter back to Queenstown!'
    },
    {
        coords:{lat:44.7367453, lng:-92.8592767},
        content:'The biggest water park in NZ? disapponited!'
    },
    {
        coords:{lat:-35.4078373, lng:173.8575875},
        content:'Ngawha Hot spring The best natural pools ever!'
    },
    {
        coords:{lat:-36.6065428, lng:174.8110015},
        content:'Golf harbour limit 50 clams per person!'
    },
    {
        coords:{lat:-35.2838924, lng:174.0949700},
        content:'Paihia Cruise to the hole in the Rock, have chances to see donphies! Better drink tons of ginger beer...'
    }
    ];

    //loop through
    for(var i = 0; i < markers.length;i++){
        addMarker(markers[i]);
    }

    // marker function
    function addMarker(props){
        //new marker
        var marker= new google.maps.Marker({
            position:props.coords,
            map:map
        });

        //check if has info
        if(props.content){
            var infoWindow= new google.maps.InfoWindow({
                content:props.content
            });

            marker.addListener('click',function(){
                infoWindow.open(map,marker);
            });
        }

    }



}

