import contact from "../models/contact.js";

//registrar contacto
const registerContact = async (req, res) => {
  const contactSchema = new contact({
    name: req.body.name,
    phone: req.body.phone,
    landline: req.body.landline,
    dbStatus: true,
  });

  const result = await contactSchema.save();

  return !result
    ? res.status(400).send({ menssage: "Failed to register contact" })
    : res.status(200).send({ menssage: "Contact Register: ", result });
};

//Listar contactos desde el Body
const listContactBody = async (req, res) => {
  const contacts = await contact.findOne({ name: req.body.name });
  return !contacts
    ? res.status(400).send({ menssage: "contact no found" })
    : res.status(200).send({ contacts });
};

//Buscar por nombre o listar todos
const listContact = async (req, res) => {
  const contacts = await contact.find({ name: new RegExp(req.params["name"]) });
  return contacts.length == 0
    ? res.status(400).send({ menssage: "No results found" })
    : res.status(200).send({ contacts });
};

//borrar contacto por nombre URL
const deleteContact = async (req, res) => {
  const delet = await contact.findOneAndDelete({ name: req.params["name"] });

  return !delet
    ? res.status(400).send({ menssage: "No results found" })
    : res.status(200).send({ menssage: "Contact Deleted" });
};

// borrar contacto por nomber en  Body
const deletBody = async (req, res) => {
  const contacts = await contact.findOneAndDelete({ name: req.body.name });

  return !contacts
    ? res.status(400).send({ menssage: "No results Found" })
    : res.status(200).send({ menssage: "Contact Delete" });
};

// indico cuantos contactos hay registrados si la agenda esta llena, si no, muestra cuantos contactos mas puede ingresar
const contactFull = async (req, res) => {
  const size = await contact.count();

  if (size >= 5) {
    return res
      .status(400)
      .send({ menssage: "Contact Book Full, " + size + " total records " });
  } else {
    let count = 5 - size;
    res
      .status(200)
      .send({ menssage: "You can register " + count + " more contacts" });
  }
};

//Actualizar numero de contactos
const updateContact = async (req, res) => {
  const contactExist = await contact.findOne({ name: req.body.name });
  if (!contactExist)
    return res.status(500).send({ message: "Contact not found" });

  const editContact = await contact.findByIdAndUpdate(contactExist._id, {
    phone: req.body.phone,
    landline: req.body.landline,
  });

  if (!editContact)
    return res.status(500).send({ message: "Error editing contact" });

  return res.status(200).send({ message: "Contact updated" });
};

export default {
  registerContact,
  listContactBody,
  listContact,
  deleteContact,
  deletBody,
  contactFull,
  updateContact,
};
