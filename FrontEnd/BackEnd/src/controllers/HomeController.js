import User from '../types/User';

class HomeController {
  async index(req, res) {
    const novoUsuario = await User.create({
      nome: 'Leandro',
      sobrenome: 'Silva',
      email: 'leandro@predilecta.com.br',
      senha: '436t436y54634t634',
    });
    res.json(novoUsuario);
  }
}

export default new HomeController();
