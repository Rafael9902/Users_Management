package com.octans.dao;

import com.octans.models.User;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface UserDAO extends JpaRepository<User, Integer> {

    public List<User> findByNombreContaining(String name);

}
