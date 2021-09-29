"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const raccoon_meadows_log_1 = require("./raccoon-meadows-log");
const wolf_point_log_1 = require("./wolf-point-log");
function combineVolunteers(volunteers) {
    return volunteers.map(volunteer => {
        let id = volunteer.id;
        if (typeof id === 'string') {
            id = parseInt(id, 10);
        }
        return {
            id: id,
            name: volunteer.name,
            activities: volunteer.activities
        };
    });
}
function isVerified(verified) {
    if (typeof verified === 'string') {
        if (verified === 'Yes') {
            return true;
        }
        return false;
    }
    return verified;
}
function getHours(activity) {
    if ('hours' in activity) {
        return activity.hours;
    }
    return activity.time;
}
function calculateHours(volunteers) {
    return volunteers.map((volunteer) => {
        let hours = 0;
        volunteer.activities.forEach((activity) => {
            if (isVerified(activity.verified)) {
                hours += getHours(activity);
            }
        });
        return {
            id: volunteer.id,
            name: volunteer.name,
            hours: hours,
        };
    });
}
const combinedVolunteers = combineVolunteers([].concat(wolf_point_log_1.wolfPointVolunteers, raccoon_meadows_log_1.raccoonMeadowsVolunteers));
console.log(calculateHours(combinedVolunteers));
//# sourceMappingURL=index.js.map