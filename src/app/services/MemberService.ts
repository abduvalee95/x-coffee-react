import axios from "axios";
import { serverApi } from "../../lib/config";
import { LoginInput, Member, MemberInput } from "../../lib/types/member";
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

      const member: Member = result.data.member;
      console.log(member);
      localStorage.setItem("memberData:", JSON.stringify(member));

      return member;
    } catch (error) {
      console.log("Error, Signup qismida shu Xatolik:", error);
      throw error;
    }
  }

  public async login(input: LoginInput): Promise<Member> {
    try {
      const url = this.path + "/member/login";
      const result = await axios.post(url, input, { withCredentials: true }); //true bn backand frontendga cookie ni joylydi  true bolganda gina backend fronendnimalumotlarni ozgartira oladi oldi berdi
      console.log("Login:", result);

      const member: Member = result.data.member;
      console.log(member);
      localStorage.setItem("memberData", JSON.stringify(member));

      return member;
    } catch (error) {
      console.log("Error, Login qismida shu Xatolik:", error);
      throw error;
    }
  }

  //boolean qilsaham boladi Void qilsaham boladi
  public async logout(): Promise<void> {
    try {
      const url = this.path + "/member/logout";
      const result = await axios.post(url, {}, { withCredentials: true }); //true bn backand frontendga cookie ni joylydi  true bolganda gina backend fronendnimalumotlarni ozgartira oladi oldi berdi
      console.log("logout:", result);

      localStorage.removeItem("memberData");
    } catch (error) {
      console.log("Error, logout qismida shu Xatolik:", error);
      throw error;
    }
  }
}

export default MemberService;
