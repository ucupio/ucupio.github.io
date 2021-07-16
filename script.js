
function pre() {
    let pre = document.getElementsByTagName('pre'),
        pl = pre.length;
    for (let i = 0; i < pl; i++) {
        pre[i].innerHTML = '<span class="line-number"></span>' + pre[i].innerHTML + '<span class="cl"></span>';
        let num = pre[i].innerHTML.split(/\n/).length;
        for (let j = 0; j < num; j++) {
            let line_num = pre[i].getElementsByTagName('span')[0];
            line_num.innerHTML += '<span>' + (j + 1) + '</span>';
        }
    }
}


const data = [
    {
        judul: 'GIT & CLI',
        deskripsi: 'Git adalah salah satu sistem pengontrol versi (Version Control System) pada proyek perangkat lunak yang diciptakan oleh Linus Torvalds. Pengontrol versi bertugas mencatat setiap perubahan pada file proyek yang dikerjakan oleh banyak orang maupun sendiri. Git dikenal juga dengan distributed revision control (VCS terdistribusi), artinya penyimpanan database Git tidak hanya berada dalam satu tempat saja.',
        codebox: `git status //untuk melihat status git
        git clone //untuk mengklon repository
        git branch -b namabranch //untuk membuat branch baru
        git add . //untuk memasukan file yang mengalami perubahan untuk nantinya dikomit
        git commit -m "keterangan komit" //untuk membuat komit
        git push origin branch ///untuk menambahkan pull request`,
    },
    {
        judul: 'Algoritma & Pseudocode',
        deskripsi: 'Algoritma adalah kumpulan proses ataupun aturan untuk melakukan atau menyelesaikan sesuatu. sedangkan Pseudocode adalah konvensi terstruktur atau cara menyajikan penjelasan algoritma dengan bahasa yang deskriptif seperti kita menulis kalimat biasa sehingga mudah kita baca.Umumnya digunakan bahasa Inggris atau bahasa perantara yang mirip bahasa pemrograman.',
        codebox: `// menyimpan dan memberi nilai variabel
        STORE "width" with any value
        STORE "height" with any value
        STORE "area" without any value
        
        CALCULATE "width" times "height"
        SET "area" value with calculation result
        
        DISPLAY "area"
        //conditional
        IF "hungry"
            DO "eat"
        DISPLAY "i am happy"
        //loop
        WHILE "hungry"
            DO "eat"`,
    },
    {
        judul: 'Primitive Data Type',
        deskripsi: 'Tipe data dalam JavaScript dibedakan menjadi 2 kelompok, yakni tipe data dasar (primitif) dan tipe data objek. Tipe data dasar terdiri dari tipe data angka, tipe data text (string), dan tipe data boolean. Tipe data null dan undefined juga merupakan tipe data dasar, namun memiliki jenis tersendiri. Selain ke-5 tipe data dasar tersebut, tipe data lain yang ada di dalam JavaScript adalah tipe data objek.',
        codebox: `Number: tipe data dengan nilai berupa angka
        String: tipe data dengan nilai berupa kumpulan atau set dari beberapa karakter
        Boolean: tipe data dengan nilai berupa true atau false`,
    },
    {
        judul: 'Conditional',
        deskripsi: 'Kondisional adalah sebuah metode dimana kode akan mengecek apakah sebuah premis benar atau tidak. Jika kondisi sesuai, maka kode dalam kondisional akan dijalankan.',
        codebox: `if(true) {
            console.log("Jalankan kode"); // baris kode ini akan di panggil
        }

        //if else
        var tampung = 5;
        if(tampung == 5) {
        console.log("angka yang ditampung adalah 5!");
        }
        else {
        console.log("angka yang ditampung bukan 5!");
        }
        
        //if -else if - else
        var tampung = 5;
        if(tampung == 5) {
        console.log("angka yang ditampung adalah 5!");
        }
        else if(tampung < 5) {
            console.log("angka yang ditampung bukan 5, tapi lebih kecil dari 5.");
        }
        else {
        console.log("angka yang ditampung bukan 5, tapi lebih besar dari 5.");
        }
        
        //switch
        var buttonPushed = 1;
        switch(buttonPushed) {
        case 1:   { console.log('matikan TV!'); break; }
        case 2:   { console.log('turunkan volume TV!'); break; }
        case 3:   { console.log('tingkatkan volume TV!'); break; }
        case 4:   { console.log('matikan suara TV!'); break; }
        default:  { console.log('Tidak terjadi apa-apa'); }
        }`,
    },
    {
        judul: 'Function',
        deskripsi: 'Struktur IF adalah stuktur kode pemograman ‘conditional’ yang akan membuat percabangan di dalam program. Dengan menggunakan struktur IF, kita bisa membuat 2 percabangan program yang akan dieksekusi jika ‘kondisi’ terpenuhi, dan akan menjalankan kode program lain jika ‘kondisi’ tidak terpenuhi.',
        codebox: `function nama_function(parameter 1, parameter 2, ...) {
            [Isi dari function berupa tindakan]
            return [expression];
          }
          //inisialisasi nilai default parameter
          function tampilkanAngka(angka = 1) {
            return angka
          }
          
          console.log(tampilkanAngka(5)) // 5, sesuai dengan nilai parameter yang dikirim
          console.log(tampilkanAngka()) // 1, karena default dari parameter adalah 1`,
    },
    {
        judul: 'Iterasi',
        deskripsi: 'Loop/Iteration adalah tindakan mengulang / merepetisi sebuah proses, dengan tujuan untuk mendapatkan deret hasil, atau dengan tujuan mendapatkan hasil tertentu dengan repetisi. Setiap proses repetisi ini disebut sebagai Iteration atau Looping.',
        codebox: `//while loop
        var flag = 1;
        while(flag < 10) { // Loop akan terus berjalan selama nilai flag masih dibawah 10
        console.log('Iterasi ke-' + flag); // Menampilkan nilai flag pada iterasi tertentu
        flag++; // Mengubah nilai flag dengan menambahkan 1
        }
        //for loop
        for([Inisialisasi], [Kondisi], [Incremental/Decremental]) {
            [Proses] // Merupakan proses yang akan dijalankan dalam satu iterasi
          }`,
    },
    {
        judul: 'Array & object',
        deskripsi: 'Array adalah kumpulan dari berbagai data. Kita bisa tulis dengan kurung kotak (square brackets) dan butir-butirnya dipisah dengan koma. Indeks array berbasis-nol yang berarti urutan awalnya merupakan [0], keduanya [1], dan seterusnya. Kita juga bisa memasukkan (insert), memperbarui/mengubah (update/change), atau bahkan meniadakan (undefine) nilai yang ada di dalam array. Spesifik di JS, kita bisa gunakan beberapa tipe data berbeda di dalam suatu array. Bahkan memasukkan array ke dalam array!. sedangkan Objek adalah kumpulan tidak berurut yang merangkai beberapa property dan property memiliki nama/key dan value (key-value pairs).',
        codebox: `push: menambah 1 nilai ke array ke index paling belakang
        pop: menghapus 1 nilai dari array index paling belakang
        unshift: menambah 1 nilai ke array index paling depan (index 0)
        shift: menghapus 1 nilai dari array index paling depan (index 0)
        join: menggabungkan seluruh element array menjadi sebuah string dan mengambil parameter sebagai simbol penyambung antar elemen
        sort: mengurutkan elemen di dalam array sesuai alphabet
        slice: mengambil beberapa lapis data
        splice: mengubah nilai array dengan menghapus dan/atau menambah nilai baru ke array
        split: memecah string dan mengembalikan array sesuai dengan separator / pemisah yang didefinisikan
        
        // cara deklarasi array 2 dimensi kosong
        var arr2D = [[]];
        // contoh array 2 dimensi
        var arr2D = [ [1,2], [3,4], [5,6] ];
        var murid = [ ['Budi', 'SD 1 Cicayur'], ['Suci', 'SD 23 Beji'] ];
        // cara mengakses nilai didalam array 2 dimensi
        console.log(arr2D[0]);    // [1,2]
        console.log(arr2D[0][1]); // 2
        console.log(murid[1]);    // ['Suci', 'SD 23 Beji']
        console.log(murid[1][1]); // 'SD 23 Beji''
        // array 2 dimensi dengan built-in functions
        arr2D.push([7,8]);        // arr2D = [ [1,2], [3,4], [5,6], [7,8] ]
        arr2D[1].push(0);         // arr2D = [ [1,2], [3,4,0], [5,6], [7,8] ]
        arr2D[0].pop();           // arr2D = [ [1], [3,4,0], [5,6], [7,8] ]
        arr2D[2].pop();           // arr2D = [ [1], [3,4,0], [5], [7,8] ]`,
    },
    {
        judul: 'HTML',
        deskripsi: 'HTML adalah satu dari banyak bahasa markup yang menjadi bagian pembangun dasar sebuah halaman web (webpage). Saat ini versi terbarunya adalah versi 5.1, secara resmi disebut HTML5. Digunakan untuk membuat dan merepresentasikan secara visual sebuah webpage. HTML menentukan konten dari sebuah webpage, namun bukan fungsionalitasnya.',
        codebox: `<!DOCTYPE html>
        <html>
        <head>
        <title>Page Title</title>
        </head>
        <body>
        
        <h1>My First Heading</h1>
        <p>My first paragraph.</p>
        
        </body>
        </html>`,
    },
    {
        judul: 'CSS',
        deskripsi: 'Cascading Style Sheets (CSS) is used to format the layout of a webpage. With CSS, you can control the color, font, the size of text, the spacing between elements, how elements are positioned and laid out, what background images or background colors are to be used, different displays for different devices and screen sizes, and much more!',
        codebox: `//inline css
        <h1 style="color:blue;">A Blue Heading</h1> 
        <p style="color:red;">A red paragraph.</p>

        //internal
        <head>
        <style>
        body {background-color: powderblue;}
        h1   {color: blue;}
        p    {color: red;}
        </style>
        </head>

        //external css
        <head>
        <link rel="stylesheet" href="styles.css">
        </head>`,
    },
    {
        judul: 'DOM',
        deskripsi: 'Document Object Model (DOM) merupakan antarmuka pemrograman untuk dokumen HTML dan XML (juga SVG) terkait. Dengan DOM, kita bisa mengetahui dan mengatur struktur representasi dokumen melalui program terutama JavaScript. Program dapat mengolah struktur, style, dan isi dari dokumen tersebut. Maka dari itu DOM membutuhkan dan menghubungkan antara dokumen dan kode pemrograman.',
        codebox: `var pageTitleElement = document.getElementById("page-title");
        // Menyeleksi DOM berdasarkan Id element dan menampungnya ke dalam variabel. Isinya merupakan object HTML element
        
        var pageBoxElements = document.getElementsByClassName("page-box");
        // Menyeleksi DOM berdasarkan nama class element dan menampungnya ke dalam variabel. Isinya merupakan array dari object HTML element, walau <h1> hanya ada 1.
        
        var pageHeadings = document.getElementsByTagName("h1");
        // Menyeleksi DOM berdasarkan tag <h1> dan menampungnya ke dalam variabel. Isinya merupakan array dari object HTML element
        
        var pageTitleElementsContent = pageTitleElement.innerHTML;
        console.log('isi <div id="page-title"> :' + pageTitleElementsContent);
        // isi <div id="page-title"> adalah Sample Page Title
        
        var pageBoxElementsContent = pageBoxElements.innerHTML;
        console.log('isi <div class="page-box"> :' + pageBoxElementsContent);
        // isi <div class="page-box"> adalah undefined!`,
    },
    

];


