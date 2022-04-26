import icons from './icons'

const menuLinks = [
    {
        link: "/",
        text: "Dashboard",
        icon: icons.dashboard
    },
    {
        heading: "Applications",
        link: "/applications",
        text: "Applications",
        icon: icons.applications,
        submenu: [
            {
                link: "/applications/form",
                text: "Form",
                icon: icons.applicationForm
            }
        ]
    },
    {
        heading: "Reports",
        link: "/reports",
        text: "Signing Sheet",
        icon: icons.reports,
        submenu: [
            {
                link: "/applications/form",
                text: "Init Docs Sheet",
                icon: icons.reports
            },
            {
                link: "/applications/form",
                text: "Quote Sheet",
                icon: icons.reports
            },
            {
                link: "/applications/form",
                text: "Funding Sheet",
                icon: icons.reports
            },
            {
                link: "/applications/form",
                text: "Harvey Sheet",
                icon: icons.reports
            },
            {
                link: "/applications/form",
                text: "KSH Sheet",
                icon: icons.reports
            }
        ]
    },
    {
        heading: "Admin",
        link: "/users",
        text: "Users",
        icon: icons.users,
        submenu: [
            {
                link: "/user/roles",
                text: "Roles",
                icon: icons.roles
            },
        ]
    },
]

export {
    menuLinks
};