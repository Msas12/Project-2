// const db = require('../models');

// // Routes
// module.exports = (app) => {
//   // GET route for getting all of the todos
//   app.get('/', (req, res) => {
//     db.adoptable.findAll({}).then((result) => res.json(result));
//   });

//   // POST route for saving a new dog. You can create a dog using the data on req.body
//   app.post('/api/dog', (req, res) => {
//     db.Dog.create({
//       text: req.body.text,
//       complete: req.body.complete,
//     }).then((result) => res.json(result));
//   });

//   // PUT route for updating todos. The updated todo will be available in req.body
//   app.put('/api/dog', (req, res) => {
//     db.Dog.update(
//       {
//         text: req.body.text,
//         complete: req.body.complete,
//       },
//       {
//         where: {
//           id: req.body.id,
//         },
//       }
//     ).then(result => res.json(result))
//   })

// };