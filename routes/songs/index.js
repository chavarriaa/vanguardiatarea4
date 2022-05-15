let express = require('express');

let router = express.Router();
let SongSchema = require('../../schema/songs')

const subir =[
    {
     "song": "Black Summer",
     "duration": "03:53:00",
     "artist": "Red Hot Chilli Peppers",
     "album": "Unlimited Love",
     "year": 1970,
     "location": "Honduras"
    },
    {
     "song": "Here Ever After",
     "duration": "03:51:00",
     "artist": "Red Hot Chilli Peppers",
     "album": "Unlimited Love",
     "year": 2022,
     "location": "Honduras"
    },
    {
     "song": "Aquatic Mouth Dance",
     "duration": "04:21:00",
     "artist": "Red Hot Chilli Peppers",
     "album": "Unlimited Love",
     "year": 2022,
     "location": "Honduras"
    },
    {
     "song": "Not the One",
     "duration": "04:27:00",
     "artist": "Red Hot Chilli Peppers",
     "album": "Unlimited Love",
     "year": 2022,
     "location": "Honduras"
    },
    {
     "song": "Poster Child",
     "duration": "05:19:00",
     "artist": "Red Hot Chilli Peppers",
     "album": "Unlimited Love",
     "year": 2022,
     "location": "Honduras"
    },
    {
     "song": "The Great Apes",
     "duration": "05:02:00",
     "artist": "Red Hot Chilli Peppers",
     "album": "Unlimited Love",
     "year": 2022,
     "location": "Honduras"
    },
    {
     "song": "It's Only Natural",
     "duration": "05:34:00",
     "artist": "Red Hot Chilli Peppers",
     "album": "Unlimited Love",
     "year": 2022,
     "location": "Honduras"
    },
    {
     "song": "She's a Lover",
     "duration": "03:42:00",
     "artist": "Red Hot Chilli Peppers",
     "album": "Unlimited Love II",
     "year": 2021,
     "location": "Honduras"
    },
    {
     "song": "These Are the Ways",
     "duration": "03:57:00",
     "artist": "Red Hot Chilli Peppers",
     "album": "Unlimited Love II",
     "year": 2021,
     "location": "Honduras"
    },
    {
     "song": "Whatchu Thinkin'",
     "duration": "03:41:00",
     "artist": "Red Hot Chilli Peppers",
     "album": "Unlimited Love II",
     "year": 2021,
     "location": "Honduras"
    },
    {
     "song": "Bastards of Light",
     "duration": "03:39:00",
     "artist": "Red Hot Chilli Peppers",
     "album": "Unlimited Love II",
     "year": 2021,
     "location": "Honduras"
    },
    {
     "song": "White Braids & Pillow Chair",
     "duration": "03:41:00",
     "artist": "Red Hot Chilli Peppers",
     "album": "Unlimited Love II",
     "year": 2021,
     "location": "Honduras"
    },
    {
     "song": "One Way Traffic",
     "duration": "04:11:00",
     "artist": "Red Hot Chilli Peppers",
     "album": "Unlimited Love II",
     "year": 2021,
     "location": "Honduras"
    },
    {
     "song": "Veronica",
     "duration": "04:29:00",
     "artist": "Red Hot Chilli Peppers",
     "album": "Unlimited Love II",
     "year": 2021,
     "location": "Honduras"
    },
    {
     "song": "Let 'Em Cry",
     "duration": "04:24:00",
     "artist": "Red Hot Chilli Peppers",
     "album": "Unlimited Love II",
     "year": 2021,
     "location": "Honduras"
    },
    {
     "song": "The Heavy Wing",
     "duration": "05:32:00",
     "artist": "Red Hot Chilli Peppers",
     "album": "Unlimited Love II",
     "year": 2021,
     "location": "Honduras"
    },
    {
     "song": "By The Way",
     "duration": "00:03:37",
     "artist": "Red Hot Chilli Peppers",
     "album": "By the way",
     "year": 2020,
     "location": "Guatemala"
    },
    {
     "song": "Universally Speaking",
     "duration": "04:16:00",
     "artist": "Red Hot Chilli Peppers",
     "album": "By the way",
     "year": 2020,
     "location": "Guatemala"
    },
    {
     "song": "This is the Place",
     "duration": "04:15:00",
     "artist": "Red Hot Chilli Peppers",
     "album": "By the way",
     "year": 2020,
     "location": "Guatemala"
    },
    {
     "song": "Dosed",
     "duration": "05:09:00",
     "artist": "Red Hot Chilli Peppers",
     "album": "By the way",
     "year": 2020,
     "location": "Guatemala"
    },
    {
     "song": "Don't Forget Me",
     "duration": "04:35:00",
     "artist": "Red Hot Chilli Peppers",
     "album": "By the way",
     "year": 2020,
     "location": "Guatemala"
    },
    {
     "song": "The Zephyr Song",
     "duration": "03:50:00",
     "artist": "Red Hot Chilli Peppers",
     "album": "By the way",
     "year": 2020,
     "location": "Guatemala"
    },
    {
     "song": "Can't Stop",
     "duration": "04:27:00",
     "artist": "Red Hot Chilli Peppers",
     "album": "By the way",
     "year": 2020,
     "location": "Guatemala"
    },
    {
     "song": "I Could Die For You",
     "duration": "03:11:00",
     "artist": "Red Hot Chilli Peppers",
     "album": "By the way",
     "year": 2020,
     "location": "Guatemala"
    },
    {
     "song": "Midnight",
     "duration": "04:53:00",
     "artist": "Red Hot Chilli Peppers",
     "album": "By the way",
     "year": 2020,
     "location": "Guatemala"
    },
    {
     "song": "Throw Away Your Television",
     "duration": "03:44:00",
     "artist": "Red Hot Chilli Peppers",
     "album": "The Getaway",
     "year": 2019,
     "location": "Guatemala"
    },
    {
     "song": "Cabron",
     "duration": "03:36:00",
     "artist": "Red Hot Chilli Peppers",
     "album": "The Getaway",
     "year": 2019,
     "location": "Guatemala"
    },
    {
     "song": "Tear",
     "duration": "05:16:00",
     "artist": "Red Hot Chilli Peppers",
     "album": "The Getaway",
     "year": 2019,
     "location": "Guatemala"
    },
    {
     "song": "On Mercury",
     "duration": "03:26:00",
     "artist": "Red Hot Chilli Peppers",
     "album": "The Getaway",
     "year": 2019,
     "location": "Guatemala"
    },
    {
     "song": "Minor Thing",
     "duration": "03:36:00",
     "artist": "Red Hot Chilli Peppers",
     "album": "The Getaway",
     "year": 2019,
     "location": "Guatemala"
    },
    {
     "song": "Warm Tape",
     "duration": "03:12:00",
     "artist": "Red Hot Chilli Peppers",
     "album": "The Getaway",
     "year": 2019,
     "location": "Mexico"
    },
    {
     "song": "Venice Queen",
     "duration": "00:06:05",
     "artist": "Red Hot Chilli Peppers",
     "album": "The Getaway",
     "year": 2019,
     "location": "Mexico"
    },
    {
     "song": "Around the world ",
     "duration": "03:59:00",
     "artist": "Red Hot Chilli Peppers",
     "album": "Californication",
     "year": 2018,
     "location": "Mexico"
    },
    {
     "song": "Parallel universe ",
     "duration": "04:30:00",
     "artist": "Red Hot Chilli Peppers",
     "album": "Californication",
     "year": 2018,
     "location": "Mexico"
    },
    {
     "song": "Scar tissue ",
     "duration": "03:37:00",
     "artist": "Red Hot Chilli Peppers",
     "album": "Californication",
     "year": 2018,
     "location": "Mexico"
    },
    {
     "song": "Otherside ",
     "duration": "04:16:00",
     "artist": "Red Hot Chilli Peppers",
     "album": "Californication",
     "year": 2018,
     "location": "Mexico"
    },
    {
     "song": "Get on top ",
     "duration": "03:19:00",
     "artist": "Red Hot Chilli Peppers",
     "album": "Californication",
     "year": 2018,
     "location": "Mexico"
    },
    {
     "song": "Californication ",
     "duration": "05:21:00",
     "artist": "Red Hot Chilli Peppers",
     "album": "Californication",
     "year": 2018,
     "location": "Mexico"
    },
    {
     "song": "Easily ",
     "duration": "03:52:00",
     "artist": "Red Hot Chilli Peppers",
     "album": "Californication",
     "year": 2018,
     "location": "Mexico"
    },
    {
     "song": "Porcelain ",
     "duration": "02:43:00",
     "artist": "Red Hot Chilli Peppers",
     "album": "Californication",
     "year": 2018,
     "location": "Mexico"
    },
    {
     "song": "Emit remmus ",
     "duration": "04:00:00",
     "artist": "Red Hot Chilli Peppers",
     "album": "Californication",
     "year": 2018,
     "location": "Mexico"
    },
    {
     "song": "I like dirt ",
     "duration": "02:38:00",
     "artist": "Red Hot Chilli Peppers",
     "album": "Californication",
     "year": 2018,
     "location": "Mexico"
    },
    {
     "song": "This velvet glove ",
     "duration": "03:45:00",
     "artist": "Red Hot Chilli Peppers",
     "album": "Californication",
     "year": 2018,
     "location": "Mexico"
    },
    {
     "song": "Savior ",
     "duration": "04:53:00",
     "artist": "Red Hot Chilli Peppers",
     "album": "Californication",
     "year": 2018,
     "location": "Mexico"
    },
    {
     "song": "Purple Stain ",
     "duration": "04:14:00",
     "artist": "Red Hot Chilli Peppers",
     "album": "Californication",
     "year": 2018,
     "location": "Mexico"
    },
    {
     "song": "Right on time ",
     "duration": "01:52:00",
     "artist": "Red Hot Chilli Peppers",
     "album": "Californication",
     "year": 2018,
     "location": "Mexico"
    },
    {
     "song": "Road trippin ",
     "duration": "03:12:00",
     "artist": "Red Hot Chilli Peppers",
     "album": "Californication",
     "year": 2018,
     "location": "Mexico"
    },
    {
     "song": "Strange Days",
     "duration": "3:05",
     "artist": "The Doors",
     "album": "Strange Days",
     "year": 1967,
     "location": "Mexico"
    },
    {
     "song": "You're Lost Little Girl",
     "duration": "3:01",
     "artist": "The Doors",
     "album": "Strange Days",
     "year": 1967,
     "location": "Mexico"
    },
    {
     "song": "Love Me Two Times",
     "duration": "3:23",
     "artist": "The Doors",
     "album": "Strange Days",
     "year": 1967,
     "location": "Mexico"
    },
    {
     "song": "Unhappy Girl",
     "duration": "2:00",
     "artist": "The Doors",
     "album": "Strange Days",
     "year": 1967,
     "location": "USA"
    },
    {
     "song": "Horse Latitudes",
     "duration": "1:30",
     "artist": "The Doors",
     "album": "Strange Days",
     "year": 1967,
     "location": "USA"
    },
    {
     "song": "Moonlight Drive",
     "duration": "3:00",
     "artist": "The Doors",
     "album": "Strange Days",
     "year": 1967,
     "location": "USA"
    },
    {
     "song": "People Are Strange",
     "duration": "2:10",
     "artist": "The Doors",
     "album": "Strange Days",
     "year": 1967,
     "location": "USA"
    },
    {
     "song": "My Eyes Have Seen You",
     "duration": "2:22",
     "artist": "The Doors",
     "album": "Strange Days",
     "year": 1967,
     "location": "USA"
    },
    {
     "song": "I Can't See Your Face In My Mind",
     "duration": "3:18",
     "artist": "The Doors",
     "album": "Strange Days",
     "year": 1967,
     "location": "USA"
    },
    {
     "song": "When The Music's Over",
     "duration": "11:00",
     "artist": "The Doors",
     "album": "Strange Days",
     "year": 1967,
     "location": "USA"
    },
    {
     "song": "Hello, I Love You",
     "duration": "2:22",
     "artist": "The Doors",
     "album": "Waiting for the sun",
     "year": 1968,
     "location": "USA"
    },
    {
     "song": "Love Street",
     "duration": "3:06",
     "artist": "The Doors",
     "album": "Waiting for the sun",
     "year": 1968,
     "location": "USA"
    },
    {
     "song": "Not To Touch The Earth",
     "duration": "3:54",
     "artist": "The Doors",
     "album": "Waiting for the sun",
     "year": 1968,
     "location": "USA"
    },
    {
     "song": "Summer's Almost Gone",
     "duration": "3:20",
     "artist": "The Doors",
     "album": "Waiting for the sun",
     "year": 1968,
     "location": "USA"
    },
    {
     "song": "Wintertime Love",
     "duration": "1:52",
     "artist": "The Doors",
     "album": "Waiting for the sun",
     "year": 1968,
     "location": "USA"
    },
    {
     "song": "The Unknown Soldier",
     "duration": "3:10",
     "artist": "The Doors",
     "album": "Waiting for the sun",
     "year": 1968,
     "location": "USA"
    },
    {
     "song": "Spanish Caravan",
     "duration": "2:58",
     "artist": "The Doors",
     "album": "Waiting for the sun",
     "year": 1968,
     "location": "USA"
    },
    {
     "song": "My Wild Love",
     "duration": "2:50",
     "artist": "The Doors",
     "album": "Waiting for the sun",
     "year": 1968,
     "location": "USA"
    },
    {
     "song": "We Could Be So Good Together",
     "duration": "2:20",
     "artist": "The Doors",
     "album": "Waiting for the sun",
     "year": 1968,
     "location": "USA"
    },
    {
     "song": "Yes, The River Knows",
     "duration": "2:35",
     "artist": "The Doors",
     "album": "Waiting for the sun",
     "year": 1968,
     "location": "USA"
    },
    {
     "song": "Five To One",
     "duration": "4:22",
     "artist": "The Doors",
     "album": "Waiting for the sun",
     "year": 1968,
     "location": "USA"
    },
    {
     "song": "Tell All The People",
     "duration": "3:24",
     "artist": "The Doors",
     "album": "The soft parade",
     "year": 1969,
     "location": "USA"
    },
    {
     "song": "Touch Me",
     "duration": "3:15",
     "artist": "The Doors",
     "album": "The soft parade",
     "year": 1969,
     "location": "USA"
    },
    {
     "song": "Shaman's Blues",
     "duration": "4:45",
     "artist": "The Doors",
     "album": "The soft parade",
     "year": 1969,
     "location": "USA"
    },
    {
     "song": "Do It",
     "duration": "3:01",
     "artist": "The Doors",
     "album": "The soft parade",
     "year": 1969,
     "location": "USA"
    },
    {
     "song": "Easy Ride",
     "duration": "2:35",
     "artist": "The Doors",
     "album": "The soft parade",
     "year": 1969,
     "location": "USA"
    },
    {
     "song": "Wild Child",
     "duration": "2:36",
     "artist": "The Doors",
     "album": "The soft parade",
     "year": 1969,
     "location": "USA"
    },
    {
     "song": "Runnin' Blue",
     "duration": "2:27",
     "artist": "The Doors",
     "album": "The soft parade",
     "year": 1969,
     "location": "USA"
    },
    {
     "song": "Wishful Sinful",
     "duration": "2:56",
     "artist": "The Doors",
     "album": "The soft parade",
     "year": 1969,
     "location": "USA"
    },
    {
     "song": "The Soft Parade",
     "duration": "8:40",
     "artist": "The Doors",
     "album": "The soft parade",
     "year": 1969,
     "location": "USA"
    },
    {
     "song": "Roadhouse Blues",
     "duration": "4:04",
     "artist": "The Doors",
     "album": "The soft parade",
     "year": 1970,
     "location": "USA"
    },
    {
     "song": "Waiting For The Sun",
     "duration": "3:58",
     "artist": "The Doors",
     "album": "The soft parade",
     "year": 1970,
     "location": "USA"
    },
    {
     "song": "You Make Me Real",
     "duration": "2:50",
     "artist": "The Doors",
     "album": "The soft parade",
     "year": 1970,
     "location": "USA"
    },
    {
     "song": "Peace Frog",
     "duration": "2:52",
     "artist": "The Doors",
     "album": "The soft parade",
     "year": 1970,
     "location": "USA"
    },
    {
     "song": "Blue Sunday",
     "duration": "2:08",
     "artist": "The Doors",
     "album": "The soft parade",
     "year": 1970,
     "location": "USA"
    },
    {
     "song": "Ship Of Fools",
     "duration": "3:06",
     "artist": "The Doors",
     "album": "The soft parade",
     "year": 1970,
     "location": "USA"
    },
    {
     "song": "Land Ho!",
     "duration": "4:08",
     "artist": "The Doors",
     "album": "The soft parade",
     "year": 1970,
     "location": "USA"
    },
    {
     "song": "The Spy",
     "duration": "4:15",
     "artist": "The Doors",
     "album": "The soft parade",
     "year": 1970,
     "location": "USA"
    },
    {
     "song": "Queen Of The Highway",
     "duration": "2:47",
     "artist": "The Doors",
     "album": "The soft parade",
     "year": 1970,
     "location": "USA"
    },
    {
     "song": "Indian Summer",
     "duration": "2:33",
     "artist": "The Doors",
     "album": "The soft parade",
     "year": 1970,
     "location": "USA"
    },
    {
     "song": "Maggie M'Gill",
     "duration": "4:24",
     "artist": "The Doors",
     "album": "The soft parade",
     "year": 1970,
     "location": "USA"
    }
]

