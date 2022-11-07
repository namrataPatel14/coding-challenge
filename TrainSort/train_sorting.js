const train_sort = (numberOfCars, weightOfCars) => {
    const train = [];
    let baseWeight = weightOfCars[0];
    if (weightOfCars) {
        train.push(weightOfCars[0]);
        for (let i = 1; i < numberOfCars; i++) {
            if (baseWeight > weightOfCars[i]) {
                train.unshift(weightOfCars[i]);
            } else if (baseWeight <= weightOfCars[i]) {
                train.push(weightOfCars[i]);
            } else {
                continue;
            }
        }
    }
}

train_sort(3, [1, 2, 3]);
train_sort(5, [10, 2, 12, 20, 3]);
