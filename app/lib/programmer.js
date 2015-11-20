export default class Programmer {
  constructor(name, language="Ruby"){
    this.name = name;
    this.language = language;
  }

  evangelize(){
    var string = `${this.name}: ${this.language.toUpperCase()} IS THE BEST LANGUAGE EVER`;
    return string;
  }
}

export var bestLanguages = ["Ruby", "Elixir"];

export function addJavaScript(bestLanguages){
  return bestLanguages + ", JavaScript";
}


