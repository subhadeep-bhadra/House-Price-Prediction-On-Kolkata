// Sample data
const areas = [1000, 1500, 1800, 2400, 3000, 3500];
const prices = [3000000, 4500000, 5000000, 6500000, 8000000, 9500000];

// Chart setup
const ctx = document.getElementById('priceChart').getContext('2d');

const priceChart = new Chart(ctx, {
    type: 'line',
    data: {
        labels: areas,
        datasets: [{
            label: 'Price vs Area',
            data: prices,
            borderWidth: 2,
            tension: 0.3
        }]
    }
});

// Prediction function
function predictPrice() {
    let area = document.getElementById("area").value;
    let bedrooms = document.getElementById("bedrooms").value;
    let age = document.getElementById("age").value;
    let location = document.getElementById("location").value;

    if(area === "" || bedrooms === "" || age === "" || location === "") {
        alert("Please fill all fields");
        return;
    }

    // Price per sq ft based on location
    let pricePerSqft = {
        saltlake: 6000,
        newtown: 5500,
        parkstreet: 8000,
        garia: 4000,
        howrah: 3500,
        Khardah: 1600,
        Sodhpur: 1800,
        Maddhymgram:2000,
        Barrackpur: 2600
    };

    let basePrice = area * pricePerSqft[location];

    let bedroomFactor = bedrooms * 300000;
    let ageFactor = age * 8000;

    let finalPrice = basePrice + bedroomFactor - ageFactor;

    document.getElementById("result").innerText =
        "Estimated Price: ₹ " + finalPrice.toLocaleString();

    // Add to chart
    priceChart.data.labels.push(area);
    priceChart.data.datasets[0].data.push(finalPrice);
    priceChart.update();
}