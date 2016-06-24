export const sumObject = obj => {
    let sum = 0;

    for(let el in obj) {
        if(obj.hasOwnProperty(el)) {
          sum += parseFloat(obj[el]);
        }
    }
    return sum;
};
