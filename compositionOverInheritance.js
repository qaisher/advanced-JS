class pizza {
    constructor(size, crust, sauce) {
        this.size = size;
        this.crust = crust;
        this.sauce = sauce;
        this.toppings = [];
    }
    prepare() {console.log ('Preparing.....')}
    bake() { console.log('Baking')}
    ready() { console.log('Ready.')}
}



class salad {
    constructor(size, dressing) {
        this.size = size;
        this.dressing = dressing;
    }
    prepare() {console.log ('Preparing.....')}
    tossing() { console.log('Tossing')}
    ready() { console.log('Ready.')}
}

class stuffedCrustPizza extends pizza {
    stuff() { console.log('Stuffing the crust')}
}

class butterCrustPizza extends pizza {
    butter() { console.log('Buttering the crust')}
}


//problem: Repeating methods - not DRY
class stuffedButteredCrustPizza export pizza {
    stuff() { console.log('Stuffing the crust')}
    butter() { console.log('Buttering the crust')}
}

const myPizza = new stuffedButteredCrustPizza();
myPizza.stuff();
myPizza.butter();

//Instead use composition
const prepare = () => {
    return {
        prepare: () => console.log('Preparing...');
    }
}

const bake = () => {
    return {
        bake: () => console.log('BAking..')
    }
}

const toss = () => {
    return { toss: () => console.log('Tossing...')}
}

const ready = () => {
    return {
        ready: () => console.log('Ready.')
    }
}

const stuff = () => {
    return { stuff() {console.log('Stuffing the crust...')}
}

const butter = () => {
    return { toss(){ console.log('Buttering the crust...')}
}

const createPizza = (size, crust, sauce) => {
    const pizza = {
        size: size,
        crust: crust,
        sauce: sauce,
        toppings: []
    }
    return {
        ...pizza,
        ...prepare(),
        ...bake(),
        ...ready()
    }
}