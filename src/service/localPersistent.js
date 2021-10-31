export default class LocalPersistent {
  constructor() {
    this.characters = JSON.parse(localStorage.getItem("bored-app-ideas")) || [];
  }

  checkValidCharacter(data) {
    let isValid = true;

    if (this.characters !== []) {
      this.characters.forEach((item) => {
        data.id === item.id ? (isValid = false) : (isValid = true);
      });
    }

    return isValid;
  }

  save(data) {
    if (!this.checkValidCharacter(data)) {
      alert("Character already added!");
      return false;
    }
    this.characters.push(data);
    localStorage.setItem("rick-and-morty-app", JSON.stringify(this.characters));
    alert("Character saved!");
  }

  delete(index) {
    this.characters.splice(index, 1);
  }
}
