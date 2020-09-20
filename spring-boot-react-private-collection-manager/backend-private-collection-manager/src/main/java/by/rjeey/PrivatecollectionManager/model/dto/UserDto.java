package by.rjeey.PrivatecollectionManager.model.dto;

import by.rjeey.PrivatecollectionManager.model.Role;
import lombok.EqualsAndHashCode;
import lombok.Getter;
import lombok.Setter;

import javax.validation.constraints.NotBlank;
import java.util.Set;

@EqualsAndHashCode
@Getter
@Setter
public class UserDto {

    @NotBlank
    private Long id;
    @NotBlank
    private String username;
    @NotBlank
    private Set<Role> roles;
}
