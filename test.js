

let clusterQuantity = 9000
let loadCapacity = 21000

global.loadCapacityConfigs = [
    {
      actualCapacity: 21000,
      minFinalClusterCapacity: 10000,
      finalLoadCapacityRange: { min: 19000, max: 21000 }
    }
]  

let finalClusterUtilizationOk = () => {
    let capacityConfigs = global.loadCapacityConfigs?.find(({actualCapacity}) => actualCapacity == loadCapacity)
    if(!capacityConfigs) return false
    // Cluster capacity is greater than or equal to min allowed final cluster capacity
    return clusterQuantity >= capacityConfigs.minFinalClusterCapacity
}

console.log(finalClusterUtilizationOk())

// let timeoutID;

// function setOutput(outputContent) {
//     document.querySelector("#output").textContent = outputContent;
// }

// function delayedMessage() {
//     timeoutID = setTimeout(setOutput, 5 * 1000, "That was really slow!");
// }

// function clearMessage() {
//     clearTimeout(timeoutID);
// }


//=================================================================================

// console.log(`start: ${new Date().getTime()}`);

// let p = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve('Promise resolved!!')
//     }, 3000);
// })

// // let startTime = new Date().getTime()
// // let endTime = new Date().getTime()
// // while (endTime < startTime + 5000) {
// //     endTime = new Date().getTime()
// // }

// let timeoutID = setTimeout(() => {
//     console.log(`time out completed: ${new Date().getTime()}`);
// }, 6000);

// console.log(`timerId: ${timeoutID}`);
// clearTimeout(timeoutID)

// async function main() {

//     setTimeout(() => {
//         console.log(`time out completed at: ${new Date().getTime()}`);
//     });

//     await p.then(r => console.log(r))
// }

// console.log(`end: ${new Date().getTime()}`);

// main()
//=================================================================================

// const id1 = "96237728-39e7-46ff-a42f-7f015f553bf6" // FRET00000000024, CH876543
// const id2 = "3f04b2c3-f3c0-4e2d-8cd2-e83ed4f6e966w" // FRET00000000025, TEST_004

// let p1 = fetch(`https://apis.fretron.com/shipment/v1/shipment/${id1}`,
//     {
//         headers: {
//             Authorization: "Beaer eyJhbGciOiJIUzI1NiJ9.eyJpYXQiOjE3MjEwMjIyODksInVzZXJJZCI6ImM2YjBkYTA5LTk1NTItNDgzZC1iZGFhLTdlZDdjMDIwODdhMCIsImVtYWlsIjoidmlrcmFtLmJhZGVzYXJhQGZyZXRyb24uY29tIiwibW9iaWxlTnVtYmVyIjoiOTQ5OTQyNDMwNCIsIm9yZ0lkIjoiNDk1Yjg3MjgtYzc2MS00ZmE3LTgzZmUtZGI3NWE3ZDYzMjIxIiwibmFtZSI6IlZpa3JhbSBCYWRlc2FyYSIsIm9yZ1R5cGUiOiJGTEVFVF9PV05FUiIsImlzR29kIjp0cnVlLCJwb3J0YWxUeXBlIjoiYmFzaWMifQ.EnOkazmz7jQZzgdgp-j7NNaIVhCL9wly-vWHeywji2E"
//         },
//         json: true,
//         method: 'DELETE'
//     }
// )

// let p2 = fetch(`https://apis.fretron.com/shipment/v1/shipment/${id2}`,
//     {
//         headers: {
//             Authorization: "Beaer eyJhbGciOiJIUzI1NiJ9.eyJpYXQiOjE3MjEwMjIyODksInVzZXJJZCI6ImM2YjBkYTA5LTk1NTItNDgzZC1iZGFhLTdlZDdjMDIwODdhMCIsImVtYWlsIjoidmlrcmFtLmJhZGVzYXJhQGZyZXRyb24uY29tIiwibW9iaWxlTnVtYmVyIjoiOTQ5OTQyNDMwNCIsIm9yZ0lkIjoiNDk1Yjg3MjgtYzc2MS00ZmE3LTgzZmUtZGI3NWE3ZDYzMjIxIiwibmFtZSI6IlZpa3JhbSBCYWRlc2FyYSIsIm9yZ1R5cGUiOiJGTEVFVF9PV05FUiIsImlzR29kIjp0cnVlLCJwb3J0YWxUeXBlIjoiYmFzaWMifQ.EnOkazmz7jQZzgdgp-j7NNaIVhCL9wly-vWHeywji2E"
//         },
//         json: true,
//         method: 'DELETE'
//     }
// )


// async function main() {

//     // let res = await Promise.all([p1, p2])
//     let res = await p1.then(res => {
//         console.log(JSON.parse(res));
//     })
//     console.log(res);
// }
// main()


//=================================================================================

// console.log('start')


// let p1 = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve("Promise Resolved - 1");
//     }, 10000);
// })

// let p2 = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve("Promise Resolved - 2");
//     }, 5000);
// })


// async function main() {
//     console.log(new Date().getTime())

//     p1.then(res => console.log(`v1: ${res}`))
//     p2.then(res => console.log(`v2: ${res}`))

//     console.log(new Date().getTime())
//     console.log('end')
// }
// main()


//=================================================================================


// p.then(res => {
//     console.log(res);
// })

// console.log('end')

// console.log('start')

// setTimeout(() => {
//     console.log('inside set time out of 3s')
// }, 3000);

// setImmediate(() => {
//     console.log('inside immediate')
// })

// console.log('end')


