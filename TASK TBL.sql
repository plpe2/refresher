CREATE TABLE tasktbl (
    taskId INT PRIMARY KEY,
    taskTitle VARCHAR(255) NOT NULL,
    taskDec VARCHAR(255),
    status VARCHAR(50),
    timeAdded DATETIME DEFAULT CURRENT_TIMESTAMP(),
    timeFinished DATETIME,
    userId INT  
)

ALTER TABLE tasktbl 
ADD CONSTRAINT fk_task_user
FOREIGN KEY (userId)
REFERENCES  users (id)  