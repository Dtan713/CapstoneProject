package com.headsortails.backend.config;

import com.fasterxml.jackson.core.type.TypeReference;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.headsortails.backend.common.HeadsRepository;
import com.headsortails.backend.common.RolesRepository;
import com.headsortails.backend.common.UserRepository;
import com.headsortails.backend.model.Heads;
import com.headsortails.backend.model.MyAppUser;
import com.headsortails.backend.model.Roles;
import org.slf4j.Logger;

import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Configuration;

import java.io.IOException;
import java.io.InputStream;
import java.util.List;

@Configuration
public class RunJsonDataLoader implements CommandLineRunner {

    private final Logger logger = org.slf4j.LoggerFactory.getLogger(RunJsonDataLoader.class);
    private final HeadsRepository headsRepository;
    private final UserRepository userRepository;
    private final RolesRepository rolesRepository;
    private final ObjectMapper objectMapper;

    public RunJsonDataLoader(HeadsRepository headsRepository, UserRepository userRepository, RolesRepository rolesRepository, ObjectMapper objectMapper) {
        this.headsRepository = headsRepository;
        this.userRepository = userRepository;
        this.rolesRepository = rolesRepository;
        this.objectMapper = objectMapper;
    }

    @Override
    public void run(String... args) throws Exception {
        loadUserData();
        loadHeadData();
        loadRoleData();


    }

    private void loadHeadData() {
        if (headsRepository.count() == 0) {
            try (InputStream inputStream = getClass().getResourceAsStream("/data/heads.json")) {
                List<Heads> heads = objectMapper.readValue(inputStream, new TypeReference<List<Heads>>() {});
                logger.info("Heads loaded from JSON file: {}", heads);
                headsRepository.saveAll(heads);
            } catch (IOException e) {
                throw new RuntimeException("Unable to load data from JSON file", e);
            }
        } else {
            logger.info("Heads already loaded");
        }
    }

    private void loadUserData() {
        if (userRepository.count() == 0) {
            try (InputStream inputStream = getClass().getResourceAsStream("/data/users.json")) {
                List<MyAppUser> myAppUsers = objectMapper.readValue(inputStream, new TypeReference<List<MyAppUser>>() {});
                logger.info("Users loaded from JSON file: {}", myAppUsers);
                userRepository.saveAll(myAppUsers);
            } catch (IOException e) {
                throw new RuntimeException("Unable to load data from JSON file", e);
            }
        } else {
            logger.info("User data already loaded");
        }
    }

    private void loadRoleData() {
        if (rolesRepository.count() == 0) {
            try (InputStream inputStream = getClass().getResourceAsStream("/data/roles.json")) {
                List<Roles> roles = objectMapper.readValue(inputStream, new TypeReference<List<Roles>>() {});
                logger.info("Roles loaded from JSON file: {}", roles);
                rolesRepository.saveAll(roles);
            } catch (IOException e) {
                throw new RuntimeException("Unable to load data from JSON file", e);
            }
        } else {
            logger.info("Roles data already loaded");
        }
    }
}


