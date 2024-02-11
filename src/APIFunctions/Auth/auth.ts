import { Login__ResponseAPI } from "../../Types/APIResponse/Auth/auth"
// import APIManger from "../APIManger";
// import { LOGOUT } from "../apiConstants";
// import { LOGIN } from "../apiConstants";

export const loginUser = async (email: string, password: string): Promise<Login__ResponseAPI> => {
    // let apiResult: Login__ResponseAPI = await new APIManger().post(LOGIN, { email, password })
    // return apiResult;
    await new Promise(resolve => setTimeout(resolve, 1000));
    return {
        token: "dsf35sfjvjdh545gk3slefhgf"
    };
}
export const logoutUser = async (): Promise<string> => {
    // let apiResult: string = await new APIManger().post(LOGOUT)
    // return apiResult
    await new Promise(resolve => setTimeout(resolve, 1000));
    return "Logout Successfully"
    
}