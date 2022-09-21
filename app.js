const mongoose = require('mongoose')
mongoose.connect("mongodb://localhost:27017/fruitsDB")

//首先为这个collection创建一个数据结构
const fruitSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true,"Please check your data entry, no name specified!"]
      },
    rating: {
        type:Number,
        min:1,
        max:10,
    },
    review: String,
});

//然后用上面定义的schema来新建一个mongoose model，
//第一parameter就是collection的名字，并要用单数，然后mongoose会把这个单数转化为复数
const Fruit = mongoose.model("Fruit",fruitSchema);

const fruit = new Fruit({
    name:"Apple",
    rating: 7,
    review: "solid as a fruit",
})

// fruit.save();

const personSchema = new mongoose.Schema({
    name: String,
    age: Number,
    favouriteFruit:fruitSchema
})

const Person = mongoose.model("Person",personSchema)

const pineapple = new Fruit({
    name:"Pineapple",
    score:9,
    review: "Great fruit."
})
// pineapple.save()

const person = new Person({
    name:"Amy",
    age:16,
    favouriteFruit: pineapple,
}) 
// person.save();

const kiwi = new Fruit({
    name:"Kiwi",
    rating: 10,
    review:"the best fruit"
})
const orange = new Fruit({
    name:"orange",
    rating: 4,
    review:"a fruit"
})
const banana = new Fruit({
    name:"banana",
    rating: 8,
    review:"good"
})
// Fruit.insertMany([kiwi,orange,banana],function(error,docs){
//     if(error){
//         console.log(error)
//     }else{
//         console.log("Success!")
//     };
// })



//那怎样读取数据库中的资料呢？
//这里的回掉函数中，第二个参数代表的是要搜索的collection
// Fruit.find(function(err,fruits){
//     if(err){
//         console.log(err)
//     }else{
//         // console.log(fruits)
//         mongoose.connection.close();
//         fruits.forEach(fruit => console.log(fruit.name))
//     };
// })

//怎样删除collection中的数据？
// Fruit.updateOne({_id: ""})
Fruit.deleteOne({_id:"632b73dd0672bee1bfd6f4f4"},function(err){
    if(err){
        console.log(err)
    }else{
        console.log("successfully")
    }
})

const peach = new Fruit({
    name:"peach",
    rating: 4,
    review:"jucy"
})
// peach.save()


// Person.updateOne({name:"John"},{favouriteFruit:peach},function(err){
//     if(err){
//         console.log(err)
//     }else{
//         console.log("successfully updated")
//     }
// })