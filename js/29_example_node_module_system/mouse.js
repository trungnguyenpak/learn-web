//Constructor function
function Mouse(name, color, weight){
    this.name = name;
    this.color = color;
    this.weight = weight;
    this.type = 'mouse';
    this.dead = false;
}

Mouse.prototype.die = function die(){
    this.dead = true;
}

module.exports = Mouse;