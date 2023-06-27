import axios from "axios";

export default class PostService {
  static async getAll() {
    const res = await axios.get("https://bohohome.ru/php/programs.php");
    return res.data;
  }
}
