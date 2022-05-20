CREATE TABLE projects (
	project_id integer PRIMARY KEY AUTOINCREMENT,
	project_name varchar,
	project_description varchar,
	project_completed varchar
);

CREATE TABLE resources (
	resource_id integer PRIMARY KEY AUTOINCREMENT,
	resource_name varchar,
	resource_description varchar
);

CREATE TABLE task (
	task_id integer PRIMARY KEY AUTOINCREMENT,
	task_description varchar,
	task_notes varchar,
	task_completed varchar,
	project_id integer
);

CREATE TABLE projects_resources (
	projects_resources_id integer PRIMARY KEY AUTOINCREMENT,
	resource_id integer,
	project_id integer
);





