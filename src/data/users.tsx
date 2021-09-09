// This module contains hardcoded metadata on users
// Later this will be served by the backend

import { userModel } from "../dataModels/users"

export const users: userModel[] = [
    {
        id: "USR:0000001",
        firstName: "Carry",
        lastName: "Catfish",
        isDataSteward: false,
        icon: "fas fa-user-graduate"
    },
    {
        id: "USR:0000002",
        firstName: "Mike",
        lastName: "Mushroom",
        isDataSteward: true,
        icon: "fas fa-user-astronaut"
    }
]
