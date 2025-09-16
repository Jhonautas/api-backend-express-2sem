import { getById } from '../../models/profileModel.js'

export const getByIdProfileController = async (req, res) => {
  const id = req.params.id
  const result = await getById(+id)

  res.json({
   message: `Dados do perfil com id:${id} foram obtidos`,
    profile: result
  })
}
