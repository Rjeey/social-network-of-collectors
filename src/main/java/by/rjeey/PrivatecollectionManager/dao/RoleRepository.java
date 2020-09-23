package by.rjeey.PrivatecollectionManager.dao;

import by.rjeey.PrivatecollectionManager.model.ERole;
import by.rjeey.PrivatecollectionManager.model.Role;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface RoleRepository extends JpaRepository<Role, Long> {
    Optional<Role> findByName(ERole name);
}
