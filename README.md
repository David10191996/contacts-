# contacts
<strong>Routes of contacts</strong>
<br><br>
<strong>Test with and use:</strong> Postman, MongoBD and Express of nodeJS. 
<br><br>
<strong>Register contact: </strong> http://localhost:3001/api/contact/register
<br>
<strong>Validations:</strong> If the notebook is full, If the contact exist, If data is completed.
<br>
Example Body Json:
{
    "name": "Pepito4",
    "phone" : "25567655",
    "landline": "31567577555"
}
<br><br>
<strong>Update/Edit contact: </strong> http://localhost:3001/api/contact/update
<br>
<strong>Validations:</strong> If the contact exist, If data is completed.
<br>
Example Body Json on a contact exist:
{
    "name": "Pepito4",
    "landline" : "0000",
    "phone": "0000"
}
<br><br>
<strong>List contact by name: </strong> http://localhost:3001/api/contact/listUrl/Pep
<br>
<strong>Validations:</strong> If name is type.
<br><br>
<strong>List all contact : </strong> http://localhost:3001/api/contact/listUrl
<br><br>
<strong>Existing contact</strong>
<br>
Example Body Json:
{
    "name": "Pepito23"
}
<br><br>
<strong>Delete contact by name:</strong> http://localhost:3001/api/contact/delete/Ivan
<br>
<strong>Validations:</strong> If the contact exist.

