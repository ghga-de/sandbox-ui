export type moduleIds = (
    "welcome" |
    "browse" |
    "request" |
    "login"
)

export type changeModuleFunction = (newModule: moduleIds) => void;
