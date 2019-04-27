// -------------------normalize------------------------

export function normalize(data, limitUpDown) {
    let i;
    for (i=0; i<limitUpDown; i++){
        let max = data[0];
        let positionMax;
        let removedMax;
        for (const datum of data) {
            if (max < datum){
                max = datum;
            }
        }
        positionMax = data.indexOf(max);
        removedMax = data.splice(positionMax,1);

        let min = data[0];
        let positionMin;
        let removedMin;
        for (const datum of data) {
            if (min > datum){
                min = datum;
            }
        }
        positionMin = data.indexOf(min);
        removedMin = data.splice(positionMin,1);
    }

    return data;
}