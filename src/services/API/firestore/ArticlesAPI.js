import db from "./Initialise";

class Articles {
  constructor() {
    this.firestore = db;
    this.articles = [];
  }

  // Get all articles from Firestore and memoise the result
  getAllArticles = async () => {
    if (this.articles.length === 0) {
      const querySnapshot = await this.firestore.collection("articles").get();
      querySnapshot.forEach((doc) => {
        this.articles.push(doc.data());
      });
    }
    return this.articles;
  };

  // Get a single article from Firestore
  getArticle = async (id) => {
    // If article is already in memory, return it
    const article = this.articles.find((art) => art.id === id);
    if (article) {
      return article;
    }

    // If article is not in memory, fetch it from Firestore
    const doc = await this.firestore.collection("articles").doc(id).get();

    if (doc.exists) {
      return doc.data();
    }
    return null;
  };

  // Add a new article to Firestore
  addArticle = async (article) => {
    await this.firestore.collection("articles").add(article);
    this.articles.push(article); // Memoise the new article
  };
}

export default new Articles();
