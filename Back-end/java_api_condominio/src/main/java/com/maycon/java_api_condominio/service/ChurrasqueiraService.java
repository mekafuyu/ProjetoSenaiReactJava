package com.maycon.java_api_condominio.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.maycon.java_api_condominio.model.ChurrasqueiraModel;
import com.maycon.java_api_condominio.repository.ChurrasqueiraRepository;

@Service
public class ChurrasqueiraService {
    
    @Autowired
    private ChurrasqueiraRepository churrasqueiraRepository;

    public ChurrasqueiraModel save(ChurrasqueiraModel churrasqueiraModel)
    {
        return this.churrasqueiraRepository.save(churrasqueiraModel);
    }

    public void save(String id, String number, String condominiumId)
    {
        ChurrasqueiraModel newChurrasqueira = new ChurrasqueiraModel(id, number, condominiumId);
        this.churrasqueiraRepository.save(newChurrasqueira);
        return;
    }

    public void update(String id, ChurrasqueiraModel churrasqueiraModel)
    {
        churrasqueiraModel.setId(id);
        this.churrasqueiraRepository.save(churrasqueiraModel);
        return;
    }

    public List<ChurrasqueiraModel> findAll()
    {
        return (List<ChurrasqueiraModel>) this.churrasqueiraRepository.findAll();
    }

    public List<ChurrasqueiraModel> findByNumberInCondo(String number, String condominiumId)
    {
        return (List<ChurrasqueiraModel>) this.churrasqueiraRepository.findByNumberInCondo(number, condominiumId);
    }

    public List<ChurrasqueiraModel> findByCondoId(String id)
    {
        return (List<ChurrasqueiraModel>) this.churrasqueiraRepository.findByCondoId(id);
    }

    public void delete(String id)
    {
        this.churrasqueiraRepository.deleteById(id);
        return;
    }
}
