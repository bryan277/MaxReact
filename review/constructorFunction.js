window.music = 'classical';
window.getMusic = () => this.music;

let Foo = () => {
  this.music = 'jazz';
  this.getMusic = () => {
    return this.music;
  }
}

const bar = new Foo();

console.log(this.getMusic());// 'classical' (global)
console.log(bar.getMusic());// 'jazz' (property of bar, which is an instance Foo)
