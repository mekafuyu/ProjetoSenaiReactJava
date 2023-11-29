package com.maycon.java_api_condominio.repository;

import java.util.List;
import java.util.Optional;

import org.springframework.data.domain.Example;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.mongodb.repository.Query;

import com.maycon.java_api_condominio.model.ResidentModel;

public interface ResidentRepository extends MongoRepository<ResidentModel, String>{
    @Query("{'name': ?0}")
    List<ResidentModel> findByName(String name);

    @Query("{'condominiumId': ?0}")
    List<ResidentModel> findByCondoId(String id);

    @Query("{'cpf': ?0}")
    List<ResidentModel> findByCpf(String cpf);
}
