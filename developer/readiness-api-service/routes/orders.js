const express = require('express');
const router = express.Router();
const faker = require('faker');
const chance = new require('chance').Chance();
const jsf = require('json-schema-faker');
jsf.extend('chance', () => chance);
jsf.extend('faker', () => faker);

var schema = {
  "type": "array",
  "minItems": 1,
  "maxItems": 1,
  "items": {
    type: 'object',
    properties: {
     name: {
        type: 'string', 
        faker: 'name.firstName'
      },
       coins1: {
       "type": "integer",
       "minimum": 30,
       "maximum": 100,
       "multipleOf": 7,
       "exclusiveMinimum": true
      },
       orders: {
       "type": "integer",
       "minimum": 1,
       "maximum": 300,
       "multipleOf": 7,
       "exclusiveMinimum": true
      },
       percent: {
       "type": "integer",
       "minimum": 1,
       "maximum": 20,
       "multipleOf": 7,
       "exclusiveMinimum": true
      },
       coins2: {
       "type": "integer",
       "minimum": 10,
       "maximum": 40,
       "multipleOf": 7,
       "exclusiveMinimum": true
      },
       image: {
        type: "string", 
        faker: "image.people"
      }
    },
    required: ['coins1', 'name', 'coins2',"image","percent","orders"]
  }


};


/* GET users listing. */
router.get('/', (req, res) => {
   jsf.resolve(schema).then(sample =>{
    res.send(sample);
   });




});
/* {"name": faker.name.firstName(), 
    "status": faker.random.boolean(),
     "age": chance.age({type: 'teen'}),
    "time": chance.second()
    },
    {"name": faker.name.firstName(), 
    "status": faker.random.boolean(),
     "age": chance.age({type: 'teen'}),
    "time": chance.second()
    },*/
module.exports = router;
