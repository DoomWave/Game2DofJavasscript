window.addEventListener('load', function(){
    const canvas = document.getElementById('canvas1');
    const ctx = canvas.getContext('2d');
    canvas.width = 1280;
    canvas.height = 720;

    class Player {
        constructor(){
            this.game = game;
        }
        draw(context){
            context.beginPath();
            context.arc(100, 100, 50, 0, Math.PI * 2);
            context.fill();
        }
    }

    class Game {
        constructor(){
            this.canvas = canvas;
            this.width = this.canvas.width;
            this.height = this.canvas.height;
            this.Player = new Player()
        }
        render()
    }

    const game = new Game(canvas);
    console.log(game);

    function animate(){

    }
});