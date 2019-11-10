# MobileCode

Utility Mobile code

# Insatllation
npm install nodemobilecode --save

# Usage

const nodemobilecode = require('nodemobilecode');

const mobileCode = new nodemobilecode(10);

const phoneList = ["6172201234", "9051234567", "9087654321"];

// Add the phone list
phoneList.forEach(phone => mobileCode.add(phone));

// Show all the codes
console.log("Here are the code list:")
mobileCode.list();
