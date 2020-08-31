'use strict';

class Entry {
    constructor
        (
            uuid,
            startDate,
            endDate,
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
        this.startDate = startDate;
        this.endDate = endDate;
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