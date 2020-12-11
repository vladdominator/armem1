const express = require('express');
const router = express.Router();
const faker = require('faker');
const chance = new require('chance').Chance();
const jsf = require('json-schema-faker');
jsf.extend('chance',()=>chance);
jsf.extend('faker',()=>faker);
/* GET users listing. */
var schema={
  "type":"array",
  "minItems":1,
  "maxItems":1,
  "items":{
      type:'object',
      properties:{
        name:{
          type:'string',
          faker:'name.firstName'
        },
        image:{
          type:'string',
          faker:'image.food'
        }
      },
      required:['image','name']
  }
};
router.get('/', (req, res) => {
  jsf.resolve(schema).then(sample => {
    res.render('menu',{sampleOrders:sample});
  // res.send([sample]);

});


});
/*
{"name": faker.name.firstName(),
  "status":faker.random.boolean(),
  "age":chance.age({type:'teen'}),
  "time":chance.second()
},
    {
      "name": faker.name.firstName(),
  "status":faker.random.boolean(),
  "age":chance.age({type:'teen'}),
  "time":chance.second()
    }
*/

module.exports = router;