for (let i = 0; i < data.length; i++) {
    const element = data[i];
    //create element
    const divItem = document.createElement('div');
    const h3Item = document.createElement('h3');
    const pItem = document.createElement('p');
    const preItem = document.createElement('pre');
    const codeItem = document.createElement('code');
    const divReadmore = document.createElement('div');
    const divTutup = document.createElement('div');
    //create attribute class
    const classItem = document.createAttribute('class');
    const classReadmore = document.createAttribute('class');
    const classTutup = document.createAttribute('class');
    //create value class
    classItem.value = "item";
    classReadmore.value = "readmore";
    classTutup.value = "tutup";
    //set attribute class
    divItem.setAttributeNode(classItem);
    divReadmore.setAttributeNode(classReadmore);
    divTutup.setAttributeNode(classTutup);
    //menangkap element by id
    const catatan = document.getElementById('catatan')
    //membuat text node
    const texth3 = document.createTextNode(`${element.judul}`);
    const textp = document.createTextNode(`${element.deskripsi}`);
    const textcode = document.createTextNode(`${element.codebox}`);
    const textReadmore = document.createTextNode('Baca Selengkapnya...');
    const textTutup = document.createTextNode('x');
    //append child
    catatan.appendChild(divItem)
    h3Item.appendChild(texth3)
    pItem.appendChild(textp)
    codeItem.appendChild(textcode)
    divReadmore.appendChild(textReadmore)
    divTutup.appendChild(textTutup)
    divItem.appendChild(h3Item)
    divItem.appendChild(pItem)
    divItem.appendChild(preItem)
    divItem.appendChild(divReadmore)
    divItem.appendChild(divTutup)
    preItem.appendChild(codeItem)

}

