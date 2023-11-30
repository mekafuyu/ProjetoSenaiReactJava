package com.maycon.java_api_condominio.repository;

import java.util.List;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.mongodb.repository.Query;

import com.maycon.java_api_condominio.model.VisitanteModel;

public interface VisitanteRepository extends MongoRepository<VisitanteModel, String>{
    @Query("{'name': ?0}")
    List<VisitanteModel> findByName(String name);

    @Query("{'condominiumId': ?0}")
    List<VisitanteModel> findByCondoId(String id);

    @Query("{'cpf': ?0}")
    List<VisitanteModel> findByCpf(String cpf);
    
    @Query("{'residentId': ?0}")
    List<VisitanteModel> findByResidentId(String residentId);
}
