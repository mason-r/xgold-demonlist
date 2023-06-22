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

class DemonRating {
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

class ToDo {
  constructor(name, reason, excitement=1) {
    this.name = name;
    this.reason = reason;
    this.excitement = excitement;
  }
}

let demons = [
  69,
  251,
  29,
  new Demon("Reflective", 7108, "Completed", "Mojitoz & more", 78831233, "N/A", "Mojitoz", "Vorgogne", "http://i.ytimg.com/vi/1fzhBT_7Fos/mqdefault.jpg", "https://www.youtube.com/watch?v=1fzhBT_7Fos"),
  new Demon("Reanimate", 6851, "Completed", "ilnm & more", 80335620, "N/A", "ilnm", "Nexus", "http://i.ytimg.com/vi/jk-r4_Nctes/mqdefault.jpg", "https://www.youtube.com/watch?v=jk-r4_Nctes"),
  new Demon("HURRICANE", 5094, "Completed", "BIANOX & more", 6072693, "N/A", "BIANOX", "Floppy", "http://i.ytimg.com/vi/WQcGIY8_28c/mqdefault.jpg", "https://www.youtube.com/watch?v=WQcGIY8_28c"),
  new Demon("Crowd Control", null, "Upcoming", "Deadlox & more", 69491632, "N/A", "Deadlox", "xander", "http://i.ytimg.com/vi/-q0iBUZti9s/mqdefault.jpg", "https://www.youtube.com/watch?v=-q0iBUZti9s"),
  new Demon("Napalm", "Unknown", "Completed", "Marwec & more", 65561437, "N/A", "Marwec", "Luqualizer", "http://i.ytimg.com/vi/ND--Ai4XVfM/mqdefault.jpg", "https://www.youtube.com/watch?v=ND--Ai4XVfM"),
  new Demon("Lost Love", 6409, "Completed", "TheBlackHell", 85933508, "N/A", "TheBlackHell", "Aespha", "http://i.ytimg.com/vi/KGh4Fe5SmXc/mqdefault.jpg", "https://www.youtube.com/watch?v=KGh4Fe5SmXc"),
  new Demon("troll level", 8158, "Completed", "lexycat, glitchi & lena", 76196489, "N/A", "lexycat", "J0HNFREE", "http://i.ytimg.com/vi/eqYr6MLwJE4/mqdefault.jpg", "https://www.youtube.com/watch?v=eqYr6MLwJE4"),
  190,
  new Demon("Precipitance", 6332, "Completed", "Extravagon", 60197839, "N/A", "Extravagon", "Extravagon", "http://i.ytimg.com/vi/_W9xA5lqmLs/mqdefault.jpg", "https://www.youtube.com/watch?v=_W9xA5lqmLs"),
  new Demon("Acu", 4026, "Completed", "neigefeu", 61079355, "N/A", "neigefeu", "neigefeu", "http://i.ytimg.com/vi/z6l74Mkoxm8/mqdefault.jpg", "https://www.youtube.com/watch?v=z6l74Mkoxm8")
];
let upcomingDemons = [
  new Demon("I NEVER DREAM", 0, "Upcoming", "skywalker14", 76931927, "N/A", "skywalker14", "Santiachu", "http://i.ytimg.com/vi/9bumyVCkPiw/mqdefault.jpg", "https://www.youtube.com/watch?v=9bumyVCkPiw")
];

let demonRatings = [
  new DemonRating(1, "Bloodbath", 5, 4, 7, 7.5, "Current hardest and former top 1. Fluked from 52, by far my best fluke to date. This level is very annoyingly balanced, with some parts being \
    WAY harder than others."),
  new DemonRating(2, "Prismatic Haze", 9.5, 9.5, 8, 8, "Former hardest and current favorite extreme. Always try to play GOOD LEVELS for your hardests!!!"),
  new DemonRating(3, "Triple Six", 9, 8, 10, 4, "Incredible memory level. Strong epilepsy warning."),
  new DemonRating(4, "Reflective", 7.5, 5.5, 8, 8.5, "Very annoying predrop, everything else is great."),
  new DemonRating(5, "Reanimate", 7, 6.5, 8, 9.5, "First extreme demon! The song is the best part, which is usually a red flag, but this song is just so good that it's fine."),
  new DemonRating(6, "HURRICANE", 7, 8.5, 8, 5, "Littered with chokepoints. All of them are manageable, but still kind of annoying."),
  new DemonRating(7, "Crowd Control", 6, 6.5, 7, 5.5, "Decent level significantly impacted by its heavy chokepoints. Kind of a chore to play from anywhere, but especially from 0."),
  new DemonRating(8, "Napalm", 1.5, 3, 7.5, 7, "Current least favorite extreme. I despise this level. A lot of people say it's good, but I just hated it the whole way through."),
  new DemonRating(9, "Lost Love", 9.5, 9.5, 7.5, 9.5, "Fantastic memory level. I know "),
  new DemonRating(10, "troll level", 6.5, 8, 6, 7.5, "Predrop is not great, the drop is awesome."),
  new DemonRating(11, "Retention", 7.5, 8.5, 7, 7, "Has exactly one very annoying chokepoint. Other than that, it's a very fun level."),
  new DemonRating(12, "Precipitance", 6, 6, 7, 6, "Very average level. This is my easy"),
  new DemonRating(13, "Acu", 8, 9, 7, 7.5, "Easiest extreme. Somewhat annoying predrop and postdrop, which is the opposite of good balancing.")
];

let toDoList = [
  new ToDo("I NEVER DREAM", "Very good-looking level with strange yet fun gameplay. Currently taking a break from it, expect to see it on the list soon ;)"),
  new ToDo("Reverie", "First of the Ocular Miracle series. I want to beat Ocular Miracle so naturally I want to beat this. Ignore the fact that this is insane demon."),
  new ToDo("Faith", "Second chapter of Ocular Miracle. Same reason as Reverie, except this one actually is extreme demon."),
  new ToDo("Diligence", "Final level of the Ocular Miracle series. Same reason as Faith."),
  new ToDo("Crowd Control", "Seems fun? I don't know, I have to beat this no matter what so I may as well put this here before I beat it"),
  new ToDo("Digital Disarray", "Originally added because it was the last Platinum level. It was moved to Sapphire, but I still want to do it because it looks pretty fun."),
  new ToDo("Concaved Memories", "First Sapphire level and I heard it was good? Not really sure about this one"),
  new ToDo("Agen Wida", "Really cool-looking level that I would do ASAP if it wasn't for the insane wave chokepoint in the middle.", 3),
  new ToDo("BROWNOIX", "Sapphire level that looks like a ton of fun, plus will help with dual skill because the duals are really hard.", 2),
  new ToDo("Fellow Phobia", "Omori XXL level. Looks super cool. I promise I will play omori soon I promise", 2),
  new ToDo("KINGSLAYER", "Nice decoration and a cool song. I honestly forget why I put this here but it must have been for a good reason"),
  new ToDo("U235", "I'm told this is one of the most fun extreme demons out there. Hopefully that's true."),
  new ToDo("Glide", "Really good song and decoration. I'm concerned about the balancing but it should be fine. <sup>we used to glide</sup>"),
  new ToDo("Maybe Possibly Thing", "Funny memory level. I like memory and this looks like a good one!"),
  new ToDo("SorryForPartyRocking", "Really good all around. Currently taking a break from this as well. I'll probably beat it later.", 2),
  new ToDo("cave of heart", "Looks like a cool memory level. I don't know too much about this one since I just watched a video of it once"),
  new ToDo("Motorbreath", "Metallica song"),
  new ToDo("Quaoar", "I actually wanted to do this for my first extreme because it looked so good. Good thing I did NOT do that."),
  new ToDo("Blade of Justice", "I've heard from everyone that this is the best-aged extreme ever, and the practice runs I've done definitely agree.", 2),
  new ToDo("Overtime", "Really fun level with a very nostalgic song. Thanks mr123j for the recommendation"),
  new ToDo("Faded Dream", "Absolutely mesmerizing memory level. Just stunning. I hope the gameplay is as good as the decoration", 2),
  new ToDo("Boogie", "I'm pretty sure I put this in just because it's XXL. I don't remember why this is here. Help me"),
  new ToDo("SPEEDRUN", "Banger song, and the gameplay looks really fun too."),
  new ToDo("The Sulphur Sea", "One of the most incredible-looking levels I've ever seen. Plus this gets bonus points for Terraria."),
  new ToDo("RASH", "I've been repeatedly recommended this since I started beating extremes, so here it is. I don't know if I'll ever actually do this."),
  new ToDo("Worse Trip", "Very trippy memory level. Looks like a lot of fun.", 3),
  new ToDo("Black Blizzard", "VERY good-looking level with an extremely fun drop. The predrop is considerably less fun.", 3)
];

function generateColorCode(num) {
  let hex;
  switch (num) {
    case 10:
      hex = "33FF00";
      break;
    case 9.5: 
      hex = "4CFF00";
      break;
    case 9: 
      hex = "66FF00";
      break;
    case 8.5:
      hex = "7FFF00";
      break;
    case 8:
      hex = "99FF00";
      break;
    case 7.5:
      hex = "B2FF00";
      break;
    case 7:
      hex = "CCFF00";
      break;
    case 6.5:
      hex = "E5FF00";
      break;
    case 6:
      hex = "FFFF00";
      break;
    case 5.5:
      hex = "FFE600";
      break;
    case 5:
      hex = "FFCC00";
      break;
    case 4.5:
      hex = "FFB300";
      break;
    case 4:
      hex = "FF9900";
      break;
    case 3.5:
      hex = "FF8000";
      break;
    case 3:
      hex = "FF6600";
      break;
    case 2.5:
      hex = "FF4D00";
      break;
    case 2:
      hex = "FF3300";
      break;
    case 1.5:
      hex = "FF1A00";
      break;
    case 1:
      hex = "FF0000";
      break;
    case 0.5:
      hex = "E60000";
      break;
    case 0:
      hex = "CC0000";
      break;
    default:
      hex = "FFFFFF";
  }
  return hex;
}

$(document).ready(function() {
  $(function() {
    $("#list-button").click(function() {
      $("#list").show();
      $("#ratings").hide();
      $("#todo").hide();
    });
    $("#ratings-button").click(function() {
      $("#ratings").show();
      $("#list").hide();
      $("#todo").hide();
    })
    $("#todo-button").click(function() {
      $("#todo").show();
      $("#list").hide();
      $("#ratings").hide();
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
              case "Bloodbath":
                currentDemon.attempts = 13828;
                currentDemon.creators = "Riot & more";
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
    if (upcomingDemons.length > 0) {
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
              <p>Projected list placement: <b>Unknown</b></p>
            </div>`);
        }
      });
    }
    else {
      $("#upcoming-container").append(`<p>Nothing right now!</p>`)
    }
  }
  
  function ratings() {
    // probably order highest to lowest? or most recent? or add an option to reorder?
    for (let demon of demonRatings) {
      $("#ratings").append(`
      <div class="demon">
        <h1>${demon.name}</h1>
        <p style="background-color:#${generateColorCode(demon.enjoyment)};">Enjoyment: ${demon.enjoyment} / 10</p>
        <p style="background-color:#${generateColorCode(demon.gp)};">Gameplay: ${demon.gp} / 10</p>
        <p style="background-color:#${generateColorCode(demon.deco)};">Decoration: ${demon.deco} / 10</p>
        <p style="background-color:#${generateColorCode(demon.song)};">Song: ${demon.song} / 10</p>
        <p>${demon.notes}</p>
      `)
    }
  }
  
  list();
  upcomingList();
  ratings();
})