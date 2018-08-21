function Mouse(color, weight){
    this.color = color;
    this.weight = weight;
    this.type = 'mouse';
}

Mouse.prototype.sleep = function(){
    console.log('Sleep...');
};

var jerry = new Mouse('orange', 0.5);
jerry.sleep();

var mickey = new Mouse('black', 0.7);
mickey.sleep();