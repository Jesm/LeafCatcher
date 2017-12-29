export default class Event {
    constructor(sender, type, data){
        this.sender = sender;
        this.type = type;
        this.data = data;
    }

    typeIs(...types){
        return types.includes(this.type);
    }

    getSender(){
        return this.sender;
    }

    getData(){
        return this.data;
    }
}
