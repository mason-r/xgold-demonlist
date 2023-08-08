class Demon {
  constructor(name, date, attempts, creators, position, thumbnail, video) {
    this.name = name;
    this.date = date;
    this.attempts = attempts;
    this.creators = creators;
    this.position = position;
    this.thumbnail = thumbnail;
    this.video = video;
  }
}

class DemonRating {
  constructor(name, enjoyment, gp, deco, song, notes=null) {
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
  70,
  69,
  251,
  29,
  new Demon("moment", "8/1/2023", 8024, "lexycat & icedcave", "N/A", "http://i.ytimg.com/vi/bLfKsN4NCNY/mqdefault.jpg", "https://www.youtube.com/watch?v=bLfKsN4NCNY"),
  new Demon("Motorbreath", "8/6/2023", 9370, "TwisterDude161", "N/A", "http://i.ytimg.com/vi/R41Yj8XpMhM/mqdefault.jpg", "https://www.youtube.com/watch?v=R41Yj8XpMhM"),
  new Demon("U235", "7/15/2023", 8249, "oleki", "N/A","http://i.ytimg.com/vi/eGwXAJej5WU/mqdefault.jpg", "https://www.youtube.com/watch?v=eGwXAJej5WU"),
  new Demon("BROWNOIX", "7/1/2023", 8084, "ArtaxFerSarh & more", "N/A", "http://i.ytimg.com/vi/nnJuOHHseaE/mqdefault.jpg", "https://www.youtube.com/watch?v=nnJuOHHseaE"),
  new Demon("Reflective", "2/20/2023", 7108, "Mojitoz & more", "N/A", "http://i.ytimg.com/vi/1fzhBT_7Fos/mqdefault.jpg", "https://www.youtube.com/watch?v=1fzhBT_7Fos"),
  new Demon("Reanimate", "1/18/20023", 6851, "ilnm & more", "N/A", "http://i.ytimg.com/vi/jk-r4_Nctes/mqdefault.jpg", "https://www.youtube.com/watch?v=jk-r4_Nctes"),
  new Demon("HURRICANE", "5/4/2023", 5094, "BIANOX & more", "N/A", "http://i.ytimg.com/vi/WQcGIY8_28c/mqdefault.jpg", "https://www.youtube.com/watch?v=WQcGIY8_28c"),
  new Demon("I NEVER DREAM", "6/25/2023", 3948, "skywalker14", "N/A", "http://i.ytimg.com/vi/9bumyVCkPiw/mqdefault.jpg", "https://www.youtube.com/watch?v=9bumyVCkPiw"),
  new Demon("Crowd Control", "6/22/2023", 4909, "Deadlox & more", "N/A", "http://i.ytimg.com/vi/-q0iBUZti9s/mqdefault.jpg", "https://www.youtube.com/watch?v=-q0iBUZti9s"),
  new Demon("Napalm", "3/6/2023", "Unknown", "Marwec & more", "N/A", "http://i.ytimg.com/vi/ND--Ai4XVfM/mqdefault.jpg", "https://www.youtube.com/watch?v=ND--Ai4XVfM"),
  new Demon("Dismal Duststorm", "7/6/2023", 3425, "Multiverse55", "N/A","http://i.ytimg.com/vi/l-hYBdrM0bc/mqdefault.jpg", "https://www.youtube.com/watch?v=l-hYBdrM0bc"),
  new Demon("Lost Love",  "3/6/2023", 6409,"TheBlackHell", "N/A", "http://i.ytimg.com/vi/KGh4Fe5SmXc/mqdefault.jpg", "https://www.youtube.com/watch?v=KGh4Fe5SmXc"),
  new Demon("troll level", "2/1/2023", 8158, "lexycat, glitchi & lena", "N/A", "http://i.ytimg.com/vi/eqYr6MLwJE4/mqdefault.jpg", "https://www.youtube.com/watch?v=eqYr6MLwJE4"),
  190,
  new Demon("Precipitance", "4/26/2023", 6332, "Extravagon", "N/A","http://i.ytimg.com/vi/_W9xA5lqmLs/mqdefault.jpg", "https://www.youtube.com/watch?v=_W9xA5lqmLs"),
  new Demon("Acu", "1/28/2023", 4026, "neigefeu", "N/A", "http://i.ytimg.com/vi/z6l74Mkoxm8/mqdefault.jpg", "https://www.youtube.com/watch?v=z6l74Mkoxm8")
];
let upcomingDemons = [
  242
];

let demonRatings = [
  new DemonRating("Blade of Justice", 10, 9.5, 7.5, 7.5, "Current hardest extreme. This is the most fun I have ever had with a level. This is also definitely my favorite hardest so far."),
  new DemonRating("Bloodbath", 5, 4, 7, 7.5, "Former hardest and former top 1. Fluked from 52%, by far my best fluke to date. This level is very annoyingly balanced, with some parts being \
    WAY harder than others."),
  new DemonRating("Prismatic Haze", 9.5, 9.5, 8, 8, "Former hardest extreme demon. Always try to play GOOD LEVELS for your hardests!!!"),
  new DemonRating("Triple Six", 9, 8, 10, 6, "Incredible memory level. Strong epilepsy warning."),
  new DemonRating("moment", 4, 5.5, 7.5, 8, "This level is pretty fun, but the absurd chokepoints scattered throughout the level bring it down a lot. I really like a lot of the gameplay, but I \
    also REALLY hate the chokepoints."),
  new DemonRating("Motorbreath", 5.5, 6.5, 8, 9, "This has an extremely difficult predrop and a very easy second half. This level got pretty boring, but the gameplay was fun despite it being \
    unbalanced. This also gets bonus points for the song."),
  new DemonRating("U235", 7.5, 9, 8, 6.5, "I raced this with 8 people and placed 4th! Very fun level, though the first half gets somewhat annoying after too long."),
  new DemonRating("BROWNOIX", 8.5, 9, 8, 5.5, "Very fun level with super cool dual gameplay. The first half is quite heavy."),
  new DemonRating("Reflective", 7.5, 5.5, 8, 8.5, "Very annoying predrop, everything else is great."),
  new DemonRating("Reanimate", 7, 6.5, 8, 9.5, "First extreme demon! The song is the best part, which is usually a red flag, but this song is just so good that it's fine."),
  new DemonRating("HURRICANE", 7, 8.5, 8, 5, "Littered with chokepoints. All of them are manageable, but still kind of annoying."),
  new DemonRating("I NEVER DREAM", 7, 7.5, 10, 7, "Absolutely gorgeous level with very strange yet fun gameplay. The first half is WAY harder than the second."),
  new DemonRating("Crowd Control", 6, 6.5, 7, 5.5, "Decent level significantly impacted by its heavy chokepoints. Kind of a chore to play from anywhere, but especially from 0."),
  new DemonRating("Napalm", 1.5, 3, 7.5, 7, "Current least favorite extreme. I despise this level. A lot of people say it's good, but I just hated it the whole way through."),
  new DemonRating("Dismal Duststorm", 8, 9, 10, 8.5, "Awesome desert-themed demon with extremely good decoration. I got very unlucky, but still enjoyed the level a lot."),
  new DemonRating("Lost Love", 9.5, 9.5, 7.5, 9.5, "Fantastic memory level and definitely one of my favorite extremes ever."),
  new DemonRating("troll level", 6.5, 8, 6, 7.5, "Predrop is not great, the drop is awesome."),
  new DemonRating("Retention", 7.5, 8.5, 7, 7, "Has exactly one very annoying chokepoint. Other than that, it's a very fun level."),
  new DemonRating("Precipitance", 6, 6, 7, 6, "Very average level. This is my easy"),
  new DemonRating("Acu", 8, 9, 7, 7.5, "Easiest extreme. Somewhat annoying predrop and postdrop, which is the opposite of good balancing.")
];

let toDoList = [
  new ToDo("Cat Planet", "I tried this level and liked it, then decided to do Retention instead. I'll come back to this eventually."),
  new ToDo("Reverie", "First of the Ocular Miracle series. I want to beat Ocular Miracle, so naturally I want to beat this."),
  new ToDo("Faith", "Second chapter of Ocular Miracle. Same reason as Reverie, except this one actually is extreme demon."),
  new ToDo("Diligence", "Final level of the Ocular Miracle series. Same reason as Faith."),
  new ToDo("Digital Disarray", "Originally added because it was the last Platinum level. It was moved to Sapphire, but I still want to do it because it looks pretty fun."),
  new ToDo("Concaved Memories", "First Sapphire level and I heard it was good? Not really sure about this one"),
  new ToDo("Agen Wida", "Really cool-looking level that I would do ASAP if it wasn't for the insane wave chokepoint in the middle.", 3),
  new ToDo("Fellow Phobia", "Omori XXL level. Looks super cool. I promise I will play omori soon I promise", 2),
  new ToDo("KINGSLAYER", "Nice decoration and a cool song. I honestly forget why I put this here but it must have been for a good reason"),
  new ToDo("Glide", "Really good song and decoration. I'm concerned about the balancing, but it should be fine. <sup>we used to glide</sup>"), // among the fireflies
  new ToDo("Maybe Possibly Thing", "Funny memory level. I like memory and this looks like a good one!"),
  new ToDo("SorryForPartyRocking", "Really good all around. Currently taking a break from this as well. I'll probably beat it later.", 2),
  new ToDo("cave of heart", "Looks like a cool memory level. I don't know too much about this one since I just watched a video of it once"),
  new ToDo("Motorbreath", "This level uses a Metallica song very well. Looks like a blast to play."),
  new ToDo("troll level two", "Upcoming sequel to troll level. This looks like one of the funniest levels ever. I loved troll level, so I'll definitely adore its sequel.", 4),
  new ToDo("Quaoar", "I actually wanted to do this for my first extreme because it looked so good. Good thing I did NOT do that."),
  new ToDo("Overtime", "Really fun level with a very nostalgic song. Thanks mr123j for the recommendation"),
  new ToDo("Faded Dream", "Absolutely mesmerizing memory level. Just stunning. I hope the gameplay is as good as the decoration", 2),
  new ToDo("Belloq", "Really cool-looking level with a great song and tons of music sync. I've heard the gameplay isn't as good, but hopefully everything else will make up for it."),
  new ToDo("Boogie", "I'm pretty sure I put this in just because it's XXL. I don't remember why this is here. Help me"),
  new ToDo("SPEEDRUN", "Banger song, and the gameplay looks really fun too."),
  new ToDo("The Sulphur Sea", "One of the most incredible-looking levels I've ever seen. Plus this gets bonus points for Terraria."),
  new ToDo("RASH", "I've been repeatedly recommended this since I started beating extremes, so here it is. I don't know if I'll ever actually do this."),
  new ToDo("Worse Trip", "Very trippy memory level. Looks like a lot of fun.", 3),
  new ToDo("Black Blizzard", "VERY good-looking level with an extremely fun drop. The predrop is considerably less fun.", 3),
  new ToDo("Audio Expulsion", "Looks like it has really fun gameplay at least. Not sure about decoration or song."),
  new ToDo("Auditory Breaker", "Very cool remake of Sonic Wave. If I want to do Sonic Wave, I might do this as well."),
  new ToDo("Black Flag", "This is really just here because it looks SO GOOD."),
  new ToDo("Crystal", "Uses one of my favorite songs and looks like it has really fun gameplay.", 2),
  new ToDo("Glitzy Bozo Land", "The only unrated extreme on here. The gameplay gimmick is super cool, and I love the kaizo theme."),
  new ToDo("Ziroikabi", "Probably pretty fun? Plus it's in GDDP Emerald tier, which makes me want to do it a bit more."),
  new ToDo("Ethereal Artifice", "Absolutely amazing level all-around. npesta has repeatedly sung its praises, and I don't think he'll be wrong about this one.", 3),
  new ToDo("ConFusion", "Apparently the best memory level ever. I like memory gameplay, so this will be worth a shot."),
  new ToDo("Night Rider", "I ADORE the design of this level throughout the entire thing. I just hope the gameplay can match it.", 2),
  new ToDo("Nightmare Chasm", "Sequel to Titan Complex. Actually easier than TC, and apparently way more fun too."),
  new ToDo("Killbot", "Everyone knows Killbot. I love memory, and I think this will be a good experience."),
  new ToDo("vaenstep", "I do not remember why I put this here. Literally no clue. Apparently I want to do it though."),
  new ToDo("Bitcrusher", "Cool-looking memory level, somewhat similar in theme to Killbot. Another memory level I put here because I like memory."),
  new ToDo("WOW", "Extremely high-CPS and sync-based level. I love the song and the gameplay style. I can't wait to beat this someday!", 4),
  new ToDo("super probably level", "Pretty funny memory level that I may not end up doing after all. I did one practice run of it and it took a long time."),
  new ToDo("Chromatic Haze", "Sequel to Prismatic Haze, one of my favorite extreme demons. The gameplay and decoration are similar, so I think I'll definitely enjoy this one too.", 3),
  new ToDo("Ocular Miracle", "A level that takes you on a journey. The level is VERY long, so it'll be a good nerve control/stamina challenge.", 2),
  new ToDo("Sunset Sandstorm", "Super cool memory level that perfectly does the song justice. The predrop is half of the level, so that might get annoying."),
  new ToDo("Kuzureta", "Femboy demon"),
  new ToDo("Sonic Wave", "I want to do this purely for the nostalgia and the level's history. I know that's not a good reason, and I know I won't enjoy the level much either.", 0),
  new ToDo("Shutdown", "I LOVE Oli gameplay. Ulon was a total blast, and from what it looks like, this level is basically just much harder Ulon.", 2),
  new ToDo("Wasureta", "Femboy demon"),
  new ToDo("Requiem", "Holy shit", 4),
  new ToDo("Storming Summit", "Of course I have to do the only Celeste-themed level on the demon list. I LOVE CELESTE!!!!!!", 3),
  new ToDo("Kowareta", "Femboy demon"),
  new ToDo("Nhelv", "Extremely cool-looking memory/learny level. I really love the design of this level.", 2),
  new ToDo("RUTHLESS", "Absolutely gorgeous extreme demon. From what I hear, the gameplay doesn't quite get to the level that the decoration does.", 2),
  new ToDo("RUST", "Very interesting gameplay and one of my favorite songs. The structuring is simple, but works surprisingly well.", 3),
  new ToDo("Esfera", "Oddly nostalgic Korean megacollab. This level is also very long, but the gameplay looks very unique and fun."),
  new ToDo("Kenos", "I can't have watched npesta for so long and not wanted to beat Kenos."),
  new ToDo("Zodiac", "Likely the best Top 1 we've ever had. The balancing seems pretty annoying, but the gameplay looks pretty fun."),
  new ToDo("Verdant Landscape", "One of the best extremes ever made, according to many. I can't ignore that reputation.", 2),
  new ToDo("Oblivion", "Awesome song, good gameplay, nice decoration. I really like the gameplay style, and the song is just SO good.", 3),
  new ToDo("Edge of Destiny", "Much, much harder (and better-looking) remake of Blade of Justice. This level looks so cool.", 2),
  new ToDo("The Hallucination", "Cool nine circles level with some really weird, yet interesting gameplay. I don't like nine circles levels too much, but this one looks like a good one."),
  new ToDo("LIMBO", "One of the best levels in its difficulty range. There's so much I want to say about this level that I can't fit in here. This level is so cool.", 4),
  new ToDo("Kyouki", "At this point I'm starting to run out of options for harder levels. Kyouki looks pretty fun though? Maybe?"),
  new ToDo("Ashley Wave Trials", "This is probably never going to happen."),
  new ToDo("Return 0", "This level has been cancelled, but I'm leaving it here in case somehow it gets revived. A 17-minute long level is insane to me.", 2),
  new ToDo("Flamewall", "Upcoming extreme demon, maybe in top 3-5 range? Uses a super good song and has very nice gameplay."),
  new ToDo("Ascension to Heaven", "THIS IS THE BEST LEVEL OF ALL TIME. It uses all of my favorite song ever, looks unbelievably beautiful, and plays very well. I CANNOT WAIT to beat this level.", 4),
  // new ToDo("Kaizo Trap", "I actually don't know if this level has been made public yet")
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

function averageRating(demon) {
  return Math.round(((demon.enjoyment + demon.gp + demon.deco + demon.song)/4)*2)/2; // it does all this goofy stuff to round to the nearest 0.5 so the CSS colors will work
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
              data.data.position,
              data.data.thumbnail,
              data.data.video
            );
            // Clean up the data: replace objects/arrays in creators, add attempt values
            switch (currentDemon.name) {
              case "Prismatic Haze":
                currentDemon.attempts = 10557;
                currentDemon.creators = "Cirtrax & Gizbro";
                currentDemon.date = "4/23/2023";
                break;
              case "Triple Six":
                currentDemon.attempts = 10467;
                currentDemon.creators = "Zylenox";
                currentDemon.date = "5/18/2023";
                break;
              case "Retention":
                currentDemon.attempts = 6233;
                currentDemon.creators = "WOOGI1411";
                currentDemon.date = "5/26/2023";
                break;
              case "Bloodbath":
                currentDemon.attempts = 13828;
                currentDemon.creators = "Riot & more";
                currentDemon.date = "6/10/2023";
                break;
              case "Blade of Justice":
                currentDemon.attempts = 14903;
                currentDemon.creators = "Manix648 & Lazerblitz";
                currentDemon.date = "7/24/2023";
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
            <div class="demon-thumbnail">
              <a href=${currentDemon.video} target="_blank"><img src=${currentDemon.thumbnail} alt="${currentDemon.name}"></a>
            </div>
            <div class="demon-info">
              <h1>#${demonCounter}: ${currentDemon.name}</h1>
              <h2>By ${currentDemon.creators}</h2>
              <p>Demon list position: ${currentDemon.position}</p>
              <p>Date completed: ${currentDemon.date}</p>
              <p>Attempt count: ${currentDemon.attempts}</p>
            </div>
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
                data.data.position,
                data.data.thumbnail,
                data.data.video
              );
              // Clean up the data: replace objects/arrays in creators
              switch (currentDemon.name) {
                case "SPEEDRUN":
                  currentDemon.creators = "Kaito";
                  currentDemon.date = "8/7/2023";
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
          $("#upcoming-container").append(`
            <div class="demon">
              <div class="demon-thumbnail">
                <a href=${currentDemon.video} target="_blank"><img src=${currentDemon.thumbnail}></a>
              </div>
              <div class="demon-info">
                <h1>${currentDemon.name}</h1>
                <h2>By ${currentDemon.creators}</h2>
                <p>Demon list position: ${currentDemon.position}</p>
                <p>Date started: ${currentDemon.date}</p>
                <p>Projected list placement: <b>1</b></p>
              </div>
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
      avg = (demon.enjoyment + demon.gp + demon.deco + demon.song)/4;
      avgColor = generateColorCode(averageRating(demon));
      $("#ratings-container").append(`
      <div class="demon demon-rating">
        <h1>${demon.name}</h1>
        <p style="background-color:#${avgColor}; padding:1.5% 0%;"><b>Overall: ${avg} / 10</b></p>
        <p style="background-color:#${generateColorCode(demon.enjoyment)};">Enjoyment: ${demon.enjoyment} / 10</p>
        <p style="background-color:#${generateColorCode(demon.gp)};">Gameplay: ${demon.gp} / 10</p>
        <p style="background-color:#${generateColorCode(demon.deco)};">Decoration: ${demon.deco} / 10</p>
        <p style="background-color:#${generateColorCode(demon.song)};">Song: ${demon.song} / 10</p>
        <p>${demon.notes}</p>
      </div>`)
    }
  }

  function toDo() {
    for (let demon of toDoList) {
      let name;
      switch (demon.excitement) {
        case 0:
          name = `<h1 style="color:red;">${demon.name}</h1>`;
          break;
        case 1:
          name = `<h1>${demon.name}</h1>`;
          break;
        case 2:
          name = `<h1><i>${demon.name}</i></h1>`;
          break;
        case 3:
          name = `<h1><b>${demon.name}</b></h1>`;
          break;
        case 4:
          name = `<h1><i><b>${demon.name}</b></i></h1>`;
          break;
        default:
          name = `<h1>${demon.name}</h1>`;
      }
      $("#todo-container").append(`
        <div class="demon demon-todo">
          ${name}
          <p>${demon.reason}</p>
        </div>`)
    }
  }
  
  list();
  upcomingList();
  ratings();
  toDo();
})