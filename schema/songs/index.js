
let mongoose = require("mongoose");
let Schema = mongoose.Schema;


let SongSchema = new Schema({
  song:{ type: String,required:true},
  duration:{type:String,required:true},
  artist: { type: String,required:true},
  album: { type: String },
  year: { type: Number },
  country: { type: String },
},
{
  collection: "songs", //para forzar a enlazar con una colección
});

module.exports = mongoose.model("SongSchema", SongSchema);
