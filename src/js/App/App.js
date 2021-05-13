import './App.scss';
import happyFaceImg from '../../images/happy-face.jpg';

class App {
  headerEl = document.createElement('h1');
  appContainerEl = document.createElement('div');
  imgEl = document.createElement('img');

  getRepos = async () => {
    const res = await fetch('https://api.github.com/users');
    const data = await res.json();
    console.log(data);
  };

  constructor() {
    this.headerEl.setAttribute('id', 'myheader');
    this.appContainerEl.setAttribute('id', 'app');
    this.headerEl.textContent = 'Hi everyone';
    this.imgEl.src = happyFaceImg;
    this.imgEl.setAttribute('width', '150');
    this.getRepos();
  }

  render() {
    this.appContainerEl.append(this.headerEl);
    this.appContainerEl.append(this.imgEl);
    return this.appContainerEl;
  }
}

export default App;
