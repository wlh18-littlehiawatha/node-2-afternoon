const messages = [];

let id = 0;

// id++;

module.exports ={

   //Create Should be able to create a message using text and time off of the request body

   create: (req, res) => {
      const { text, time} = req.body;   // all this is destructuring... right?
      messages.push({id, text, time});  
      id++;
      res.status(200).send(messages);
   },


   // Read - Should be able to return the messages array.
   read: (req, res) => {
      res.status(200).send(messages);
   },

   //Update - Should be able to update the text property of a message using the request body.
            //Should be able to determine which message to update using an id url parameter.

   update: (req, res) => {
      const {text} = req.body;
      const updateID = req.params.id;
      const messageIndex = messages.findIndex(message => message.id == updateID);
      let message = messages[messageIndex];

      messages[messageIndex] = {
         id: message.id,
         text: text || message.text,  // what is up with the handle bars here?
         time: message.time
      };

      res.status(200).send(messages);
   },

   //Create Should be able to create a message using text and time off of the request body
   delete: (req, res) => {
      const deleteID = req.params.id;
      messageIndex = messages.findIndex(message => message.id == deleteID);
      messages.splice(messageIndex, 1);
      res.status(200).send(messages);
   }
   
};

