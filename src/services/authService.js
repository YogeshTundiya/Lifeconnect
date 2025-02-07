import { userLogin, userRegister } from "../redux/features/auth/authActions";
import store from "../redux/store";
export const handleLogin = (e, email, password, role) => {
  e.preventDefault();
  try {
    if (!role || !email || !password) {
      return alert("Please Provide all filed🥲");
    }
    store.dispatch(userLogin({ email, password, role }));
  } catch (error) {
    console.log(error);
  }
};
export const handleRegister = (
  e,
  names,
  role,
  email,
  password,
  organizationName,
  hospitalName,
  address,
  phone,
  website
) => {
  e.preventDefault();
  try {
    store.dispatch(
      userRegister({
        names,
        role,
        email,
        password,
        organizationName,
        hospitalName,
        address,
        phone,
        website,
      })
    );
  } catch (error) {
    console.log(error);
  }
};
