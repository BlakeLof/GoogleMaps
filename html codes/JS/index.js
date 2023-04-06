// Initialize and add the map
let map;

async function initMap() {
  // The location of Uluru
  const position = { lat: 40.332523096891464, lng:-101.47946541237081 };
  // Request needed libraries.
  //@ts-ignore
  const { Map } = await google.maps.importLibrary("maps");
 

  // The map, centered at Uluru
  map = new Map(document.getElementById("map"), {
    zoom: 5,
    center: position,
    mapId: "DEMO_MAP_ID",
  });
  const places = [
    [{lat: 34.24623095241665, lng: -110.03564896468424 }, "Show Low, AZ"],
    [{lat: 33.30424921878002, lng: -111.68261250667649 }, "Gilbert, AZ"],
    [{lat: 40.7697692105249, lng: -111.90925723832054}, "Salt Lake City, UT"],
    [{lat: 43.816275710458, lng: -111.79161886148178 }, "Rexburg, ID"],
    [{lat: 42.97405165911722, lng: -71.44948951885507}, "Manchester, NH"],
    [{lat: 43.75712969503066, lng: -71.69041364723313 }, "Plymouth, NH"],
    [{lat: 44.42346258691062, lng: -69.00794984732742 }, "Belfast, ME"],
    [{lat: 29.78214782222465, lng: -95.79587874773684}, "Katy, TX"],
    [{lat: 31.132613271673694, lng: -97.41089496733386}, "Temple, TX"],
    [{lat: 33.78115775278111, lng: -118.19624711830852}, "Long Beach, CA"],
    [{lat: 19.434147419856906, lng: -99.18696714269188}, "Ciudad de Mexico, MX"],
    [{lat: 37.75290209782449, lng: -122.42956225111585}, "San Francisco, CA"],
    [{lat: 45.48244878101089, lng: -122.64486465284881}, "Portland, OR"],
    [{lat: 36.23118564594288, lng: -115.19134011645797}, "Las Vegas, NV"],
    [{lat: 32.26858642292672, lng: -110.97127930949662}, "Tucson, AZ"],
    [{lat: 37.3144354103961,  lng: -107.84074088807972}, "Durango, CO"],
    [{lat: 38.56705646802005, lng: -109.52797484244206}, "Moab, UT"],
    [{lat: 32.66488343855343, lng: -93.51534260227301}, "Bellevue, LA"],
    [{lat: 37.063090939051, lng: -113.56799305610198}, "St. George, UT"],
    [{lat: 34.10611578967165, lng: -109.28891818008468}, "Eagar, AZ"],
  ];
  const infoWindow = new google.maps.InfoWindow();
    places.forEach(([position, title], i) => {
        const marker = new google.maps.Marker({
            position,
            map,
            title: `${i+1}. ${title}`,
            label: `${i+1}`,
            optimized: false,
        });

        marker.addListener("click", () => {
            infoWindow.close();
            infoWindow.setContent(marker.getTitle());
            infoWindow.open(marker.getMap(), marker);
        });
    });
 
}

initMap();