const readmore = document.querySelectorAll('.readmore')
const tutup = document.querySelectorAll('.tutup')

for (let i = 0; i < readmore.length; i++) {
    const element = readmore[i];
    element.addEventListener('click', function () {
        element.parentElement.style.width = '990px'
        element.parentElement.style.height = '600px'
        element.style.top = '560px'
        element.style.display = 'none'
        element.nextElementSibling.style.display = 'block'

    })
}

for (let i = 0; i < tutup.length; i++) {
    const element = tutup[i];
    element.addEventListener('click', function () {
        element.parentElement.style.width = '480px'
        element.parentElement.style.height = '180px'
        element.style.display = 'none'
        element.previousElementSibling.style.top = '140px'
        element.previousElementSibling.style.display = 'block'
    })
}

pre();

function getPilihanComputer() {
    const comp = Math.random()
    if (comp < 0.34) return 'gajah'
    if (comp < 0.67) return 'orang'
    return 'semut'
}

function getHAsil(comp, player){
    if (player == comp) return 'Seri!'
    if (player == 'gajah') return (comp == 'orang') ? 'Menang!' : 'Kalah!'
    if (player == 'orang') return (comp == 'semut') ? 'Menang!' : 'Kalah!'
    if (player == 'semut') return (comp == 'gajah') ? 'Menang!' : 'Kalah!'
}

