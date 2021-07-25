export type moduleIds = (
    "welcome" |
    "browse" |
    "request" |
    "access" |
    "login"
)

export type changeModuleFunction = (newModule: moduleIds) => void;
