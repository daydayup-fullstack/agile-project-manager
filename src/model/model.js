export const project = {
    id: "project-43debfae",
    content: {
        name: "project-name",
        colorIndex: 6,
        createdOn: 1556516450,
        isStarred: false,
    },
    tasks: {
        "task-00b84b6f": {
            id: "task-00b84b6f",
            content: {
                name: "Take out the garbage",
                isCompleted: false,
                createdOn: 1557121250,
                dueDate: 1559108450,
                authorId: "user-c59d01b5",
                assignedUserIds: ["user-8ddb8913"],
            },
        },
        "task-0523c323": {
            id: "task-0523c323",
            content: {
                name: "Buy some milk",
                isCompleted: false,
                createdOn: 1556516450,
                dueDate: 1556526450,
                authorId: "user-c59d01b5",
                assignedUserIds: [],
            },
        },
        "task-e34e7918": {
            id: "task-e34e7918",
            content: {
                name: "Pay the electricity bill",
                isCompleted: false,
                createdOn: 1556516450,
                dueDate: 1559108450,
                authorId: "user-c59d01b5",
                assignedUserIds: ["user-8ddb8913", "user-85c7203c"],
            },
        },
        "task-70361c2a": {
            id: "task-70361c2a",
            content: {
                name: "Write more user stories",
                isCompleted: false,
                createdOn: 1556516450,
                dueDate: 1559108450,
                authorId: "user-85c7203c",
                assignedUserIds: ["user-8ddb8913"],
            },
        },
    },
    columns: {
        "column-5a41bf2e": {
            id: "column-5a41bf2e",
            title: "To Do",
            taskIds: [
                "task-00b84b6f",
                "task-0523c323",
                "task-e34e7918",
                "task-70361c2a",
            ],
        },
        "column-a39bf32f": {
            id: "column-a39bf32f",
            title: "Something Else",
            taskIds: [],
        },
        "column-9bbf7964": {
            id: "column-9bbf7964",
            title: "In progress",
            taskIds: [],
        },
    },
    columnOrder: ["column-5a41bf2e", "column-a39bf32f", "column-9bbf7964"],
};

export const projects = [
    {...project},
    {
        id: "project-e27109e3",
        content: {
            name: "project 3",
            colorIndex: 1,
            createdOn:1556516450,
            isStarred: true
        },
        tasks: {},
        columns: {},
        columnOrder: []
    },
    {
        id: "project-e0b3bcbd",
        content: {
            name: "project asana",
            colorIndex: 3,
            createdOn:1556516450,
            isStarred: true
        },
        tasks: {},
        columns: {},
        columnOrder: []
    },
    {
        id: "project-3117a529",
        content: {
            name: "Weather App",
            colorIndex: 0,
            createdOn:1556516450,
            isStarred: false
        },
        tasks: {},
        columns: {},
        columnOrder: []
    }
]
export const users = {
    "user-c8dc5864": {
        id: "user-c8dc5864",
        firstName: "Scott",
        lastName: "Wang",
        avatar:
            "https://s3.amazonaws.com/profile_photos/4720159505425.uVij5QIkQPduW5RhPC9j_27x27.png",
        colorIndex: 0,
    },
    "user-762825b6": {
        id: "user-762825b6",
        firstName: "Lawrence",
        lastName: "Liu",
        avatar: "some-avatar-url",
        colorIndex: 4,
    },
    "user-b803c8e6": {
        id: "user-b803c8e6",
        firstName: "Ollie",
        lastName: "Lee",
        avatar:
            "https://s3.amazonaws.com/profile_photos/1171854711778417.pLuY5oITP89IeVzx0MJP_27x27.png",
        colorIndex: 2,
    },
    "user-e1c540b7": {
        id: "user-e1c540b7",
        firstName: "Sarah",
        lastName: "Xiao",
        avatar: "some-avatar-url",
        colorIndex: 10,
    },
    "user-8ddb8913": {
        id: "user-8ddb8913",
        firstName: "Silvia",
        lastName: "Silvia",
        avatar:
            "https://s3.amazonaws.com/profile_photos/1171854712057265.7zSf934pYJpZhkV1kn6o_27x27.png",
        colorIndex: 8,
    },
};

export const colors = [
    "#cbd4db",
    "#E8384F",
    "#FD612C",
    "#FD9A00",
    "#EEC300",
    "#A4CF30",
    "#62D26F",
    "#37C5AB",
    "#20AAEA",
    "#4186E0",
    "#7A6FF0",
    "#AA62E3",
    "#E362E3",
    "#EA4E9D",
    "#FC91AD",
    "#8DA3A6",
];
