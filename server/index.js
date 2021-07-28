const express = require('express')
const app = express()
const cors = require('cors');
const fetch = require('node-fetch');
var collegeData
var oneCollegeItem
var CollegeItem

app.use(cors());
const corsOptions = {
    origin: "https://probeappbeta.web.app"
};

const { MongoClient } = require('mongodb');
var faker = require('faker');
var collegeId = ['56HTAFG465','G78WETH785','422326DTY3','12QWERWUI8','74OIUYQOU5','6WTZXC4Y98','35JKL7ZSJ8','4A45LKKL93','7523JHQAM6','85A53GYPO6','34QR54UIY5','ZX5557C257','5TTTH5LOP9','VGADHKH446','3BGMBZCH53','7MNJHFIY97']
var Colleges ={college: [{"name":"Tommy Vercetti","location":"Vice City"}]}
const uri = "mongodb+srv://adminUser:adminUser123@cluster0.vdiod.mongodb.net/test?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
const dbName = "test";
var courseName;
var collegeName;

app.get('/getCourses/:id', (req, res) => {
    Colleges ={college: [{"name":"Tommy Vercetti","location":"Vice City"}]}
    courseName = req.params.id;
    run().catch(console.dir).then(() => {
      res.json(collegeData);
    });
  })
app.get('/getCollege/:id', (req, res) => {
    CollegeItem =""
    collegeName = req.params.id;
    runCollege().catch(console.dir)
     .then(() =>{
       console.log(CollegeItem);
       res.json(CollegeItem);
     });
  })

    app.listen(process.env.PORT || 3000, () => {
        console.log(`Example app listening at http://localhost:`)
    })

async function run() {
    try {
        await client.connect();
        const database = client.db("test");
        const movies = database.collection("College");
        var q1 ="Courses";
        var q2 = courseName
        // query for movies that have a runtime less than 15 minutes
        var param = {[q1]: q2}
        console.log(param)
        const query = param;
        const options = {
          // sort returned documents in ascending order by title (A->Z)
          sort: { name: 1 },
          limit: 15,
        // Include only the `title` and `imdb` fields in each returned document
          projection: { _id: 0, name: 1, id: 1, year: 1, city: 1, state: 1, country: 1, noOfStudents:1, Courses: 1},
        };
        const cursor = movies.find(query, options).limit(15);
        // print a message if no documents were found
        if ((await cursor.count()) === 0) {
          console.log("No documents found!");
        }
        // replace console.dir with your callback to access individual elements
        await cursor.forEach((item)=>{
            // const obj = JSON.parse(Colleges);
            // const itemobj = JSON.parse(item);
            console.log(item)
            // console.log(obj);
            Colleges.college.push(item);
            // Colleges = JSON.stringify(obj);
        });
      } finally {
          console.log(Colleges)
          collegeData = JSON.stringify(Colleges);
          console.log("Shutting")
        await client.close();
      }
        }

async function runCollege() {
    try {
        await client.connect();
        const database = client.db("test");
        const movies = database.collection("College");
        var q1 ="name";
        var q2 = collegeName
        // query for movies that have a runtime less than 15 minutes
        var param = {[q1]: q2}
        console.log(param)
        const query = param;
        const options = {
          // sort returned documents in ascending order by title (A->Z)
          sort: { name: 1 },
          limit: 2,
        // Include only the `title` and `imdb` fields in each returned document
          projection: { _id: 0, name: 1, id: 1, year: 1, city: 1, state: 1, country: 1, noOfStudents:1, Courses: 1},
        };
        const cursor = movies.find(query, options).limit(15);
        // print a message if no documents were found
        if ((await cursor.count()) === 0) {
          found = false
          CollegeItem = false;
          console.log("No documents found!");
        }
        else{
          found = true;
        }
        // replace console.dir with your callback to access individual elements
        await cursor.forEach((item)=>{
            // const obj = JSON.parse(Colleges);
            // const itemobj = JSON.parse(item);
            // console.log(item)
            oneCollegeItem = item;
            // console.log(obj);
            // Colleges = JSON.stringify(obj);
        });
      } finally {
          console.log(oneCollegeItem);
          if(found){
            CollegeItem = JSON.stringify(oneCollegeItem);
          }
          console.log("Shutting")
        await client.close();
      }
        }

        
    //     for(let i = 0; i <10; i++) {
    //        let year = Math.floor((Math.random() * (2006-1950)) + 1950);
    //        let rand = Math.floor((Math.random() * 15) + 0);
    //        let number = Math.floor((Math.random() * (100-50)) + 50);
    //        Colleges[i] = {
    //            "name": faker.name.lastName() + " University",
    //            "id": collegeId[rand], // June 23, 1912                                                                                                                                 
    //            "year": year,  // June 7, 1954                                                                                                                                  
    //            "city":faker.address.cityName(),
    //            "state":faker.address.streetName(),
    //            "country": faker.address.country(),
    //            "noOfStudents":number,
    //            "Courses": [ "IT", "Computer", "Data Analytics","Machine Learning","Civil","Electrical","Big Data","Humanities" ]
               

           
    //        }
    //        // Insert a single document, wait for promise so we can read it back
    //        const p = await col.insertOne(Colleges[i]);
    //        // Find one document
    //        const myDoc = await col.findOne();
    //        // Print to the console
    //        console.log(myDoc);
           
    //        }
    //    } catch (err) {
    //     console.log(err.stack);
    // }