package com.maycon.java_api_condominio.repository;

import java.util.List;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.mongodb.repository.Query;

import com.maycon.java_api_condominio.model.CondominiumModel;

public interface CondominiumRepository extends MongoRepository<CondominiumModel, String> {
    @Query("{'name': ?0")
    List<CondominiumModel> findByName(String name);
}
