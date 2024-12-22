package esiea.virtualization.user.dto;

public record UserDetailsDTO(
        Long id,
        String firstname,
        String lastname,
        int age,
        String email,
        String login
) {
}
