const petfinder = require('@petfinder/petfinder-js')




const client = new petfinder.Client({ apiKey: "ZjCl1TsvtcaRbbI9YrNPR3Tb7RtDFrC62KtjXleOl22FIIyvQi", secret: "rGvvVKhJ7Ho20y6Mf3Y20rKiMKf4yEN4UBIDx1HF" });

async function showAnimals(animalType, searchBreed) {
    
    

    let page = 1;
    do {
        apiResult = await client.animal.search({
            type: animalType,
            breed: searchBreed,
            page,
            limit: 100,
        });
        let dogIdx = (page - 1) * 100;
        apiResult.data.animals.forEach(function (animal) {
            console.log(` -- ${++dogIdx}: ${animal.name} id: ${animal.id} url: ${animal.url}`);
        });

        page++;
    } while (apiResult.data.pagination && apiResult.data.pagination.total_pages >= page);
}

(async function () {
    await showAnimals("Horse");
})();