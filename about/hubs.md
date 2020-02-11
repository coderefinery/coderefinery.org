---
layout: master
include: content
title: 'Training hubs'
---

<div class="row">
  <div class="col-sm-6">
    <p>
    Institutions can become active partners (training hubs), so that they provide regular
    training for there areas.  Hubs have at least one local instructor
    committed to organizing a workshop at least once a year, and then.
    </p>
  </div>
  <div class="col-sm-6">
  <div id="mapid" style="width: 300px; height: 200px;"></div>
  <script>
      var map_hubs = L.map('mapid').setView([61.0, 15.0], 4);

      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {}).addTo(map_hubs);

      let hubs = [
          {lat: 59.348442, lon: 18.072857, title: 'KTH/PDC Stockholm'},
          {lat: 59.943530, lon: 10.717122, title: 'University of Oslo/ USIT'},
          {lat: 60.186802, lon: 24.821555, title: 'Aalto University'},
          {lat: 63.415677, lon: 10.405992, title: 'NTNU Trondheim'},
      ];

      for (const hub of hubs){
          marker = L.circleMarker([hub.lat, hub.lon], {radius: 15}).addTo(map_hubs);
          marker.bindPopup(hub.title);
          marker.on('mouseover', function (e) {
              this.openPopup();
          });
          marker.on('mouseout', function (e) {
              this.closePopup();
          });
      }
  </script>
  </div>
</div>


## Current hubs

* Aalto University, Helsinki region, sponsored by [Aalto Scientific
  Computing](https://scicomp.aalto.fi/).
  Workshops every May (Helsinki)/December (Aalto) in partnership with
  the University of Helsinki.
* KTH, Stockholm, sponsored by [PDC](https://www.pdc.kth.se/).
  Workshops every March-April and October-November.
* NTNU, Trondheim. Workshops every February and November.
* University of Oslo. Workshops every June (and possibly more).


## Become a hub

There is no particular application process here: one simply sponsors a
first workshop, then a second, and then eventually it becomes a
regular thing.  There should be at least one local instructor who can
regularly take part in other CodeRefinery activities and several
helpers.

To get started, consider attending another workshop as a helper
(optional), then [request a workshop](/workshops/), then [join our
chat and become an instuructor](/get-involved/).  When you would like
to be add to the list above, send a pull request.

## Hub cooperation

As part of the CodeRefinery sustainably plan, we hope that hubs can
share instructors in-kind: since a workshop needs at least two or
three instructors, instructors can travel between hubs so that we
maintain community, share knowledge, and continue workshops.
