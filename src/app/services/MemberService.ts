import axios from "axios";
import { serverApi } from "../../lib/config";
import { Member, MemberInput } from "../../lib/types/member";
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
  public async getRestaurant(): Promise<Member> {
    try {
      const url = this.path + "/member/restaurant";
      const result = await axios.get(url);
      console.log("result getRestaurant", result);

      const restaurant: Member = result.data;
      return result.data;
    } catch (error) {
      console.log("Error, getTopUser qismida shu Xatolik:", error);
      throw error;
    }
  }

  public async signup(input: MemberInput): Promise<Member> {
    try {
      const url = this.path + "/member/signup";
      const result = await axios.post(url, input, { withCredentials: true });
      console.log(result);
      
      const member: Member = result.data.member
      console.log(member);
      localStorage.setItem("memberData:",JSON.stringify(member))

      return member
    } catch (error) {
      console.log("Error, signup qismida shu Xatolik:", error);
      throw error;
    }
  }
}

export default MemberService;
