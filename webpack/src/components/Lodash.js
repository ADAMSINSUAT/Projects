import { map, xor, xorBy, xorWith, union, includes, difference, differenceWith, filter, flatten, flattenDeep, uniq, sortedIndexBy } from "lodash";
import React from "react";

export default function Lodash() {
    //4-a get the symmetrical difference
    const arrOne = [{
        id: 20,
        name: 'alex',
    }, {
        id: 30,
        name: 'alina'
    }]

    const arrTwo = [{
        id: 40,
        name: 'hello',
    }, {
        id: 30,
        name: 'world',
    }]

    //4-b
    const str = ['u', 'ec'];
    const arr = [
        { storageVal: 'u', table: ['E', 'F'] },
        { storageVal: 'data', table: ['E', 'F'] },
        { storageVal: 'ec', table: ['E'] },
    ];

    //4-c Flatten an array
    const a = [['E'], ['F']];

    //4-d
    const t = [
        ['E', 'F'],
        [['F'], ['G']],
    ];

    //4-a Answer
    console.log("4-a Answer 1:", xorBy(arrOne, arrTwo, 'id'));
    console.log("4-a Answer 2:", difference(union(arrOne, arrTwo), (xorBy(arrOne, arrTwo, 'id'))));

    //4-b Answer
    const filterArr = filter(arr, (obj) => {
        return includes(str, obj.storageVal)
    });
    console.log("4-b Answer:", map(filterArr, data => data.table))

    //4-c Answer
    console.log("4-c Answer:", flatten(a));

    //4-d Answer
    let flattenDeepArr = uniq(flattenDeep(t))
    var swapArrayLocs = function (arr, index1, index2) {
        var temp = arr[index1];

        arr[index1] = arr[index2];
        arr[index2] = temp;
    }
    swapArrayLocs(flattenDeepArr, 1, 2);
    console.log("4-d Answer:", flattenDeepArr);

    return (
        <>
            Please check the console for the answers...
        </>
    )
}