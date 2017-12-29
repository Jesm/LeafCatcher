export default class Square {
    constructor(x, y, blockedSideQuantity){
        this.x = x;
        this.y = y;
        this.blockedSideQuantity = blockedSideQuantity;
        this.objects = [];
    }

    add(object){
        this.objects.push(object);
    }

    getPosition(){
        return [this.x, this.y];
    }

    getBlockedSideQuantity(){
        return this.blockedSideQuantity;
    }
}
