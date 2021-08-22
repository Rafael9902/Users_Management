package com.octans.service;

import com.octans.dao.RoleDAO;
import com.octans.models.Role;
import com.octans.models.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
@RequestMapping("/role")
public class RoleService {

    //Dependency Injection
    @Autowired
    private RoleDAO roleDao;

    @GetMapping("/list")
    public List<Role> list(){
        return roleDao.findAll();
    }
}
