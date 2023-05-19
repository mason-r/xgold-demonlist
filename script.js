class Demon {
  constructor(name, attempts, status, creators, level_id, position, publisher, thumbnail, verifier, video) {
    this.name = name;
    this.attempts = attempts;
    this.status = status;
    this.creators = creators;
    this.level_id = level_id;
    this.position = position;
    this.publisher = publisher;
    this.thumbnail = thumbnail;
    this.verifier = verifier;
    this.video = video;
  }
}

let demons = [
  new Demon("Reflective", 7108, "Completed", "Mojitoz & more", 78831233, "N/A", "Mojitoz", "http://i.ytimg.com/vi/1fzhBT_7Fos/mqdefault.jpg", "Vorgogne", "https://www.youtube.com/watch?v=1fzhBT_7Fos"),
  new Demon("Reanimate", 6851, "Completed", "ilnm & more", 80335620, "N/A", "ilnm", "http://i.ytimg.com/vi/jk-r4_Nctes/mqdefault.jpg", "Nexus", "https://www.youtube.com/watch?v=jk-r4_Nctes"),
  new Demon("Napalm", "unknown", "Completed", "Marwec & more", 65561437, "N/A", "Marwec", "http://i.ytimg.com/vi/ND--Ai4XVfM/mqdefault.jpg", "Luqualizer", "https://www.youtube.com/watch?v=ND--Ai4XVfM"),
  new Demon("Lost Love", 6409, "Completed", "TheBlackHell", 85933508, "N/A", "TheBlackHell", "http://i.ytimg.com/vi/KGh4Fe5SmXc/mqdefault.jpg", "Aespha", "https://www.youtube.com/watch?v=KGh4Fe5SmXc"),
  new Demon("troll level", 8158, "Completed", "lexycat, glitchi & lena", 76196489, "N/A", "lexycat", "http://i.ytimg.com/vi/eqYr6MLwJE4/mqdefault.jpg", "J0HNFREE", "https://www.youtube.com/watch?v=eqYr6MLwJE4"),
  new Demon("Precipitance", 6332, "Completed", "Extravagon", 60197839, "N/A", "Extravagon", "http://i.ytimg.com/vi/_W9xA5lqmLs/mqdefault.jpg", "Extravagon", "https://www.youtube.com/watch?v=_W9xA5lqmLs"),
  new Demon("Acu", 4026, "Completed", "neigefeu", 61079355, "N/A", "neigefeu", "http://i.ytimg.com/vi/z6l74Mkoxm8/mqdefault.jpg", "neigefeu", "https://www.youtube.com/watch?v=z6l74Mkoxm8")
];
let upcomingDemons = [];
let ids = [251, 29];
let upcomingIDs = [235];

function main() {
  let reqPromise = new Promise(function(resolve, reject) {
    function getDemonData(id, type) {
      let request = $.ajax({
        url: "https://pointercrate.com/api/v2/demons/" + id + "/",
        method: "GET"
      });
      request.done(function(data) {
        console.log("API success");
        let currentDemon = new Demon(
          data.data.name, null, null, data.data.creators, data.data.level_id, data.data.position, 
          data.data.publisher.name, data.data.thumbnail, data.data.verifier.name, data.data.video)
        // clean up the data: replace objects/arrays in creators, add attempt values
        switch (currentDemon.name) {
          case "Prismatic Haze":
            currentDemon.attempts = 10557;
            currentDemon.creators = "Cirtrax & Gizbro";
            break;
          case "Triple Six":
            currentDemon.attempts = 10467;
            currentDemon.creators = "Zylenox";
            break;
          case "Digital Disarray":
            currentDemon.creators = "Vlacc, Giron, and Licen"
            break;
        }
        switch (type) {
          case "upcoming":
            currentDemon.status = "Upcoming"
            upcomingDemons.unshift(currentDemon);
            break;
          case "completed":
            currentDemon.status = "Completed"
            demons.unshift(currentDemon);
            break;
          default:
            console.log("getDemonData: bad type error")
        }
      });
      request.fail(function() {
        console.log("API error");
        reject();
      });
    }

    for (let id of ids) {
      getDemonData(id, "completed");
    }
    for (let id of upcomingIDs) {
      getDemonData(id, "upcoming");
    }
    setTimeout(resolve, 1000)
  });
  
  reqPromise.then(function() {
    if (upcomingDemons.length == 0) {
      $("#upcoming-container").append(`
      <p>Nothing right now!</p>`
      )
    } 
    else {
      for (let demon of upcomingDemons) {
        if (demon.video === null) {
          $("#upcoming-container").append(`
          <div class="demon">
            <h1>${demon.name}</h1>
            <h2>By ${demon.creators}</h2>
            <p>Demon list position: ${demon.position}</p>
            <p>Projected list placement: <b>Unknown</b></p>
          </div>`)
        } else {
          $("#upcoming-container").append(`
            <div class="demon">
              <a href=${demon.video} target="_blank"><img src=${demon.thumbnail}></a>
              <h1>${demon.name}</h1>
              <h2>By ${demon.creators}</h2>
              <p>Demon list position: ${demon.position}</p>
              <p>Projected list placement: <b>Unknown</b></p>
            </div>`);
        }
      }
    }
    let demonCounter = 1;
    for (let demon of demons) {
      $("#list-container").append(`
        <div class="demon">
          <a href=${demon.video} target="_blank"><img src=${demon.thumbnail}></a>
          <h1>#${demonCounter}: ${demon.name}</h1>
          <h2>By ${demon.creators}</h2>
          <p>Demon list position: ${demon.position}</p>
          <p>Attempt count: ${demon.attempts}</p>
        </div>`);
      demonCounter++;
    }
  });
}

main();