const pilihan = document.querySelectorAll('li img')
pilihan.forEach(function(pil){
    pil.addEventListener('click', function () {
        const pilihanComputer = getPilihanComputer();
        const pilihanPlayer = pil.className;
        const hasil = getHAsil(pilihanComputer, pilihanPlayer)

        const imgComputer = document.querySelector('.img-computer')
        imgComputer.setAttribute('src', `img/${pilihanComputer}com.png`)
        const imgPlayer = document.querySelector('.img-player')
        imgPlayer.setAttribute('src', `img/${pilihanPlayer}.png`)

        const info = document.querySelector('.info')
        info.innerHTML = hasil
    })
})

const coll = document.querySelector(".collapsible");
coll.addEventListener("click", function() {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.display === "block") {
      content.style.display = "none";
    } else {
      content.style.display = "block";
    }
  });

const tombolUbahWarna = document.getElementById('tombolUbahWarna')
tombolUbahWarna.onclick = function () {
    document.body.classList.toggle('orange-tua')
}

const tAcakWarna = document.createElement('button')
const teksTombol = document.createTextNode('Acak Warna')
tAcakWarna.appendChild(teksTombol)
tAcakWarna.setAttribute('type', 'button')
tombolUbahWarna.after(tAcakWarna);
tAcakWarna.addEventListener('click', function(){
    const r = Math.round(Math.random()*255 +1)
    const g = Math.round(Math.random()*255 +1)
    const b = Math.round(Math.random()*255 +1)
    document.body.style.backgroundColor = 'rgb('+ r +','+ g +','+ b +')'
})

const sMerah = document.querySelector('input[name=sMerah]')
const sHijau = document.querySelector('input[name = sHijau]')
const sBiru = document.querySelector('input[name = sBiru]')
 
  
const slider = document.querySelectorAll('input')
for (let i = 0; i < slider.length; i++) {
    const element = slider[i];
    element.addEventListener('input', function () {
        const r = sMerah.value;
        const g = sHijau.value;
        const b = sBiru.value;
        document.body.style.backgroundColor = 'rgb('+ r +','+ g +','+ b +')'
    })
}