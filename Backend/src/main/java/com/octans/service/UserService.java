package com.octans.service;

import com.octans.dao.UserDAO;
import com.octans.models.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/user")
public class UserService {

    //Dependency Injection
    @Autowired
    private UserDAO userDAO;


    //HTTP Methods
    @GetMapping("/list")
    public List<User> list(){
        return userDAO.findAll();
    }

    @PostMapping("/save")
    public User save(@RequestBody User user){
        userDAO.save(user);
        return user;
    }

    @DeleteMapping("/delete/{id}")
    public void delete(@PathVariable("id") Integer id){
        userDAO.deleteById(id);
    }

    @PutMapping("/update")
    public void update(@RequestBody User user){
        userDAO.save(user);
    }

}