router.get("/", (req, res) => { 

let filter = {}
 if( req.query.artist){
   filter= { ...filter , artist:req.query.artist}
 }
 if( req.query.album){
  filter= { ...filter , album:req.query.album}
}
 if(req.query.fromYear){
  filter= { ...filter, year:{ '$gt':parseInt(req.query.fromYear)}}
}
if(req.query.toYear){
  filter= { ...filter, year:{ ...filter.year, '$lt':parseInt(req.query.toYear)}}
}

  SongSchema.find(filter,(err, songs) => {
    if (err){
      res.status(500).send("Error en la base de datos");
    }else{
      res.status(200).json(songs);
    }
  });
});


router.get("/:id", (req, res) => { 

  

    SongSchema.findById(req.params.id,(err, songs) => {
      if (err){
        res.status(500).send("Error en la base de datos");
      }else{
        res.status(200).json(songs);
      }
    });
  });

router.post('/',(req,res)=>{
  let { song, artist, album, year, country,duration} = req.body;
  let newSong = new SongSchema({song,artist,album,year,country,duration})
  newSong.save((err,doc)=>{
    if (err) {
      res.status(500).json(err);
    } else {
      res.status(200).json(doc);
    }
  })
}) 

router.delete("/:id", (req, res) => {
  SongSchema.findById(req.params.id,(err, song) => {
    if (err) { 
      res.status(500).send("Error en la base de datos");
    }else{ 
      if (song != null) {
  song.remove(function (error, result) {
    if (error){
        res.status(500).send("Error en la base de datos");
    }else {
      res.status(200).send("Eliminado exitosamente");
    }
  });
      }else{ 
        res.status(404).send("No se encontro esa song");
      }
    }
  });
});



router.put('/:id', async (req,res)=>{
  let { song, artist, album, year, country,duration } = req.body;
  let { id } = req.params;
  SongSchema.findById(id,(err,item)=>{
    if (err){
      console.log(err)
      res.status(500).send("Error en la base de datos");
    }else{
      item.song = song
      item.artist = artist;
      item.album = album;
      item.duration = duration;
      item.year = year;
      item.country = country;
      item.save((errr,doc)=>{
        if (errr) {
          console.log(errr)
          res.status(500).json(errr);
        } else {
          res.status(200).json(doc);
        }
      })
    }
  })


})
router.get('/subir-todo', async (req,res)=>{
  try{
    await SongSchema.insertMany(subir)
    res.json('Listo')
  }catch (err){
    console.error(err)
    res.json(err)
  }
})

module.exports = router;
