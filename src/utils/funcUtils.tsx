// a synchronous sleep fucntion just for testing:
export const sleep = (secs: number) => {
    secs = (+new Date()) + secs * 1000;
    while ((+new Date()) < secs);
};
