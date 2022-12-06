const transformData = (data) => {
    const result = data.map((person) => {
        const birthdateObject = new Date(person.dob.date);
        const formattedBirthday = birthdateObject.toDateString();
        return {
            fullName: `${person.name.first} ${person.name.last}`,
            birthday: formattedBirthday
        }
    })
    return result;
}

console.log(transformData(userData));