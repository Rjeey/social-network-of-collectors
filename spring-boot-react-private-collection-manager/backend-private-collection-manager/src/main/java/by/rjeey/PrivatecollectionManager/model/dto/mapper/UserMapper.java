package by.rjeey.PrivatecollectionManager.model.dto.mapper;

import by.rjeey.PrivatecollectionManager.model.User;
import by.rjeey.PrivatecollectionManager.model.dto.UserDto;
import org.mapstruct.Mapper;
import org.mapstruct.ReportingPolicy;
import org.mapstruct.factory.Mappers;

import java.util.List;

@Mapper(unmappedTargetPolicy = ReportingPolicy.IGNORE)
public interface UserMapper {

    UserMapper INSTANCE = Mappers.getMapper(UserMapper.class);

    UserDto userToUserDto(User user);
    User userDtoToUser(UserDto userDto);
    List<User> usersDtoToUsers(List<UserDto> usersDto);
    List<UserDto> usersToUsersDto(List<User> users);

}
