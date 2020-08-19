'use strict';

class Entry {
    constructor
        (
            uuid,
            date,
            startMileage,
            endMileage,
            routeDest,
            notes,
            car,
            roadCondition,
            companion,
            user
        ) {
        this.uuid = uuid;
        this.date = date;
        this.startMileage = startMileage;
        this.endMileage = endMileage;
        this.routeDest = routeDest;
        this.notes = notes;
        this.car = car;
        this.roadCondition = roadCondition;
        this.companion = companion;
        this.user = user;
    }
}

module.exports = Entry;