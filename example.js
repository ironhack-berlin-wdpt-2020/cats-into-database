const mongoose = require('mongoose');
const Cat = require('./models/cat.model.js')

mongoose
  .connect('mongodb://localhost/exampleApp', {
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(x => console.log(`Connected to Mongo! Database name: "${x.connections[0].name}"`))
  .catch(err => console.error('Error connecting to mongo', err));

// option : delete all entries first

// Cat.create({ name: 'Garfield', colors: ['orange', 'red', 'white'], breed: 'BSH' })

// let kitty = new Cat({ name: 'Garfield', colors: ['orange', 'red', 'white'], breed: 'BSH' })
// kitty.save.then( ..... )

Cat.deleteMany().then(() => {

  Cat.create({ name: 'Garfield', colors: ['orange', 'red', 'white'], breed: 'BSH' }).then(() => {

    Cat.find({ breed: 'BSH' }).then((cats) => {
      console.log(cats)

      mongoose.connection.close(() => {
        console.log('Mongoose default connection disconnected through app termination');
      });
    })

    Cat.findByIdAndUpdate('5e888060c55c1015bed63fb3', { colors: ['white'] }).then(() => { })

  })

})
