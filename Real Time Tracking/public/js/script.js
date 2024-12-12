const socket = io();
if (navigator.geolocation) {
    navigator.geolocation.watchPosition(
        (position) => {
            const { latitude, longitude } = position.coords;
            console.log("Current location:", latitude, longitude); // Verify location
            socket.emit("send-location", { latitude, longitude }); // Send to server
        },
        (error) => {
            console.error("Error fetching location:", error); // Log geolocation errors
        },
        {
            enableHighAccuracy: true,
            timeout: 5000,
            maximumAge: 0,
        }
    );
}


const map = L.map("map").setView([0,0],16);

L.tileLayer("https://a.tile.openstreetmap.org/{z}/{x}/{y}.png",{
    attribution:"MediFlow Tracker"
}).addTo(map);

const markers = {};

socket.on("receive-location",(data) =>{
    const {id,latitude , longitude} = data;
    map.setView([latitude,longitude],);
    if(markers[id]){
        markers[id].setLatLng([latitude,longitude]);
    }
    else{
        markers[id] = L.marker([latitude,longitude]).addTo(map);
    }
});

socket.on("user-disconnected",(id) => {
            if(markers[id]){
                map.removeLayer(markers[id]);
                delete markers[id];
            }
});