export default class Thing {
    constructor(){
        this.position = null;
        this.carries = null;
        this.carrier = null;
    }

    getPosition(){
        return this.position;
    }

    setPosition(...arr){
        this.position = arr;
    }

    setCarriedObject(object){
        this.carries = object;
    }

    setCarrierObject(object){
        this.carrier = object;
    }

    getCarriedObject(){
        return this.carries;
    }

    getCarrierObject(){
        return this.carrier;
    }

    carriesSomething(){
        return !!this.carries;
    }

    beingCarried(){
        return !!this.carrier;
    }
}
