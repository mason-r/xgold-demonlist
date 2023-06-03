class Demon {
  constructor(name, attempts, status, creators, level_id, position, publisher, verifier, thumbnail, video) {
    this.name = name;
    this.attempts = attempts;
    this.status = status;
    this.creators = creators;
    this.level_id = level_id;
    this.position = position;
    this.publisher = publisher;
    this.verifier = verifier;
    this.thumbnail = thumbnail;
    this.video = video;
  }
}

class DemonRanking {
  constructor(rank, name, enjoyment, gp, deco, song, notes=null) {
    this.rank = rank; // rank will need to change as the list updates
    this.name = name;
    this.enjoyment = enjoyment;
    this.gp = gp;
    this.deco = deco;
    this.song = song;
    this.notes = notes;
  }
}

let demons = [
  251,
  29,
  new Demon("Reflective", 7108, "Completed", "Mojitoz & more", 78831233, "N/A", "Mojitoz", "Vorgogne", "http://i.ytimg.com/vi/1fzhBT_7Fos/mqdefault.jpg", "https://www.youtube.com/watch?v=1fzhBT_7Fos"),
  new Demon("Reanimate", 6851, "Completed", "ilnm & more", 80335620, "N/A", "ilnm", "Nexus", "http://i.ytimg.com/vi/jk-r4_Nctes/mqdefault.jpg", "https://www.youtube.com/watch?v=jk-r4_Nctes"),
  new Demon("HURRICANE", 5094, "Completed", "BIANOX & more", 6072693, "N/A", "BIANOX", "Floppy", "http://i.ytimg.com/vi/WQcGIY8_28c/mqdefault.jpg", "https://www.youtube.com/watch?v=WQcGIY8_28c"),
  new Demon("Napalm", "Unknown", "Completed", "Marwec & more", 65561437, "N/A", "Marwec", "Luqualizer", "http://i.ytimg.com/vi/ND--Ai4XVfM/mqdefault.jpg", "https://www.youtube.com/watch?v=ND--Ai4XVfM"),
  new Demon("Lost Love", 6409, "Completed", "TheBlackHell", 85933508, "N/A", "TheBlackHell", "Aespha", "http://i.ytimg.com/vi/KGh4Fe5SmXc/mqdefault.jpg", "https://www.youtube.com/watch?v=KGh4Fe5SmXc"),
  new Demon("troll level", 8158, "Completed", "lexycat, glitchi & lena", 76196489, "N/A", "lexycat", "J0HNFREE", "http://i.ytimg.com/vi/eqYr6MLwJE4/mqdefault.jpg", "https://www.youtube.com/watch?v=eqYr6MLwJE4"),
  190,
  new Demon("Precipitance", 6332, "Completed", "Extravagon", 60197839, "N/A", "Extravagon", "Extravagon", "http://i.ytimg.com/vi/_W9xA5lqmLs/mqdefault.jpg", "https://www.youtube.com/watch?v=_W9xA5lqmLs"),
  new Demon("Acu", 4026, "Completed", "neigefeu", 61079355, "N/A", "neigefeu", "neigefeu", "http://i.ytimg.com/vi/z6l74Mkoxm8/mqdefault.jpg", "https://www.youtube.com/watch?v=z6l74Mkoxm8")
];
let upcomingDemons = [
  69
];

let demonRankings = [
  new DemonRanking(1, "Prismatic Haze", 9.5, 9.5, 8, 8, "Current hardest and current favorite extreme. Always try to play GOOD LEVELS for your hardests!!!"),
  new DemonRanking(2, "Triple Six", 9, 8, 10, 4, 2, "Incredible memory level. Strong epilepsy warning."),
  new DemonRanking(3, "Reflective", 7.5, 5.5, 8, 8.5, "Very annoying predrop, everything else is great."),
  new DemonRanking(4, "Reanimate", 7, 6.5, 8, 9.5, "First extreme demon! The song is the best part, which is usually a red flag, but this song is just so good that it's fine."),
  new DemonRanking(5, "HURRICANE", 7, 8.5, 8, 5, "Littered with chokepoints. All of them are manageable, but still kind of annoying."),
  new DemonRanking(6, "Napalm", 1.5, 3, 7.5, 7, "Current least favorite extreme. I despise this level. A lot of people say it's good, but I just hated it the whole way through."),
  new DemonRanking(7, "Lost Love", 9.5, 9.5, 7.5, 9.5, "Fantastic memory level. I know "),
  new DemonRanking(8, "troll level", 6.5, 8, 6, 7.5, "Predrop is not great, the drop is awesome."),
  new DemonRanking(9, "Retention", 7.5, 8.5, 7, 7, "Has exactly one very annoying chokepoint. Other than that, it's a very fun level."),
  new DemonRanking(10, "Precipitance", 6, 6, 7, 6, "Very average level. This is my easy"),
  new DemonRanking(11, "Acu", 8, 9, 7, 7.5, "Easiest extreme. Somewhat annoying predrop and postdrop, which is the opposite of good balancing.")
]

