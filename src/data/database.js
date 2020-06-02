export const db_users = {
  "user-scott": {
    id: "user-scott",
    firstName: "Scott",
    lastName: "Wang",
    email: "scotteau@gmail.com",
    avatar:
      "https://s3.amazonaws.com/profile_photos/4720159505425.uVij5QIkQPduW5RhPC9j_27x27.png",
    colorIndex: 0,
    starredProjects: ["project-00"],
    privateProjects: {},
    workspaces: ["workspace-scott-personal", "workspace-daydayup-team"],
  },
  "user-lawrence": {
    id: "user-lawrence",
    firstName: "Lawrence",
    lastName: "Liu",
    avatar: "some-avatar-url",
    colorIndex: 4,
    starredProjects: [],
    workspaces: ["workspace-daydayup-team", "workspace-lawrence-personal"],
  },
  "user-ollie": {
    id: "user-ollie",
    firstName: "Ollie",
    lastName: "Lee",
    starredProjects: [],
    avatar:
      "https://s3.amazonaws.com/profile_photos/1171854711778417.pLuY5oITP89IeVzx0MJP_27x27.png",
    colorIndex: 2,
    workspaces: ["workspace-daydayup-team", "workspace-ollie-personal"],
  },
  "user-sarah": {
    id: "user-sarah",
    firstName: "Sarah",
    lastName: "Xiao",
    avatar: "some-avatar-url",
    colorIndex: 10,
    starredProjects: [],
    workspaces: ["workspace-daydayup-team", "workspace-sarah-personal"],
  },
  "user-silvia": {
    id: "user-silvia",
    firstName: "Silvia",
    lastName: "Silvia",
    avatar:
      "https://s3.amazonaws.com/profile_photos/1171854712057265.7zSf934pYJpZhkV1kn6o_27x27.png",
    colorIndex: 8,
    starredProjects: [],
    workspaces: ["workspace-daydayup-team", "workspace-silvia-personal"],
  },
};

export const db_workspaces = {
  "workspace-scott-personal": {
    type: "personal",
    projectsInOrder: [
      "project-00",
      "project-01",
      "project-02",
      "project-03",
      "project-04",
    ],
    userId: "user-scott",
  },
  "workspace-lawrence-personal": {
    type: "personal",
    projectsInOrder: [
      "project-00",
      "project-01",
      "project-02",
      "project-03",
      "project-04",
    ],
    userId: "user-lawrence",
  },
  "workspace-ollie-personal": {
    type: "personal",
    projectsInOrder: [
      "project-00",
      "project-01",
      "project-02",
      "project-03",
      "project-04",
    ],
    userId: "user-ollie",
  },
  "workspace-silvia-personal": {
    type: "personal",
    projectsInOrder: [
      "project-00",
      "project-01",
      "project-02",
      "project-03",
      "project-04",
    ],
    userId: "user-silvia",
  },
  "workspace-sarah-personal": {
    type: "personal",
    projectsInOrder: [
      "project-00",
      "project-01",
      "project-02",
      "project-03",
      "project-04",
    ],
    userId: "user-sarah",
  },

  "workspace-daydayup-team": {
    type: "team",
    members: [],
    projectsInOrder: [
      "project-00",
      "project-01",
      "project-02",
      "project-03",
      "project-04",
    ],
    name: "daydayup",
    description: "JR Academy full-stack class study group",
  },
};

export const db_projects = {
  "project-00": {
    id: "project-00",
    name: "Sprint",
    colorIndex: 0,
    iconIndex: 0,
    createdOn: 1556516450,
    dueDate: null,
    columnOrder: [],
  },

  "project-01": {
    id: "project-01",
    name: "Group Project",
    colorIndex: 1,
    iconIndex: 1,
    createdOn: 1556516450,
    dueDate: null,
    columnOrder: [],
  },
  "project-02": {
    id: "project-02",
    name: "Database",
    colorIndex: 2,
    iconIndex: 2,
    createdOn: 1556516450,
    dueDate: null,
    columnOrder: [],
  },

  "project-03": {
    id: "project-03",
    name: "Integration",
    colorIndex: 3,
    iconIndex: 3,
    createdOn: 1556516450,
    dueDate: null,
    columnOrder: [],
  },

  "project-04": {
    id: "project-04",
    name: "Demo",
    colorIndex: 4,
    iconIndex: 4,
    createdOn: 1556516450,
    dueDate: null,
    columnOrder: ["column-03", "column-01", "column-02"],
  },
};

