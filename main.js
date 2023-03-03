var images =
    ["https://i.postimg.cc/MKdhy06Z/family.jpg", "https://img.freepik.com/vetores-premium/homens-polegares-para-cima-ilustracao-de-personagem-de-desenho-animado_52453-39.jpg",
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
