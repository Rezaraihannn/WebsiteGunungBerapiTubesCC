const namaMantan = ["komang","made","Ari"];

namaMantan.forEach( function(item,index,array) {

    console.log(item,index,array);
});


namaMantan.push("Asep");

const namaMantanLama = namaMantan.slice();

namaMantan.pop();

// console.log("Nama Mantan :", namaMantan);
// console.log("Nama Mantan lama : ", namaMantanLama);

// for (let index = 0; index < namaMantan.length; index++) {
//     const element = namaMantan[index];
//     console.log(element);
// }

let index=0
while (index < namaMantan.length) {
    const element = namaMantan[index];
    console.log(element);
    index++
}