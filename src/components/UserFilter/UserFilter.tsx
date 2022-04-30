import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { fetchUsers } from "~/api/services/userService";
import withConsoleLog from "~/decorators/withConsoleLog";
import { User } from "~/models/User";
import locators from "~/testUtils/locators";
import { setTestId } from "~/testUtils/setTestId";
import { FlexGrid, Select } from "../atoms";

type Props = {
  onUserFilterChange: (userId: number) => void;
};

const UserFilter: React.FC<Props> = ({ onUserFilterChange }) => {
  const [users, setUsers] = useState<User[]>();

  useEffect(() => {
    fetchUsers()
      .then(setUsers)
      .catch(e => toast.error(e.message || "Failed to load users"));
  }, []);

  return (
    <FlexGrid alignItems="stretch">
      <Select
        {...setTestId(locators.userFilterSelect)}
        onChange={e => {
          onUserFilterChange(+e.target.value);
        }}>
        <option value={0}>All users</option>
        {users?.map(u => (
          <option key={u.id} value={u.id}>
            {u.username}
          </option>
        ))}
      </Select>
    </FlexGrid>
  );
};

export default withConsoleLog(UserFilter);
