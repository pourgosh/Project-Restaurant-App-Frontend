import axios from "axios";
import { createContext, useEffect, useState } from "react";
import { useCookies } from "react-cookie";
import { API_URL } from "../../../ApiUrl";
import UsersList from "../../components/UsersList/UsersList";
import FoodList from "../../components/FoodList/FoodList";
import StaffList from "../../components/StaffList/StaffList";

export const foodContext = createContext();
export const staffContext = createContext();

const AdminPage = () => {
  const [usersList, setUsersList] = useState(null);
  const [foodList, setFoodList] = useState(null);
  const [staffList, setStaffList] = useState(null);

  // eslint-disable-next-line no-unused-vars
  const [cookies, _] = useCookies(["access_token"]);

  const getUsersFromDb = async () => {
    try {
      const result = await axios.get(`${API_URL}/users`, {
        headers: { token: cookies.access_token },
      });
      setUsersList(result.data);
    } catch (err) {
      console.error(err);
    }
  };

  const getFoodsFromDb = async () => {
    try {
      const result = await axios.get(`${API_URL}/food`, {
        headers: { token: cookies.access_token },
      });
      setFoodList(result.data);
    } catch (err) {
      console.error(err);
    }
  };

  const getStaffFromDb = async () => {
    try {
      const result = await axios.get(`${API_URL}/staff`, {
        headers: { token: cookies.access_token },
      });
      setStaffList(result.data);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    getUsersFromDb();
    getFoodsFromDb();
    getStaffFromDb();
  }, []);

  const deleteUsersonClick = async (elem) => {
    try {
      await axios.delete(`${API_URL}/users/${elem._id}`, {
        headers: { token: cookies.access_token },
      });
      getUsersFromDb();
    } catch (err) {
      console.error(err);
    }
  };
  const deleteFoodOnClick = async (elem) => {
    try {
      await axios.delete(`${API_URL}/food/${elem._id}`, {
        headers: { token: cookies.access_token },
      });
      getFoodsFromDb();
    } catch (err) {
      console.error(err);
    }
  };
  const deleteStaffOnClick = async (elem) => {
    await axios.delete(`${API_URL}/staff/${elem._id}`, {
      headers: { token: cookies.access_token },
    });
    getStaffFromDb();
  };

  return (
    <div>
      <UsersList
        usersList={usersList}
        deleteUsersonClick={deleteUsersonClick}
      />
      <foodContext.Provider value={getFoodsFromDb}>
        <FoodList foodList={foodList} deleteFoodOnClick={deleteFoodOnClick} />
      </foodContext.Provider>
      <staffContext.Provider value={getStaffFromDb}>
        <StaffList
          staffList={staffList}
          deleteStaffOnClick={deleteStaffOnClick}
        />
      </staffContext.Provider>
    </div>
  );
};

export default AdminPage;
