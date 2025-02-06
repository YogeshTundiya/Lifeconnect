export const handleLogin = (e, email, password, role) => {
  e.preventDefault();
  try {
    if (!role || !email || !password) {
      return alert("Please Provide all filed🥲");
    }
    console.log("login : ", e, email, password, role);
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
    console.log(
      "register : ",
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
    );
  } catch (error) {
    console.log(error);
  }
};
