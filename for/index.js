// 5) a-
var random = ["banana", "car", "flip flop", "camara", "dolphin"];
for (let i = 0; i < random.length; i++) {
    alert(random[i]);
};

// b-
for (let i = 0; i < random.length; i++) {
    random[i] = random[i][0].toUpperCase() + random[i].substr(1, ).toLowerCase();
    alert(random[i]);
};

// c-
var sentence = ""
for (let i = 0; i < random.length; i++) {
    sentence = sentence + random[i];    
};
alert(sentence);

// d-
var empty = [];
for (let i = 0; i < 10; i++) {
    empty[i] = i;
};
console.log(empty);
