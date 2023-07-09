import axios from "axios";

export default class PostService {
  static async getAll() {
    const res = await axios.get("https://bohohome.ru/php/programs.php");
    return res.data;
  }

  static async getProg(id) {
    const res = await axios.get("https://bohohome.ru/php/program.php", {
      params: {
        id: id,
      },
    });
    return res.data;
  }
}
