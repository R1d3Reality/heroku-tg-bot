'use strict';

import log from 'npmlog';

import User from './user.model'

export default class UserDao {

    findAllRegisteredRepairers() {
        log.verbose('UserRepository', `Searching for all photographers`);
        return User.find({'type' : 'PHOTOGRAPHER', userId : {$ne : null}});
    }

    findRepairerByStartId(startId) {
        log.verbose('UserRepository', `Searching for photographer with start id ${startId}`);
        return User.findOne({'startId' : startId, 'type' : 'PHOTOGRAPHER'});
    }

    save(user) {
        log.verbose('UserRepository', `Saving user ${JSON.stringify(user)} `);
        return user.save();
    }
}