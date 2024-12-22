package esiea.virtualization.user.services;

import esiea.virtualization.user.entities.User;
import esiea.virtualization.user.repositories.UserRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class UserService {
    private final UserRepository userRepository;

    public UserService(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    public List<User> findAll() {
        return userRepository.findAll();
    }

    public User findById(Long id) {
        return userRepository.findById(id).orElseThrow();
    }

    public List<User> delete(Long id) {
        userRepository.deleteById(id);
        return userRepository.findAll();
    }

    public User save(User userToSave) {
        return userRepository.save(userToSave);
    }

    public User findFirstByLoginAndPassword(String login, String pwd) {
        return userRepository.findFirstByLoginAndPassword(login, pwd).orElseThrow();
    }
}
