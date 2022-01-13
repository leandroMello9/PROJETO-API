const app = require("./src/app")
const { connect } = require("mongoose");
connect(
  "mongodb+srv://neto:TMp3cMGeRS0yD6Av@apicluster.dhpa3.mongodb.net/bancotodolist?authSource=admin&replicaSet=atlas-ee4yms-shard-0&w=majority&readPreference=primary&appname=MongoDB%20Compass&retryWrites=true&ssl=true",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
  (err) => {
    console.log("Erro ao conectar ao banco", err);
  }
);

app.listen(3000, function () {
  console.log("Server is running in port 3000");
});
