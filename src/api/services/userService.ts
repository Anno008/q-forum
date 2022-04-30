import { apiCall } from "~/api/apiCall";
import { User } from "~/models/User";

export const fetchUsers = (): Promise<User[]> =>
  apiCall<User[]>({
    url: `users`
  });

export const fetchUser = (userId: number): Promise<User> =>
  apiCall<User>({
    url: `users/${userId}`
  });
