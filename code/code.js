
document.getElementById('check').addEventListener('click', function() {
        let x = +document.getElementById('marksInput').value;

    switch (true) {
        case (x < 50):
            alert("Failed");
            break;
        case (x < 59):
            alert("Passed");
            break;
        case (x < 69):     
            alert("C+");
            break;
        case (x < 79):
            alert("B+");
            break;
        case (x < 89):
            alert("A");
            break;
        case (x < 99):
            alert("A+");
            break;
        case (x <= 100):
            alert("A++");
            break;
        default:
            alert("Numbers Only");
    }
});