export const db_columns = {
  "column-01": {
    id: "column-01",
    title: "Backlog",
    taskIds: ["task-01"],
    projectId: "project-04",
  },
  "column-02": {
    id: "column-02",
    title: "In progress",
    taskIds: ["task-02"],
    projectId: "project-04",
  },
  "column-03": {
    id: "column-03",
    title: "Done",
    taskIds: ["task-03"],
    projectId: "project-04",
  },
};

export const db_tasks = {
  "task-01": {
    id: "task-01",
    isCompleted: false,
    name: "Project card - pm011",
    createdOn: 1556516450,
    description: "description",
    authorId: "user-scott",
    projectId: ["project-04"],
    dueDate: null,
    attachments: [],
    assignedUserIds: ["user-ollie"],
    stories: [],
  },
  "task-02": {
    id: "task-02",
    isCompleted: false,
    name: "Personal website",
    createdOn: 1556516450,
    description: "description",
    authorId: "user-scott",
    projectId: ["project-04"],
    dueDate: null,
    attachments: [
      "https://asana-user-private-us-east-1.s3.amazonaws.com/assets/1171779031466945/1177969216027112/577220a5c637b3aa9b51a554794b5735?X-Amz-Security-Token=IQoJb3JpZ2luX2VjELP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLWVhc3QtMSJIMEYCIQDQmQszM6wERIdo0ILozdZoVr10cGrijrrot0xVwlL0%2BwIhAI7yjVQjha%2BnTak8NCi3l3sHG%2FqpzaP6Ii22bkZI%2BoiLKrQDCBwQABoMNDAzNDgzNDQ2ODQwIgwJz3NGb01Y58Fs%2BpcqkQMJb6a05iER8xeZ09u59bzO9jy2UGVMNMtk538eXf4Yue9eb0CK2TLAEoR2WQHXauJUs1em3ere7zAKJV9jLQLiJyJRqXhJQ9l%2FzCwLVD%2Bj5hhVC5nGG59f2BgYtM%2FRKphhdk9naz%2FmOvu3RUVE43qCYypXehF2Cwo1g3wqc7BmBzqpZ%2FrZ1XTg5RI9ALz%2ByaoNBND2MG9AuGK6%2FztZ0dDbaIsDza64giNKQAVmHvqlBadB%2FSvhcg9xEdYY47fL13nrDYFKf8Su5ymmU5klTnVXVzgv3hwIPd2MFWWW0b%2BlRduF4lUzRWp6Zn6yktEDqHmNAtQgQsagHtKU1C8DWLW8YSomf59ofHeUHX5VXidXWQJC1QIAOQyX5UaNPRrNpfygFg7NA2AplaOm9M04bhSGsSVXq2DvnwB4FvahPc%2Bu4un%2FLny3MlYZAWZUUS%2FPOT5BCnqqI0kzaT%2FEDSCjp9UqEIUOBgTx8PU50dF3wr89rO9RbGF498rE4FDQJTKHB3oPJTqYgegWJukq3L%2BitNw3GTCFzMr2BTrqAYbMpPjeJ7CGAwmOvBxgAAqJwrPsun29aPdfMf4Se6qeWaK%2FHDW5DEtjaJLLeFjU8X%2B5OllmXMYwVyvZAysULCQ2xcdseezCGDVJdsXDKtxrSpbZ25KR79uGLzDQZ2DAOr85W8Et%2B3b9kAtBpZjTsmfGvLmxCZGPi%2BOSWHuyzTzhxYaFUq8feMR82OtKCubkJwmEBXqGBaBtYDxZwEc7GTEdGGoJZTeKamTUeSAPaTlhdCodAs7gO8mP%2Fk6Key9d4eR8W61KeOcQjeUDzIomNoTZ5sl5Tky4PENjQfRZMNPCRp3mu%2Bc0WcDsDw%3D%3D&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20200530T184229Z&X-Amz-SignedHeaders=host&X-Amz-Expires=120&X-Amz-Credential=ASIAV34L4ZY4EICNECCE%2F20200530%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=23fff9e95220c8967781451d70949118ba747bdf573377bd53d9de257005c5e6#_=_",
      "https://asana-user-private-us-east-1.s3.amazonaws.com/assets/1171779031466945/1177969216027113/93486ce618f840559d7fca0342c50f39?X-Amz-Security-Token=IQoJb3JpZ2luX2VjELP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLWVhc3QtMSJIMEYCIQDQmQszM6wERIdo0ILozdZoVr10cGrijrrot0xVwlL0%2BwIhAI7yjVQjha%2BnTak8NCi3l3sHG%2FqpzaP6Ii22bkZI%2BoiLKrQDCBwQABoMNDAzNDgzNDQ2ODQwIgwJz3NGb01Y58Fs%2BpcqkQMJb6a05iER8xeZ09u59bzO9jy2UGVMNMtk538eXf4Yue9eb0CK2TLAEoR2WQHXauJUs1em3ere7zAKJV9jLQLiJyJRqXhJQ9l%2FzCwLVD%2Bj5hhVC5nGG59f2BgYtM%2FRKphhdk9naz%2FmOvu3RUVE43qCYypXehF2Cwo1g3wqc7BmBzqpZ%2FrZ1XTg5RI9ALz%2ByaoNBND2MG9AuGK6%2FztZ0dDbaIsDza64giNKQAVmHvqlBadB%2FSvhcg9xEdYY47fL13nrDYFKf8Su5ymmU5klTnVXVzgv3hwIPd2MFWWW0b%2BlRduF4lUzRWp6Zn6yktEDqHmNAtQgQsagHtKU1C8DWLW8YSomf59ofHeUHX5VXidXWQJC1QIAOQyX5UaNPRrNpfygFg7NA2AplaOm9M04bhSGsSVXq2DvnwB4FvahPc%2Bu4un%2FLny3MlYZAWZUUS%2FPOT5BCnqqI0kzaT%2FEDSCjp9UqEIUOBgTx8PU50dF3wr89rO9RbGF498rE4FDQJTKHB3oPJTqYgegWJukq3L%2BitNw3GTCFzMr2BTrqAYbMpPjeJ7CGAwmOvBxgAAqJwrPsun29aPdfMf4Se6qeWaK%2FHDW5DEtjaJLLeFjU8X%2B5OllmXMYwVyvZAysULCQ2xcdseezCGDVJdsXDKtxrSpbZ25KR79uGLzDQZ2DAOr85W8Et%2B3b9kAtBpZjTsmfGvLmxCZGPi%2BOSWHuyzTzhxYaFUq8feMR82OtKCubkJwmEBXqGBaBtYDxZwEc7GTEdGGoJZTeKamTUeSAPaTlhdCodAs7gO8mP%2Fk6Key9d4eR8W61KeOcQjeUDzIomNoTZ5sl5Tky4PENjQfRZMNPCRp3mu%2Bc0WcDsDw%3D%3D&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20200530T184229Z&X-Amz-SignedHeaders=host&X-Amz-Expires=120&X-Amz-Credential=ASIAV34L4ZY4EICNECCE%2F20200530%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=31c22e3f773724683c008f811ceefa2c85fe74ede48f3a2ebf7bab41ac9c4942#_=_",
    ],
    assignedUserIds: ["user-lawrence"],
    stories: [],
  },
  "task-03": {
    id: "task-03",
    isCompleted: false,
    name: "Weather App",
    createdOn: 1556516450,
    description: "description",
    authorId: "user-scott",
    projectId: ["project-04"],
    dueDate: null,
    attachments: [
      "https://asana-user-private-us-east-1.s3.amazonaws.com/assets/1171779031466945/1176128238356164/1176133168294648.Nrk4T8cBxDLFh3orvfCo_height640.png?X-Amz-Security-Token=IQoJb3JpZ2luX2VjELP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLWVhc3QtMSJIMEYCIQDQmQszM6wERIdo0ILozdZoVr10cGrijrrot0xVwlL0%2BwIhAI7yjVQjha%2BnTak8NCi3l3sHG%2FqpzaP6Ii22bkZI%2BoiLKrQDCBwQABoMNDAzNDgzNDQ2ODQwIgwJz3NGb01Y58Fs%2BpcqkQMJb6a05iER8xeZ09u59bzO9jy2UGVMNMtk538eXf4Yue9eb0CK2TLAEoR2WQHXauJUs1em3ere7zAKJV9jLQLiJyJRqXhJQ9l%2FzCwLVD%2Bj5hhVC5nGG59f2BgYtM%2FRKphhdk9naz%2FmOvu3RUVE43qCYypXehF2Cwo1g3wqc7BmBzqpZ%2FrZ1XTg5RI9ALz%2ByaoNBND2MG9AuGK6%2FztZ0dDbaIsDza64giNKQAVmHvqlBadB%2FSvhcg9xEdYY47fL13nrDYFKf8Su5ymmU5klTnVXVzgv3hwIPd2MFWWW0b%2BlRduF4lUzRWp6Zn6yktEDqHmNAtQgQsagHtKU1C8DWLW8YSomf59ofHeUHX5VXidXWQJC1QIAOQyX5UaNPRrNpfygFg7NA2AplaOm9M04bhSGsSVXq2DvnwB4FvahPc%2Bu4un%2FLny3MlYZAWZUUS%2FPOT5BCnqqI0kzaT%2FEDSCjp9UqEIUOBgTx8PU50dF3wr89rO9RbGF498rE4FDQJTKHB3oPJTqYgegWJukq3L%2BitNw3GTCFzMr2BTrqAYbMpPjeJ7CGAwmOvBxgAAqJwrPsun29aPdfMf4Se6qeWaK%2FHDW5DEtjaJLLeFjU8X%2B5OllmXMYwVyvZAysULCQ2xcdseezCGDVJdsXDKtxrSpbZ25KR79uGLzDQZ2DAOr85W8Et%2B3b9kAtBpZjTsmfGvLmxCZGPi%2BOSWHuyzTzhxYaFUq8feMR82OtKCubkJwmEBXqGBaBtYDxZwEc7GTEdGGoJZTeKamTUeSAPaTlhdCodAs7gO8mP%2Fk6Key9d4eR8W61KeOcQjeUDzIomNoTZ5sl5Tky4PENjQfRZMNPCRp3mu%2Bc0WcDsDw%3D%3D&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20200530T184343Z&X-Amz-SignedHeaders=host&X-Amz-Expires=1800&X-Amz-Credential=ASIAV34L4ZY4EICNECCE%2F20200530%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=f944964b03dbaac55d68e5fcaa9db891320d06a7d3c8b098da00877933adaa97#_=_",
    ],
    assignedUserIds: ["user-scott"],
    stories: ["story-00"],
  },
};

export const db_stories = {
  "story-00": {
    what: "CREATED",
    who: "user-scott",
    when: 1556516450,
    taskId: "task-03",
  },
};

export const loadInitialData = (devId) => {
  const {
    id,
    firstName,
    lastName,
    email,
    colorIndex,
    avatar,
    privateProjects,
    starredProjects,
    workspaces,
  } = db_users[devId];

  const defaultWorkspace = db_workspaces[workspaces[0]];
  const { type, projectsInOrder } = defaultWorkspace;

  return {
    user: {
      id,
      firstName,
      lastName,
      email,
      privateProjects,
      avatar,
      colorIndex,
      starredProjects,
      workspaces,
    },
    currentWorkspace: {
      id: workspaces[0],
      type,
      projectsInOrder,
      projects: { ...db_projects },
    },
  };
};
