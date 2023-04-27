package com.api.todolist.service;

import com.api.todolist.model.Task;
import com.api.todolist.repository.TaskRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class TaskService {

    private final TaskRepository taskRepository;

    @Autowired
    public TaskService(TaskRepository taskRepository){
        this.taskRepository = taskRepository;
    }

    public List<Task> findAllTasks(){
        return taskRepository.findAll();
    }

    public Task createTask(Task task){
        return taskRepository.save(task);
    }

    public Task updateTask(Task task){
        return taskRepository.save(task);
    }

    public void deleteTask(Long taskId){
        taskRepository.deleteById(taskId);
    }

}
