class Block{
    constructor(x,y,image){
        this.sprite=createSprite(x,y,10,10)
        this.sprite.addImage(image)
        this.sprite.scale=0.1
    }
}