'use strict';

import User from '../services/user/user.model'

export default class SeedDb {
    static seed() {
        return User.find({}).remove()
            .then(()=> {
                return User.create({
                    startId: 'photographer1',
                    type: 'PHOTOGRAPHER'
                }, {
                    startId: 'photographer2',
                    type: 'PHOTOGRAPHER'
                }, {
                    startId: 'photographer3',
                    type: 'PHOTOGRAPHER'
                })
            })
            .then(() => {
                console.log('Finished populating users');
            });
    }
}