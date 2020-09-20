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
@CrossOrigin(origins = "*", maxAge = 3600)
@RestController
@RequestMapping(value = "/api/data")
public class UserController {

    @Autowired
    UserService userService;

    @Autowired
    public UserController(UserService userService){
        this.userService = userService;
    }

    @GetMapping("/users")
    @PreAuthorize("hasRole('ADMIN')")
    public List<UserDto> getUsers(){
        return userService.getUsers();
    }

    @PostMapping("/delete")
    @PreAuthorize("hasRole('ADMIN')")
    public ResponseEntity<?> deleteUser(@Valid @RequestBody UserDto userDto){
        if(userService.existsById(userDto.getId()))
            return ResponseEntity
                    .badRequest()
                    .body(new MessageResponse("Error: User is not found!"));
        userService.deleteUser(userDto.getId());
        return ResponseEntity
                .ok(new MessageResponse("User deleted successfully!"));
    }
}
