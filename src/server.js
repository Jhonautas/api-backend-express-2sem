import express from "express";

const app = express();
const port = 3000;


app.use(express.json()
)
app.get("/profile", (req, res) => {
    console.log("Dados do usúario coletados com sucesso!");
     res.json({ profile:"Informações coletadas com sucesso!" });
});

app.post("/profile", (req, res) => {
    console.log(dados);
     res.json({ profile: "Usuário criado com sucesso!" });
});

app.put("/profile", (req, res) => {
    const dados = req.body 
    console.log("Dados do usuário atualizados com sucesso");
    res.json({ 
      profile: "Dados do usuário com editado com sucesso!",
      profile: dados });
});

app.delete("/profile", (req, res) => {
    console.log("Usuário Deletado com sucesso");
    res.json({ profile: "Usuário deletado com sucesso!" });
});

app.listen(port, () => {
    console.log(`Api criada com sucesso http://localhost:${port}`);
});
