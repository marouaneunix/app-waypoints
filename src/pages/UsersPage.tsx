import axios from "axios";
import { useEffect, useState } from "react";

type User = {
  id: number;
  login: string;
  avatar_url: string;
};

export const UsersPage = () => {
  const [users, setUsers] = useState<Array<User>>([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("/users");
        setUsers(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  return (
      <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
        <table className="w-full text-sm text-left text-gray-500 ">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50">
            <tr>
              <th scope="col" className="px-6 py-3">
                <span className="sr-only">Image</span>
              </th>
              <th scope="col" className="px-6 py-3">
                Name
              </th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr
                key={user.id}
                className="bg-white border-b  hover:bg-gray-50 "
              >
                <td className="w-32 p-4">
                  <img src={user.avatar_url} alt="Apple Watch" />
                </td>
                <td className="px-6 py-4 font-semibold text-gray-900 ">
                  {user.login}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

  );
};
