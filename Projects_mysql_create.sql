CREATE TABLE `projects` (
	`project_id` INT NOT NULL AUTO_INCREMENT,
	`project_name` varchar(128) NOT NULL UNIQUE,
	`project_description` varchar(255),
	`project_completed` varchar(1) NOT NULL,
	PRIMARY KEY (`project_id`)
);

CREATE TABLE `resources` (
	`resource_id` INT NOT NULL AUTO_INCREMENT,
	`resource_name` varchar(128) NOT NULL UNIQUE,
	`resource_description` varchar(255),
	PRIMARY KEY (`resource_id`)
);

CREATE TABLE `task` (
	`task_id` INT NOT NULL AUTO_INCREMENT,
	`task_description` varchar(255) NOT NULL,
	`task_notes` varchar(255),
	`task_completed` varchar(1) NOT NULL,
	`project_id` INT NOT NULL,
	PRIMARY KEY (`task_id`)
);

CREATE TABLE `projects_resources` (
	`projects_resources_id` INT NOT NULL AUTO_INCREMENT,
	`resource_id` INT(255) NOT NULL,
	`project_id` INT(255) NOT NULL,
	PRIMARY KEY (`projects_resources_id`)
);

ALTER TABLE `task` ADD CONSTRAINT `task_fk0` FOREIGN KEY (`project_id`) REFERENCES `projects`(`project_id`);

ALTER TABLE `projects_resources` ADD CONSTRAINT `projects_resources_fk0` FOREIGN KEY (`resource_id`) REFERENCES `resources`(`resource_id`);

ALTER TABLE `projects_resources` ADD CONSTRAINT `projects_resources_fk1` FOREIGN KEY (`project_id`) REFERENCES `projects`(`project_id`);