function generateColorCode(number) {
  let hex;
  switch (number) {
    case 10:
      hex = "33FF00";
      break;
  }
}

$(document).ready(function() {
  $(function() {
    $("#list-button").click(function() {
      $("#list").show();
      $("#ratings").hide()
    });
    $("#ratings-button").click(function() {
      $("#ratings").show();
      $("#list").hide();
    })
  });
  
  async function list() {
    let demonCounter = 1;
    let promises = demons.map(function(currentItem) {
      return new Promise(function(resolve) {
        let currentDemon;
        if (typeof currentItem === "number") {
          $.ajax({
            url: "https://pointercrate.com/api/v2/demons/" + currentItem + "/",
            method: "GET"
          }).done(function(data) {
            currentDemon = new Demon(
              data.data.name,
              null,
              null,
              data.data.creators,
              data.data.level_id,
              data.data.position,
              data.data.publisher.name,
              data.data.verifier.name,
              data.data.thumbnail,
              data.data.video
            );
            // Clean up the data: replace objects/arrays in creators, add attempt values
            switch (currentDemon.name) {
              case "Prismatic Haze":
                currentDemon.attempts = 10557;
                currentDemon.creators = "Cirtrax & Gizbro";
                break;
              case "Triple Six":
                currentDemon.attempts = 10467;
                currentDemon.creators = "Zylenox";
                break;
              case "Retention":
                currentDemon.attempts = 6233;
                currentDemon.creators = "WOOGI1411";
                break;
            }
            resolve(currentDemon);
          }).fail(function() {
            console.log("API error");
            resolve(null); // Resolve with null for failed requests
          });
        } else {
          currentDemon = currentItem;
          resolve(currentDemon);
        }
      });
    });
  
    let results = await Promise.all(promises);
  
    results.forEach(function(currentDemon) {
      if (currentDemon) {
        $("#list-container").append(`
          <div class="demon">
            <a href=${currentDemon.video} target="_blank"><img src=${currentDemon.thumbnail}></a>
            <h1>#${demonCounter}: ${currentDemon.name}</h1>
            <h2>By ${currentDemon.creators}</h2>
            <p>Demon list position: ${currentDemon.position}</p>
            <p>Attempt count: ${currentDemon.attempts}</p>
          </div>`);
        demonCounter++;
      }
    });
  }
  
  async function upcomingList() {
    let promises = upcomingDemons.map(function(currentItem) {
      return new Promise(function(resolve) {
        let currentDemon;
        if (typeof currentItem === "number") {
          $.ajax({
            url: "https://pointercrate.com/api/v2/demons/" + currentItem + "/",
            method: "GET"
          }).done(function(data) {
            currentDemon = new Demon(
              data.data.name,
              null,
              null,
              data.data.creators,
              data.data.level_id,
              data.data.position,
              data.data.publisher.name,
              data.data.verifier.name,
              data.data.thumbnail,
              data.data.video
            );
            // Clean up the data: replace objects/arrays in creators
            switch (currentDemon.name) {
              case "Bloodbath":
                currentDemon.creators = "Riot & more"
            }
            resolve(currentDemon);
          }).fail(function() {
            console.log("API error");
            resolve(null); // Resolve with null for failed requests
          });
        } else {
          currentDemon = currentItem;
          resolve(currentDemon);
        }
      });
    });
  
    let results = await Promise.all(promises);
  
    results.forEach(function(currentDemon) {
      if (currentDemon) {
        $("#upcoming-container").append(`
          <div class="demon">
            <a href=${currentDemon.video} target="_blank"><img src=${currentDemon.thumbnail}></a>
            <h1>${currentDemon.name}</h1>
            <h2>By ${currentDemon.creators}</h2>
            <p>Demon list position: ${currentDemon.position}</p>
            <p>Projected list placement: <b>1</b></p>
          </div>`);
      }
    });
  }
  
  function ratings() {
    // show the demons and their ratings
    // probably order highest to lowest? or most recent? or add an option to reorder?
  }
  
  list();
  upcomingList();
  ratings();
})