import contact from "../models/contact.js";

//validar que si esten los campos necesarios
const validateInfo = async (req, res, next) => {
  if (!req.body.name || !req.body.phone || !req.body.landline)
    return res.status(400).send({ menssage: "Incomplete Data" });

  next();
};

//validar el tamanio de la agenda
const bookSize = async (req, res, next) => {
  const size = await contact.count();

  if (size >= 5) return res.status(400).send({ menssage: "Contact Book Full" });

  next();
};

//validar si el contacto ya existe por el nombre.
const validateContact = async (req, res, next) => {
  const register = await contact.findOne({ name: req.body.name });

  if (register)
    return res.status(400).send({ menssage: "Contact already Exist." });

  next();
};

const validateName = async (req, res, next) => {
  if (!req.body.name)
    return res
      .status(400)
      .send({ menssage: "Incomplete Data, please enter a name to search " });
  next();
};

export default { validateInfo, bookSize, validateContact, validateName };
