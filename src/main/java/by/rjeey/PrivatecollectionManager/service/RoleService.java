package by.rjeey.PrivatecollectionManager.service;

import by.rjeey.PrivatecollectionManager.dao.RoleRepository;
import by.rjeey.PrivatecollectionManager.model.ERole;
import by.rjeey.PrivatecollectionManager.model.Role;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class RoleService {

    @Autowired
    RoleRepository roleRepository;

    public Optional<Role> findByName(ERole name){
        return  roleRepository.findByName(name);
    }
}
