'use strict';

import mongoose from 'mongoose';

const UserSchema = new mongoose.Schema({
    startId: String,
    type: {
        type: String,
        enum : ['REGULAR','PHOTOGRAPHER'],
        default : 'REGULAR'
    },
    userId: String
});

export default mongoose.model('User', UserSchema);