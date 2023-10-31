// Create new contact
// @route   POST /contacts
// @access  Private
const createContact = (req, res) => {
  console.log("This is post Hello World from contactapp.js");
  const { name, email, phone } = req.body;
  if (!name || !email || !phone) {
    res.status(400);
    throw new Error("Please provide name, email and phone");
  }
  res.json({
    success: true,
    msg: "Create new contact",
    data: req.body,
  });
};

// Get all contacts
// @route   GET /contacts
// @access  Public
const getContacts = (req, res) => {
  console.log("Hello World from contactapp.js");
  res.send("Hello World from contactapp.js");
};

// Get single contact
// @route   GET /contacts/:id
// @access  Public
const getContactById = (req, res) => {
  console.log("Hello World from contactapp.js with id " + req.params.id);
  res.send("Hello World from contactapp.js with id " + req.params.id);
};

// Update contact
// @route   PUT /contacts/:id
// @access  Private
const updateContact = (req, res) => {
  console.log("This is put Hello World from contactapp.js");
  res.send("This is put Hello World from contactapp.js");
};
// Delete contact
// @route   DELETE /contacts/:id
// @access  Private
const deleteContact = (req, res) => {
  console.log("This is delete Hello World from contactapp.js");
  res.send("This is delete Hello World from contactapp.js");
};

// Export functions
module.exports = {
  getContacts,
  getContactById,
  createContact,
  updateContact,
  deleteContact,
};
