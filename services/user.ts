import { axiosInstance } from "@/axiosConfig";

interface UserData {
  username: string;
  name: string;
  image: string;
  bio: string;
}
export const updateUser = async (data: UserData) => {
  try {
    const res = await axiosInstance.put("/api/user/", data);
    return res?.data;
  } catch (e: any) {
    throw (
      e?.response?.data?.message || "Something went wrong while updating user"
    );
  }
};
