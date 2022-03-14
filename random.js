function normalFunction() {
    console.log('normalFunction: ', this);
}

const arrowFunction = () => {
    console.log('arrowFunction: ', this);
}

const obj = {
    name: 'Bob',
    functionPrint: function() {
        console.log('funcitonPrint: ', this)
    },
    arrowPrint: () => {
        console.log('arrowPrint: ', this);
    }
}

// normalFunction();
// arrowFunction();

obj.functionPrint()
obj.arrowPrint()