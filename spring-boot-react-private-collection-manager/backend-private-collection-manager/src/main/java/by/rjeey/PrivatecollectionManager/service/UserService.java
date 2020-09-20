package by.rjeey.PrivatecollectionManager.service;

import by.rjeey.PrivatecollectionManager.dao.UserRepository;
import by.rjeey.PrivatecollectionManager.model.User;
import by.rjeey.PrivatecollectionManager.model.dto.UserDto;
import by.rjeey.PrivatecollectionManager.model.dto.mapper.UserMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;
import java.util.stream.StreamSupport;

@Service
public class UserService {

    @Autowired
    UserRepository userRepository;

    public List<UserDto> getUsers() {
        return UserMapper.INSTANCE.usersToUsersDto(StreamSupport
                .stream(userRepository.findAll().spliterator(), false)
                .collect(Collectors.toList()));
    }


    public void createUser(User user) {
        userRepository.save(user);
    }

    public void deleteUser(Long id) {
        userRepository.deleteById(id);
    }

    public boolean existsById(Long id) {
        return userRepository.existsById(id);
    }

    public boolean existsByUsername(String username) {
        return userRepository.existsByUsername(username);
    }

    public boolean existsByEmail(String email) {
        return userRepository.existsByEmail(email);
    }

}
