const Person = require('../models/personsModel');

// Controller methods
const getAllPersons = async (req, res) => {
  try {
    const persons = await Person.findAll();
    res.json(persons);
  } catch (error) {
    console.error('Error retrieving persons:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

const getPersonById = async (req, res) => {
  const { id } = req.params;
  try {
    const person = await Person.findByPk(id);
    if (person) {
      res.json(person);
    } else {
      res.status(404).json({ error: 'Person not found' });
    }
  } catch (error) {
    console.error('Error retrieving person by ID:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

// Add more controller methods as needed

module.exports = {
  getAllPersons,
  getPersonById,
  // Add more methods here
};
