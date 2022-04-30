import { useEffect, useState } from "react";
import { User as UserIcon } from "react-feather";
import { toast } from "react-toastify";
import { useTheme } from "styled-components";
import { fetchUser } from "~/api/services/userService";
import withConsoleLog from "~/decorators/withConsoleLog";
import { User } from "~/models/User";
import { FlexGrid, Paragraph } from "../atoms";
import Loader from "../Loader";

type Props = {
  userId: number;
};

const UserInfo: React.FC<Props> = ({ userId }) => {
  const theme = useTheme();
  const [user, setUser] = useState<User>();

  useEffect(() => {
    fetchUser(userId)
      .then(setUser)
      .catch(e => toast.error(e.message || "Failed to load user data"));
  }, [userId]);

  return (
    <FlexGrid gap="4px" alignItems="center">
      <UserIcon color={theme.primaryTextColor} />
      {user ? <Paragraph>{user.username}</Paragraph> : <Loader size="small" />}
    </FlexGrid>
  );
};

export default withConsoleLog(UserInfo);
