--
-- File generated with SQLiteStudio v3.3.3 on Sat May 21 07:10:28 2022
--
-- Text encoding used: UTF-8
--
PRAGMA foreign_keys = off;
BEGIN TRANSACTION;

-- Table: projects
DROP TABLE IF EXISTS projects;

CREATE TABLE projects (
    project_id          INTEGER       PRIMARY KEY AUTOINCREMENT
                                      NOT NULL,
    project_name        VARCHAR (128) NOT NULL,
    project_description VARCHAR (255),
    project_completed   VARCHAR (1)   NOT NULL
);


-- Table: projects_resources
DROP TABLE IF EXISTS projects_resources;

CREATE TABLE projects_resources (
    projects_resources_id INTEGER       PRIMARY KEY AUTOINCREMENT
                                        NOT NULL,
    resource_id           INTEGER (255) REFERENCES resources (resource_id) 
                                        NOT NULL,
    project_id            INTEGER (255) REFERENCES projects (project_id) 
                                        NOT NULL
);


-- Table: resources
DROP TABLE IF EXISTS resources;

CREATE TABLE resources (
    resource_id          INTEGER PRIMARY KEY AUTOINCREMENT
                                 NOT NULL,
    resource_name        VARCHAR NOT NULL
                                 UNIQUE,
    resource_description VARCHAR
);


-- Table: tasks
DROP TABLE IF EXISTS tasks;

CREATE TABLE tasks (
    task_id          INTEGER       PRIMARY KEY AUTOINCREMENT
                                   NOT NULL,
    task_description VARCHAR (255) NOT NULL,
    task_notes       VARCHAR (255),
    task_completed   VARCHAR (1)   NOT NULL,
    project_id       INTEGER       REFERENCES projects (project_id) 
                                   NOT NULL
);


COMMIT TRANSACTION;
PRAGMA foreign_keys = on;
