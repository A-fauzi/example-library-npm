function generateRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min)
}

const generateNIK = (gender, dob, provinceId, regencyId, districtId) => {

    let id = generateRandomNumber(1, 1000);
    id = id.toString().padStart(4, "0");

    let date = dob.split('-');
    let year = date[0].slice(2, 4);
    let month = date[1];
    let day = date[2];

    if (gender.toLowerCase() === 'perempuan') {
        day = Number(day) + 40;
    }

    let nik = `${provinceId}${regencyId}${districtId}${day}${month}${year}${id}`;

    return nik;
}

module.exports = { generateNIK };