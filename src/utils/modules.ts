export type moduleIds = (
    "welcome" |
    "explore" |
    "request" |
    "login"
)

export type changeModuleFunction = (newModule: moduleIds) => void;
