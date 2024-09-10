








const images = [
    'images/car1.png',
    'images/car2.png',
    'images/car3.png',
    'images/car4.png'
];

document.getElementById('btnStart').addEventListener('click', function() {
    const input = document.getElementById('input');
    const numCompetitors = parseInt(input.value);

    if (isNaN(numCompetitors) || numCompetitors < 2 || numCompetitors > 4) {
        alert('אנא בחר מספר בין 2-4');
        return;
    }

    // ניקוי שורות מירוץ קיימות
    const raceRows = document.querySelectorAll('.race-row');
    raceRows.forEach(row => row.remove());

    const container = document.getElementById('race-container');
    container.innerHTML = ''; 

    // יצירת שורות מירוץ
    for (let i = 0; i < numCompetitors; i++) {
        const raceRow = document.createElement('div');
        raceRow.className = 'race-row'; 

          // הוספת קו סיום
          const finishLine = document.createElement('div');
          finishLine.className = 'finish-line';
          raceRow.appendChild(finishLine);
  

        const carImage = document.createElement('img');
        carImage.className = 'car-image';
        carImage.src = images[i]; 
        raceRow.appendChild(carImage);

        container.appendChild(raceRow);
    }

    // הצגת כפתור איפוס
    document.getElementById('resetBtn').style.display = 'block';

    // התחלת המירוץ
    startRace(numCompetitors);
});


document.getElementById('resetBtn').addEventListener('click', function() {
    // ניקוי התוצאות והמסלולים
    document.getElementById('race-container').innerHTML = '';
    document.getElementById('results').innerHTML = '';
    
    this.style.display = 'none';
});

function startRace(numCompetitors) {
    const rows = document.querySelectorAll('.race-row');
    const endPosition = window.innerWidth - 100;
    let finishedCars = [];
    let totalCars = rows.length;

    rows.forEach((row, index) => {
        const carImage = row.querySelector('.car-image');
        const startPosition = parseFloat(getComputedStyle(carImage).left);
        let currentPosition = startPosition;
        let speed = Math.random() * 5 + 3;
        let startTime = Date.now();
        let intervalId;

        function move() {
            speed = Math.random() * 50 + 3;  
            currentPosition += speed;
            if (currentPosition < endPosition ) {
                carImage.style.left = `${currentPosition}px`;
            } else {
                
                carImage.style.left = `${endPosition}px`;
                if (!(finishedCars.length === totalCars)) {
                    finishedCars.push({ index: index + 1, time: (Date.now() - startTime) / 1000 });
                }

                clearInterval(intervalId); 

                if (finishedCars.length === totalCars) {
                    finishedCars.sort((a, b) => a.time - b.time);
                    displayResults(finishedCars);

                }
            }
        }

        intervalId = setInterval(move, 100); 
    });
}


function displayResults(finishedCars) {

    const resultsDiv = document.getElementById('results');
    resultsDiv.innerHTML = '';

    finishedCars.forEach((car, i) => {
        const resultP = document.createElement('p');
        switch (i) {
            case 0: resultP.style.color = 'yellow'; break;
            case 1: resultP.style.color = 'gray'; break;
            case 2: resultP.style.color = 'brown'; break;
        }
        resultP.innerText = `מקום ${i + 1}: רכב ${car.index} - זמן סיום: ${car.time.toFixed(2)} שניות`;
        resultsDiv.appendChild(resultP);
        // console.log(`Car ${car.index} finished in ${car.time.toFixed(2)} seconds.`);

    });
}
