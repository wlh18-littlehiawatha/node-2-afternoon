const express = require('express');
const message_controller = require('./controllers/message_controller');

const app = express();

app.use(express.json());

// Endpoints:

app.post("/api/messages", message_controller.create);
app.get("/api/messages", message_controller.read);
app.put("/api/messages/:id", message_controller.update);
app.delete("/api/messages/:id", message_controller.delete);


const PORT = 3001;

app.listen(PORT, () => {
   console.log(`Server listening on port ${PORT}!`);
});






