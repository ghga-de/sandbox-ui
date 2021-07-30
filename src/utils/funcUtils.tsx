// a synchronous sleep fucntion just for testing:
export const sleep = (secs: number) => {
    secs = (+new Date()) + secs * 1000;
    while ((+new Date()) < secs);
};

export const bytesToGB = (bytes: number) => (
    (bytes/10^9).toFixed(1)
)
