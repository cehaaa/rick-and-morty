export default class LocalPresistent {
  constructor() {
    this.ideas = JSON.parse(localStorage.getItem("bored-app-ideas")) || [];
  }

  checkValidIdeas(data) {
    let isValid = true;

    if (this.ideas !== []) {
      this.ideas.forEach((item) => {
        data.key === item.key ? (isValid = false) : (isValid = true);
      });
    }

    return isValid;
  }

  save(data) {
    if (!this.checkValidIdeas(data)) {
      alert("Idea already added!");
      return false;
    }
    this.ideas.push(data);
    localStorage.setItem("bored-app-ideas", JSON.stringify(this.ideas));
    alert("Idea saved!");
  }

  delete(index) {
    this.ideas.splice(index, 1);
  }
}
