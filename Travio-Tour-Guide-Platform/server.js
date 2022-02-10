const express =  require("express")
const app = express()
const mongoose = require("mongoose")
const bodyparser = require("body-parser")

app.use(bodyparser.urlencoded({extended: true}))
app.use(express.static('public'))

//connecting to momgoose database 
mongoose.connect("mongodb+srv://philica:sabifithawok@cluster0.1c5jn.mongodb.net/Travio_Tour_Guide",{useNewUrlParser: true},{useUnifiedTopology: true})

//create a data schema 

//data_schema for booking tour
const tour_book_schema = {
    Tour_name: String,
    Tour_type:String,
    Quantity: Number,
    Start_date: String,
    End_date: String
}

//data schema for booking hotel
const tour_hotel_schema = {
    Hotel_name: String,
    Hotel_type:String,
    Quantity: Number,
    Start_date: String,
    End_date: String
}

//data schema for user
const user_schema = {
    user_name: String,
    user_password: String,

}

//creating model for booking tour 
const tour_book = mongoose.model("tour_book", tour_book_schema)

//creating model for booking hotel
const hotel_book = mongoose.model("hotel_book",tour_hotel_schema)

//creating model for user

//listening to homepage
app.get("/index.html",(req,res) => {
    res.sendFile(__dirname + "/index.html")
})

//listening on port 3000 on file index.html
app.get("/book_tour",(req,res) => {
    res.sendFile(__dirname + "/book-tourguid.html")
})

//listen to request book_hotel
app.get("/book_hotel",(req,res) => {
    //while listening to this request render book-hotel.html 
    res.sendFile(__dirname + "/book-hotel.html")
    
})

//app posting tour booking
app.post("/book_tour",(req,res) => {
    let newTour_book = new tour_book({
        Tour_name:req.body.Tour_name,
        Tour_type:req.body.Tour_type,
        Quantity:req.body.Quantity,
        Start_date: req.body.Start_date,
        End_date: req.body.End_date
    })
    newTour_book.save()
    res.redirect("/book_tour")
    
})

//app posting hotel booking
app.post("/book_hotel",(req,res) => {
    let newHotel_book = new hotel_book({
        Hotel_name:req.body.Hotel_name,
        Hotel_type:req.body.Hotel_type,
        Quantity:req.body.Quantity,
        Start_date: req.body.Start_date,
        End_date: req.body.End_date
    })
    newHotel_book.save()
    console.log(newHotel_book)
    res.redirect("/book_hotel")
    
})




//listening on port 3000
app.listen(3000 , function(){
    console.log("server is running on 3000")
})