package by.rjeey.PrivatecollectionManager.controller;

import by.rjeey.PrivatecollectionManager.model.MessageResponse;
import by.rjeey.PrivatecollectionManager.model.dto.UserDto;
import by.rjeey.PrivatecollectionManager.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.List;


@RestController
@RequestMapping(value = "/api/data")
@CrossOrigin(origins = "http://localhost:9000", maxAge = 3600)
public class UserController {

    @Autowired
    UserService userService;

    @Autowired
    public UserController(UserService userService) {
        this.userService = userService;
    }

    @GetMapping("/users")
    @PreAuthorize("hasRole('ADMIN')")
    public List<UserDto> getUsers() {
        return userService.getUsers();
    }

    @PostMapping("/delete/user")
    @PreAuthorize("hasRole('ADMIN')")
    public ResponseEntity<?> deleteUser(@Valid @RequestBody UserDto userDto) {
        if (!userService.existsById(userDto.getId()))
            return ResponseEntity
                    .badRequest()
                    .body(new MessageResponse("Error: User is not found!"));
        else {
            userService.deleteUser(userDto.getId());
            return ResponseEntity
                    .ok(new MessageResponse("User deleted successfully!"));
        }
    }

    @PostMapping("/delete/users")
    @PreAuthorize("hasRole('ADMIN')")
    public ResponseEntity<?> deleteUsers(@RequestBody List<UserDto> usersDto) {
        if (usersDto.isEmpty())
            return ResponseEntity
                    .badRequest()
                    .body(new MessageResponse("Error: List is empty!"));
        else {
            userService.deleteUsers(usersDto);
            return ResponseEntity
                    .ok(new MessageResponse("Users deleted successfully!"));
        }
    }

    @PostMapping("/update/user")
    @PreAuthorize("hasRole('ADMIN')")
    public ResponseEntity<?> updateUser(@RequestBody UserDto userDto) {

        if (userDto != null) {
            userService.updateUser(userDto);
            return ResponseEntity.ok(new MessageResponse("User deleted successfully!"));
        } else
            return ResponseEntity
                    .badRequest()
                    .body(new MessageResponse("Error: user update is not successfully!"));
    }


}
