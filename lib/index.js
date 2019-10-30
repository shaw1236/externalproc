// MobileCode.js - Mobile text code utilities 
// Author: Simon Li
// Date  : Dec 19, 2018
//
// Usage : $haw1236$%
//const nodemobilecode = require('nodemobilecode');
//const mobileCode = new nodemobilecode();

/* == Usage ==
const nodemobilecode = require('nodemobilecode');
const mobileCode = new nodemobilecode();

const phoneList = ["6172201234", "9051234567", "9087654321"];

// Add the phone list
phoneList.forEach(phone => mobileCode.add(phone));

// Show all the codes
console.log("Here are the code list:")
mobileCode.list();

// Get the code for a phone number 
console.log(`phone: ${phoneList[1]}, code: ${mobileCode.get(phoneList[1])}`);

// Remove a code pair 
console.log(`Here are the code list after removal of ${phoneList[1]}:`);
mobileCode.remove(phoneList[1]);
*/

"use strict";

class MobileCode {
    constructor(len = 6) { // Create an empty container
        this.hashMobileCodes = {};
        this.length = len;
    }

    // Generate a random code 
    generateMobileCode() {
        //number = number || 6;
        const number = this.length;
        const base = Math.pow(10,  number - 1);
        return Math.floor(base + Math.random() * 9 * base); 
    }

    // List all the codes within the container
    listMobileCodes() {
        for (var key in this.hashMobileCodes) {
            if (this.hashMobileCodes.hasOwnProperty(key)) {  
                 console.log(`${key} -> ${this.hashMobileCodes[key]}`);
            }
        }
    }
 
    // Add a phone into the container 
    addMobileCode(mobile) {
        this.hashMobileCodes[mobile] = this.generateMobileCode();
    }

    // Add a phone list into the container 
    addMobileCodes(listMobile) {
        listMobile.forEach(mobile =>   
            this.hashMobileCodes[mobile] = this.generateMobileCode());
    }

    // Get the code for this phone
    getMobileCode(mobile) {
        return this.hashMobileCodes[mobile];
    }

    // Has the container included the phone?
    hasMobileCode(mobile) {
        return this.hashMobileCodes.hasOwnProperty(mobile);
    }

    // Is the key already included in the container?
    hasMobileCode(mobile) {
        return this.hashMobileCodes.hasOwnProperty(mobile);
    }

    // Verify the code against the phone stored in the container
    verifyMobileCode(mobile, code) {
        if (!this.hashMobileCodes.hasOwnProperty(mobile)) {
           console.log(`${mobile} is not on the list`); 
           return false;
        }
        return this.hashMobileCodes[mobile] == code;
    }

    // Remove the phone from the container
    removeMobileCode(mobile) {
        delete this.hashMobileCodes[mobile];
    }
    
    //// Shorten version
    // Add a phone into the container 
    add(mobile) {
        this.hashMobileCodes[mobile] = this.generateMobileCode();
    }
    
    // Get the code for this phone
    get(mobile) {
        return this.hashMobileCodes[mobile];
    }
    
    // Remove the phone from the container
    remove(mobile) {
        delete this.hashMobileCodes[mobile];
    }

    // Verify the code against the phone stored in the container
    verify(mobile, code) {
        if (!this.hashMobileCodes.hasOwnProperty(mobile)) 
           return false;
        else 
           return this.hashMobileCodes[mobile] == code;
    }

    // Has the container included the phone?
    has(mobile) {
        return this.hashMobileCodes.hasOwnProperty(mobile);
    }
    
    // List all the codes within the container
    list() {
        Object.keys(this.hashMobileCodes).forEach(key => 
                 console.log(`${key} -> ${this.hashMobileCodes[key]}`));
    }
}

module.exports = MobileCode;
