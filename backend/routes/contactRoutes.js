import express from "express";
import contactController from "../controllers/contactController.js";
import contactMidd from "../middlewares/contactValidate.js";

const router = express.Router();

//Post
router.post(
  "/register",
  contactMidd.validateInfo,
  contactMidd.validateContact,
  contactMidd.bookSize,
  contactController.registerContact
);

router.post(
  "/list",
  contactMidd.validateName,
  contactController.listContactBody
);


//Get
router.get("/listUrl/:name?", contactController.listContact);

router.get("/bookFull", contactController.contactFull);

//Delete
router.delete("/delete/:name?", contactController.deleteContact);
router.delete("/delet", contactMidd.validateName, contactController.deletBody);

//Put
router.put(
    "/update",
    contactMidd.validateInfo,
    contactController.updateContact
  );


export default router;
