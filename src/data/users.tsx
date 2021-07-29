// This module contains hardcoded metadata on users
// Later this will be served by the backend

import { user } from "../dataModels/users"

export const hardCodedUserId="GHGAU-812092343" 

export const users: user[] = [
    {
        id: hardCodedUserId,
        firstName: "Carry",
        lastName: "Catfish",
        isDataSteward: false,
        icon: "fas fa-user-graduate"
    },
    {
        id: "GHGAU-99812812",
        firstName: "Mike",
        lastName: "Mushroom",
        isDataSteward: true,
        icon: "fas fa-user-astronaut"
    }
]
