package com.maycon.java_api_condominio.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.maycon.java_api_condominio.model.ChurrasqueiraModel;
import com.maycon.java_api_condominio.repository.ChurrasqueiraRepository;

@Service
public class ChurrasqueiraService {
    
    @Autowired
    private ChurrasqueiraRepository ChurrasqueiraRepository;

    public ChurrasqueiraModel save(ChurrasqueiraModel ChurrasqueiraModel)
    {
        return this.ChurrasqueiraRepository.save(ChurrasqueiraModel);
    }

    public void save(String id, String number, String condominiumId)
    {
        ChurrasqueiraModel newChurrasqueira = new ChurrasqueiraModel(id, number, condominiumId);
        this.ChurrasqueiraRepository.save(newChurrasqueira);
        return;
    }

    public List<ChurrasqueiraModel> findAll()
    {
        return (List<ChurrasqueiraModel>) this.ChurrasqueiraRepository.findAll();
    }

    public List<ChurrasqueiraModel> findByNumberInCondo(String number, String condominiumId)
    {
        return (List<ChurrasqueiraModel>) this.ChurrasqueiraRepository.findByNumberInCondo(number, condominiumId);
    }

    public List<ChurrasqueiraModel> findByCondoId(String id)
    {
        return (List<ChurrasqueiraModel>) this.ChurrasqueiraRepository.findByCondoId(id);
    }

    public void delete(String id)
    {
        this.ChurrasqueiraRepository.deleteById(id);
        return;
    }
}
