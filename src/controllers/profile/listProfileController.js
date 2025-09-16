import { list } from "../../models/profileModel.js";

export const listProfileController = async (req, res) => {
const result = await list()

  res.json({
    message: "Usuario listado com sucesso",
    profiles: result
  })
}
