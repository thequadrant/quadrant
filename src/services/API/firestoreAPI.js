// API Endpoint for Firestore

import { firestore } from '../../firebase';

class Articles {
  constructor() {
    this.articles = [];
  }

  // Get all articles from Firestore and memoise the result
  getAllArticles = async () => {
    if (articles.length === 0) {
      const querySnapshot = await firestore.collection('articles').get();
      querySnapshot.forEach((doc) => {
        articles.push(doc.data());
      });
    }
    return articles;
  };

  // Get a single article from Firestore
  getArticle = async (id) => {

    // If article is already in memory, return it
    const article = articles.find((article) => article.id === id);
    if (article) {
      return article;
    }

    // If article is not in memory, fetch it from Firestore
    const doc = await firestore.collection('articles').doc(id).get();

    if (doc.exists) {
      return doc.data();
    }
    return null;
  };

  // Add a new article to Firestore
  addArticle = async (article) => {
    await firestore.collection('articles').add(article);
    articles.push(article); // Memoise the new article
  };
}

class Users {
  constructor() {
    this.users = [];
  }

  // Get all users from Firestore and memoise the result
  getAllUsers = async () => {
    if (users.length === 0) {
      const querySnapshot = await firestore.collection('users').get();
      querySnapshot.forEach((doc) => {
        users.push(doc.data());
      });
    }
    return users;
  };

  // Get a single user from Firestore
  getUser = async (email) => {

    // If user is already in memory, return it
    const user = users.find((user) => user.email === email);
    if (user) {
      return user;
    }

    // If user is not in memory, fetch it from Firestore
    const doc = await firestore.collection('users').doc(email).get();

    if (doc.exists) {
      return doc.data();
    }
    return null;
  };

  // Check if a user exists in Firestore
  userExists = async (email) => {
    const doc = await firestore.collection('users').doc(email).get();
    return doc.exists;
  };

  // Check if a user is an admin
  isAdmin = async (email) => {
    const doc = await firestore.collection('users').doc(email).get();
    return doc.data().role === 'admin';
  };

  // Add a new user to Firestore
  addUser = async (user) => {
    await firestore.collection('users').doc(user.email).set(user);
    users.push(user); // Memoise the new user
  };

  // Update a user in Firestore
  updateUser = async (user) => {
    await firestore.collection('users').doc(user.email).update(user);
    const index = users.findIndex((u) => u.email === user.email);
    users[index] = user; // Update the user in memory
  };

  // Get user privileges
  getUserPrivileges = async (email) => {
    const doc = await firestore.collection('users').doc(email).get();
    return doc.data().privileges;
  };

  // Get user roles
  getUserRoles = async (email) => {
    const doc = await firestore.collection('users').doc(email).get();
    return doc.data().role;
  };
}

export const articles = new Articles();
export const users = new Users();
