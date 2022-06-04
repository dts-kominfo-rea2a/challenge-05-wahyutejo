const names = ["Halo", "Angel", "Nyoman", "Ketut", "Aisyah"];

// TODO: Fungsi utama
// Menerima 2 parameter: list nama dan callback sort
// Mengembalikan array of string dengan format:
// "1. Nama"
// "2. Nama"
// ...
const sorter = (fnName, call) => {
  let sorterName = [];

  for (let name = 0; name < fnName.length; name++) {
    if (call) {
      let list = name + 1 + ". " + call(fnName)[name];
      sorterName.push(list);
    }
  }

  return sorterName;
};

// TODO: Fungsi untuk mengurutkan array of string secara ascending
// mengembalikan array yang sudah diurutkan
const sortAscending = (fnAsc) => {
  let asc = fnAsc.sort();
  return asc;
};

// TODO: Fungsi untuk mengurutkan array of string secara descending
// mengembalikan array yang sudah diurutkan
const sortDescending = (fnDesc) => {
  let desc = fnDesc.sort().reverse();
  return desc;
};

// ! JANGAN DIMODIFIKASI
(function main() {
  console.log(sorter?.(names, sortAscending)?.join("\n"));
  console.log(sorter?.(names, sortDescending)?.join("\n"));
})();

module.exports = {
  sorter,
  sortAscending,
  sortDescending,
  names,
};
