export type moduleIds = (
    "dashboard" |
    "explore" |
    "request" |
    "login"
)

export type changeModuleFunction = (newModule: moduleIds) => void;
