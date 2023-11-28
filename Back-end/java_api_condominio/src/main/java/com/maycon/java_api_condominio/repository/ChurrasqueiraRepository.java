package com.maycon.java_api_condominio.repository;

import java.util.List;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.mongodb.repository.Query;

import com.maycon.java_api_condominio.model.ChurrasqueiraModel;

public interface ChurrasqueiraRepository extends MongoRepository<ChurrasqueiraModel, String>{
    @Query("{'number': ?0, 'condominiumId': ?1}")
    List<ChurrasqueiraModel> findByNumberInCondo(String number, String condominiumId);

    @Query("{'condominiumId': ?0}")
    List<ChurrasqueiraModel> findByCondoId(String id);

}
