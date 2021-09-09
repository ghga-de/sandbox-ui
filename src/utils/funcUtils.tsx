import { users } from "../data/users";
import { userModel } from "../dataModels/users";

// a synchronous sleep fucntion just for testing:
export const sleep = (secs: number) => {
    secs = (+new Date()) + secs * 1000;
    while ((+new Date()) < secs);
};

export const bytesToGB = (bytes: number) => (
    (bytes/10**9).toFixed(2)
);

export const getCurrentUser: () => (userModel|undefined) = () => {
    const userId = localStorage.getItem("currentUser");
    
    if (userId) {
        for (const usr of users){
            if (usr.id === userId){
                return usr
            }
        }
    }

    return undefined;
};

export const loginUser = (userId: string) => {
    localStorage.setItem("currentUser", userId);
    window.location.reload();
};

export const logout = () => {
    localStorage.removeItem("currentUser");
    window.location.reload();
};
