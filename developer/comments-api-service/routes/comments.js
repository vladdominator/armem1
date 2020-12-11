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
      name1: {
        type: 'string', 
        faker: 'name.firstName'
      },
      word1: {
        type: 'string', 
        chance: 'paragraph'
      },
       name2: {
        type: 'string', 
        faker: 'name.firstName'
      },
      word2: {
        type: 'string', 
        chance: 'paragraph'
      },
      name3: {
        type: 'string', 
        faker: 'name.firstName'
      },
      word3: {
        type: 'string', 
        chance: 'paragraph'
      },
      name4: {
        type: 'string', 
        faker: 'name.firstName'
      },
      word4: {
        type: 'string', 
        chance: 'paragraph'
      },
      name5: {
        type: 'string', 
        faker: 'name.firstName'
      },
      word5: {
        type: 'string', 
        chance: 'paragraph'
      }
    },
    required: [ 'name1', 'word1','name2', 'word2','name3', 'word3','name4', 'word4','name5', 'word5']
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
