// MobileCode.js - Mobile text code utilities 
// Author: Simon Li
// Date  : Dec 19, 2018
//
// Usage : $haw1236$%
// const MobileCode = require('nodemobilecode').MobileCode;
// const mobileCode = new MobileCode();

"use strict";

class MobileCode {
    constructor() { // Create an empty container
        this.hashMobileCodes = {};
    }

    // Generate a random code - default 6 numeric string
    generateMobileCode(number = 6) {
        //number = number || 6;
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
