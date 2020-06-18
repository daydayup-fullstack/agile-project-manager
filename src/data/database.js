// export const db_users = {
//   "user-scott": {
//     id: "user-scott",
//     firstName: "Scott",
//     lastName: "Wang",
//     email: "scotteau@gmail.com",
//     avatar:
//       "https://s3.amazonaws.com/profile_photos/4720159505425.uVij5QIkQPduW5RhPC9j_27x27.png",
//     colorIndex: 0,
//     starredProjects: ["project-04"],
//     privateProjects: ["project-00"],
//     workspaces: ["workspace-scott-personal", "workspace-daydayup-team"],
//   },
//   "user-lawrence": {
//     id: "user-lawrence",
//     firstName: "Lawrence",
//     lastName: "Liu",
//     avatar: "",
//     colorIndex: 4,
//     starredProjects: [],
//     workspaces: ["workspace-daydayup-team", "workspace-lawrence-personal"],
//   },
//   "user-ollie": {
//     id: "user-ollie",
//     firstName: "Ollie",
//     lastName: "Lee",
//     starredProjects: [],
//     avatar:
//       "https://s3.amazonaws.com/profile_photos/1171854711778417.pLuY5oITP89IeVzx0MJP_27x27.png",
//     colorIndex: 2,
//     workspaces: ["workspace-daydayup-team", "workspace-ollie-personal"],
//   },
//   "user-sarah": {
//     id: "user-sarah",
//     firstName: "Sarah",
//     lastName: "Xiao",
//     avatar: "",
//     colorIndex: 10,
//     starredProjects: [],
//     workspaces: ["workspace-daydayup-team", "workspace-sarah-personal"],
//   },
//   "user-silvia": {
//     id: "user-silvia",
//     firstName: "Silvia",
//     lastName: "Silvia",
//     avatar:
//       "https://s3.amazonaws.com/profile_photos/1171854712057265.7zSf934pYJpZhkV1kn6o_27x27.png",
//     colorIndex: 8,
//     starredProjects: [],
//     workspaces: ["workspace-daydayup-team", "workspace-silvia-personal"],
//   },
// };
//
// export const db_workspaces = {
//   "workspace-scott-personal": {
//     type: "personal",
//     projectsInOrder: ["project-00", "project-01", "project-04"],
//     userId: "user-scott",
//     members: ["user-scott"],
//   },
//   "workspace-lawrence-personal": {
//     type: "personal",
//     projectsInOrder: ["project-01"],
//     userId: "user-lawrence",
//     members: ["user-lawrence"],
//   },
//   "workspace-ollie-personal": {
//     type: "personal",
//     projectsInOrder: ["project-02"],
//     userId: "user-ollie",
//     members: ["user-ollie"],
//   },
//   "workspace-silvia-personal": {
//     type: "personal",
//     projectsInOrder: ["project-03"],
//     userId: "user-silvia",
//     members: ["user-silvia"],
//   },
//   "workspace-sarah-personal": {
//     type: "personal",
//     projectsInOrder: ["project-00"],
//     userId: "user-sarah",
//     members: ["user-sarah"],
//   },
//
//   "workspace-daydayup-team": {
//     type: "team",
//     projectsInOrder: ["project-03", "project-04"],
//     name: "daydayup",
//     description: "JR Academy full-stack class study group",
//     members: [
//       "user-scott",
//       "user-lawrence",
//       "user-ollie",
//       "user-sarah",
//       "user-silvia",
//     ],
//   },
// };
//
// export const db_projects = {
//   "project-00": {
//     id: "project-00",
//     name: "Sprint",
//     colorIndex: 0,
//     iconIndex: 0,
//     createdOn: 1556516450,
//     dueDate: null,
//     columnOrder: [],
//     activeUsers: []
//   },
//
//   "project-01": {
//     id: "project-01",
//     name: "Group Project",
//     colorIndex: 1,
//     iconIndex: 1,
//     createdOn: 1556516450,
//     dueDate: null,
//     columnOrder: [],
//     activeUsers: []
//   },
//   "project-02": {
//     id: "project-02",
//     name: "Database",
//     colorIndex: 2,
//     iconIndex: 2,
//     createdOn: 1556516450,
//     dueDate: null,
//     columnOrder: [],
//     activeUsers: []
//   },
//
//   "project-03": {
//     id: "project-03",
//     name: "Integration",
//     colorIndex: 3,
//     iconIndex: 3,
//     createdOn: 1556516450,
//     dueDate: null,
//     columnOrder: [],
//     activeUsers: []
//   },
//
//   "project-04": {
//     id: "project-04",
//     name: "Demo",
//     colorIndex: 4,
//     iconIndex: 4,
//     createdOn: 1556516450,
//     dueDate: null,
//     columnOrder: ["column-03", "column-01", "column-02"],
//     activeUsers: []
//   },
// };
//
// export const db_columns = {
//   "column-01": {
//     id: "column-01",
//     title: "Backlog",
//     taskIds: ["task-01"],
//     projectId: "project-04",
//   },
//   "column-02": {
//     id: "column-02",
//     title: "In progress",
//     taskIds: ["task-02"],
//     projectId: "project-04",
//   },
//   "column-03": {
//     id: "column-03",
//     title: "Done",
//     taskIds: ["task-03"],
//     projectId: "project-04",
//   },
// };
//
// export const db_tasks = {
//   "task-01": {
//     id: "task-01",
//     isCompleted: false,
//     name: "Project card - pm011",
//     createdOn: 1556516450,
//     description: "description",
//     authorId: "user-scott",
//     projectIds: ["project-04"],
//     dueDate: 1591401600,
//     attachments: [],
//     assignedUserId: "",
//     likedBy: ["user-silvia"],
//   },
//   "task-02": {
//     id: "task-02",
//     isCompleted: false,
//     name: "Personal website",
//     createdOn: 1556516450,
//     description: "description",
//     authorId: "user-scott",
//     projectIds: ["project-04"],
//     dueDate: null,
//     attachments: [
//       "https://media.wired.com/photos/5bd86f1cb0c71179a8e94cbd/16:9/w_1519,h_854,c_limit/macmini1.jpg",
//     ],
//     assignedUserId: "user-lawrence",
//     likedBy: ["user-scott", "user-ollie"],
//   },
//   "task-03": {
//     id: "task-03",
//     isCompleted: false,
//     name: "Weather App",
//     createdOn: 1556516450,
//     description: "description",
//     authorId: "user-scott",
//     projectIds: ["project-04"],
//     dueDate: 1556516450,
//     attachments: [
//       "https://media.wired.com/photos/5bd86f1cb0c71179a8e94cbd/16:9/w_1519,h_854,c_limit/macmini1.jpg",
//     ],
//     assignedUserId: "user-scott",
//     likedBy: [],
//   },
// };
//
// // export const db_stories = {
// //   "story-00": {
// //     what: "CREATED",
// //     who: "user-scott",
// //     when: 1556516450,
// //     taskId: "task-03",
// //   },
// // };
//
// // export const loadInitialData = (devId) => {
// //   const {
// //     id,
// //     firstName,
// //     lastName,
// //     email,
// //     colorIndex,
// //     avatar,
// //     privateProjects,
// //     starredProjects,
// //     workspaces,
// //   } = db_users[devId];
// //
// //   const defaultWorkspace = db_workspaces[workspaces[0]];
// //   const { type, projectsInOrder } = defaultWorkspace;
// //   const projects = defaultWorkspace.projectsInOrder.map(
// //     (id) => db_projects[id]
// //   );
// //
// //   return {
// //     user: {
// //       id,
// //       firstName,
// //       lastName,
// //       email,
// //       privateProjects,
// //       avatar,
// //       colorIndex,
// //       starredProjects,
// //       workspaces,
// //     },
// //     currentWorkspace: {
// //       id: workspaces[0],
// //       type,
// //       projectsInOrder,
// //       members: [...db_workspaces[workspaces[0]].members],
// //     },
// //     allProjects: [...projects],
// //   };
// // };
//
// export const team = {
//   id: "3d452d24",
//   name: "daydayup",
//   members: Object.values(db_users),
// };
