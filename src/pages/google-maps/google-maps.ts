import { Component, ViewChild, ElementRef } from '@angular/core';
import { Hotspot } from "../../models/hotspot.model";

declare var google;

@Component({
    templateUrl: "google-maps.html"
})
export class GoogleMapsPage {
    @ViewChild("map") mapElement: ElementRef;
    map: any;
    private hotspots: Hotspot[];

    ionViewDidLoad() {
        this.hotspots = [
            { lng: 47.07135311, lat: 15.43756396, label: "H&M Graz Hauptplatz" },
            { lng: 47.07062603, lat: 15.43858856, label: "Rathaus Graz"}
        ];
        this.loadMap();
        this.addDummyMarkers();
    }

    loadMap(): void {
        let latLng = new google.maps.LatLng(47.0712025, 15.4382784);

        let mapOptions = {
            center: latLng,
            zoom: 15,
            mapTypeId: google.maps.MapTypeId.ROADMAP
        }

        this.map = new google.maps.Map(this.mapElement.nativeElement, mapOptions); 
    }

    addDummyMarkers(): void {
        this.hotspots.forEach(x => {
            let latLng = new google.maps.LatLng(x.lng, x.lat);
            let marker = new google.maps.Marker({
                position: latLng,
                map: this.map,
                title: x.label
            });      
        });
    }
}