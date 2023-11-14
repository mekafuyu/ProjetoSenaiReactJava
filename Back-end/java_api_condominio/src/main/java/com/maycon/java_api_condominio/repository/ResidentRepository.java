package com.maycon.java_api_condominio.repository;

import java.util.List;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.mongodb.repository.Query;

import com.maycon.java_api_condominio.model.ResidentModel;

public interface ResidentRepository extends MongoRepository<ResidentModel, String>{
    @Query("{'name': ?0}")
    List<ResidentModel> findByName(String name);

}
