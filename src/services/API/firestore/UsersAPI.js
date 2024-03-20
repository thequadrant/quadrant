import db from "./Initialise";

class Users {
  constructor() {
    this.firestore = db;
    this.users = [];
  }

  // Get all this.users from this.firestore and memoise the result
  getAllUsers = async () => {
    if (this.users.length === 0) {
      const querySnapshot = await this.firestore.collection("users").get();
      querySnapshot.forEach((doc) => {
        this.users.push(doc.data());
      });
    }
    return this.users;
  };

  // Get a single user from this.firestore
  getUser = async (email) => {
    // If user is already in memory, return it
    const user = this.users.find((u) => u.email === email);
    if (user) {
      return user;
    }

    // If user is not in memory, fetch it from this.firestore
    const doc = await this.firestore.collection("users").doc(email).get();
    if (doc.exists) {
      return doc.data();
    }
    return null;
  };

  // Check if a user exists in this.firestore
  userExists = async (email) => {
    const doc = await this.firestore.collection("users").doc(email).get();
    return doc.exists;
  };

  // Check if a user is an admin
  isAdmin = async (email) => {
    const doc = await this.firestore.collection("users").doc(email).get();
    return doc.data().role === "admin";
  };

  // Add a new user to this.firestore
  addUser = async (user) => {
    await this.firestore.collection("users").doc(user.email).set(user);
    this.users.push(user); // Memoise the new user
  };

  // Update a user in this.firestore
  updateUser = async (user) => {
    await this.firestore.collection("users").doc(user.email).update(user);
    const index = this.users.findIndex((u) => u.email === user.email);
    this.users[index] = user; // Update the user in memory
  };

  // Get user privileges
  getUserPrivileges = async (email) => {
    const doc = await this.firestore.collection("users").doc(email).get();
    return doc.data().privileges;
  };

  // Get user roles
  getUserRoles = async (email) => {
    const doc = await this.firestore.collection("users").doc(email).get();
    return doc.data().role;
  };
}

export default new Users();
