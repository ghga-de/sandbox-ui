// This module contains hardcoded metadata on users
// Later this will be served by the backend

import { userModel } from "../dataModels/users"

export const users: userModel[] = [
    {
        id: "GHGAU-812092343",
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
