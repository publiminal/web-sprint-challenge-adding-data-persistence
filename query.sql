SELECT  task_id, 
        task_description,
        task_notes,
        task_completed,
        project_name,
        project_description
  FROM tasks 
    JOIN projects ON tasks.project_id = projects.project_id;  

