import axios from 'axios';
import './App.scss';

class App {
  headerEl = document.createElement('h1');
  appContainerEl = document.createElement('div');

  getRepos = async () => {
    const res = await fetch('https://api.github.com/users');
    const data = await res.json();
    console.log(data);
  };

  constructor() {
    this.headerEl.setAttribute('id', 'myheader');
    this.appContainerEl.setAttribute('id', 'app');
    this.headerEl.textContent = 'Hi everyone';
    this.getRepos();
  }

  render() {
    this.appContainerEl.append(this.headerEl);
    return this.appContainerEl;
  }
}

export default App;
