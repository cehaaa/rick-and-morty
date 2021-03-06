export class LocalPersistent {
  constructor() {
    this.characters =
      JSON.parse(localStorage.getItem("rick-and-morty-app")) || [];
  }

  getCharacters() {
    return this.characters;
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

    localStorage.setItem("rick-and-morty-app", JSON.stringify(this.characters));

    return JSON.parse(localStorage.getItem("rick-and-morty-app"));
    // return this.getCharacters();
  }
}

export const lp = new LocalPersistent();
