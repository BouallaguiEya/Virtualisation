package esiea.virtualization.user.repositories;

import esiea.virtualization.user.entities.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface UserRepository extends JpaRepository<User, Long> {
    Optional<User> findFirstByLoginAndPassword(String login, String password);
}
