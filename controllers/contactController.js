const asyncHandler = require("express-async-handler");
const connect = require("../model/contactModels");

// Create new contact
// @route   POST /contacts
// @access  Private
const createContact = asyncHandler(async (req, res) => {
  const { name, email, phone } = req.body;
  if (!name || !email || !phone) {
    res.status(400);
    throw new Error("Please provide name, email and phone");
  }

  const contact = await connect.create(req.body);
  res.json({
    success: true,
    msg: "Create new contact",
    data: contact,
  });
});

// Get all contacts
// @route   GET /contacts
// @access  Public
const getContacts = asyncHandler(async (req, res) => {
  const contacts = await connect.find({});
  res.status(200).json({
    success: true,
    msg: "Show all contacts",
    count: contacts.length,
    data: contacts,
  });
});

// Get single contact
// @route   GET /contacts/:id
// @access  Public
const getContactById = asyncHandler(async (req, res) => {
  if (verifyid(req.params.id)) {
    const contact = await connect.find({ _id: req.params.id });
    if (contact.length === 0) {
      res.status(400);
      throw new Error("Contact not found");
    }
    res.status(200).json({
      success: true,
      msg: "Show single contact",
      data: contact,
    });
  } else {
    res.status(400);
    throw new Error("Invalid id");
  }
});

// Update contact
// @route   PUT /contacts/:id
// @access  Private
const updateContact = asyncHandler(async (req, res) => {
  if (verifyid(req.params.id)) {
    const contact = await connect.find({ _id: req.params.id });
    if (contact.length === 0) {
      res.status(400);
      throw new Error("Contact not found");
    }
    const update = await connect.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    res.status(200).json({
      success: true,
      msg: "Update contact",
      data: update,
    });
  } else {
    res.status(400);
    throw new Error("Invalid id");
  }
});
// Delete contact
// @route   DELETE /contacts/:id
// @access  Private
const deleteContact = asyncHandler( async (req, res) => {
    if(verifyid(req.params.id)){
        const contact =await connect.find({_id:req.params.id});
        if(contact.length === 0){
            res.status(400);
            throw new Error("Contact not found");
        }
        const deleted=   await connect.findByIdAndDelete(req.params.id);
        res.status(200).json({
            success:true,
            msg:"Delete contact",
            data:deleted
        })
    }else{
        res.status(400);
        throw new Error("Invalid id");
    }
 
});


// Verify id function 
// its a helper function to verify id type with regex match pattern.
function verifyid(id) {
  if (id.match(/^[0-9a-fA-F]{24}$/)) {
    return true;
  }
    return false;
}

// Export functions
module.exports = {
  getContacts,
  getContactById,
  createContact,
  updateContact,
  deleteContact,
};
