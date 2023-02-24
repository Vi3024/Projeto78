var images =
    ["https://i.postimg.cc/MKdhy06Z/family.jpg", "https://o.remove.bg/downloads/202f4024-def3-40c6-aca0-0341c0fe5453/fdac4b53fd416f318c75a8c73bd768ec-removebg-preview.png",
        "https://i.postimg.cc/wjMnFtMX/father.jpg", "https://i.postimg.cc/5ymDKL83/bro.jpg",
        "https://i.postimg.cc/JnL6wtrd/sister.jpg", "https://i.postimg.cc/bw5W5zSK/mother.jpg"];

var names =
    ["Álbum de Família", "Rodrigo Silva", "Diego Silva", "Roberto Silva", "Aline Silva", "Sonia Silva"];


var i = 0;
function update() {

    i++;
    var numbersOfFamilyMemberInArray = 5
    if (i > numbersOfFamilyMemberInArray) {
        i = 0;
    }
    var updatedImage = images[i];
    var updatedName = names[i];
    document.getElementById("familyMemberImage").src = updatedImage;
    document.getElementById("familyMemberName").innerHTML = updatedName;
}