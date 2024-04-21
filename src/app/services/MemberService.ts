import axios from "axios";
import { serverApi } from "../../lib/config";
import { Member } from "../../lib/types/member";
import { log } from "console";

class MemberService {
  private readonly path: string;

  constructor() {
    this.path = serverApi;
  }

  public async getTopUsers(): Promise<Member[]> {
    try {
      const url = this.path + "/member/top-users";
      const result = await axios.get(url);
      console.log("result TopUsers", result);

        return result.data;
    } catch (error) {
      console.log("Error, getTopUser qismida shu Xatolik:", error);
      throw error;
    }
  }
}

export default MemberService;
