package esiea.virtualization.user;

import esiea.virtualization.user.dto.UserDetailsDTO;
import esiea.virtualization.user.dto.UserLoginDTO;
import esiea.virtualization.user.entities.User;
import esiea.virtualization.user.services.UserService;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.function.Function;

@RestController
@RequestMapping("users")
public class UserController {
    private final UserService userService;

    public UserController(UserService userService) {
        this.userService = userService;
    }

    @GetMapping
    List<UserDetailsDTO> findAll() {
        return userService.findAll()
                .stream()
                .map(mapToDTO()
                )
                .toList();
    }

    @PostMapping
    UserDetailsDTO addUser(@RequestBody User user) {
        return mapToDTO().apply(userService.save(user));
    }

    @GetMapping("{id}")
    UserDetailsDTO find(@PathVariable Long id) {
        return mapToDTO().apply(userService.findById(id));
    }

    @DeleteMapping("{id}")
    List<UserDetailsDTO> delete(@PathVariable Long id) {
        return userService.delete(id)
                .stream()
                .map(mapToDTO()
                )
                .toList();
    }

    @PostMapping("login")
    UserDetailsDTO login(@RequestBody UserLoginDTO login) {
        System.out.println(login.login());
        System.out.println(login.pwd());
        return mapToDTO().apply(userService.findFirstByLoginAndPassword(login.login(), login.pwd()));
    }

    private static Function<User, UserDetailsDTO> mapToDTO() {
        return user -> new UserDetailsDTO(
                user.getId(),
                user.getFirstname(),
                user.getLastname(),
                user.getAge(),
                user.getEmail(),
                user.getLogin());
    }
}
